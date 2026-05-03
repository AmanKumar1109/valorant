"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "GAME", href: "#", hasDropdown: true },
  { name: "CHAMPIONS", href: "#", hasDropdown: true },
  { name: "NEWS", href: "#", hasDropdown: false },
  { name: "PATCH NOTES", href: "#", hasDropdown: false },
  { name: "DISCOVER", href: "#", hasDropdown: true },
  { name: "ESPORTS", href: "#", hasDropdown: true },
  { name: "UNIVERSE", href: "#", hasDropdown: false },
  { name: "SHOP", href: "#", hasDropdown: false },
  { name: "SUPPORT", href: "#", hasDropdown: false },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#111111] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="h-20 px-4 md:px-8 flex items-center justify-between max-w-[100rem] mx-auto">
        {/* Left: Logos */}
        <div className="flex items-center gap-6">
          {/* Riot Logo Placeholder */}
          <Link href="/" className="flex items-center text-white hover:text-[#ff4655] transition-colors">
            <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 90 C27.9 90 10 72.1 10 50 C10 27.9 27.9 10 50 10 C72.1 10 90 27.9 90 50 C90 72.1 72.1 90 50 90 Z M30 30 L45 30 L45 70 L30 70 Z M55 30 L70 30 C75.5 30 80 34.5 80 40 C80 45.5 75.5 50 70 50 L55 50 Z M55 55 L70 55 C75.5 55 80 59.5 80 65 C80 70.5 75.5 75 70 75 L55 75 Z" />
            </svg>
          </Link>
          
          <div className="w-[1px] h-8 bg-white/20"></div>

          {/* Valorant Logo */}
          <Link href="/" className="flex items-center">
            <svg
              className="h-6 w-auto text-white hover:text-[#ff4655] transition-colors"
              viewBox="0 0 78 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.35 14L0 0h4.13l2.46 8.77L9.05 0h4.13L8.83 14H4.35zm19.07 0l-1.72-4.23h-4.53L15.45 14h-4.2l6.88-14h4.54l6.88 14h-4.13zm-4.23-7.65l-1.27 3.42h2.54l-1.27-3.42zM30.47 0h4v10.85h6.25V14H30.47V0zm18.07 14.28c-4.6 0-7.8-2.94-7.8-7.14C40.74 2.94 43.94 0 48.54 0c4.6 0 7.8 2.94 7.8 7.14 0 4.2-3.2 7.14-7.8 7.14zm0-3.37c2.13 0 3.66-1.52 3.66-3.77 0-2.25-1.53-3.77-3.66-3.77-2.13 0-3.66 1.52-3.66 3.77 0 2.25 1.53 3.77 3.66 3.77zM58.26 14V0h8.74c2.8 0 4.7 1.58 4.7 4.06 0 1.65-.85 2.9-2.26 3.5l2.65 6.44H67.7l-2.23-5.6h-3.14V14h-4.07zm4.07-8.68h4.2c.82 0 1.18-.5 1.18-1.2 0-.7-.36-1.2-1.18-1.2h-4.2v2.4zm19.48 8.68l-1.73-4.23h-4.53L73.83 14h-4.2l6.88-14h4.54l6.88 14h-4.12zm-4.24-7.65l-1.27 3.42h2.54l-1.27-3.42zM91.05 0h3.99v14h-3.99V0zm10.25 0h3.99l6.13 8.02V0h3.99v14h-3.99l-6.13-8.02V14h-3.99V0z" />
            </svg>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-[13px] font-bold tracking-widest text-white/90 transition-colors hover:text-white hover:bg-white/10 px-3 py-2 rounded-sm"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Icons & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button className="relative group ml-4">
            <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 rounded-sm"></div>
            <div className="relative bg-[#ff4655] text-white group-hover:text-[#111] px-6 py-2.5 text-[13px] font-bold tracking-wider rounded-sm transition-colors duration-300">
              PLAY NOW
            </div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 right-0 bg-[#111111] border-t border-white/10 shadow-2xl">
          <div className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between p-4 text-sm font-bold tracking-widest text-white/90 border-b border-white/5 hover:bg-white/5"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
            <div className="p-4 mt-4">
              <button className="w-full bg-[#ff4655] text-white px-6 py-4 text-sm font-bold tracking-wider rounded-sm">
                PLAY NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
