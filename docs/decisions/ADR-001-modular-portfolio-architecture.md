# ADR 001: Modüler Kişisel Mühendislik Portfolyosu Mimarisi ve Ders Laboratuvarlarının Arşivlenmesi

**Tarih:** 2026-10-26  
**Durum:** Kabul Edildi (Accepted)  
**Kapsam:** Mimari / Frontend / Dağıtım (GitHub Pages)

## 1. Bağlam ve Problem (Context)
`mihsanekinci.github.io` deposu başlangıçta Marmara Üniversitesi Bilgisayar Mühendisliği **Web Programlama Dersi** kapsamındaki laboratuvar çalışmalarını ve ödevleri barındırmak amacıyla oluşturulmuştu ve bu dosyalar doğrudan kök dizinde (`index.html` vb.) yer almaktaydı.

Ancak deponun aynı zamanda birincil GitHub Pages kişisel alan adı (`https://mihsanekinci.github.io`) olması sebebiyle aşağıdaki mühendislik ve mimari ihtiyaçlar doğmuştur:
- Kök dizinin akademik geçmişi kaybetmeden profesyonel bir **Kişisel Mühendislik Portfolyosu (Vitrin)** olarak yeniden konumlandırılması.
- Eski laboratuvar çalışmalarının ve ders çıktılarının kırık bağlantılara yol açmadan korunması ve erişilebilir kalması.
- Harici bir derleme adımına (bundler/transpiler) veya ağır çalışma zamanı (runtime) bağımlılıklarına ihtiyaç duymadan **maksimum hız ve sıfır derleme bağımlılığı (Zero-Build Dependency)** ile doğrudan GitHub Pages üzerinde çalışabilmesi.
- Yeni projeler, teknik yetkinlikler ve iş deneyimleri eklendikçe mevcut UI/DOM kodunu değiştirmeden genişleyebilen, **SOLID prensiplerine** ve katmanlı sorumluluk ayrımına (Separation of Concerns) uygun bir mimari kurulması.

## 2. Alınan Karar (Decision)
Mevcut depo yapısını hem akademik arşiv hem de modern bir mühendislik portfolyosu olarak sürdürebilmek için aşağıdaki mimari kararlar alınmış ve uygulanmıştır:

1. **Ders Laboratuvarlarının İzolasyonu (`/labs/`):**
   Eski Web Programlama dersi çalışmaları ve statik laboratuvar çıktıları kök dizinden çıkarılarak `/labs/` dizini altına izole edilmiş ve arşivlenmiştir. Böylece kök dizin tamamen portfolyo uygulamasına ayrılırken ders çalışmaları da doğrudan `/labs/` altından erişilebilir tutulmuştur.

2. **Katmanlı ve SOLID Uyumlu ES6 Modül Mimarisi:**
   Herhangi bir framework veya derleyici kullanılmaksızın, modern tarayıcıların yerleşik **ES6 Modules (`type="module"`)** desteği kullanılarak tek sayfalı (Single-Page) ve katmanlı bir frontend mimarisi kurulmuştur:
   - **`js/data.js` (Veri ve Konfigürasyon Katmanı):** Projeler, deneyimler, yetkinlikler ve çok dilli (TR/EN) metin sözlüklerini barındıran tek doğruluk kaynağı (Single Source of Truth).
   - **`js/services/githubService.js` (Servis Katmanı):** GitHub REST API üzerinden canlı depo istatistiklerini (yıldız, fork, dil, güncellenme tarihi) çeken, `sessionStorage` tabanlı önbellekleme (caching) ve hata/rate-limit durumlarında `data.js` üzerindeki statik verilere kesintisiz geri dönüş (graceful fallback) sağlayan izole servis.
   - **`js/modules/themeManager.js` (Durum Yönetimi - Tema):** Sistem tercihini (`prefers-color-scheme`) ve kullanıcı seçimini (`localStorage`) dinleyerek Dark/Light tema geçişlerini yöneten tek sorumluluklu modül.
   - **`js/modules/localizationManager.js` (Durum Yönetimi - i18n):** Türkçe (TR) ve İngilizce (EN) dil durumunu yöneten, DOM üzerindeki yerelleştirme anahtarlarını reaktif olarak güncelleyen dil motoru.
   - **`js/modules/portfolioRenderer.js` (Sunum/Render Katmanı):** Veri katmanından ve GitHub servisinden gelen modelleri Bento Grid ve semantik HTML bileşenlerine dönüştüren saf (pure) render modülü.
   - **`js/modules/interactionController.js` (Etkileşim Katmanı):** Mobil menü, yumuşak kaydırma (smooth scroll), aktif bölüm takibi (`IntersectionObserver`) ve filtreleme gibi kullanıcı etkileşimlerini yöneten kontrolcü.
   - **`js/app.js` (Orkestrasyon / Giriş Noktası):** Tüm alt modülleri ve servisleri başlatan, bağımlılıkları birbirine bağlayan ana uygulama başlatıcısı (Bootstrapper).

## 3. Reddedilen Alternatifler (Alternatives Considered)
- **Ağır SPA Framework'leri (Next.js / React / Vue):**
  - *Reddedilme Gerekçesi:* Bir kişisel mühendislik portfolyosu için sanal DOM (Virtual DOM) yükü, `node_modules` bağımlılık ağacı ve CI/CD derleme (build/export) karmaşıklığı gereksiz mühendislik yükü (over-engineering) oluşturmaktadır. Saf ES6 modülleri ile aynı bileşen izolasyonu sıfır derleme maliyetiyle elde edilmiştir.
- **Çok Sayfalı Statik HTML Tekrarı (Multi-Page Static HTML):**
  - *Reddedilme Gerekçesi:* Hem Türkçe/İngilizce dil desteği hem de yeni proje kartları eklendiğinde birden fazla HTML dosyasını elle güncellemek **DRY (Don't Repeat Yourself)** ve **Open/Closed** prensiplerini ihlal etmekte, bakım maliyetini artırmaktadır.
- **Eski Ders Laboratuvarlarının Tamamen Silinmesi:**
  - *Reddedilme Gerekçesi:* Üniversite ders sürecindeki gelişim adımlarını ve çalışan demo bağlantılarını yok edeceği (arşiv ve referans kaybı) için reddedilmiş, bunun yerine `/labs/` altında isim alanı (namespace) izolasyonu tercih edilmiştir.

## 4. Sonuçlar ve Bedeller (Consequences & Trade-offs)
- **Performans ve Hız:** Sıfır harici JS framework bağımlılığı ve modüler CSS mimarisi sayesinde **100/100 Lighthouse** performans, erişilebilirlik ve SEO skorlarına uygun, anında yüklenen (instant-load) bir yapı elde edilmiştir.
- **Genişletilebilirlik (Open/Closed Principle):** Sisteme yeni bir proje, iş deneyimi, sertifika veya dil metni eklemek için hiçbir render veya kontrolcü modülüne (`portfolioRenderer.js`, `app.js`) dokunmaya gerek yoktur; yalnızca `js/data.js` dosyasının güncellenmesi yeterlidir.
- **Dayanıklılık ve Hata Toleransı (Resilience):** GitHub API saatlik istek sınırına (rate-limit) takıldığında veya istemci çevrimdışı olduğunda, `githubService.js` içindeki `sessionStorage` önbelleği ve `data.js` statik yedekleme mekanizması devreye girerek arayüzün kırılmasını tamamen engeller.
- **Bakım ve Disiplin Gereksinimi (Trade-off):** Bir bundler veya TypeScript derleyicisi kullanılmadığı için modül sınırlarının, JSDoc tip açıklamalarının ve temiz isimlendirme standartlarının geliştirici tarafından `/modular-architect` protokolü disipliniyle korunması gerekmektedir.
