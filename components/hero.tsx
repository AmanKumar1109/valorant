import Link from "next/link";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0f1923]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
          alt="Valorant Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923] via-[#0f1923]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.2em] text-[#ece8e1] mb-4">
            A 5V5 CHARACTER-BASED TACTICAL SHOOTER
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-2">
            YOUR AGENTS
          </h1>
          <h1 className="text-6xl md:text-8xl font-black text-[#ff4655] leading-none tracking-tighter mb-8">
            YOUR CALL
          </h1>
          <p className="text-lg text-[#ece8e1]/80 mb-10 max-w-lg leading-relaxed">
            Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
              <div className="relative bg-[#ff4655] text-white group-hover:text-[#0f1923] px-8 py-4 font-bold tracking-wider transition-colors duration-300">
                PLAY FREE
              </div>
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button className="flex items-center gap-3 px-8 py-4 border border-[#ece8e1]/30 text-[#ece8e1] hover:bg-[#ece8e1]/10 transition-colors font-bold tracking-wider">
              <Play className="w-4 h-4 fill-current" />
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-white"></div>
        <span className="text-xs font-mono tracking-widest text-white rotate-90 my-4">SCROLL</span>
        <div className="w-[1px] h-12 bg-white"></div>
      </div>
      
      <div className="absolute top-1/4 right-10 w-24 h-24 border border-white/10 rotate-45 hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-32 w-16 h-16 border border-[#ff4655]/20 rotate-12 hidden lg:block"></div>
    </section>
  );
}
