"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    tag: "GAME UPDATES",
    date: "10/31/23",
    title: "COMMUNITY TOURNAMENT OCTOBER 2023",
    description: "Discover the new community tournament...",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "ESPORTS",
    date: "10/25/23",
    title: "COMMUNITY TOURNAMENT OCTOBER 2023",
    description: "Catch up on the intense final matchup...",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "COMMUNITY",
    date: "10/18/23",
    title: "COMMUNITY WORKSHOP OCTOBER 2023",
    description: "Highlighting some of the best fan art...",
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop",
  },
];

export function LatestArticles() {
  return (
    <section className="pt-24 pb-48 bg-[#ece8e1] text-[#0f1923] relative z-10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex-1"></div>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#ff4655]">
            Latest Articles
          </h3>
          <div className="flex-1 flex justify-end">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-bold tracking-wider text-[#ff4655] hover:text-[#0f1923] transition-colors uppercase group"
            >
              Go to article page
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href="#" className="group block h-full">
              <div className="bg-white border border-transparent hover:border-[#ff4655]/20 transition-all duration-300 h-full flex flex-col relative overflow-hidden shadow-md hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-lg font-black uppercase tracking-tight text-[#0f1923] mb-2 line-clamp-2 group-hover:text-[#ff4655] transition-colors">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-4 mt-auto">
                    <span className="text-[#0f1923]/60 text-xs font-bold tracking-wider">
                      {article.date}
                    </span>
                    <span className="text-[#ff4655] text-[10px] font-bold tracking-widest uppercase">
                      {article.tag}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
