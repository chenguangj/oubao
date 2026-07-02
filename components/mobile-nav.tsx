"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";

const SUITS = ["♠", "♥", "♦", "♣", "★"];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [hoverIdx, setHoverIdx] = useState(-1);
  const { locale, setLocale, t } = useI18n();

  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active page from pathname
  useEffect(() => {
    const path = window.location.pathname;
    const paths = ["/games", "/ai", "/token", "/shop", "/ranking"];
    const idx = paths.indexOf(path);
    if (idx >= 0) setActiveIdx(idx);
  }, []);

  const navLinks = [
    { label: t.nav.games, href: "/games" },
    { label: t.nav.aiBattle, href: "/ai" },
    { label: t.nav.token, href: "/token" },
    { label: t.nav.shop, href: "/shop" },
    { label: t.nav.ranking, href: "/ranking" },
  ];

  return (
    <div className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      {/* Desktop nav */}
      <div className="hidden md:flex justify-center pt-5 pointer-events-auto">
        <nav
          className="relative flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-700 overflow-hidden"
          style={{
            background: scrolled ? "rgba(10,10,20,0.95)" : "rgba(10,10,20,0.8)",
            backdropFilter: "blur(20px) saturate(1.3)",
            WebkitBackdropFilter: "blur(20px) saturate(1.3)",
            border: "1px solid rgba(201,164,76,0.15)",
            boxShadow: scrolled
              ? "0 8px 40px rgba(201,164,76,0.1), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(201,164,76,0.1)"
              : "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(201,164,76,0.05)",
            transform: scrolled ? "scale(1)" : "scale(0.98)",
          }}
        >
          {/* Logo — card flip on hover */}
          <a
            href="/"
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-[#c9a44c]/10 transition-colors mr-1"
          >
            <div
              className="relative w-7 h-7 shrink-0"
              style={{ perspective: "200px" }}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#c9a44c] to-[#8b6914] flex items-center justify-center transition-transform duration-500 [transform-style:preserve-3d] [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                <span className="text-[#0a0a14] text-xs font-bold">♠</span>
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#e44d8a] to-[#c9a44c] flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(0deg)]">
                <span className="text-white text-xs font-bold">♥</span>
              </div>
            </div>
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#e8d48b] group-hover:text-[#c9a44c] transition-colors">
              {t.nav.brand}
            </span>
          </a>

          {/* Divider */}
          <div className="w-px h-5 bg-[#2a2a3e] mx-1" />

          {/* Links */}
          <div className="relative flex items-center gap-0.5">
            {navLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`relative flex items-center justify-center px-3.5 py-2 text-[11px] tracking-wide rounded-full transition-colors duration-200 ${
                  activeIdx === i
                    ? "text-[#c9a44c] font-semibold"
                    : "text-[#8b7e6a] hover:text-[#e8d48b]"
                }`}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(-1)}
              >
                {/* Suit symbol */}
                <span
                  className="absolute -left-0.5 top-1/2 text-[9px] transition-all duration-300 pointer-events-none"
                  style={{
                    opacity: activeIdx === i || hoverIdx === i ? 1 : 0,
                    transform:
                      activeIdx === i || hoverIdx === i
                        ? "translateY(-50%) scale(1) rotate(0deg)"
                        : "translateY(-50%) scale(0) rotate(-90deg)",
                    color: i % 2 === 0 ? "#c9a44c" : "#e44d8a",
                  }}
                >
                  {SUITS[i]}
                </span>
                {l.label}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-5 bg-[#2a2a3e] mx-1" />

          {/* Right actions */}
          <button
            onClick={() => setLocale(locale === "en" ? "ms" : "en")}
            className="flex items-center gap-1 text-[10px] px-2.5 py-2 rounded-full text-[#8b7e6a] hover:text-[#c9a44c] hover:bg-[#c9a44c]/10 transition-all duration-200"
          >
            {locale === "en" ? "🇲🇾" : "🇬🇧"}
          </button>

          <a
            href="/games"
            className="relative text-[11px] px-5 py-2 rounded-full bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] font-semibold tracking-wider overflow-hidden group/btn transition-all duration-300 hover:scale-[1.04] shadow-md shadow-[#c9a44c]/25 hover:shadow-[#c9a44c]/40"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            <span className="relative">{t.nav.cta}</span>
          </a>
        </nav>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden pointer-events-auto px-4 pt-3">
        <nav
          className="flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-500"
          style={{
            background: scrolled ? "rgba(10,10,20,0.95)" : "rgba(10,10,20,0.8)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(201,164,76,0.15)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
          }}
        >
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#c9a44c] to-[#8b6914] flex items-center justify-center">
              <span className="text-[#0a0a14] text-xs font-bold">♠</span>
            </div>
            <span className="text-[11px] font-bold tracking-[0.12em] text-[#e8d48b]">
              {t.nav.brand}
            </span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLocale(locale === "en" ? "ms" : "en")}
              className="text-sm px-2 py-1 rounded-lg hover:bg-[#c9a44c]/10 transition-colors"
            >
              {locale === "en" ? "🇲🇾" : "🇬🇧"}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-xl hover:bg-[#c9a44c]/10 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span
                className="block h-[2px] bg-[#e8d48b] rounded-full transition-all duration-300 origin-center"
                style={{
                  width: "16px",
                  transform: open ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-[2px] bg-[#e8d48b] rounded-full transition-all duration-300"
                style={{ width: "16px", opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-[2px] bg-[#e8d48b] rounded-full transition-all duration-300 origin-center"
                style={{
                  width: "16px",
                  transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className="mt-2 overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            maxHeight: open ? "500px" : "0px",
            opacity: open ? 1 : 0,
            background: "rgba(10,10,20,0.97)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: open
              ? "1px solid rgba(201,164,76,0.15)"
              : "1px solid transparent",
            boxShadow: open ? "0 12px 40px rgba(0,0,0,0.4)" : "none",
          }}
        >
          <div className="p-3 flex flex-col gap-1">
            {navLinks.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={close}
                className="flex items-center gap-3 px-4 py-3.5 text-sm text-[#8b7e6a] hover:text-[#c9a44c] hover:bg-[#c9a44c]/10 rounded-xl transition-all duration-200"
                style={{
                  transform: open ? "translateX(0)" : "translateX(-16px)",
                  opacity: open ? 1 : 0,
                  transition: `all 0.4s cubic-bezier(0.16,1,0.3,1) ${80 + i * 50}ms`,
                }}
              >
                <span
                  className="text-xs"
                  style={{
                    color: i % 2 === 0 ? "#c9a44c" : "#e44d8a",
                  }}
                >
                  {SUITS[i]}
                </span>
                {l.label}
              </a>
            ))}
            <div className="mt-2 px-2 pb-1">
              <a
                href="/games"
                onClick={close}
                className="block w-full text-center text-[12px] px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] font-semibold tracking-wider shadow-md shadow-[#c9a44c]/20"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
