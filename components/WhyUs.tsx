"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as Array<{title: string, desc: string}>;

  // Custom SVGs for architectural advantages
  const icons = [
    <svg key="1" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 12h3v8h14v-8h3L12 2z" strokeLinejoin="round"/><path d="M9 20v-6h6v6" strokeLinejoin="round"/></svg>,
    <svg key="2" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v8M8 12h8" strokeLinecap="round"/></svg>,
    <svg key="3" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9" strokeLinecap="round"/></svg>,
    <svg key="4" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinejoin="round"/></svg>
  ];

  return (
    <section className="py-24 bg-bg-tint relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('whyUs.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
            {t('whyUs.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mb-6" />
          <p className="text-text-muted text-lg">
            {t('whyUs.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-primary/5 border border-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-shadow group"
            >
              <div className="w-14 h-14 rounded-full bg-bg-tint flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {icons[i % icons.length]}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}