"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{title: string, desc: string, image: string}>;

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('services.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
            {t('services.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mb-6" />
          <p className="text-text-muted text-lg">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Immersive Photo Cards (Pattern 10) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[500px] rounded-2xl overflow-hidden shadow-lg shadow-primary/5 cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Floating Glass Bar */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-display font-medium text-white">
                    {item.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors group-hover:bg-accent">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}