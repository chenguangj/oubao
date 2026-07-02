"use client";

import React, { useRef, useEffect, useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { GameImage } from "@/components/game-image";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { ContactModal } from "@/components/contact-modal";
import {
  Coins,
  TrendingUp,
  Gift,
  ShoppingCart,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(32px) scale(0.97)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Card({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView(0.08);
  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-8 hover:border-[#c9a44c]/30 hover:shadow-lg hover:shadow-[#c9a44c]/10 transition-all duration-300 ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(28px) scale(0.97)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      {children}
    </div>
  );
}

function TokenContent() {
  const { t } = useI18n();
  const tk = t.tokenPage;
  const [contactOpen, setContactOpen] = useState(false);

  const howIcons = [ShoppingCart, Coins, RefreshCw];
  const howColors = [
    {
      color: "text-[#c9a44c]",
      bg: "from-[#c9a44c]/10 to-[#4d9de4]/10 border-[#c9a44c]/20",
      imgColor: "indigo" as const,
    },
    {
      color: "text-[#e44d8a]",
      bg: "from-[#e44d8a]/10 to-[#ff7eb3]/10 border-[#e44d8a]/20",
      imgColor: "purple" as const,
    },
    {
      color: "text-[#2dd4a8]",
      bg: "from-[#2dd4a8]/10 to-[#2dd4a8]/5 border-[#2dd4a8]/20",
      imgColor: "emerald" as const,
    },
  ];

  return (
    <PageLayout>
      {/* Hero with Token visual */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-semibold text-[#c9a44c] bg-[#c9a44c]/10 border border-[#c9a44c]/20 mb-6">
                {tk.tag}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 whitespace-pre-line">
                <span className="text-shimmer">{tk.heroTitle}</span>
              </h1>
              <p className="text-lg text-[#8b7e6a] leading-relaxed max-w-xl">
                {tk.heroDesc}
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-xl shadow-[#c9a44c]/10">
                  <GameImage
                    src="/picture/hero-token.jpg"
                    aspect="video"
                    glowColor="orange"
                    overlayText="Token Economy Overview"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-3 rounded-xl bg-[#0a0a14]/95 backdrop-blur-sm border border-[#ff8c42]/20 shadow-lg">
                  <div className="text-lg font-bold text-[#ff8c42]">128K+</div>
                  <div className="text-[10px] text-[#8b7e6a]">
                    {tk.circulation}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* How Tokens Work */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{tk.howItWorks.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              {tk.howItWorks.desc}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tk.howItWorks.items.map((item, i) => {
              const Icon = howIcons[i];
              const style = howColors[i];
              return (
                <Card
                  key={item.title}
                  className="p-0 overflow-hidden"
                  delay={i * 120}
                >
                  <div className="h-36 overflow-hidden">
                    <GameImage
                      src={
                        [
                          "/picture/token-buy.jpg",
                          "/picture/token-spend.jpg",
                          "/picture/token-earn.jpg",
                        ][i]
                      }
                      aspect="wide"
                      glowColor={style.imgColor}
                      overlayText={item.title}
                      className="h-full !aspect-auto"
                    />
                  </div>
                  <div className="p-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${style.bg} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-5 h-5 ${style.color}`} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#f0e6d3]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#8b7e6a] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Earning Tokens */}
      <section
        id="earning"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#2dd4a8]/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2dd4a8]/10 to-[#2dd4a8]/5 border border-[#2dd4a8]/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-[#2dd4a8]" />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold">
                    <span className="text-shimmer">{tk.earning.title}</span>
                  </h2>
                  <p className="text-sm text-[#8b7e6a]">
                    {tk.earning.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {tk.earning.items.map((item, i) => (
                  <div
                    key={item.method}
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#12121e] border border-[#2a2a3e]"
                    style={{
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2dd4a8] shrink-0" />
                    <span className="text-sm font-medium text-[#e8d48b] flex-1">
                      {item.method}
                    </span>
                    <span className="text-xs font-bold text-[#2dd4a8] bg-[#2dd4a8]/10 px-2 py-0.5 rounded-full">
                      {item.amount}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-md">
                  <GameImage
                    src="/picture/gallery-token-rewards.jpg"
                    aspect="video"
                    glowColor="emerald"
                    overlayText="Token Earning Interface"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/daily-rewards.jpg"
                      aspect="square"
                      glowColor="orange"
                      overlayText="Daily Rewards"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/achievements.jpg"
                      aspect="square"
                      glowColor="indigo"
                      overlayText="Achievements"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Spending Guide */}
      <section
        id="spending"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff8c42]/10 to-[#ef4444]/10 border border-[#ff8c42]/20 flex items-center justify-center">
                <Coins className="w-7 h-7 text-[#ff8c42]" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold">
                  <span className="text-shimmer">{tk.spending.title}</span>
                </h2>
                <p className="text-sm text-[#8b7e6a]">{tk.spending.subtitle}</p>
              </div>
            </div>
          </FadeUp>

          <Card delay={100}>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a3e]">
                  {tk.spending.headers.map((h, i) => (
                    <th
                      key={h}
                      className={`text-left py-3 text-[10px] text-[#8b7e6a] tracking-widest font-semibold uppercase ${i === 2 ? "hidden sm:table-cell" : ""}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tk.spending.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#1a1a2e]">
                    <td className="py-4 text-[#e8d48b] font-medium">
                      {row.action}
                    </td>
                    <td className="py-4 text-[#c9a44c] font-semibold">
                      {row.cost}
                    </td>
                    <td className="py-4 text-[#8b7e6a] hidden sm:table-cell">
                      {row.gets}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </section>

      {/* Token Tips */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#c9a44c]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{tk.tips.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">{tk.tips.desc}</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {tk.tips.items.map((tip, i) => (
              <Card key={tip.title} delay={i * 100}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c9a44c]/10 border border-[#c9a44c]/20 flex items-center justify-center">
                    <span className="text-[#c9a44c] font-bold text-xs">{`0${i + 1}`}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#e8d48b]">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-sm text-[#8b7e6a] leading-relaxed">
                  {tip.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-20 text-center">
        <FadeUp>
          <div className="max-w-2xl mx-auto">
            <Gift className="w-12 h-12 text-[#c9a44c] mx-auto mb-6" />
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{tk.cta.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-8">{tk.cta.desc}</p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] font-semibold tracking-wider shadow-lg shadow-[#c9a44c]/25 hover:scale-[1.03] transition-all"
            >
              {tk.cta.button} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeUp>
      </section>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultMessage={tk.cta.title}
      />
    </PageLayout>
  );
}

export default function TokenPage() {
  return (
    <I18nProvider>
      <TokenContent />
    </I18nProvider>
  );
}
