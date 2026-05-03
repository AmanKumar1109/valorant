export function AgentsSection() {
  return (
    <section 
      className="relative z-20 pt-40 pb-40 bg-[#FF66FF] overflow-hidden -mt-[80px]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 80px), 25% calc(100% - 80px), 20% 100%, 0 100%)"
      }}
    >
      {/* Background Chakra Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2000')] bg-cover mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Image Graphic */}
        <div className="w-full md:w-1/2 relative mt-16 lg:mt-0 flex justify-center group">
          <div className="relative z-10 w-[120%] h-[120%] -ml-[10%] drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
             {/* Sakura Ninja placeholder */}
             <img 
               src="/ninja_sakura.png" 
               alt="Kunoichi" 
               className="w-full h-full object-contain scale-105 group-hover:scale-110 transition-transform duration-700"
             />
             {/* Energy glow behind */}
             <div className="absolute inset-0 bg-[#C167FF] blur-[100px] opacity-40 mix-blend-screen -z-10 group-hover:opacity-60 transition-opacity"></div>
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-6xl md:text-8xl font-black text-[#FDEEEB] uppercase tracking-tighter mb-4 leading-none italic drop-shadow-[4px_4px_0_rgba(17,17,17,0.3)]">
            TEAM <br/> SQUAD 7
          </h3>
          <p className="text-[#07030A] font-black tracking-[0.2em] text-sm mb-6 uppercase bg-[#C167FF] inline-block px-3 py-1 skew-x-[-10deg]">
            <span className="skew-x-[10deg] block">CHAKRA CONTROL IS YOUR GREATEST WEAPON</span>
          </p>
          <p className="text-white/90 text-sm mb-10 max-w-md leading-relaxed font-bold">
            More than just kunai and shuriken, you'll choose a Shinobi armed with adaptive, swift, and lethal Kekkei Genkai that create opportunities to let your taijutsu shine. No two Shinobi fight alike, just as no two battles will look the same.
          </p>
          
          <button className="bg-[#07030A] text-[#C167FF] px-8 py-4 font-black tracking-wider text-sm hover:bg-white hover:text-[#FF66FF] transition-colors shadow-[5px_5px_0_rgba(193,103,255,1)] skew-x-[-10deg]">
            <span className="skew-x-[10deg] block">VIEW ALL SHINOBI</span>
          </button>
        </div>

      </div>
    </section>
  );
}

