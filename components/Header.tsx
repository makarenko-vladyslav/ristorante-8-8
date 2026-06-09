
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.menu"), href: "#menu" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.gallery"), href: "#gallery" },
    { name: t("nav.reviews"), href: "#reviews" },
    { name: t("nav.contacts"), href: "#contacts" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 z-50 relative ${scrolled ? "text-primary" : "text-white"}`}>
          <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6ZM16 24C11.582 24 8 20.418 8 16C8 11.582 11.582 8 16 8C20.418 8 24 11.582 24 16C24 20.418 20.418 24 16 24Z" />
            <path d="M16 10C12.686 10 10 12.686 10 16C10 19.314 12.686 22 16 22C19.314 22 22 19.314 22 16C22 12.686 19.314 10 16 10Z" />
            <circle cx="16" cy="16" r="2" fill="currentColor" />
          </svg>
          <span className="font-display font-bold text-xl tracking-tight">8/8</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-text-main" : "text-white/90"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#book"
            className="bg-accent text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
          >
            {t("nav.book")}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 relative p-2 ${scrolled || mobileMenuOpen ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl pt-24 pb-8 px-6 flex flex-col gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-primary border-b border-gray-100 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-accent text-white text-center px-6 py-4 rounded-xl font-bold mt-4"
              >
                {t("nav.book")}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
