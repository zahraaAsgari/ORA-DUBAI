"use client";

import { motion } from "framer-motion";
import { TiltCard, useConsult, Logo } from "./ui";
import { scrollToId } from "./SmoothScroll";
import { communities, residences, IMG } from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

function MaskTitle({ lines, className = "" }: { lines: React.ReactNode[]; className?: string }) {
  return (
    <h2 data-mask className={`font-serif leading-[1.02] tracking-tight ${className}`}>
      {lines.map((l, i) => (
        <span key={i} className="mask-line"><span className="inline-block">{l}</span></span>
      ))}
    </h2>
  );
}

/* ================= HERO ================= */
export function Hero() {
  const { open } = useConsult();
  const up = (d: number) => ({ initial: { y: 40, opacity: 0, filter: "blur(10px)" }, animate: { y: 0, opacity: 1, filter: "blur(0px)" }, transition: { duration: 1.8, delay: d, ease } });
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <motion.p {...up(1.0)} className="eyebrow mb-8 flex items-center gap-4">
        <span className="h-px w-10 bg-gold/60" /> Dubai Luxury Real Estate <span className="h-px w-10 bg-gold/60" />
      </motion.p>
      <h1 className="font-serif text-[13vw] leading-[0.98] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.2rem]">
        <span className="mask-line"><motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.8, delay: 1.2, ease }}>Where Architecture</motion.span></span>
        <span className="mask-line"><motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.8, delay: 1.4, ease }}>Meets <em className="gold-text pr-2">Opportunity</em></motion.span></span>
      </h1>
      <motion.p {...up(1.8)} className="muted mt-8 max-w-xl text-base leading-relaxed md:text-lg">
        Discover exceptional residences across Dubai&apos;s most prestigious destinations, designed for investors who seek extraordinary lifestyles.
      </motion.p>
      <motion.div {...up(2.1)} className="mt-10 flex flex-col gap-4 sm:flex-row">
        <button onClick={() => scrollToId("residences")} className="btn-gold rounded-full px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em]">Explore Residences</button>
        <button onClick={() => open("Private Viewing")} className="btn-ghost rounded-full px-9 py-4 text-xs font-medium uppercase tracking-[0.2em]">Book Private Viewing</button>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 2 }} className="absolute bottom-8 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">Discover Dubai</span>
        <span className="scroll-line h-16 w-px bg-white/15" />
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 2 }} className="absolute bottom-10 left-8 hidden text-left text-[10px] uppercase tracking-[0.3em] text-white/40 lg:block">
        25.1972° N<br />55.2744° E
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: 2 }} className="absolute bottom-10 right-8 hidden text-right text-[10px] uppercase tracking-[0.3em] text-white/40 lg:block">
        Est. Dubai<br />By invitation
      </motion.div>
    </section>
  );
}

/* ================= STORY ================= */
export function Story() {
  return (
    <section id="story" className="relative">
      {/* Scene 1 */}
      <div className="flex min-h-screen items-center px-6 md:px-16">
        <div className="mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-2">
          <div>
            <p data-reveal className="eyebrow mb-6">Chapter I — Vision</p>
            <MaskTitle className="text-5xl md:text-7xl" lines={["The Future", <>Was Built <em className="gold-text">Here</em></>]} />
            <p data-reveal className="muted mt-8 max-w-md text-lg leading-relaxed">
              In a single generation, a desert coastline became the world&apos;s most ambitious skyline. Dubai doesn&apos;t follow the future — it commissions it.
            </p>
          </div>
          <div data-stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["Architecture", "828m", "Home to the world's tallest tower and 200+ skyscrapers."],
              ["Innovation", "2040", "Urban master plan for sustainable, smart city living."],
              ["Global Destination", "17M+", "International visitors welcomed every year."],
            ].map(([t, n, d]) => (
              <div key={t} className="glass rounded-2xl p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light">{t}</p>
                <p className="mt-4 font-serif text-4xl">{n}</p>
                <p className="muted mt-3 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scene 2 */}
      <div id="communities" className="flex min-h-screen items-center px-6 py-24 md:px-16">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p data-reveal className="eyebrow mb-6">Chapter II — Destinations</p>
              <MaskTitle className="text-5xl md:text-7xl" lines={[<>Iconic <em className="gold-text">Communities</em></>]} />
            </div>
            <p data-reveal className="muted max-w-sm">Four addresses that define global prestige — each curated for lifestyle, liquidity and long-term capital growth.</p>
          </div>
          <div data-stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {communities.map((c) => (
              <TiltCard key={c.name} className="rounded-3xl">
                <div className="glass relative h-full overflow-hidden rounded-3xl transition-colors duration-700 group-hover:border-gold/50">
                  <div className="relative h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#0b0b0d]/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] backdrop-blur">{c.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl">{c.name}</h3>
                    <p className="muted mt-2 min-h-[3rem] text-sm">{c.lifestyle}</p>
                    <div className="hairline my-5" />
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Avg. Value</p>
                        <p className="mt-1 text-sm">{c.value}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">YoY Growth</p>
                        <p className="mt-1 text-lg text-gold-light">▲ {c.growth}%</p>
                      </div>
                    </div>
                    <div className="mt-5 flex h-10 items-end gap-1.5">
                      {c.bars.map((b, i) => (
                        <motion.span key={i} initial={{ height: 0 }} whileInView={{ height: `${b}%` }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease }}
                          className="flex-1 rounded-sm bg-gradient-to-t from-gold/30 to-gold-light" />
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>

      {/* Scene 3 */}
      <div id="investment" className="flex min-h-screen items-center px-6 py-24 md:px-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <p data-reveal className="eyebrow mb-6">Chapter III — Returns</p>
            <MaskTitle className="text-5xl md:text-7xl" lines={["Your Investment,", <em key="v" className="gold-text">Visualized</em>]} />
            <p data-reveal className="muted mt-8 max-w-md text-lg leading-relaxed">Real-time market intelligence, tax-free yields and transparent regulation — rendered with the clarity serious capital deserves.</p>
          </div>
          <Dashboard />
        </div>
      </div>
    </section>
  );
}

function Dashboard() {
  const path = "M0,120 C40,110 60,100 90,96 C130,90 150,70 190,66 C230,62 250,48 290,40 C330,32 360,20 400,12";
  return (
    <div data-reveal className="glass glass-gold relative overflow-hidden rounded-[2rem] bg-[#0b0b0d]/40 p-6 md:p-9">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" /><span className="relative h-2 w-2 rounded-full bg-gold" /></span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">ORA Market Intelligence · Live</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Q2 2026</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { l: "Property Growth", pre: "+", v: 14.2, d: 1, suf: "%" },
          { l: "Rental Yield", pre: "", v: 7.8, d: 1, suf: "%" },
          { l: "International Buyers", pre: "", v: 120, d: 0, suf: "+", sub: "Countries" },
        ].map((m) => (
          <div key={m.l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">{m.l}</p>
            <p className="mt-3 font-serif text-4xl text-gold-light md:text-5xl">
              {m.pre}<span data-count={m.v} data-decimals={m.d}>0</span>{m.suf}
            </p>
            {m.sub && <p className="text-xs text-white/50">{m.sub}</p>}
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <div className="mb-3 flex justify-between text-[10px] uppercase tracking-[0.25em] text-white/50"><span>Prime Price Index</span><span className="text-gold-light">▲ 5Y +86%</span></div>
        <svg viewBox="0 0 400 130" className="h-36 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#D4AF37" stopOpacity=".35" /><stop offset="1" stopColor="#D4AF37" stopOpacity="0" /></linearGradient>
            <linearGradient id="ln" x1="0" x2="1"><stop stopColor="#B8912A" /><stop offset="1" stopColor="#F5D77A" /></linearGradient>
          </defs>
          {[30, 60, 90].map((y) => <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="rgba(255,255,255,.06)" />)}
          <motion.path d={`${path} L400,130 L0,130 Z`} fill="url(#area)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.8 }} />
          <motion.path d={path} fill="none" stroke="url(#ln)" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.6, ease }} />
          <motion.circle cx="400" cy="12" r="4" fill="#F5D77A" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 2.6 }} />
        </svg>
        <div className="mt-2 flex justify-between text-[10px] text-white/40"><span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span><span>2026</span></div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 text-center text-[10px] uppercase tracking-[0.2em] text-white/50">
        <div className="rounded-xl border border-white/10 py-3">0% Income Tax</div>
        <div className="rounded-xl border border-white/10 py-3">Golden Visa</div>
        <div className="rounded-xl border border-white/10 py-3">100% Ownership</div>
      </div>
    </div>
  );
}

/* ================= RESIDENCES ================= */
export function Residences() {
  const { open } = useConsult();
  const list = residences.slice(0, 3);
  return (
    <section id="residences" className="relative bg-gradient-to-b from-transparent via-[#070707]/85 to-[#070707]/85 px-6 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p data-reveal className="eyebrow mb-6">The Collection</p>
          <MaskTitle className="text-5xl md:text-7xl" lines={[<>Featured <em className="gold-text">Residences</em></>]} />
          <p data-reveal className="muted mx-auto mt-6 max-w-lg">A private portfolio of Dubai&apos;s rarest addresses — most never publicly listed.</p>
        </div>
        <div className="space-y-10">
          {list.map((r, i) => (
            <article key={r.name} data-reveal className={`group relative grid overflow-hidden rounded-[2rem] border border-white/10 transition-colors duration-700 hover:border-gold/60 lg:grid-cols-5 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <div className="relative h-[55vh] min-h-[340px] overflow-hidden lg:col-span-3 lg:h-[70vh]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img data-parallax src={r.img} alt={r.name} className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-1000 group-hover:brightness-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <span className="absolute left-6 top-6 font-serif text-7xl text-white/15 [direction:ltr]">0{i + 1}</span>
              </div>
              <div className="glass relative flex flex-col justify-center gap-6 rounded-none border-0 bg-[#0b0b0d]/70 p-8 [direction:ltr] md:p-12 lg:col-span-2">
                <p className="eyebrow">{r.location}</p>
                <h3 className="font-serif text-4xl md:text-5xl">{r.name}</h3>
                <p className="font-serif text-3xl text-gold-light">{r.price}</p>
                <div className="hairline" />
                <ul className="space-y-3">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/80"><span className="h-1.5 w-1.5 rotate-45 bg-gold" />{f}</li>
                  ))}
                  <li className="flex items-center gap-3 text-white/50"><span className="h-1.5 w-1.5 rotate-45 border border-gold" />{r.size}</li>
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button onClick={() => open(`Viewing · ${r.name}`)} className="btn-gold rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em]">Request Viewing</button>
                  <button onClick={() => open(`Brochure · ${r.name}`)} className="btn-ghost rounded-full px-7 py-3 text-xs uppercase tracking-[0.2em]">Private Brochure</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= WHY DUBAI ================= */
export function WhyDubai() {
  const stats = [
    { v: 20, suf: "%", l: "Property growth potential" },
    { v: 85, suf: "%", l: "International investors" },
    { v: 200, suf: "+", l: "Nationalities living in Dubai" },
    { v: 24, suf: "/7", l: "Luxury lifestyle" },
  ];
  return (
    <section className="relative overflow-hidden px-6 py-40 md:px-16">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img data-parallax src={IMG.burjNight} alt="Dubai at night" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-[#070707]/40 to-[#070707]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <p data-reveal className="eyebrow mb-6 text-center">Why Dubai</p>
        <MaskTitle className="text-center text-5xl md:text-7xl" lines={["A city engineered", <em key="p" className="gold-text">for prosperity</em>]} />
        <div data-stagger className="mt-24 grid grid-cols-2 gap-y-16 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.l} className={`px-4 text-center lg:px-8 ${i ? "lg:border-l lg:border-white/10" : ""}`}>
              <p className="font-serif text-6xl leading-none md:text-8xl">
                <span data-count={s.v} className="gold-text">0</span><span className="text-gold-light">{s.suf}</span>
              </p>
              <p className="muted mt-5 text-xs uppercase tracking-[0.25em]">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FINAL CTA ================= */
export function FinalCTA() {
  const { open } = useConsult();
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img data-parallax src={IMG.skylineNight} alt="Dubai skyline at night" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070707] via-[#070707]/30 to-[#070707]" />
      </div>
      <div className="relative max-w-4xl">
        <p data-reveal className="eyebrow mb-8">By Private Invitation</p>
        <MaskTitle className="text-6xl md:text-8xl" lines={["Your Dubai Story", <>Begins <em className="gold-text">Here</em></>]} />
        <p data-reveal className="muted mx-auto mt-8 max-w-lg text-lg">Private access to exceptional residences and investment opportunities.</p>
        <div data-reveal className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button onClick={() => open("Private Viewing")} className="btn-gold rounded-full px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em]">Request Private Viewing</button>
          <button onClick={() => open("Luxury Advisor")} className="btn-ghost rounded-full px-10 py-4 text-xs uppercase tracking-[0.2em]">Contact Luxury Advisor</button>
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
export function Footer() {
  const cols: [string, string[]][] = [
    ["Properties", ["Penthouses", "Villas", "Branded Residences", "Off-Plan"]],
    ["Communities", ["Palm Jumeirah", "Downtown Dubai", "Dubai Marina", "Dubai Hills"]],
    ["Investments", ["Market Reports", "Golden Visa", "Portfolio Advisory", "Rental Management"]],
    ["Company", ["About ORA", "Advisors", "Press", "Contact"]],
  ];
  return (
    <footer className="relative border-t border-white/10 bg-[#070707] px-6 pb-10 pt-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="muted mt-6 max-w-xs text-sm leading-relaxed">A private real estate house curating Dubai&apos;s most exceptional residences for a global clientele.</p>
            <p className="mt-6 text-xs text-white/40">Boulevard Plaza, Tower 1 · Downtown Dubai</p>
          </div>
          {cols.map(([t, items]) => (
            <div key={t}>
              <p className="eyebrow mb-5 text-[10px]">{t}</p>
              <ul className="space-y-3 text-sm text-white/60">
                {items.map((i) => <li key={i}><a href="#" className="transition hover:text-gold-light">{i}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="hairline my-12" />
        <div className="flex flex-col justify-between gap-4 text-xs text-white/40 md:flex-row">
          <p>© 2026 ORA Dubai. All rights reserved.</p>
          <p className="tracking-[0.3em] uppercase">Luxury · Trust · Legacy</p>
        </div>
      </div>
    </footer>
  );
}
