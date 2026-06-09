
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contacts" className="py-24 bg-bg-tint relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info & Map */}
          <div>
            <SectionHeading 
              badge={t("contact.badge")}
              title={t("contact.title")}
            />
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-accent shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Адреса</p>
                  <p className="text-text-muted">{t("contact.address")}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-accent shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Телефон</p>
                  <a href={`tel:${t("contact.phone")}`} className="text-text-muted hover:text-accent transition-colors">{t("contact.phone")}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 text-accent shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="font-bold text-primary mb-1">Години роботи</p>
                  <p className="text-text-muted">{t("contact.hours")}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 w-full rounded-2xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps?q=Київ,+Оболонь&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            id="book"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <h3 className="text-3xl font-display font-bold text-primary mb-8">Забронювати стіл</h3>
            
            {status === "success" ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h4 className="text-2xl font-bold text-primary mb-2">Успішно!</h4>
                <p className="text-text-muted">{t("contact.form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t("contact.form.name")}</label>
                  <input required type="text" className="w-full px-5 py-4 rounded-xl bg-bg-tint border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="Іван Іванов" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2">{t("contact.form.phone")}</label>
                  <input required type="tel" className="w-full px-5 py-4 rounded-xl bg-bg-tint border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" placeholder="+380 00 000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t("contact.form.date")}</label>
                    <input required type="datetime-local" className="w-full px-5 py-4 rounded-xl bg-bg-tint border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">{t("contact.form.guests")}</label>
                    <select className="w-full px-5 py-4 rounded-xl bg-bg-tint border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} осіб</option>)}
                      <option value="more">Більше (Банкет)</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20 disabled:opacity-70 flex justify-center items-center h-14"
                >
                  {status === "loading" ? (
                    <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : t("contact.form.submit")}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
