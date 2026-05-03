export function FeatureBanner() {
  return (
    <section 
      className="relative z-20 py-32 bg-[#0a0a0a] overflow-hidden -mt-[60px] pb-32 border-t-2 border-[#e63946]"
      style={{
        clipPath: "polygon(0 60px, 35% 60px, 40% 0, 100% 0, 100% calc(100% - 60px), 15% calc(100% - 60px), 10% 100%, 0 100%)"
      }}
    >
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1542050893-13824bb8ba0a?q=80&w=2000')] bg-cover bg-center mix-blend-luminosity"></div>
      {/* Lightning overlay effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#e63946]/10 to-blue-900/20 mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Character Graphic (Sasuke Placeholder) */}
        <div className="w-full lg:w-1/2 relative flex justify-center mb-10 lg:mb-0 group">
          <div className="w-80 h-80 bg-gradient-to-tr from-[#111] to-blue-900/50 border border-[#e63946]/50 transform rotate-6 flex items-center justify-center shadow-[0_0_30px_rgba(230,57,70,0.3)] transition-transform duration-500 group-hover:rotate-12">
             <div className="w-72 h-72 bg-gradient-to-tr from-black to-blue-950 -rotate-6 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:-rotate-12">
                <img 
                  src="/ninja_sasuke.png" 
                  alt="Shadow Ninja" 
                  className="w-full h-full object-cover scale-110 opacity-90 group-hover:scale-125 group-hover:opacity-100 transition-all duration-700"
                />
             </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-right">
          <p className="text-[#e63946] font-bold tracking-[0.2em] text-sm mb-2 uppercase drop-shadow-[0_0_5px_rgba(230,57,70,0.8)]">
            CHUNIN EXAMS // FINALS // ARC 3
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none italic drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            AWAKENING
          </h2>
          
          <div className="inline-block text-left bg-[#111]/90 p-8 backdrop-blur-md max-w-md border-l-4 border-[#e63946] shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            <h3 className="text-white text-2xl font-black tracking-widest mb-2">+ RENGEKI</h3>
            <p className="text-[#ff6a00] font-bold tracking-[0.2em] text-xs mb-4 uppercase">ROGUE SHINOBI // LIGHTNING BLADE</p>
            <p className="text-[#f4f1eb]/80 text-sm mb-6 leading-relaxed">
              A survivor of a fallen clan, he channels raw lightning chakra to dismantle any opposition. 
              Reconfiguring ambient energy into devastating visual genjutsu and high-speed strikes, he advances with single-minded focus towards his next duel to the death.
            </p>
            
            <button className="bg-[#e63946] text-white px-8 py-3 font-black tracking-wider text-sm hover:bg-white hover:text-[#e63946] transition-colors skew-x-[-10deg]">
              <span className="skew-x-[10deg] block">VIEW JUTSU ARCHIVE</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
