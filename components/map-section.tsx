export function MapSection() {
  return (
    <section 
      className="relative z-10 pt-48 pb-40 bg-[#ece8e1] text-[#0f1923] -mt-[80px]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 55% 100%, 50% calc(100% - 60px), 0 calc(100% - 60px))"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full md:w-1/3">
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none">
              Map
            </h3>
            <p className="text-[#0f1923] font-bold tracking-[0.2em] text-sm mb-4 uppercase">
              Fight In All Parts Of The World
            </p>
            <p className="text-[#0f1923]/80 text-sm mb-10 leading-relaxed font-medium">
              Each map is a playground to showcase your creative thinking. Purpose-built for team strategies, spectacular plays, and clutch moments. Make the play others will imitate for years to come.
            </p>

            <button className="bg-[#ff4655] text-white px-8 py-4 font-bold tracking-wider text-sm hover:bg-[#0f1923] transition-colors inline-block mt-4">
              VIEW ALL MAPS
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-2/3 relative group flex justify-end">
            {/* The image is angularly clipped in the design */}
            <div 
              className="relative aspect-video w-full max-w-2xl bg-black overflow-hidden shadow-2xl"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%)"
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" 
                alt="Map Background Placeholder" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
