/**
 * @fileoverview Tema Yönetimi Modülü (Sıcak Kağıt / Karbon Modu).
 * Single Responsibility: Kullanıcının tema tercihini (mie_theme) localStorage üzerinden
 * okur/yazar, varsayılan olarak 'light' (Sıcak Kağıt & Mürekkep) temasını uygular ve
 * #themeToggleBtn / #themeIcon metinlerini aktif dile göre emojisiz olarak günceller.
 */

const STORAGE_KEY = 'mie_theme';
const DEFAULT_THEME = 'light';

export class ThemeManager {
    /**
     * @param {Object} [options]
     * @param {string} [options.toggleBtnSelector='#themeToggleBtn'] - Tema değiştirme butonu seçicisi
     * @param {string} [options.iconSelector='#themeIcon'] - Tema etiket/ikon seçicisi
     * @param {Object} [options.i18nDictionary] - Çeviri sözlüğü (siteData.i18n)
     * @param {'tr'|'en'} [options.initialLang='tr'] - Başlangıç dili
     */
    constructor({
        toggleBtnSelector = '#themeToggleBtn',
        iconSelector = '#themeIcon',
        i18nDictionary = null,
        initialLang = 'tr'
    } = {}) {
        this.toggleBtnSelector = toggleBtnSelector;
        this.iconSelector = iconSelector;
        this.i18nDictionary = i18nDictionary;
        this.currentLang = initialLang;
        this.currentTheme = this.readSavedTheme();
    }

    /**
     * Tema yöneticisini başlatır, mevcut temayı uygular ve buton dinleyicisini bağlar.
     */
    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    }

    /**
     * localStorage'dan kayıtlı temayı okur; geçersiz veya tanımsızsa varsayılan 'light' döner.
     *
     * @returns {'light'|'dark'}
     */
    readSavedTheme() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved === 'light' || saved === 'dark') {
                return saved;
            }
        } catch {
            // localStorage erişim kısıtlaması varsa varsayılan temaya dön
        }
        return DEFAULT_THEME;
    }

    /**
     * Temayı DOM'a ve localStorage'a uygular, buton etiketini günceller.
     *
     * @param {'light'|'dark'} theme - Uygulanacak tema
     */
    applyTheme(theme) {
        const validTheme = theme === 'dark' ? 'dark' : 'light';
        this.currentTheme = validTheme;

        document.documentElement.setAttribute('data-theme', validTheme);

        try {
            localStorage.setItem(STORAGE_KEY, validTheme);
        } catch {
            // Depolama hatasını yut
        }

        this.updateUI();
    }

    /**
     * Mevcut temayı 'light' <-> 'dark' arasında değiştirir.
     *
     * @returns {'light'|'dark'} Yeni aktif tema
     */
    toggleTheme() {
        const nextTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(nextTheme);
        return nextTheme;
    }

    /**
     * Aktif dil değiştiğinde tema butonunun metnini günceller.
     *
     * @param {'tr'|'en'} lang - Yeni aktif dil kodu
     */
    setLanguage(lang) {
        this.currentLang = lang === 'en' ? 'en' : 'tr';
        this.updateUI();
    }

    /**
     * Aktif temayı döner.
     *
     * @returns {'light'|'dark'}
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * Aktif temaya ve dile göre bir sonraki modun etiketini çözer (KARBON/CARBON veya KAĞIT/PAPER).
     *
     * @returns {string}
     */
    resolveNextModeLabel() {
        const navDict = this.i18nDictionary?.[this.currentLang]?.nav;

        if (this.currentTheme === 'light') {
            return navDict?.themeDark || (this.currentLang === 'en' ? 'CARBON' : 'KARBON');
        }
        return navDict?.themeLight || (this.currentLang === 'en' ? 'PAPER' : 'KAĞIT');
    }

    /**
     * #themeToggleBtn ve #themeIcon elemanlarını mevcut temaya ve dile göre günceller.
     */
    updateUI() {
        const toggleBtn = document.querySelector(this.toggleBtnSelector);
        const themeIcon = document.querySelector(this.iconSelector);
        const labelText = this.resolveNextModeLabel();

        if (themeIcon) {
            themeIcon.textContent = labelText;
        } else if (toggleBtn) {
            toggleBtn.textContent = labelText;
        }

        if (toggleBtn) {
            toggleBtn.setAttribute(
                'aria-label',
                this.currentTheme === 'light'
                    ? 'Switch to carbon dark mode'
                    : 'Switch to warm paper light mode'
            );
            toggleBtn.setAttribute('data-current-theme', this.currentTheme);
        }
    }

    /**
     * Tema değiştirme butonuna tıklama olayını bağlar.
     */
    bindEvents() {
        const toggleBtn = document.querySelector(this.toggleBtnSelector);
        if (!toggleBtn) {
            return;
        }

        toggleBtn.addEventListener('click', () => {
            this.toggleTheme();
        });
    }
}
