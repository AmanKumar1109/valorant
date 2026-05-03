"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "JETT",
    role: "DUELIST",
    description:
      "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can.",
    image:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1471&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "PHOENIX",
    role: "DUELIST",
    description:
      "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "SAGE",
    role: "SENTINEL",
    description:
      "The stronghold of China, Sage creates safety for herself and her team wherever she goes. She can revive fallen allies and stall aggressive pushes.",
    image:
      "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "OMEN",
    role: "CONTROLLER",
    description:
      "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, and lurks unseen.",
    image:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1470&auto=format&fit=crop",
  },
];

export function AgentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextAgent = () => {
    setActiveIndex((prev) => (prev + 1) % agents.length);
  };

  const prevAgent = () => {
    setActiveIndex((prev) => (prev - 1 + agents.length) % agents.length);
  };

  return (
    <section className="relative overflow-hidden bg-[#ff4655] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Agent Info */}
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-white/80">
              CHOOSE YOUR AGENT
            </p>
            <h2 className="mb-2 text-5xl font-black uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
              {agents[activeIndex].name}
            </h2>
            <span className="mb-6 inline-block border border-white/30 px-3 py-1 text-xs font-bold tracking-wider text-white">
              {agents[activeIndex].role}
            </span>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-white/90">
              {agents[activeIndex].description}
            </p>

            <div className="flex items-center gap-6">
              <button className="group flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold tracking-wider text-[#ff4655] transition-all hover:bg-white/90 hover:scale-105">
                VIEW ALL AGENTS
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevAgent}
                  className="flex h-12 w-12 items-center justify-center border-2 border-white/30 text-white transition-colors hover:bg-white hover:text-[#ff4655]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextAgent}
                  className="flex h-12 w-12 items-center justify-center border-2 border-white/30 text-white transition-colors hover:bg-white hover:text-[#ff4655]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Agent Indicators */}
            <div className="mt-8 flex gap-2">
              {agents.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 transition-all ${
                    index === activeIndex
                      ? "w-8 bg-white"
                      : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Agent Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={agents[activeIndex].image}
                alt={agents[activeIndex].name}
                className="h-full w-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff4655] via-transparent to-transparent opacity-40" />
            </div>

            {/* Decorative */}
            <div className="absolute -bottom-8 -left-8 h-32 w-32 border-4 border-white/20" />
            <div className="absolute -right-8 -top-8 h-32 w-32 border-4 border-white/20" />
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 text-[200px] font-black tracking-tighter text-white/5">
        AGENTS
      </div>
    </section>
  );
}
