"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "VILLAGE", href: "#", hasDropdown: true },
  { name: "SHINOBI", href: "#", hasDropdown: true },
  { name: "NINJUTSU", href: "#", hasDropdown: false },
  { name: "CLANS", href: "#", hasDropdown: false },
  { name: "MISSIONS", href: "#", hasDropdown: true },
  { name: "RANKINGS", href: "#", hasDropdown: true },
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
        scrolled ? "bg-[#111] border-b border-[#ff6a00]/20 shadow-[0_4px_30px_rgba(255,106,0,0.1)]" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="h-20 px-4 md:px-8 flex items-center justify-between max-w-[100rem] mx-auto">
        {/* Left: Logos */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center text-[#ff6a00] hover:text-white transition-colors group">
            {/* Shuriken style logo */}
            <svg viewBox="0 0 100 100" className="w-8 h-8 fill-current group-hover:rotate-90 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
            </svg>
          </Link>
          
          <div className="w-[1px] h-8 bg-white/20"></div>

          <Link href="/" className="flex items-center">
            <span className="text-2xl font-black italic tracking-widest text-white uppercase drop-shadow-[0_0_10px_rgba(255,106,0,0.5)]">
              SHINOBI<span className="text-[#ff6a00]">STRIKE</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-[13px] font-bold tracking-widest text-white/90 transition-all hover:text-[#ff6a00] hover:-translate-y-0.5 px-3 py-2"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180 group-hover:text-[#ff6a00]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: Icons & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-white/90 hover:text-[#ff6a00] transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-white/90 hover:text-[#ff6a00] transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button className="relative group ml-4 overflow-hidden rounded-sm skew-x-[-10deg]">
            <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
            <div className="relative bg-[#ff6a00] text-white group-hover:text-[#111] px-6 py-2.5 text-[13px] font-black tracking-wider transition-colors duration-300 skew-x-[10deg] block">
              PLAY NOW
            </div>
            {/* Energy glow effect */}
            <div className="absolute inset-0 shadow-[0_0_15px_rgba(255,106,0,0.8)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#ff6a00]" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-20 left-0 right-0 bg-[#111] border-t border-[#ff6a00]/30 shadow-2xl">
          <div className="flex flex-col p-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between p-4 text-sm font-bold tracking-widest text-white/90 border-b border-white/5 hover:text-[#ff6a00]"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
            <div className="p-4 mt-4">
              <button className="w-full bg-[#ff6a00] text-white px-6 py-4 text-sm font-black tracking-wider rounded-sm skew-x-[-10deg]">
                <span className="skew-x-[10deg] block">PLAY NOW</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
