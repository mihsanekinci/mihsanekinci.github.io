# Mehmet İhsan Ekinci — Personal Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-mihsanekinci.github.io-2563eb?style=for-the-badge&logo=githubpages&logoColor=white)](https://mihsanekinci.github.io)
[![Architecture](https://img.shields.io/badge/Architecture-Modular_ES6_%2F_SOLID-10b981?style=for-the-badge&logo=javascript&logoColor=white)](./docs/decisions/ADR-001-modular-portfolio-architecture.md)
[![Theme](https://img.shields.io/badge/Theme-Dark_%2F_Light-8b5cf6?style=for-the-badge)](https://mihsanekinci.github.io)
[![i18n](https://img.shields.io/badge/i18n-TR_%7C_EN-f59e0b?style=for-the-badge)](https://mihsanekinci.github.io)

> **🌐 Canlı Vitrin / Live Portfolio:** [**https://mihsanekinci.github.io**](https://mihsanekinci.github.io)

---

## 🇹🇷 Proje Özeti (Türkçe)

Bu depo, **Mehmet İhsan Ekinci**'nin yazılım mühendisliği, ağ ve ağ güvenliği, sistem mimarisi ve akademik projelerini sergileyen **modüler kişisel mühendislik portfolyosu** ve aynı zamanda geçmiş üniversite ders çalışmalarının arşividir.

Proje, herhangi bir ağır frontend framework'ü veya derleme (build) bağımlılığı kullanmadan, **katı SOLID prensipleri**, **katmanlı ES6 Modül mimarisi** ve **Bento Grid** tasarım diliyle sıfır bağımlılık (Zero-Dependency) felsefesiyle inşa edilmiştir.

### ✨ Öne Çıkan Mühendislik Özellikleri
- **🧱 SOLID & Katmanlı ES6 Modül Mimarisi:** Veri (`data.js`), dış servis (`githubService.js`), durum yönetimi (`themeManager.js`, `localizationManager.js`), görsel sunum (`portfolioRenderer.js`) ve kullanıcı etkileşimi (`interactionController.js`) katmanları birbirinden tamamen izole edilmiştir. Yalnızca `js/data.js` güncellenerek yeni proje veya deneyim eklenebilir (*Open/Closed Principle*).
- **🔄 Canlı GitHub API Senkronizasyonu & Dayanıklılık:** Projelerin yıldız, fork ve dil istatistikleri GitHub REST API üzerinden canlı çekilir. API rate-limit veya çevrimdışı durumlarına karşı `sessionStorage` önbellekleme (caching) ve statik veri geri dönüşü (*graceful fallback*) mevcuttur.
- **🌍 Çift Dilli (TR / EN) Reaktif Dil Motoru:** Sayfa yenilemesine gerek kalmadan tüm arayüz metinlerini, tarih formatlarını ve içerikleri Türkçe ve İngilizce arasında anında değiştiren hafif i18n modülü.
- **🌗 Adaptif Tema Sistemi (Dark / Light):** İşletim sistemi tercihini (`prefers-color-scheme`) algılayan ve kullanıcı seçimini `localStorage` üzerinde kalıcı tutan, CSS değişkenleri (Design Tokens) tabanlı tema motoru.
- **🍱 Modern Bento Grid & Erişilebilirlik:** Semantik HTML5, klavye erişilebilirliği, duyarlı (responsive) Bento Grid yerleşimi ve sıfır harici çalışma zamanı yükü ile yüksek Lighthouse performansı.

---

## 🇬🇧 Overview (English)

This repository hosts the personal engineering portfolio of **Mehmet İhsan Ekinci**, showcasing projects and technical experience across software architecture, computer networks, cybersecurity, and systems engineering, alongside an isolated archive of university coursework.

Engineered with a **zero-build, zero-dependency** philosophy, the application leverages native **ES6 Modules**, **strict SOLID principles**, and a modern **Bento Grid** layout deployed directly on GitHub Pages.

### ✨ Key Engineering Highlights
- **🧱 SOLID & Layered ES6 Module Architecture:** Strict separation of concerns across data configuration (`data.js`), external API integration (`githubService.js`), state management (`themeManager.js`, `localizationManager.js`), DOM rendering (`portfolioRenderer.js`), and UI interactions (`interactionController.js`). Following the *Open/Closed Principle*, adding new projects or experiences requires editing only `js/data.js`.
- **🔄 Live GitHub API Sync with Graceful Fallback:** Fetches real-time repository metadata via the GitHub REST API, backed by `sessionStorage` caching and automatic static data fallback to guarantee resilience under API rate limits.
- **🌍 Bilingual (TR / EN) Localization Engine:** Reactive client-side i18n module supporting instant switching between Turkish and English without page reloads.
- **🌗 Adaptive Dark / Light Theme System:** Powered by CSS custom properties (design tokens), respecting system `prefers-color-scheme` while persisting user overrides in `localStorage`.
- **🍱 Responsive Bento Grid Layout:** Semantic HTML5 structure, smooth scroll spy via `IntersectionObserver`, and modular CSS delivering near-instant load times.

---

## 🗂️ Mimari Yapı Ağacı / Project Architecture

```text
mihsanekinci.github.io/
├── index.html                  # Ana Single-Page portfolyo giriş noktası (Semantic HTML5)
├── css/                        # Modüler stil katmanı (Design Tokens, Bento Grid, Bileşenler)
├── js/
│   ├── app.js                  # Uygulama orkestratörü ve modül başlatıcısı (Bootstrapper)
│   ├── data.js                 # Tek doğruluk kaynağı (Projeler, deneyimler, TR/EN sözlükleri)
│   ├── services/
│   │   └── githubService.js    # GitHub REST API istemcisi, sessionStorage önbellek & fallback
│   └── modules/
│       ├── themeManager.js         # Dark/Light tema durumu ve sistem tercihi yönetimi
│       ├── localizationManager.js  # TR/EN çoklu dil (i18n) durumu ve reaktif DOM güncellemesi
│       ├── portfolioRenderer.js    # Bento Grid ve içerik bileşenlerinin saf render motoru
│       └── interactionController.js# Navigasyon, filtreleme ve IntersectionObserver etkileşimleri
├── docs/
│   └── decisions/
│       └── ADR-001-modular-portfolio-architecture.md  # Mimari Karar Kaydı (Adaptive ADR)
└── labs/                       # Arşivlenen Web Programlama Dersi laboratuvar çalışmaları
```

> 📑 Mimari tasarım kararları, değerlendirilen alternatifler ve teknik ödünleşimler için [**ADR-001: Modüler Kişisel Mühendislik Portfolyosu Mimarisi**](./docs/decisions/ADR-001-modular-portfolio-architecture.md) belgesini inceleyebilirsiniz.

---

## 🧪 Web Programlama Dersi Laboratuvar Arşivi (`/labs/`)

Bu deponun önceki dönemlerde ev sahipliği yaptığı **Web Programlama Dersi** laboratuvar çalışmaları ve ödevleri, ana portfolyo mimarisinden izole edilerek [`/labs/`](./labs/) dizini altında arşivlenmiştir:

- 📂 [**Tüm Laboratuvar Çalışmaları Dizinine Git (`./labs/`)**](./labs/)
- 🌐 [**Canlı Ders Arşivi (`/labs/`)**](https://mihsanekinci.github.io/labs/)

---

## 📬 İletişim / Contact

- **Web:** [mihsanekinci.github.io](https://mihsanekinci.github.io)
- **GitHub:** [@mihsanekinci](https://github.com/mihsanekinci)
