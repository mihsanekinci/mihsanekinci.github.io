/**
 * @fileoverview Kitsune (狐) Mühendislik Maskotu Animasyon ve Felsefe Fısıltısı Kontrolcüsü.
 * Single Responsibility: #mascotCard / #mascotSvgWrapper etkileşimlerini dinler,
 * tıklama/klavye tetiklemesinde .fox-bounce mikro-animasyonunu çalıştırır ve
 * #mascotSpeechBubble / #mascotSpeechText üzerinde aktif dildeki (TR / EN)
 * Japon felsefesi ilkelerini sırayla gösterir.
 */

const SPEECH_DURATION_MS = 3500;
const BOUNCE_DURATION_MS = 650;

export class MascotController {
    /**
     * @param {Object} siteDataOrConfig - siteData nesnesi veya { siteData, localizationManager, fox3d } yapılandırması
     * @param {import('./localizationManager.js').LocalizationManager} [localizationManagerArg] - Dil yöneticisi
     * @param {import('./fox3d.js').Fox3DController} [fox3dArg] - 3D WebGL Tilki kontrolcüsü
     */
    constructor(siteDataOrConfig, localizationManagerArg, fox3dArg) {
        if (
            siteDataOrConfig &&
            typeof siteDataOrConfig === 'object' &&
            'siteData' in siteDataOrConfig
        ) {
            this.siteData = siteDataOrConfig.siteData;
            this.localizationManager = siteDataOrConfig.localizationManager;
            this.fox3d = siteDataOrConfig.fox3d || fox3dArg;
        } else {
            this.siteData = siteDataOrConfig;
            this.localizationManager = localizationManagerArg;
            this.fox3d = fox3dArg;
        }

        this.quoteIndex = -1;
        /** @type {ReturnType<typeof setTimeout>|null} */
        this.speechTimerId = null;
        /** @type {ReturnType<typeof setTimeout>|null} */
        this.bounceTimerId = null;
    }

    /**
     * Maskot etkileşimlerini ve dil değişimi senkronizasyonunu başlatır.
     */
    init() {
        const mascotCard = document.querySelector('#mascotCard');
        const svgWrapper = document.querySelector('#mascotSvgWrapper');
        const triggerEl = mascotCard || svgWrapper;

        if (!triggerEl) {
            return;
        }

        if (!triggerEl.hasAttribute('tabindex')) {
            triggerEl.setAttribute('tabindex', '0');
        }
        if (!triggerEl.hasAttribute('role')) {
            triggerEl.setAttribute('role', 'button');
        }

        triggerEl.addEventListener('click', (event) => {
            event.preventDefault();
            this.triggerMascotInteraction(triggerEl, svgWrapper);
        });

        triggerEl.addEventListener('keydown', (event) => {
            const keyEvent = /** @type {KeyboardEvent} */ (event);
            if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
                keyEvent.preventDefault();
                this.triggerMascotInteraction(triggerEl, svgWrapper);
            }
        });

        if (
            this.localizationManager &&
            typeof this.localizationManager.onLanguageChange === 'function'
        ) {
            this.localizationManager.onLanguageChange((newLang) => {
                this.syncActiveBubbleLanguage(/** @type {'tr'|'en'} */ (newLang));
            });
        }
    }

    /**
     * Maskota tıklandığında zıplama animasyonunu (.fox-bounce) ve konuşma balonunu tetikler.
     *
     * @param {Element} triggerEl - #mascotCard veya ana tetikleyici eleman
     * @param {Element|null} svgWrapper - #mascotSvgWrapper elemanı
     */
    triggerMascotInteraction(triggerEl, svgWrapper) {
        const bounceTarget = svgWrapper || triggerEl;

        bounceTarget.classList.remove('fox-bounce');
        // Reflow tetikleyerek ardışık tıklamalarda animasyonun yeniden başlamasını sağla
        void /** @type {HTMLElement} */ (bounceTarget).offsetWidth;
        bounceTarget.classList.add('fox-bounce');
        triggerEl.classList.add('fox-bounce');

        const cleanupBounce = () => {
            bounceTarget.classList.remove('fox-bounce');
            triggerEl.classList.remove('fox-bounce');
        };

        bounceTarget.addEventListener('animationend', cleanupBounce, { once: true });

        if (this.bounceTimerId) {
            clearTimeout(this.bounceTimerId);
        }
        this.bounceTimerId = setTimeout(() => {
            cleanupBounce();
            this.bounceTimerId = null;
        }, BOUNCE_DURATION_MS);

        if (this.fox3d && typeof this.fox3d.triggerSpin === 'function') {
            this.fox3d.triggerSpin();
        }

        this.showNextQuote();
    }

    /**
     * Aktif dildeki bir sonraki felsefe fısıltısını #mascotSpeechBubble içinde gösterir
     * ve 3.5 saniye sonra otomatik kapatır.
     */
    showNextQuote() {
        const lang = this.getActiveLanguage();
        const quotes = this.getQuotesForLanguage(lang);

        if (!quotes.length) {
            return;
        }

        this.quoteIndex = (this.quoteIndex + 1) % quotes.length;
        const quoteText = quotes[this.quoteIndex];

        this.renderSpeechBubble(quoteText);
    }

    /**
     * Konuşma balonunu verilen metinle açar ve zamanlayıcıyı sıfırlar.
     *
     * @param {string} text - Gösterilecek felsefe mesajı
     */
    renderSpeechBubble(text) {
        const bubbleEl = document.querySelector('#mascotSpeechBubble');
        const textEl = document.querySelector('#mascotSpeechText');

        if (!bubbleEl) {
            return;
        }

        if (textEl) {
            textEl.textContent = text;
        } else {
            bubbleEl.textContent = text;
        }

        bubbleEl.classList.add('active');
        bubbleEl.setAttribute('aria-hidden', 'false');

        if (this.speechTimerId) {
            clearTimeout(this.speechTimerId);
        }

        this.speechTimerId = setTimeout(() => {
            bubbleEl.classList.remove('active');
            bubbleEl.setAttribute('aria-hidden', 'true');
            this.speechTimerId = null;
        }, SPEECH_DURATION_MS);
    }

    /**
     * Balon açıkken dil değiştirilirse gösterilen sözü yeni dile anında çevirir.
     *
     * @param {'tr'|'en'} newLang - Yeni aktif dil
     */
    syncActiveBubbleLanguage(newLang) {
        const bubbleEl = document.querySelector('#mascotSpeechBubble');
        if (!bubbleEl || !bubbleEl.classList.contains('active') || this.quoteIndex < 0) {
            return;
        }

        const quotes = this.getQuotesForLanguage(newLang);
        if (!quotes.length) {
            return;
        }

        const safeIndex = this.quoteIndex % quotes.length;
        const textEl = document.querySelector('#mascotSpeechText');
        if (textEl) {
            textEl.textContent = quotes[safeIndex];
        } else {
            bubbleEl.textContent = quotes[safeIndex];
        }
    }

    /**
     * Aktif dili döner.
     *
     * @returns {'tr'|'en'}
     */
    getActiveLanguage() {
        if (
            this.localizationManager &&
            typeof this.localizationManager.getCurrentLanguage === 'function'
        ) {
            return this.localizationManager.getCurrentLanguage();
        }
        return 'tr';
    }

    /**
     * Belirtilen dil için maskot sözleri dizisini döner.
     *
     * @param {'tr'|'en'} lang - Dil kodu
     * @returns {string[]}
     */
    getQuotesForLanguage(lang) {
        const quotesDict = this.siteData?.mascotQuotes;
        if (!quotesDict) {
            return [];
        }
        const list = quotesDict[lang] || quotesDict.tr;
        return Array.isArray(list) ? list : [];
    }
}
