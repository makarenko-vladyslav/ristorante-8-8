"use client";
import { useLocale } from '@/lib/i18n';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = t('hero.stats') as Array<{value: string, label: string}>;

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://picsum.photos/seed/luxury-architecture-hero/1920/1080" 
          alt="Premium Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/90 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-8">
            {t('hero.badge')}
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[1.1] mb-6">
            {t('hero.title')} <br />
            <span className="italic font-light text-accent">{t('hero.titleItalic')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-accent text-white rounded-full font-semibold text-center transition-all hover:bg-accent-light hover:scale-105 hover:shadow-lg hover:shadow-accent/30"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold text-center transition-all hover:bg-white/20"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-12 right-6 md:right-12 flex gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-end">
              <span className="text-4xl md:text-5xl font-display font-bold text-white">{stat.value}</span>
              <span className="text-sm text-white/60 tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-float" />
      </div>
    </section>
  );
}