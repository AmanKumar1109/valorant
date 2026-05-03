"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    tag: "CHUNIN EXAMS",
    date: "10/31/23",
    title: "NEW SENSEI & JUTSU UPDATE REVEALED",
    description: "Discover the new elemental jutsus, hidden techniques, and read about the balance changes coming in the next arc.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070&auto=format&fit=crop", // Japanese temple aesthetic
  },
  {
    id: 2,
    tag: "TOURNAMENT",
    date: "10/25/23",
    title: "FIVE KAGE SUMMIT: GRAND FINALS RECAP",
    description: "Catch up on the intense final matchup and see which village took home the ultimate glory.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=2070&auto=format&fit=crop", // Samurai sword aesthetic
  },
  {
    id: 3,
    tag: "COMMUNITY",
    date: "10/18/23",
    title: "SHINOBI ART SPOTLIGHT: AUTUMN EDITION",
    description: "Highlighting some of the best fan scrolls and artwork from our community of young ninjas.",
    image: "https://images.unsplash.com/photo-1578632292335-df3fbcca8d28?q=80&w=2070&auto=format&fit=crop", // Anime/Cosplay aesthetic
  },
];

export function LatestArticles() {
  return (
    <section className="pt-24 pb-48 bg-[#1a1a1a] text-[#f4f1eb] relative z-10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex-1"></div>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#ff6a00] italic drop-shadow-[0_0_8px_rgba(255,106,0,0.5)]">
            Shinobi Scrolls
          </h3>
          <div className="flex-1 flex justify-end">
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-black tracking-wider text-[#ff6a00] hover:text-white transition-colors uppercase group"
            >
              View all archives
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link key={article.id} href="#" className="group block h-full">
              <div className="bg-[#111] border-2 border-[#ff6a00]/20 hover:border-[#ff6a00] transition-all duration-300 h-full flex flex-col relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,106,0,0.2)]">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-[#ff6a00]/10 mix-blend-overlay group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Decorative glowing overlay edge */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-lg font-black uppercase tracking-tight text-white mb-3 line-clamp-2 group-hover:text-[#ff6a00] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-[#f4f1eb]/70 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <span className="text-[#ff6a00]/80 text-xs font-bold tracking-wider">
                      {article.date}
                    </span>
                    <span className="bg-[#e63946] text-white px-2 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">
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
