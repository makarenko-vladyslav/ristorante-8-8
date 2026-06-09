"use client";
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  
  // Dummy high-end brand names
  const brands = ["VOGUE LIVING", "ARCHITECTURAL DIGEST", "ELLE DECOR", "DEZEEN", "WALLPAPER*", "FRAME"];

  return (
    <section className="py-12 bg-white border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-semibold tracking-widest text-text-muted uppercase">
          {t('socialProof.title')}
        </p>
      </div>
      
      <div className="relative flex w-full">
        {/* Gradient masks for smooth fade at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* Double array for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="mx-12 text-2xl font-display font-bold text-black/20 tracking-widest uppercase transition-colors hover:text-black/40 cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}