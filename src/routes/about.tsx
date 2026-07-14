import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import thali from "@/assets/thali.jpg";
import restaurantFront from "@/assets/restaurant-front.png.asset.json";
import gallery1 from "@/assets/gallery-1.png.asset.json";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · Hari Krishan Dhaba, Palwal" },
      { name: "description", content: "The story of Hari Krishan Dhaba — a family-run 24-hour pure-vegetarian dhaba serving Palwal, Haryana since 1998." },
    ],
  }),
});

const values = [
  { t: "Hand-ground spices", d: "Every masala is stone-ground fresh on the premises. Nothing bottled, nothing pre-mixed." },
  { t: "100% pure vegetarian", d: "Satvik kitchen. No onion / no garlic options are always available on request." },
  { t: "Live tandoor, 24×7", d: "Our tandoor never sleeps. Every naan, roti and paratha is fired to order." },
  { t: "Slow-cooked dal", d: "Our signature dal makhani simmers for eight hours before it reaches your plate." },
  { t: "No added colours", d: "Rich gravies come from tomatoes, cashew and cream — never from artificial colour." },
  { t: "Family welcome", d: "AC dining hall, party hall, kitty hall and banquet — space for two guests or two hundred." },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <img src={restaurantFront.url} alt="Hari Krishan Dhaba storefront" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Our story</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            A dhaba built on <span className="italic text-gradient-gold">love, ghee</span> and generations of recipes.
          </h1>
          <p className="mt-3 font-display text-xl text-gold/80" style={{ fontFamily: "var(--font-hindi)" }}>
            हरि कृष्ण ढाबा · पलवल
          </p>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
          <img src={thali} alt="Traditional Indian thali with dal, curries, rice and roti" loading="lazy" className="w-full rounded-lg object-cover shadow-warm" />
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Since 1998</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Twenty-five years on the highway.</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-cream/75">
              <p>
                Hari Krishan Dhaba began as a modest roadside kitchen on the Mathura–Delhi Road in 1998, feeding truckers, pilgrims and passing families the food they missed from home. Word travelled fast — the dal was different, the naans came out puffed and hot, the chai never stopped.
              </p>
              <p>
                Twenty-five years later, we still run the same live tandoor, still hand-grind our masalas, and still open our doors twenty-four hours a day. What began as a highway pit-stop is now Palwal's family favourite — with an AC dining hall, banquet space and a menu that runs over a hundred dishes deep.
              </p>
              <p>
                Everything we do begins with a simple idea: cook the food you'd want served to your own family. Then serve it that way to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">What we stand for</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Six things we never compromise on.</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.t} className="rounded-lg border border-border bg-card p-8">
                <p className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 font-display text-xl">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPACES */}
      <section className="border-t border-border py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our spaces</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">Room for two — or two hundred.</h2>
            <ul className="mt-8 space-y-4 text-cream/80">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" />AC dining hall with warm wood interiors</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" />Party hall for birthdays, anniversaries and reunions</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" />Kitty hall for ladies' gatherings</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" />Banquet space for weddings & corporate events</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-gold" />Ample parking · Drive-through · Takeaway counter</li>
            </ul>
            <div className="mt-10">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110">
                Enquire for a booking →
              </Link>
            </div>
          </div>
          <img src={gallery1.url} alt="Interior spread of Hari Krishan Dhaba" loading="lazy" className="w-full rounded-lg object-cover shadow-warm" />
        </div>
      </section>
    </SiteLayout>
  );
}
