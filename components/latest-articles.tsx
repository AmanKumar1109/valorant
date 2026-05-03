import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    category: "GAME UPDATES",
    title: "Patch Notes 8.11: New Agent Revealed",
    description:
      "Discover the latest changes, bug fixes, and the exciting reveal of our newest agent joining the roster.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1965&auto=format&fit=crop",
    date: "2 DAYS AGO",
  },
  {
    id: 2,
    category: "ESPORTS",
    title: "VCT Masters Tokyo: Grand Finals Recap",
    description:
      "Relive the most intense moments from the championship match that had fans on the edge of their seats.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop",
    date: "5 DAYS AGO",
  },
  {
    id: 3,
    category: "COMMUNITY",
    title: "Community Art Spotlight: May Edition",
    description:
      "Celebrating the incredible creativity of our community with this month's featured fan artwork.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    date: "1 WEEK AGO",
  },
];

export function LatestArticles() {
  return (
    <section className="bg-[#0f1923] py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-[#ff4655]">
              STAY INFORMED
            </p>
            <h2 className="text-4xl font-black uppercase tracking-tight text-[#ece8e1] md:text-5xl">
              LATEST NEWS
            </h2>
          </div>
          <button className="group hidden items-center gap-2 text-sm font-semibold tracking-wider text-[#ece8e1] transition-colors hover:text-[#ff4655] md:flex">
            VIEW ALL NEWS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer overflow-hidden bg-[#1a242d] transition-all hover:bg-[#1a242d]/80"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a242d] to-transparent opacity-60" />
                <span className="absolute left-4 top-4 bg-[#ff4655] px-3 py-1 text-xs font-bold tracking-wider text-white">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs tracking-wider text-[#768079]">
                  {article.date}
                </span>
                <h3 className="mt-2 text-xl font-bold uppercase tracking-tight text-[#ece8e1] transition-colors group-hover:text-[#ff4655]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#768079]">
                  {article.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold tracking-wider text-[#ff4655] opacity-0 transition-opacity group-hover:opacity-100">
                  READ MORE
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <button className="mt-8 flex w-full items-center justify-center gap-2 border border-[#2a3a47] py-4 text-sm font-semibold tracking-wider text-[#ece8e1] transition-colors hover:border-[#ff4655] hover:text-[#ff4655] md:hidden">
          VIEW ALL NEWS
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
