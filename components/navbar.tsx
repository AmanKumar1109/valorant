"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${isScrolled ? "bg-bg-base/80 border-b border-primary/20 shadow-[0_4px_30px_rgba(193,103,255,0.1)]" : "bg-transparent"}`}
    >
      <div className="h-20 px-6 lg:px-12 flex items-center justify-between max-w-[100rem] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <span className="text-3xl font-display font-black tracking-widest text-text-primary uppercase group-hover:text-primary transition-colors">
            PROVENANCE<span className="text-primary group-hover:text-accent transition-colors">6.0</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-mono font-medium text-text-secondary hover:text-primary transition-colors uppercase tracking-widest relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/register"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-bg-base font-display font-bold uppercase tracking-widest text-sm hover:from-accent hover:to-primary hover:shadow-[0_0_20px_rgba(193,103,255,0.5)] transition-all duration-300"
            style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
          >
            Register Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex flex-col bg-bg-base/90"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-primary hover:text-primary transition-colors"
              >
                <X className="w-10 h-10" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-display font-bold text-text-primary hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-bg-base font-display font-bold uppercase tracking-widest text-xl hover:shadow-[0_0_20px_rgba(193,103,255,0.5)] transition-all"
                  style={{ clipPath: "polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)" }}
                >
                  Register Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
