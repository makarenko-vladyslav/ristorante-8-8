"use client";
import { useLocale } from '@/lib/i18n';
import { useState } from 'react';

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('video.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
            {t('video.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mx-auto mb-6" />
          <p className="text-white/70 text-lg">
            {t('video.subtitle')}
          </p>
        </div>

        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-black/50 bg-black group cursor-pointer" onClick={() => setIsPlaying(true)}>
          {!isPlaying ? (
            <>
              <img 
                src={t('video.posterUrl')} 
                alt="Video Poster" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/90 flex items-center justify-center text-white shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 ml-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <video 
              className="w-full h-full object-cover"
              controls 
              autoPlay 
              src="https://www.w3schools.com/html/mov_bbb.mp4" 
            />
          )}
        </div>

      </div>
    </section>
  );
}