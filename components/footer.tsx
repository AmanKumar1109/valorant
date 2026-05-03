import Link from "next/link";

const footerLinks = [
  {
    title: "GAME",
    links: ["Download", "Game Info", "Agents", "Maps", "Arsenal"],
  },
  {
    title: "ESPORTS",
    links: ["VCT", "VCT Game Changers", "Teams", "Schedule"],
  },
  {
    title: "SUPPORT",
    links: ["Support Home", "Community", "Bug Reports", "Contact Us"],
  },
  {
    title: "COMPANY",
    links: ["About Us", "Careers", "Press", "Security"],
  },
];

const socialLinks = [
  { name: "Twitter", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Discord", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f1923] border-t border-[#2a3a47]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Logo & Socials */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <svg
                className="h-8 w-auto text-[#ff4655]"
                viewBox="0 0 78 28"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.35 14L0 0h4.13l2.46 8.77L9.05 0h4.13L8.83 14H4.35zm19.07 0l-1.72-4.23h-4.53L15.45 14h-4.2l6.88-14h4.54l6.88 14h-4.13zm-4.23-7.65l-1.27 3.42h2.54l-1.27-3.42zM30.47 0h4v10.85h6.25V14H30.47V0zm18.07 14.28c-4.6 0-7.8-2.94-7.8-7.14C40.74 2.94 43.94 0 48.54 0c4.6 0 7.8 2.94 7.8 7.14 0 4.2-3.2 7.14-7.8 7.14zm0-3.37c2.13 0 3.66-1.52 3.66-3.77 0-2.25-1.53-3.77-3.66-3.77-2.13 0-3.66 1.52-3.66 3.77 0 2.25 1.53 3.77 3.66 3.77zM58.26 14V0h8.74c2.8 0 4.7 1.58 4.7 4.06 0 1.65-.85 2.9-2.26 3.5l2.65 6.44H67.7l-2.23-5.6h-3.14V14h-4.07zm4.07-8.68h4.2c.82 0 1.18-.5 1.18-1.2 0-.7-.36-1.2-1.18-1.2h-4.2v2.4z" />
              </svg>
            </Link>
            <p className="mt-4 text-sm text-[#768079]">
              A 5v5 character-based tactical shooter
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-sm font-medium text-[#768079] transition-colors hover:text-[#ff4655]"
                >
                  {social.name.charAt(0)}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-bold tracking-wider text-[#ece8e1]">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-[#768079] transition-colors hover:text-[#ff4655]"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#2a3a47] pt-8 lg:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#768079] lg:justify-start">
            <Link href="#" className="hover:text-[#ff4655]">
              Privacy Notice
            </Link>
            <span className="text-[#2a3a47]">|</span>
            <Link href="#" className="hover:text-[#ff4655]">
              Terms of Service
            </Link>
            <span className="text-[#2a3a47]">|</span>
            <Link href="#" className="hover:text-[#ff4655]">
              Cookie Policy
            </Link>
          </div>
          <p className="text-xs text-[#768079]">
            &copy; 2024 Riot Games, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
