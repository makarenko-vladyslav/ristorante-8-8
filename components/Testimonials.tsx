"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  const { t } = useLocale();
  const items = t("testimonials.items") as { name: string; role: string; text: string; rating: number; avatar: string }[];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="reviews" ref={containerRef} className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          light
        />
      </div>

      <div className="mt-10 flex overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 px-6 w-max">
          {items.map((item, i) => (
            <div 
              key={i}
              className="w-[350px] md:w-[450px] shrink-0 bg-primary-light border border-white/10 p-8 rounded-3xl shadow-xl"
            >
              <div className="flex gap-1 text-accent mb-6">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className={`w-5 h-5 ${idx < item.rating ? "fill-current" : "fill-white/20"}`} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-8 italic font-serif">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-accent" />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-white/50">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
