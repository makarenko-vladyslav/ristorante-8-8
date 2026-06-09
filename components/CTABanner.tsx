"use client";
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 bg-primary">
          {/* Background image with overlay */}
          <img 
            src="https://picsum.photos/seed/arch-cta-bg/1200/600" 
            alt="CTA Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-20 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
              {t('ctaBanner.title')}
            </h2>
            <p className="text-white/80 text-lg mb-10">
              {t('ctaBanner.subtitle')}
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-accent text-white rounded-full font-semibold transition-all hover:bg-accent-light hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              {t('ctaBanner.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}