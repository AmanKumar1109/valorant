import { ArrowRight } from "lucide-react";

const maps = [
  { name: "BIND", type: "STANDARD" },
  { name: "HAVEN", type: "STANDARD" },
  { name: "SPLIT", type: "STANDARD" },
  { name: "ASCENT", type: "STANDARD" },
  { name: "ICEBOX", type: "STANDARD" },
];

export function MapSection() {
  return (
    <section className="bg-[#0f1923] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Map Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=1974&auto=format&fit=crop"
                alt="Valorant Map"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0f1923]/40 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full border-4 border-[#2a3a47]" />
          </div>

          {/* Map Info */}
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#ff4655]">
              TACTICAL BATTLEGROUNDS
            </p>
            <h2 className="mb-6 text-4xl font-black uppercase leading-tight tracking-tight text-[#ece8e1] md:text-5xl">
              EXPLORE
              <br />
              THE <span className="text-[#ff4655]">MAPS</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[#768079]">
              Each map is a unique playground designed for team strategies and
              creative plays. Learn the callouts, master the angles, and control
              the battlefield.
            </p>

            {/* Map List */}
            <div className="mb-8 space-y-3">
              {maps.map((map, index) => (
                <div
                  key={map.name}
                  className="group flex cursor-pointer items-center justify-between border-b border-[#2a3a47] pb-3 transition-colors hover:border-[#ff4655]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-[#768079]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-bold tracking-wider text-[#ece8e1] transition-colors group-hover:text-[#ff4655]">
                      {map.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs tracking-wider text-[#768079]">
                      {map.type}
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#768079] opacity-0 transition-all group-hover:text-[#ff4655] group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>

            <button className="group flex items-center gap-2 bg-[#ff4655] px-8 py-4 text-sm font-bold tracking-wider text-white transition-all hover:bg-[#ff4655]/90 hover:scale-105">
              VIEW ALL MAPS
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
