export function AgentsSection() {
  return (
    <section 
      className="relative z-20 pt-40 pb-40 bg-[#ff4655] overflow-hidden -mt-[80px]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 80px), 25% calc(100% - 80px), 20% 100%, 0 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Image Graphic */}
        <div className="w-full md:w-1/2 relative mt-16 lg:mt-0 flex justify-center">
          <div className="relative z-10 w-[120%] h-[120%] -ml-[10%]">
             <img 
               src="https://images.unsplash.com/photo-1620061599852-5a213e430f5a?q=80&w=1000&auto=format&fit=crop" 
               alt="Agents placeholder" 
               className="w-full h-full object-cover mix-blend-multiply"
             />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-6xl md:text-8xl font-black text-[#ece8e1] uppercase tracking-tighter mb-4 leading-none">
            Your <br/> Agents
          </h3>
          <p className="text-[#ece8e1] font-bold tracking-[0.2em] text-sm mb-6 uppercase">
            Creativity Is Your Greatest Weapon
          </p>
          <p className="text-white/90 text-sm mb-10 max-w-md leading-relaxed font-medium">
            More than guns and bullets, you'll choose an Agent armed with adaptive, swift, and lethal abilities that create opportunities to let your gunplay shine. No two Agents play alike, just as no two highlight reels will look the same.
          </p>
          
          <button className="bg-[#ece8e1] text-[#ff4655] px-8 py-4 font-bold tracking-wider text-sm hover:bg-[#0f1923] hover:text-[#ece8e1] transition-colors">
            VIEW ALL AGENTS
          </button>
        </div>

      </div>
    </section>
  );
}
