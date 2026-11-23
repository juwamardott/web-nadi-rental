"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { getBikeById } from "@/data/bikes";
import { getDictionary } from "@/data/dictionary";
import type { Lang } from "@/lib/types";
import { BookingModal } from "./BookingModal";

interface BookingContextValue {
  openBooking: (bikeId: string) => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

interface BookingProviderProps {
  lang: Lang;
  children: React.ReactNode;
}

export function BookingProvider({ lang, children }: BookingProviderProps) {
  const [selectedBikeId, setSelectedBikeId] = useState<string | null>(null);
  const dict = useMemo(() => getDictionary(lang), [lang]);

  const openBooking = useCallback((bikeId: string) => {
    setSelectedBikeId(bikeId);
  }, []);

  const closeBooking = useCallback(() => {
    setSelectedBikeId(null);
  }, []);

  const selectedBike = selectedBikeId ? getBikeById(selectedBikeId) : null;

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      <BookingModal
        bike={selectedBike ?? null}
        lang={lang}
        dict={dict}
        onClose={closeBooking}
      />
    </BookingContext.Provider>
  );
}
