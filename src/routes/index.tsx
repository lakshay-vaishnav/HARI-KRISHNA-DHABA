import { createFileRoute, Link } from "@tanstack/react-router"; 
import { SiteLayout, SectionHeading } from "@/components/SiteLayout";
import restaurantFront from "@/assets/restaurant-front.png";
import heroFeast from "@/assets/hero-feast.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import paneer from "@/assets/paneer.jpg";
import naan from "@/assets/naan.jpg";
import churnaan from "@/assets/churnaan.jpg";
import { reviews } from "@/data/reviews";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Hari Krishan Dhaba · Palwal's beloved 24-hour vegetarian dhaba" },
      { name: "description", content: "Since 1997, Palwal has come home to Hari Krishan Dhaba for legendary dal makhani, tandoor-fresh naan and pure vegetarian North Indian cooking. Open 24 hours." },
    ],
  }),
});

const highlights = [
  { img: dalMakhani, title: "Signature Dal Makhani", tag: "Slow-cooked 8 hrs" },
  { img: paneer, title: "Paneer Butter Masala", tag: "House gravy" },
  { img: churnaan, title: "Chur Chur Naan", tag: "Live tandoor" },
  { img: naan, title: "Butter Naan Combo", tag: "Fresh · Hot" },
];

function Home() {
  const top = reviews.slice(0, 3);
  return (
    <SiteLayout>
      {/* HERO — restaurant front */}
      <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img
          src={restaurantFront}
          alt="Hari Krishan Dhaba storefront at sunset with lit-up signage"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(180deg, oklch(0.11 0.03 30 / 0.55) 0%, oklch(0.11 0.03 30 / 0.4) 40%, oklch(0.11 0.03 30 / 0.85) 100%)" }} />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold">Since 1997 · Palwal, Haryana</p>
      
          <p className="mt-3 font-display text-2xl text-gold/90" style={{ fontFamily: "var(--font-hindi)" }}>हरि कृष्ण ढाबा</p>
         
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              Explore the Full Menu →
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-cream/40 bg-background/20 px-8 py-3.5 text-sm font-medium text-cream backdrop-blur transition hover:border-gold hover:text-gold"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK FACTS STRIP */}
      <section className="border-y border-gold/15 bg-card/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-6 py-10 md:grid-cols-4 lg:px-10">
          {[
            { k: "Open", v: "24 Hours" },
            { k: "Since", v: "1997" },
            { k: "Cuisine", v: "Pure Veg" },
            { k: "Rating", v: "★ 4.6 · 500+" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <p className="font-display text-3xl text-gold sm:text-4xl">{s.v}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-cream/60">{s.k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE'RE KNOWN FOR */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading
            eyebrow="What we're known for"
            title={<>From our <span className="italic text-gradient-gold">tandoor</span> to your table</>}
            subtitle="A quick taste of what Palwal orders on repeat. The full printed menu — 100+ dishes strong — lives on the menu page."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <article key={h.title} className="group relative overflow-hidden rounded-lg border border-border">
                <img src={h.img} alt={h.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/70 to-transparent p-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{h.tag}</p>
                  <p className="mt-1 font-display text-lg text-cream">{h.title}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-background"
            >
              View the full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="relative overflow-hidden border-t border-border bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <img src={heroFeast} alt="A full North Indian spread on a wooden table" className="w-full rounded-lg object-cover shadow-warm" />
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our story</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              A dhaba built on <span className="italic text-gold">love, ghee</span> and generations of recipes.
            </h2>
            <p className="mt-6 leading-relaxed text-cream/75">
              Tucked into HUDA Sector 2 on the Mathura–Delhi Road, Hari Krishan Dhaba has been Palwal's favourite pit-stop since 1997. We slow-cook our dal for hours, knead our dough by hand and fire every naan in a live tandoor.
            </p>
            <div className="mt-8">
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:brightness-110">
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS TEASER */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeading eyebrow="Loved by our guests" title={<>500+ diners · <span className="italic text-gold">4.6 ★</span> and counting</>} />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {top.map((r) => (
              <figure key={r.name} className="flex h-full flex-col rounded-lg border border-border bg-card p-8">
                <div className="text-gold">{"★".repeat(r.stars)}<span className="text-cream/20">{"★".repeat(5 - r.stars)}</span></div>
                <blockquote className="mt-6 flex-1 font-display text-lg leading-relaxed text-cream/85">"{r.text}"</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-medium text-cream">{r.name}</p>
                  <p className="text-xs uppercase tracking-wider text-cream/50">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/gallery#reviews" className="inline-flex items-center gap-2 text-sm text-gold hover:brightness-110">Read all 500+ reviews →</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="font-display text-4xl sm:text-5xl">Hungry already?</h2>
          <p className="mt-4 text-cream/70">We're open. Right now. Come as you are.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="tel:09813544117" className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110">
              Call · 098135 44117
            </a>
            <Link to="/contact" className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold">
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
