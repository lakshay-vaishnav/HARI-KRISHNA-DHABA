import { createFileRoute } from "@tanstack/react-router"; 
import { useState } from "react";
import heroFeast from "@/assets/hero-feast.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import paneer from "@/assets/paneer.jpg";
import naan from "@/assets/naan.jpg";
import paratha from "@/assets/paratha.jpg";
import churnaan from "@/assets/churnaan.jpg";
import chowmein from "@/assets/chowmein.jpg";
import thali from "@/assets/thali.jpg";
import menu12 from "@/assets/menu-12.png";
import menu13 from "@/assets/menu-13.png";
import menu14 from "@/assets/menu-14.png";
import menu15 from "@/assets/menu-15.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const dishes = [
  { name: "Dal Makhani", hindi: "दाल मखनी", price: "₹150", desc: "Slow-simmered black lentils in a velvety tomato-butter gravy, finished with fresh cream. Our signature.", img: dalMakhani, tag: "Signature" },
  { name: "Shahi Paneer", hindi: "शाही पनीर", price: "₹220", desc: "Cottage cheese cubes bathed in a rich, mildly spiced tomato-cashew royal gravy.", img: paneer, tag: "Popular" },
  { name: "Butter Naan", hindi: "बटर नान", price: "₹40", desc: "Pillowy tandoor-fired flatbread brushed with pure white butter.", img: naan },
  { name: "Aloo Paratha", hindi: "आलू पराठा", price: "₹50", desc: "Whole-wheat flatbread stuffed with spiced potatoes, served with butter, curd & pickle.", img: paratha },
  { name: "Chur Chur Naan", hindi: "चुर चुर नान", price: "₹120", desc: "Layered, crushed naan served with chana masala — a Palwal favourite.", img: churnaan, tag: "House Special" },
  { name: "Veg Hakka Chowmein", hindi: "वेज चाउमीन", price: "₹150", desc: "Wok-tossed noodles with garden vegetables and a smoky soy glaze.", img: chowmein },
];

const menuPages = [
  { src: menu14, label: "Special Vegetables · Dal · Basmati Rice · Raita · Tandoor" },
  { src: menu12, label: "Main Course · Paneer Specials" },
  { src: menu13, label: "Mushroom · Rice & Biryani" },
  { src: menu15, label: "Snacks · Chaap · Kabab" },
];

function Ornament() {
  return (
    <span className="divider-ornament text-xs tracking-[0.4em] uppercase">
      <span className="h-px w-10 bg-gold/60" />
      हरि कृष्ण
      <span className="h-px w-10 bg-gold/60" />
    </span>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-background/40 backdrop-blur">
        <span className="font-display text-lg text-gold">HK</span>
      </span>
      <span className="hidden font-display text-lg leading-none sm:block">
        <span className="text-cream">Hari Krishan</span>{" "}
        <span className="text-gold/90" style={{ fontFamily: "var(--font-hindi)" }}>· हरि कृष्ण</span>
      </span>
    </a>
  );
}

function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* TOP INFO BAR */}
      <div className="relative z-40 border-b border-gold/15 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-cream/70 lg:px-10">
          <span className="hidden sm:inline">Since 1998 · Palwal, Haryana</span>
          <div className="flex items-center gap-5">
            <span className="text-gold">Open 24 Hours</span>
            <span className="hidden h-3 w-px bg-cream/20 sm:inline-block" />
            <span className="hidden sm:inline">Pure Vegetarian</span>
            <span className="hidden h-3 w-px bg-cream/20 sm:inline-block" />
            <span>★ 3.8 · 363 Reviews</span>
          </div>
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-gold/10 bg-background/85 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Logo />
          <ul className="hidden items-center gap-9 text-sm text-cream/85 md:flex">
            <li><a className="transition hover:text-gold" href="#top">Home</a></li>
            <li><a className="transition hover:text-gold" href="#menu">Menu</a></li>
            <li><a className="transition hover:text-gold" href="#menu-card">Menu Card</a></li>
            <li><a className="transition hover:text-gold" href="#story">About</a></li>
            <li><a className="transition hover:text-gold" href="#gallery">Reviews</a></li>
            <li><a className="transition hover:text-gold" href="#visit">Contact</a></li>
          </ul>
          <a
            href="tel:09996447777"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background shadow-warm transition hover:brightness-110"
          >
            <span className="hidden sm:inline">Call</span> 099964 47777
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden">
        <img
          src={heroFeast}
          alt="A spread of Hari Krishan Dhaba's signature North Indian dishes"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <Ornament />
          <h1 className="mt-8 font-display text-5xl leading-[1.05] text-cream sm:text-7xl md:text-8xl">
            Where every meal <br />
            <span className="italic text-gradient-gold">tastes like home.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base text-cream/75 sm:text-lg">
            Serving the people of Palwal since 1998 — legendary dal makhani, tandoor-fresh naan and honest North Indian cooking. Open all day, every day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu-card"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              View Full Menu
            </a>
            <a
              href="#visit"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
            >
              Find Us in Palwal
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
          <div className="relative">
            <img
              src={thali}
              alt="Traditional Indian thali with dal, curries, rice and roti"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-warm"
            />
            <div className="absolute -bottom-8 -right-4 hidden rounded-lg border border-gold/40 bg-background px-8 py-6 shadow-warm md:block">
              <p className="font-display text-4xl text-gradient-gold">Since 1998</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/60">Always open<br />Always fresh</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Ornament />
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
              A dhaba built on <span className="italic text-gold">love, ghee</span> and generations of recipes.
            </h2>
            <p className="mt-6 leading-relaxed text-cream/75">
              Tucked into HUDA Sector 2 on the Mathura–Delhi Road, Hari Krishan Dhaba has been Palwal's go-to for a warm, fuss-free meal since 1998. We slow-cook our dal for hours, knead our dough by hand, and fire every naan in a live tandoor.
            </p>
            <p className="mt-4 leading-relaxed text-cream/75">
              Whether it's a quick dinner, a family outing or a late-night craving — you'll find a table waiting, chai brewing, and food that tastes like your mother's kitchen. <span className="text-gold">All spices are hand-grinded.</span>
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-3xl text-gold">₹1–1.2k</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-cream/50">Per person</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">100%</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-cream/50">Pure vegetarian</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">3 ways</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-cream/50">Dine · Takeaway · Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section id="menu" className="relative border-y border-border bg-card/40 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Ornament />
            <h2 className="mt-6 font-display text-4xl sm:text-6xl">
              From our <span className="italic text-gradient-gold">tandoor</span> to your table
            </h2>
            <p className="mt-6 text-cream/70">
              A curated selection of the dishes Palwal keeps coming back for. Scroll down for the full printed menu card.
            </p>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d) => (
              <article key={d.name} className="group flex flex-col">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  {d.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur">
                      {d.tag}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl">{d.name}</h3>
                    <p className="mt-1 text-sm text-gold/80" style={{ fontFamily: "var(--font-hindi)" }}>{d.hindi}</p>
                  </div>
                  <span className="font-display text-xl text-gold">{d.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FULL MENU CARD (uploaded photos) */}
      <section id="menu-card" className="relative py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Ornament />
            <h2 className="mt-6 font-display text-4xl sm:text-6xl">
              The full <span className="italic text-gradient-gold">menu card</span>
            </h2>
            <p className="mt-6 text-cream/70">
              Straight from the dhaba — click any page to zoom in. All spices are hand-grinded, no dish contains onion or garlic on request.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {menuPages.map((p) => (
              <button
                type="button"
                key={p.src}
                onClick={() => setLightbox(p.src)}
                className="group relative overflow-hidden rounded-lg border border-gold/20 bg-card text-left transition hover:border-gold/60 hover:shadow-warm"
              >
                <img
                  src={p.src}
                  alt={p.label}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">Menu Page</p>
                  <p className="mt-1 font-display text-lg text-cream">{p.label}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="tel:09996447777"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              Call to order · 099964 47777
            </a>
          </div>
        </div>

        {lightbox && (
          <div
            role="dialog"
            aria-label="Menu page"
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 backdrop-blur"
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} alt="Menu page enlarged" className="max-h-[92vh] max-w-full rounded-lg shadow-warm" />
            <button
              type="button"
              className="absolute right-6 top-6 rounded-full border border-gold/50 bg-background/60 px-4 py-2 text-sm text-gold"
              onClick={() => setLightbox(null)}
            >
              Close ✕
            </button>
          </div>
        )}
      </section>

      {/* GALLERY / TESTIMONIALS */}
      <section id="gallery" className="border-t border-border bg-card/30 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <Ornament />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl">
              Loved by our <span className="italic text-gold">guests</span>.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              { name: "Abhishek Agarwal", role: "Local Guide · 175 reviews", stars: 5, text: "Great place to enjoy authentic North Indian food in Palwal. Delicious, fresh, and flavourful — generous portions, homely taste. The dal and roti are exceptional." },
              { name: "Harjeet", role: "Local Guide", stars: 5, text: "A great place for tasty and fresh food. The dal makhani is especially delicious, full of flavour and perfectly cooked. Quick service, comfortable atmosphere." },
              { name: "Akash Sharma", role: "Local Guide · 373 reviews", stars: 5, text: "Pocket-friendly prices and I've visited multiple times. Aloo pyaz parantha, chai, sandwiches — everything was delicious. A trusted favourite." },
            ].map((r) => (
              <figure key={r.name} className="flex h-full flex-col rounded-lg border border-border bg-card p-8">
                <div className="text-gold">{"★".repeat(r.stars)}<span className="text-cream/20">{"★".repeat(5 - r.stars)}</span></div>
                <blockquote className="mt-6 flex-1 font-display text-lg leading-relaxed text-cream/85">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-medium text-cream">{r.name}</p>
                  <p className="text-xs uppercase tracking-wider text-cream/50">{r.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative overflow-hidden border-t border-border py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Ornament />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl">
              Come sit at our <span className="italic text-gradient-gold">table</span>.
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              Walk in any time, day or night. Reservations aren't required — but always welcome for larger groups.
            </p>

            <dl className="mt-12 space-y-8">
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Address</dt>
                <dd className="mt-2 font-display text-xl text-cream">Mathura–Delhi Road, Near 56/2<br />HUDA Sector-2, Palwal, Haryana 121102</dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Hours</dt>
                <dd className="mt-2 font-display text-xl text-cream">Open 24 hours · 7 days a week</dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Call</dt>
                <dd className="mt-2 font-display text-xl text-cream">
                  <a href="tel:09996447777" className="transition hover:text-gold">099964 47777</a> · <a href="tel:09501177777" className="transition hover:text-gold">0950 117 7777</a>
                </dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Services</dt>
                <dd className="mt-2 text-cream/80">Dine-in · Takeaway · Delivery · Drive-through</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hari+Krishan+Dhaba+Palwal"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
              >
                Get Directions
              </a>
              <a
                href="tel:09996447777"
                className="rounded-full border border-cream/30 px-7 py-3 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border">
            <iframe
              title="Hari Krishan Dhaba location"
              src="https://www.google.com/maps?q=Hari+Krishan+Dhaba+HUDA+Sector+2+Palwal&output=embed"
              className="h-full w-full"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05) brightness(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50">
              <span className="font-display text-gold">HK</span>
            </span>
            <div>
              <p className="font-display text-lg text-cream">Hari Krishan Dhaba</p>
              <p className="text-xs text-cream/50" style={{ fontFamily: "var(--font-hindi)" }}>हरि कृष्ण ढाबा</p>
            </div>
          </div>
          <p className="text-xs text-cream/50">© {new Date().getFullYear()} Hari Krishan Dhaba, Palwal. Since 1998 · Crafted with love & ghee.</p>
        </div>
      </footer>
    </main>
  );
}
