# Nadi Rental Bali — Motorbike Rental Catalog & Booking

Website katalog & booking sewa motor Bali berbasis **Next.js App Router (Static Export)** untuk **Cloudflare Pages**.

## Tech Stack

- Next.js 15 (App Router, `output: "export"`)
- TypeScript
- Tailwind CSS
- Lucide Icons
- Plus Jakarta Sans
- Cloudflare Pages (`out/`)

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` — otomatis diarahkan ke `/id/`.

## Build Produksi

```bash
npm run build
```

Hasil build statis berada di folder `out/`.

## Deploy ke Cloudflare Pages

| Setting | Nilai |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `20` atau lebih baru |

File `public/_redirects` mengarahkan `/` ke `/id/`, dan `public/_headers` mengatur cache aset.

## Struktur Singkat

```text
src/
├── app/
│   ├── (root)/                 # Redirect / ke /id/
│   ├── (site)/[lang]/          # Landing page per bahasa (id & en)
│   ├── globals.css
│   └── not-found.tsx
├── components/                 # Navbar, Hero, Katalog, Booking Modal, dll.
├── data/
│   ├── bikes.ts                # 8 unit armada + info bisnis
│   └── dictionary.ts           # Terjemahan UI & konten ID/EN
└── lib/
    ├── types.ts
    └── whatsapp.ts             # Builder pesan & URL WhatsApp
public/
├── images/                     # Foto armada, galeri, OG image
├── _redirects
├── _headers
├── robots.txt
├── sitemap.xml
└── image-credits.txt
```

## Booking via WhatsApp

Semua tombol booking membuka modal, lalu mengirim detail pesanan ter-encode ke:

```text
https://wa.me/6285847968314?text=...
```

Nomor WhatsApp, alamat, email, dan Instagram dapat diubah di `src/data/bikes.ts` pada konstanta `BUSINESS_INFO`.

## SEO

- Metadata, canonical, dan hreflang per bahasa (`/id/`, `/en/`)
- JSON-LD `AutoRental`
- `sitemap.xml` + `robots.txt`
- Atribut `<html lang>` sesuai rute

## Kredit Foto

Daftar lengkap sumber dan lisensi foto ada di [`public/image-credits.txt`](public/image-credits.txt).
