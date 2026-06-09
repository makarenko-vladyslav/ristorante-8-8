"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Process() {
  const { t } = useLocale();
  const steps = t('process.steps') as Array<{title: string, desc: string}>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('process.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
            {t('process.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mb-6" />
          <p className="text-text-muted text-lg">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-accent/20" />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
                >
                  {/* Center Circle */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-bg-light border-4 border-accent flex items-center justify-center z-10 shadow-lg shadow-accent/20">
                    <span className="font-display font-bold text-primary">{i + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-primary/5 border border-black/5 hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-display font-bold text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}