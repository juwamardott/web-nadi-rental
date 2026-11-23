import type { Bike } from "@/lib/types";

export const BUSINESS_INFO = {
  name: "Nadi Rental Bali",
  domain: "https://nadirentalbali.com",
  whatsappNumber: "6285847968314",
  phoneDisplay: "+62 858-4796-8314",
  email: "halo@nadirentalbali.com",
  address: "Jl. Raya Kuta No. 88, Kuta, Kabupaten Badung, Bali 80361",
  instagram: "https://instagram.com/nadirentalbali",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=115.155%2C-8.745%2C115.195%2C-8.700&layer=mapnik&marker=-8.7224%2C115.1749",
  googleMapsLink:
    "https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Kuta+No.+88,+Kuta,+Badung,+Bali",
  rating: {
    value: 4.9,
    count: 520,
    best: 5,
    worst: 1,
  },
} as const;

export const BIKES: Bike[] = [
  {
    id: "honda-beat",
    name: "Honda Beat Deluxe",
    category: "daily",
    cc: 110,
    year: "2023–2025",
    priceDaily: 70000,
    popular: false,
    image: "/images/bikes/honda-beat.jpg",
    specs: {
      id: ["Sangat Irit BBM", "Ringan & Lincah", "Charger USB"],
      en: ["Super Fuel Efficient", "Light & Agile", "USB Charger"],
    },
  },
  {
    id: "honda-scoopy",
    name: "Honda Scoopy New",
    category: "daily",
    cc: 110,
    year: "2023–2025",
    priceDaily: 80000,
    popular: true,
    image: "/images/bikes/honda-scoopy.jpg",
    specs: {
      id: ["Desain Stylish", "Smart Key System", "USB Power Charger"],
      en: ["Stylish Retro Design", "Smart Key System", "USB Power Charger"],
    },
  },
  {
    id: "yamaha-fazzio",
    name: "Yamaha Fazzio Hybrid",
    category: "daily",
    cc: 125,
    year: "2023–2025",
    priceDaily: 85000,
    popular: false,
    image: "/images/bikes/yamaha-fazzio.jpg",
    specs: {
      id: ["Teknologi Hybrid", "Bagasi 17.8 Liter", "Smart Key System"],
      en: ["Hybrid Technology", "17.8L Spacious Trunk", "Smart Key System"],
    },
  },
  {
    id: "honda-vario-125",
    name: "Honda Vario 125",
    category: "daily",
    cc: 125,
    year: "2023–2025",
    priceDaily: 85000,
    popular: true,
    image: "/images/bikes/honda-vario-125.jpg",
    specs: {
      id: ["Bertenaga & Irit", "Bagasi Muat Helm", "Lampu Full LED"],
      en: ["Powerful & Efficient", "Helmet-In Trunk", "Full LED Lights"],
    },
  },
  {
    id: "honda-vario-160",
    name: "Honda Vario 160 ABS",
    category: "maxi",
    cc: 160,
    year: "2023–2025",
    priceDaily: 115000,
    popular: true,
    image: "/images/bikes/honda-vario-160.jpg",
    specs: {
      id: ["Mesin 160cc Responsif", "Rem ABS Aman", "Smart Key"],
      en: ["Responsive 160cc Engine", "Safe ABS Brakes", "Smart Key"],
    },
  },
  {
    id: "yamaha-nmax-155",
    name: "Yamaha NMAX 155 Connected",
    category: "maxi",
    cc: 155,
    year: "2023–2025",
    priceDaily: 130000,
    popular: true,
    image: "/images/bikes/yamaha-nmax.jpg",
    specs: {
      id: ["Nyaman Jarak Jauh", "Jok Lebar & Empuk", "Bagasi Ekstra Luas"],
      en: ["Long-Ride Comfort", "Wide Plush Seat", "Extra Large Storage"],
    },
  },
  {
    id: "honda-pcx-160",
    name: "Honda PCX 160",
    category: "maxi",
    cc: 160,
    year: "2023–2025",
    priceDaily: 135000,
    popular: false,
    image: "/images/bikes/honda-pcx.jpg",
    specs: {
      id: ["Posisi Berkendara Santai", "Bagasi 30 Liter", "USB Type-C"],
      en: ["Relaxed Riding Posture", "30L Large Trunk", "USB Type-C"],
    },
  },
  {
    id: "yamaha-xmax-250",
    name: "Yamaha XMAX 250",
    category: "maxi",
    cc: 250,
    year: "2023–2025",
    priceDaily: 250000,
    popular: false,
    image: "/images/bikes/yamaha-xmax.jpg",
    specs: {
      id: ["Touring Premium 250cc", "Traction Control", "Windshield Adjustable"],
      en: ["Premium 250cc Touring", "Traction Control", "Adjustable Windshield"],
    },
  },
];

export function getBikeById(id: string): Bike | undefined {
  return BIKES.find((bike) => bike.id === id);
}

export const POPULAR_BIKES = BIKES.filter((bike) => bike.popular);
