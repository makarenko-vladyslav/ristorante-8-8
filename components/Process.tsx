
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Process() {
  const { t } = useLocale();
  const steps = t("process.steps") as { num: string; title: string; description: string }[];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("process.badge")}
          title={t("process.title")}
          light
        />

        <div className="relative mt-16">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-white/10 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-accent flex items-center justify-center text-xl font-display font-bold text-accent mb-6 relative z-10 shadow-[0_0_20px_hsl(355_75%_45%/0.2)]">
                  {step.num}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
