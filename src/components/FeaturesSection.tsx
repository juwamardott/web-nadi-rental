import { BadgeDollarSign, Bike, Clock3, Truck } from "lucide-react";
import type { Dictionary } from "@/data/dictionary";

interface FeaturesSectionProps {
  dict: Dictionary;
}

const ICONS = [Bike, BadgeDollarSign, Truck, Clock3];

export function FeaturesSection({ dict }: FeaturesSectionProps) {
  return (
    <section id="keunggulan" className="section-padding bg-brand-surface">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{dict.features.label}</span>
          <h2 className="heading-lg mt-4">{dict.features.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {dict.features.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.features.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-brand-border bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-brand-ink shadow-glow transition duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-base font-extrabold text-brand-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </p>
                <span className="mt-5 block h-1 w-10 rounded-full bg-brand/70 transition-all duration-300 group-hover:w-16" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
