/**
 * @fileoverview Application Bootstrapper & Dependency Injection Orchestrator.
 * Single Responsibility: Veri katmanı (siteData), servis katmanı (githubService) ve
 * UI/Uygulama modüllerini (ThemeManager, LocalizationManager, PortfolioRenderer,
 * InteractionController, MascotController) Dependency Inversion prensibiyle birleştirir
 * ve yaşam döngüsünü yönetir.
 */

import { siteData } from './data.js';
import { fetchUserRepos } from './services/githubService.js';
import { ThemeManager } from './modules/themeManager.js';
import { LocalizationManager } from './modules/localizationManager.js';
import { PortfolioRenderer } from './modules/portfolioRenderer.js';
import { InteractionController } from './modules/interactionController.js';
import { MascotController } from './modules/mascotController.js';
import { Fox3DController } from './modules/fox3d.js';

class PortfolioApplication {
    /**
     * @param {Object} dependencies
     * @param {Object} dependencies.data - Merkezi portfolyo verisi (siteData)
     * @param {function(string): Promise<Map<string, Object>>} dependencies.repoFetcher - GitHub repo servisi
     */
    constructor({ data, repoFetcher }) {
        this.data = data;
        this.repoFetcher = repoFetcher;
        this.siteData = data;

        this.activeProjectFilter = 'all';
        /** @type {Map<string, Object>} */
        this.githubStatsMap = new Map();

        this.localizationManager = new LocalizationManager(this.data.i18n);
        this.themeManager = new ThemeManager({
            i18nDictionary: this.data.i18n,
            initialLang: this.localizationManager.getCurrentLanguage()
        });
        this.renderer = new PortfolioRenderer(this.data);
        this.interactionController = new InteractionController({
            siteData: this.data,
            localizationManager: this.localizationManager
        });
        this.fox3d = new Fox3DController('foxCanvas3d');
        this.mascotController = new MascotController(
            this.siteData,
            this.localizationManager,
            this.fox3d
        );
    }

    /**
     * Uygulamayı başlatır: dil, tema, ilk dinamik render (Bento, Timeline, Projects, Skills, Ethos),
     * filtre dinleyicileri, Kitsune maskot kontrolcüsü ve arka plan GitHub API senkronizasyonunu çalıştırır.
     */
    async bootstrap() {
        this.updateFooterYear();

        // 1. Dil ve Tema motorlarını başlat
        this.localizationManager.init();
        this.themeManager.init();

        // 2. İlk senkron bileşen render işlemi (Ethos Grid + Monograph Drawer dahil)
        const initialLang = this.localizationManager.getCurrentLanguage();
        this.renderer.renderAll(
            initialLang,
            this.activeProjectFilter,
            this.githubStatsMap
        );

        // 3. Dil değiştiğinde dinamik bileşenleri ve tema buton etiketini yeniden güncelle (Observer)
        this.localizationManager.onLanguageChange((newLang) => {
            const validLang = /** @type {'tr'|'en'} */ (newLang);
            this.themeManager.setLanguage(validLang);
            this.renderer.renderAll(
                validLang,
                this.activeProjectFilter,
                this.githubStatsMap
            );
        });

        // 4. Proje kategori filtrelerini, genel etkileşim kontrolcüsünü ve 3D Kitsune maskotunu bağla
        this.initProjectFilterButtons();
        this.interactionController.init();
        this.fox3d.init();
        this.mascotController.init();

        // 5. Arka planda canlı GitHub verilerini çek ve proje satırlarını güncelle
        await this.syncGitHubMetadata();
    }

    /**
     * bootstrap() için uyumluluk takma adı (alias).
     */
    async init() {
        return this.bootstrap();
    }

    /**
     * #projectFilters altındaki kategori filtre butonlarını dinler ve aktif filtreye göre
     * projeleri yeniden render eder.
     */
    initProjectFilterButtons() {
        const filtersContainer = document.querySelector('#projectFilters');
        if (!filtersContainer) {
            return;
        }

        const filterButtons = filtersContainer.querySelectorAll('[data-filter]');
        if (!filterButtons.length) {
            return;
        }

        filtersContainer.addEventListener('click', (event) => {
            const target = /** @type {HTMLElement|null} */ (event.target);
            if (!target) {
                return;
            }

            const btn = target.closest('[data-filter]');
            if (!btn) {
                return;
            }

            const selectedFilter = btn.getAttribute('data-filter') || 'all';
            if (selectedFilter === this.activeProjectFilter) {
                return;
            }

            this.activeProjectFilter = selectedFilter;

            filterButtons.forEach((buttonEl) => {
                const isActive =
                    buttonEl.getAttribute('data-filter') === selectedFilter;
                buttonEl.classList.toggle('active', isActive);
                buttonEl.setAttribute('aria-pressed', String(isActive));
            });

            const currentLang = this.localizationManager.getCurrentLanguage();
            this.renderer.renderProjects(
                currentLang,
                this.activeProjectFilter,
                this.githubStatsMap
            );
        });
    }

    /**
     * GitHub API üzerinden kullanıcının repo istatistiklerini çeker ve
     * mevcut dil/filtre durumunu koruyarak proje satırlarını günceller.
     */
    async syncGitHubMetadata() {
        const githubUser = this.data?.profile?.githubUser || 'mihsanekinci';
        const statsMap = await this.repoFetcher(githubUser);

        if (statsMap instanceof Map && statsMap.size > 0) {
            this.githubStatsMap = statsMap;
            const currentLang = this.localizationManager.getCurrentLanguage();
            this.renderer.renderProjects(
                currentLang,
                this.activeProjectFilter,
                this.githubStatsMap
            );
        }
    }

    /**
     * Varsa #currentYear veya [data-current-year] elemanına güncel yılı yazar.
     */
    updateFooterYear() {
        const yearEl =
            document.querySelector('#currentYear') ||
            document.querySelector('[data-current-year]');
        if (yearEl) {
            yearEl.textContent = String(new Date().getFullYear());
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApplication({
        data: siteData,
        repoFetcher: fetchUserRepos
    });
    app.bootstrap();
});
