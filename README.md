# Mehmet İhsan Ekinci — Personal Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-mihsanekinci.github.io-111110?style=for-the-badge&logo=githubpages&logoColor=f6f5f1)](https://mihsanekinci.github.io)
[![Architecture](https://img.shields.io/badge/Architecture-Modular_ES6_%2F_SOLID-c83e2b?style=for-the-badge&logo=javascript&logoColor=white)](./docs/decisions/ADR-001-modular-portfolio-architecture.md)
[![Design System](https://img.shields.io/badge/Design-Editorial_1px_Swiss_Grid-3f3e3a?style=for-the-badge)](./docs/decisions/ADR-002-anti-ai-slop-editorial-swiss-grid.md)
[![Theme](https://img.shields.io/badge/Palette-Warm_Paper_%7C_Matte_Carbon-1c1b19?style=for-the-badge)](https://mihsanekinci.github.io)
[![i18n](https://img.shields.io/badge/i18n-TR_%7C_EN-6b6963?style=for-the-badge)](https://mihsanekinci.github.io)

> **🌐 Canlı Vitrin / Live Portfolio:** [**https://mihsanekinci.github.io**](https://mihsanekinci.github.io)

---

## 🇹🇷 Proje Özeti (Türkçe)

Bu depo, **Mehmet İhsan Ekinci**'nin yazılım mühendisliği, ağ ve ağ güvenliği, sistem mimarisi ve akademik projelerini sergileyen **modüler kişisel mühendislik portfolyosu** ve aynı zamanda geçmiş üniversite ders çalışmalarının arşividir.

Proje; herhangi bir ağır frontend framework'ü veya derleme (build) bağımlılığı kullanmadan **katı SOLID prensipleri** ve **katmanlı ES6 Modül mimarisi** üzerine inşa edilmiştir. Görsel tasarımında jenerik yapay zekâ şablonlarından (*"AI Slop"*) bilinçli olarak uzak durulmuş; **12 sütunlu 1px İsviçre Izgarası (Swiss Grid)**, **Sıcak Mimari Kağıt / Mat Karbon** tipografik paleti ve mühendislik disiplinini şekillendiren **6 Japon Felsefesi İlkesi (Ethos Monograph)** benimsenmiştir.

### ✨ Öne Çıkan Mühendislik ve Tasarım Özellikleri
- **📐 Anti-"AI Slop" Editorial & 1px Swiss Grid Tasarım Sistemi:** Neon küreler, sahte terminaller veya yuvarlak zıplayan kartlar yerine; `1px` keskin mimari çizgiler, **Sıcak Kağıt (`#f6f5f1`) & Mat Karbon (`#0a0a0b`)** çift teması, editoryal serif (*Instrument Serif / Newsreader*), rasyonel sans (*Inter*) ve teknik monospace (*JetBrains Mono*) tipografi hiyerarşisi ([ADR-002](./docs/decisions/ADR-002-anti-ai-slop-editorial-swiss-grid.md)).
- **⛩️ Altı Japon Felsefesi İlkesi (Ethos Matrix & Monograph Drawer):** Mühendislik yaklaşımını tanımlayan 6 temel kavramın (*Kaizen* 改善, *Ikigai* 生き甲斐, *Shugyo* 修行, *Gaman* 我慢, *Shikata ga nai* 仕方がない, *Hansei* 反省) `3x2` İsviçre ızgarasında sunulması ve etkileşimli **Monograph Okuma Çekmecesi** ile felsefi/mühendislik yansımalarının incelenebilmesi.
- **🧱 SOLID & Katmanlı ES6 Modül Mimarisi:** Veri (`data.js`), dış servis (`githubService.js`), durum yönetimi (`themeManager.js`, `localizationManager.js`), görsel sunum (`portfolioRenderer.js`) ve kullanıcı etkileşimi (`interactionController.js`) katmanları birbirinden tamamen izole edilmiştir. Yalnızca `js/data.js` güncellenerek yeni proje, deneyim veya felsefi ilke eklenebilir (*Open/Closed Principle* — [ADR-001](./docs/decisions/ADR-001-modular-portfolio-architecture.md)).
- **🔄 Canlı GitHub API Senkronizasyonu & Dayanıklılık:** Numaralı proje indeksindeki depo istatistikleri GitHub REST API üzerinden canlı çekilir; API rate-limit veya çevrimdışı durumlarına karşı `sessionStorage` önbellekleme ve statik veri geri dönüşü (*graceful fallback*) mevcuttur.
- **🌍 Çift Dilli (TR / EN) Reaktif Dil Motoru:** Sayfa yenilemesine gerek kalmadan tüm arayüz metinlerini, teknik indeksleri ve 6 Japon felsefesi monografisini Türkçe ve İngilizce arasında anında değiştiren i18n modülü.

---

## 🇬🇧 Overview (English)

This repository hosts the personal engineering portfolio of **Mehmet İhsan Ekinci**, presenting projects and technical experience across software architecture, computer networks, cybersecurity, and systems engineering, alongside an isolated archive of university coursework.

Built with a **zero-build, zero-dependency** philosophy using native **ES6 Modules** and **strict SOLID principles**, the interface deliberately rejects generic "AI Slop" tropes (neon gradients, glassmorphism, floating orbs) in favor of an **Editorial Minimalist + 1px Hairline Swiss Grid** aesthetic, a **Warm Architectural Paper / Matte Carbon** dual palette, and an interactive **Six Japanese Philosophies (Ethos Monograph)** matrix.

### ✨ Key Engineering & Design Highlights
- **📐 Editorial Minimalist & 1px Swiss Grid System:** Engineered around a 12-column exposed hairline grid (`1px solid`), numbered full-width project index rows, and a refined **Warm Paper (`#f6f5f1`) / Matte Carbon (`#0a0a0b`)** dual theme with vermilion accents ([ADR-002](./docs/decisions/ADR-002-anti-ai-slop-editorial-swiss-grid.md)).
- **⛩️ Six Japanese Philosophies (Ethos Matrix & Monograph Drawer):** An interactive `3x2` grid exploring *Kaizen* (改善), *Ikigai* (生き甲斐), *Shugyo* (修行), *Gaman* (我慢), *Shikata ga nai* (仕方がない), and *Hansei* (反省), complete with an accessible **Monograph Reading Drawer** detailing how each philosophy informs systems architecture and network security engineering.
- **🧱 SOLID & Layered ES6 Module Architecture:** Strict separation of concerns across data configuration (`data.js`), external API integration (`githubService.js`), state management (`themeManager.js`, `localizationManager.js`), DOM rendering (`portfolioRenderer.js`), and UI interactions (`interactionController.js`) ([ADR-001](./docs/decisions/ADR-001-modular-portfolio-architecture.md)).
- **🔄 Live GitHub API Sync with Graceful Fallback:** Real-time repository metadata fetched via the GitHub REST API, backed by `sessionStorage` caching and automatic static fallback.
- **🌍 Bilingual (TR / EN) Localization Engine:** Reactive client-side i18n module supporting instant switching between Turkish and English across all project rows, timeline entries, and philosophical monographs.

---

## 🗂️ Mimari Yapı Ağacı / Project Architecture

```text
mihsanekinci.github.io/
├── index.html                  # Ana Single-Page portfolyo giriş noktası (Semantic HTML5 & Swiss Grid)
├── css/                        # Modüler stil katmanı (Editorial Design Tokens, 1px Swiss Grid, Bileşenler)
├── js/
│   ├── app.js                  # Uygulama orkestratörü ve modül başlatıcısı (Bootstrapper)
│   ├── data.js                 # Tek doğruluk kaynağı (Projeler, 6 Japon Felsefesi, deneyimler, TR/EN sözlükleri)
│   ├── services/
│   │   └── githubService.js    # GitHub REST API istemcisi, sessionStorage önbellek & fallback
│   └── modules/
│       ├── themeManager.js         # Sıcak Kağıt (Light) / Mat Karbon (Dark) tema durumu yönetimi
│       ├── localizationManager.js  # TR/EN çoklu dil (i18n) durumu ve reaktif DOM güncellemesi
│       ├── portfolioRenderer.js    # 1px Swiss Grid, Numaralı Proje İndeksi ve Ethos Monograph render motoru
│       └── interactionController.js# Ethos okuma çekmecesi, navigasyon, filtreleme ve IntersectionObserver
├── docs/
│   └── decisions/
│       ├── ADR-001-modular-portfolio-architecture.md      # Modüler ES6 & SOLID Mimari Karar Kaydı
│       └── ADR-002-anti-ai-slop-editorial-swiss-grid.md   # Editorial Swiss Grid & 6 Japon Felsefesi Karar Kaydı
└── labs/                       # Arşivlenen Web Programlama Dersi laboratuvar çalışmaları
```

### 📑 Mimari Karar Kayıtları (Architecture Decision Records)
- [**ADR-001:** Modüler Kişisel Mühendislik Portfolyosu Mimarisi ve Ders Laboratuvarlarının Arşivlenmesi](./docs/decisions/ADR-001-modular-portfolio-architecture.md)
- [**ADR-002:** "AI Slop" Unsurlarının Kaldırılması, Editorial + 1px Swiss Grid Mimarisi ve Altı Japon Felsefesi İlkesi (Ethos)](./docs/decisions/ADR-002-anti-ai-slop-editorial-swiss-grid.md)

---

## 🧪 Web Programlama Dersi Laboratuvar Arşivi (`/labs/`)

Bu deponun önceki dönemlerde ev sahipliği yaptığı **Web Programlama Dersi** laboratuvar çalışmaları ve ödevleri, ana portfolyo mimarisinden izole edilerek [`/labs/`](./labs/) dizini altında arşivlenmiştir:

- 📂 [**Tüm Laboratuvar Çalışmaları Dizinine Git (`./labs/`)**](./labs/)
- 🌐 [**Canlı Ders Arşivi (`/labs/`)**](https://mihsanekinci.github.io/labs/)

---

## 📬 İletişim / Contact

- **Web:** [mihsanekinci.github.io](https://mihsanekinci.github.io)
- **GitHub:** [@mihsanekinci](https://github.com/mihsanekinci)
