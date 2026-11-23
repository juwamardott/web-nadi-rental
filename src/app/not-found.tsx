import Link from "next/link";
import { Bike } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-brand-soft px-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-brand-ink">
        <Bike className="h-7 w-7" />
      </span>
      <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.2em] text-brand-hover">
        404
      </p>
      <h1 className="mt-2 text-2xl font-extrabold text-brand-ink sm:text-3xl">
        Halaman tidak ditemukan / Page not found
      </h1>
      <p className="mt-2 max-w-md text-sm text-brand-muted">
        Halaman yang Anda cari tidak tersedia. Kembali ke halaman utama Nadi
        Rental Bali.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/id/" className="btn-primary">
          Bahasa Indonesia
        </Link>
        <Link href="/en/" className="btn-outline">
          English
        </Link>
      </div>
    </main>
  );
}
