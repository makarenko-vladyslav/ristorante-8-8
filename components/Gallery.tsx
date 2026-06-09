"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as Array<{url: string, alt: string}>;

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('gallery.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
            {t('gallery.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mb-6" />
          <p className="text-text-muted text-lg">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-md shadow-primary/10 cursor-pointer"
            >
              <img 
                src={item.url} 
                alt={item.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}