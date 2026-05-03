export function FeatureBanner() {
  return (
    <section 
      className="relative z-20 py-32 bg-[#2b275a] overflow-hidden -mt-[60px] pb-32"
      style={{
        clipPath: "polygon(0 60px, 35% 60px, 40% 0, 100% 0, 100% calc(100% - 60px), 15% calc(100% - 60px), 10% 100%, 0 100%)"
      }}
    >
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1614036634955-ae5e90f9cb9f?q=80&w=2000')] bg-cover bg-center"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Character Graphic (Iso Placeholder) */}
        <div className="w-full lg:w-1/2 relative flex justify-center mb-10 lg:mb-0">
          <div className="w-80 h-80 bg-gradient-to-tr from-purple-500/40 to-blue-500/40 border-4 border-white/20 transform rotate-12 flex items-center justify-center">
             <div className="w-72 h-72 bg-gradient-to-tr from-purple-600 to-indigo-600 -rotate-12 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Iso Placeholder" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
             </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-right">
          <p className="text-[#ff4655] font-bold tracking-[0.2em] text-sm mb-2 uppercase">
            Episode 07 // Act III // YR 3
          </p>
          <h2 className="text-5xl md:text-8xl font-black text-[#ff4655] uppercase tracking-tighter mb-8 leading-none">
            EVOLUTION
          </h2>
          
          <div className="inline-block text-left bg-[#1f1a45]/80 p-8 backdrop-blur-sm max-w-md">
            <h3 className="text-white text-2xl font-bold tracking-widest mb-2">+ ISO</h3>
            <p className="text-white/60 font-bold tracking-[0.2em] text-xs mb-4">DUELIST // </p>
            <p className="text-[#ece8e1]/80 text-sm mb-6 leading-relaxed">
              Chinese fixer for hire, Iso falls into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.
            </p>
            
            <button className="bg-[#ff4655] text-white px-8 py-3 font-bold tracking-wider text-sm hover:bg-white hover:text-[#ff4655] transition-colors">
              ACT SUMMARY
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
