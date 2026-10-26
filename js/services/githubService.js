/**
 * @fileoverview GitHub REST API İletişimi ve Oturum Önbellekleme (Session Cache) Servisi.
 * Single Responsibility: Kullanıcının açık kaynak repolarına ait canlı мета verileri
 * (yıldız, dil, fork, son güncelleme) çeker ve GitHub API rate-limit koruması için
 * sessionStorage üzerinde 15 dakika boyunca önbellekler.
 */

const CACHE_KEY_PREFIX = 'mie_gh_repos_';
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 dakika

/**
 * @typedef {Object} RepoMetadata
 * @property {number} stars - Reponun yıldız (stargazers) sayısı
 * @property {string|null} language - Reponun birincil programlama dili
 * @property {string} updatedAt - Son güncellenme tarihi (ISO 8601)
 * @property {number} forks - Reponun fork sayısı
 */

/**
 * Oturum önbelleğinden (sessionStorage) geçerli veriyi okur.
 *
 * @param {string} cacheKey - Önbellek anahtarı
 * @returns {Map<string, RepoMetadata>|null} Geçerli önbellek varsa Map, yoksa null
 */
function readFromCache(cacheKey) {
    try {
        const raw = sessionStorage.getItem(cacheKey);
        if (!raw) {
            return null;
        }

        const parsed = JSON.parse(raw);
        const now = Date.now();

        if (!parsed || typeof parsed.timestamp !== 'number' || !Array.isArray(parsed.entries)) {
            return null;
        }

        if (now - parsed.timestamp > CACHE_TTL_MS) {
            sessionStorage.removeItem(cacheKey);
            return null;
        }

        return new Map(parsed.entries);
    } catch {
        return null;
    }
}

/**
 * Çekilen repo haritasını zaman damgasıyla birlikte sessionStorage'a yazar.
 *
 * @param {string} cacheKey - Önbellek anahtarı
 * @param {Map<string, RepoMetadata>} repoMap - Kaydedilecek repo haritası
 */
function writeToCache(cacheKey, repoMap) {
    try {
        const payload = {
            timestamp: Date.now(),
            entries: Array.from(repoMap.entries())
        };
        sessionStorage.setItem(cacheKey, JSON.stringify(payload));
    } catch {
        // Gizli sekme veya kota aşımı durumlarında sessizce devam et
    }
}

/**
 * Belirtilen GitHub kullanıcısının genel repolarını çeker ve normalize edilmiş bir Map döner.
 * Hata veya çevrimdışı durumda uygulamayı kırmaz, boş Map döner (Graceful Fallback).
 *
 * @param {string} username - GitHub kullanıcı adı
 * @returns {Promise<Map<string, RepoMetadata>>} Repo adı -> RepoMetadata haritası
 */
export async function fetchUserRepos(username) {
    if (!username || typeof username !== 'string') {
        return new Map();
    }

    const normalizedUser = username.trim().toLowerCase();
    const cacheKey = `${CACHE_KEY_PREFIX}${normalizedUser}`;

    const cachedMap = readFromCache(cacheKey);
    if (cachedMap) {
        return cachedMap;
    }

    const endpoint = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`;

    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            return new Map();
        }

        const repos = await response.json();
        if (!Array.isArray(repos)) {
            return new Map();
        }

        /** @type {Map<string, RepoMetadata>} */
        const repoMap = new Map();

        for (const repo of repos) {
            if (!repo || typeof repo.name !== 'string') {
                continue;
            }

            const metadata = {
                stars: Number(repo.stargazers_count) || 0,
                language: repo.language || null,
                updatedAt: repo.updated_at || '',
                forks: Number(repo.forks_count) || 0
            };

            repoMap.set(repo.name, metadata);
            repoMap.set(repo.name.toLowerCase(), metadata);
        }

        writeToCache(cacheKey, repoMap);
        return repoMap;
    } catch {
        // Çevrimdışı mod veya ağ hatası durumunda uygulamayı kırma
        return new Map();
    }
}
