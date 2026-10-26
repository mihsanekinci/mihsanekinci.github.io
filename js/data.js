/**
 * Mehmet İhsan Ekinci — Portfolio Data & Localization (TR / EN)
 * Bu dosya sitedeki tüm metinleri, projeleri, deneyimleri ve yetenekleri barındırır.
 */

export const siteData = {
    profile: {
        name: "Mehmet İhsan Ekinci",
        shortName: "MİE",
        githubUser: "mihsanekinci",
        githubUrl: "https://github.com/mihsanekinci",
        linkedinUrl: "https://www.linkedin.com/in/mehmetihsanekinci/",
        emailPrimary: "ihsanekinci@marun.edu.tr",
        emailSecondary: "ihsanekinci131@gmail.com",
        location: {
            tr: "İstanbul, Türkiye",
            en: "Istanbul, Turkey"
        }
    },

    i18n: {
        tr: {
            nav: {
                about: "Hakkımda",
                experience: "Deneyim & Eğitim",
                projects: "Projeler",
                skills: "Yetenekler",
                contact: "İletişim",
                status: "Mühendislik Projelerine Açık"
            },
            hero: {
                badge: "Sistem, Ağ Güvenliği & Yazılım Mühendisliği",
                greeting: "Merhaba, ben",
                subtitle: "Marmara Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Ağ ve siber güvenlik mimarileri, Linux sistem programlama, temiz yazılım prensipleri (SOLID) ve modern web teknolojileri kesişiminde uçtan uca mühendislik çözümleri üretiyorum.",
                ctaProjects: "Projeleri İncele",
                ctaContact: "İletişime Geç",
                copyEmail: "E-postayı Kopyala",
                copied: "Kopyalandı!",
                terminalTitle: "mie@workstation: ~",
                stats: {
                    repos: "Açık Kaynak Repo",
                    focus: "Temel Odak Alanı",
                    architecture: "Mimari Yaklaşım"
                }
            },
            about: {
                sectionTag: "01 // HAKKIMDA & FELSEFE",
                title: "Mühendislik Yaklaşımım",
                subtitle: "Düşük seviyeli sistem protokollerinden ölçeklenebilir modern arayüzlere kadar, yazılımı bir zanaat ve disiplin olarak ele alıyorum.",
                bentoMainTitle: "Sistem Düşüncesi & Temiz Mimari",
                bentoMainDesc: "Bir yazılımın yalnızca çalışması yetmez; güvenli, okunabilir, test edilebilir ve sürdürülebilir olması gerekir. Ağ katmanındaki paket akışından (TCP/IP, epoll) uygulama katmanındaki SOLID prensiplerine kadar her seviyede modülerliği ve performansı önceliklendiriyorum.",
                bentoHighlights: [
                    "Ağ & Siber Güvenlik (TCP/IP, OWASP, Trafik Analizi)",
                    "Sistem & Gömülü Linux Programlama (C, epoll, Asenkron I/O)",
                    "Modüler Yazılım Mimarisi (TypeScript, Python, ASP.NET Core, SOLID)"
                ],
                kaizenTitle: "Kaizen (改善)",
                kaizenSub: "Sürekli İyileşme",
                kaizenDesc: "Her commit'te daha temiz kod, daha düşük gecikme ve daha yüksek güvenlik standardı için iteratif gelişim.",
                ikigaiTitle: "Ikigai (生き甲斐)",
                ikigaiSub: "Üretim Amacı",
                ikigaiDesc: "Karmaşık mühendislik problemlerini son kullanıcı ve sistemler için sade, güvenilir ve hızlı araçlara dönüştürmek.",
                shugyoTitle: "Shugyo (修行)",
                shugyoSub: "Mühendislik Disiplini",
                shugyoDesc: "Derinlemesine teknik araştırma, güçlü dokümantasyon kültürü ve sürekli pratik ile ustalığa odaklanmak."
            },
            experience: {
                sectionTag: "02 // YOLCULUK",
                title: "Deneyim & Eğitim",
                subtitle: "Akademik altyapım ve sektörel mühendislik çalışmalarım."
            },
            projects: {
                sectionTag: "03 // PORTFOLYO",
                title: "Seçilmiş Mühendislik Projeleri",
                subtitle: "Ağ güvenliği, sistem programlama, yapay zekâ ve modern web mimarileri üzerine geliştirdiğim açık kaynak çalışmalar.",
                filters: {
                    all: "Tümü",
                    network: "Ağ & Güvenlik",
                    systems: "Sistem & C",
                    web: "Web & Mimari",
                    ai: "AI & Veri"
                },
                viewCode: "Kaynak Kodu",
                viewAllGithub: "GitHub'da Tüm Projeleri Gör",
                liveSyncNote: "GitHub API ile senkronize"
            },
            skills: {
                sectionTag: "04 // TEKNOLOJİ YIĞINI",
                title: "Teknik Yetkinlikler",
                subtitle: "Kullandığım programlama dilleri, sistem araçları ve mühendislik standartları."
            },
            contact: {
                sectionTag: "05 // İLETİŞİM",
                title: "Birlikte Çalışalım",
                subtitle: "Staj, mühendislik projeleri, açık kaynak iş birlikleri veya teknik sohbetler için bana doğrudan ulaşabilirsiniz.",
                emailCardTitle: "Akademik & Birincil E-posta",
                emailAltTitle: "Kişisel E-posta",
                copyBtn: "Kopyala",
                sendEmailBtn: "E-posta Gönder",
                formTitle: "Hızlı Mesaj Oluştur",
                formName: "Adınız Soyadınız",
                formNamePlaceholder: "Örn: Ahmet Yılmaz",
                formSubject: "Konu",
                formSubjectOptions: {
                    project: "Mühendislik Projesi / İş Birliği",
                    job: "Staj / Kariyer Fırsatı",
                    opensource: "Açık Kaynak Katkısı",
                    other: "Diğer / Merhaba"
                },
                formMessage: "Mesajınız",
                formMessagePlaceholder: "Merhaba İhsan, projeniz/profiliniz hakkında...",
                formSubmit: "E-posta İstemcisinde Aç →",
                responseNote: "Genellikle 24 saat içinde dönüş yapıyorum."
            },
            footer: {
                rights: "Tüm hakları saklıdır.",
                builtWith: "Modern HTML5, CSS3 & Vanilla ES6+ ile tasarlandı.",
                labsArchive: "📚 Web Programlama Dersi Lab Arşivi (/labs)",
                backToTop: "Yukarı Çık ↑"
            }
        },

        en: {
            nav: {
                about: "About",
                experience: "Experience",
                projects: "Projects",
                skills: "Tech Stack",
                contact: "Contact",
                status: "Available for Engineering Roles"
            },
            hero: {
                badge: "Systems, Network Security & Software Engineering",
                greeting: "Hi, I'm",
                subtitle: "Computer Engineering student at Marmara University. I build reliable end-to-end engineering solutions at the intersection of network & cybersecurity architectures, Linux systems programming, clean software design (SOLID), and modern web technologies.",
                ctaProjects: "Explore Projects",
                ctaContact: "Get in Touch",
                copyEmail: "Copy Email",
                copied: "Copied!",
                terminalTitle: "mie@workstation: ~",
                stats: {
                    repos: "Open Source Repos",
                    focus: "Core Focus Areas",
                    architecture: "Architecture Standard"
                }
            },
            about: {
                sectionTag: "01 // ABOUT & PHILOSOPHY",
                title: "Engineering Mindset",
                subtitle: "From low-level system protocols to scalable modern interfaces, I treat software engineering as both a rigorous science and a craft.",
                bentoMainTitle: "Systems Thinking & Clean Architecture",
                bentoMainDesc: "Working code is only the baseline—software must be secure, maintainable, testable, and resilient. From packet-level network flows (TCP/IP, epoll) to application-layer SOLID principles, I prioritize modularity and performance across the stack.",
                bentoHighlights: [
                    "Network & Cyber Security (TCP/IP, OWASP, Traffic Analysis)",
                    "Systems & Embedded Linux Programming (C, epoll, Async I/O)",
                    "Modular Software Architecture (TypeScript, Python, ASP.NET Core, SOLID)"
                ],
                kaizenTitle: "Kaizen (改善)",
                kaizenSub: "Continuous Improvement",
                kaizenDesc: "Iterative refinement with every commit—striving for cleaner abstractions, lower latency, and stronger security.",
                ikigaiTitle: "Ikigai (生き甲斐)",
                ikigaiSub: "Purposeful Building",
                ikigaiDesc: "Transforming complex engineering challenges into intuitive, fast, and dependable tools that create real value.",
                shugyoTitle: "Shugyo (修行)",
                shugyoSub: "Engineering Discipline",
                shugyoDesc: "Pursuing mastery through deep technical research, structured documentation, and consistent hands-on practice."
            },
            experience: {
                sectionTag: "02 // JOURNEY",
                title: "Experience & Education",
                subtitle: "My academic foundation and industry engineering experience."
            },
            projects: {
                sectionTag: "03 // PORTFOLIO",
                title: "Featured Engineering Projects",
                subtitle: "Open-source projects spanning network security, systems programming, AI integration, and modern software architecture.",
                filters: {
                    all: "All",
                    network: "Network & Security",
                    systems: "Systems & C",
                    web: "Web & Architecture",
                    ai: "AI & Data"
                },
                viewCode: "Source Code",
                viewAllGithub: "View All Projects on GitHub",
                liveSyncNote: "Synced with GitHub API"
            },
            skills: {
                sectionTag: "04 // TECH STACK",
                title: "Technical Competencies",
                subtitle: "Languages, systems tools, and architectural standards I work with."
            },
            contact: {
                sectionTag: "05 // CONTACT",
                title: "Let's Build Together",
                subtitle: "Feel free to reach out directly for engineering roles, internships, open-source collaborations, or technical discussions.",
                emailCardTitle: "Academic & Primary Email",
                emailAltTitle: "Personal Email",
                copyBtn: "Copy",
                sendEmailBtn: "Send Email",
                formTitle: "Quick Message Composer",
                formName: "Your Name",
                formNamePlaceholder: "e.g. Jane Doe",
                formSubject: "Subject",
                formSubjectOptions: {
                    project: "Engineering Project / Collaboration",
                    job: "Internship / Career Opportunity",
                    opensource: "Open Source Contribution",
                    other: "Other / Say Hello"
                },
                formMessage: "Your Message",
                formMessagePlaceholder: "Hi Ihsan, I'd love to connect regarding...",
                formSubmit: "Open in Email Client →",
                responseNote: "Typically responds within 24 hours."
            },
            footer: {
                rights: "All rights reserved.",
                builtWith: "Engineered with semantic HTML5, modern CSS3 & Vanilla ES6+.",
                labsArchive: "📚 Web Programming Course Lab Archive (/labs)",
                backToTop: "Back to Top ↑"
            }
        }
    },

    timeline: [
        {
            type: "experience",
            period: {
                tr: "2026 — Günümüz",
                en: "2026 — Present"
            },
            role: {
                tr: "Ağ ve Ağ Güvenliği Mühendisliği (İş Yeri Eğitimi / Staj)",
                en: "Network & Network Security Engineering (Workplace Training / Intern)"
            },
            organization: "mayaICT",
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            },
            description: {
                tr: "Kurumsal ağ topolojileri, güvenlik duvarı politikaları, ağ trafiği analizi ve siber güvenlik protokolleri üzerine uygulamalı mühendislik çalışmaları. Teknik süreçlerin yapılandırılmış dokümantasyonu ve güvenli ağ mimarisi tasarımı.",
                en: "Hands-on engineering focused on enterprise network topologies, firewall policies, traffic analysis, and cybersecurity protocols. Structured technical documentation and resilient network architecture design."
            },
            tags: ["Network Security", "TCP/IP", "Routing & Switching", "Firewall Policies", "Linux"]
        },
        {
            type: "education",
            period: {
                tr: "Devam Ediyor",
                en: "Ongoing"
            },
            role: {
                tr: "Bilgisayar Mühendisliği (Lisans)",
                en: "B.Sc. in Computer Engineering"
            },
            organization: {
                tr: "Marmara Üniversitesi — Teknoloji Fakültesi",
                en: "Marmara University — Faculty of Technology"
            },
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            },
            description: {
                tr: "Sistem programlama, bilgisayar ağları, işletim sistemleri, yazılım mimarileri, bulut mimarilerinde test mühendisliği ve modern web teknolojileri üzerine kapsamlı mühendislik eğitimi.",
                en: "Comprehensive computer engineering curriculum covering systems programming, computer networks, operating systems, software architecture, cloud test engineering, and modern web technologies."
            },
            tags: ["Systems Programming", "Computer Networks", "Software Architecture", "Cloud Testing", "Algorithms"]
        }
    ],

    projects: [
        {
            id: "kesital",
            repo: "kesital",
            title: "KesitAl — Video Scrubber & Clipper",
            category: "web",
            featured: true,
            badge: "SOLID & TypeScript",
            description: {
                tr: "QuickTime tarzı görsel zaman çubuğuna (Scrubber) sahip, YouTube ve web videolarından milisaniye hassasiyetinde kesit indirme aracı. Katı SOLID prensipleri, modüler TypeScript mimarisi, yt-dlp ve FFmpeg entegrasyonu ile geliştirildi.",
                en: "QuickTime-style visual timeline scrubber and precision video clipper for YouTube & web streams. Engineered with strict SOLID architecture, TypeScript, yt-dlp, and FFmpeg."
            },
            tech: ["TypeScript", "SOLID", "FFmpeg", "yt-dlp", "Node.js"],
            url: "https://github.com/mihsanekinci/kesital"
        },
        {
            id: "event-io-project",
            repo: "event-io-project",
            title: "Event-IO — epoll Async Server",
            category: "systems",
            featured: true,
            badge: "Linux Systems / C",
            description: {
                tr: "Linux çekirdeğinin epoll I/O çoklama (multiplexing) mekanizmasını kullanan, bloklamayan (non-blocking) soket mimarisine sahip yüksek performanslı asenkron çoklu istemci sohbet ve olay sunucusu.",
                en: "High-performance asynchronous multi-client chat and event server written in C using Linux epoll I/O multiplexing and non-blocking POSIX sockets."
            },
            tech: ["C", "Linux epoll", "POSIX Sockets", "Async I/O", "Systems"],
            url: "https://github.com/mihsanekinci/event-io-project"
        },
        {
            id: "owasp-top10-scanner",
            repo: "owasp-top10-scanner",
            title: "OWASP Top 10 Security Scanner",
            category: "network",
            featured: true,
            badge: "CyberSecurity",
            description: {
                tr: "Web uygulamalarını OWASP Top 10 güvenlik kriterlerine göre analiz eden, olası zafiyet vektörlerini otomatik olarak tarayıp raporlayan Python tabanlı siber güvenlik aracı.",
                en: "Automated security reconnaissance and vulnerability scanner built with Python to analyze web applications against OWASP Top 10 security risks."
            },
            tech: ["Python", "OWASP Top 10", "AppSec", "HTTP Analysis"],
            url: "https://github.com/mihsanekinci/owasp-top10-scanner"
        },
        {
            id: "network",
            repo: "network",
            title: "Network Architecture & Toolkit",
            category: "network",
            featured: true,
            badge: "Networking",
            description: {
                tr: "Ağ topolojileri, protokol analizi ve modern ağ mühendisliği iş akışlarını modellemek ve görselleştirmek için geliştirilen TypeScript tabanlı ağ aracı.",
                en: "TypeScript-based network engineering toolkit designed to model, inspect, and visualize network topologies and protocol workflows."
            },
            tech: ["TypeScript", "Computer Networks", "TCP/IP", "Topology"],
            url: "https://github.com/mihsanekinci/network"
        },
        {
            id: "ai-driven-embedded-linux",
            repo: "ai-driven-embedded-linux",
            title: "AI-Driven Embedded Linux",
            category: "systems",
            featured: false,
            badge: "Embedded & AI",
            description: {
                tr: "Gömülü Linux sistemleri üzerinde düşük seviyeli C programlama ile yapay zekâ destekli karar mekanizmalarını birleştiren sistem mühendisliği projesi.",
                en: "Systems engineering project combining low-level C programming on Embedded Linux with AI-assisted telemetry and decision workflows."
            },
            tech: ["C", "Embedded Linux", "Edge AI", "System Calls"],
            url: "https://github.com/mihsanekinci/ai-driven-embedded-linux"
        },
        {
            id: "real-time-ai-stock-portfolio-monitoring",
            repo: "real-time-ai-stock-portfolio-monitoring",
            title: "Real-Time AI Portfolio Monitor",
            category: "ai",
            featured: false,
            badge: "AI & Real-Time",
            description: {
                tr: "Canlı finansal veri akışlarını takip eden ve yapay zekâ modelleriyle portföy risk/performans analizi sunan gerçek zamanlı izleme platformu.",
                en: "Real-time financial data pipeline and AI-assisted portfolio analytics engine built in Python for live market tracking."
            },
            tech: ["Python", "AI / ML", "Real-Time Streams", "Data Analysis"],
            url: "https://github.com/mihsanekinci/real-time-ai-stock-portfolio-monitoring"
        },
        {
            id: "library-automation-system",
            repo: "library-automation-system",
            title: "Library Automation System",
            category: "web",
            featured: false,
            badge: "JavaFX & SQL",
            description: {
                tr: "Java, JavaFX (Scene Builder) ve SQLite/JSON veri katmanı kullanılarak nesne yönelimli mimariyle geliştirilen kapsamlı masaüstü kütüphane yönetim otomasyonu.",
                en: "Full-featured desktop library management automation engineered with Java, JavaFX (Scene Builder), custom CSS styling, and SQLite/JSON persistence."
            },
            tech: ["Java", "JavaFX", "SQLite", "OOP", "JSON"],
            url: "https://github.com/mihsanekinci/library-automation-system"
        },
        {
            id: "bmtm",
            repo: "bmtm",
            title: "Cloud Architecture Test Engineering",
            category: "web",
            featured: false,
            badge: "Cloud & QA",
            description: {
                tr: "Bulut mimarilerinde mikroservis ve API güvenilirliğini doğrulamak üzere geliştirilen otomatik test mühendisliği senaryoları ve araçları.",
                en: "Automated test engineering suites and verification workflows designed for cloud-native architectures and API reliability."
            },
            tech: ["Python", "Cloud Testing", "API Verification", "QA Automation"],
            url: "https://github.com/mihsanekinci/bmtm"
        }
    ],

    skillCategories: [
        {
            icon: "⚡",
            title: {
                tr: "Programlama & Sistem Dilleri",
                en: "Programming & Systems Languages"
            },
            skills: ["C", "Python", "TypeScript", "JavaScript (ES6+)", "C# / .NET", "Java", "SQL"]
        },
        {
            icon: "🛡️",
            title: {
                tr: "Ağ & Siber Güvenlik",
                en: "Network & Cyber Security"
            },
            skills: ["TCP/IP & OSI", "Network Security", "OWASP Top 10", "Linux Administration", "POSIX Sockets & epoll", "Traffic Analysis"]
        },
        {
            icon: "🏗️",
            title: {
                tr: "Yazılım Mimarisi & Web",
                en: "Software Architecture & Web"
            },
            skills: ["SOLID Principles", "Clean Architecture", "ASP.NET Core", "RESTful APIs", "Semantic HTML5 & CSS3", "Node.js"]
        },
        {
            icon: "🧰",
            title: {
                tr: "Mühendislik Araçları & Ekosistem",
                en: "Engineering Tools & Ecosystem"
            },
            skills: ["Git & GitHub", "Linux / Bash / Zsh", "FFmpeg & yt-dlp", "SQLite", "Cloud Test Automation", "Markdown / Obsidian"]
        }
    ]
};
