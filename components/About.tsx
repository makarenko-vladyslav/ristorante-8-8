"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative large circle */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full border border-accent/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                {t('about.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary mb-6 leading-tight">
                {t('about.title')}
              </h2>
              <div className="w-20 h-[2px] bg-accent mb-6" />
              <p className="text-xl text-primary font-medium mb-8">
                {t('about.subtitle')}
              </p>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>{t('about.text1')}</p>
                <p>{t('about.text2')}</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-black/10">
              <p className="font-display italic text-2xl text-primary">
                {t('about.signature')}
              </p>
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img 
                src="https://picsum.photos/seed/arch-studio-about/800/1000" 
                alt="Studio" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            
            {/* Floating accent block */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent rounded-2xl p-8 text-white flex flex-col justify-center shadow-xl shadow-accent/20 hidden md:flex">
              <svg className="w-10 h-10 mb-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 22h20L12 2z" strokeLinejoin="round"/>
                <path d="M12 10v4" strokeLinecap="round"/>
              </svg>
              <span className="font-display font-bold text-3xl">12+</span>
              <span className="text-sm font-medium opacity-90">Years of Excellence</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}