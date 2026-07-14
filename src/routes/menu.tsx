import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionHeading } from "@/components/SiteLayout";
import { menu, MENU_NOTE } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Menu · Hari Krishan Dhaba, Palwal" },
      { name: "description", content: "Full menu of Hari Krishan Dhaba — paneer, dal, chaap, mushroom, biryani, tandoor breads, Indo-Chinese and more. 100% pure vegetarian, hand-ground spices." },
    ],
  }),
});

function MenuPage() {
  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="border-b border-border bg-card/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">The full menu card</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            Everything we <span className="italic text-gradient-gold">cook</span>, on one page.
          </h1>
          <p className="mt-6 text-cream/70">{MENU_NOTE}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/60">
            {menu.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="rounded-full border border-border px-4 py-2 transition hover:border-gold hover:text-gold">
                {c.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="mx-auto max-w-7xl divide-y divide-border px-6 lg:px-10">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-32 py-20">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16">
              {/* LEFT — category card */}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  {cat.num} · <span style={{ fontFamily: "var(--font-hindi)" }}>{cat.hindi}</span>
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">{cat.title}</h2>
                <p className="mt-4 max-w-xs text-sm text-cream/65">{cat.blurb}</p>
                <div className="mt-6 overflow-hidden rounded-lg border border-border">
                  <img src={cat.image} alt={cat.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </div>
              </div>

              {/* RIGHT — items list */}
              <ul className="divide-y divide-border/70">
                {cat.items.map((it) => (
                  <li key={it.name} className="flex items-start justify-between gap-6 py-5">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="font-display text-lg text-cream">{it.name}</p>
                        {it.hindi && (
                          <span className="text-sm italic text-gold/80" style={{ fontFamily: "var(--font-hindi)" }}>
                            {it.hindi}
                          </span>
                        )}
                        {it.tags?.map((t) => (
                          <span key={t} className="rounded-full border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-gold">
                            {t}
                          </span>
                        ))}
                      </div>
                      {it.desc && <p className="mt-1 text-sm text-cream/60">{it.desc}</p>}
                    </div>
                    <p className="shrink-0 font-display text-lg text-gold">{it.price}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <h2 className="font-display text-3xl sm:text-4xl">Ready to order?</h2>
          <p className="mt-3 text-cream/70">Call us for takeaway or delivery — we pick up on the first ring.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:09813544117" className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110">
              Call · 098135 44117
            </a>
            <a href="tel:09996447777" className="rounded-full border border-gold/60 px-8 py-3.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-background">
              099964 47777
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
