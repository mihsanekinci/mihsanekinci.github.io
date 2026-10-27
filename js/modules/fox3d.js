/**
 * Mehmet İhsan Ekinci — Real 3D WebGL Fox (Three.js) Controller
 * Manages 3D scene, procedural fox geometry, 360 drag rotation,
 * mouse look-at tracking, idle breathing/tail-wag, and click spin.
 */

export class Fox3DController {
    constructor(canvasId = 'foxCanvas3d') {
        this.canvas = document.getElementById(canvasId);
        this.isInitialized = false;
        this.isDragging = false;
        this.prevMouseX = 0;
        this.targetRotY = 0;
        this.targetHeadX = 0;
        this.targetHeadY = 0;
        this.spinVelocity = 0;
    }

    init() {
        if (!this.canvas || typeof window.THREE === 'undefined') {
            return;
        }

        const THREE = window.THREE;
        const width = this.canvas.clientWidth || 180;
        const height = this.canvas.clientHeight || 180;

        // 1. Scene & Camera
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        this.camera.position.set(0, 1.25, 4.8);

        // 2. Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 3. Lighting
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
        this.scene.add(this.ambientLight);

        this.dirLight = new THREE.DirectionalLight(0xffffff, 0.95);
        this.dirLight.position.set(4, 6, 4);
        this.scene.add(this.dirLight);

        this.orangeRim = new THREE.PointLight(0xf97316, 0.7, 10);
        this.orangeRim.position.set(-3, 2, 2);
        this.scene.add(this.orangeRim);

        // 4. Model Construction
        this.foxGroup = new THREE.Group();
        this.scene.add(this.foxGroup);

        this.buildFox(THREE);

        // 5. Interaction Listeners
        this.bindEvents();

        // 6. Animation Loop
        this.clock = new THREE.Clock();
        this.animate = this.animate.bind(this);
        this.animate();

        this.isInitialized = true;
    }

    buildFox(THREE) {
        // Materials
        const orangeMat = new THREE.MeshLambertMaterial({ color: 0xd85025 });
        const whiteMat = new THREE.MeshLambertMaterial({ color: 0xf4f4f5 });
        const blackMat = new THREE.MeshLambertMaterial({ color: 0x141416 });
        const earInnerMat = new THREE.MeshLambertMaterial({ color: 0xfde68a });

        // Body
        const bodyGeo = new THREE.CylinderGeometry(0.55, 0.75, 1.3, 10);
        this.body = new THREE.Mesh(bodyGeo, orangeMat);
        this.body.position.y = 0.65;
        this.foxGroup.add(this.body);

        // Chest white patch
        const chestGeo = new THREE.CylinderGeometry(0.48, 0.62, 0.85, 10, 1, false, Math.PI * 0.25, Math.PI * 0.5);
        const chest = new THREE.Mesh(chestGeo, whiteMat);
        chest.position.set(0, 0.75, 0.18);
        this.foxGroup.add(chest);

        // Head Group (for independent look-at rotation)
        this.headGroup = new THREE.Group();
        this.headGroup.position.set(0, 1.45, 0.15);
        this.foxGroup.add(this.headGroup);

        // Head base
        const headGeo = new THREE.SphereGeometry(0.72, 12, 10);
        headGeo.scale(1.2, 0.9, 0.95);
        const head = new THREE.Mesh(headGeo, orangeMat);
        this.headGroup.add(head);

        // White Muzzle / Cheeks
        const muzzleGeo = new THREE.ConeGeometry(0.68, 0.75, 10);
        muzzleGeo.rotateX(Math.PI / 2);
        const muzzle = new THREE.Mesh(muzzleGeo, whiteMat);
        muzzle.position.set(0, -0.15, 0.65);
        this.headGroup.add(muzzle);

        // Nose
        const noseGeo = new THREE.SphereGeometry(0.12, 8, 8);
        const nose = new THREE.Mesh(noseGeo, blackMat);
        nose.position.set(0, -0.05, 1.05);
        this.headGroup.add(nose);

        // Eyes
        const eyeGeo = new THREE.SphereGeometry(0.09, 8, 8);
        const leftEye = new THREE.Mesh(eyeGeo, blackMat);
        leftEye.position.set(-0.35, 0.08, 0.68);
        this.headGroup.add(leftEye);

        const rightEye = new THREE.Mesh(eyeGeo, blackMat);
        rightEye.position.set(0.35, 0.08, 0.68);
        this.headGroup.add(rightEye);

        // Ears
        const createEar = (x, rotZ) => {
            const earG = new THREE.Group();
            const outerGeo = new THREE.ConeGeometry(0.28, 0.65, 6);
            const outer = new THREE.Mesh(outerGeo, orangeMat);
            earG.add(outer);

            const innerGeo = new THREE.ConeGeometry(0.18, 0.45, 5);
            const inner = new THREE.Mesh(innerGeo, earInnerMat);
            inner.position.set(0, -0.05, 0.08);
            earG.add(inner);

            earG.position.set(x, 0.72, 0);
            earG.rotation.z = rotZ;
            return earG;
        };

        this.headGroup.add(createEar(-0.42, 0.25));
        this.headGroup.add(createEar(0.42, -0.25));

        // Tail
        this.tailGroup = new THREE.Group();
        this.tailGroup.position.set(0, 0.25, -0.6);
        this.foxGroup.add(this.tailGroup);

        const tailBaseGeo = new THREE.ConeGeometry(0.4, 0.9, 10);
        tailBaseGeo.rotateX(-Math.PI * 0.35);
        const tailBase = new THREE.Mesh(tailBaseGeo, orangeMat);
        this.tailGroup.add(tailBase);

        const tailTipGeo = new THREE.ConeGeometry(0.35, 0.6, 10);
        tailTipGeo.rotateX(-Math.PI * 0.35);
        const tailTip = new THREE.Mesh(tailTipGeo, whiteMat);
        tailTip.position.set(0, 0.45, -0.65);
        this.tailGroup.add(tailTip);

        // Front Paws
        const pawGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.6, 8);
        const leftPaw = new THREE.Mesh(pawGeo, orangeMat);
        leftPaw.position.set(-0.28, 0.3, 0.55);
        this.foxGroup.add(leftPaw);

        const rightPaw = new THREE.Mesh(pawGeo, orangeMat);
        rightPaw.position.set(0.28, 0.3, 0.55);
        this.foxGroup.add(rightPaw);
    }

    bindEvents() {
        // Drag rotation
        this.canvas.addEventListener('pointerdown', (e) => {
            this.isDragging = true;
            this.prevMouseX = e.clientX;
        });

        window.addEventListener('pointerup', () => {
            this.isDragging = false;
        });

        window.addEventListener('pointermove', (e) => {
            if (!this.canvas) return;
            const rect = this.canvas.getBoundingClientRect();
            const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

            if (this.isDragging) {
                const delta = e.clientX - this.prevMouseX;
                this.foxGroup.rotation.y += delta * 0.018;
                this.prevMouseX = e.clientX;
            } else {
                // Smooth head look-at
                this.targetHeadY = Math.max(-0.6, Math.min(0.6, mouseX * 0.5));
                this.targetHeadX = Math.max(-0.4, Math.min(0.4, -mouseY * 0.35));
            }
        });

        // ResizeObserver
        if (window.ResizeObserver) {
            const ro = new ResizeObserver(() => {
                this.handleResize();
            });
            ro.observe(this.canvas);
        }
    }

    triggerSpin() {
        this.spinVelocity = 0.28;
    }

    handleResize() {
        if (!this.canvas || !this.renderer || !this.camera) return;
        const width = this.canvas.clientWidth || 180;
        const height = this.canvas.clientHeight || 180;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    animate() {
        requestAnimationFrame(this.animate);
        if (!this.renderer || !this.scene || !this.camera) return;

        const t = this.clock.getElapsedTime();

        // Idle breathing
        if (this.body) {
            this.body.scale.set(
                1 + Math.sin(t * 2) * 0.02,
                1 + Math.cos(t * 2) * 0.02,
                1 + Math.sin(t * 2) * 0.02
            );
        }

        // Tail wag
        if (this.tailGroup) {
            this.tailGroup.rotation.y = Math.sin(t * 3.2) * 0.28;
            this.tailGroup.rotation.z = Math.cos(t * 2.4) * 0.12;
        }

        // Head look-at interpolation
        if (this.headGroup) {
            this.headGroup.rotation.y += (this.targetHeadY - this.headGroup.rotation.y) * 0.08;
            this.headGroup.rotation.x += (this.targetHeadX - this.headGroup.rotation.x) * 0.08;
        }

        // Spin physics when clicked
        if (this.spinVelocity > 0.005) {
            this.foxGroup.rotation.y += this.spinVelocity;
            this.spinVelocity *= 0.94;
        }

        this.renderer.render(this.scene, this.camera);
    }
}
