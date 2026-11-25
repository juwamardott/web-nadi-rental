import type { Lang } from "@/lib/types";

export interface L10n {
  id: string;
  en: string;
}

export interface Area {
  key: string;
  slug: L10n;
  name: L10n;
  seoTitle: L10n;
  seoDescription: L10n;
  headline: L10n;
  intro: L10n;
  delivery: L10n;
  highlights: { title: L10n; description: L10n }[];
  nearby: L10n[];
  faq: { question: L10n; answer: L10n }[];
}

export const AREAS: Area[] = [
  {
    key: "airport",
    slug: {
      id: "sewa-motor-bandara-ngurah-rai",
      en: "motorbike-rental-ngurah-rai-airport",
    },
    name: { id: "Bandara Ngurah Rai", en: "Ngurah Rai Airport" },
    seoTitle: {
      id: "Sewa Motor Bandara Ngurah Rai - Gratis Antar-Jemput | Nadi Rental Bali",
      en: "Ngurah Rai Airport Motorbike Rental - Free Delivery | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor di Bandara Ngurah Rai dengan gratis antar-jemput, 2 helm, dan phone holder. Harga mulai Rp 50.000/hari. Booking cepat via WhatsApp.",
      en: "Rent a motorbike at Ngurah Rai Airport with free delivery, 2 helmets, and a phone holder. Rates from Rp 50,000/day. Quick WhatsApp booking.",
    },
    headline: {
      id: "Sewa Motor Bandara Ngurah Rai, Langsung Berangkat",
      en: "Ngurah Rai Airport Motorbike Rental, Ready When You Land",
    },
    intro: {
      id: "Mendarat di Bali dan langsung bisa berkendara? Tim Nadi Rental Bali menyiapkan motor matic yang sudah dicek dan dibersihkan, lalu mengantarnya langsung ke area bandara. Cukup konfirmasi via WhatsApp, lalu serah terima di titik yang disepakati.",
      en: "Land in Bali and ride straight away? The Nadi Rental Bali team prepares a checked, cleaned scooter and delivers it to the airport area. Just confirm on WhatsApp and meet at the agreed point for handover.",
    },
    delivery: {
      id: "Gratis antar-jemput untuk Bandara Ngurah Rai dan Kuta Area dengan minimal sewa 2 hari. Untuk area lain, kami siap bantu dengan biaya pengantaran yang terjangkau.",
      en: "Free delivery and pick-up for Ngurah Rai Airport and the Kuta area with a minimum 2-day rental. Other areas can be arranged for an affordable delivery fee.",
    },
    highlights: [
      {
        title: { id: "Serah Terima di Bandara", en: "Handover at the Airport" },
        description: {
          id: "Motor disiapkan sebelum kedatangan Anda, jadi tidak perlu menunggu lama setelah mendarat.",
          en: "Your scooter is prepared before you arrive, so there is no long wait after landing.",
        },
      },
      {
        title: { id: "Perlengkapan Gratis", en: "Free Essentials" },
        description: {
          id: "Setiap sewa sudah termasuk 2 helm dan phone holder tanpa biaya tambahan.",
          en: "Every rental includes 2 helmets and a phone holder at no extra cost.",
        },
      },
      {
        title: { id: "Harga Transparan", en: "Transparent Rates" },
        description: {
          id: "Tarif mulai Rp 50.000 per hari, dibayar saat serah terima tanpa pembayaran di muka.",
          en: "Rates start at Rp 50,000 per day, paid at handover with no prepayment.",
        },
      },
    ],
    nearby: [
      { id: "Kuta", en: "Kuta" },
      { id: "Legian", en: "Legian" },
      { id: "Seminyak", en: "Seminyak" },
    ],
    faq: [
      {
        question: {
          id: "Apakah motor bisa diantar langsung ke bandara?",
          en: "Can the scooter be delivered directly to the airport?",
        },
        answer: {
          id: "Ya. Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area dengan minimal sewa 2 hari. Konfirmasi jadwal penerbangan Anda via WhatsApp.",
          en: "Yes. Free delivery applies to Ngurah Rai Airport and the Kuta area for a minimum 2-day rental. Confirm your flight schedule on WhatsApp.",
        },
      },
      {
        question: {
          id: "Dokumen apa yang harus disiapkan wisatawan asing?",
          en: "What documents do foreign travelers need?",
        },
        answer: {
          id: "Paspor yang masih berlaku dan SIM Internasional (International Driving Permit) yang berlaku.",
          en: "A valid passport and a valid International Driving Permit (IDP).",
        },
      },
      {
        question: {
          id: "Bagaimana cara pembayarannya?",
          en: "How do I pay?",
        },
        answer: {
          id: "Pembayaran dilakukan saat serah terima: Tunai (IDR), Card, Dollar, Transfer Bank, atau QRIS.",
          en: "Payment is made at handover: cash (IDR), card, US dollars, bank transfer, or QRIS.",
        },
      },
    ],
  },
  {
    key: "kuta",
    slug: { id: "sewa-motor-kuta", en: "motorbike-rental-kuta" },
    name: { id: "Kuta", en: "Kuta" },
    seoTitle: {
      id: "Sewa Motor Kuta - Gratis Antar-Jemput | Nadi Rental Bali",
      en: "Motorbike Rental in Kuta - Free Delivery | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor matic di Kuta dengan gratis antar-jemput, 2 helm, dan phone holder. Harga mulai Rp 50.000/hari. Booking via WhatsApp.",
      en: "Rent a scooter in Kuta with free delivery, 2 helmets, and a phone holder. Rates from Rp 50,000/day. Book via WhatsApp.",
    },
    headline: {
      id: "Sewa Motor di Kuta, Praktis dan Terjangkau",
      en: "Rent a Scooter in Kuta, Easy and Affordable",
    },
    intro: {
      id: "Kuta adalah pusat aktivitas Bali Selatan. Dengan motor dari Nadi Rental Bali, Anda bisa bebas menjelajah pantai, pusat perbelanjaan, hingga tempat makan tanpa bergantung pada transportasi online.",
      en: "Kuta is the heart of South Bali. With a scooter from Nadi Rental Bali, you can reach the beach, shopping centres, and local eateries without relying on ride-hailing apps.",
    },
    delivery: {
      id: "Pengantaran dan penjemputan gratis berlaku di Kuta Area dan Bandara Ngurah Rai dengan minimal sewa 2 hari.",
      en: "Free delivery and pick-up apply in the Kuta area and at Ngurah Rai Airport for a minimum 2-day rental.",
    },
    highlights: [
      {
        title: { id: "Bebas Keliling Kuta", en: "Explore Kuta Freely" },
        description: {
          id: "Akses mudah ke Pantai Kuta, Legian, dan Kawasan Seminyak dalam satu hari.",
          en: "Easy access to Kuta Beach, Legian, and Seminyak in a single day.",
        },
      },
      {
        title: { id: "Unit Bersih & Terawat", en: "Clean, Well-Maintained Units" },
        description: {
          id: "Setiap motor dicek dan dicuci bersih sebelum dikirim ke penyewa.",
          en: "Every scooter is checked and cleaned before it is delivered to the renter.",
        },
      },
      {
        title: { id: "Tanpa Biaya Tersembunyi", en: "No Hidden Fees" },
        description: {
          id: "Harga jelas di awal, termasuk 2 helm dan phone holder.",
          en: "Clear pricing from the start, including 2 helmets and a phone holder.",
        },
      },
    ],
    nearby: [
      { id: "Legian", en: "Legian" },
      { id: "Seminyak", en: "Seminyak" },
      { id: "Bandara Ngurah Rai", en: "Ngurah Rai Airport" },
    ],
    faq: [
      {
        question: { id: "Apakah gratis antar di area Kuta?", en: "Is delivery free in the Kuta area?" },
        answer: {
          id: "Ya, untuk Kuta Area dan Bandara Ngurah Rai dengan minimal sewa 2 hari.",
          en: "Yes, for the Kuta area and Ngurah Rai Airport with a minimum 2-day rental.",
        },
      },
      {
        question: {
          id: "Berapa harga sewa motor harian di Kuta?",
          en: "How much is a daily scooter rental in Kuta?",
        },
        answer: {
          id: "Mulai Rp 50.000 per hari, tergantung tipe motor. Harga dapat berubah saat high season; konfirmasi via WhatsApp.",
          en: "From Rp 50,000 per day depending on the scooter type. Rates may change in high season; confirm on WhatsApp.",
        },
      },
      {
        question: {
          id: "Apakah boleh menyewa untuk satu hari?",
          en: "Can I rent for a single day?",
        },
        answer: {
          id: "Boleh, selama unit tersedia. Untuk gratis antar-jemput berlaku minimal sewa 2 hari.",
          en: "Yes, subject to availability. Free delivery and pick-up require a minimum 2-day rental.",
        },
      },
    ],
  },
  {
    key: "seminyak",
    slug: { id: "sewa-motor-seminyak", en: "scooter-rental-seminyak" },
    name: { id: "Seminyak", en: "Seminyak" },
    seoTitle: {
      id: "Sewa Motor Seminyak - Scooter Bersih & Terawat | Nadi Rental Bali",
      en: "Scooter Rental in Seminyak - Clean & Maintained | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor matic di Seminyak, dekat pantai dan pusat kuliner. Gratis 2 helm dan phone holder, harga mulai Rp 50.000/hari.",
      en: "Rent a scooter in Seminyak, close to the beach and dining spots. Free 2 helmets and a phone holder, rates from Rp 50,000/day.",
    },
    headline: {
      id: "Jelajahi Seminyak dengan Motor Sendiri",
      en: "Explore Seminyak on Your Own Scooter",
    },
    intro: {
      id: "Dari Pantai Seminyak hingga deretan kafe dan butik, semuanya lebih mudah dengan motor. Nadi Rental Bali menyiapkan unit matic yang nyaman untuk perjalanan harian Anda di Seminyak.",
      en: "From Seminyak Beach to the cafés and boutiques, everything is easier with a scooter. Nadi Rental Bali provides a comfortable automatic bike for your daily trips in Seminyak.",
    },
    delivery: {
      id: "Antar-jemput gratis tersedia untuk Kuta Area dan Bandara Ngurah Rai. Seminyak dapat dilayani dengan biaya pengantaran yang terjangkau.",
      en: "Free delivery is available for the Kuta area and Ngurah Rai Airport. Seminyak can be served for an affordable delivery fee.",
    },
    highlights: [
      {
        title: { id: "Dekat Pantai & Kuliner", en: "Close to Beach & Dining" },
        description: {
          id: "Parkir lebih mudah dan jadwal Anda tidak terikat transportasi online.",
          en: "Easier parking and a schedule that is not tied to ride-hailing apps.",
        },
      },
      {
        title: { id: "Motor Siap Pakai", en: "Ready to Ride" },
        description: {
          id: "Unit dicek dan dicuci bersih sebelum diserahkan.",
          en: "Each unit is checked and cleaned before handover.",
        },
      },
      {
        title: { id: "Booking Cepat", en: "Quick Booking" },
        description: {
          id: "Pilih unit, kirim detail lewat WhatsApp, dan konfirmasi jadwalnya.",
          en: "Choose a unit, send your details on WhatsApp, and confirm the schedule.",
        },
      },
    ],
    nearby: [
      { id: "Kuta", en: "Kuta" },
      { id: "Legian", en: "Legian" },
      { id: "Canggu", en: "Canggu" },
    ],
    faq: [
      {
        question: { id: "Apakah motor bisa diantar ke hotel di Seminyak?", en: "Can you deliver to my hotel in Seminyak?" },
        answer: {
          id: "Ya. Kami bisa mengantar ke hotel atau villa di Seminyak dengan biaya pengantaran yang terjangkau.",
          en: "Yes. We can deliver to hotels or villas in Seminyak for an affordable fee.",
        },
      },
      {
        question: { id: "Perlengkapan apa saja yang termasuk?", en: "What is included?" },
        answer: {
          id: "Setiap sewa termasuk 2 helm dan phone holder tanpa biaya tambahan.",
          en: "Every rental includes 2 helmets and a phone holder at no extra cost.",
        },
      },
      {
        question: { id: "Metode pembayaran apa yang diterima?", en: "Which payment methods are accepted?" },
        answer: {
          id: "Tunai (IDR), Card, Dollar, Transfer Bank, atau QRIS saat serah terima.",
          en: "Cash (IDR), card, US dollars, bank transfer, or QRIS at handover.",
        },
      },
    ],
  },
  {
    key: "canggu",
    slug: { id: "sewa-motor-canggu", en: "scooter-rental-canggu" },
    name: { id: "Canggu", en: "Canggu" },
    seoTitle: {
      id: "Sewa Motor Canggu - Motor Matic Terawat | Nadi Rental Bali",
      en: "Scooter Rental in Canggu - Well-Maintained Bikes | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor di Canggu untuk harian atau touring. Unit terawat, 2 helm dan phone holder gratis, booking via WhatsApp.",
      en: "Rent a scooter in Canggu for daily rides or touring. Well-maintained units, free 2 helmets and a phone holder, WhatsApp booking.",
    },
    headline: {
      id: "Sewa Motor di Canggu untuk Gaya Hidup Bali",
      en: "Rent a Scooter in Canggu for the Bali Lifestyle",
    },
    intro: {
      id: "Canggu terkenal dengan kafe, pantai, dan jalan-jalan sempit yang lebih nyaman dijelajahi dengan motor matic. Pilih unit harian atau maxi sesuai kebutuhan perjalanan Anda.",
      en: "Canggu is known for its cafés, beaches, and narrow streets that are easier to explore on an automatic scooter. Choose a daily commuter or a maxi model to suit your trip.",
    },
    delivery: {
      id: "Kami bisa mengantar motor ke area Canggu dengan biaya pengantaran yang sangat terjangkau. Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area.",
      en: "We can deliver scooters in Canggu for a very affordable fee. Free delivery applies to Ngurah Rai Airport and the Kuta area.",
    },
    highlights: [
      {
        title: { id: "Pilihan Unit Lengkap", en: "Wide Unit Selection" },
        description: {
          id: "Dari matic 110cc untuk harian hingga maxi untuk perjalanan lebih jauh.",
          en: "From 110cc daily scooters to maxi models for longer rides.",
        },
      },
      {
        title: { id: "Nyaman di Jalan Canggu", en: "Comfortable on Canggu Roads" },
        description: {
          id: "Motor ringan dan mudah diparkir di area ramai.",
          en: "Light, easy-to-park scooters for busy neighbourhoods.",
        },
      },
      {
        title: { id: "Tanpa Ribet", en: "Hassle-Free" },
        description: {
          id: "Konfirmasi via WhatsApp, bayar saat serah terima.",
          en: "Confirm on WhatsApp and pay at handover.",
        },
      },
    ],
    nearby: [
      { id: "Seminyak", en: "Seminyak" },
      { id: "Kuta", en: "Kuta" },
      { id: "Ubud", en: "Ubud" },
    ],
    faq: [
      {
        question: { id: "Apakah ada biaya antar ke Canggu?", en: "Is there a delivery fee to Canggu?" },
        answer: {
          id: "Ya, biayanya sangat terjangkau. Gratis antar-jemput hanya untuk Bandara Ngurah Rai dan Kuta Area.",
          en: "Yes, with a very affordable fee. Free delivery only applies to Ngurah Rai Airport and the Kuta area.",
        },
      },
      {
        question: { id: "Motor apa yang cocok untuk Canggu?", en: "Which scooter suits Canggu?" },
        answer: {
          id: "Matic 110cc–125cc paling praktis untuk jalanan Canggu. Untuk jarak lebih jauh, tersedia tipe maxi.",
          en: "A 110cc–125cc automatic is most practical around Canggu. Maxi models are available for longer distances.",
        },
      },
      {
        question: { id: "Bagaimana cara booking?", en: "How do I book?" },
        answer: {
          id: "Pilih unit di katalog, lalu kirim tanggal dan lokasi penjemputan lewat WhatsApp.",
          en: "Pick a bike from the catalogue, then send your dates and pick-up location on WhatsApp.",
        },
      },
    ],
  },
  {
    key: "uluwatu",
    slug: { id: "sewa-motor-uluwatu", en: "motorbike-rental-uluwatu" },
    name: { id: "Uluwatu", en: "Uluwatu" },
    seoTitle: {
      id: "Sewa Motor Uluwatu - Jelajahi Pantai & Pecutan | Nadi Rental Bali",
      en: "Motorbike Rental in Uluwatu - Beaches & Cliffs | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor untuk menjelajahi Uluwatu, Padang Padang, dan Pecutan. Unit terawat, booking cepat via WhatsApp.",
      en: "Rent a scooter to explore Uluwatu, Padang Padang, and Melasti Beach. Well-maintained units, quick WhatsApp booking.",
    },
    headline: {
      id: "Motor untuk Petualangan Uluwatu",
      en: "A Scooter for Your Uluwatu Adventure",
    },
    intro: {
      id: "Bukit Uluwatu membutuhkan motor yang bertenaga dan nyaman untuk jalanan berbukit. Nadi Rental Bali menyiapkan unit terawat untuk perjalanan ke pantai, tempat surfing, dan Pecutan.",
      en: "The Uluwatu peninsula calls for a reliable, comfortable scooter on hilly roads. Nadi Rental Bali prepares well-maintained units for trips to beaches, surf spots, and the cliff temple.",
    },
    delivery: {
      id: "Pengantaran ke Uluwatu tersedia dengan biaya yang terjangkau. Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area.",
      en: "Delivery to Uluwatu is available for an affordable fee. Free delivery applies to Ngurah Rai Airport and the Kuta area.",
    },
    highlights: [
      {
        title: { id: "Siap untuk Jalan Berbukit", en: "Ready for Hilly Roads" },
        description: {
          id: "Unit dicek sebelum diserahkan agar perjalanan tetap nyaman.",
          en: "Every unit is checked before handover for a comfortable ride.",
        },
      },
      {
        title: { id: "Akses Pantai Lebih Mudah", en: "Easier Beach Access" },
        description: {
          id: "Hentikan motor dekat pantai tanpa bergantung pada jadwal transportasi.",
          en: "Park close to the beach without depending on transport schedules.",
        },
      },
      {
        title: { id: "Harga Jujur", en: "Honest Pricing" },
        description: {
          id: "Tarif harian jelas, 2 helm dan phone holder termasuk.",
          en: "Clear daily rates, with 2 helmets and a phone holder included.",
        },
      },
    ],
    nearby: [
      { id: "Jimbaran", en: "Jimbaran" },
      { id: "Nusa Dua", en: "Nusa Dua" },
      { id: "Kuta", en: "Kuta" },
    ],
    faq: [
      {
        question: { id: "Apakah motor bisa diantar ke Uluwatu?", en: "Can you deliver to Uluwatu?" },
        answer: {
          id: "Ya, dengan biaya pengantaran yang terjangkau. Konfirmasi lokasi dan jadwal via WhatsApp.",
          en: "Yes, for an affordable delivery fee. Confirm the location and schedule on WhatsApp.",
        },
      },
      {
        question: { id: "Apakah jalan ke Uluwatu aman dengan motor?", en: "Is riding to Uluwatu safe?" },
        answer: {
          id: "Jalanan bisa curam di beberapa titik. Kami sarankan berkendara dengan hati-hati dan memakai helm yang disediakan.",
          en: "Some sections are steep. Ride carefully and always use the helmets provided.",
        },
      },
      {
        question: { id: "Berapa lama sewa minimal?", en: "Is there a minimum rental period?" },
        answer: {
          id: "Sewa harian tersedia. Untuk gratis antar-jemput berlaku minimal 2 hari di Bandara Ngurah Rai dan Kuta Area.",
          en: "Daily rentals are available. Free delivery applies to Ngurah Rai Airport and the Kuta area for a minimum 2-day rental.",
        },
      },
    ],
  },
  {
    key: "nusa-dua",
    slug: { id: "sewa-motor-nusa-dua", en: "scooter-rental-nusa-dua" },
    name: { id: "Nusa Dua", en: "Nusa Dua" },
    seoTitle: {
      id: "Sewa Motor Nusa Dua - Resort & Pantai | Nadi Rental Bali",
      en: "Scooter Rental in Nusa Dua - Resorts & Beaches | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor di Nusa Dua untuk keliling resort dan pantai. Motor bersih, 2 helm dan phone holder gratis, booking WhatsApp.",
      en: "Rent a scooter in Nusa Dua to explore resorts and beaches. Clean scooters, free 2 helmets and a phone holder, WhatsApp booking.",
    },
    headline: {
      id: "Sewa Motor di Nusa Dua untuk Libur Santai",
      en: "Rent a Scooter in Nusa Dua for a Relaxed Holiday",
    },
    intro: {
      id: "Nusa Dua menawarkan pantai bersih dan kawasan resort yang luas. Dengan motor, Anda bisa berpindah dari hotel ke pantai dan restoran dengan mudah sesuai jadwal sendiri.",
      en: "Nusa Dua offers clean beaches and sprawling resort grounds. With a scooter, you can move between your hotel, the beach, and restaurants on your own schedule.",
    },
    delivery: {
      id: "Kami melayani pengantaran ke Nusa Dua dengan biaya terjangkau. Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area.",
      en: "We deliver to Nusa Dua for an affordable fee. Free delivery applies to Ngurah Rai Airport and the Kuta area.",
    },
    highlights: [
      {
        title: { id: "Sesuai untuk Keluarga", en: "Great for Families" },
        description: {
          id: "Pilihan matic dan maxi tersedia untuk kebutuhan rombongan.",
          en: "Automatic and maxi options are available for groups.",
        },
      },
      {
        title: { id: "Jarak Tempuh Efisien", en: "Effortless Distances" },
        description: {
          id: "Jelajahi kawasan ITDC dan pantai tanpa menunggu transportasi.",
          en: "Explore the ITDC area and beaches without waiting for transport.",
        },
      },
      {
        title: { id: "Termasuk Perlengkapan", en: "Essentials Included" },
        description: {
          id: "2 helm dan phone holder sudah termasuk di setiap sewa.",
          en: "2 helmets and a phone holder are included with every rental.",
        },
      },
    ],
    nearby: [
      { id: "Jimbaran", en: "Jimbaran" },
      { id: "Uluwatu", en: "Uluwatu" },
      { id: "Sanur", en: "Sanur" },
    ],
    faq: [
      {
        question: { id: "Apakah tersedia motor untuk rombongan?", en: "Do you have scooters for groups?" },
        answer: {
          id: "Ya. Hubungi kami via WhatsApp dengan jumlah unit dan tanggal sewa, kami akan bantu siapkan.",
          en: "Yes. Contact us on WhatsApp with the number of units and your dates, and we will arrange them.",
        },
      },
      {
        question: { id: "Apakah gratis antar ke Nusa Dua?", en: "Is delivery free in Nusa Dua?" },
        answer: {
          id: "Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area. Nusa Dua tersedia dengan biaya terjangkau.",
          en: "Free delivery applies to Ngurah Rai Airport and the Kuta area. Nusa Dua is available for an affordable fee.",
        },
      },
      {
        question: { id: "Bagaimana pembayarannya?", en: "How do I pay?" },
        answer: {
          id: "Saat serah terima dengan Tunai (IDR), Card, Dollar, Transfer Bank, atau QRIS.",
          en: "At handover by cash (IDR), card, US dollars, bank transfer, or QRIS.",
        },
      },
    ],
  },
  {
    key: "sanur",
    slug: { id: "sewa-motor-sanur", en: "scooter-rental-sanur" },
    name: { id: "Sanur", en: "Sanur" },
    seoTitle: {
      id: "Sewa Motor Sanur - Jalan Santai & Pelabuhan | Nadi Rental Bali",
      en: "Scooter Rental in Sanur - Beachfront & Harbour | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor di Sanur untuk jalan santai, pelabuhan, dan kuliner. Harga mulai Rp 50.000/hari, booking via WhatsApp.",
      en: "Rent a scooter in Sanur for beach walks, the harbour, and dining. Rates from Rp 50,000/day, WhatsApp booking.",
    },
    headline: {
      id: "Sewa Motor di Sanur, Jelajahi dengan Santai",
      en: "Rent a Scooter in Sanur, Explore at Your Pace",
    },
    intro: {
      id: "Suasana Sanur yang tenang cocok dijelajahi dengan motor. Dari jalan pantai hingga pelabuhan untuk ke Nusa Penida, perjalanan Anda jadi lebih fleksibel.",
      en: "Sanur's relaxed atmosphere is perfect to explore by scooter. From the beachfront road to the harbour for Nusa Penida trips, your plans stay flexible.",
    },
    delivery: {
      id: "Pengantaran ke Sanur tersedia dengan biaya terjangkau. Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area.",
      en: "Delivery to Sanur is available for an affordable fee. Free delivery applies to Ngurah Rai Airport and the Kuta area.",
    },
    highlights: [
      {
        title: { id: "Dekat Pelabuhan", en: "Close to the Harbour" },
        description: {
          id: "Mudah menuju pelabuhan Sanur untuk perjalanan ke Nusa Penida.",
          en: "Easy access to Sanur Harbour for trips to Nusa Penida.",
        },
      },
      {
        title: { id: "Jalur Pantai yang Nyaman", en: "Comfortable Beachfront Roads" },
        description: {
          id: "Jalanan yang lebih tenang cocok untuk bersepeda motor santai.",
          en: "Calmer streets make for a relaxed scooter ride.",
        },
      },
      {
        title: { id: "Sewa Fleksibel", en: "Flexible Rental" },
        description: {
          id: "Pilih durasi harian dan konfirmasi ketersediaan lewat WhatsApp.",
          en: "Choose a daily duration and confirm availability on WhatsApp.",
        },
      },
    ],
    nearby: [
      { id: "Denpasar", en: "Denpasar" },
      { id: "Nusa Dua", en: "Nusa Dua" },
      { id: "Ubud", en: "Ubud" },
    ],
    faq: [
      {
        question: { id: "Apakah motor bisa dibawa ke pelabuhan?", en: "Can I ride to the harbour?" },
        answer: {
          id: "Ya, Sanur bisa dijangkau dengan motor. Parkir di area yang tersedia dan ikuti aturan setempat.",
          en: "Yes, Sanur is reachable by scooter. Park in designated areas and follow local rules.",
        },
      },
      {
        question: { id: "Apakah ada biaya antar ke Sanur?", en: "Is there a delivery fee to Sanur?" },
        answer: {
          id: "Ya, dengan biaya yang terjangkau. Gratis antar-jemput hanya untuk Bandara Ngurah Rai dan Kuta Area.",
          en: "Yes, for an affordable fee. Free delivery only applies to Ngurah Rai Airport and the Kuta area.",
        },
      },
      {
        question: { id: "Apa saja yang didapat?", en: "What is included?" },
        answer: {
          id: "2 helm dan phone holder tanpa biaya tambahan.",
          en: "2 helmets and a phone holder at no extra cost.",
        },
      },
    ],
  },
  {
    key: "ubud",
    slug: { id: "sewa-motor-ubud", en: "scooter-rental-ubud" },
    name: { id: "Ubud", en: "Ubud" },
    seoTitle: {
      id: "Sewa Motor Ubud - Jelajahi Sawah & Seni | Nadi Rental Bali",
      en: "Scooter Rental in Ubud - Rice Terraces & Art | Nadi Rental Bali",
    },
    seoDescription: {
      id: "Sewa motor di Ubud untuk menjelajahi sawah, candi, dan pusat seni. Unit terawat, 2 helm dan phone holder gratis.",
      en: "Rent a scooter in Ubud to explore rice terraces, temples, and art centres. Well-maintained units, free 2 helmets and a phone holder.",
    },
    headline: {
      id: "Sewa Motor di Ubud, Dekat Alam dan Budaya",
      en: "Rent a Scooter in Ubud, Close to Nature and Culture",
    },
    intro: {
      id: "Ubud adalah jantung budaya Bali. Motor membuat perjalanan ke sawah, candi, dan studio seni jauh lebih leluasa dibanding mengikuti jadwal tur.",
      en: "Ubud is Bali's cultural heart. A scooter makes trips to rice terraces, temples, and art studios far more flexible than following a tour schedule.",
    },
    delivery: {
      id: "Kami melayani pengantaran ke Ubud dengan biaya terjangkau. Gratis antar-jemput berlaku untuk Bandara Ngurah Rai dan Kuta Area.",
      en: "We deliver to Ubud for an affordable fee. Free delivery applies to Ngurah Rai Airport and the Kuta area.",
    },
    highlights: [
      {
        title: { id: "Jelajahi Sawah & Candi", en: "Rice Terraces & Temples" },
        description: {
          id: "Rencanakan rute sendiri tanpa terikat jadwal tur.",
          en: "Plan your own route without being tied to a tour schedule.",
        },
      },
      {
        title: { id: "Motor Nyaman untuk Jarak Jauh", en: "Comfortable for Longer Rides" },
        description: {
          id: "Pilih unit maxi jika perjalanan menuju daerah sekitar Ubud lebih jauh.",
          en: "Choose a maxi model for longer rides around the Ubud highlands.",
        },
      },
      {
        title: { id: "Harga Transparan", en: "Transparent Pricing" },
        description: {
          id: "Mulai Rp 50.000 per hari, dibayar saat serah terima.",
          en: "From Rp 50,000 per day, paid at handover.",
        },
      },
    ],
    nearby: [
      { id: "Sanur", en: "Sanur" },
      { id: "Canggu", en: "Canggu" },
      { id: "Kuta", en: "Kuta" },
    ],
    faq: [
      {
        question: { id: "Apakah bisa antar motor ke Ubud?", en: "Can you deliver to Ubud?" },
        answer: {
          id: "Ya. Kami antar ke Ubud dengan biaya yang terjangkau; konfirmasi jadwal via WhatsApp.",
          en: "Yes. We deliver to Ubud for an affordable fee; confirm the schedule on WhatsApp.",
        },
      },
      {
        question: { id: "Motor apa yang disarankan untuk Ubud?", en: "Which scooter do you recommend for Ubud?" },
        answer: {
          id: "Matic harian cukup untuk pusat Ubud. Untuk rute ke daerah tinggi dan sawah, tipe maxi lebih nyaman.",
          en: "A daily automatic is enough for central Ubud. For highland and rice terrace routes, a maxi model is more comfortable.",
        },
      },
      {
        question: { id: "Apakah pembayaran bisa dilakukan di Ubud?", en: "Can I pay in Ubud?" },
        answer: {
          id: "Ya. Pembayaran dilakukan saat serah terima dengan Tunai (IDR), Card, Dollar, Transfer Bank, atau QRIS.",
          en: "Yes. Payment is made at handover by cash (IDR), card, US dollars, bank transfer, or QRIS.",
        },
      },
    ],
  },
];

export function getAreaBySlug(lang: Lang, slug: string): Area | undefined {
  return AREAS.find((area) => area.slug[lang] === slug);
}

export function areaPath(lang: Lang, area: Area): string {
  return `/${lang}/${area.slug[lang]}/`;
}

export function localizeAreaSlug(area: Area, lang: Lang): string {
  return area.slug[lang];
}
