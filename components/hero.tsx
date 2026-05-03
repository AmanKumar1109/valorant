import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923]/95 via-[#0f1923]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1923] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#ff4655]">
            A 5V5 CHARACTER-BASED TACTICAL SHOOTER
          </p>
          <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
            YOUR AGENTS
            <br />
            <span className="text-[#ff4655]">YOUR CALL</span>
          </h1>
          <p className="mb-8 max-w-lg text-lg text-[#ece8e1]/80">
            Blend your style and experience on a global, competitive stage. Your
            team, your strategy, your victory.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="group flex items-center gap-3 bg-[#ff4655] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all hover:bg-[#ff4655]/90 hover:scale-105">
              PLAY FREE
            </button>
            <button className="group flex items-center gap-3 border-2 border-[#ece8e1]/30 bg-transparent px-8 py-4 text-sm font-bold tracking-wider text-[#ece8e1] transition-all hover:border-[#ff4655] hover:text-[#ff4655]">
              <Play className="h-4 w-4" />
              WATCH TRAILER
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-[#ece8e1]/50">SCROLL</span>
          <div className="h-8 w-px bg-gradient-to-b from-[#ff4655] to-transparent" />
        </div>
      </div>
    </section>
  );
}
