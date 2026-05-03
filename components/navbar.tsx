"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Events", href: "#events" },
  { name: "Clubs", href: "#clubs" },
  { name: "Gallery", href: "#gallery" },
  { name: "Schedule", href: "#schedule" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backdropFilter: "blur(12px)",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          background: isScrolled ? "rgba(5,5,5,0.85)" : "transparent",
          borderBottom: isScrolled ? "1px solid rgba(193,103,255,0.15)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 4px 30px rgba(193,103,255,0.08)" : "none",
        }}
      >
        <div className="h-20 px-6 lg:px-12 flex items-center justify-between max-w-[100rem] mx-auto">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span
              className="text-2xl font-black tracking-widest uppercase"
              style={{ color: "#fff", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLSpanElement).style.color = "#C167FF"}
              onMouseLeave={(e) => (e.currentTarget as HTMLSpanElement).style.color = "#fff"}
            >
              PROVENANCE<span style={{ color: "#C167FF" }}>6.0</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold uppercase tracking-widest group"
                style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#fff"}
                onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"}
              >
                {link.name}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full"
                  style={{ background: "#C167FF", transition: "width 0.25s ease" }}
                />
              </Link>
            ))}
            <Link
              href="/register"
              className="ml-4 px-6 py-2.5 text-sm font-black uppercase tracking-widest"
              style={{
                clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
                background: "linear-gradient(90deg, #C167FF, #FF66FF)",
                color: "#050505",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            style={{ color: "#fff", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className="fixed inset-0 z-[60] flex flex-col md:hidden"
        style={{
          background: "rgba(5,5,5,0.97)",
          backdropFilter: "blur(20px)",
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "all" : "none",
          transition: "opacity 0.25s ease",
        }}
      >
        <div className="flex justify-end p-6">
          <button
            style={{ color: "#fff", background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-10 h-10" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.7)", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "#C167FF"}
              onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)"}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-10 py-4 text-xl font-black uppercase tracking-widest"
            style={{
              clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)",
              background: "linear-gradient(90deg, #C167FF, #FF66FF)",
              color: "#050505",
            }}
          >
            Register Now
          </Link>
        </nav>
      </div>
    </>
  );
}