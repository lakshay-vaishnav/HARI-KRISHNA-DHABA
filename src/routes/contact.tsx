import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact & Reservations · Hari Krishan Dhaba, Palwal" },
      { name: "description", content: "Reserve a table, get directions or call Hari Krishan Dhaba, Palwal. Open 24 hours on Mathura–Delhi Road, HUDA Sector-2." },
    ],
  }),
});

const RESERVATION_EMAIL = "Singh.yogender840@gmail.com";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "1–2",
    occasion: "Just dinner",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length > 80) e.name = "Please enter your name.";
    if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!form.date) e.date = "Pick a date.";
    if (!form.time) e.time = "Pick a time.";
    if (form.notes.length > 500) e.notes = "Please keep notes under 500 characters.";
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const subject = `Table reservation — ${form.name} · ${form.date} ${form.time}`;
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Guests: ${form.guests}`,
      `Occasion: ${form.occasion}`,
      "",
      "Notes:",
      form.notes || "—",
      "",
      "— Sent from harikrishandhaba.com reservation form",
    ].join("\n");

    const href = `mailto:${RESERVATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <SiteLayout>
      {/* HEADER */}
      <section className="border-b border-border bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Visit · Call · Reserve</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            Come sit at our <span className="italic text-gradient-gold">table.</span>
          </h1>
          <p className="mt-6 text-cream/70">
            Walk in any time, day or night. Reservations aren't required — but always welcome for larger groups and special occasions.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + MAP */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <dl className="space-y-8">
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Address</dt>
                <dd className="mt-2 font-display text-xl text-cream">
                  Mathura–Delhi Road, Near 56/2<br />
                  HUDA Sector-2, Palwal, Haryana 121102
                </dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Hours</dt>
                <dd className="mt-2 font-display text-xl text-cream">Open 24 hours · 7 days a week</dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Call</dt>
                <dd className="mt-2 font-display text-xl text-cream">
                  <a href="tel:09813544117" className="transition hover:text-gold">098135 44117</a><br />
                  <a href="tel:09996447777" className="transition hover:text-gold">099964 47777</a>
                </dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Email</dt>
                <dd className="mt-2 font-display text-xl text-cream">
                  <a href={`mailto:${RESERVATION_EMAIL}`} className="transition hover:text-gold break-all">{RESERVATION_EMAIL}</a>
                </dd>
              </div>
              <div className="border-l-2 border-gold/60 pl-6">
                <dt className="text-xs uppercase tracking-[0.3em] text-cream/50">Services</dt>
                <dd className="mt-2 text-cream/80">Dine-in · Takeaway · Delivery · Drive-through · Banquet</dd>
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
                href="tel:09813544117"
                className="rounded-full border border-cream/30 px-7 py-3 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border">
            <iframe
              title="Hari Krishan Dhaba location on Google Maps"
              src="https://www.google.com/maps?q=Hari+Krishan+Dhaba+HUDA+Sector+2+Palwal&output=embed"
              className="h-full w-full"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.05) brightness(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* RESERVATION FORM */}
      <section className="border-t border-border bg-card/30 py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Reserve a table</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Send us a few details, we'll call you back.
          </h2>
          <p className="mt-4 text-cream/70">
            Your reservation will be emailed directly to our manager at{" "}
            <a href={`mailto:${RESERVATION_EMAIL}`} className="text-gold hover:brightness-110 break-all">{RESERVATION_EMAIL}</a>.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
            <Field label="Name" required error={errors.name}>
              <input
                required
                maxLength={80}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your full name"
                className="input-dhaba"
              />
            </Field>
            <Field label="Phone" required error={errors.phone}>
              <input
                required
                maxLength={20}
                inputMode="tel"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="10-digit mobile"
                className="input-dhaba"
              />
            </Field>
            <Field label="Date" required error={errors.date}>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="input-dhaba"
              />
            </Field>
            <Field label="Time" required error={errors.time}>
              <input
                type="time"
                required
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="input-dhaba"
              />
            </Field>
            <Field label="Guests">
              <select value={form.guests} onChange={(e) => update("guests", e.target.value)} className="input-dhaba">
                {["1–2", "3–4", "5–8", "9–15", "16–30", "30+"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <Field label="Occasion">
              <select value={form.occasion} onChange={(e) => update("occasion", e.target.value)} className="input-dhaba">
                {["Just dinner", "Birthday", "Anniversary", "Family gathering", "Business meal", "Party / banquet"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field label="Notes" error={errors.notes}>
                <textarea
                  rows={4}
                  maxLength={500}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  placeholder="Highchair for a baby? Preferred seating? Anything else we should know."
                  className="input-dhaba resize-none"
                />
              </Field>
            </div>

            <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
              >
                Send reservation request
              </button>
              {sent && (
                <p className="text-sm text-gold">
                  Your email app should have opened. Just hit send — we'll call you back to confirm.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-cream/60">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1 text-xs text-accent">{error}</p>}
    </label>
  );
}
