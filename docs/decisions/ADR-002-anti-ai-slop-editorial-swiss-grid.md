# ADR 002: "AI Slop" Unsurlarının Kaldırılması, Editorial + 1px Swiss Grid Mimarisi ve Altı Japon Felsefesi İlkesi (Ethos)

**Tarih:** 2026-10-27  
**Durum:** Kabul Edildi (Accepted)  
**Kapsam:** UI/UX Mimarisi / Tasarım Sistemi / İçerik Stratejisi

## 1. Bağlam ve Problem (Context)
`ADR-001` kapsamında kurulan modüler ES6 altyapısı teknik sorumluluk ayrımını (SOLID) başarıyla sağlasa da, ilk görsel katmanda kullanılan bulanık neon arka plan küreleri (`blur-orbs`), mavi-yeşil metin gradyanları, sahte macOS terminal penceresi, dekoratif emoji ikonlar ve yuvarlatılmış zıplayan Bento kartları günümüzde binlerce otomatik üretilmiş şablonda rastlanan jenerik **"AI Slop" (yüzeysel yapay zekâ estetiği)** hissi yaratmaktaydı.

Bir sistem ve ağ güvenliği mühendisinin kişisel portfolyosunun; geçici görsel trendler yerine zamansız tipografik hiyerarşi, yapısal dürüstlük, yüksek okunabilirlik ve mühendisin çalışma disiplinine dair özgün bir düşünsel derinlik yansıtması gerekmektedir.

## 2. Alınan Karar (Decision)
Görsel dil ve içerik mimarisi, mevcut SOLID ES6 modül sınırları korunarak aşağıdaki üç temel eksende tamamen yeniden tasarlanmıştır:

1. **"AI Slop" Unsurlarının Tamamen Temizlenmesi ve Editorial Renk Paleti:**
   - Tüm neon gradyanlar, cam efekti (`backdrop-filter: blur`), yüzen dekoratif küreler, sahte terminal penceresi ve emoji ikonlar kaldırılmıştır.
   - Varsayılan tema olarak **Sıcak Mimari Kağıt & Mürekkep (`#f6f5f1` zemin, `#111110` mürekkep, `#c83e2b` vermilyon vurgu)**; koyu tema olarak ise **Mat Karbon (`#0a0a0b` zemin, `#eceae4` metin, `#e0533c` vurgu)** paletine geçilmiştir.
   - Tipografik omurga; editoryal başlıklar için **Instrument Serif / Newsreader**, gövde için **Inter** ve indeks numaraları, koordinatlar, tarih aralıkları ile teknik etiketler için **JetBrains Mono** üçlüsü üzerine kurulmuştur.

2. **12 Sütunlu Asimetrik İsviçre İndeksi (1px Hairline Swiss Grid):**
   - Yuvarlatılmış ve gölgeli kartlar yerine `1px solid var(--border-hairline)` çizgileriyle ayrılan keskin (`border-radius: 0`), mimari pafta disiplininde **12 sütunlu İsviçre Izgarası (Swiss Grid)** benimsenmiştir.
   - Projeler bölümü; sıra numarası (`01`–`06`), proje adı, problem/mimari özeti, teknoloji yığını, canlı GitHub istatistikleri ve doğrudan bağlantıları tek bakışta sunan tam genişlikte **Numaralı Mühendislik İndeksi Satırları** olarak yapılandırılmıştır.

3. **Altı Japon Felsefesi İlkesi (Ethos Matrix & Monograph Drawer):**
   - Mühendislik yaklaşımını ve karakterini yüzeysel sloganlar yerine köklü kavramlarla ifade etmek amacıyla **6 Japon Felsefesi İlkesi** (*Kaizen* 改善, *Ikigai* 生き甲斐, *Shugyo* 修行, *Gaman* 我慢, *Shikata ga nai* 仕方がない, *Hansei* 反省) portfolyonun kalbine yerleştirilmiştir.
   - Bu ilkeler sayfada `3x2` 1px Swiss Grid matrisi olarak sergilenmekte; herhangi bir ilkeye tıklandığında (veya klavye ile seçildiğinde) açılan etkileşimli **Monograph Okuma Çekmecesi (Ethos Drawer)** üzerinden kavramın kelime anlamı, felsefi kökeni ve doğrudan ağ güvenliği, sistem mimarisi ve yazılım mühendisliği pratiklerindeki karşılığı çift dilli (TR/EN) olarak okunabilmektedir.

## 3. Reddedilen Alternatifler (Alternatives Considered)
- **Mevcut Neon / Glassmorphism Bento Kartlarının İnce Ayarla Korunması:**
  - *Reddedilme Gerekçesi:* Sorun yalnızca renk tonu değil, yuvarlak kart + neon parıltı + sahte terminal kombinasyonunun doğrudan jenerik şablon algısı yaratmasıdır. Köklü bir editoryal dönüşüm olmadan özgün bir kimlik elde edilemeyeceği için reddedilmiştir.
- **Japon Felsefesi İlkelerinin Ayrı Sayfalara (Multi-Page Blog) Bölünmesi:**
  - *Reddedilme Gerekçesi:* `ADR-001` ile benimsenen tek sayfalı (Single-Page), sıfır derleme bağımlılıklı mimariyi bozacağı ve okuma akışını kesintiye uğratacağı için elenmiş; bunun yerine DOM üzerinde anında açılan erişilebilir (`aria-expanded`, klavye/ESC destekli) **Monograph Okuma Çekmecesi** tercih edilmiştir.
- **Sadece Koyu (Dark-Only) Siber Güvenlik Teması:**
  - *Reddedilme Gerekçesi:* Siyah üzerine yeşil/neon siber güvenlik klişesi de bir diğer şablon tuzağıdır. Sıcak mimari kağıt (`#f6f5f1`) varsayılan görünümü ve mat karbon (`#0a0a0b`) koyu modu, basılı bir mühendislik monografisi ciddiyeti sağlamaktadır.

## 4. Sonuçlar ve Bedeller (Consequences & Trade-offs)
- **Görsel Özgünlük ve Tipografik Otorite:** Portfolyo, standart geliştirici şablonlarından tamamen ayrışarak İsviçre tipografi okulu ve basılı mimari indeks estetiğine kavuşmuştur.
- **Daha Yüksek Performans ve Sıfır GPU Yükü:** `backdrop-filter: blur()` ve büyük yarıçaplı `radial-gradient` katmanlarının kaldırılmasıyla tarayıcı boyama (paint/composite) maliyeti sıfıra indirilmiş, düşük güçlü cihazlarda bile 60fps kaydırma akıcılığı garanti altına alınmıştır.
- **Mimari Uyum (Open/Closed Principle):** Yeni Ethos bölümü ve Monograph çekmecesi, `ADR-001`'deki katmanlı mimariyi bozmadan `js/data.js` (felsefi veri modeli), `js/modules/portfolioRenderer.js` (Swiss Grid + Ethos render) ve `js/modules/interactionController.js` (çekmece etkileşimi) katmanlarına modüler olarak entegre edilmiştir.
- **Tasarım Disiplini Gereksinimi (Trade-off):** 1px İsviçre ızgarası ve yüksek kontrastlı tipografik düzen, boşluk (whitespace) ve hizalama hatalarını gizlemez; gelecekte eklenecek her yeni bileşenin aynı 1px kenarlık ve tipografik ölçek kurallarına titizlikle uyması gerekir.
