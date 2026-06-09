"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.calculator'), href: '#calculator' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg-light/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-3 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
          <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M16 6L6 26H10.5L16 15L21.5 26H26L16 6Z" />
            <path d="M11 20H21" strokeLinecap="round" />
          </svg>
          <span className="font-display font-bold text-2xl tracking-wide">Lumina</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                scrolled ? 'text-text-main' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <button 
              onClick={() => setLocale('uk')} 
              className={`transition-colors ${locale === 'uk' ? 'text-accent' : scrolled ? 'text-text-muted hover:text-primary' : 'text-white/60 hover:text-white'}`}
            >
              UK
            </button>
            <span className={scrolled ? 'text-text-muted' : 'text-white/40'}>/</span>
            <button 
              onClick={() => setLocale('en')} 
              className={`transition-colors ${locale === 'en' ? 'text-accent' : scrolled ? 'text-text-muted hover:text-primary' : 'text-white/60 hover:text-white'}`}
            >
              EN
            </button>
          </div>
          <a 
            href="#contact" 
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              scrolled 
                ? 'bg-primary text-white hover:bg-accent hover:shadow-lg hover:shadow-accent/20' 
                : 'bg-white text-primary hover:bg-accent hover:text-white'
            }`}
          >
            {t('nav.contact')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-light shadow-xl border-t border-black/5 p-6 flex flex-col gap-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-primary hover:text-accent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="text-lg font-medium text-primary hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
            </nav>
            <div className="flex gap-4 pt-4 border-t border-black/5">
              <button 
                onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} 
                className={`font-medium ${locale === 'uk' ? 'text-accent' : 'text-text-muted'}`}
              >
                Українська
              </button>
              <button 
                onClick={() => { setLocale('en'); setMobileMenuOpen(false); }} 
                className={`font-medium ${locale === 'en' ? 'text-accent' : 'text-text-muted'}`}
              >
                English
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}