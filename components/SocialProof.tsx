
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function SocialProof() {
  const { t } = useLocale();
  const items = t("socialProof.items") as string[];

  return (
    <section className="py-10 bg-primary border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <p className="text-white/60 font-medium text-sm whitespace-nowrap uppercase tracking-wider">
          {t("socialProof.title")}
        </p>
        
        {/* Marquee */}
        <div className="relative flex overflow-x-hidden w-full mask-image-linear">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex gap-16 whitespace-nowrap items-center"
          >
            {[...items, ...items, ...items].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/50 font-display font-bold text-xl tracking-wide hover:text-white transition-colors">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
