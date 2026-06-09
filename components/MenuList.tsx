
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function MenuList() {
  const { t } = useLocale();
  const items = t("menuList.items") as { name: string; desc: string; price: string }[];

  return (
    <section id="menu" className="py-24 bg-bg-light">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          badge={t("menuList.badge")}
          title={t("menuList.title")}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">{item.name}</h4>
                <div className="flex-grow border-b border-dotted border-gray-300 mx-4 relative top-[-6px]"></div>
                <span className="text-xl font-bold text-primary whitespace-nowrap">{item.price}</span>
              </div>
              <p className="text-text-muted text-sm pr-16">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            {t("menuList.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
