"use client";

import { createContext, useContext, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="14.5" stroke="url(#lg)" strokeWidth="1" />
        <path d="M16 4 L18 28 L14 28 Z" fill="url(#lg)" />
        <path d="M9 28 L11 16 L12.5 28Z M23 28 L21 18 L19.5 28Z" fill="url(#lg)" opacity=".7" />
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="#F5D77A" />
            <stop offset="1" stopColor="#B8912A" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-serif text-lg tracking-[0.32em]">
        ORA <span className="text-gold-light">DUBAI</span>
      </span>
    </span>
  );
}

export function TiltCard({ children, className = "", max = 10 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rx = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 120, damping: 18 });
  const gx = useTransform(x, (v) => `${v * 100}%`);
  const gy = useTransform(y, (v) => `${v * 100}%`);
  const onMove = (e: MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0.5); y.set(0.5); }}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={`group relative ${className}`}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: useTransform([gx, gy], ([a, b]) => `radial-gradient(500px circle at ${a} ${b}, rgba(245,215,122,.14), transparent 45%)`) }}
      />
    </motion.div>
  );
}

type ModalCtx = { open: (interest?: string) => void };
const Ctx = createContext<ModalCtx>({ open: () => {} });
export const useConsult = () => useContext(Ctx);

export function ConsultProvider({ children }: { children: ReactNode }) {
  const [interest, setInterest] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");
  const close = () => { setInterest(null); setTimeout(() => setStatus("idle"), 500); };
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fd.get("name"), email: fd.get("email"), message: fd.get("message"), interest }),
      });
      const j = await res.json();
      if (!j.ok) { setErr(j.error || "Something went wrong."); setStatus("error"); return; }
      setStatus("done");
    } catch {
      setErr("Network error. Please try again."); setStatus("error");
    }
  };
  return (
    <Ctx.Provider value={{ open: (i = "Private Consultation") => setInterest(i) }}>
      {children}
      <AnimatePresence>
        {interest && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}
            onClick={close}
            data-lenis-prevent
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 40, opacity: 0, scale: 0.97 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-gold relative w-full max-w-lg rounded-3xl bg-[#0b0b0d]/80 p-8 md:p-10"
            >
              <button onClick={close} className="absolute right-5 top-5 text-white/50 transition hover:text-gold-light" aria-label="Close">✕</button>
              {status === "done" ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-2xl text-gold-light">✓</div>
                  <h3 className="font-serif text-3xl">Thank you.</h3>
                  <p className="muted mt-3">A senior ORA advisor will contact you within 24 hours to arrange your private experience.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <p className="eyebrow">{interest}</p>
                  <h3 className="font-serif text-3xl leading-tight">Reserve your private<br /><em className="gold-text">Dubai experience</em></h3>
                  <input required name="name" placeholder="Full name" className="w-full border-b border-white/15 bg-transparent py-3 outline-none transition placeholder:text-white/40 focus:border-gold" />
                  <input required type="email" name="email" placeholder="Email address" className="w-full border-b border-white/15 bg-transparent py-3 outline-none transition placeholder:text-white/40 focus:border-gold" />
                  <textarea name="message" rows={3} placeholder="Tell us about your ambitions (optional)" className="w-full resize-none border-b border-white/15 bg-transparent py-3 outline-none transition placeholder:text-white/40 focus:border-gold" />
                  {status === "error" && <p className="text-sm text-red-300">{err}</p>}
                  <button disabled={status === "sending"} className="btn-gold w-full rounded-full py-4 text-sm font-medium tracking-[0.2em] uppercase">
                    {status === "sending" ? "Sending…" : "Request Access"}
                  </button>
                  <p className="text-center text-xs text-white/40">Strictly confidential · Response within 24 hours</p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}
