"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Users, ChevronRight, Zap, Gamepad2, Bot, Music, Camera, Trophy, UtensilsCrossed } from "lucide-react";
import { EVENTS } from "../data/events";
import { CATEGORIES } from "../data/categories";
import type { EventCategory } from "../types";

const categoryIcons: Record<string, React.ReactNode> = {
  "tech-ai":      <Zap className="w-3.5 h-3.5" strokeWidth={2} />,
  "gaming":       <Gamepad2 className="w-3.5 h-3.5" strokeWidth={2} />,
  "robotics-iot": <Bot className="w-3.5 h-3.5" strokeWidth={2} />,
  "cultural":     <Music className="w-3.5 h-3.5" strokeWidth={2} />,
  "media":        <Camera className="w-3.5 h-3.5" strokeWidth={2} />,
  "sports":       <Trophy className="w-3.5 h-3.5" strokeWidth={2} />,
  "culinary":     <UtensilsCrossed className="w-3.5 h-3.5" strokeWidth={2} />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.35, delay: i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export function EventPool() {
  const [active, setActive] = useState<EventCategory | "all">("all");

  const filtered = useMemo(() =>
    EVENTS.filter((e) => e.status !== "cancelled" && (active === "all" || e.category === active)),
    [active]
  );

  return (
    <section id="events" className="py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050505 0%, #07051a 60%, #050505 100%)" }}>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "128px" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#9F8AFF]" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: "#9F8AFF" }}>
                Provenance 6.0
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight" style={{ color: "#fff" }}>
              The Event <span style={{ color: "#C167FF" }}>Arena</span>
            </h2>
            <p className="mt-3 text-sm" style={{ color: "rgba(176,176,204,0.6)" }}>
              {filtered.length} event{filtered.length !== 1 ? "s" : ""} · May 14-15, 2026
            </p>
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActive("all")}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200"
              style={{
                borderRadius: "2px",
                border: active === "all" ? "1px solid #C167FF" : "1px solid rgba(255,255,255,0.08)",
                background: active === "all" ? "rgba(193,103,255,0.12)" : "transparent",
                color: active === "all" ? "#C167FF" : "rgba(255,255,255,0.4)",
                boxShadow: active === "all" ? "0 0 16px rgba(193,103,255,0.2)" : "none",
              }}
            >
              All
            </button>
            {CATEGORIES.map((cat) => {
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200"
                  style={{
                    borderRadius: "2px",
                    border: isActive ? `1px solid ${cat.accentColor}` : "1px solid rgba(255,255,255,0.08)",
                    background: isActive ? `${cat.accentColor}15` : "transparent",
                    color: isActive ? cat.accentColor : "rgba(255,255,255,0.4)",
                    boxShadow: isActive ? `0 0 16px ${cat.accentColor}30` : "none",
                  }}
                >
                  {categoryIcons[cat.id]}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Event Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((event, i) => {
              const cat = CATEGORIES.find((c) => c.id === event.category);
              return (
                <motion.article
                  key={event.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="group relative flex flex-col overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "2px" }}
                >
                  {/* Poster */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 z-10 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(5,5,5,0.95) 100%)` }} />
                    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at center, ${cat?.accentColor}12, transparent 70%)` }} />
                    <img
                      src={event.posterUrl || "/ninja_kakashi.png"}
                      alt={event.name}
                      loading="lazy"
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Category chip */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1"
                      style={{
                        background: "rgba(5,5,5,0.75)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${cat?.accentColor}40`,
                        borderRadius: "2px",
                        color: cat?.accentColor,
                      }}>
                      {categoryIcons[event.category]}
                      <span className="text-[10px] font-bold uppercase tracking-widest">{cat?.label}</span>
                    </div>

                    {/* Date chip */}
                    <div className="absolute top-4 right-4 z-20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: "rgba(5,5,5,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px", color: "rgba(255,255,255,0.5)" }}>
                      {event.date ? new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" }) : "TBA"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-black tracking-tight leading-tight mb-1.5 transition-colors duration-200 group-hover:text-[#C167FF]"
                      style={{ color: "#fff" }}>
                      {event.name}
                    </h3>
                    <p className="text-sm italic mb-5" style={{ color: "rgba(176,176,204,0.5)" }}>
                      {event.tagline}
                    </p>

                    {/* Meta strip */}
                    <div className="grid grid-cols-3 gap-3 py-4 mb-5"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      {[
                        { icon: <Clock className="w-3.5 h-3.5" />, label: event.duration },
                        { icon: <Users className="w-3.5 h-3.5" />, label: event.format },
                        { icon: <MapPin className="w-3.5 h-3.5" />, label: event.venue.split(",")[0] },
                      ].map(({ icon, label }, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-1.5">
                          <div style={{ color: "rgba(255,255,255,0.25)" }}>{icon}</div>
                          <span className="text-[10px] text-center leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a href="#"
                      className="mt-auto flex items-center justify-between text-xs font-bold uppercase tracking-widest py-3 px-4 transition-all duration-200"
                      style={{
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.02)",
                        color: "rgba(255,255,255,0.35)",
                        borderRadius: "2px",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${cat?.accentColor}60`;
                        (e.currentTarget as HTMLAnchorElement).style.color = cat?.accentColor || "#C167FF";
                        (e.currentTarget as HTMLAnchorElement).style.background = `${cat?.accentColor}08`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)";
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.02)";
                      }}
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-sm" style={{ color: "rgba(255,255,255,0.2)" }}>
            No events in this category yet.
          </div>
        )}
      </div>
    </section>
  );
}