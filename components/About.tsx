"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { t } = useLocale();
  const stats = t("about.stats") as { value: string; label: string }[];

  return (
    <section id="about" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative SVG */}
      <svg className="absolute top-0 right-0 w-96 h-96 text-bg-tint -translate-y-1/2 translate-x-1/3 z-0" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="50" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <SectionHeading 
              badge={t("about.badge")}
              title={t("about.title")}
            />
            <p className="text-lg text-text-muted mb-10 leading-relaxed">
              {t("about.description")}
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-accent pl-4"
                >
                  <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-text-muted font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={t("about.imageUrl")} 
              alt="Restaurant Kitchen" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl max-w-[250px] shadow-xl border border-gray-100">
              <svg className="w-8 h-8 text-accent mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <p className="font-bold text-primary mb-1">Гарантія якості</p>
              <p className="text-sm text-text-muted">Кожна страва проходить контроль бренд-шефа.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
