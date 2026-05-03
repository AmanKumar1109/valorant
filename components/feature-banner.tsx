import { Play } from "lucide-react";

export function FeatureBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0f1923] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1552820728-8b83bb6b2b0a?q=80&w=2070&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923] via-[#0f1923]/80 to-[#0f1923]/40" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-start justify-center py-20 lg:py-32">
            <div className="max-w-xl px-8 lg:px-16">
              <span className="mb-4 inline-block border border-[#ff4655] px-3 py-1 text-xs font-bold tracking-wider text-[#ff4655]">
                EPISODE 8 // ACT III
              </span>
              <h2 className="mb-4 text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                NEW BATTLE
                <br />
                <span className="text-[#ff4655]">PASS</span>
              </h2>
              <p className="mb-8 text-[#ece8e1]/80">
                Unlock exclusive skins, player cards, gun buddies, and more. The
                new battle pass brings fresh content for all agents.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-[#ff4655] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all hover:bg-[#ff4655]/90 hover:scale-105">
                  GET THE PASS
                </button>
                <button className="flex items-center gap-2 border-2 border-[#ece8e1]/30 px-8 py-4 text-sm font-bold tracking-wider text-[#ece8e1] transition-all hover:border-[#ff4655] hover:text-[#ff4655]">
                  <Play className="h-4 w-4" />
                  WATCH TRAILER
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-20 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative">
              <div className="h-96 w-96 border-2 border-[#ff4655]/20 rotate-45" />
              <div className="absolute inset-8 border-2 border-[#ff4655]/10 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
