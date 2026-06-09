
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function CtaBanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-primary shadow-2xl"
        >
          {/* Background Image with heavy overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://picsum.photos/seed/resto-cta-bg/1200/600" 
              alt="Background" 
              className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50" />
          </div>

          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-balance">
                {t("ctaBanner.title")}
              </h2>
              <p className="text-xl text-white/80 text-balance">
                {t("ctaBanner.subtitle")}
              </p>
            </div>
            <div className="shrink-0">
              <a href="#book" className="inline-block bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent-hover transition-all hover:scale-105 shadow-[0_0_40px_hsl(355_75%_45%/0.4)] whitespace-nowrap">
                {t("ctaBanner.button")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
