"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollState } from "./scroll-state";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    lenis.on("scroll", (e: { progress: number; velocity: number }) => {
      scrollState.progress = e.progress || 0;
      scrollState.velocity = e.velocity;
      ScrollTrigger.update();
    });
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 60, opacity: 0, filter: "blur(8px)" }, {
          y: 0, opacity: 1, filter: "blur(0px)", duration: 1.6, ease: "power3.out",
          delay: Number(el.dataset.delay || 0),
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) => {
        const lines = el.querySelectorAll(".mask-line > span");
        gsap.fromTo(lines, { yPercent: 110, rotate: 2 }, {
          yPercent: 0, rotate: 0, duration: 1.8, ease: "expo.out", stagger: 0.14,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(el, { yPercent: -10, scale: 1.15 }, {
          yPercent: 10, scale: 1.15, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = parseFloat(el.dataset.count || "0");
        const decimals = Number(el.dataset.decimals || 0);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target, duration: 2.8, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => { el.textContent = obj.v.toFixed(decimals); },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
        gsap.fromTo(el.children, { y: 80, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.4, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });
    });
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}

export function scrollToId(id: string) {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 2.2, offset: -40 });
  else el.scrollIntoView({ behavior: "smooth" });
}
