import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/60 bg-background/40">
        <span className="font-display text-lg text-gold">HK</span>
      </span>
      <span className="hidden font-display text-lg leading-none sm:block">
        <span className="text-cream">Hari Krishan Dhaba</span>{" "}
        <span className="text-gold/90" style={{ fontFamily: "var(--font-hindi)" }}>· हरि कृष्ण</span>
      </span>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* TOP INFO BAR */}
      <div className="relative z-40 border-b border-gold/15 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-cream/70 lg:px-10">
          <span className="hidden sm:inline">Since 1997 · Palwal, Haryana</span>
          <div className="flex items-center gap-5">
            <span className="text-gold">Open 24 Hours</span>
            <span className="hidden h-3 w-px bg-cream/20 sm:inline-block" />
            <span className="hidden sm:inline">Pure Vegetarian</span>
            <span className="hidden h-3 w-px bg-cream/20 sm:inline-block" />
            <span>★ 4.6 · 500+ Reviews</span>
          </div>
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-gold/10 bg-background/85 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Logo />
          <ul className="hidden items-center gap-9 text-sm text-cream/85 md:flex">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className={`transition ${active ? "text-gold" : "hover:text-gold"}`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="tel:09813544117"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background shadow-warm transition hover:brightness-110"
          >
            <span className="hidden sm:inline">Call</span> 098135 44117
          </a>
        </nav>
        {/* mobile nav */}
        <div className="border-t border-gold/10 md:hidden">
          <ul className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.2em]">
            {nav.map((n) => {
              const active = pathname === n.to;
              return (
                <li key={n.to}>
                  <Link to={n.to} className={active ? "text-gold" : "text-cream/70"}>
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4 lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50">
                <span className="font-display text-gold">HK</span>
              </span>
              <div>
                <p className="font-display text-lg text-cream">Hari Krishan Dhaba</p>
                <p className="text-xs text-cream/50" style={{ fontFamily: "var(--font-hindi)" }}>हरि कृष्ण ढाबा</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-cream/60">Serving Palwal since 1998. Pure vegetarian. Open 24 hours.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Visit</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              Mathura–Delhi Road, Near 56/2<br />HUDA Sector-2, Palwal<br />Haryana 121102
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Call</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              <a href="tel:09813544117" className="hover:text-gold">098135 44117</a><br />
              <a href="tel:09996447777" className="hover:text-gold">099964 47777</a>
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Explore</p>
            <ul className="mt-3 space-y-1.5 text-sm text-cream/70">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-border px-6 pt-6 text-center text-xs text-cream/50 lg:px-10">
          © {new Date().getFullYear()} Hari Krishan Dhaba, Palwal. Crafted with love & ghee.
        </div>
      </footer>
    </div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow?: string; title: ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      )}
      <h2 className="mt-4 font-display text-4xl sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-cream/70">{subtitle}</p>}
    </div>
  );
}
