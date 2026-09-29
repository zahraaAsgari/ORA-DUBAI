"use client";

import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import { ConsultProvider } from "@/components/ui";
import { Hero, Story, Residences, WhyDubai, FinalCTA, Footer } from "@/components/Sections";
import AIConcierge from "@/components/AIConcierge";

const DubaiScene = dynamic(() => import("@/components/DubaiScene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#1a1030] via-[#6b3a2a] to-[#070707]" />,
});

export default function Home() {
  return (
    <ConsultProvider>
      <SmoothScroll>
        <DubaiScene />
        <div className="grain" />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <Story />
          <Residences />
          <WhyDubai />
          <AIConcierge />
          <FinalCTA />
        </main>
        <div className="relative z-10"><Footer /></div>
      </SmoothScroll>
    </ConsultProvider>
  );
}
