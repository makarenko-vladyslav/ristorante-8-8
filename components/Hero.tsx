"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLocale();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={t("hero.imageUrl")} 
          alt="Restaurant Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90 mix-blend-multiply" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-white/90 text-sm font-medium mb-8 border border-white/10"
        >
          {t("hero.badge")}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tight text-balance"
        >
          {t("hero.title").split('. ').map((part: string, i: number) => (
            <span key={i} className={i === 0 ? "block mb-2" : "block text-accent italic font-serif"}>
              {part}{i === 0 ? '.' : ''}
            </span>
          ))}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 text-balance"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#book" className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-hover transition-all hover:scale-105 shadow-[0_0_30px_hsl(355_75%_45%/0.4)]">
            {t("hero.ctaPrimary")}
          </a>
          <a href="#menu" className="bg-primary-light border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            {t("hero.ctaSecondary")}
          </a>
        </motion.div>
      </div>

      {/* Floating Rating Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 right-8 hidden lg:flex items-center gap-4 bg-primary-light border border-white/10 p-4 rounded-2xl z-20 shadow-2xl"
      >
        <div className="flex flex-col items-center justify-center bg-accent text-white w-14 h-14 rounded-full font-bold text-xl">
          {t("hero.rating")}
        </div>
        <div>
          <div className="flex gap-1 text-accent mb-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <p className="text-white/80 text-sm font-medium">{t("hero.ratingText")}</p>
        </div>
      </motion.div>
    </section>
  );
}
