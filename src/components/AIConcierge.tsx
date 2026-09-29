"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { residences } from "./data";
import { useConsult } from "./ui";

const DEFAULT_Q = "Find me a waterfront villa under AED 30M";
const SUGGESTIONS = ["Penthouse with Burj Khalifa view", "Waterfront home under AED 15M", "Family villa near golf"];

type Result = { list: typeof residences; analysis: string; score: number };

function analyse(q: string): Result {
  const s = q.toLowerCase();
  const m = s.match(/(\d+(?:\.\d+)?)\s*m/);
  const budget = m ? parseFloat(m[1]) : Infinity;
  let list = residences.filter((r) => r.priceNum <= budget);
  if (/water|beach|sea|ocean|marina|palm/.test(s)) list = list.filter((r) => r.waterfront);
  if (/villa|family|golf/.test(s)) list = list.filter((r) => r.type === "villa");
  if (/penthouse|burj|downtown/.test(s)) list = list.filter((r) => r.type === "penthouse");
  if (/golf|hills/.test(s)) list = list.filter((r) => r.location === "Dubai Hills");
  if (!list.length) list = [...residences].sort((a, b) => Math.abs(a.priceNum - (budget === Infinity ? 20 : budget)) - Math.abs(b.priceNum - (budget === Infinity ? 20 : budget))).slice(0, 2);
  list = list.slice(0, 2);
  const loc = list[0]?.location ?? "Dubai";
  const score = Math.round(list.reduce((a, r) => a + r.score, 0) / list.length);
  const analysis = `${loc} shows strong prime-segment momentum with limited new supply and sustained international demand. Projected 5-year appreciation of ${loc === "Palm Jumeirah" ? "38–46" : loc === "Dubai Hills" ? "32–40" : "28–36"}% with net rental yields of ${loc === "Dubai Marina" ? "7.4" : "6.1"}%.`;
  return { list, analysis, score };
}

export default function AIConcierge() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [typed, setTyped] = useState("");
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<"typing" | "thinking" | "done">("typing");
  const [result, setResult] = useState<Result | null>(null);
  const { open } = useConsult();
  const timers = useRef<number[]>([]);

  const run = (q: string) => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setResult(null);
    setPhase("typing");
    setTyped("");
    [...q].forEach((_, i) => {
      timers.current.push(window.setTimeout(() => setTyped(q.slice(0, i + 1)), 38 * i));
    });
    timers.current.push(window.setTimeout(() => setPhase("thinking"), 38 * q.length + 300));
    timers.current.push(window.setTimeout(() => { setResult(analyse(q)); setPhase("done"); }, 38 * q.length + 2200));
  };

  useEffect(() => {
    if (inView) run(DEFAULT_Q);
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, [inView]);

  return (
    <section className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p data-reveal className="eyebrow mb-6">ORA Intelligence</p>
          <h2 data-reveal className="mx-auto max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Find Your Perfect Dubai Residence <em className="gold-text">With AI</em>
          </h2>
        </div>
        <div ref={ref} data-reveal className="glass glass-gold relative overflow-hidden rounded-[2rem] bg-[#0b0b0d]/60">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-gold-light to-[#8a6a1c]">
                <motion.span className="absolute inset-0 rounded-full border border-gold-light" animate={{ scale: [1, 1.6], opacity: [0.8, 0] }} transition={{ duration: 2.4, repeat: Infinity }} />
              </div>
              <div>
                <p className="text-sm">ORA Concierge</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">Private AI Advisor · Online</p>
              </div>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/40 sm:block">Encrypted Session</span>
          </div>

          <div className="min-h-[460px] space-y-6 p-6 md:p-10">
            <div className="flex justify-end">
              <div className="max-w-md rounded-2xl rounded-br-sm border border-white/15 bg-white/[0.07] px-5 py-4">
                <p className={phase === "typing" ? "caret" : ""}>{typed || "\u00a0"}</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {phase === "thinking" && (
                <motion.div key="t" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-gold" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }} />)}
                  </span>
                  Analysing 2,480 private listings, market data and community trends…
                </motion.div>
              )}
              {phase === "done" && result && (
                <motion.div key="r" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.18 } } }} className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
                  <div className="space-y-4">
                    <motion.p variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } }} className="text-[10px] uppercase tracking-[0.3em] text-gold-light">Recommended Properties</motion.p>
                    {result.list.map((r) => (
                      <motion.button key={r.name} onClick={() => open(`Viewing · ${r.name}`)} variants={{ h: { opacity: 0, y: 30 }, s: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                        className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-left transition duration-500 hover:border-gold/50">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={r.img} alt={r.name} className="h-20 w-28 rounded-xl object-cover" />
                        <div className="flex-1">
                          <p className="font-serif text-xl">{r.name}</p>
                          <p className="text-xs text-white/50">{r.location} · {r.size}</p>
                          <p className="mt-1 text-sm text-gold-light">{r.price}</p>
                        </div>
                        <span className="pr-3 text-white/40 transition group-hover:translate-x-1 group-hover:text-gold-light">→</span>
                      </motion.button>
                    ))}
                    <motion.div variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gold-light">Location Analysis</p>
                      <p className="text-sm leading-relaxed text-white/75">{result.analysis}</p>
                    </motion.div>
                  </div>
                  <motion.div variants={{ h: { opacity: 0, scale: 0.95 }, s: { opacity: 1, scale: 1, transition: { duration: 1.2 } } }} className="flex flex-col items-center justify-center rounded-2xl border border-gold/30 bg-gold/[0.04] p-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light">Investment Score</p>
                    <div className="relative my-6 h-44 w-44">
                      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                        <circle cx="50" cy="50" r="44" stroke="rgba(255,255,255,.08)" strokeWidth="4" fill="none" />
                        <motion.circle cx="50" cy="50" r="44" stroke="url(#sg)" strokeWidth="4" fill="none" strokeLinecap="round"
                          initial={{ pathLength: 0 }} animate={{ pathLength: result.score / 100 }} transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }} />
                        <defs><linearGradient id="sg"><stop stopColor="#B8912A" /><stop offset="1" stopColor="#F5D77A" /></linearGradient></defs>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-serif text-5xl">{result.score}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">/ 100</span>
                      </div>
                    </div>
                    <div className="w-full space-y-2 text-xs">
                      {[["Capital Growth", "Excellent"], ["Liquidity", "High"], ["Rental Demand", "Strong"]].map(([a, b]) => (
                        <div key={a} className="flex justify-between border-b border-white/10 pb-2"><span className="text-white/50">{a}</span><span className="text-gold-light">{b}</span></div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); if (input.trim()) { run(input.trim()); setInput(""); } }} className="border-t border-white/10 p-4 md:p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button type="button" key={s} onClick={() => run(s)} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/60 transition hover:border-gold hover:text-gold-light">{s}</button>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] py-2 pl-5 pr-2 focus-within:border-gold/60">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Describe your ideal Dubai residence…" className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40" />
              <button className="btn-gold rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em]">Ask</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
