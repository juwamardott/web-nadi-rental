"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { MessageCircle, ShieldCheck, X } from "lucide-react";
import type { Bike } from "@/lib/types";
import type { Lang } from "@/lib/types";
import type { Dictionary } from "@/data/dictionary";
import {
  buildWhatsAppBookingUrl,
  estimateTotal,
  formatRupiah,
  tomorrowISO,
} from "@/lib/whatsapp";

interface BookingModalProps {
  bike: Bike | null;
  lang: Lang;
  dict: Dictionary;
  onClose: () => void;
}

export function BookingModal({ bike, lang, dict, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [duration, setDuration] = useState(1);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!bike) return;
    setName("");
    setStartDate(tomorrowISO());
    setDuration(1);
    setLocation("");
    setError("");
  }, [bike]);

  useEffect(() => {
    if (!bike) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [bike, onClose]);

  const total = useMemo(
    () => (bike ? estimateTotal(bike, duration) : 0),
    [bike, duration]
  );

  if (!bike) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      setError(dict.booking.requiredName);
      return;
    }
    if (!startDate) {
      setError(dict.booking.requiredDate);
      return;
    }
    if (!duration || duration < 1) {
      setError(dict.booking.requiredDuration);
      return;
    }
    if (!location.trim()) {
      setError(dict.booking.requiredLocation);
      return;
    }
    setError("");
    const url = buildWhatsAppBookingUrl({
      bike,
      customerName: name.trim(),
      startDate,
      duration,
      deliveryLocation: location.trim(),
      lang,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-brand-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <button
        type="button"
        aria-label={dict.booking.close}
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={onClose}
        tabIndex={-1}
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-lg animate-fade-up overflow-y-auto rounded-t-3xl bg-white shadow-lift sm:rounded-3xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-border bg-white/95 px-5 py-4 backdrop-blur sm:px-6">
          <div>
            <h2
              id="booking-modal-title"
              className="text-lg font-extrabold text-brand-ink"
            >
              {dict.booking.modalTitle}
            </h2>
            <p className="mt-0.5 text-xs text-brand-muted">
              {dict.booking.modalSubtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={dict.booking.close}
            className="rounded-full border border-brand-border p-2 text-brand-muted transition hover:border-brand hover:bg-brand-soft hover:text-brand-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="flex items-center gap-3 rounded-2xl border border-brand-border bg-brand-surface p-3">
            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
              <Image
                src={bike.image}
                alt={`${bike.name} — ${
                lang === "id" ? "sewa motor di Bali" : "motorbike rental in Bali"
              }`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                {dict.booking.selectedUnit}
              </p>
              <p className="truncate text-sm font-extrabold text-brand-ink">
                {bike.name}
              </p>
              <p className="text-xs font-semibold text-brand-muted">
                {formatRupiah(bike.priceDaily)}
                {dict.catalog.perDay}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label htmlFor="booking-name" className="field-label">
                {dict.booking.name}
              </label>
              <input
                id="booking-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder={dict.booking.namePlaceholder}
                className="field-input"
                autoComplete="name"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="booking-date" className="field-label">
                  {dict.booking.startDate}
                </label>
                <input
                  id="booking-date"
                  type="date"
                  value={startDate}
                  min={tomorrowISO()}
                  onChange={(event) => setStartDate(event.target.value)}
                  className="field-input"
                />
              </div>
              <div>
                <label htmlFor="booking-duration" className="field-label">
                  {dict.booking.duration}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="booking-duration"
                    type="number"
                    min={1}
                    max={90}
                    value={duration}
                    onChange={(event) =>
                      setDuration(Number.parseInt(event.target.value, 10) || 0)
                    }
                    className="field-input w-20 text-center"
                  />
                  <span className="text-sm font-semibold text-brand-muted">
                    {dict.booking.unitDay}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="booking-location" className="field-label">
                {dict.booking.location}
              </label>
              <input
                id="booking-location"
                type="text"
                list="booking-locations"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder={dict.booking.locationPlaceholder}
                className="field-input"
              />
              <datalist id="booking-locations">
                {dict.booking.locations.map((place) => (
                  <option key={place} value={place} />
                ))}
              </datalist>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-2xl border border-brand bg-brand-soft px-4 py-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  {dict.booking.estimate}
                </p>
                <p className="text-xl font-extrabold text-brand-ink">
                  {formatRupiah(total)}
                </p>
              </div>
              <p className="max-w-[45%] text-right text-[11px] leading-snug text-brand-muted">
                {dict.booking.estimateNote}
              </p>
            </div>

            {error ? (
              <p className="rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                {error}
              </p>
            ) : null}

            <button type="submit" className="btn-primary w-full">
              <MessageCircle className="h-4 w-4" />
              {dict.booking.submit}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-brand-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
              {dict.booking.whatsappNote}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
