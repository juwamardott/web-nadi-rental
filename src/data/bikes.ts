
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
    priceDaily: 50000,
    popular: false,
    image: "/images/bikes/honda-vario-cw.webp",
    specs: {
      id: [
        "Mesin 110 cc",
        "Fuel Tank 3,7 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "110 cc Engine",
        "3.7 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "honda-vario-2017",
    name: "Honda Vario 125 (2017)",
    category: "daily",
    cc: 125,
    priceDaily: 80000,
    popular: true,
    image: "/images/bikes/honda-vario-125.webp",
    specs: {
      id: [
        "Mesin 125 cc",
        "Fuel Tank 5,5 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "125 cc Engine",
        "5.5 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "honda-scoopy",
    name: "Honda Scoopy",
    category: "daily",
    cc: 110,
    priceDaily: 90000,
    popular: true,
    image: "/images/bikes/honda-scoopy.webp",
    specs: {
      id: [
        "Mesin 110 cc",
        "Fuel Tank 4,2 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "110 cc Engine",
        "4.2 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "honda-vario-new",
    name: "Honda Vario 125",
    category: "daily",
    cc: 125,
    priceDaily: 100000,
    popular: true,
    image: "/images/bikes/honda-vario-125-new.webp",
    specs: {
      id: [
        "Mesin 125 cc",
        "Fuel Tank 5,5 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "125 cc Engine",
        "5.5 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "yamaha-fazzio",
    name: "Yamaha Fazzio Hybrid",
    category: "daily",
    cc: 125,
    priceDaily: 100000,
    popular: true,
    image: "/images/bikes/yamaha-fazzio.webp",
    specs: {
      id: [
        "Mesin 125 cc",
        "Fuel Tank 5 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "125 cc Engine",
        "5 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "yamaha-filano",
    name: "Yamaha Grand Filano Hybrid",
    category: "daily",
    cc: 125,
    priceDaily: 125000,
    popular: true,
    image: "/images/bikes/yamaha-grand-filano.webp",
    specs: {
      id: [
        "Mesin 125 cc",
        "Fuel Tank 4,4 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "125 cc Engine",
        "4.4 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "honda-stylo",
    name: "Honda Stylo 160",
    category: "maxi",
    cc: 160,
    priceDaily: 125000,
    popular: false,
    image: "/images/bikes/honda-stylo-160.webp",
    specs: {
      id: [
        "Mesin 160 cc",
        "Fuel Tank 5 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "160 cc Engine",
        "5 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "yamaha-nmax",
    name: "Yamaha NMAX 155",
    category: "maxi",
    cc: 155,
    priceDaily: 150000,
    popular: false,
    image: "/images/bikes/yamaha-nmax.webp",
    specs: {
      id: [
        "Mesin 155 cc",
        "Fuel Tank 7,1 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "155 cc Engine",
        "7.1 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "honda-pcx",
    name: "Honda PCX 160",
    category: "maxi",
    cc: 160,
    priceDaily: 150000,
    popular: false,
    image: "/images/bikes/honda-pcx-160.webp",
    specs: {
      id: [
        "Mesin 160 cc",
        "Fuel Tank 8 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "160 cc Engine",
        "8 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "vespa",
    name: "Vespa Sprint 150",
    category: "maxi",
    cc: 155,
    priceDaily: 175000,
    popular: false,
    image: "/images/bikes/vespa-sprint.webp",
    specs: {
      id: [
        "Mesin 155 cc",
        "Fuel Tank 8 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "155 cc Engine",
        "8 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "honda-adv",
    name: "Honda ADV 160",
    category: "maxi",
    cc: 160,
    priceDaily: 175000,
    popular: false,
    image: "/images/bikes/honda-adv-160.webp",
    specs: {
      id: [
        "Mesin 160 cc",
        "Fuel Tank 8 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "160 cc Engine",
        "8 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
  {
    id: "yamaha-xmax",
    name: "Yamaha XMAX 250",
    category: "maxi",
    cc: 250,
    priceDaily: 300000,
    popular: false,
    image: "/images/bikes/yamaha-xmax.webp",
    specs: {
      id: [
        "Mesin 250 cc",
        "Fuel Tank 13 Liter",
        "Include 2 Helm & Phone Holder",
      ],
      en: [
        "250 cc Engine",
        "13 Liter Fuel Tank",
        "Includes 2 Helmets & Phone Holder",
      ],
    },
  },
];

export function getBikeById(id: string): Bike | undefined {
  return BIKES.find((bike) => bike.id === id);
}

export const POPULAR_BIKES = BIKES.filter((bike) => bike.popular);
