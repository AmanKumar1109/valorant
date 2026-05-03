import Link from "next/link";

export function Footer() {
  const footerLinks = {
    VALORANT: ["Download", "Patch Notes", "News", "Media", "Support"],
    GAME: ["Agents", "Maps", "Arsenal", "Premier"],
    ESPORTS: ["VCT", "Challengers", "Game Changers", "Standings"],
    SUPPORT: ["Specs", "Submit a Ticket", "Privacy Policy", "Terms of Service"],
    SOCIALS: ["Twitter", "Instagram", "YouTube", "Twitch", "Discord"],
  };

  return (
    <footer className="relative z-0 bg-[#111111] text-[#ece8e1] pt-32 pb-12 -mt-[60px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h2 className="text-[#ff4655] font-black tracking-tighter text-3xl uppercase">Valorant</h2>
            </Link>
            <p className="text-sm text-[#ece8e1]/50 max-w-xs leading-relaxed">
              A 5v5 character-based tactical shooter. Blend your style and experience on a global, competitive stage.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-sm font-bold tracking-widest text-white uppercase mb-6">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#" 
                      className="text-sm text-[#ece8e1]/60 hover:text-[#ff4655] transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#2a3a47]/50 gap-4 text-xs font-semibold tracking-wider text-[#ece8e1]/40">
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">PRIVACY NOTICE</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
          </div>
          <p>&copy; 2026 Riot Games, Inc. Riot Games, Valorant, and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
