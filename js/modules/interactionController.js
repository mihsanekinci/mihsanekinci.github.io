/**
 * @fileoverview Kullanıcı Etkileşimleri, Ethos Monografi Çekmecesi, Pano, Form ve Navigasyon Kontrolcüsü.
 * Single Responsibility: Ethos okuma çekmecesi (#ethosDrawer), e-posta kopyalama ve Toast bildirimi,
 * hızlı mesaj (mailto) oluşturucu, mobil navigasyon menüsü ve Scroll-Spy işlemlerini yönetir.
 */

export class InteractionController {
    /**
     * @param {Object} dependencies
     * @param {Object} dependencies.siteData - Merkezi portfolyo verisi
     * @param {import('./localizationManager.js').LocalizationManager} dependencies.localizationManager - Dil yöneticisi
     */
    constructor({ siteData, localizationManager }) {
        this.siteData = siteData;
        this.localizationManager = localizationManager;
        /** @type {ReturnType<typeof setTimeout>|null} */
        this.toastTimeoutId = null;
        /** @type {ReturnType<typeof setTimeout>|null} */
        this.highlightTimeoutId = null;
        /** @type {IntersectionObserver|null} */
        this.scrollSpyObserver = null;
    }

    /**
     * Tüm kullanıcı etkileşim dinleyicilerini başlatır.
     */
    init() {
        this.initCopyEmailButtons();
        this.initQuickContactForm();
        this.initMobileNavigation();
        this.initEthosDrawer();
        this.initScrollSpy();
    }

    /**
     * #openEthosDrawerBtn, .ethos-cell, #closeEthosDrawerBtn ve #ethosDrawerBackdrop
     * üzerinden Altı Japon İlkesi monografi çekmecesini yönetir.
     */
    initEthosDrawer() {
        const drawer = document.querySelector('#ethosDrawer');
        const backdrop = document.querySelector('#ethosDrawerBackdrop');
        const openBtn = document.querySelector('#openEthosDrawerBtn');
        const closeBtn = document.querySelector('#closeEthosDrawerBtn');
        const ethosGrid = document.querySelector('#ethosGrid');

        const openDrawer = (targetEthosId = null) => {
            if (!drawer) {
                return;
            }

            drawer.classList.add('active');
            drawer.setAttribute('aria-hidden', 'false');

            if (backdrop) {
                backdrop.classList.add('active');
                backdrop.setAttribute('aria-hidden', 'false');
            }

            document.body.style.overflow = 'hidden';

            // Varsa önceki vurgulamaları temizle
            drawer
                .querySelectorAll('.ethos-monograph-item.highlighted')
                .forEach((el) => el.classList.remove('highlighted'));

            if (targetEthosId) {
                const targetItem = drawer.querySelector(`#monograph-${targetEthosId}`);
                if (targetItem) {
                    targetItem.classList.add('highlighted');

                    requestAnimationFrame(() => {
                        targetItem.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    });

                    if (this.highlightTimeoutId) {
                        clearTimeout(this.highlightTimeoutId);
                    }
                    this.highlightTimeoutId = setTimeout(() => {
                        targetItem.classList.remove('highlighted');
                        this.highlightTimeoutId = null;
                    }, 3500);
                }
            } else {
                const drawerBody = drawer.querySelector('#ethosDrawerBody');
                if (drawerBody) {
                    drawerBody.scrollTop = 0;
                }
            }
        };

        const closeDrawer = () => {
            if (!drawer) {
                return;
            }

            drawer.classList.remove('active');
            drawer.setAttribute('aria-hidden', 'true');

            if (backdrop) {
                backdrop.classList.remove('active');
                backdrop.setAttribute('aria-hidden', 'true');
            }

            document.body.style.overflow = '';
        };

        if (openBtn) {
            openBtn.addEventListener('click', (event) => {
                event.preventDefault();
                openDrawer(null);
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', (event) => {
                event.preventDefault();
                closeDrawer();
            });
        }

        if (backdrop) {
            backdrop.addEventListener('click', () => {
                closeDrawer();
            });
        }

        // Event delegation: dil değişiminde yeniden render edilen .ethos-cell elemanlarını yakalar
        const gridRoot = ethosGrid || document;
        gridRoot.addEventListener('click', (event) => {
            const target = /** @type {HTMLElement|null} */ (event.target);
            if (!target) {
                return;
            }
            const cell = target.closest('.ethos-cell');
            if (!cell) {
                return;
            }
            const ethosId = cell.getAttribute('data-ethos-id');
            openDrawer(ethosId);
        });

        gridRoot.addEventListener('keydown', (event) => {
            const keyEvent = /** @type {KeyboardEvent} */ (event);
            if (keyEvent.key !== 'Enter' && keyEvent.key !== ' ') {
                return;
            }
            const target = /** @type {HTMLElement|null} */ (keyEvent.target);
            if (!target) {
                return;
            }
            const cell = target.closest('.ethos-cell');
            if (!cell) {
                return;
            }
            keyEvent.preventDefault();
            const ethosId = cell.getAttribute('data-ethos-id');
            openDrawer(ethosId);
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && drawer?.classList.contains('active')) {
                closeDrawer();
            }
        });
    }

    /**
     * #heroCopyEmailBtn ve .copy-email-btn butonlarına e-posta kopyalama davranışını bağlar.
     */
    initCopyEmailButtons() {
        const primaryEmail =
            this.siteData?.profile?.emailPrimary || 'ihsanekinci@marun.edu.tr';

        const buttonSet = new Set([
            ...document.querySelectorAll('.copy-email-btn'),
            ...document.querySelectorAll('#heroCopyEmailBtn')
        ]);

        buttonSet.forEach((btn) => {
            btn.addEventListener('click', async (event) => {
                event.preventDefault();
                const targetEmail =
                    btn.getAttribute('data-email')?.trim() || primaryEmail;

                const copied = await this.copyTextToClipboard(targetEmail);
                if (copied) {
                    const lang = this.localizationManager
                        ? this.localizationManager.getCurrentLanguage()
                        : 'tr';
                    const prefix = lang === 'en' ? 'Copied' : 'Kopyalandı';
                    this.showToast(`${prefix}: ${targetEmail} ✓`);
                }
            });
        });
    }

    /**
     * Metni panoya (clipboard) kopyalar; Clipboard API desteklenmiyorsa yedek yöntemi kullanır.
     *
     * @param {string} text - Kopyalanacak metin
     * @returns {Promise<boolean>} Başarı durumu
     */
    async copyTextToClipboard(text) {
        if (!text) {
            return false;
        }

        if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch {
                // Fallback yöntemine geç
            }
        }

        try {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            textarea.style.pointerEvents = 'none';
            document.body.appendChild(textarea);
            textarea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textarea);
            return success;
        } catch {
            return false;
        }
    }

    /**
     * #toastNotification bileşeninde geçici bildirim mesajı gösterir.
     *
     * @param {string} message - Gösterilecek bildirim metni
     * @param {number} [durationMs=3200] - Görünür kalma süresi (ms)
     */
    showToast(message, durationMs = 3200) {
        const toastEl = document.querySelector('#toastNotification');
        if (!toastEl) {
            return;
        }

        toastEl.textContent = message;
        toastEl.classList.add('show', 'visible', 'active');
        toastEl.setAttribute('aria-hidden', 'false');

        if (this.toastTimeoutId) {
            clearTimeout(this.toastTimeoutId);
        }

        this.toastTimeoutId = setTimeout(() => {
            toastEl.classList.remove('show', 'visible', 'active');
            toastEl.setAttribute('aria-hidden', 'true');
            this.toastTimeoutId = null;
        }, durationMs);
    }

    /**
     * #quickContactForm gönderildiğinde (#senderName, #messageSubject, #messageBody)
     * alanlarını okuyarak formatlanmış bir mailto: bağlantısı açar.
     */
    initQuickContactForm() {
        const form = /** @type {HTMLFormElement|null} */ (
            document.querySelector('#quickContactForm')
        );
        if (!form) {
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = /** @type {HTMLInputElement|null} */ (
                document.querySelector('#senderName')
            );
            const subjectSelect = /** @type {HTMLSelectElement|HTMLInputElement|null} */ (
                document.querySelector('#messageSubject')
            );
            const bodyTextarea = /** @type {HTMLTextAreaElement|null} */ (
                document.querySelector('#messageBody')
            );

            const senderName = nameInput ? nameInput.value.trim() : '';
            let subjectText = '';

            if (subjectSelect) {
                if ('options' in subjectSelect && subjectSelect.selectedIndex >= 0) {
                    subjectText =
                        subjectSelect.options[subjectSelect.selectedIndex].text.trim();
                } else {
                    subjectText = subjectSelect.value.trim();
                }
            }

            const messageBody = bodyTextarea ? bodyTextarea.value.trim() : '';
            const recipient =
                this.siteData?.profile?.emailPrimary || 'ihsanekinci@marun.edu.tr';

            const lang = this.localizationManager
                ? this.localizationManager.getCurrentLanguage()
                : 'tr';

            const defaultSubject =
                lang === 'en' ? 'Portfolio Correspondence' : 'Portfolyo İletişim';
            const composedSubject = senderName
                ? `[${subjectText || defaultSubject}] — ${senderName}`
                : subjectText || defaultSubject;

            const senderHeader =
                lang === 'en'
                    ? `From: ${senderName || 'Visitor'}`
                    : `Gönderen: ${senderName || 'Ziyaretçi'}`;

            const composedBody = `${messageBody}\n\n---\n${senderHeader}`;

            const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
                composedSubject
            )}&body=${encodeURIComponent(composedBody)}`;

            window.location.href = mailtoUrl;
        });
    }

    /**
     * #mobileMenuBtn ve #navLinks elemanları üzerinden mobil menü açma/kapama kontrolünü sağlar.
     */
    initMobileNavigation() {
        const mobileMenuBtn = document.querySelector('#mobileMenuBtn');
        const navLinks = document.querySelector('#navLinks');

        if (!mobileMenuBtn || !navLinks) {
            return;
        }

        const closeMenu = () => {
            navLinks.classList.remove('active', 'open');
            mobileMenuBtn.classList.remove('active', 'open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        };

        const toggleMenu = () => {
            const isOpen = !navLinks.classList.contains('active');
            navLinks.classList.toggle('active', isOpen);
            navLinks.classList.toggle('open', isOpen);
            mobileMenuBtn.classList.toggle('active', isOpen);
            mobileMenuBtn.classList.toggle('open', isOpen);
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        };

        mobileMenuBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleMenu();
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        });

        document.addEventListener('click', (event) => {
            const target = /** @type {Node|null} */ (event.target);
            if (
                target &&
                !navLinks.contains(target) &&
                !mobileMenuBtn.contains(target)
            ) {
                closeMenu();
            }
        });
    }

    /**
     * IntersectionObserver ile aktif sayfa bölümünü takip eder ve ilgili .nav-link elemanına
     * .active sınıfını uygular (Scroll-Spy).
     */
    initScrollSpy() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

        if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) {
            return;
        }

        const setActiveLink = (sectionId) => {
            navLinks.forEach((link) => {
                const href = link.getAttribute('href');
                if (href === `#${sectionId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        };

        this.scrollSpyObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        setActiveLink(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-25% 0px -60% 0px',
                threshold: 0
            }
        );

        sections.forEach((section) => {
            this.scrollSpyObserver?.observe(section);
        });
    }
}
