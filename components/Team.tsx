"use client";
import { useLocale } from '@/lib/i18n';
import { motion } from 'framer-motion';

export default function Team() {
  const { t } = useLocale();
  const members = t('team.members') as Array<{name: string, role: string, bio: string, image: string}>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 max-w-3xl">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            {t('team.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">
            {t('team.title')}
          </h2>
          <div className="w-20 h-[2px] bg-accent mb-6" />
          <p className="text-text-muted text-lg">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-lg shadow-primary/10">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
                {member.role}
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}