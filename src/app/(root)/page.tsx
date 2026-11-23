import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nadi Rental Bali — Sewa Motor Bali Terpercaya",
  description:
    "Sewa motor matic terbaru di Bali dengan gratis antar-jemput Bandara Ngurah Rai & Kuta.",
  alternates: {
    canonical: "https://nadirentalbali.com/id/",
    languages: {
      id: "https://nadirentalbali.com/id/",
      en: "https://nadirentalbali.com/en/",
      "x-default": "https://nadirentalbali.com/id/",
    },
  },
  robots: { index: true, follow: true },
};

export default function RootRedirectPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/id/" />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/id/' + window.location.search + window.location.hash);`,
        }}
      />
      <main className="flex min-h-screen items-center justify-center bg-brand px-6">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-ink text-2xl font-extrabold text-brand">
            N
          </div>
          <p className="text-sm font-bold text-brand-ink">
            Mengalihkan ke Nadi Rental Bali…
          </p>
          <a
            href="/id/"
            className="mt-3 inline-block text-sm font-semibold text-brand-ink underline"
          >
            Buka halaman Bahasa Indonesia
          </a>
        </div>
      </main>
    </>
  );
}
