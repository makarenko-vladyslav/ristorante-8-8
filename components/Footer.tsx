
"use client";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-white mb-6">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M16 6C10.477 6 6 10.477 6 16C6 21.523 10.477 26 16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6ZM16 24C11.582 24 8 20.418 8 16C8 11.582 11.582 8 16 8C20.418 8 24 11.582 24 16C24 20.418 20.418 24 16 24Z" />
                <path d="M16 10C12.686 10 10 12.686 10 16C10 19.314 12.686 22 16 22C19.314 22 22 19.314 22 16C22 12.686 19.314 10 16 10Z" />
                <circle cx="16" cy="16" r="2" fill="currentColor" />
              </svg>
              <span className="font-display font-bold text-2xl tracking-tight">8/8</span>
            </a>
            <p className="text-white/60 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Навігація</h4>
            <ul className="space-y-4">
              <li><a href="#menu" className="text-white/60 hover:text-accent transition-colors">{t("nav.menu")}</a></li>
              <li><a href="#about" className="text-white/60 hover:text-accent transition-colors">{t("nav.about")}</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-accent transition-colors">{t("nav.gallery")}</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-accent transition-colors">{t("nav.reviews")}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Контакти</h4>
            <ul className="space-y-4">
              <li className="text-white/60">{t("contact.address")}</li>
              <li><a href={`tel:${t("contact.phone")}`} className="text-white/60 hover:text-accent transition-colors">{t("contact.phone")}</a></li>
              <li><a href={`mailto:${t("contact.email")}`} className="text-white/60 hover:text-accent transition-colors">{t("contact.email")}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Соцмережі</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Ristorante 8/8. {t("footer.rights")}</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Політика конфіденційності</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Умови використання</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
