import { BUSINESS_INFO } from "@/data/bikes";
import type { Bike, Lang } from "@/lib/types";

export interface BookingParams {
  bike: Bike;
  customerName: string;
  startDate: string;
  duration: number;
  deliveryLocation: string;
  lang: Lang;
}

const LOCALE: Record<Lang, string> = {
  id: "id-ID",
  en: "en-GB",
};

export function formatRupiah(value: number): string {
  return `Rp ${new Intl.NumberFormat("id-ID").format(value)}`;
}

export function formatDate(value: string, lang: Lang): string {
  if (!value) return "-";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(LOCALE[lang], {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function tomorrowISO(): string {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

export function estimateTotal(bike: Bike, duration: number): number {
  const safeDuration = Number.isFinite(duration) && duration > 0 ? duration : 0;
  return bike.priceDaily * safeDuration;
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export function buildWhatsAppBookingUrl({
  bike,
  customerName,
  startDate,
  duration,
  deliveryLocation,
  lang,
}: BookingParams): string {
  const daily = formatRupiah(bike.priceDaily);
  const total = formatRupiah(estimateTotal(bike, duration));
  const prettyDate = formatDate(startDate, lang);
  const unitLabel = lang === "id" ? "hari" : "day(s)";

  const message =
    lang === "id"
      ? `Halo Nadi Rental Bali, saya ingin booking motor dengan detail berikut:\n\n• Unit Motor: ${bike.name} (${bike.cc}cc)\n• Tarif: ${daily}/hari\n• Nama Penyewa: ${customerName}\n• Tanggal Mulai: ${prettyDate}\n• Durasi Sewa: ${duration} ${unitLabel}\n• Lokasi Antar: ${deliveryLocation}\n• Estimasi Total: ${total}\n\nMohon konfirmasi ketersediaan unitnya. Terima kasih!`
      : `Hello Nadi Rental Bali, I would like to book a motorbike with the following details:\n\n• Motorbike: ${bike.name} (${bike.cc}cc)\n• Rate: ${daily}/day\n• Customer Name: ${customerName}\n• Start Date: ${prettyDate}\n• Rental Duration: ${duration} ${unitLabel}\n• Delivery Location: ${deliveryLocation}\n• Estimated Total: ${total}\n\nPlease confirm unit availability. Thank you!`;

  return whatsappUrl(message);
}

export function buildQuickChatUrl(bike: Bike, lang: Lang): string {
  const message =
    lang === "id"
      ? `Halo Nadi Rental Bali, saya tertarik dengan ${bike.name} (${bike.cc}cc). Tarif ${formatRupiah(bike.priceDaily)}/hari. Apakah unit tersedia?`
      : `Hello Nadi Rental Bali, I'm interested in the ${bike.name} (${bike.cc}cc). Rate ${formatRupiah(bike.priceDaily)}/day. Is the unit available?`;

  return whatsappUrl(message);
}

export function buildGeneralWhatsAppUrl(lang: Lang): string {
  const message =
    lang === "id"
      ? "Halo Nadi Rental Bali, saya ingin bertanya tentang sewa motor di Bali."
      : "Hello Nadi Rental Bali, I would like to ask about motorbike rental in Bali.";

  return whatsappUrl(message);
}
