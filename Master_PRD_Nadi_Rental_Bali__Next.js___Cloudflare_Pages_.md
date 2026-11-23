# MASTER PRODUCT REQUIREMENTS DOCUMENT (PRD) & TECHNICAL SPECIFICATION
**Nama Proyek:** Nadi Rental Bali — Official Motorbike Rental Catalog & Booking Web  
**Target Domain:** `https://nadirentalbali.com`  
**Tech Stack:** Next.js 14/15 (App Router, Static Export / SSG) + TypeScript + Tailwind CSS + Lucide Icons  
**Target Hosting / Deployment:** Cloudflare Pages (Free Tier, Static Build `out/`)  
**Skema Warna:** Kuning (`#FACC15`), Putih (`#FFFFFF`), Abu-abu (`#F4F4F5` & `#18181B`)  
**Bahasa:** Multi-bahasa SEO-friendly (`id` & `en` melalui rute `/id` dan `/en`)  
**Aturan Khusus:** **DILARANG** membuat section, halaman, maupun tautan **Artikel / Blog**.  

---

## 1. INSTRUKSI EKSEKUSI UNTUK AI DEVELOPER (ZERO-CONFIRMATION RULE)
Dokumen ini bersifat final dan mandiri. Bangun seluruh aplikasi secara lengkap dari awal hingga siap `npm run build` tanpa menanyakan konfirmasi apa pun kepada pengguna:
1. Gunakan **Next.js App Router** dengan konfigurasi `output: 'export'` dan `images: { unoptimized: true }` di `next.config.mjs` agar 100% kompatibel dengan **Cloudflare Pages** secara gratis tanpa memerlukan server runtime Node.js.
2. Implementasikan *Internationalization (i18n)* berbasis sub-path statis:
   - Root `/` melakukan *redirect* otomatis ke `/id` (dengan `<meta http-equiv="refresh" content="0;url=/id" />` dan client fallback agar berjalan mulus di static hosting).
   - Halaman `/id` menyajikan konten lengkap Bahasa Indonesia.
   - Halaman `/en` menyajikan konten lengkap Bahasa Inggris.
3. Sediakan file `public/_redirects` untuk Cloudflare Pages agar rute dan *fallback* tertangani sempurna.
4. Seluruh tombol **Booking** pada kartu katalog motor maupun formulir pemesanan wajib membuka **Modal Konfirmasi Booking** (atau langsung kirim jika user klik tombol cepat) yang meneruskan data produk + input pengguna ke URL WhatsApp (`https://wa.me/6281234567890?text=...`) dalam bahasa sesuai rute aktif (`/id` atau `/en`).
5. Gunakan gambar *placeholder* berkualitas tinggi dari Unsplash (URL valid bertema skuter/motor & pantai Bali) atau SVG ilustrasi bersih jika aset lokal belum tersedia, serta pastikan tidak ada *broken image*.

---

## 2. ARSITEKTUR PROYEK & STRUKTUR DIREKTORI

```text
nadi-rental-bali/
├── public/
│   ├── _redirects                 # Konfigurasi redirect Cloudflare Pages
│   ├── robots.txt                 # Aturan crawler SEO
│   └── sitemap.xml                # Sitemap statis untuk /id dan /en
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind CSS + custom scroll behavior
│   │   ├── layout.tsx             # Root layout (Font Plus Jakarta Sans)
│   │   ├── page.tsx               # Redirect otomatis dari / ke /id
│   │   └── [lang]/
│   │       ├── layout.tsx         # Layout per bahasa + Metadata SEO + hreflang + JSON-LD
│   │       └── page.tsx           # Halaman utama Nadi Rental Bali (Full Landing Page)
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky header + Menu + Language Switcher (ID/EN) + CTA WA
│   │   ├── HeroSection.tsx        # Hero banner + Social proof rating
│   │   ├── AboutSection.tsx       # Tentang Nadi Rental Bali + Cakupan Area Antar-Jemput
│   │   ├── FeaturesSection.tsx    # 4 Kartu Keunggulan Layanan
│   │   ├── CatalogSection.tsx     # Filter Kategori + Banner Fasilitas Gratis + Grid Kartu Motor
│   │   ├── BookingModal.tsx       # Modal interaktif saat klik "Booking" pada kartu motor
│   │   ├── GalleryReviews.tsx     # Galeri serah terima unit + Carousel/Grid Testimoni Pelanggan
│   │   ├── FaqSection.tsx         # Accordion FAQ
│   │   ├── ContactSection.tsx     # Info Kontak, Google Maps Embed, & Quick Booking Form
│   │   ├── Footer.tsx             # Footer Charcoal gelap 4 kolom (tanpa tautan Artikel/Blog)
│   │   └── FloatingWhatsApp.tsx   # Tombol WhatsApp melayang di pojok kanan bawah
│   ├── data/
│   │   ├── bikes.ts               # Database lengkap armada motor (ID & EN)
│   │   └── dictionary.ts          # Kamus terjemahan lengkap seluruh UI & Copywriting (ID & EN)
│   └── lib/
│       └── whatsapp.ts            # Helper pembuat URL & template pesan WhatsApp
├── next.config.mjs                # Konfigurasi Static Export untuk Cloudflare Pages
├── tailwind.config.ts             # Konfigurasi palet warna Kuning-Putih-Abu
└── package.json
```

---

## 3. KONFIGURASI CLOUDFLARE PAGES & NEXT.JS

### 3.1 `next.config.mjs`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

### 3.2 `public/_redirects`
```text
/  /id/  302
```

### 3.3 Spesifikasi Build Cloudflare Pages
* **Framework Preset:** Next.js (Static HTML Export)
* **Build Command:** `npm run build`
* **Build Output Directory:** `out`
* **Node Version:** `20`

---

## 4. SISTEM DESAIN & PALET WARNA (KUNING, PUTIH, ABU-ABU)

### 4.1 Token Warna (`tailwind.config.ts`)
* **Primary Yellow:** `#FACC15` (Tailwind `yellow-400`) — Tombol CTA utama, badge fasilitas gratis, indikator bahasa aktif, bintang rating, aksen garis judul.
* **Primary Hover:** `#EAB308` (Tailwind `yellow-500`) — Warna hover tombol kuning.
* **Soft Yellow Tint:** `#FEF9C3` (Tailwind `yellow-100`) — Latar belakang banner promo/fasilitas gratis.
* **Pure White:** `#FFFFFF` — Latar utama halaman, kartu motor, modal booking, dan input form.
* **Soft Gray Surface:** `#F4F4F5` (Tailwind `zinc-100`) — Latar pemisah antar-section (Keunggulan, Galeri & Ulasan, Kontak).
* **Border Gray:** `#E4E4E7` (Tailwind `zinc-200`) — Garis tepi kartu motor dan kolom input.
* **Muted Text Gray:** `#71717A` (Tailwind `zinc-500`) — Deskripsi sekunder, label paket sewa.
* **Charcoal Dark:** `#18181B` (Tailwind `zinc-900`) — Teks utama, harga motor, **teks di atas tombol kuning (wajib kontras tinggi)**, dan latar belakang **Footer**.

### 4.2 Tipografi
* **Font Utama:** `Plus Jakarta Sans` (Google Fonts, weight `400`, `500`, `600`, `700`, `800`).

---

## 5. DATABASE KATALOG MOTOR (`src/data/bikes.ts`)

Konstanta nomor WhatsApp bisnis:
```typescript
export const BUSINESS_INFO = {
  name: "Nadi Rental Bali",
  domain: "https://nadirentalbali.com",
  whatsappNumber: "6281234567890", // Format internasional tanpa '+'
  phoneDisplay: "+62 812-3456-7890",
  email: "halo@nadirentalbali.com",
  address: "Jl. Raya Kuta No. 88, Kuta, Kabupaten Badung, Bali 80361",
  instagram: "https://instagram.com/nadirentalbali",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.6896!2d115.1749!3d-8.7224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDMnMjAuNiJTIDExNcKwMTAnMjkuNiJF!5e0!3m2!1sen!2sid!4v1700000000000"
};
```

### Daftar 8 Unit Armada Motor Wajib
Setiap unit memiliki properti: `id`, `name`, `category` (`"daily"` | `"maxi"`), `cc`, `year`, `priceDaily` (number), `priceWeekly` (number), `popular` (boolean), `image` (URL valid), serta `specs` dalam dua bahasa (`id` dan `en`):

1. **Honda Beat Deluxe**
   - Kategori: `daily` | `110cc` | Tahun: `2023–2025`
   - Harga Harian: `Rp 70.000` (`70000`) | Harga Mingguan: `Rp 420.000` (`420000`)
   - Specs ID: `["Sangat Irit BBM", "Ringan & Lincah", "Charger USB"]`
   - Specs EN: `["Super Fuel Efficient", "Light & Agile", "USB Charger"]`
2. **Honda Scoopy New**
   - Kategori: `daily` | `110cc` | Tahun: `2023–2025` | `popular: true`
   - Harga Harian: `Rp 80.000` (`80000`) | Harga Mingguan: `Rp 480.000` (`480000`)
   - Specs ID: `["Desain Stylish", "Smart Key System", "USB Power Charger"]`
   - Specs EN: `["Stylish Retro Design", "Smart Key System", "USB Power Charger"]`
3. **Yamaha Fazzio Hybrid**
   - Kategori: `daily` | `125cc` | Tahun: `2023–2025`
   - Harga Harian: `Rp 85.000` (`85000`) | Harga Mingguan: `Rp 510.000` (`510000`)
   - Specs ID: `["Teknologi Hybrid", "Bagasi 17.8 Liter", "Keyless"]`
   - Specs EN: `["Hybrid Technology", "17.8L Spacious Trunk", "Keyless"]`
4. **Honda Vario 125**
   - Kategori: `daily` | `125cc` | Tahun: `2023–2025` | `popular: true`
   - Harga Harian: `Rp 85.000` (`85000`) | Harga Mingguan: `Rp 510.000` (`510000`)
   - Specs ID: `["Bertenaga & Irit", "Bagasi Muat Helm", "Lampu Full LED"]`
   - Specs EN: `["Powerful & Efficient", "Helmet-In Trunk", "Full LED Lights"]`
5. **Honda Vario 160 ABS**
   - Kategori: `maxi` | `160cc` | Tahun: `2023–2025` | `popular: true`
   - Harga Harian: `Rp 115.000` (`115000`) | Harga Mingguan: `Rp 690.000` (`690000`)
   - Specs ID: `["Mesin 160cc Responsif", "Rem ABS Aman", "Smart Key"]`
   - Specs EN: `["Responsive 160cc Engine", "Safe ABS Brakes", "Smart Key"]`
6. **Yamaha NMAX 155 Connected**
   - Kategori: `maxi` | `155cc` | Tahun: `2023–2025` | `popular: true`
   - Harga Harian: `Rp 130.000` (`130000`) | Harga Mingguan: `Rp 780.000` (`780000`)
   - Specs ID: `["Nyaman Jarak Jauh", "Jok Lebar & Empuk", "Bagasi Ekstra Luas"]`
   - Specs EN: `["Long-Ride Comfort", "Wide Plush Seat", "Extra Large Storage"]`
7. **Honda PCX 160**
   - Kategori: `maxi` | `160cc` | Tahun: `2023–2025`
   - Harga Harian: `Rp 135.000` (`135000`) | Harga Mingguan: `Rp 810.000` (`810000`)
   - Specs ID: `["Posisi Berkendara Santai", "Bagasi 30 Liter", "USB Type-C"]`
   - Specs EN: `["Relaxed Riding Posture", "30L Large Trunk", "USB Type-C"]`
8. **Yamaha XMAX 250**
   - Kategori: `maxi` | `250cc` | Tahun: `2023–2025`
   - Harga Harian: `Rp 250.000` (`250000`) | Harga Mingguan: `Rp 1.500.000` (`1500000`)
   - Specs ID: `["Touring Premium 250cc", "Traction Control", "Windshield Adjustable"]`
   - Specs EN: `["Premium 250cc Touring", "Traction Control", "Adjustable Windshield"]`

---

## 6. ALUR BOOKING & REDIRECT WHATSAPP (`src/lib/whatsapp.ts`)

### 6.1 Interaksi Kartu Motor (`CatalogSection` + `BookingModal`)
1. Pada setiap kartu motor terdapat dua tombol aksi:
   - **Tombol Utama (Kuning `#FACC15`, teks Charcoal):** `"Booking Unit Ini"` (ID) / `"Book This Bike"` (EN).
   - **Tombol Cepat Sekunder (Outline Abu-abu, ikon WA):** `"Chat Cepat"` (ID) / `"Quick Chat"` (EN) — langsung membuka WhatsApp tanpa modal dengan data motor & tarif terisi.
2. Ketika user menekan **"Booking Unit Ini"**, terbuka **Booking Modal** berisi:
   - Ringkasan Unit Terpilih (Foto mini, Nama Motor, Tarif Harian & Mingguan).
   - Input **Nama Penyewa** (teks).
   - Input **Tanggal Mulai Sewa** (`type="date"`, default tanggal besok).
   - Input **Durasi Sewa** (`number` + pilihan satuan `Hari / Days` atau `Minggu / Weeks`).
   - Input **Lokasi Antar-Jemput** (pilihan cepat / teks: *Bandara Ngurah Rai, Kuta, Seminyak, Canggu, Jimbaran, Nusa Dua, Sanur, Ubud, Lainnya*).
   - Estimasi Total Biaya otomatis berdasarkan tarif harian/mingguan $\times$ durasi.
   - Tombol Submit Kuning: **"Kirim Booking ke WhatsApp"** (ID) / **"Send Booking via WhatsApp"** (EN).

### 6.2 Template Pesan WhatsApp Otomatis
Fungsi `buildWhatsAppBookingUrl(params)` wajib menghasilkan URL ter-encode ke `https://wa.me/6281234567890?text=...`:

* **Jika `lang === 'id'`:**
  ```text
  Halo Nadi Rental Bali, saya ingin booking motor dengan detail berikut:

  • Unit Motor: {bikeName} ({cc})
  • Tarif: {formattedDailyPrice}/hari | {formattedWeeklyPrice}/minggu
  • Nama Penyewa: {customerName}
  • Tanggal Mulai: {startDate}
  • Durasi Sewa: {duration} {unitLabel}
  • Lokasi Antar: {deliveryLocation}
  • Estimasi Total: {estimatedTotal}

  Mohon konfirmasi ketersediaan unitnya. Terima kasih!
  ```

* **Jika `lang === 'en'`:**
  ```text
  Hello Nadi Rental Bali, I would like to book a motorbike with the following details:

  • Motorbike: {bikeName} ({cc})
  • Rate: {formattedDailyPrice}/day | {formattedWeeklyPrice}/week
  • Customer Name: {customerName}
  • Start Date: {startDate}
  • Rental Duration: {duration} {unitLabel}
  • Delivery Location: {deliveryLocation}
  • Estimated Total: {estimatedTotal}

  Please confirm unit availability. Thank you!
  ```

---

## 7. SPESIFIKASI KONTEN LENGKAP PER SECTION (`src/data/dictionary.ts`)

### 7.1 Navbar & Language Switcher
* **Menu ID:** `Beranda` (`#hero`), `Daftar Harga` (`#katalog`), `Tentang Kami` (`#tentang`), `Galeri & Ulasan` (`#galeri`), `FAQ` (`#faq`), `Kontak` (`#kontak`).
* **Menu EN:** `Home` (`#hero`), `Price List` (`#katalog`), `About Us` (`#tentang`), `Gallery & Reviews` (`#galeri`), `FAQ` (`#faq`), `Contact` (`#kontak`).
* **Language Switcher:** Pill toggle `[ ID | EN ]` yang menavigasi langsung antara `/id` dan `/en` (menggunakan `next/link`) dengan highlight kuning pada bahasa aktif.
* **CTA Navbar:** `"WhatsApp Kami"` (ID) / `"WhatsApp Us"` (EN).

### 7.2 Section 1: Hero Banner
* **Badge Kuning:** `"Gratis Antar-Jemput Bandara Ngurah Rai & Kuta"` (ID) / `"Free Airport & Kuta Delivery"` (EN).
* **H1 ID:** `"Sewa Motor Bali Terpercaya, Bersih & Tanpa Ribet"`
* **H1 EN:** `"Trusted, Clean & Hassle-Free Motorbike Rental in Bali"`
* **Subtitle ID:** `"Jelajahi keindahan Pulau Dewata dengan armada motor matic terbaru dan terawat. Proses cepat via WhatsApp, harga transparan, serta gratis 2 helm SNI, phone holder, dan jas hujan."`
* **Subtitle EN:** `"Explore the Island of the Gods with our latest, well-maintained scooters. Fast WhatsApp booking, transparent pricing, plus free 2 SNI helmets, phone holder, and raincoats."`
* **CTA 1 (Kuning):** `"Pilih Motor & Harga"` (ID) / `"View Bikes & Rates"` (EN) $\rightarrow$ scroll ke `#katalog`.
* **CTA 2 (Putih/Outline):** `"Hubungi WhatsApp"` (ID) / `"Chat on WhatsApp"` (EN).
* **Social Proof Strip:** `"★★★★★ 4.9/5 Rating dari 500+ Wisatawan Domestik & Mancanegara"` (ID) / `"★★★★★ 4.9/5 Rated by 500+ Local & International Travelers"` (EN).

### 7.3 Section 2: Tentang Nadi Rental Bali & Cakupan Area (`#tentang`)
* **Judul ID:** `"Tentang Nadi Rental Bali"` | **EN:** `"About Nadi Rental Bali"`
* **Deskripsi ID:** `"Nadi Rental Bali hadir sebagai mitra perjalanan terbaik Anda selama berlibur maupun bekerja di Bali. Kami menyediakan unit sepeda motor keluaran terbaru yang selalu menjalani pengecekan mesin, rem, dan ban sebelum diserahkan kepada penyewa."`
* **Deskripsi EN:** `"Nadi Rental Bali is your trusted travel companion for holidays and business trips in Bali. We provide late-model scooters that undergo thorough engine, brake, and tire inspections prior to every handover."`
* **Daftar Area Layanan (Badge Abu-abu/Kuning):** `Bandara Ngurah Rai`, `Kuta`, `Legian`, `Seminyak`, `Canggu`, `Jimbaran`, `Nusa Dua`, `Uluwatu`, `Sanur`, `Denpasar`, `Ubud`.

### 7.4 Section 3: Keunggulan Layanan (`#keunggulan` — Latar `#F4F4F5`)
4 Kartu Putih dengan ikon berlatar Kuning:
1. **Armada Terbaru & Prima / Late-Model & Well-Maintained:** Servis rutin berkala, mesin halus, dan unit selalu dicuci bersih.
2. **Harga Jujur & Transparan / Honest & Transparent Rates:** Tarif jelas harian maupun mingguan tanpa biaya tersembunyi.
3. **Gratis Antar-Jemput / Free Delivery & Pick-Up:** Bebas biaya pengantaran dan penjemputan untuk area Bandara Ngurah Rai, Kuta, Legian, dan Seminyak.
4. **Booking Cepat Tanpa Ribet / Fast & Easy Booking:** Cukup pilih unit di website, klik booking, dan konfirmasi jadwal lewat WhatsApp.

### 7.5 Section 4: Katalog Daftar Harga (`#katalog` — Latar `#FFFFFF`)
* **Banner Fasilitas Gratis (Kotak Kuning Muda `#FEF9C3` ber-border `#FACC15`):**
  - **ID:** `"🎁 GRATIS Setiap Penyewaan: 2 Helm SNI Bersih, Phone Holder Stang, dan 2 Jas Hujan!"`
  - **EN:** `"🎁 FREE With Every Rental: 2 Clean Helmets, Handlebar Phone Holder, and 2 Raincoats!"`
* **Tab Filter:**
  - `Semua Unit (8)` / `All Bikes (8)`
  - `Matic Harian (110cc–125cc)` / `Daily Scooters (110cc–125cc)`
  - `Matic Maxi & Touring (150cc–250cc)` / `Maxi & Touring (150cc–250cc)`

### 7.6 Section 5: Galeri Pelanggan & Ulasan (`#galeri` — Latar `#F4F4F5`)
* **Galeri Foto (6 Foto Grid Responsif):** Dokumentasi serah terima motor dengan pelanggan di bandara, hotel, dan area wisata Bali + tombol menuju Instagram `@nadirentalbali`.
* **4 Kartu Testimoni Pelanggan (Putih, Bintang Kuning):**
  1. **Rizky Pratama (Jakarta):** *"Motor Vario 125-nya mulus banget, tarikan enteng. Diantar tepat waktu di Bandara Ngurah Rai dan helmnya wangi."*
  2. **Sarah Jenkins (Australia):** *"Super smooth booking via WhatsApp! Scoopy was practically brand new and came with a phone holder which made navigating Canggu so easy."*
  3. **Dimas Saputra (Surabaya):** *"Harga sewa mingguan NMAX paling worth it di Kuta. Prosesnya nggak ribet sama sekali, admin ramah."*
  4. **Lucas Meyer (Germany):** *"Great service from Nadi Rental Bali. Free delivery to our hotel in Seminyak and zero hidden fees."*

### 7.7 Section 6: FAQ (`#faq` — Latar `#FFFFFF`)
Accordion interaktif berisi 5 pertanyaan & jawaban lengkap dalam Bahasa Indonesia dan Bahasa Inggris:
1. **Syarat sewa motor (WNI & WNA):** WNI wajib memiliki e-KTP asli dan SIM C aktif; WNA wajib menunjukkan Paspor dan SIM Internasional (*International Driving Permit*) yang berlaku.
2. **Area gratis antar-jemput:** Gratis untuk Bandara Ngurah Rai, Kuta, Legian, dan Seminyak (minimal sewa 2 hari). Area Canggu, Jimbaran, Nusa Dua, Sanur, dan Ubud tersedia dengan biaya pengantaran sangat terjangkau.
3. **Perlengkapan gratis:** Setiap unit sudah dilengkapi 2 helm standar SNI bersih, 1 phone holder terpasang, dan 2 jas hujan.
4. **Metode pembayaran:** Pembayaran dapat dilakukan saat serah terima unit (*Cash* IDR atau Transfer Bank / QRIS).
5. **Perpanjangan masa sewa:** Dapat dilakukan dengan menginformasikan admin via WhatsApp maksimal 24 jam sebelum waktu pengembalian berakhir.

### 7.8 Section 7: Kontak & Form Pemesanan Cepat (`#kontak` — Latar `#F4F4F5`)
* **Kolom Kiri:** Alamat kantor/garasi, nomor WhatsApp, email, jam operasional (`07.00 – 22.00 WITA`), dan iframe Google Maps.
* **Kolom Kanan:** Kartu putih berisi Form Pemesanan Cepat (Dropdown seluruh unit motor dari `bikes.ts`, Nama Lengkap, Tanggal Mulai, Durasi Sewa, Lokasi Antar) yang langsung terhubung ke fungsi WhatsApp Redirect.

### 7.9 Section 8: Footer (Latar Charcoal `#18181B`)
* **Kolom 1:** Brand **Nadi Rental Bali**, deskripsi singkat, ikon sosial media (WhatsApp, Instagram).
* **Kolom 2:** Unit Populer (Honda Scoopy, Honda Vario 125, Honda Vario 160, Yamaha NMAX 155) — klik otomatis membuka Booking Modal untuk unit tersebut.
* **Kolom 3:** Navigasi Cepat (`Beranda`, `Daftar Harga`, `Tentang Kami`, `Galeri & Ulasan`, `FAQ`, `Kontak`) — **tanpa tautan Artikel/Blog**.
* **Kolom 4:** Area Layanan Populer (`Sewa Motor Bandara Ngurah Rai`, `Sewa Motor Kuta`, `Sewa Motor Seminyak`, `Sewa Motor Canggu`, `Sewa Motor Uluwatu`, `Sewa Motor Nusa Dua`, `Sewa Motor Sanur`, `Sewa Motor Ubud`).

---

## 8. KONFIGURASI SEO & SCHEMA JSON-LD (`src/app/[lang]/layout.tsx`)

1. **`generateStaticParams()`:** Mengembalikan `[{ lang: 'id' }, { lang: 'en' }]` sehingga Next.js menghasilkan halaman statis `/id/index.html` dan `/en/index.html`.
2. **`generateMetadata({ params })`:**
   - Mengatur `title`, `description`, `keywords` spesifik per bahasa (`id` dan `en`).
   - Mengatur `alternates`:
     - `canonical`: `https://nadirentalbali.com/${lang}/`
     - `languages`: `{ 'id': 'https://nadirentalbali.com/id/', 'en': 'https://nadirentalbali.com/en/', 'x-default': 'https://nadirentalbali.com/id/' }`
   - Mengatur `openGraph` lengkap dengan judul, deskripsi, dan gambar pratinjau.
3. **Structured Data JSON-LD (`AutoRental`):**
   - Menyematkan `<script type="application/ld+json">` berisi skema `AutoRental` lengkap dengan nama bisnis `"Nadi Rental Bali"`, URL `"https://nadirentalbali.com"`, telepon, alamat di Kuta Bali, rentang harga `"Rp 70.000 - Rp 250.000"`, `areaServed` (Bali, Kuta, Bandara Ngurah Rai, Seminyak, Canggu, Ubud), dan `aggregateRating` (`4.9` dari `520` ulasan).
4. **File `public/sitemap.xml` & `public/robots.txt`:**
   - Mencantumkan URL `https://nadirentalbali.com/id/` dan `https://nadirentalbali.com/en/` lengkap dengan tag `xhtml:link` `hreflang`.