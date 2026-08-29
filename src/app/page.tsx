import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import CreativeBackground from "@/components/Home/CreativeBackground";
import { Metadata } from "next";
import FAQ from "@/components/Home/FAQ";

export const metadata: Metadata = {
  title: "CrypGo | Buy & Sell Crypto",
  description: "CrypGo is the most creative platform to manage your crypto assets.",
};

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-darkmode">
      <CreativeBackground />

      <div className="flex flex-col gap-0 relative z-10">
        <Hero />

        <div className="relative">
          <Work />
        </div>

        <section className="relative py-20">
          <TimeLine />
        </section>

        <section className="relative">
          <Platform />
        </section>

        <section className="relative py-20">
          <Portfolio />
        </section>

        <section className="relative">
          <Upgrade />
        </section>

        <section className="relative">
          <Perks />
        </section>

        <section className="relative">
          <FAQ />
        </section>
      </div>
    </main>
  );
}
