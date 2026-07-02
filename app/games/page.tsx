"use client";

import React, { useRef, useEffect, useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { GameImage, GameScreenshotGallery } from "@/components/game-image";
import { useI18n, I18nProvider } from "@/lib/i18n";
import { ContactModal } from "@/components/contact-modal";
import {
  Swords,
  Gamepad2,
  Clock,
  Zap,
  Users,
  Brain,
  Trophy,
  Star,
  ArrowRight,
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

function GamesContent() {
  const { t } = useI18n();
  const g = t.gamesPage;
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-20 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-semibold text-[#c9a44c] bg-[#c9a44c]/10 border border-[#c9a44c]/20 mb-6">
                {g.tag}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 whitespace-pre-line">
                <span className="text-shimmer">{g.heroTitle}</span>
              </h1>
              <p className="text-lg text-[#8b7e6a] leading-relaxed max-w-xl">
                {g.heroDesc}
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-xl shadow-[#c9a44c]/10">
                  <GameImage
                    src="/picture/hero-games-lobby.jpg"
                    aspect="video"
                    glowColor="indigo"
                    overlayText="Game Lobby Overview"
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-10 overflow-hidden">
        <GameScreenshotGallery images={[...g.gallery]} />
      </section>

      {/* Win Big */}
      <section
        id="win-big"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a44c]/10 to-[#e44d8a]/10 border border-[#c9a44c]/20 flex items-center justify-center">
                <Swords className="w-7 h-7 text-[#c9a44c]" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold">
                  <span className="text-shimmer">{g.winBig.title}</span>
                </h2>
                <p className="text-sm text-[#8b7e6a]">{g.winBig.subtitle}</p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <FadeUp delay={100}>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-md">
                  <GameImage
                    src="/picture/gameplay-win-big.jpg"
                    aspect="video"
                    glowColor="indigo"
                    overlayText="Win Big — Gameplay"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/card-reveal.jpg"
                      aspect="square"
                      glowColor="purple"
                      overlayText="Card Reveal"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/betting-round.jpg"
                      aspect="square"
                      glowColor="orange"
                      overlayText="Betting Round"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#f0e6d3]">
                    {g.winBig.rulesTitle}
                  </h3>
                  <div className="space-y-3 text-sm text-[#8b7e6a] leading-relaxed">
                    <p>{g.winBig.rulesP1}</p>
                    <p>{g.winBig.rulesP2}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#f0e6d3]">
                    {g.winBig.aiFeaturesTitle}
                  </h3>
                  <div className="space-y-3">
                    {g.winBig.aiFeatures.map((item, i) => {
                      const Icon = [Brain, Zap, Clock][i];
                      return (
                        <div
                          key={i}
                          className="flex gap-3 p-3 rounded-xl bg-[#1a1a2e] border border-[#2a2a3e]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#c9a44c]/10 border border-[#c9a44c]/20 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-[#c9a44c]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#e8d48b]">
                              {item.label}
                            </p>
                            <p className="text-xs text-[#8b7e6a] mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <Card delay={100}>
            <h3 className="text-lg font-bold mb-4 text-[#f0e6d3]">
              {g.winBig.tokenTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {g.winBig.tokenItems.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-[#c9a44c]/5 border border-[#c9a44c]/10"
                >
                  <div className="text-2xl font-extrabold text-[#c9a44c] mb-1">
                    {item.cost}
                  </div>
                  <div className="text-sm font-semibold text-[#e8d48b] mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#8b7e6a]">{item.desc}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Landlord */}
      <section
        id="landlord"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#e44d8a]/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e44d8a]/10 to-[#ff7eb3]/10 border border-[#e44d8a]/20 flex items-center justify-center">
                <Gamepad2 className="w-7 h-7 text-[#e44d8a]" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold">
                  <span className="text-shimmer">{g.landlord.title}</span>
                </h2>
                <p className="text-sm text-[#8b7e6a]">{g.landlord.subtitle}</p>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <FadeUp delay={100}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#f0e6d3]">
                    {g.landlord.rulesTitle}
                  </h3>
                  <div className="space-y-3 text-sm text-[#8b7e6a] leading-relaxed">
                    <p>{g.landlord.rulesP1}</p>
                    <p>{g.landlord.rulesP2}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#f0e6d3]">
                    {g.landlord.aiFeaturesTitle}
                  </h3>
                  <div className="space-y-3">
                    {g.landlord.aiFeatures.map((item, i) => {
                      const Icon = [Brain, Users, Star][i];
                      return (
                        <div
                          key={i}
                          className="flex gap-3 p-3 rounded-xl bg-[#1a1a2e] border border-[#2a2a3e]"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#e44d8a]/10 border border-[#e44d8a]/20 flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-[#e44d8a]" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#e8d48b]">
                              {item.label}
                            </p>
                            <p className="text-xs text-[#8b7e6a] mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={200}>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-md">
                  <GameImage
                    src="/picture/gameplay-landlord.jpg"
                    aspect="video"
                    glowColor="purple"
                    overlayText="Landlord — Gameplay"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/bidding-phase.jpg"
                      aspect="square"
                      glowColor="emerald"
                      overlayText="Bidding Phase"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/card-combos.jpg"
                      aspect="square"
                      glowColor="indigo"
                      overlayText="Card Combos"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <Card delay={100}>
            <h3 className="text-lg font-bold mb-4 text-[#f0e6d3]">
              {g.landlord.tokenTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {g.landlord.tokenItems.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-xl bg-[#e44d8a]/5 border border-[#e44d8a]/10"
                >
                  <div className="text-2xl font-extrabold text-[#e44d8a] mb-1">
                    {item.cost}
                  </div>
                  <div className="text-sm font-semibold text-[#e8d48b] mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-[#8b7e6a]">{item.desc}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Game Modes */}
      <section
        id="modes"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{g.modes.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-10 max-w-2xl">{g.modes.desc}</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {g.modes.items.map((mode, i) => {
              const colors = ["orange", "indigo", "emerald"] as const;
              return (
                <Card
                  key={mode.title}
                  className="p-0 overflow-hidden"
                  delay={i * 120}
                >
                  <div className="h-44 overflow-hidden">
                    <GameImage
                      src={
                        [
                          "/picture/mode-pve.jpg",
                          "/picture/mode-pvp.jpg",
                          "/picture/mode-tournament.jpg",
                        ][i]
                      }
                      aspect="video"
                      glowColor={colors[i]}
                      overlayText={mode.title}
                      className="h-full !aspect-auto"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base font-bold mb-2 text-[#f0e6d3]">
                      {mode.title}
                    </h3>
                    <p className="text-sm text-[#8b7e6a] leading-relaxed">
                      {mode.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Play Here */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#c9a44c]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{g.whyPlay.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">{g.whyPlay.desc}</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {g.whyPlay.points.map((point, i) => (
              <Card key={point.title} delay={i * 100}>
                <h3 className="text-lg font-bold mb-3 text-[#e8d48b]">
                  {point.title}
                </h3>
                <p className="text-sm text-[#8b7e6a] leading-relaxed">
                  {point.desc}
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
            <Trophy className="w-12 h-12 text-[#c9a44c] mx-auto mb-6" />
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{g.cta.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-8">{g.cta.desc}</p>
            <button
              onClick={() => setContactOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] font-semibold tracking-wider shadow-lg shadow-[#c9a44c]/25 hover:scale-[1.03] transition-all"
            >
              {g.cta.button} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeUp>
      </section>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </PageLayout>
  );
}

export default function GamesPage() {
  return (
    <I18nProvider>
      <GamesContent />
    </I18nProvider>
  );
}
