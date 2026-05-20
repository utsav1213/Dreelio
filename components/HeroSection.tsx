"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import RollButton from "./RollButton";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  // ==========================
  // NAVBAR ANIMATION
  // ==========================

  const navWidth = useTransform(scrollY, [0, 180], ["980px", "760px"]);

  const navTop = useTransform(scrollY, [0, 180], ["22px", "18px"]);

  const navBg = useTransform(
    scrollY,
    [0, 180],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.75)"],
  );

  const navBorder = useTransform(
    scrollY,
    [0, 180],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.35)"],
  );

  // ==========================
  // HERO ANIMATION
  // ==========================

  const heroY = useTransform(scrollY, [0, 220], [0, -80]);

  const heroOpacity = useTransform(scrollY, [0, 220], [1, 0.82]);

  // ==========================
  // DASHBOARD ANIMATION
  // ==========================

  const dashboardScale = useTransform(scrollY, [0, 300], [0.92, 1]);

  const dashboardY = useTransform(scrollY, [0, 300], [0, -180]);

  return (
    <main ref={containerRef} className="relative overflow-hidden bg-[#eef4fd]">
      {/* ==========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d8e6f9] via-[#edf3fc] to-[#f3ede5]" />

        {/* left cloud */}
        <div className="absolute left-[-120px] top-[180px] h-[220px] w-[220px] rounded-full bg-white/90 blur-[80px]" />

        {/* right cloud */}
        <div className="absolute right-[-120px] top-[200px] h-[220px] w-[220px] rounded-full bg-white/90 blur-[80px]" />
      </div>

      {/* ==========================
          NAVBAR
      ========================== */}

      <motion.nav
        style={{
          width: navWidth,
          top: navTop,
          backgroundColor: navBg,
          borderColor: navBorder,
        }}
        className="
          fixed
          left-1/2
          -translate-x-1/2
          z-50
          flex
          h-[78px]
          items-center
          justify-between
          rounded-full
          border
          px-8
          backdrop-blur-xl
          transition-all
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-[18px] w-[18px] rounded-full bg-black" />

          <span className="text-[18px] font-semibold text-[#141010]">
            Dreelio
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-10 text-[16px] text-black/80">
          <button className="hover:text-black transition">Features</button>

          <button className="hover:text-black transition">Benefits</button>

          <button className="hover:text-black transition">Pricing</button>

          <button className="hover:text-black transition">Blog</button>

          <button className="hover:text-black transition">Contact Us</button>
        </div>

        {/* CTA */}
        <RollButton text="Try Dreelio free" />
      </motion.nav>

      {/* ==========================
          HERO SECTION
      ========================== */}

      <section className="relative z-10 flex min-h-[180vh] flex-col items-center px-6 pt-[180px]">
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
          }}
          className="max-w-[900px] text-center"
        >
          {/* Heading */}
          <h1 className="text-[72px] font-bold leading-[0.98] tracking-[-3px] text-[#171111] md:text-[88px]">
            Run your freelance
            <br />
            business like a pro
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-[820px] text-[26px] leading-[1.5] text-black/55">
            All-in-one platform for managing clients, projects, and payments
            without the chaos. From first contract to final invoice, we've got
            your back.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <RollButton text="Try Dreelio free" />

            <RollButton text="Try Dreelio free" />
          </div>
        </motion.div>

        {/* ==========================
            DASHBOARD IMAGE
        ========================== */}

        <motion.div
          style={{
            scale: dashboardScale,
            y: dashboardY,
          }}
          className="relative mt-24 w-full max-w-[1100px]"
        >
          <div
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-black/5
              bg-white
              shadow-[0_40px_120px_rgba(0,0,0,0.14)]
            "
          >
            <Image
              src="/dashboard.png"
              alt="dashboard"
              width={1600}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>

        {/* ==========================
            TRUSTED LOGOS
        ========================== */}

        <section className="mt-28 flex flex-col items-center">
          <p className="text-[22px] text-black/45">
            Trusted by 7,000+ top startups, freelancers and studios
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-16 text-[34px] font-semibold text-black/30">
            <span>AH</span>
            <span>MILANO</span>
            <span>luminous</span>
            <span>Amsterdam</span>
            <span>SAVANNAH</span>
            <span>the</span>
          </div>
        </section>
      </section>
    </main>
  );
}
