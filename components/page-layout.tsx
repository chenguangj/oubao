"use client";

import { ReactNode, useState } from "react";
import { MobileNav } from "@/components/mobile-nav";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import { ContactModal } from "@/components/contact-modal";
import { useI18n } from "@/lib/i18n";

function Footer() {
  const { t } = useI18n();
  const f = t.footer;
  const [contactOpen, setContactOpen] = useState(false);

  const footerGroups = [
    { title: f.gamesTitle, links: f.gameLinks },
    { title: f.aiTitle, links: f.aiLinks },
    { title: f.tokenTitle, links: f.tokenLinks },
    { title: f.shopTitle, links: f.shopLinks },
    { title: f.rankingTitle, links: f.rankingLinks },
  ];

  return (
    <footer className="border-t border-[#2a2a3e] bg-[#0f0f1a]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#c9a44c] to-[#8b6914] flex items-center justify-center shadow-md shadow-[#c9a44c]/20">
                <span className="text-[#0a0a14] text-sm font-bold">♠</span>
              </div>
              <span className="text-[12px] font-bold tracking-[0.12em] text-[#e8d48b]">
                OUBAOGAME
              </span>
            </a>
            <p className="text-xs text-[#8b7e6a] leading-relaxed max-w-[200px]">
              {f.brandDesc}
            </p>
          </div>

          {/* Link columns */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold text-[#e8d48b] uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#8b7e6a] hover:text-[#c9a44c] transition-colors leading-relaxed"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2a2a3e]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-[#5a5a6e]">{f.copyright}</span>
          <div className="flex items-center gap-6">
            {f.links.map((l) =>
              (l.label as string) === "Contact" ||
              (l.label as string) === "Hubungi" ? (
                <button
                  key={l.label}
                  onClick={() => setContactOpen(true)}
                  className="text-xs text-[#5a5a6e] hover:text-[#c9a44c] transition-colors cursor-pointer"
                >
                  {l.label}
                </button>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-xs text-[#5a5a6e] hover:text-[#c9a44c] transition-colors"
                >
                  {l.label}
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </footer>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen font-sans antialiased bg-transparent text-[#f0e6d3]">
      <ScrollProgress />
      <CursorGlow />
      <MobileNav />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}
