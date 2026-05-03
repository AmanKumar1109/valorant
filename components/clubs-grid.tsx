"use client";

import { ArrowUpRight, Code2, Music2, Cpu, Camera, Trophy } from "lucide-react";
import { CLUBS } from "../data/clubs";

const clubIcons: Record<string, React.ReactNode> = {
  helix:      <Code2 strokeWidth={1.5} className="w-6 h-6" />,
  tarangini:  <Music2 strokeWidth={1.5} className="w-6 h-6" />,
  circuitron: <Cpu strokeWidth={1.5} className="w-6 h-6" />,
  xpectra:    <Camera strokeWidth={1.5} className="w-6 h-6" />,
  panthers:   <Trophy strokeWidth={1.5} className="w-6 h-6" />,
};

export function ClubsGrid() {
  return (
    <section
      id="clubs"
      style={{ background: "linear-gradient(180deg, #050505 0%, #0a051a 50%, #050505 100%)" }}
      className="py-32 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(193,103,255,0.06) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "linear-gradient(to right, transparent, #C167FF)" }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#C167FF" }}>
              The Pillars of Provenance
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none" style={{ color: "#fff" }}>
            Five Clubs.<br />
            <span style={{ color: "#C167FF" }}>Infinite</span> Disciplines.
          </h2>
        </div>

        {/* Club Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLUBS.map((club) => (
            <div
              key={club.id}
              className="group relative flex flex-col overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "2px",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = `${club.accentColor}50`;
                el.style.boxShadow = `0 20px 60px ${club.accentColor}15, inset 0 1px 0 ${club.accentColor}20`;
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <div className="p-8 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className="relative w-12 h-12 flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.04)", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <img
                        src={club.logoUrl}
                        alt={club.name}
                        className="w-8 h-8 object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = "none";
                          const sib = target.nextSibling as HTMLElement;
                          if (sib) sib.style.display = "flex";
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center" style={{ color: club.accentColor }}>
                        {clubIcons[club.id]}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-black tracking-tight leading-tight" style={{ color: "#fff" }}>{club.name}</h3>
                      <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{club.tagline}</p>
                    </div>
                  </div>
                  <div
                    className="shrink-0 px-2.5 py-1 text-xs font-bold"
                    style={{ background: `${club.accentColor}15`, color: club.accentColor, border: `1px solid ${club.accentColor}30`, borderRadius: "2px" }}
                  >
                    {club.eventCount}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px mb-6" style={{ background: "rgba(255,255,255,0.05)" }} />

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(176,176,204,0.8)", lineHeight: "1.7" }}>
                  {club.description}
                </p>

                {/* Mission */}
                <div className="mb-8 pl-3" style={{ borderLeft: `2px solid ${club.accentColor}40` }}>
                  <p className="text-xs leading-relaxed italic" style={{ color: "rgba(255,255,255,0.3)" }}>
                    {club.mission}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#events"
                  className="flex items-center justify-between text-sm font-bold uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = club.accentColor}
                  onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)"}
                >
                  <span>View Events</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}