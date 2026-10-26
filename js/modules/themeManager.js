/**
 * @fileoverview Tema Yönetimi Modülü (Dark / Light Mode).
 * Single Responsibility: Kullanıcının tema tercihini (mie_theme) localStorage üzerinden
 * okur/yazar, kök <html data-theme="..."> niteliğini ve #themeToggleBtn / #themeIcon
 * bileşenlerini senkronize eder.
 */

const STORAGE_KEY = 'mie_theme';
const DEFAULT_THEME = 'dark';

export class ThemeManager {
    /**
     * @param {Object} [options]
     * @param {string} [options.toggleBtnSelector='#themeToggleBtn'] - Tema değiştirme butonu seçicisi
     * @param {string} [options.iconSelector='#themeIcon'] - Tema ikonu seçicisi
     */
    constructor({
        toggleBtnSelector = '#themeToggleBtn',
        iconSelector = '#themeIcon'
    } = {}) {
        this.toggleBtnSelector = toggleBtnSelector;
        this.iconSelector = iconSelector;
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
     * localStorage'dan kayıtlı temayı okur; geçersiz veya tanımsızsa 'dark' döner.
     *
     * @returns {'dark'|'light'}
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
     * Temayı DOM'a ve localStorage'a uygular, buton ikonunu günceller.
     *
     * @param {'dark'|'light'} theme - Uygulanacak tema
     */
    applyTheme(theme) {
        const validTheme = theme === 'light' ? 'light' : 'dark';
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
     * Mevcut temayı 'dark' <-> 'light' arasında değiştirir.
     *
     * @returns {'dark'|'light'} Yeni aktif tema
     */
    toggleTheme() {
        const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(nextTheme);
        return nextTheme;
    }

    /**
     * Aktif temayı döner.
     *
     * @returns {'dark'|'light'}
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * #themeToggleBtn ve #themeIcon elemanlarını mevcut temaya göre günceller.
     */
    updateUI() {
        const toggleBtn = document.querySelector(this.toggleBtnSelector);
        const themeIcon = document.querySelector(this.iconSelector);

        // Karanlık temadayken açık temaya geçişi simgeleyen ☀️ veya mevcut durumu simgeleyen 🌙:
        // Koyu temada '🌙', açık temada '☀️' gösterilir (veya buton etiketleri güncellenir).
        const iconChar = this.currentTheme === 'dark' ? '🌙' : '☀️';

        if (themeIcon) {
            themeIcon.textContent = iconChar;
        } else if (toggleBtn) {
            toggleBtn.textContent = iconChar;
        }

        if (toggleBtn) {
            toggleBtn.setAttribute(
                'aria-label',
                this.currentTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
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
