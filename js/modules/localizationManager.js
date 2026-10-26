/**
 * @fileoverview Çift Dil (TR / EN) ve Yerelleştirme (i18n) Motoru.
 * Single Responsibility: Aktif dili yönetir, nokta notasyonuyla (dot-notation) DOM üzerindeki
 * [data-i18n] ve [data-i18n-placeholder] elemanlarını günceller ve dil değişimlerinde
 * abone olan bileşenleri Observer deseniyle bilgilendirir (Open/Closed Principle).
 */

const STORAGE_KEY = 'mie_lang';
const DEFAULT_LANG = 'tr';
const SUPPORTED_LANGS = ['tr', 'en'];

export class LocalizationManager {
    /**
     * @param {Object} i18nDictionary - siteData.i18n sözlük nesnesi ({ tr: {...}, en: {...} })
     * @param {Object} [options]
     * @param {string} [options.toggleBtnSelector='#langToggleBtn'] - Dil değiştirme butonu seçicisi
     * @param {string} [options.labelSelector='#langLabel'] - Dil etiketi seçicisi
     */
    constructor(
        i18nDictionary,
        {
            toggleBtnSelector = '#langToggleBtn',
            labelSelector = '#langLabel'
        } = {}
    ) {
        this.dictionary = i18nDictionary || {};
        this.toggleBtnSelector = toggleBtnSelector;
        this.labelSelector = labelSelector;
        /** @type {Set<function(string): void>} */
        this.subscribers = new Set();
        this.currentLang = this.readSavedLanguage();
    }

    /**
     * Yerelleştirme yöneticisini başlatır, mevcut dili uygular ve olay dinleyicilerini bağlar.
     */
    init() {
        this.applyLanguage(this.currentLang, { notify: false });
        this.bindEvents();
    }

    /**
     * localStorage'dan kayıtlı dili okur; yoksa varsayılan olarak 'tr' döner.
     *
     * @returns {'tr'|'en'}
     */
    readSavedLanguage() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved && SUPPORTED_LANGS.includes(saved)) {
                return /** @type {'tr'|'en'} */ (saved);
            }
        } catch {
            // Depolama erişim hatasında varsayılan dile dön
        }
        return DEFAULT_LANG;
    }

    /**
     * Aktif dil kodunu döner ('tr' veya 'en').
     *
     * @returns {'tr'|'en'}
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Nokta notasyonuna sahip anahtarı (örn. 'hero.stats.repos') aktif dil sözlüğünden çözer.
     *
     * @param {string} keyPath - Nokta notasyonlu çeviri anahtarı
     * @param {string} [lang=this.currentLang] - Hedef dil
     * @returns {string|null} Çözümlenen metin veya bulunamazsa null
     */
    translate(keyPath, lang = this.currentLang) {
        if (!keyPath || typeof keyPath !== 'string') {
            return null;
        }

        const langDict = this.dictionary[lang];
        if (!langDict) {
            return null;
        }

        const segments = keyPath.split('.');
        let current = langDict;

        for (const segment of segments) {
            if (current && typeof current === 'object' && segment in current) {
                current = current[segment];
            } else {
                return null;
            }
        }

        return typeof current === 'string' ? current : null;
    }

    /**
     * Belirtilen dili DOM'a uygular, localStorage'ı günceller ve aboneleri tetikler.
     *
     * @param {'tr'|'en'} lang - Uygulanacak dil kodu
     * @param {Object} [options]
     * @param {boolean} [options.notify=true] - Abonelerin tetiklenip tetiklenmeyeceği
     */
    applyLanguage(lang, { notify = true } = {}) {
        const validLang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
        this.currentLang = /** @type {'tr'|'en'} */ (validLang);

        document.documentElement.setAttribute('lang', this.currentLang);

        try {
            localStorage.setItem(STORAGE_KEY, this.currentLang);
        } catch {
            // Depolama kısıtlamasını yoksay
        }

        this.updateDOMTranslations();
        this.updateLanguageToggleUI();

        if (notify) {
            this.notifySubscribers();
        }
    }

    /**
     * Dili 'tr' <-> 'en' arasında değiştirir.
     *
     * @returns {'tr'|'en'} Yeni aktif dil
     */
    toggleLanguage() {
        const nextLang = this.currentLang === 'tr' ? 'en' : 'tr';
        this.applyLanguage(nextLang, { notify: true });
        return nextLang;
    }

    /**
     * Sayfadaki tüm [data-i18n] ve [data-i18n-placeholder] elemanlarını günceller.
     */
    updateDOMTranslations() {
        const textElements = document.querySelectorAll('[data-i18n]');
        textElements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (!key) {
                return;
            }
            const resolved = this.translate(key, this.currentLang);
            if (resolved !== null) {
                el.textContent = resolved;
            }
        });

        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (!key) {
                return;
            }
            const resolved = this.translate(key, this.currentLang);
            if (resolved !== null && ('placeholder' in el)) {
                /** @type {HTMLInputElement|HTMLTextAreaElement} */ (el).placeholder = resolved;
            }
        });
    }

    /**
     * #langLabel metnini günceller (dil 'tr' iken 'EN', 'en' iken 'TR').
     */
    updateLanguageToggleUI() {
        const nextLangLabel = this.currentLang === 'tr' ? 'EN' : 'TR';
        const labelEl = document.querySelector(this.labelSelector);
        const toggleBtn = document.querySelector(this.toggleBtnSelector);

        if (labelEl) {
            labelEl.textContent = nextLangLabel;
        } else if (toggleBtn) {
            toggleBtn.textContent = nextLangLabel;
        }

        if (toggleBtn) {
            toggleBtn.setAttribute(
                'aria-label',
                this.currentLang === 'tr' ? 'Switch language to English' : 'Dili Türkçeye çevir'
            );
        }
    }

    /**
     * Dil değiştiğinde tetiklenecek bir geri çağırma (callback) fonksiyonu kaydeder.
     *
     * @param {function(string): void} callback - Yeni dil kodunu ('tr'|'en') parametre alan fonksiyon
     * @returns {function(): void} Aboneliği iptal etme (unsubscribe) fonksiyonu
     */
    onLanguageChange(callback) {
        if (typeof callback !== 'function') {
            return () => {};
        }
        this.subscribers.add(callback);
        return () => {
            this.subscribers.delete(callback);
        };
    }

    /**
     * Kayıtlı tüm abonelere güncel dili bildirir.
     */
    notifySubscribers() {
        for (const callback of this.subscribers) {
            try {
                callback(this.currentLang);
            } catch (err) {
                console.error('[LocalizationManager] Subscriber callback error:', err);
            }
        }
    }

    /**
     * Dil değiştirme butonuna tıklama dinleyicisini bağlar.
     */
    bindEvents() {
        const toggleBtn = document.querySelector(this.toggleBtnSelector);
        if (!toggleBtn) {
            return;
        }

        toggleBtn.addEventListener('click', () => {
            this.toggleLanguage();
        });
    }
}
