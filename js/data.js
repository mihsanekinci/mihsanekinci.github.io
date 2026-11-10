/**
 * Mehmet İhsan Ekinci — Editorial Portfolio Data & Localization (TR / EN)
 * Single Responsibility: Sitedeki tüm çeviri sözlüklerini, projeleri, deneyim zaman çizelgesini,
 * teknik yetkinlik matrisini ve Altı Japon İlkesi (Ethos) monografisini barındırır.
 * Kaynak: Obsidian Brain v2.0 (Üst-Beyin), Harvard CV 2026 & Evrensel Mühendislik Heybesi.
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

    mascotQuotes: {
        tr: [
            "改善 (Kaizen): Her gün %1 daha temiz kod!",
            "生き甲斐 (Ikigai): Sevdiğin iş ve değer üreten mühendislik.",
            "修行 (Shugyo): Temellere in; tavizsiz mühendislik disiplini.",
            "我慢 (Gaman): Karmaşık hata ayıklamada sabır ve metanet.",
            "仕方がない (Shikata ga nai): Değiştiremeyeceğine takılma, çözüme odaklan.",
            "反省 (Hansei): Hatalarından dürüstçe öğren; Kaizen'in anahtarı!",
            "Trade-off: Her mimarinin bir bedeli vardır; mühendislik o bedeli yönetme sanatıdır.",
            "Denetçi Kas: 100 kişi kod yazacağına, sistemi bilen 10 mimar AI'ı yönetir.",
            "Git Status: Branch main — 0 error, 0 warning ✓",
            "Kitsune 狐: Çevik zekâ, keskin odak!"
        ],
        en: [
            "改善 (Kaizen): 1% cleaner code every single day!",
            "生き甲斐 (Ikigai): Passion, mastery, and purposeful craft.",
            "修行 (Shugyo): Deep discipline; understand the fundamentals.",
            "我慢 (Gaman): Patient perseverance through tough bugs.",
            "仕方がない (Shikata ga nai): Focus solely on what you can control.",
            "反省 (Hansei): Honest reflection is the catalyst for growth!",
            "Trade-off: Every architecture has a cost; engineering is managing it effectively.",
            "Systems Auditor: Rather than 100 writing syntax, 10 architects direct and audit AI.",
            "Git Status: Branch main — 0 errors, 0 warnings ✓",
            "Kitsune 狐: Agile intellect and sharp focus!"
        ]
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
                badge: "AĞ GÜVENLİĞİ, GÖMÜLÜ SİSTEMLER & AI MİMARİSİ",
                greeting: "Mehmet İhsan Ekinci",
                subtitle: "Marmara Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. mayaICT bünyesinde kurumsal ağ güvenliği mühendisliği (L2/L3, OSPF, ACL, Wireshark), gömülü sistemler ve simülasyon (C/POSIX, PINN trafik optimizasyonu tezi) ile AST & CoALA tabanlı deterministik AI ajan mimarileri üzerine çalışıyorum.",
                ctaProjects: "→ Seçilmiş Projeler (11)",
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
                sectionTag: "01 // SİSTEM YAKLAŞIMI",
                title: "Sistem Fiziği, Mekanizma & Denetçilik",
                subtitle: "Kod hamallığını yapay zekaya bırakıp; donanım kısıtlarını, ağ protokollerini ve sistem sınırlarını uçtan uca teşhis edebilen denetçi mühendislik disiplini.",
                bentoMainTitle: "Sensörden Ağa, Ağdan Modele: Tek Sistem Omurgası",
                bentoMainDesc: "Fiziksel sahadan (gömülü sensörler / C) çıkan verinin kurumsal ağlardan (VLAN, OSPF, QoS) geçerek zeka modellerine (PINN, ST-GNN, LLM) ulaştığı tek bir boru hattını modelliyor; kriz anında Wireshark paket analizi, AST denetimi ve deterministik metriklerle sistemin röntgenini çekiyorum.",
                bentoHighlights: [
                    "Kurumsal Ağ Güvenliği (Huawei VRP, Cisco IOS, L2/L3, OSPF, ACL, Wireshark, Zero-Trust)",
                    "Gömülü Sistemler & Simülasyon (C, POSIX epoll, PINN/SUMO Akıllı Ulaşım Tezi)",
                    "Modüler Yazılım & AI Mimarisi (Clean/Hexagonal, Katı SOLID, CoALA Ajan Harness, FastAPI)"
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
                subtitle: "Kurumsal ağ mühendisliği pratiğim, yazılım stajlarım, akademik lisans tezi ve sivil toplum liderliğim."
            },
            projects: {
                sectionTag: "03 // SEÇİLMİŞ ÇALIŞMALAR",
                title: "Mühendislik Projeleri İndeksi",
                subtitle: "Ağ güvenliği, Linux çekirdeği (epoll), akıllı ulaşım simülasyonu (PINN), ilişkisel graf analitiği ve modüler temiz mimariyle geliştirilmiş açık kaynak projeler.",
                filters: {
                    all: "Tümü",
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
                subtitle: "Kurumsal üretimde, ağ laboratuvarlarında ve akademik araştırmalarda bizzat kullandığım araç ve standartlar."
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
                    job: "Mühendislik Rolü / Fırsat",
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
                badge: "NETWORK SECURITY, EMBEDDED SYSTEMS & AI ARCHITECTURE",
                greeting: "Mehmet İhsan Ekinci",
                subtitle: "Senior Computer Engineering student at Marmara University. Practicing enterprise network security engineering at mayaICT (L2/L3, OSPF, ACL, Wireshark), embedded systems and simulation (C/POSIX, PINN traffic optimization thesis), and deterministic AST/CoALA-based AI agent harnesses.",
                ctaProjects: "→ Selected Projects (11)",
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
                sectionTag: "01 // SYSTEMS APPROACH",
                title: "Systems Physics, Mechanics & Auditing",
                subtitle: "Offloading syntax boilerplate to AI while mastering the hardware constraints, network protocols, and system boundaries required to audit, verify, and architect mission-critical infrastructure.",
                bentoMainTitle: "From Sensor to Network, from Network to Model",
                bentoMainDesc: "I treat engineering as a unified pipeline where field data leaves embedded sensors (C/POSIX), traverses enterprise networks (VLAN, OSPF, QoS), and feeds machine intelligence (PINN, ST-GNN, LLM). When anomalies arise, I diagnose root causes through Wireshark packet inspections, AST code audits, and deterministic telemetry.",
                bentoHighlights: [
                    "Enterprise Network Security (Huawei VRP, Cisco IOS, L2/L3, OSPF, ACL, Wireshark, Zero-Trust)",
                    "Embedded Systems & Simulation (C, POSIX epoll, PINN/SUMO Intelligent Transportation Thesis)",
                    "Modular Software & AI Architecture (Clean/Hexagonal, Strict SOLID, CoALA Agent Harness, FastAPI)"
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
                subtitle: "Enterprise network engineering practice, software internships, undergraduate thesis research, and community leadership."
            },
            projects: {
                sectionTag: "03 // SELECTED WORKS",
                title: "Engineering Projects Index",
                subtitle: "Open-source systems spanning enterprise network security, Linux kernel (epoll), intelligent transportation simulation (PINN), relational graph analytics, and modular clean architecture.",
                filters: {
                    all: "All",
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
                subtitle: "Tools, protocols, and architectural standards actively applied in production, network labs, and research."
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
                    job: "Engineering Role / Opportunity",
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
                tr: "Yalnızca ödev veya vitrin için değil; ağ güvenliği tarayıcılarından graf analitiği ve milisaniye hassasiyetli medya araçlarına kadar gerçek bir ihtiyacı çözen açık kaynak yazılımlar üretmek.",
                en: "Building open-source software that solves concrete problems—from automated security reconnaissance to precision media and graph tooling—rather than hollow showcase demos."
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
                tr: "Rastgele kod değiştirmek yerine logları, paket dökümlerini (Wireshark pcap) ve sistem çağrılarını (strace/gdb) adım adım izleyerek deterministik kök neden analizi yapmak.",
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
                tr: "Her proje ve staj dönemi sonunda yapılan blameless post-mortem değerlendirmeleri, eski kod tabanlarını modüler SOLID ve Clean Architecture yapısına dönüştürme cesareti.",
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
                tr: "Ağ ve Ağ Güvenliği Mühendisi (İş Yeri Eğitimi / İYE)",
                en: "Network & Network Security Engineer (Workplace Training / Intern)"
            },
            organization: "mayaICT Bilgisayar Hizmetleri A.Ş.",
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            },
            description: {
                tr: "Huawei VRP (eNSP) ve Cisco IOS üzerinde kurumsal L2/L3 topolojileri (802.1Q VLAN izolasyonu, Access/Trunk/Hybrid portlar, STP/RSTP döngü engelleme, LACP Eth-Trunk). VLSM IP planlama, OSPF dinamik yönlendirme, Router-on-a-Stick Inter-VLAN Routing, Temel/Gelişmiş ACL filtreleme, AAA kimlik doğrulama ve Wireshark ile derin paket analizi.",
                en: "Engineering enterprise L2/L3 network topologies on Huawei VRP (eNSP) and Cisco IOS: 802.1Q VLAN isolation, Access/Trunk/Hybrid ports, STP/RSTP loop prevention, and LACP Eth-Trunk aggregation. Configuring VLSM subnetting, dynamic OSPF routing, Router-on-a-Stick Inter-VLAN routing, ACL filtering, AAA security, and deep Wireshark packet inspection."
            },
            tags: ["Huawei VRP / eNSP", "Cisco IOS", "802.1Q VLAN", "STP / RSTP", "OSPF", "ACL & AAA", "Wireshark"]
        },
        {
            type: "experience",
            period: {
                tr: "TEMMUZ 2026 — AĞUSTOS 2026",
                en: "JULY 2026 — AUGUST 2026"
            },
            role: {
                tr: "Ağ ve Yazılım Mühendisliği Stajyeri (Yaz Stajı)",
                en: "Network & Software Engineering Intern (Summer Internship)"
            },
            organization: "mayaICT Bilişim Teknolojileri A.Ş.",
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            },
            description: {
                tr: "Cisco, Fortinet, HPE/Aruba ve Palo Alto çözümleriyle kurumsal ağ ve siber güvenlik (Zero Trust, DLP, SD-WAN) saha/proje süreçlerinde teknik görevler. Kurumsal web sitesi için kaynak izlenebilirliği garantili, FastAPI ve ChromaDB vektör tabanlı yerel RAG destek chatbotu geliştirimi.",
                en: "Participated in enterprise networking and cybersecurity (Zero Trust, DLP, SD-WAN) project workflows leveraging Cisco, Fortinet, HPE/Aruba, and Palo Alto solutions. Built an on-premise RAG customer-support chatbot with source traceability using FastAPI and ChromaDB."
            },
            tags: ["Zero Trust", "Fortinet", "Palo Alto", "FastAPI", "ChromaDB", "RAG"]
        },
        {
            type: "experience",
            period: {
                tr: "TEMMUZ 2025 — EYLÜL 2025",
                en: "JULY 2025 — SEPTEMBER 2025"
            },
            role: {
                tr: "Yazılım Geliştirme Stajyeri (Frontend)",
                en: "Software Engineering Intern (Frontend)"
            },
            organization: "Kodiks Bilişim A.Ş.",
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            },
            description: {
                tr: "Mobil tabanlı bilgi yarışması platformunun yönetim panelini (admin dashboard) Angular 20 kullanarak modüler, tip-güvenli, duyarlı ve sürdürülebilir bir mimaride geliştirdi.",
                en: "Architected and delivered an enterprise administration dashboard for a mobile quiz and competition platform using Angular 20 with modular, responsive, and type-safe components."
            },
            tags: ["Angular 20", "TypeScript", "Admin Dashboard", "Component Architecture", "REST API"]
        },
        {
            type: "leadership",
            period: {
                tr: "2024 — GÜNÜMÜZ",
                en: "2024 — PRESENT"
            },
            role: {
                tr: "Yönetim Kurulu Üyesi & Sayman / Bilim Atölyesi Koordinatörü",
                en: "Board Member & Treasurer / Science Workshop Coordinator"
            },
            organization: "Çağdaş Yaşamı Destekleme Derneği (ÇYDD) — Ataşehir",
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            },
            description: {
                tr: "Şubenin yıllık bütçe planlaması, finansal kayıtları ve gelir-gider denetim süreçlerini yönetmektedir. 'Mahallede Cümbüş Var' ve 'Köyde Şenlik Var' sosyal sorumluluk projelerinde çocuklara yönelik bilim atölyelerinin müfredatını, saha operasyonunu ve gönüllü ekiplerini koordine etti.",
                en: "Managing annual budget allocations, financial auditing, and fiscal records for the Ataşehir branch. Directed science workshop curricula, volunteer field operations, and STEM outreach in social responsibility initiatives."
            },
            tags: ["Leadership", "Financial Auditing", "STEM Education", "Project Coordination"]
        },
        {
            type: "education",
            period: {
                tr: "2023 — 2027 (BEKLENEN)",
                en: "2023 — 2027 (EXPECTED)"
            },
            role: {
                tr: "Bilgisayar Mühendisliği Lisans Programı (4. Sınıf)",
                en: "B.Sc. in Computer Engineering (Senior Year)"
            },
            organization: "Marmara Üniversitesi — Teknoloji Fakültesi",
            location: {
                tr: "İstanbul, Türkiye",
                en: "Istanbul, Turkey"
            },
            description: {
                tr: "Bitirme Tezi: Akıllı Ulaşım Sistemlerinde Fizik Bilgili Derin Öğrenme (PINN / ST-GNN / KAN) ve İki Seviyeli Altyapı Optimizasyonu (Danışman: Dr. Öğr. Üyesi Ali Sarıkaş). Bilgisayar Ağları, Bilgisayar Güvenliği, Sistem Programlama, İşletim Sistemleri, Bulut Test Mühendisliği ve Mikrodenetleyiciler müfredatı.",
                en: "Senior Thesis: Physics-Informed Deep Learning (PINN / ST-GNN / KAN) and Bilevel Infrastructure Optimization in Intelligent Transportation Systems (Advisor: Asst. Prof. Ali Sarıkaş). Curriculum: Computer Networks, Security, Systems Programming, Operating Systems, Cloud Testing, Microcontrollers."
            },
            tags: ["Systems Programming", "Computer Networks", "CyberSecurity", "PINN", "Cloud Testing"]
        },
        {
            type: "education",
            period: {
                tr: "2019 — 2023",
                en: "2019 — 2023"
            },
            role: {
                tr: "Lise Eğitimi (Fen Lisesi Diploması)",
                en: "High School Diploma (Science High School)"
            },
            organization: "Yahya Akel Fen Lisesi",
            location: {
                tr: "Mersin, Türkiye",
                en: "Mersin, Turkey"
            },
            description: {
                tr: "İleri düzey matematik, analitik düşünme ve fen bilimleri temeli.",
                en: "Advanced curriculum in mathematics, physics, and analytical problem-solving foundation."
            },
            tags: ["Mathematics", "Physics", "Analytical Foundation"]
        }
    ],

    projects: [
        {
            id: "network",
            repo: "network",
            title: "NetWork — İlişkisel Graf Analitiği ve Görselleştirme",
            category: "network",
            featured: true,
            badge: "Graph Analytics / TS",
            description: {
                tr: "Kişi, kurum ve kavramlar arası ilişkileri modelleyen full-stack graf analitiği platformu. BFS tabanlı Pathfinder motoruyla en kısa referans zinciri analizi, Dagre hiyerarşik otomatik dizilimi, Zod çalışma zamanı şema doğrulaması ve 143 otomatik API entegrasyon testi.",
                en: "Full-stack relational graph analytics platform modeling connections between people, organizations, and concepts. Features BFS Pathfinder for shortest reference chains, Dagre hierarchical auto-layout, Zod runtime validation, and 143 automated API integration tests."
            },
            tech: ["React", "TypeScript", "Node.js", "Prisma ORM", "Zod", "Dagre"],
            url: "https://github.com/mihsanekinci/network"
        },
        {
            id: "owasp-top10-scanner",
            repo: "owasp-top10-scanner",
            title: "AI Destekli Modüler Web Zafiyet Tarayıcısı",
            category: "network",
            featured: true,
            badge: "AppSec & RAG / Python",
            description: {
                tr: "OWASP Top 10 zafiyetlerini (SQLi, XSS, SSRF vb.) asenkron olarak tarayan modüler güvenlik motoru. DVWA, Juice-Shop ve WebGoat içeren izole Docker laboratuvarı; ChromaDB ve çoklu yerel LLM konsensüsüyle her bulgu için otomatik Türkçe kök neden analizi ve yama kodu üretimi.",
                en: "Modular vulnerability scanning engine auditing web apps against OWASP Top 10 vectors. Runs in an isolated Docker Compose testbed (DVWA, Juice-Shop, WebGoat) with a ChromaDB RAG pipeline and multi-LLM consensus producing automated root-cause analysis and remediation patches."
            },
            tech: ["Python", "FastAPI", "Docker Compose", "ChromaDB", "Ollama", "OWASP"],
            url: "https://github.com/mihsanekinci/owasp-top10-scanner"
        },
        {
            id: "event-io-project",
            repo: "event-io-project",
            title: "Event-IO — Linux epoll Yüksek Başarımlı Asenkron Sunucu",
            category: "systems",
            featured: true,
            badge: "Linux Kernel / C",
            description: {
                tr: "Linux çekirdeğinin epoll I/O çoklama (multiplexing) mekanizmasını ve bloklamayan (non-blocking) POSIX soketlerini kullanan, tek iş parçacığı üzerinde binlerce eşzamanlı istemciyi düşük gecikmeyle yönetebilen yüksek performanslı C sunucusu.",
                en: "High-concurrency asynchronous server written in C leveraging Linux epoll I/O multiplexing and non-blocking POSIX sockets to handle multi-client connections on a single event-driven thread with minimal latency."
            },
            tech: ["C", "Linux epoll", "POSIX Sockets", "Non-Blocking I/O", "Systems"],
            url: "https://github.com/mihsanekinci/event-io-project"
        },
        {
            id: "ai-driven-embedded-linux",
            repo: "ai-driven-embedded-linux",
            title: "AI-Driven Embedded Linux Telemetry & Systems",
            category: "systems",
            featured: false,
            badge: "Embedded Linux / C",
            description: {
                tr: "Gömülü Linux ortamlarında düşük seviyeli C sistem çağrıları, bellek kısıtları ve donanım tamponu yönetimiyle yerel yapay zeka telemetri ve karar süreçlerini birleştiren sistem mühendisliği çalışması.",
                en: "Systems engineering implementation combining low-level C system calls, memory constraints, and ring-buffer management on Embedded Linux with edge AI telemetry and inference workflows."
            },
            tech: ["C", "Embedded Linux", "Edge AI", "System Calls", "POSIX"],
            url: "https://github.com/mihsanekinci/ai-driven-embedded-linux"
        },
        {
            id: "obsidian-brain-harness",
            repo: "obsidian-brain",
            title: "Deterministik AI Agent Harness & Bilişsel Bellek Motoru",
            category: "systems",
            featured: true,
            badge: "CoALA & AST / Python",
            description: {
                tr: "Yapay zeka kodlama ajanları için CoALA 4-katmanlı bellek mimarisi, Türkçe sondan eklemeli morfolojiye duyarlı Okapi BM25 arama motoru ve kayıpsız bağlam sıkıştırma motoru. Python ast modülüyle SOLID sınırlarını ve kimlik sızıntılarını (Secret Guard) denetleyen statik sensörler.",
                en: "Deterministic cognitive memory engine for coding agents featuring CoALA 4-tier memory, Turkish-morphology-aware Okapi BM25 search, and lossless context compaction. Built with zero dependencies using Python ast for static SOLID audits and Secret Guard leakage prevention."
            },
            tech: ["Python", "AST", "Okapi BM25", "CoALA Architecture", "Sensors"],
            url: "https://github.com/mihsanekinci"
        },
        {
            id: "bitirme-projesi",
            repo: "bitirme_projesi",
            title: "Akıllı Ulaşım Sistemlerinde PINN & ST-GNN Trafik Optimizasyonu",
            category: "ai",
            featured: true,
            badge: "PINN & SUMO / PyTorch",
            description: {
                tr: "Kentsel karayolu ağlarında diferansiyel trafik akışı korunum yasalarını (LWR ve ARZ modelleri) kayıp fonksiyonuna entegre eden Fizik Bilgili Sinir Ağları (PINN), ST-GNN ve KAN modellemesi. SUMO mikrosimülasyonu üzerinde Braess Paradoksu ve kullanıcı dengesini optimize eden iki seviyeli altyapı tezi.",
                en: "Academic thesis integrating conservation laws of traffic flow (LWR/ARZ partial differential equations) into deep learning loss functions via Physics-Informed Neural Networks (PINN), ST-GNN, and KAN. Evaluated in SUMO microsimulations for bilevel network optimization against Braess's paradox."
            },
            tech: ["Python", "PyTorch", "PINN (LWR/ARZ)", "ST-GNN", "KAN", "SUMO"],
            url: "https://github.com/mihsanekinci/bitirme_projesi"
        },
        {
            id: "real-time-ai-stock-portfolio-monitoring",
            repo: "real-time-ai-stock-portfolio-monitoring",
            title: "Stock Portfolio Tracker — Bulut-Yerel FinTech Backend",
            category: "ai",
            featured: true,
            badge: "Cloud-Native & k6 / FastAPI",
            description: {
                tr: "Minikube üzerinde Kubernetes orkestrasyonu, multi-stage Dockerfile ve GitHub Actions CI/CD boru hattıyla çalışan bulut-yerel portföy yönetim servisi. pytest (%70+ kapsama), Testcontainers, k6 yük testleriyle p95 gecikme optimizasyonu, Prometheus/Grafana izleme ve Gemini API finansal analizi.",
                en: "Cloud-native portfolio service with multi-stage Docker builds, Kubernetes orchestration (Minikube), and GitHub Actions CI/CD. Employs pytest (>70% coverage), Testcontainers, k6 load testing for p95 latency tuning, Prometheus/Grafana metrics, and Gemini API financial insights."
            },
            tech: ["FastAPI", "PostgreSQL", "Kubernetes", "Prometheus", "Grafana", "k6"],
            url: "https://github.com/mihsanekinci/real-time-ai-stock-portfolio-monitoring"
        },
        {
            id: "maya-chatbot",
            repo: "maya-chatbot",
            title: "Kurumsal Doküman RAG Destek Asistanı",
            category: "ai",
            featured: false,
            badge: "Enterprise RAG / FastAPI",
            description: {
                tr: "mayaICT kurumsal web sitesi ve müşteri destek süreçleri için kaynak izlenebilirliği (source traceability) garantili yerel RAG chatbotu. FastAPI, ChromaDB vektör tabanı ve nomic-embed-text ile halüsinasyonsuz, doğrulanabilir kurumsal doküman araması.",
                en: "Enterprise RAG assistant developed during mayaICT internship providing hallucination-free document retrieval with verified source traceability. Built with FastAPI, ChromaDB vector persistence, and nomic-embed-text."
            },
            tech: ["FastAPI", "ChromaDB", "nomic-embed-text", "RAG", "Docker"],
            url: "https://github.com/mihsanekinci/maya-chatbot"
        },
        {
            id: "gardirapp",
            repo: "gardirapp",
            title: "GardırApp — Hexagonal Mimarili Akıllı Giyim Asistanı",
            category: "web",
            featured: true,
            badge: "Clean Hexagonal / Python",
            description: {
                tr: "Ports & Adapters (Hexagonal) mimarisiyle inşa edilmiş akıllı gardırop asistanı. Gemini Vision API ile kıyafet fotoğraflarından kategori ve renk çıkarma; monokromatik ve tamamlayıcı renk teorisine dayalı kombin puanlama motoru, bağlamsal hava durumu eşleme ve dolap rotasyonu (cost-per-wear).",
                en: "Smart wardrobe and outfit assistant engineered with Clean Hexagonal (Ports & Adapters) architecture. Features automated garment tagging via Gemini Vision API, complementary color theory scoring, context-aware weather matching, and cost-per-wear rotation algorithms."
            },
            tech: ["FastAPI", "Clean Architecture", "Gemini Vision", "Pydantic", "Renk Teorisi"],
            url: "https://github.com/mihsanekinci/gardirapp"
        },
        {
            id: "kesital",
            repo: "kesital",
            title: "KesitAl — Video Scrubber & Precision Clipper",
            category: "web",
            featured: false,
            badge: "SOLID / TypeScript",
            description: {
                tr: "QuickTime tarzı görsel zaman çubuğuna (Scrubber) sahip, YouTube ve web akışlarından milisaniye hassasiyetinde kesit indirme aracı. Katı SOLID prensipleri, modüler TypeScript mimarisi, yt-dlp ve FFmpeg boru hattı ile geliştirildi.",
                en: "QuickTime-style visual timeline scrubber and millisecond-precision video clipper for YouTube and web streams. Engineered with strict SOLID architecture, modular TypeScript, yt-dlp, and FFmpeg."
            },
            tech: ["TypeScript", "Katı SOLID", "FFmpeg", "yt-dlp", "Node.js"],
            url: "https://github.com/mihsanekinci/kesital"
        },
        {
            id: "lake-management-system",
            repo: "lake-management-system",
            title: "Göl İşletmeciliği Coğrafi Bilgi Sistemi (GIS Web App)",
            category: "web",
            featured: false,
            badge: "PostGIS & GIS / React",
            description: {
                tr: "PostgreSQL/PostGIS uzamsal geometri kolonları ve Leaflet (GeoJSON) haritalamasıyla göl bölgesi yönetimi ve canlı tekne filosu takibi yapan full-stack CBS uygulaması; JWT (HS256) ve rol tabanlı erişim kontrolü (RBAC) ile güvenliği sağlandı.",
                en: "Full-stack GIS application managing lake zones and tracking live boat coordinates using PostgreSQL/PostGIS spatial geometry and Leaflet GeoJSON overlays, secured with JWT and role-based access control (RBAC)."
            },
            tech: ["React", "Node.js", "Express", "PostgreSQL", "PostGIS", "Leaflet"],
            url: "https://github.com/mihsanekinci/lake-management-system"
        }
    ],

    skillCategories: [
        {
            code: "04.1",
            title: {
                tr: "Programlama & Sistem Dilleri",
                en: "Programming & Systems Languages"
            },
            skills: ["C", "Python", "TypeScript", "JavaScript (ES6+)", "Bash", "SQL", "Java", "C# / .NET"]
        },
        {
            code: "04.2",
            title: {
                tr: "Ağ & Siber Güvenlik Mimarisi",
                en: "Network & Cyber Security Architecture"
            },
            skills: [
                "Huawei VRP (eNSP)",
                "Cisco IOS",
                "802.1Q VLAN & Trunk",
                "STP / RSTP",
                "LACP Eth-Trunk",
                "OSPF Routing",
                "Inter-VLAN (Router-on-a-Stick)",
                "VLSM Subnetting",
                "ACL & AAA",
                "Wireshark Paket Analizi",
                "OWASP Top 10",
                "Zero Trust & Firewall"
            ]
        },
        {
            code: "04.3",
            title: {
                tr: "Backend, Bulut & Test Mühendisliği",
                en: "Backend, Cloud & Test Engineering"
            },
            skills: [
                "FastAPI",
                "Node.js & Express",
                "Prisma ORM & Zod",
                "PostgreSQL & PostGIS",
                "Docker & Compose",
                "Kubernetes (Minikube)",
                "GitHub Actions (CI/CD)",
                "Prometheus & Grafana",
                "pytest",
                "k6 (Load Testing)",
                "Testcontainers",
                "LocalStack (AWS S3)"
            ]
        },
        {
            code: "04.4",
            title: {
                tr: "Yapay Zeka, Simülasyon & Mimari",
                en: "AI, Simulation & Software Architecture"
            },
            skills: [
                "RAG & ChromaDB",
                "Okapi BM25",
                "Ollama & Gemini API",
                "PINN (LWR/ARZ Modelleri)",
                "ST-GNN & PyTorch",
                "SUMO Mikrosimülasyon",
                "Clean / Hexagonal Architecture",
                "Katı SOLID Prensipleri",
                "CoALA Ajan Mimarisi",
                "Python AST Analizi",
                "React & Angular 20",
                "Three.js & WebGL"
            ]
        }
    ]
};
