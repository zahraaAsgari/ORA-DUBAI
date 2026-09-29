"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Logo, useConsult } from "./ui";
import { scrollToId } from "./SmoothScroll";

const links = [
  ["Properties", "residences"],
  ["Communities", "communities"],
  ["Investment", "investment"],
  ["About", "story"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { open: consult } = useConsult();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-700 md:px-7 ${
          scrolled ? "border-white/10 bg-[#0b0b0d]/70 shadow-2xl backdrop-blur-2xl" : "border-white/10 bg-white/[0.04] backdrop-blur-md"
        }`}
      >
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><Logo /></button>
        <ul className="hidden items-center gap-10 text-[13px] tracking-[0.15em] text-white/70 md:flex">
          {links.map(([l, id]) => (
            <li key={l}>
              <button onClick={() => scrollToId(id)} className="group relative uppercase transition hover:text-white">
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={() => consult()} className="btn-gold hidden rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] sm:block">
            Private Consultation
          </button>
          <button onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" aria-label="Menu">
            <span className={`h-px w-6 bg-white transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-6 bg-white transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto mt-3 max-w-7xl rounded-3xl bg-[#0b0b0d]/80 p-6 md:hidden">
          {links.map(([l, id]) => (
            <button key={l} onClick={() => { setOpen(false); scrollToId(id); }} className="block w-full border-b border-white/10 py-4 text-left font-serif text-2xl">
              {l}
            </button>
          ))}
          <button onClick={() => { setOpen(false); consult(); }} className="btn-gold mt-6 w-full rounded-full py-3 text-xs font-semibold uppercase tracking-[0.15em]">
            Private Consultation
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
