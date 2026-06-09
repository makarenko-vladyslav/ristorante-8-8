"use client";
import { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const { t } = useLocale();
  const items = t('faq.items') as Array<{question: string, answer: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-bg-tint relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('faq.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
            {t('faq.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-text-muted text-lg">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-sm border border-black/5 overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-display font-bold text-lg text-primary pr-8">
                  {item.question}
                </span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-accent text-white' : 'bg-bg-light text-primary'}`}>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-muted leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}