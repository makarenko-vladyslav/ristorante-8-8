"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function MenuCategories() {
  const { t } = useLocale();
  const items = t("categories.items") as { id: string; title: string; description: string; imageUrl: string }[];

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("categories.badge")}
          title={t("categories.title")}
        />

        {/* Pattern 6: Editorial Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Large Item */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative h-[600px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl"
          >
            <img 
              src={items[0].imageUrl} 
              alt={items[0].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-3 drop-shadow-lg">{items[0].title}</h3>
              <p className="text-white/90 mb-6 drop-shadow-md font-medium">{items[0].description}</p>
              <span className="inline-flex items-center gap-2 text-accent font-bold group-hover:text-white transition-colors drop-shadow-md">
                Детальніше <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </motion.div>

          {/* Stacked Smaller Items */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {items.slice(1).map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-text-muted mb-4 line-clamp-2">{item.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Переглянути <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
