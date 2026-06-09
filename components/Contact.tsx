"use client";
import { useLocale } from '@/lib/i18n';
import { useState } from 'react';

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info & Map */}
          <div>
            <div className="mb-12">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                {t('contact.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
                {t('contact.title')}
              </h2>
              <div className="w-20 h-[2px] bg-accent mb-6" />
              <p className="text-text-muted text-lg">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Адреса</p>
                  <p className="text-text-muted">{t('contact.address')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Телефон</p>
                  <a href={`tel:${t('contact.phone')}`} className="text-text-muted hover:text-accent transition-colors">{t('contact.phone')}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-accent shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Email</p>
                  <a href={`mailto:${t('contact.email')}`} className="text-text-muted hover:text-accent transition-colors">{t('contact.email')}</a>
                </div>
              </div>
            </div>

            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg shadow-primary/10">
              <iframe 
                src="https://www.google.com/maps?q=Kyiv,Khreshchatyk,15&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5 border border-black/5">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                  <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Успішно!</h3>
                <p className="text-text-muted">{t('contact.formSuccess')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                    {t('contact.formName')}
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 bg-bg-light border border-black/5 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                    {t('contact.formPhone')}
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-5 py-4 bg-bg-light border border-black/5 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary uppercase tracking-wider mb-2">
                    {t('contact.formMessage')}
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-5 py-4 bg-bg-light border border-black/5 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary-light transition-colors disabled:opacity-70 flex justify-center"
                >
                  {status === 'loading' ? (
                    <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : t('contact.formSubmit')}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}