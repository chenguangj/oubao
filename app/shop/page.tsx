"use client";

import React, { useRef, useEffect, useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { GameImage } from "@/components/game-image";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { ContactModal } from "@/components/contact-modal";
import { Zap, Crown, Gift, CheckCircle2, ShieldCheck } from "lucide-react";

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

function ShopContent() {
  const { t } = useI18n();
  const s = t.shopPage;
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState("");

  const openPurchase = (msg: string) => {
    setContactMessage(msg);
    setContactOpen(true);
  };

  const planIcons = [Gift, Zap, Crown];
  const planColors = [
    {
      color: "text-[#2dd4a8]",
      bg: "from-[#2dd4a8]/10 to-[#2dd4a8]/5 border-[#2dd4a8]/20",
      imgColor: "emerald" as const,
    },
    {
      color: "text-[#c9a44c]",
      bg: "from-[#c9a44c]/10 to-[#e44d8a]/10 border-[#c9a44c]/20",
      imgColor: "indigo" as const,
    },
    {
      color: "text-[#e44d8a]",
      bg: "from-[#e44d8a]/10 to-[#ff7eb3]/10 border-[#e44d8a]/20",
      imgColor: "purple" as const,
    },
  ];

  return (
    <PageLayout>
      {/* Hero with shop visual */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-semibold text-[#c9a44c] bg-[#c9a44c]/10 border border-[#c9a44c]/20 mb-6">
                {s.tag}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 whitespace-pre-line">
                <span className="text-shimmer">{s.heroTitle}</span>
              </h1>
              <p className="text-lg text-[#8b7e6a] leading-relaxed max-w-xl">
                {s.heroDesc}
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-xl shadow-[#c9a44c]/10">
                  <GameImage
                    src="/picture/hero-token.jpg"
                    aspect="video"
                    glowColor="purple"
                    overlayText="Token Shop Interface"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section
        id="plans"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{s.plans.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">{s.plans.desc}</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {s.plans.items.map((plan, i) => {
              const Icon = planIcons[i];
              const style = planColors[i];
              const isHighlight = i === 1;
              return (
                <Card
                  key={plan.name}
                  className={`flex flex-col p-0 overflow-hidden ${isHighlight ? "border-[#c9a44c]/40 ring-2 ring-[#c9a44c]/20 relative" : ""}`}
                  delay={i * 120}
                >
                  {isHighlight && (
                    <div className="absolute top-3 right-3 z-20 text-[10px] px-3 py-1 rounded-full bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] font-bold tracking-wider shadow-md">
                      {s.popular}
                    </div>
                  )}
                  <div className="h-36 overflow-hidden">
                    <GameImage
                      src={
                        [
                          "/picture/token-earn.jpg",
                          "/picture/token-buy.jpg",
                          "/picture/token-spend.jpg",
                        ][i]
                      }
                      aspect="wide"
                      glowColor={style.imgColor}
                      overlayText={`${plan.name} Plan`}
                      className="h-full !aspect-auto"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${style.bg} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-5 h-5 ${style.color}`} />
                    </div>
                    <div className="mb-5">
                      <h3 className="text-lg font-bold text-[#f0e6d3] mb-1">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-3xl font-extrabold text-[#f0e6d3]">
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-[#8b7e6a] text-sm">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#8b7e6a]">{plan.desc}</p>
                    </div>
                    <ul className="space-y-2 flex-1 mb-6">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-[#a89a82]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#c9a44c] shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() =>
                        openPurchase(
                          `${t.contactModal.purchasePrefix}: ${plan.name} - ${plan.price}${plan.period}`,
                        )
                      }
                      className={`block w-full py-3 rounded-xl text-sm font-semibold tracking-wider transition-all duration-300 text-center ${
                        isHighlight
                          ? "bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] shadow-md shadow-[#c9a44c]/20 hover:shadow-[#c9a44c]/40 hover:scale-[1.02]"
                          : "border border-[#2a2a3e] text-[#a89a82] hover:border-[#c9a44c]/40 hover:text-[#c9a44c] hover:bg-[#c9a44c]/10"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* One-time Packs */}
      <section
        id="packs"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#c9a44c]/5 to-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{s.packs.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">{s.packs.desc}</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.packs.items.map((pack, i) => {
              const isBest = i === 2;
              return (
                <Card
                  key={pack.name}
                  className={`text-center p-0 overflow-hidden flex flex-col ${isBest ? "border-[#c9a44c]/40 ring-1 ring-[#c9a44c]/20" : ""}`}
                  delay={i * 100}
                >
                  <div className="h-24 overflow-hidden">
                    <GameImage
                      src={
                        [
                          "/picture/token-buy.jpg",
                          "/picture/token-earn.jpg",
                          "/picture/token-spend.jpg",
                          "/picture/hero-token.jpg",
                        ][i]
                      }
                      aspect="wide"
                      glowColor={isBest ? "indigo" : "purple"}
                      overlayText={`${pack.tokens} Tokens`}
                      className="h-full !aspect-auto"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    {isBest && (
                      <div className="text-[9px] text-[#c9a44c] font-bold tracking-wider mb-2">
                        {s.packs.bestValue}
                      </div>
                    )}
                    {!isBest && <div className="h-[18px] mb-2" />}
                    <div className="text-2xl font-extrabold text-[#f0e6d3] mb-0.5">
                      {pack.tokens}
                    </div>
                    <div className="text-xs text-[#8b7e6a] mb-1">
                      {s.packs.tokensLabel}
                    </div>
                    {pack.bonus && (
                      <div className="text-xs text-[#2dd4a8] font-semibold mb-3">
                        {pack.bonus}
                      </div>
                    )}
                    {!pack.bonus && <div className="h-5 mb-3" />}
                    <div className="text-lg font-bold text-[#c9a44c] mb-4">
                      {pack.price}
                    </div>
                    <div className="mt-auto">
                      <button
                        onClick={() =>
                          openPurchase(
                            `${t.contactModal.purchasePrefix}: ${pack.name} - ${pack.tokens} Tokens - ${pack.price}`,
                          )
                        }
                        className="block w-full py-2.5 rounded-lg text-xs font-semibold border border-[#2a2a3e] text-[#a89a82] hover:border-[#c9a44c]/40 hover:text-[#c9a44c] hover:bg-[#c9a44c]/10 transition-all text-center"
                      >
                        {s.packs.buyNow}
                      </button>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{s.faq.title}</span>
            </h2>
          </FadeUp>
          <div className="space-y-4 mt-10">
            {s.faq.items.map((item, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="p-5 rounded-xl border border-[#2a2a3e] bg-[#12121e] hover:border-[#c9a44c]/20 transition-colors">
                  <h3 className="text-sm font-bold text-[#f0e6d3] mb-1.5">
                    {item.q}
                  </h3>
                  <p className="text-sm text-[#8b7e6a] leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#2dd4a8]/5 to-transparent">
        <FadeUp>
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-2xl font-extrabold mb-4 text-[#f0e6d3]">
              {s.trust.title}
            </h2>
            <p className="text-sm text-[#8b7e6a] leading-relaxed max-w-lg mx-auto mb-8">
              {s.trust.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-[#8b7e6a]">
              {s.trust.badges.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />{" "}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultMessage={contactMessage}
      />
    </PageLayout>
  );
}

export default function ShopPage() {
  return (
    <I18nProvider>
      <ShopContent />
    </I18nProvider>
  );
}
