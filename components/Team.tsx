
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Team() {
  const { t } = useLocale();
  const items = t("team.items") as { name: string; role: string; bio: string; imageUrl: string }[];

  return (
    <section className="py-24 bg-bg-tint">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("team.badge")}
          title={t("team.title")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {items.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
            >
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-8">
                <p className="text-accent font-bold text-sm mb-1 uppercase tracking-wider">{member.role}</p>
                <h3 className="text-2xl font-display font-bold text-primary mb-4">{member.name}</h3>
                <p className="text-text-muted">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
