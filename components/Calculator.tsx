"use client";
import { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';

export default function Calculator() {
  const { t } = useLocale();
  
  const [area, setArea] = useState(100);
  const [type, setType] = useState<keyof typeof pricing.basePrices>('residential');
  const [style, setStyle] = useState<keyof typeof pricing.multipliers>('minimalism');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const basePrice = pricing.basePrices[type];
    const multiplier = pricing.multipliers[style];
    setTotal(Math.round(area * basePrice * multiplier));
  }, [area, type, style]);

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-tint rounded-l-[100px] opacity-50 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Side */}
          <div>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              {t('calculator.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
              {t('calculator.title')}
            </h2>
            <div className="w-20 h-[2px] bg-accent mb-6" />
            <p className="text-text-muted text-lg mb-8">
              {t('calculator.subtitle')}
            </p>
            
            <div className="bg-primary text-white p-8 rounded-2xl shadow-xl shadow-primary/20">
              <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
                {t('calculator.resultLabel')}
              </p>
              <div className="text-5xl font-display font-bold mb-6 flex items-baseline gap-2">
                <span>{total.toLocaleString()}</span>
                <span className="text-2xl text-accent">{pricing.currency}</span>
              </div>
              <a 
                href="#contact" 
                className="block w-full text-center py-4 bg-accent text-white rounded-xl font-semibold hover:bg-accent-light transition-colors"
              >
                {t('calculator.cta')}
              </a>
            </div>
          </div>

          {/* Controls Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl shadow-primary/10 border border-black/5">
            
            {/* Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-4">
                {t('calculator.typeLabel')}
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(pricing.basePrices) as Array<keyof typeof pricing.basePrices>).map((tKey) => (
                  <button
                    key={tKey}
                    onClick={() => setType(tKey)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      type === tKey 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-bg-light text-text-muted hover:bg-bg-tint'
                    }`}
                  >
                    {t(`calculator.types.${tKey}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Style Selection */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-4">
                {t('calculator.styleLabel')}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(pricing.multipliers) as Array<keyof typeof pricing.multipliers>).map((sKey) => (
                  <button
                    key={sKey}
                    onClick={() => setStyle(sKey)}
                    className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                      style === sKey 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-bg-light text-text-muted hover:bg-bg-tint'
                    }`}
                  >
                    {t(`calculator.styles.${sKey}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="block text-sm font-bold text-primary uppercase tracking-wider">
                  {t('calculator.areaLabel')}
                </label>
                <span className="text-2xl font-display font-bold text-accent">{area} м²</span>
              </div>
              <input 
                type="range" 
                min="30" 
                max="500" 
                step="10"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-bg-tint rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>30 м²</span>
                <span>500 м²</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}