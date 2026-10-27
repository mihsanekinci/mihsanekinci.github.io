/**
 * @fileoverview Editorial Minimalist & 1px Swiss Grid Portfolyo Render Motoru.
 * Single Responsibility: siteData verilerini ve canlı GitHub API istatistiklerini alarak
 * Bento Highlights, Deneyim/Eğitim Zaman Çizelgesi, Teknik Proje İndeks Satırları (.project-row),
 * Yetkinlik Matrisi (.skill-card) ve 6 Japon İlkesi (Ethos Grid + Monograph Drawer) bileşenlerini
 * sıfır emoji ve XSS korumalı semantik HTML ile render eder.
 */

/**
 * Metin içeriklerini güvenli HTML string'ine dönüştürür (XSS koruması).
 *
 * @param {string} raw - Ham metin
 * @returns {string} Kaçış karakterleri uygulanmış güvenli metin
 */
function escapeHtml(raw) {
    if (raw === null || raw === undefined) {
        return '';
    }
    return String(raw)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Çok dilli (string veya { tr, en } nesnesi) bir alanı seçilen dile göre çözer.
 *
 * @param {string|Object} field - Çözümlenecek veri alanı
 * @param {'tr'|'en'} lang - Aktif dil kodu
 * @returns {string}
 */
function resolveLocalizedField(field, lang) {
    if (!field) {
        return '';
    }
    if (typeof field === 'string') {
        return field;
    }
    if (typeof field === 'object') {
        return field[lang] || field.tr || field.en || '';
    }
    return String(field);
}

export class PortfolioRenderer {
    /**
     * @param {Object} siteData - Merkezi portfolyo veri nesnesi
     * @param {Object} [selectors]
     * @param {string} [selectors.bentoList='#bentoHighlightsList']
     * @param {string} [selectors.timeline='#timelineContainer']
     * @param {string} [selectors.projects='#projectsGrid']
     * @param {string} [selectors.skills='#skillsGrid']
     * @param {string} [selectors.ethosGrid='#ethosGrid']
     * @param {string} [selectors.ethosDrawerBody='#ethosDrawerBody']
     */
    constructor(
        siteData,
        {
            bentoList = '#bentoHighlightsList',
            timeline = '#timelineContainer',
            projects = '#projectsGrid',
            skills = '#skillsGrid',
            ethosGrid = '#ethosGrid',
            ethosDrawerBody = '#ethosDrawerBody'
        } = {}
    ) {
        this.siteData = siteData;
        this.selectors = {
            bentoList,
            timeline,
            projects,
            skills,
            ethosGrid,
            ethosDrawerBody
        };
    }

    /**
     * Tüm dinamik bölümleri tek seferde render eder.
     *
     * @param {'tr'|'en'} lang - Aktif dil kodu
     * @param {string} [filterCategory='all'] - Aktif proje kategori filtresi
     * @param {Map<string, Object>} [githubStatsMap=new Map()] - GitHub repo istatistik haritası
     */
    renderAll(lang, filterCategory = 'all', githubStatsMap = new Map()) {
        this.renderBentoHighlights(lang);
        this.renderTimeline(lang);
        this.renderProjects(lang, filterCategory, githubStatsMap);
        this.renderSkills(lang);
        this.renderEthos(lang);
    }

    /**
     * #bentoHighlightsList içine siteData.i18n[lang].about.bentoHighlights maddelerini <li> olarak render eder.
     *
     * @param {'tr'|'en'} lang - Aktif dil kodu
     */
    renderBentoHighlights(lang) {
        const container = document.querySelector(this.selectors.bentoList);
        if (!container) {
            return;
        }

        const langData = this.siteData?.i18n?.[lang] || this.siteData?.i18n?.tr;
        const highlights = langData?.about?.bentoHighlights;

        if (!Array.isArray(highlights)) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = highlights
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join('');
    }

    /**
     * #timelineContainer içine siteData.timeline öğelerini .timeline-item satırları olarak render eder.
     *
     * @param {'tr'|'en'} lang - Aktif dil kodu
     */
    renderTimeline(lang) {
        const container = document.querySelector(this.selectors.timeline);
        if (!container) {
            return;
        }

        const items = this.siteData?.timeline;
        if (!Array.isArray(items)) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = items
            .map((item, idx) => {
                const indexCode = String(idx + 1).padStart(2, '0');
                const period = escapeHtml(resolveLocalizedField(item.period, lang));
                const role = escapeHtml(resolveLocalizedField(item.role, lang));
                const organization = escapeHtml(resolveLocalizedField(item.organization, lang));
                const location = escapeHtml(resolveLocalizedField(item.location, lang));
                const description = escapeHtml(resolveLocalizedField(item.description, lang));
                const itemType = escapeHtml(item.type || 'experience');

                const tagsHtml = Array.isArray(item.tags)
                    ? item.tags
                          .map((tag) => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
                          .join('')
                    : '';

                return `
                    <article class="timeline-item" data-type="${itemType}">
                        <div class="timeline-meta">
                            <span class="timeline-index">02.${indexCode}</span>
                            <span class="timeline-period">${period}</span>
                            <span class="timeline-location">${location}</span>
                        </div>
                        <div class="timeline-content">
                            <div class="timeline-header">
                                <h3 class="timeline-role">${role}</h3>
                                <span class="timeline-org">${organization}</span>
                            </div>
                            <p class="timeline-desc">${description}</p>
                            <div class="timeline-tags project-tech">${tagsHtml}</div>
                        </div>
                    </article>
                `;
            })
            .join('');
    }

    /**
     * #projectsGrid içine siteData.projects öğelerini kategoriye göre filtreleyerek
     * tam genişlikte teknik indeks satırı (.project-row.project-card) olarak render eder.
     *
     * @param {'tr'|'en'} lang - Aktif dil kodu
     * @param {string} [filterCategory='all'] - Kategori filtresi ('all', 'network', 'systems', 'web', 'ai')
     * @param {Map<string, {stars: number, language: string|null, updatedAt: string, forks: number}>} [githubStatsMap=new Map()]
     */
    renderProjects(lang, filterCategory = 'all', githubStatsMap = new Map()) {
        const container = document.querySelector(this.selectors.projects);
        if (!container) {
            return;
        }

        const allProjects = Array.isArray(this.siteData?.projects) ? this.siteData.projects : [];
        const normalizedFilter = (filterCategory || 'all').toLowerCase();

        const filteredProjects =
            normalizedFilter === 'all'
                ? allProjects
                : allProjects.filter(
                      (project) => String(project.category).toLowerCase() === normalizedFilter
                  );

        const i18n = this.siteData?.i18n?.[lang] || this.siteData?.i18n?.tr;
        const viewCodeLabel = escapeHtml(i18n?.projects?.viewCode || 'Source Code');
        const liveSyncNote = escapeHtml(i18n?.projects?.liveSyncNote || 'GitHub API');

        container.innerHTML = filteredProjects
            .map((project, index) => {
                const indexCode = String(index + 1).padStart(2, '0');
                const badge = escapeHtml(project.badge || project.category);
                const title = escapeHtml(project.title);
                const description = escapeHtml(resolveLocalizedField(project.description, lang));
                const url = escapeHtml(project.url || '#');
                const category = escapeHtml(project.category || 'all');

                const repoKey = project.repo || project.id || '';
                const ghStats =
                    githubStatsMap instanceof Map
                        ? githubStatsMap.get(repoKey) ||
                          githubStatsMap.get(String(repoKey).toLowerCase())
                        : null;

                let headerStatText = '';
                let footerMetaText = liveSyncNote;

                if (ghStats) {
                    if (ghStats.stars > 0) {
                        headerStatText = `★ ${ghStats.stars}`;
                    } else if (ghStats.language) {
                        headerStatText = escapeHtml(ghStats.language);
                    }

                    const metaParts = [];
                    if (ghStats.language) {
                        metaParts.push(escapeHtml(ghStats.language));
                    }
                    if (ghStats.stars > 0) {
                        metaParts.push(`★ ${ghStats.stars}`);
                    }
                    if (ghStats.forks > 0) {
                        metaParts.push(`FORKS: ${ghStats.forks}`);
                    }
                    if (metaParts.length > 0) {
                        footerMetaText = metaParts.join(' · ');
                    }
                }

                const techListSummary = Array.isArray(project.tech)
                    ? escapeHtml(project.tech.slice(0, 3).join(' / '))
                    : '';

                const techTagsHtml = Array.isArray(project.tech)
                    ? project.tech
                          .map((techItem) => `<span class="tech-tag">${escapeHtml(techItem)}</span>`)
                          .join('')
                    : '';

                const statBadgeHtml = headerStatText
                    ? `<span class="project-gh-stat">${headerStatText}</span>`
                    : '';

                return `
                    <article class="project-row project-card" data-category="${category}">
                        <div class="project-row-top project-header">
                            <div class="project-row-title-group">
                                <span class="project-index">${indexCode}</span>
                                <h3 class="project-title">${title}</h3>
                                <span class="project-badge">${badge}</span>
                            </div>
                            <div class="project-row-actions">
                                <span class="project-tech-summary">${techListSummary}</span>
                                ${statBadgeHtml}
                                <a href="${url}" target="_blank" rel="noopener noreferrer" class="project-link">${viewCodeLabel} ↗</a>
                            </div>
                        </div>
                        <div class="project-row-bottom">
                            <p class="project-desc">${description}</p>
                            <div class="project-footer">
                                <div class="project-tech">${techTagsHtml}</div>
                                <span class="project-repo-status">${footerMetaText}</span>
                            </div>
                        </div>
                    </article>
                `;
            })
            .join('');
    }

    /**
     * #skillsGrid içine siteData.skillCategories verilerini 04.1..04.4 kodlu .skill-card olarak render eder.
     *
     * @param {'tr'|'en'} lang - Aktif dil kodu
     */
    renderSkills(lang) {
        const container = document.querySelector(this.selectors.skills);
        if (!container) {
            return;
        }

        const categories = this.siteData?.skillCategories;
        if (!Array.isArray(categories)) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = categories
            .map((category, idx) => {
                const code = escapeHtml(category.code || `04.${idx + 1}`);
                const title = escapeHtml(resolveLocalizedField(category.title, lang));
                const pillsHtml = Array.isArray(category.skills)
                    ? category.skills
                          .map((skill) => `<span class="skill-pill">${escapeHtml(skill)}</span>`)
                          .join('')
                    : '';

                return `
                    <article class="skill-card">
                        <div class="skill-card-header">
                            <span class="skill-code">${code}</span>
                            <h3 class="skill-title">${title}</h3>
                        </div>
                        <div class="skill-pills">${pillsHtml}</div>
                    </article>
                `;
            })
            .join('');
    }

    /**
     * #ethosGrid içine 6 Japon felsefesi ilkesini (.ethos-cell) ve
     * #ethosDrawerBody içine detaylı monografi maddelerini (.ethos-monograph-item) render eder.
     *
     * @param {'tr'|'en'} lang - Aktif dil kodu
     */
    renderEthos(lang) {
        const ethosItems = Array.isArray(this.siteData?.ethos) ? this.siteData.ethos : [];
        const i18nEthos =
            this.siteData?.i18n?.[lang]?.ethos || this.siteData?.i18n?.tr?.ethos || {};
        const readMoreLabel = escapeHtml(i18nEthos.readMore || 'Deep Dive →');
        const engineeringLabel = escapeHtml(
            i18nEthos.engineeringLabel || 'ENGINEERING REFLECTION'
        );

        const gridContainer = document.querySelector(this.selectors.ethosGrid);
        if (gridContainer) {
            gridContainer.innerHTML = ethosItems
                .map((item) => {
                    const id = escapeHtml(item.id);
                    const code = escapeHtml(item.code);
                    const name = escapeHtml(item.name);
                    const kanji = escapeHtml(item.kanji);
                    const subtitle = escapeHtml(resolveLocalizedField(item.subtitle, lang));
                    const summary = escapeHtml(resolveLocalizedField(item.summary, lang));

                    return `
                        <article
                            class="ethos-cell"
                            data-ethos-id="${id}"
                            tabindex="0"
                            role="button"
                            aria-label="${code} ${name} — ${subtitle}"
                        >
                            <div class="ethos-cell-top">
                                <span class="ethos-code-name">${code} / ${name}</span>
                                <span class="ethos-kanji" lang="ja">${kanji}</span>
                            </div>
                            <h3 class="ethos-subtitle">${subtitle}</h3>
                            <p class="ethos-summary">${summary}</p>
                            <span class="ethos-read-more">${readMoreLabel}</span>
                        </article>
                    `;
                })
                .join('');
        }

        const drawerBody = document.querySelector(this.selectors.ethosDrawerBody);
        if (drawerBody) {
            drawerBody.innerHTML = ethosItems
                .map((item) => {
                    const id = escapeHtml(item.id);
                    const code = escapeHtml(item.code);
                    const name = escapeHtml(item.name);
                    const kanji = escapeHtml(item.kanji);
                    const pronunciation = escapeHtml(item.pronunciation || '');
                    const subtitle = escapeHtml(resolveLocalizedField(item.subtitle, lang));
                    const deepDive = escapeHtml(resolveLocalizedField(item.deepDive, lang));
                    const engineeringReflection = escapeHtml(
                        resolveLocalizedField(item.engineeringReflection, lang)
                    );

                    return `
                        <article class="ethos-monograph-item" id="monograph-${id}" data-ethos-id="${id}">
                            <header class="ethos-monograph-header">
                                <div class="ethos-monograph-title-group">
                                    <span class="ethos-monograph-code">${code} // ${name} [${pronunciation}]</span>
                                    <h3 class="ethos-monograph-subtitle">${subtitle}</h3>
                                </div>
                                <span class="ethos-monograph-kanji" lang="ja" aria-hidden="true">${kanji}</span>
                            </header>
                            <p class="ethos-monograph-text">${deepDive}</p>
                            <div class="ethos-engineering-box">
                                <span class="ethos-engineering-label">${engineeringLabel}</span>
                                <p class="ethos-engineering-desc">${engineeringReflection}</p>
                            </div>
                        </article>
                    `;
                })
                .join('');
        }
    }
}
