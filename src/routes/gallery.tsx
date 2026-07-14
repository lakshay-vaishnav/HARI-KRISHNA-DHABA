import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, SectionHeading } from "@/components/SiteLayout";
import gallery1 from "@/assets/gallery-1.png.asset.json";
import gallery2 from "@/assets/gallery-2.png.asset.json";
import restaurantFront from "@/assets/restaurant-front.png.asset.json";
import heroFeast from "@/assets/hero-feast.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import paneer from "@/assets/paneer.jpg";
import naan from "@/assets/naan.jpg";
import paratha from "@/assets/paratha.jpg";
import churnaan from "@/assets/churnaan.jpg";
import chowmein from "@/assets/chowmein.jpg";
import thali from "@/assets/thali.jpg";
import { reviews } from "@/data/reviews";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery & Reviews · Hari Krishan Dhaba, Palwal" },
      { name: "description", content: "A visual tour of Hari Krishan Dhaba, Palwal — the storefront, the dining hall, our signature dishes and stories from our guests." },
    ],
  }),
});

type Tile = { src: string; label: string; span?: "wide" | "tall" | "full" };

const tiles: Tile[] = [
  { src: restaurantFront.url, label: "The dhaba at dusk", span: "full" },
  { src: gallery1.url, label: "The house spread · Live tandoor · Dal Makhani", span: "wide" },
  { src: dalMakhani, label: "Signature Dal Makhani" },
  { src: paneer, label: "Shahi Paneer" },
  { src: gallery2.url, label: "The dining hall · Paneer Tikka · Veg Biryani · Butter Naan", span: "wide" },
  { src: heroFeast, label: "A full brass thali spread" },
  { src: thali, label: "Milan Special Thali" },
  { src: churnaan, label: "Chur Chur Naan" },
  { src: naan, label: "Butter Naan · Live tandoor" },
  { src: paratha, label: "Aloo Pyaz Paratha" },
  { src: chowmein, label: "Veg Hakka Noodles" },
];

function GalleryPage() {
  const [lightbox, setLightbox] = useState<Tile | null>(null);

  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="border-b border-border bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Gallery</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            A look <span className="italic text-gradient-gold">inside</span> the dhaba.
          </h1>
          <p className="mt-6 text-cream/70">
            The storefront, the live tandoor, the plates we're most proud of. Click any photo to zoom.
          </p>
        </div>
      </section>

      {/* MASONRY */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {tiles.map((t, i) => (
              <button
                key={i}
                onClick={() => setLightbox(t)}
                className={`group relative overflow-hidden rounded-lg border border-border bg-card text-left ${
                  t.span === "full"
                    ? "col-span-2 row-span-2 md:col-span-4"
                    : t.span === "wide"
                    ? "col-span-2 row-span-2"
                    : ""
                }`}
              >
                <img src={t.src} alt={t.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-4">
                  <p className="font-display text-sm text-cream sm:text-base">{t.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-32 border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="Reviews"
            title={<>Loved by our <span className="italic text-gold">guests</span>.</>}
            subtitle="500+ diners have shared their experience. Here are a few of our favourites."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex h-full flex-col rounded-lg border border-border bg-card p-7">
                <div className="text-gold">
                  {"★".repeat(r.stars)}<span className="text-cream/20">{"★".repeat(5 - r.stars)}</span>
                </div>
                <blockquote className="mt-5 flex-1 font-display text-base leading-relaxed text-cream/85">"{r.text}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-medium text-cream">{r.name}</p>
                  <p className="text-xs uppercase tracking-wider text-cream/50">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          role="dialog"
          aria-label={lightbox.label}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox.src} alt={lightbox.label} className="max-h-[90vh] max-w-full rounded-lg shadow-warm" />
          <button
            type="button"
            className="absolute right-6 top-6 rounded-full border border-gold/50 bg-background/60 px-4 py-2 text-sm text-gold"
            onClick={() => setLightbox(null)}
          >
            Close ✕
          </button>
        </div>
      )}
    </SiteLayout>
  );
}
