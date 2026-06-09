
"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";

export default function VideoSection() {
  const { t } = useLocale();

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">{t("video.badge")}</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">{t("video.title")}</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl group cursor-pointer"
        >
          <img 
            src={t("video.posterUrl")} 
            alt="Video Poster" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/30 transition-colors" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center pl-1 shadow-[0_0_30px_hsl(355_75%_45%/0.5)]">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
