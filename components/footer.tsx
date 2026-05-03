import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  const quickLinks = ["Events", "Schedule", "Gallery", "Register"];
  const socials = [
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer style={{ backgroundColor: "var(--color-bg-base)", borderTop: "1px solid var(--color-border-subtle)" }} className="pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-black tracking-widest uppercase" style={{ color: "var(--color-text-primary)" }}>
                PROVENANCE<span style={{ color: "var(--color-primary)" }}>6.0</span>
              </span>
            </Link>
            <p className="text-lg font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-text-primary)" }}>
              Infinite Realms
            </p>
            <p className="text-sm mb-8 uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
              Helix v2.0 x RVSCET
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
              Contact:{" "}
              <a href="mailto:helix@rvscet.ac.in" className="transition-colors hover:opacity-80" style={{ color: "var(--color-primary)" }}>
                helix@rvscet.ac.in
              </a>
            </p>
            <div className="flex items-center gap-4">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                  style={{ border: "1px solid var(--color-border-subtle)", color: "var(--color-text-secondary)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: "var(--color-text-primary)" }}>Quick Links</h4>
            <nav className="flex flex-col gap-4 items-start md:items-end">
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm font-medium uppercase tracking-widest transition-colors hover:opacity-80"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            &copy; 2026 Helix v2.0, RVSCET. Built by the Web Team.
          </p>
          <div className="flex gap-4">
            <div className="w-1 h-1 rounded-full" style={{ background: "rgba(193,103,255,0.5)" }}></div>
            <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,102,255,0.5)" }}></div>
            <div className="w-1 h-1 rounded-full" style={{ background: "rgba(159,138,255,0.5)" }}></div>
          </div>
        </div>
      </div>
    </footer>
  );
}