"use client";
import { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-primary text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('beforeAfter.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-white">
            {t('beforeAfter.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mb-6" />
          <p className="text-white/70 text-lg">
            {t('beforeAfter.subtitle')}
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-black/50"
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onMouseMove={handleMouseMove}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <img 
            src={t('beforeAfter.afterImage')} 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
            {t('beforeAfter.afterLabel')}
          </div>

          {/* Before Image (Foreground, clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={t('beforeAfter.beforeImage')} 
              alt="Before" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: `${100 / (sliderPosition / 100)}%` }}
            />
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
              {t('beforeAfter.beforeLabel')}
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 9l-4 3 4 3M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}