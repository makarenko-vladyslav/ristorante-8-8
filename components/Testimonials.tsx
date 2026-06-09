"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as Array<{name: string, role: string, quote: string, image: string, rating: number}>;
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          {t('testimonials.badge')}
        </span>
        <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
          {t('testimonials.title')}
        </h2>
        <div className="w-20 h-[2px] bg-accent mb-6" />
        <p className="text-text-muted text-lg max-w-2xl">
          {t('testimonials.subtitle')}
        </p>
      </div>

      <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] cursor-grab active:cursor-grabbing">
        <motion.div 
          ref={carouselRef}
          className="overflow-hidden"
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6 w-max pr-6"
          >
            {items.map((item, i) => (
              <div 
                key={i} 
                className="w-[350px] md:w-[450px] bg-bg-light p-8 rounded-3xl shadow-lg shadow-primary/5 border border-black/5 flex flex-col"
              >
                <div className="flex gap-1 mb-6 text-accent">
                  {[...Array(item.rating)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-text-main text-lg italic leading-relaxed mb-8 flex-grow">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full object-cover shadow-md" />
                  <div>
                    <h4 className="font-display font-bold text-primary text-lg">{item.name}</h4>
                    <p className="text-sm text-text-muted">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}