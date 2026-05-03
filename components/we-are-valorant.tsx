export function WeAreValorant() {
  return (
    <section 
      className="relative z-10 pt-48 pb-32 bg-[#ece8e1] text-[#0f1923] overflow-hidden -mt-[60px]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 80px), 85% calc(100% - 80px), 80% 100%, 0 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#0f1923]">
            We Are Valorant
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Graphic */}
          <div className="relative w-full aspect-video flex items-center justify-center group overflow-hidden">
             <div className="absolute inset-0 bg-[#ff4655]/10 group-hover:bg-transparent transition-colors z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" 
               alt="Killjoy Wall Placeholder" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute top-4 right-4 bg-[#ff4655] text-white text-[10px] font-bold tracking-widest px-3 py-1 uppercase z-20">
                Gameplay
             </div>
          </div>

          {/* Right Content */}
          <div className="max-w-xl">
            <h2 className="text-[#0f1923] font-bold tracking-[0.2em] text-sm mb-4 uppercase">
              Defy The Limits
            </h2>
            
            <p className="text-[#0f1923]/80 mb-6 font-medium leading-relaxed">
              Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities.
            </p>
            <p className="text-[#0f1923]/80 mb-10 font-medium leading-relaxed">
              And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
            </p>

            <button className="bg-[#ff4655] text-white px-8 py-4 font-bold tracking-wider text-sm hover:bg-[#0f1923] transition-colors inline-block">
              LEARN THE GAME
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
