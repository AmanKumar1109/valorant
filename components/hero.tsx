"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Zap } from "lucide-react";

export function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-05-14T09:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HRS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-base)" }}
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/ninja_hero.png"
          alt="Infinite Realms"
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-bg-base), rgba(5,5,5,0.5), var(--color-bg-base))" }}></div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(193,103,255,0.1), transparent)" }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">

        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full"
          style={{ border: "1px solid rgba(193,103,255,0.3)", background: "rgba(193,103,255,0.1)", backdropFilter: "blur(8px)" }}>
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--color-accent)" }}></span>
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase" style={{ color: "var(--color-primary)" }}>
            PROVENANCE 6.0 - MAY 14-15 - RVSCET
          </span>
        </div>

        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tighter italic uppercase"
            style={{ color: "var(--color-text-primary)", textShadow: "0 0 20px rgba(193,103,255,0.4)" }}>
            INFINITE REALMS
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter italic uppercase mt-2"
            style={{ background: "linear-gradient(to right, var(--color-primary), var(--color-accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            THE ANIME PROTOCOL
          </h2>
        </div>

        <p className="text-lg md:text-xl mb-3 max-w-2xl font-medium leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
          A multi-club inter-college fest powered by Helix v2.0
        </p>

        <div className="flex items-center justify-center gap-4 text-sm mb-12" style={{ color: "var(--color-text-muted)" }}>
          <span>5 Clubs</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(193,103,255,0.5)" }}></span>
          <span>30+ Events</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(193,103,255,0.5)" }}></span>
          <span className="font-bold" style={{ color: "var(--color-accent)" }}>Rs. 2,00,000+ Prize Pool</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
          <Link href="/register" className="block">
            <div className="flex items-center gap-3 px-10 py-4 font-black text-lg tracking-widest uppercase"
              style={{
                clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
                background: "linear-gradient(to right, var(--color-primary), var(--color-accent))",
                color: "var(--color-bg-base)",
              }}>
              <Zap className="w-5 h-5" />
              REGISTER NOW
            </div>
          </Link>

          <Link href="/brochure.pdf" className="block">
            <div className="flex items-center gap-3 px-10 py-4 font-black text-lg tracking-widest uppercase"
              style={{
                clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
                border: "1px solid var(--color-border-active)",
                color: "var(--color-text-primary)",
              }}>
              <Download className="w-5 h-5" />
              DOWNLOAD BROCHURE
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-8 p-6"
          style={{
            clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            backdropFilter: "blur(12px)",
            background: "rgba(13,13,26,0.6)",
            border: "1px solid rgba(193,103,255,0.2)",
          }}>
          {countdownItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center" style={{ minWidth: "60px" }}>
              <span className="text-3xl md:text-5xl font-bold" style={{ color: "var(--color-text-primary)", textShadow: "0 0 10px rgba(193,103,255,0.5)" }}>
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="mt-2 uppercase" style={{ fontSize: "10px", color: "var(--color-text-muted)", letterSpacing: "0.2em" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, var(--color-primary))" }}></div>
        <span className="font-bold tracking-widest uppercase my-6" style={{ fontSize: "10px", color: "var(--color-primary)", writingMode: "vertical-rl" }}>SCROLL</span>
        <div className="w-px h-12" style={{ background: "linear-gradient(to top, transparent, var(--color-primary))" }}></div>
      </div>
    </section>
  );
}