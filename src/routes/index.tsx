import { createFileRoute } from "@tanstack/react-router";
import heroFeast from "@/assets/hero-feast.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import paneer from "@/assets/paneer.jpg";
import naan from "@/assets/naan.jpg";
import paratha from "@/assets/paratha.jpg";
import churnaan from "@/assets/churnaan.jpg";
import chowmein from "@/assets/chowmein.jpg";
import thali from "@/assets/thali.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { property: "og:image", content: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200" },
    ],
  }),
});

const dishes = [
  { name: "Dal Makhani", hindi: "दाल मखनी", price: "₹180", desc: "Slow-simmered black lentils in a velvety tomato-butter gravy, finished with fresh cream. Our signature.", img: dalMakhani, tag: "Signature" },
  { name: "Paneer Butter Masala", hindi: "पनीर बटर मसाला", price: "₹220", desc: "Cottage cheese cubes bathed in a rich, mildly spiced tomato-cashew sauce.", img: paneer, tag: "Popular" },
  { name: "Butter Naan", hindi: "बटर नान", price: "₹40", desc: "Pillowy tandoor-fired flatbread brushed with pure white butter.", img: naan },
  { name: "Aloo Paratha", hindi: "आलू पराठा", price: "₹80", desc: "Whole-wheat flatbread stuffed with spiced potatoes, served with butter, curd & pickle.", img: paratha },
  { name: "Chur Chur Naan", hindi: "चुर चुर नान", price: "₹120", desc: "Layered, crushed naan served with chana masala — a Palwal favourite.", img: churnaan, tag: "House Special" },
  { name: "Veg Hakka Chowmein", hindi: "वेज चाउमीन", price: "₹140", desc: "Wok-tossed noodles with garden vegetables and a smoky soy glaze.", img: chowmein },
];

function Ornament() {
  return (
    <span className="divider-ornament text-sm tracking-[0.4em] uppercase">
      <span className="h-px w-10 bg-gold/60" />
      हरि कृष्ण
      <span className="h-px w-10 bg-gold/60" />
    </span>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="absolute inset-x-0 top-0 z-30">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-background/40 backdrop-blur">
              <span className="font-display text-lg text-gold">HK</span>
            </span>
            <span className="hidden font-display text-lg text-cream sm:block">Hari Krishan <span className="text-gold">Dhaba</span></span>
          </a>
          <ul className="hidden items-center gap-9 text-sm text-cream/80 md:flex">
            <li><a className="hover:text-gold transition" href="#menu">Menu</a></li>
            <li><a className="hover:text-gold transition" href="#story">Our Story</a></li>
            <li><a className="hover:text-gold transition" href="#gallery">Gallery</a></li>
            <li><a className="hover:text-gold transition" href="#visit">Visit</a></li>
          </ul>
          <a
            href="tel:09996447777"
            className="hidden rounded-full border border-gold/60 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold-soft transition hover:bg-gold hover:text-background md:inline-flex"
          >
            Reserve · 099964 47777
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src={heroFeast}
          alt="A spread of Hari Krishan Dhaba's signature North Indian dishes"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <Ornament />
          <h1 className="mt-8 font-display text-5xl leading-[1.05] text-cream sm:text-7xl md:text-8xl">
            Where every meal <br />
            <span className="italic text-gradient-gold">tastes like home.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base text-cream/70 sm:text-lg">
            Serving the people of Palwal for years — legendary dal makhani, tandoor-fresh naan and honest North Indian cooking. Open all day, every day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              Explore the Menu
            </a>
            <a
              href="#visit"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
            >
              Find Us in Palwal
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-[0.3em] text-cream/60">
            <span>★ 3.8 · 363 Google Reviews</span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span>Open 24 Hours</span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span>Since Generations</span>
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
              className="w-full rounded-sm object-cover shadow-warm"
            />
            <div className="absolute -bottom-8 -right-4 hidden rounded-sm border border-gold/40 bg-background px-8 py-6 shadow-warm md:block">
              <p className="font-display text-4xl text-gradient-gold">24/7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/60">Always open<br />Always fresh</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Ornament />
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
              A dhaba built on <span className="italic text-gold">love, ghee</span> and generations of recipes.
            </h2>
            <p className="mt-6 text-cream/70 leading-relaxed">
              Tucked into HUDA Sector 2, Palwal, Hari Krishan Dhaba has been the neighbourhood's go-to for a warm, fuss-free meal. We slow-cook our dal for hours, knead our dough by hand, and fire every naan in a live tandoor.
            </p>
            <p className="mt-4 text-cream/70 leading-relaxed">
              Whether it's a quick dinner, a family outing or a late-night craving — you'll find a table waiting, chai brewing, and food that tastes like your mother's kitchen.
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
                <p className="font-display text-3xl text-gold">Dine · Takeaway · Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative border-y border-border bg-card/40 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <Ornament />
            <h2 className="mt-6 font-display text-4xl sm:text-6xl">
              From our <span className="italic text-gradient-gold">tandoor</span> to your table
            </h2>
            <p className="mt-6 text-cream/70">
              A curated selection of the dishes Palwal keeps coming back for. Full menu available in-house.
            </p>
          </div>

          <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {dishes.map((d) => (
              <article key={d.name} className="group flex flex-col">
                <div className="relative overflow-hidden rounded-sm">
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
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{d.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="tel:09996447777"
              className="inline-flex items-center gap-3 rounded-full border border-gold/50 px-8 py-3.5 text-sm text-cream transition hover:bg-gold hover:text-background"
            >
              Call to order · 099964 47777
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY / TESTIMONIALS */}
      <section id="gallery" className="py-28">
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
              <figure key={r.name} className="flex h-full flex-col rounded-sm border border-border bg-card p-8">
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
      <section id="visit" className="relative overflow-hidden border-t border-border bg-card/30 py-28">
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
                <dd className="mt-2 font-display text-xl text-cream">Near 56/2, HUDA Sector-2<br />Palwal, Haryana 121102</dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Hours</dt>
                <dd className="mt-2 font-display text-xl text-cream">Open 24 hours · 7 days a week</dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Call</dt>
                <dd className="mt-2 font-display text-xl text-cream">
                  <a href="tel:09996447777" className="hover:text-gold transition">099964 47777</a>
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
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
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

          <div className="relative min-h-[420px] overflow-hidden rounded-sm border border-border">
            <iframe
              title="Hari Krishan Dhaba location"
              src="https://www.google.com/maps?q=Hari+Krishan+Dhaba+HUDA+Sector+2+Palwal&output=embed"
              className="h-full w-full"
              style={{ border: 0, filter: "grayscale(0.4) contrast(1.05) brightness(0.85)" }}
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
          <p className="text-xs text-cream/50">© {new Date().getFullYear()} Hari Krishan Dhaba, Palwal. Crafted with love & ghee.</p>
        </div>
      </footer>
    </main>
  );
}
