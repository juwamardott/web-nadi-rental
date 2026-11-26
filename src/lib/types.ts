export type Lang = "id" | "en";

export type BikeCategory = "daily" | "maxi";

export interface Bike {
  id: string;
  name: string;
  category: BikeCategory;
  cc: number;
  priceDaily: number;
  popular: boolean;
  image: string;
  specs: Record<Lang, string[]>;
}

export const LANGS: Lang[] = ["id", "en"];

export function isLang(value: string): value is Lang {
  return value === "id" || value === "en";
}
