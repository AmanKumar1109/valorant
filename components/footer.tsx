import Link from "next/link";

export function Footer() {
  const footerLinks = {
    GAME: ["Download", "Patch Notes", "News", "Media", "Support"],
    SHINOBI: ["Characters", "Villages", "Ninja Tools", "Clans"],
    ESPORTS: ["Chunin Exams", "Jonin Draft", "Global Standings", "Tournaments"],
    SUPPORT: ["Specs", "Submit a Scroll", "Privacy Policy", "Terms of Service"],
    SOCIALS: ["Twitter", "Instagram", "YouTube", "Twitch", "Discord"],
  };

  return (
    <footer className="relative z-0 bg-[#0a0a0a] text-[#f4f1eb] pt-32 pb-12 -mt-[60px] border-t-4 border-[#e63946]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542050893-13824bb8ba0a?q=80&w=2000')] opacity-10 mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6 group">
              <h2 className="text-[#ff6a00] font-black tracking-tighter text-3xl uppercase italic drop-shadow-[0_0_10px_rgba(255,106,0,0.5)] group-hover:text-white transition-colors">
                SHINOBI<span className="text-white group-hover:text-[#ff6a00] transition-colors">STRIKE</span>
              </h2>
            </Link>
            <p className="text-sm text-[#f4f1eb]/60 max-w-xs leading-relaxed font-bold">
              An epic 5v5 shinobi tactical battle. Blend your elemental jutsu and combat experience on a global, competitive stage.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-sm font-black tracking-widest text-[#e63946] uppercase mb-6 skew-x-[-5deg] inline-block">
                <span className="skew-x-[5deg] block">{category}</span>
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#" 
                      className="text-sm font-bold text-[#f4f1eb]/60 hover:text-[#ff6a00] hover:translate-x-1 transition-all inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#e63946]/30 gap-4 text-xs font-bold tracking-wider text-[#f4f1eb]/40">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-[#ff6a00] transition-colors">PRIVACY NOTICE</Link>
            <Link href="#" className="hover:text-[#ff6a00] transition-colors">TERMS OF SERVICE</Link>
          </div>
          <p>&copy; 2026 Hidden Leaf Studio. Shinobi Strike and associated clan logos are trademarks.</p>
        </div>
      </div>
    </footer>
  );
}
