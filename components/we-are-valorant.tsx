import { ArrowRight } from "lucide-react";

export function WeAreValorant() {
  return (
    <section className="bg-[#ece8e1] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#ff4655]">
              JOIN THE COMMUNITY
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight text-[#0f1923] md:text-5xl lg:text-6xl">
              WE ARE
              <br />
              <span className="text-[#ff4655]">VALORANT</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-[#0f1923]/70">
              Defy the limits. Challenge your potential. Join millions of
              players worldwide in the ultimate tactical shooter experience.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-[#0f1923]/70">
              Whether you&apos;re a seasoned veteran or just starting your journey,
              there&apos;s a place for you in our community. Form teams, compete in
              ranked matches, or enjoy casual games with friends.
            </p>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-black text-[#ff4655] md:text-4xl">
                  25M+
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#0f1923]/60">
                  Players
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#ff4655] md:text-4xl">
                  190+
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#0f1923]/60">
                  Countries
                </p>
              </div>
              <div>
                <p className="text-3xl font-black text-[#ff4655] md:text-4xl">
                  24+
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#0f1923]/60">
                  Agents
                </p>
              </div>
            </div>

            <button className="group flex items-center gap-2 bg-[#0f1923] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all hover:bg-[#0f1923]/90 hover:scale-105">
              JOIN THE FIGHT
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1974&auto=format&fit=crop"
                alt="Valorant Gameplay"
                className="w-full"
              />
              {/* Decorative Frame */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full border-4 border-[#ff4655]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
