/**
 * Mehmet İhsan Ekinci — Editorial Portfolio Data & Localization (TR / EN)
 * Single Responsibility: Sitedeki tüm çeviri sözlüklerini, projeleri, deneyim zaman çizelgesini,
 * teknik yetkinlik matrisini ve Altı Japon İlkesi (Ethos) monografisini barındırır.
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
                about: "01 Profil",
                experience: "02 Deneyim",
                projects: "03 Projeler",
                skills: "04 Yığın",
                ethos: "05 Felsefe",
                contact: "06 İletişim",
                status: "MÜHENDİSLİK PROJELERİNE AÇIK",
                themeToggle: "KARBON",
                themeLight: "KAĞIT",
                themeDark: "KARBON"
            },
            hero: {
                sectionTag: "01 / PROFİL",
                locationLabel: "İstanbul, Türkiye",
                badge: "AĞ GÜVENLİĞİ, LINUX SİSTEMLERİ & YAZILIM MİMARİSİ",
                greeting: "Mehmet İhsan Ekinci",
                subtitle: "Marmara Üniversitesi Bilgisayar Mühendisliği öğrencisi. Ağ ve siber güvenlik protokolleri, düşük seviyeli Linux sistem programlama (C, POSIX, epoll) ve katı SOLID prensiplerine dayalı yazılım mimarileri üzerine çalışıyorum.",
                ctaProjects: "→ Seçilmiş Projeler (08)",
                ctaContact: "İletişim",
                copyEmail: "E-postayı Kopyala",
                copied: "Kopyalandı",
                mascotDesc: "Çevik, meraklı ve sistemin derinliklerine inen mühendislik maskotu.",
                terminalTitle: "mie@workstation: ~",
                stats: {
                    focus: "ODAK ALANLARI",
                    repos: "KURUM & AKADEMİ",
                    architecture: "MİMARİ STANDART"
                }
            },
            about: {
                sectionTag: "01 // MİMARİ YAKLAŞIM",
                title: "Sistem Düşüncesi & Mühendislik Disiplini",
                subtitle: "Çekirdek seviyesi soket yönetiminden uygulama katmanındaki modüler sınırlarına kadar, yazılımı ölçülebilir, denetlenebilir ve uzun ömürlü bir yapı olarak kurguluyorum.",
                bentoMainTitle: "Düşük Gecikme, Açık Sınırlar, Sıfır Sürpriz",
                bentoMainDesc: "Bir sistemin yalnızca beklenen çıktıyı üretmesi yeterli değildir; yük altında öngörülebilir davranması, güvenlik sınırlarının açıkça tanımlanması ve kod tabanının yıllar sonra bile okunabilir kalması gerekir.",
                bentoHighlights: [
                    "Ağ & Siber Güvenlik (TCP/IP, OWASP Top 10, Trafik & Protokol Analizi)",
                    "Sistem & Gömülü Linux Programlama (C, epoll, Non-Blocking POSIX I/O)",
                    "Modüler Yazılım Mimarisi (TypeScript, Python, ASP.NET Core, Katı SOLID)"
                ],
                kaizenTitle: "Kaizen (改善)",
                kaizenSub: "Sürekli İyileşme",
                kaizenDesc: "Her commit'te daha temiz soyutlamalar, daha düşük gecikme ve daha az teknik borç için günlük iteratif gelişim.",
                ikigaiTitle: "Ikigai (生き甲斐)",
                ikigaiSub: "Varoluş & Üretim Amacı",
                ikigaiDesc: "Karmaşık sistem problemlerini sade, hızlı ve güvenilir mühendislik araçlarına dönüştürme sorumluluğu.",
                shugyoTitle: "Shugyo (修行)",
                shugyoSub: "Derin Disiplin & Ustalık",
                shugyoDesc: "Yüzeysel çözümler yerine RFC belgelerine, çekirdek mekanizmalarına ve temiz dokümantasyona inen çalışma kültürü."
            },
            experience: {
                sectionTag: "02 // DENEYİM & EĞİTİM",
                title: "Sektörel Deneyim & Akademik Altyapı",
                subtitle: "Kurumsal ağ güvenliği mühendisliği pratiğim ve bilgisayar mühendisliği lisans eğitimim."
            },
            projects: {
                sectionTag: "03 // SEÇİLMİŞ ÇALIŞMALAR",
                title: "Mühendislik Projeleri İndeksi",
                subtitle: "Ağ güvenliği, Linux sistem programlama, gömülü sistemler ve modüler yazılım mimarileri üzerine geliştirdiğim açık kaynak projeler.",
                filters: {
                    all: "Tümü [08]",
                    network: "Ağ & Güvenlik",
                    systems: "Sistem & C",
                    web: "Web & Mimari",
                    ai: "AI & Veri"
                },
                viewCode: "Kaynak Kodu",
                viewAllGithub: "GitHub Arşivinin Tamamı →",
                liveSyncNote: "GitHub API Senkron"
            },
            skills: {
                sectionTag: "04 // TEKNİK YIĞIN",
                title: "Yetkinlik Matrisi",
                subtitle: "Aktif üretimde kullandığım diller, ağ/sistem araçları ve mimari standartlar."
            },
            ethos: {
                sectionTag: "05 / ETHOS",
                title: "Altı İlke",
                subtitle: "Yazılım mühendisliği pratiğimde ve kişisel gelişim yolculuğumda rehber aldığım altı Japon disiplini.",
                openMonograph: "→ Tüm İlkeleri Derinlemesine Oku",
                drawerTag: "MONOGRAPH // ALTI JAPON İLKESİ",
                closeBtn: "KAPAT [ESC]",
                engineeringLabel: "MÜHENDİSLİK YANSIMASI",
                readMore: "Derinlemesine Oku →"
            },
            contact: {
                sectionTag: "06 // İLETİŞİM",
                title: "Doğrudan İletişim",
                subtitle: "Mühendislik rolleri, staj, açık kaynak projeler veya teknik fikir alışverişi için doğrudan e-posta gönderebilirsiniz.",
                emailCardTitle: "Akademik & Birincil E-posta",
                emailAltTitle: "Kişisel E-posta",
                copyBtn: "Kopyala",
                sendEmailBtn: "E-posta Gönder",
                formTitle: "Hızlı Mesaj Oluşturucu",
                formName: "Adınız Soyadınız",
                formNamePlaceholder: "Örn: Ahmet Yılmaz",
                formSubject: "Konu",
                formSubjectOptions: {
                    project: "Mühendislik Projesi / İş Birliği",
                    job: "Staj / Mühendislik Rolü",
                    opensource: "Açık Kaynak Katkısı",
                    other: "Diğer / Teknik İletişim"
                },
                formMessage: "Mesajınız",
                formMessagePlaceholder: "Merhaba İhsan, yürüttüğünüz çalışmalar hakkında...",
                formSubmit: "E-posta İstemcisinde Aç →",
                responseNote: "Mesajlara genellikle 24 saat içinde yanıt verilir."
            },
            footer: {
                rights: "Tüm hakları saklıdır.",
                builtWith: "Semantik HTML5, 1px Swiss Grid CSS ve Vanilla ES6+ ile sıfır bağımlılıkla inşa edildi.",
                labsArchive: "Web Programlama Dersi Lab Arşivi (/labs) →",
                backToTop: "Yukarı Çık ↑"
            }
        },

        en: {
            nav: {
                about: "01 Profile",
                experience: "02 Experience",
                projects: "03 Projects",
                skills: "04 Stack",
                ethos: "05 Ethos",
                contact: "06 Contact",
                status: "AVAILABLE FOR ENGINEERING ROLES",
                themeToggle: "CARBON",
                themeLight: "PAPER",
                themeDark: "CARBON"
            },
            hero: {
                sectionTag: "01 / PROFILE",
                locationLabel: "Istanbul, Turkey",
                badge: "NETWORK SECURITY, LINUX SYSTEMS & SOFTWARE ARCHITECTURE",
                greeting: "Mehmet İhsan Ekinci",
                subtitle: "Computer Engineering student at Marmara University. Focused on network security protocols, low-level Linux systems programming (C, POSIX, epoll), and modular software architectures built on strict SOLID principles.",
                ctaProjects: "→ Selected Projects (08)",
                ctaContact: "Contact",
                copyEmail: "Copy Email",
                copied: "Copied",
                mascotDesc: "Curious, agile, and deep-diving engineering mascot.",
                terminalTitle: "mie@workstation: ~",
                stats: {
                    focus: "CORE FOCUS",
                    repos: "AFFILIATION",
                    architecture: "ARCHITECTURE"
                }
            },
            about: {
                sectionTag: "01 // ARCHITECTURAL APPROACH",
                title: "Systems Thinking & Engineering Discipline",
                subtitle: "From kernel-level socket multiplexing to modular application boundaries, I engineer software to be measurable, auditable, and built to last.",
                bentoMainTitle: "Low Latency, Explicit Boundaries, Zero Surprises",
                bentoMainDesc: "Producing the expected output is only the baseline. A well-engineered system must behave predictably under load, enforce strict security boundaries, and remain intelligible for years.",
                bentoHighlights: [
                    "Network & Cyber Security (TCP/IP, OWASP Top 10, Traffic & Protocol Analysis)",
                    "Systems & Embedded Linux Programming (C, epoll, Non-Blocking POSIX I/O)",
                    "Modular Software Architecture (TypeScript, Python, ASP.NET Core, Strict SOLID)"
                ],
                kaizenTitle: "Kaizen (改善)",
                kaizenSub: "Continuous Improvement",
                kaizenDesc: "Daily incremental refinement—cleaner abstractions, lower latency, and reduced technical debt with every commit.",
                ikigaiTitle: "Ikigai (生き甲斐)",
                ikigaiSub: "Purposeful Craft",
                ikigaiDesc: "The responsibility of turning complex systems problems into clear, fast, and dependable engineering tools.",
                shugyoTitle: "Shugyo (修行)",
                shugyoSub: "Austere Mastery",
                shugyoDesc: "Going beyond surface-level fixes to study RFC specifications, kernel internals, and rigorous documentation."
            },
            experience: {
                sectionTag: "02 // EXPERIENCE & EDUCATION",
                title: "Industry Experience & Academic Foundation",
                subtitle: "Enterprise network security engineering practice and undergraduate computer engineering studies."
            },
            projects: {
                sectionTag: "03 // SELECTED WORKS",
                title: "Engineering Projects Index",
                subtitle: "Open-source systems spanning network security, Linux systems programming, embedded telemetry, and modular software architecture.",
                filters: {
                    all: "All [08]",
                    network: "Network & Security",
                    systems: "Systems & C",
                    web: "Web & Architecture",
                    ai: "AI & Data"
                },
                viewCode: "Source Code",
                viewAllGithub: "Full GitHub Archive →",
                liveSyncNote: "GitHub API Synced"
            },
            skills: {
                sectionTag: "04 // TECHNICAL STACK",
                title: "Competency Matrix",
                subtitle: "Languages, network/systems tooling, and architectural standards used in production."
            },
            ethos: {
                sectionTag: "05 / ETHOS",
                title: "Six Pillars",
                subtitle: "Six Japanese philosophical principles guiding my software engineering craft and personal discipline.",
                openMonograph: "→ Read Full Monograph",
                drawerTag: "MONOGRAPH // SIX JAPANESE PILLARS",
                closeBtn: "CLOSE [ESC]",
                engineeringLabel: "ENGINEERING REFLECTION",
                readMore: "Deep Dive →"
            },
            contact: {
                sectionTag: "06 // CONTACT",
                title: "Direct Correspondence",
                subtitle: "Reach out directly for engineering roles, internships, open-source collaboration, or technical correspondence.",
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
                    job: "Internship / Engineering Role",
                    opensource: "Open Source Contribution",
                    other: "Other / Technical Inquiry"
                },
                formMessage: "Message",
                formMessagePlaceholder: "Hello Ihsan, reaching out regarding...",
                formSubmit: "Open in Email Client →",
                responseNote: "Typically responds within 24 hours."
            },
            footer: {
                rights: "All rights reserved.",
                builtWith: "Engineered with zero dependencies using semantic HTML5, 1px Swiss Grid CSS, and Vanilla ES6+.",
                labsArchive: "Web Programming Course Lab Archive (/labs) →",
                backToTop: "Back to Top ↑"
            }
        }
    },

    ethos: [
        {
            id: "kaizen",
            code: "01",
            name: "KAIZEN",
            kanji: "改善",
            pronunciation: "Kai-zen",
            subtitle: {
                tr: "Sürekli İyileşme",
                en: "Continuous Improvement"
            },
            summary: {
                tr: "Büyük sıçramalar yerine her gün, her commit'te %1 daha temiz ve daha sağlam bir yapı kurma disiplini.",
                en: "The discipline of incremental daily refinement—building 1% cleaner, faster, and more resilient systems with every commit."
            },
            deepDive: {
                tr: "Kaizen, mükemmelliğin bir varış noktası değil, kesintisiz bir süreç olduğunu kabul eder. Gösterişli ama kırılgan yeniden yazımlar (rewrite) yerine, mevcut sistemi her gün küçük, ölçülebilir ve geri alınabilir adımlarla iyileştirmeyi temel alır. Küçük kazanımlar zaman içinde bileşik etki (compound interest) yaratarak sıradan bir kod tabanını sarsılmaz bir mühendislik yapısına dönüştürür.",
                en: "Kaizen recognizes that excellence is not a static milestone, but an ongoing process. Rather than chasing sweeping, fragile rewrites, it favors small, measurable, and reversible daily improvements. Over time, these incremental gains compound—transforming an ordinary codebase into a durable engineering system."
            },
            engineeringReflection: {
                tr: "Sürekli refactoring, teknik borcun birikmeden temizlenmesi, anlamlı commit geçmişi ve her iterasyonda bellek/gecikme maliyetlerini düşürme alışkanlığı.",
                en: "Continuous refactoring, systematic technical debt reduction, atomic commits, and iterative latency/memory optimization."
            }
        },
        {
            id: "ikigai",
            code: "02",
            name: "IKIGAI",
            kanji: "生き甲斐",
            pronunciation: "Iki-gai",
            subtitle: {
                tr: "Varoluş & Üretim Amacı",
                en: "Purposeful Craft"
            },
            summary: {
                tr: "Derin teknik merak ile gerçek dünya problemlerini çözen somut araçlar üretme sorumluluğunun kesişimi.",
                en: "The intersection of deep technical curiosity and the responsibility of building tools that solve real engineering problems."
            },
            deepDive: {
                tr: "Ikigai, insanın sabah yataktan kalkma nedenini; tutku, uzmanlık, toplumsal ihtiyaç ve emeğin birleştiği denge noktasını ifade eder. Mühendislikte Ikigai, yalnızca soyut teoride kalmayıp başkalarının güvenle kullanabileceği, işini kolaylaştıran ve gerçekten çalışan somut sistemler inşa etmektir.",
                en: "Ikigai represents one's reason for being—the convergence of mastery, curiosity, real-world utility, and craft. In software engineering, it means moving beyond abstract theory to ship reliable, high-utility tools that people and infrastructure can depend on."
            },
            engineeringReflection: {
                tr: "Yalnızca ödev veya vitrin için değil; ağ güvenliği tarayıcılarından milisaniye hassasiyetli medya araçlarına kadar gerçek bir ihtiyacı çözen açık kaynak yazılımlar üretmek.",
                en: "Building open-source software that solves concrete problems—from automated security reconnaissance to precision media tooling—rather than hollow showcase demos."
            }
        },
        {
            id: "shugyo",
            code: "03",
            name: "SHUGYO",
            kanji: "修行",
            pronunciation: "Shu-gyo",
            subtitle: {
                tr: "Derin Disiplin & Ustalık",
                en: "Austere Mastery"
            },
            summary: {
                tr: "Hazır kütüphanelerin arkasına saklanmadan, protokollerin ve işletim sistemi çekirdeğinin nasıl çalıştığını öğrenme gayreti.",
                en: "Looking beneath high-level abstractions to master raw protocols, operating system internals, and foundational computer science."
            },
            deepDive: {
                tr: "Shugyo, bir zanaatte ustalığa ulaşmak için gönüllü olarak üstlenilen zorlu ve tavizsiz eğitim sürecidir. Modern yazılımda her şeyi hazır paketlerle çözmek kolaydır; ancak kriz anında sistemi kurtaran şey, soyutlama katmanlarının altındaki TCP durum makinelerini, dosya tanımlayıcılarını (file descriptors) ve bellek düzenini bilmektir.",
                en: "Shugyo is the rigorous, self-imposed training undertaken to achieve true mastery in a craft. While modern frameworks make it easy to assemble features quickly, true resilience comes from understanding what happens beneath the abstraction layer: TCP state machines, file descriptors, and memory layout."
            },
            engineeringReflection: {
                tr: "Linux çekirdeğinde epoll ile bloklamayan (non-blocking) C sunucuları yazmak, RFC dokümanlarını okumak ve her projeyi mimari karar kayıtlarıyla (ADR) belgelendirmek.",
                en: "Writing non-blocking C servers with Linux epoll, studying RFC specifications directly, and documenting systems with structured Architecture Decision Records (ADRs)."
            }
        },
        {
            id: "gaman",
            code: "04",
            name: "GAMAN",
            kanji: "我慢",
            pronunciation: "Ga-man",
            subtitle: {
                tr: "Metanet & Sebat",
                en: "Enduring Patience"
            },
            summary: {
                tr: "Karmaşık sistem hataları, belirsizlikler ve zorlu hata ayıklama süreçleri karşısında soğukkanlılığı ve odağı koruma gücü.",
                en: "Maintaining composure, analytical clarity, and persistence when debugging elusive systems failures under pressure."
            },
            deepDive: {
                tr: "Gaman, zorluklar karşısında şikâyet etmeden, vakar ve sabırla direnmek demektir. Düşük seviyeli sistem programlamada veya ağ trafiği analizinde bazen tek bir yarış durumu (race condition) veya paket kaybı saatler süren inceleme gerektirir. Gaman, paniğe kapılıp rastgele denemeler yapmak yerine hipotez kurarak sabırla kök nedene inmektir.",
                en: "Gaman means enduring the seemingly unbearable with patience, dignity, and quiet resolve. In systems programming and network security, a single race condition or malformed packet can take hours to isolate. Gaman is the discipline to resist guesswork and methodically trace the root cause."
            },
            engineeringReflection: {
                tr: "Rastgele kod değiştirmek yerine logları, paket dökümlerini (pcap) ve sistem çağrılarını (strace/gdb) adım adım izleyerek deterministik kök neden analizi yapmak.",
                en: "Replacing trial-and-error guesswork with deterministic root-cause analysis through packet captures, system call tracing, and reproducible test cases."
            }
        },
        {
            id: "shikata-ga-nai",
            code: "05",
            name: "SHIKATA GA NAI",
            kanji: "仕方がない",
            pronunciation: "Shi-ka-ta ga nai",
            subtitle: {
                tr: "Kabul & Odak",
                en: "Pragmatic Acceptance"
            },
            summary: {
                tr: "Kontrol edilemeyen dış kısıtları hızla kabul edip, enerjiyi yalnızca kontrol edebileceğimiz mühendislik çözümlerine yönlendirmek.",
                en: "Accepting external constraints without friction, channeling 100% of engineering effort into variables within our control."
            },
            deepDive: {
                tr: "Shikata ga nai pasif bir boyun eğme değil, değiştirilemeyecek gerçeklerle kavga ederek vakit kaybetmeme bilgeliğidir. Donanım limitleri, üçüncü parti API kesintileri, ağ gecikmeleri veya eski (legacy) protokol kısıtları gerçektir; mühendisin görevi bunlardan yakınmak değil, bu kısıtlar altında dahi ayakta kalan hata-toleranslı (fault-tolerant) mimariler kurmaktır.",
                en: "Far from passive resignation, Shikata ga nai is the pragmatic refusal to waste energy fighting unchangeable realities. Hardware limits, third-party rate limits, network partitions, and legacy constraints are facts of life; the engineer's job is to design fault-tolerant architectures that thrive despite them."
            },
            engineeringReflection: {
                tr: "Ağ kesintilerine, API rate-limit sınırlarına ve beklenmedik girdilere karşı her zaman Graceful Fallback, önbellekleme ve savunmacı programlama (defensive programming) uygulamak.",
                en: "Designing with defensive programming, session caching, timeouts, and graceful fallbacks so external failures never crash the core application."
            }
        },
        {
            id: "hansei",
            code: "06",
            name: "HANSEI",
            kanji: "反省",
            pronunciation: "Han-sei",
            subtitle: {
                tr: "Öz-Muhasebe",
                en: "Honest Self-Reflection"
            },
            summary: {
                tr: "Başarılı projelerde bile 'Neyi daha iyi yapabilirdim?' sorusunu sorarak egodan arınmış teknik öz-eleştiri yapmak.",
                en: "Ego-free self-examination after both failures and successes—asking what could have been architected cleaner."
            },
            deepDive: {
                tr: "Hansei, bir iş tamamlandığında—sonuç ne kadar başarılı görünürse görünsün—durup eksikleri, kör noktaları ve geliştirilebilecek kararları dürüstçe masaya yatırmaktır. Hansei olmadan Kaizen (sürekli iyileşme) mümkün değildir; çünkü insan yalnızca fark ettiği ve kabul ettiği kusuru düzeltebilir.",
                en: "Hansei is the practice of honest, ego-free reflection after completing a milestone—regardless of how successful the outcome appears. Without Hansei, Kaizen is impossible: you can only refine the architectural flaws and blind spots you are willing to acknowledge."
            },
            engineeringReflection: {
                tr: "Her proje ve staj dönemi sonunda yapılan blameless post-mortem değerlendirmeleri, eski kod tabanlarını modüler SOLID yapısına dönüştürme cesareti.",
                en: "Conducting blameless post-mortems, auditing past architectural trade-offs, and refactoring legacy codebases into clean, modular SOLID structures."
            }
        }
    ],

    timeline: [
        {
            type: "experience",
            period: {
                tr: "2026 — GÜNÜMÜZ",
                en: "2026 — PRESENT"
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
                tr: "Kurumsal ağ topolojileri, güvenlik duvarı (firewall) politikaları, paket/trafik analizi ve siber güvenlik protokolleri üzerine uygulamalı mühendislik çalışmaları. Ağ altyapı süreçlerinin teknik dokümantasyonu ve güvenli topoloji tasarımı.",
                en: "Applied engineering focused on enterprise network topologies, firewall rule policies, packet/traffic inspection, and cybersecurity protocols. Structured technical documentation and resilient network architecture design."
            },
            tags: ["Network Security", "TCP/IP", "Routing & Switching", "Firewall Policies", "Linux"]
        },
        {
            type: "education",
            period: {
                tr: "DEVAM EDİYOR",
                en: "ONGOING"
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
                tr: "Sistem programlama, bilgisayar ağları, işletim sistemleri, yazılım mimarileri, bulut mimarilerinde test mühendisliği ve algoritma analizi üzerine mühendislik eğitimi.",
                en: "Undergraduate computer engineering curriculum focused on systems programming, computer networks, operating systems, software architecture, cloud test engineering, and algorithms."
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
            badge: "SOLID / TypeScript",
            description: {
                tr: "QuickTime tarzı görsel zaman çubuğuna (Scrubber) sahip, YouTube ve web videolarından milisaniye hassasiyetinde kesit indirme aracı. Katı SOLID prensipleri, modüler TypeScript mimarisi, yt-dlp ve FFmpeg boru hattı ile geliştirildi.",
                en: "QuickTime-style visual timeline scrubber and millisecond-precision video clipper for YouTube and web streams. Engineered with strict SOLID architecture, modular TypeScript, yt-dlp, and FFmpeg."
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
                tr: "Linux çekirdeğinin epoll I/O çoklama (multiplexing) mekanizmasını ve bloklamayan (non-blocking) POSIX soketlerini kullanan, tek iş parçacığı üzerinde çoklu istemci yönetebilen yüksek performanslı C sunucusu.",
                en: "High-concurrency asynchronous multi-client chat and event server written in C using Linux epoll I/O multiplexing and non-blocking POSIX sockets."
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
            badge: "CyberSecurity / Python",
            description: {
                tr: "Web uygulamalarını OWASP Top 10 güvenlik kriterlerine göre inceleyen, HTTP başlıklarını ve olası zafiyet vektörlerini otomatik olarak tarayıp raporlayan Python tabanlı güvenlik analiz aracı.",
                en: "Automated security reconnaissance and vulnerability scanner built in Python to audit web applications against OWASP Top 10 security vectors."
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
            badge: "Networking / TS",
            description: {
                tr: "Ağ topolojilerini, alt ağ (subnet) hesaplamalarını ve protokol akışlarını modellemek ve denetlemek için geliştirilen TypeScript tabanlı ağ mühendisliği aracı.",
                en: "TypeScript-based network engineering toolkit designed to model, inspect, and verify network topologies and protocol workflows."
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
            badge: "Embedded Linux / C",
            description: {
                tr: "Gömülü Linux ortamlarında düşük seviyeli C sistem çağrıları ile yerel yapay zekâ telemetri ve karar süreçlerini birleştiren sistem mühendisliği çalışması.",
                en: "Systems engineering project combining low-level C system calls on Embedded Linux with edge AI telemetry and decision workflows."
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
            badge: "Data Pipeline / Python",
            description: {
                tr: "Canlı finansal veri akışlarını işleyen ve makine öğrenmesi modelleriyle portföy risk/anomali analizi sunan gerçek zamanlı izleme motoru.",
                en: "Real-time financial data stream processor and AI-assisted portfolio risk analytics engine written in Python."
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
            badge: "JavaFX & SQLite",
            description: {
                tr: "Java, JavaFX (Scene Builder) ve SQLite/JSON kalıcılık katmanı kullanılarak nesne yönelimli mimariyle geliştirilen masaüstü kütüphane yönetim sistemi.",
                en: "Desktop library management system engineered with Java, JavaFX (Scene Builder), custom stylesheets, and SQLite/JSON persistence."
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
            badge: "Cloud QA / Python",
            description: {
                tr: "Bulut mimarilerinde mikroservis uç noktalarının ve API sözleşmelerinin güvenilirliğini doğrulamak üzere geliştirilen otomatik test mühendisliği senaryoları.",
                en: "Automated test engineering suites and contract verification workflows designed for cloud-native microservices and API reliability."
            },
            tech: ["Python", "Cloud Testing", "API Verification", "QA Automation"],
            url: "https://github.com/mihsanekinci/bmtm"
        }
    ],

    skillCategories: [
        {
            code: "04.1",
            title: {
                tr: "Programlama & Sistem Dilleri",
                en: "Programming & Systems Languages"
            },
            skills: ["C", "Python", "TypeScript", "JavaScript (ES6+)", "C# / .NET", "Java", "SQL"]
        },
        {
            code: "04.2",
            title: {
                tr: "Ağ & Siber Güvenlik",
                en: "Network & Cyber Security"
            },
            skills: ["TCP/IP & OSI", "Network Security", "OWASP Top 10", "Linux Administration", "POSIX Sockets & epoll", "Traffic Analysis"]
        },
        {
            code: "04.3",
            title: {
                tr: "Yazılım Mimarisi & Web",
                en: "Software Architecture & Web"
            },
            skills: ["SOLID Principles", "Clean Architecture", "ASP.NET Core", "RESTful APIs", "Semantic HTML5 & CSS3", "Node.js"]
        },
        {
            code: "04.4",
            title: {
                tr: "Mühendislik Araçları & Ekosistem",
                en: "Engineering Tools & Ecosystem"
            },
            skills: ["Git & GitHub", "Linux / Bash / Zsh", "FFmpeg & yt-dlp", "SQLite", "Cloud Test Automation", "Markdown / Obsidian"]
        }
    ]
};
