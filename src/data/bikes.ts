
import type { Bike } from "@/lib/types";

export const BUSINESS_INFO = {
  name: "Nadi Rental Bali",
  domain: "https://nadirentalbali.com",
  whatsappNumber: "628563711780",
  phoneDisplay: "+62 856-3711-780",
  email: "nadirentalbali@gmail.com",
  address: "Jl. Wana Segara, Kuta, Kabupaten Badung, Bali 80361",
  instagram: "https://instagram.com/nadirentalbali",
  tiktok: "nadirentalbali_",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3943.520443958103!2d115.1631249!3d-8.7370026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24505776a04fb%3A0x5d2b39d147c78a16!2sNadi%20Rental%20Bike!5e0!3m2!1sen!2sid!4v1795617009136!5m2!1sen!2sid",

  googleMapsLink: "https://maps.app.goo.gl/z4ebJqumjXWTLAPL6",
  rating: {
    value: 5,
    count: 520,
    best: 5,
    worst: 1,
  },
} as const;

export const BIKES: Bike[] = [
  {
    id: "honda-vario-cw",
    name: "Honda Vario 110 CW",
    category: "daily",
    cc: 110,
    year: "2013–2017",
    priceDaily: 50000,
    popular: false,
    image: "/images/bikes/honda-vario-cw.webp",
    specs: {
      id: [
        "Mesin 110cc Irit BBM",
        "Transmisi Otomatis CVT",
        "Desain Ringan & Praktis",
      ],
      en: [
        "Fuel-Efficient 110cc Engine",
        "Automatic CVT Transmission",
        "Lightweight & Practical Design",
      ],
    },
  },
  {
    id: "honda-vario-2017",
    name: "Honda Vario 125 (2017)",
    category: "daily",
    cc: 125,
    year: "2017",
    priceDaily: 80000,
    popular: true,
    image: "/images/bikes/honda-vario-125.webp",
    specs: {
      id: [
        "Mesin 125cc eSP",
        "Sistem Injeksi PGM-FI",
        "Transmisi Otomatis CVT",
      ],
      en: [
        "125cc eSP Engine",
        "PGM-FI Fuel Injection",
        "Automatic CVT Transmission",
      ],
    },
  },
  {
    id: "honda-scoopy",
    name: "Honda Scoopy",
    category: "daily",
    cc: 110,
    year: "2023–2025",
    priceDaily: 90000,
    popular: true,
    image: "/images/bikes/honda-scoopy.webp",
    specs: {
      id: [
        "Mesin 110cc eSP",
        "Desain Retro Modern",
        "Sistem Injeksi PGM-FI",
      ],
      en: [
        "110cc eSP Engine",
        "Modern Retro Design",
        "PGM-FI Fuel Injection",
      ],
    },
  },
  {
    id: "honda-vario-new",
    name: "Honda Vario 125",
    category: "daily",
    cc: 125,
    year: "2023–2025",
    priceDaily: 100000,
    popular: true,
    image: "/images/bikes/honda-vario-125-new.webp",
    specs: {
      id: [
        "Mesin 125cc eSP",
        "Lampu Full LED",
        "Idling Stop System (varian tertentu)",
      ],
      en: [
        "125cc eSP Engine",
        "Full LED Lighting",
        "Idling Stop System (selected variants)",
      ],
    },
  },
  {
    id: "yamaha-fazzio",
    name: "Yamaha Fazzio Hybrid",
    category: "daily",
    cc: 125,
    year: "2023–2025",
    priceDaily: 115000,
    popular: true,
    image: "/images/bikes/yamaha-fazzio.webp",
    specs: {
      id: [
        "Mesin 125cc Blue Core Hybrid",
        "Y-Connect (varian tertentu)",
        "Desain Modern & Stylish",
      ],
      en: [
        "125cc Blue Core Hybrid Engine",
        "Y-Connect (selected variants)",
        "Modern & Stylish Design",
      ],
    },
  },
  {
    id: "yamaha-filano",
    name: "Yamaha Grand Filano Hybrid",
    category: "daily",
    cc: 125,
    year: "2023–2025",
    priceDaily: 125000,
    popular: true,
    image: "/images/bikes/yamaha-grand-filano.webp",
    specs: {
      id: [
        "Mesin 125cc Blue Core Hybrid",
        "Bagasi Luas 27 Liter",
        "Desain Premium & Elegan",
      ],
      en: [
        "125cc Blue Core Hybrid Engine",
        "Spacious 27L Storage",
        "Premium & Elegant Design",
      ],
    },
  },
  {
    id: "honda-stylo",
    name: "Honda Stylo 160",
    category: "daily",
    cc: 160,
    year: "2024–2025",
    priceDaily: 125000,
    popular: false,
    image: "/images/bikes/honda-stylo-160.webp",
    specs: {
      id: [
        "Mesin 160cc eSP+",
        "Desain Modern Classic",
        "ABS (varian tertentu)",
      ],
      en: [
        "160cc eSP+ Engine",
        "Modern Classic Design",
        "ABS (selected variants)",
      ],
    },
  },
  {
    id: "yamaha-nmax",
    name: "Yamaha NMAX 155",
    category: "daily",
    cc: 155,
    year: "2023–2025",
    priceDaily: 250000,
    popular: false,
    image: "/images/bikes/yamaha-nmax.webp",
    specs: {
      id: [
        "Mesin 155cc Blue Core VVA",
        "Posisi Berkendara Nyaman",
        "ABS (varian tertentu)",
      ],
      en: [
        "155cc Blue Core VVA Engine",
        "Comfortable Riding Position",
        "ABS (selected variants)",
      ],
    },
  },
  {
    id: "honda-pcx",
    name: "Honda PCX 160",
    category: "daily",
    cc: 160,
    year: "2023–2025",
    priceDaily: 150000,
    popular: false,
    image: "/images/bikes/honda-pcx-160.webp",
    specs: {
      id: [
        "Mesin 160cc eSP+",
        "Bagasi Luas",
        "ABS (varian tertentu)",
      ],
      en: [
        "160cc eSP+ Engine",
        "Spacious Underseat Storage",
        "ABS (selected variants)",
      ],
    },
  },
  {
    id: "vespa",
    name: "Vespa Sprint 150",
    category: "daily",
    cc: 155,
    year: "2023–2025",
    priceDaily: 175000,
    popular: false,
    image: "/images/bikes/vespa-sprint.webp",
    specs: {
      id: [
        "Mesin i-get 155cc",
        "Desain Ikonik Italia",
        "Rem Cakram Depan ABS",
      ],
      en: [
        "155cc i-get Engine",
        "Iconic Italian Design",
        "Front ABS Disc Brake",
      ],
    },
  },
  {
    id: "honda-adv",
    name: "Honda ADV 160",
    category: "daily",
    cc: 160,
    year: "2023–2025",
    priceDaily: 175000,
    popular: false,
    image: "/images/bikes/honda-adv-160.webp",
    specs: {
      id: [
        "Mesin 160cc eSP+",
        "Desain Adventure Scooter",
        "ABS (varian tertentu)",
      ],
      en: [
        "160cc eSP+ Engine",
        "Adventure Scooter Design",
        "ABS (selected variants)",
      ],
    },
  },
  {
    id: "yamaha-xmax",
    name: "Yamaha XMAX 250",
    category: "daily",
    cc: 250,
    year: "2023–2025",
    priceDaily: 300000,
    popular: false,
    image: "/images/bikes/yamaha-xmax.webp",
    specs: {
      id: [
        "Mesin 250cc Blue Core",
        "ABS & Traction Control",
        "Maxi Scooter Premium",
      ],
      en: [
        "250cc Blue Core Engine",
        "ABS & Traction Control",
        "Premium Maxi Scooter",
      ],
    },
  },
];

export function getBikeById(id: string): Bike | undefined {
  return BIKES.find((bike) => bike.id === id);
}

export const POPULAR_BIKES = BIKES.filter((bike) => bike.popular);
