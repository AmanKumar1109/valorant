export function MapSection() {
  const villages = ["HIDDEN LEAF", "HIDDEN SAND", "HIDDEN CLOUD", "HIDDEN MIST", "HIDDEN STONE"];

  return (
    <section 
      className="relative z-10 pt-48 pb-40 bg-[#FDEEEB] text-[#07030A] -mt-[80px]"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 55% 100%, 50% calc(100% - 60px), 0 calc(100% - 60px))"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="w-full md:w-1/3">
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none italic text-[#FF66FF] drop-shadow-[2px_2px_0_rgba(17,17,17,0.8)]">
              Great <br /> Villages
            </h3>
            <p className="text-[#07030A] font-black tracking-[0.2em] text-sm mb-4 uppercase bg-[#C167FF] inline-block px-3 py-1 skew-x-[-10deg] text-white">
              <span className="skew-x-[10deg] block">FIGHT IN THE GREAT NINJA VILLAGES</span>
            </p>
            <p className="text-[#07030A]/80 text-sm mb-10 leading-relaxed font-bold">
              Each village is a battlefield to showcase your Jutsu. Purpose-built for clan wars, spectacular ambushes, and clutch moments. Make the strike others will imitate for generations to come.
            </p>

            <ul className="flex flex-col gap-4 mb-10 border-t-2 border-[#C167FF]/30 pt-6">
              {villages.map((village, index) => (
                <li key={village} className="group flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-[#FF66FF] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity rotate-45"></span>
                    <span className="text-lg font-black tracking-widest text-[#07030A]/60 group-hover:text-[#C167FF] transition-colors skew-x-[-5deg]">
                      <span className="skew-x-[5deg] block">{village}</span>
                    </span>
                  </div>
                  <span className="text-[#07030A]/30 text-sm font-black tracking-widest group-hover:text-[#FF66FF] transition-colors">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>

            <button className="bg-[#07030A] text-[#C167FF] px-8 py-4 font-black tracking-wider text-sm hover:bg-[#C167FF] hover:text-white transition-colors inline-block mt-4 skew-x-[-10deg]">
              <span className="skew-x-[10deg] block">EXPLORE THE WORLD</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-2/3 relative group flex justify-end">
            <div 
              className="relative aspect-video w-full max-w-2xl bg-black overflow-hidden shadow-[0_10px_40px_rgba(193,103,255,0.3)] border-4 border-[#07030A]"
              style={{
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 20%)"
              }}
            >
              <img 
                src="/ninja_village.png" 
                alt="Hidden Village Background" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07030A] via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-[#C167FF] font-black tracking-widest text-2xl shadow-black drop-shadow-[0_0_10px_rgba(193,103,255,0.8)] uppercase">
                  VILLAGE HIDDEN IN THE LEAVES
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

