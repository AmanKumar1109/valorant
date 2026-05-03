import Link from "next/link";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#07030A]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/ninja_hero.png"
          alt="Shinobi Strike Background"
          className="w-full h-full object-cover opacity-70 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07030A] via-[#07030A]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07030A] via-transparent to-transparent"></div>
        {/* Glowing Orange Overlay */}
        <div className="absolute inset-0 bg-[#C167FF]/10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-[#C167FF] mb-4 drop-shadow-[0_0_5px_rgba(193,103,255,0.8)]">
            AN EPIC SHINOBI TACTICAL BATTLE
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-2 italic">
            YOUR CHAKRA
          </h1>
          <h1 className="text-6xl md:text-8xl font-black text-[#c167ff] leading-none tracking-tighter mb-8 italic drop-shadow-[0_0_15px_rgba(193,103,255,0.5)]">
            YOUR PATH
          </h1>
          <p className="text-lg text-[#FDEEEB]/90 mb-10 max-w-lg leading-relaxed font-medium">
            Find your ninja way on a global, competitive battlefield. Master elemental jutsu, summon allies, and use sharp kunai tactics. With one life per round, your strategy and willpower will determine the fate of your village.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="relative group overflow-hidden skew-x-[-10deg]">
              <div className="absolute inset-0 bg-white translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0"></div>
              <div className="relative bg-[#C167FF] text-white group-hover:text-[#07030A] px-10 py-5 font-black tracking-widest transition-colors duration-300 skew-x-[10deg] block">
                ENTER COMBAT
              </div>
            </button>

            <button className="flex items-center gap-3 px-8 py-4 border-2 border-[#C167FF]/50 text-[#FDEEEB] hover:bg-[#C167FF]/20 hover:border-[#C167FF] transition-all font-bold tracking-wider group skew-x-[-10deg]">
              <div className="skew-x-[10deg] flex items-center gap-3">
                <Play className="w-4 h-4 fill-current text-[#C167FF] group-hover:drop-shadow-[0_0_8px_rgba(193,103,255,0.8)]" />
                WATCH TRAILER
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-[2px] h-12 bg-gradient-to-b from-transparent to-[#C167FF]"></div>
        <span className="text-xs font-black tracking-widest text-[#C167FF] rotate-90 my-6">SCROLL</span>
        <div className="w-[2px] h-12 bg-gradient-to-t from-transparent to-[#C167FF]"></div>
      </div>
      
      {/* Flying Kunai / Shuriken decors */}
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-[#C167FF]/30 rotate-45 hidden lg:block animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-32 w-16 h-16 border border-[#FF66FF]/40 rotate-12 hidden lg:block"></div>
    </section>
  );
}

