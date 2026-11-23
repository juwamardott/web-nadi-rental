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
    id: "honda-vario-110",
    name: "Honda Vario 110",
    category: "daily",
    cc: 110,
    year: "Tidak tercantum",
    priceDaily: 70000,
    popular: false,
    image: "/images/bikes/honda-vario-125.jpg",
    specs: {
      id: ["Matic Hemat", "Ringan & Praktis", "Cocok untuk Harian"],
      en: ["Fuel Efficient", "Light & Practical", "Ideal for Daily Use"],
    },
  },
  {
    id: "honda-scoopy",
    name: "Honda Scoopy",
    category: "daily",
    cc: 110,
    year: "Tidak tercantum",
    priceDaily: 120000,
    popular: true,
    image: "/images/bikes/honda-scoopy.jpg",
    specs: {
      id: ["Desain Stylish", "Nyaman Berkendara", "Cocok untuk Keliling Bali"],
      en: ["Stylish Design", "Comfortable Ride", "Perfect for Exploring Bali"],
    },
  },
  {
    id: "honda-vario-125",
    name: "Honda Vario 125",
    category: "daily",
    cc: 125,
    year: "Tidak tercantum",
    priceDaily: 130000,
    popular: true,
    image: "/images/bikes/honda-vario-125.jpg",
    specs: {
      id: ["Bertenaga & Irit", "Matic Nyaman", "Ideal untuk Perjalanan"],
      en: ["Powerful & Efficient", "Comfortable Scooter", "Ideal for Trips"],
    },
  },
  {
    id: "yamaha-lexi-155",
    name: "Yamaha Lexi 155",
    category: "maxi",
    cc: 155,
    year: "Tidak tercantum",
    priceDaily: 150000,
    popular: false,
    image: "/images/bikes/yamaha-lexi.jpg",
    specs: {
      id: ["Maxi Scooter Nyaman", "Posisi Berkendara Santai", "Cocok untuk Jarak Jauh"],
      en: ["Comfortable Maxi Scooter", "Relaxed Riding Position", "Great for Longer Trips"],
    },
  },
  {
    id: "yamaha-nmax-155",
    name: "Yamaha NMAX 155",
    category: "maxi",
    cc: 155,
    year: "Tidak tercantum",
    priceDaily: 175000,
    popular: true,
    image: "/images/bikes/yamaha-nmax.jpg",
    specs: {
      id: ["Premium Maxi Scooter", "Jok Lebar & Nyaman", "Cocok untuk Touring"],
      en: ["Premium Maxi Scooter", "Wide & Comfortable Seat", "Great for Touring"],
    },
  },
];

export function getBikeById(id: string): Bike | undefined {
  return BIKES.find((bike) => bike.id === id);
}

export const POPULAR_BIKES = BIKES.filter((bike) => bike.popular);