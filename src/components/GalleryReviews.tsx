import Image from "next/image";
import { BadgeCheck, Instagram, Quote, Star } from "lucide-react";
import type { Dictionary } from "@/data/dictionary";
import { BUSINESS_INFO } from "@/data/bikes";

interface GalleryReviewsProps {
  dict: Dictionary;
}

const PHOTOS = [
  "/images/gallery/galeri-4.webp",
  "/images/gallery/galeri-2.webp",
  "/images/gallery/galeri-7.webp",
  "/images/gallery/galeri-8.webp",
  "/images/gallery/galeri-5.webp",
  "/images/gallery/galeri-6.webp",
];

export function GalleryReviews({ dict }: GalleryReviewsProps) {
  return (
    <section id="galeri" className="section-padding bg-brand-surface">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">{dict.gallery.label}</span>
            <h2 className="heading-lg mt-4">{dict.gallery.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted">
              {dict.gallery.subtitle}
            </p>
          </div>
          <a
            href={BUSINESS_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark shrink-0"
          >
            <Instagram className="h-4 w-4" />
            {dict.gallery.instagramHandle}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {PHOTOS.map((photo, index) => (
            <figure
              key={photo}
              className={`group relative overflow-hidden rounded-2xl border border-brand-border bg-white ${
                index === 0
                  ? "col-span-2 aspect-[16/10] sm:row-span-2 sm:aspect-auto"
                  : index === PHOTOS.length - 1
                    ? "aspect-[4/3] max-sm:col-span-2 max-sm:aspect-[16/10]"
                    : "aspect-[4/3]"
              }`}
            >
              <Image
                src={photo}
                alt={dict.gallery.captions[index]}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, 66vw"
                    : index === PHOTOS.length - 1
                      ? "(max-width: 640px) 100vw, 33vw"
                      : "(max-width: 640px) 50vw, 33vw"
                }
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
              {/* <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold text-white">
                {dict.gallery.captions[index]}
              </figcaption> */}
            </figure>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center text-xl font-extrabold text-brand-ink sm:text-2xl">
            {dict.gallery.testimonialsTitle}
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {dict.gallery.testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-brand-border bg-white p-5 shadow-card"
              >
                <Quote className="h-7 w-7 text-brand" />
                <div className="mt-2 flex text-brand-hover">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  “{testimonial.quote}”
                </p>
                <div className="mt-4 flex items-center gap-2.5 border-t border-brand-border pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-sm font-extrabold text-brand-ink">
                    {testimonial.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-brand-ink">
                      {testimonial.name}
                    </p>
                    <p className="flex items-center gap-1 text-[11px] font-medium text-brand-muted">
                      {testimonial.origin}
                      <span className="text-brand-border">•</span>
                      <BadgeCheck className="h-3 w-3 text-emerald-500" />
                      {dict.gallery.verified}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
