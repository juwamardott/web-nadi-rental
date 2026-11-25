import type { Lang } from "@/lib/types";
import type { L10n } from "@/data/areas";

export interface Guide {
  slug: L10n;
  title: L10n;
  description: L10n;
  headline: L10n;
  intro: L10n;
  sections: {
    heading: L10n;
    paragraphs: L10n[];
    bullets?: L10n[];
  }[];
  faq: { question: L10n; answer: L10n }[];
}

export const GUIDES: Guide[] = [
  {
    slug: {
      id: "syarat-sewa-motor-bali-wna",
      en: "requirements-rent-motorbike-bali-foreigners",
    },
    title: {
      id: "Syarat Sewa Motor di Bali untuk WNA & WNI",
      en: "Motorbike Rental Requirements in Bali for Foreigners & Locals",
    },
    description: {
      id: "Apa saja syarat sewa motor di Bali? Simpan panduan lengkap untuk WNI dan WNA: KTP, SIM C, paspor, dan IDP. Booking mudah via WhatsApp.",
      en: "What do you need to rent a motorbike in Bali? A complete guide for locals and foreigners: ID card, SIM C, passport, and IDP. Book easily on WhatsApp.",
    },
    headline: {
      id: "Syarat Sewa Motor di Bali: Panduan Lengkap",
      en: "Motorbike Rental Requirements in Bali: A Complete Guide",
    },
    intro: {
      id: "Sebelum menyewa motor di Bali, siapkan dokumen yang sesuai dengan kewarganegaraan Anda. Proses di Nadi Rental Bali sengaja dibuat sederhana: cukup tunjukkan dokumen saat serah terima dan bayar langsung di tempat.",
      en: "Before renting a motorbike in Bali, prepare the documents that match your nationality. At Nadi Rental Bali the process is deliberately simple: show your documents at handover and pay on the spot.",
    },
    sections: [
      {
        heading: { id: "Syarat untuk Warga Negara Indonesia", en: "Requirements for Indonesian Citizens" },
        paragraphs: [
          {
            id: "WNI wajib membawa e-KTP asli dan SIM C yang masih aktif. Pastikan nama pada kedua dokumen sama sebelum melakukan booking.",
            en: "Indonesian citizens must bring an original e-KTP and a valid SIM C licence. Make sure the name on both documents matches before booking.",
          },
        ],
        bullets: [
          { id: "e-KTP asli (bukan fotokopi)", en: "Original e-KTP (not a photocopy)" },
          { id: "SIM C yang masih berlaku", en: "A valid SIM C licence" },
        ],
      },
      {
        heading: { id: "Syarat untuk Wisatawan Asing", en: "Requirements for Foreign Travelers" },
        paragraphs: [
          {
            id: "WNA wajib menunjukkan paspor yang masih berlaku dan SIM Internasional (International Driving Permit / IDP) yang berlaku. SIM dari negara asal saja tidak cukup untuk berkendara di Bali.",
            en: "Foreign nationals must present a valid passport and a valid International Driving Permit (IDP). A licence from your home country alone is not sufficient to ride in Bali.",
          },
        ],
        bullets: [
          { id: "Paspor yang masih berlaku", en: "A valid passport" },
          {
            id: "SIM Internasional (IDP) yang berlaku",
            en: "A valid International Driving Permit (IDP)",
          },
        ],
      },
      {
        heading: { id: "Proses Booking serah Terima", en: "Booking and Handover" },
        paragraphs: [
          {
            id: "Pilih unit di katalog, lalu kirim tanggal sewa dan lokasi pengantaran lewat WhatsApp. Kami konfirmasi ketersediaan unit, lalu motor disiapkan dan diserahkan sesuai jadwal.",
            en: "Choose a bike from the catalogue, then send your rental dates and delivery location on WhatsApp. We confirm availability, then prepare and hand over the scooter as scheduled.",
          },
          {
            id: "Pembayaran dilakukan saat serah terima dengan Tunai (IDR), Card, Dollar, Transfer Bank, atau QRIS. Kami tidak meminta pembayaran di muka. Setiap sewa sudah termasuk 2 helm dan phone holder.",
            en: "Payment is made at handover by cash (IDR), card, US dollars, bank transfer, or QRIS. We never ask for prepayment. Every rental includes 2 helmets and a phone holder.",
          },
        ],
      },
      {
        heading: { id: "Area Antar-Jemput", en: "Delivery Areas" },
        paragraphs: [
          {
            id: "Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area dengan minimal sewa 2 hari. Untuk area seperti Seminyak, Canggu, Sanur, Ubud, dan Uluwatu, kami siap bantu dengan biaya pengantaran yang terjangkau.",
            en: "Free delivery and pick-up apply to Ngurah Rai Airport and the Kuta area for a minimum 2-day rental. For areas such as Seminyak, Canggu, Sanur, Ubud, and Uluwatu, we can arrange delivery for an affordable fee.",
          },
        ],
      },
    ],
    faq: [
      {
        question: {
          id: "Apakah SIM asing tanpa IDP boleh dipakai?",
          en: "Can I use a foreign licence without an IDP?",
        },
        answer: {
          id: "Tidak. Wisatawan asing wajib memiliki SIM Internasional (IDP) yang berlaku bersama paspor.",
          en: "No. Foreign travelers must hold a valid International Driving Permit (IDP) along with their passport.",
        },
      },
      {
        question: {
          id: "Apakah ada pembayaran di muka atau jaminan identitas?",
          en: "Is a deposit or identity guarantee required?",
        },
        answer: {
          id: "Tidak ada pembayaran di muka. Pembayaran dilakukan saat serah terima unit.",
          en: "No prepayment is required. Payment is made when the unit is handed over.",
        },
      },
      {
        question: {
          id: "Apakah bisa langsung sewa setelah mendarat?",
          en: "Can I rent right after landing?",
        },
        answer: {
          id: "Ya. Kami melayani pengantaran ke Bandara Ngurah Rai; konfirmasi jadwal penerbangan Anda via WhatsApp.",
          en: "Yes. We deliver to Ngurah Rai Airport; confirm your flight schedule on WhatsApp.",
        },
      },
    ],
  },
  {
    slug: { id: "tips-sewa-motor-bali", en: "tips-renting-a-scooter-in-bali" },
    title: {
      id: "Tips Sewa Motor di Bali: Helm, Pembayaran, dan BBM",
      en: "Tips for Renting a Scooter in Bali: Helmets, Payment, and Fuel",
    },
    description: {
      id: "Tips praktis sewa motor di Bali: cek unit, gunakan helm, bayar saat serah terima, dan atur area antar-jemput. Booking mudah via WhatsApp.",
      en: "Practical tips for renting a scooter in Bali: inspect the unit, wear a helmet, pay at handover, and plan delivery. Book easily on WhatsApp.",
    },
    headline: {
      id: "Tips Sewa Motor di Bali agar Perjalanan Tanpa Ribet",
      en: "Tips for a Hassle-Free Scooter Rental in Bali",
    },
    intro: {
      id: "Motor adalah cara paling fleksibel untuk menjelajahi Bali. Dengan beberapa persiapan sederhana, perjalanan Anda jadi lebih aman dan nyaman sejak hari pertama.",
      en: "A scooter is the most flexible way to explore Bali. With a little preparation, your trip becomes safer and more comfortable from day one.",
    },
    sections: [
      {
        heading: { id: "Cek Unit Sebelum Berangkat", en: "Inspect the Scooter Before You Go" },
        paragraphs: [
          {
            id: "Sebelum meninggalkan garasi, cek rem, ban, lampu, dan spion. Di Nadi Rental Bali, setiap unit dicek dan dicuci bersih sebelum dikirim ke penyewa, namun pemeriksaan singkat tetap disarankan.",
            en: "Before leaving the garage, check the brakes, tyres, lights, and mirrors. At Nadi Rental Bali every unit is checked and cleaned before delivery, but a quick personal inspection is still recommended.",
          },
        ],
      },
      {
        heading: { id: "Perlengkapan yang sudah Termasuk", en: "Essentials Already Included" },
        paragraphs: [
          {
            id: "Setiap sewa sudah termasuk 2 helm dan phone holder tanpa biaya tambahan. Gunakan helm sejak perjalanan dimulai, termasuk untuk jarak pendek.",
            en: "Every rental includes 2 helmets and a phone holder at no extra cost. Wear a helmet from the start of your ride, even for short distances.",
          },
        ],
      },
      {
        heading: { id: "Pembayaran Tanpa Ribet", en: "Simple Payment" },
        paragraphs: [
          {
            id: "Bayar saat serah terima, bukan di muka. Kami menerima Tunai (IDR), Card, Dollar, Transfer Bank, dan QRIS. Simpan bukti pembayaran untuk berjaga-jaga.",
            en: "Pay at handover, never in advance. We accept cash (IDR), card, US dollars, bank transfer, and QRIS. Keep your payment receipt just in case.",
          },
        ],
      },
      {
        heading: { id: "Rencanakan Area Antar-Jemput", en: "Plan Your Delivery Area" },
        paragraphs: [
          {
            id: "Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area dengan minimal sewa 2 hari. Untuk area lain seperti Canggu, Seminyak, Ubud, atau Uluwatu, konfirmasi biaya pengantaran di awal agar tidak ada kejutan.",
            en: "Free delivery and pick-up apply to Ngurah Rai Airport and the Kuta area for a minimum 2-day rental. For other areas such as Canggu, Seminyak, Ubud, or Uluwatu, confirm the delivery fee up front to avoid surprises.",
          },
        ],
      },
      {
        heading: { id: "BBM dan Parkir", en: "Fuel and Parking" },
        paragraphs: [
          {
            id: "Isi tangki di stasiun resmi sebelum perjalanan jauh dan parkir di area yang disediakan. Di kawasan ramai seperti Kuta dan Canggu, gunakan lahan parkir resmi agar motor tetap aman.",
            en: "Fill up at an official petrol station before longer rides and park in designated areas. In busy spots like Kuta and Canggu, use official parking to keep your scooter safe.",
          },
        ],
      },
    ],
    faq: [
      {
        question: { id: "Apakah jas hujan disediakan?", en: "Are raincoats provided?" },
        answer: {
          id: "Yang termasuk dalam sewa adalah 2 helm dan phone holder. Jas hujan tidak termasuk, jadi siapkan sendiri jika cuaca berpotensi hujan.",
          en: "The rental includes 2 helmets and a phone holder. Raincoats are not included, so bring your own if rain is expected.",
        },
      },
      {
        question: { id: "Bisakah motor diantar ke hotel?", en: "Can the scooter be delivered to my hotel?" },
        answer: {
          id: "Ya. Kami antar ke hotel atau villa sesuai jadwal; gratis untuk Bandara Ngurah Rai dan Kuta Area dengan minimal sewa 2 hari.",
          en: "Yes. We deliver to your hotel or villa as scheduled; free for Ngurah Rai Airport and the Kuta area with a minimum 2-day rental.",
        },
      },
      {
        question: { id: "Bagaimana kalau ingin memperpanjang sewa?", en: "What if I want to extend the rental?" },
        answer: {
          id: "Informasikan via WhatsApp maksimal 24 jam sebelum waktu pengembalian, selama unit masih tersedia.",
          en: "Let us know on WhatsApp at least 24 hours before the return time, subject to unit availability.",
        },
      },
    ],
  },
];

export function getGuideBySlug(lang: Lang, slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug[lang] === slug);
}
