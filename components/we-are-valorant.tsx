export function WeAreValorant() {
  return (
    <section 
      className="relative z-10 pt-48 pb-32 bg-[#FDEEEB] text-[#07030A] overflow-hidden -mt-[60px]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 80px), 85% calc(100% - 80px), 80% 100%, 0 100%)"
      }}
    >
      <div className="absolute inset-0 z-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2000')] bg-cover bg-center"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#07030A] drop-shadow-[4px_4px_0_rgba(193,103,255,0.2)]">
            We Are Shinobi
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Graphic */}
          <div className="relative w-full aspect-video flex items-center justify-center group overflow-hidden border-4 border-[#07030A] shadow-[10px_10px_0_rgba(193,103,255,1)]">
             <div className="absolute inset-0 bg-[#C167FF]/20 group-hover:bg-transparent transition-colors z-10"></div>
             <img 
               src="/ninja_kakashi.png" 
               alt="Sensei Ninja" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute top-4 right-4 bg-[#07030A] text-[#C167FF] text-[10px] font-black tracking-widest px-3 py-1 uppercase z-20 skew-x-[-10deg]">
                <span className="skew-x-[10deg] block">JONIN CLASS</span>
             </div>
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <h2 className="text-[#FF66FF] font-black tracking-[0.2em] text-sm mb-4 uppercase drop-shadow-[0_0_2px_rgba(230,57,70,0.5)]">
              Find Your Ninja Way
            </h2>
            
            <p className="text-[#07030A]/90 mb-6 font-bold leading-relaxed">
              Master the five nature transformations on a global, competitive battlefield. You have a limited chakra pool to attack and defend your village using powerful ninjutsu and tactical genjutsu.
            </p>
            <p className="text-[#07030A]/80 mb-10 font-medium leading-relaxed">
              And, with one life per-round, you'll need to weave signs faster than your opponent if you want to survive. Take on rival clans across Chunin Exams and Anbu Black Ops modes.
            </p>

            <button className="bg-[#07030A] text-[#C167FF] px-8 py-4 font-black tracking-wider text-sm hover:bg-[#C167FF] hover:text-white transition-colors inline-block skew-x-[-10deg]">
              <span className="skew-x-[10deg] block">READ THE SCROLLS</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

