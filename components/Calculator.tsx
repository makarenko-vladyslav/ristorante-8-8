"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Calculator() {
  const { t } = useLocale();
  const packages = t("banquets.packages") as { name: string; price: string; features: string[] }[];

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading 
          badge={t("banquets.badge")}
          title={t("banquets.title")}
          subtitle={t("banquets.subtitle")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col"
            >
              <h3 className="text-2xl font-display font-bold text-primary mb-2">{pkg.name}</h3>
              <div className="text-accent font-bold text-xl mb-6">{pkg.price}</div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-text-muted">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contacts" className="block w-full text-center bg-bg-tint text-primary py-3 rounded-xl font-bold hover:bg-accent hover:text-white transition-colors">
                {t("banquets.cta")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
