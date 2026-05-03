"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "GAME", href: "#", hasDropdown: true },
  { name: "CHAMPIONS", href: "#", hasDropdown: true },
  { name: "MEDIA", href: "#", hasDropdown: true },
  { name: "NEWS", href: "#", hasDropdown: false },
  { name: "LEADERBOARDS", href: "#", hasDropdown: false },
  { name: "SUPPORT", href: "#", hasDropdown: false },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f1923]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="h-8 w-auto text-[#ff4655]"
              viewBox="0 0 78 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.35 14L0 0h4.13l2.46 8.77L9.05 0h4.13L8.83 14H4.35zm19.07 0l-1.72-4.23h-4.53L15.45 14h-4.2l6.88-14h4.54l6.88 14h-4.13zm-4.23-7.65l-1.27 3.42h2.54l-1.27-3.42zM30.47 0h4v10.85h6.25V14H30.47V0zm18.07 14.28c-4.6 0-7.8-2.94-7.8-7.14C40.74 2.94 43.94 0 48.54 0c4.6 0 7.8 2.94 7.8 7.14 0 4.2-3.2 7.14-7.8 7.14zm0-3.37c2.13 0 3.66-1.52 3.66-3.77 0-2.25-1.53-3.77-3.66-3.77-2.13 0-3.66 1.52-3.66 3.77 0 2.25 1.53 3.77 3.66 3.77zM58.26 14V0h8.74c2.8 0 4.7 1.58 4.7 4.06 0 1.65-.85 2.9-2.26 3.5l2.65 6.44H67.7l-2.23-5.6h-3.14V14h-4.07zm4.07-8.68h4.2c.82 0 1.18-.5 1.18-1.2 0-.7-.36-1.2-1.18-1.2h-4.2v2.4zm19.48 8.68l-1.73-4.23h-4.53L73.83 14h-4.2l6.88-14h4.54l6.88 14h-4.12zm-4.24-7.65l-1.27 3.42h2.54l-1.27-3.42zM91.05 0h3.99v14h-3.99V0zm10.25 0h3.99l6.13 8.02V0h3.99v14h-3.99l-6.13-8.02V14h-3.99V0z" />
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1 text-sm font-semibold tracking-wider text-[#ece8e1] transition-colors hover:text-[#ff4655]"
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <button className="bg-[#ff4655] px-6 py-2.5 text-sm font-bold tracking-wider text-white transition-all hover:bg-[#ff4655]/90 hover:scale-105">
            PLAY FREE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#ece8e1]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f1923] border-t border-[#2a3a47]">
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between text-sm font-semibold tracking-wider text-[#ece8e1]"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
            <button className="w-full bg-[#ff4655] px-6 py-3 text-sm font-bold tracking-wider text-white">
              PLAY FREE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
