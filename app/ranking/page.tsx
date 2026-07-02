"use client";

import React, { useRef, useEffect, useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { GameImage } from "@/components/game-image";
import { I18nProvider, useI18n } from "@/lib/i18n";
import {
  Trophy,
  Medal,
  Calendar,
  TrendingUp,
  Star,
  Crown,
  Target,
  Award,
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

function RankingContent() {
  const { t } = useI18n();
  const r = t.rankingPage;

  const tierIcons = [Medal, Medal, Trophy, Star, Award, Crown];
  const tierImgColors = [
    "orange",
    "indigo",
    "orange",
    "indigo",
    "purple",
    "emerald",
  ] as const;
  const categoryIcons = [Target, TrendingUp, Trophy, Star];
  const categoryColors = ["emerald", "orange", "indigo", "purple"] as const;

  return (
    <PageLayout>
      {/* Hero with leaderboard visual */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-semibold text-[#c9a44c] bg-[#c9a44c]/10 border border-[#c9a44c]/20 mb-6">
                {r.tag}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 whitespace-pre-line">
                <span className="text-shimmer">{r.heroTitle}</span>
              </h1>
              <p className="text-lg text-[#8b7e6a] leading-relaxed max-w-xl">
                {r.heroDesc}
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-xl shadow-[#c9a44c]/10">
                  <GameImage
                    src="/picture/hero-leaderboard.jpg"
                    aspect="video"
                    glowColor="indigo"
                    overlayText="Leaderboard Interface"
                  />
                </div>
                {/* Top player badge */}
                <div className="absolute -top-3 -right-3 px-4 py-2 rounded-xl bg-[#0a0a14]/95 backdrop-blur-sm border border-[#c9a44c]/40 shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{"\uD83E\uDD47"}</span>
                    <div>
                      <div className="text-xs font-bold text-[#f0e6d3]">
                        {r.topPlayer.name}
                      </div>
                      <div className="text-[10px] text-[#8b7e6a]">
                        {r.topPlayer.winRate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Ranking Tiers */}
      <section
        id="tiers"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{r.tiers.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">{r.tiers.desc}</p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {r.tiers.items.map((item, i) => {
              const Icon = tierIcons[i];
              return (
                <Card
                  key={item.tier}
                  className="p-0 overflow-hidden"
                  delay={i * 100}
                >
                  <div className="h-28 overflow-hidden relative">
                    <GameImage
                      src={["/picture/mode-pve.jpg", "/picture/mode-pvp.jpg", "/picture/mode-tournament.jpg", "/picture/gameplay-win-big.jpg", "/picture/gameplay-landlord.jpg", "/picture/gameplay-pvp.jpg"][i]} aspect="wide" glowColor={tierImgColors[i]} overlayText={item.tier}
                      className="h-full !aspect-auto"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-[#0a0a14]/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Icon className="w-4 h-4 text-[#c9a44c]" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold mb-0.5 text-[#f0e6d3]">
                      {item.tier}
                    </h3>
                    <p className="text-[11px] text-[#8b7e6a] mb-3">
                      {item.range}
                    </p>
                    <ul className="space-y-1.5">
                      {item.perks.map((perk) => (
                        <li
                          key={perk}
                          className="flex items-start gap-2 text-xs text-[#8b7e6a]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a44c] mt-1.5 shrink-0" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seasons */}
      <section
        id="seasons"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#c9a44c]/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a44c]/10 to-[#e44d8a]/10 border border-[#c9a44c]/20 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-[#c9a44c]" />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold">
                    <span className="text-shimmer">{r.seasons.title}</span>
                  </h2>
                  <p className="text-sm text-[#8b7e6a]">{r.seasons.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#8b7e6a] leading-relaxed">
                <p>
                  <strong className="text-[#e8d48b]">
                    {r.seasons.duration}
                  </strong>{" "}
                  {r.seasons.durationDesc}
                </p>
                <p>
                  <strong className="text-[#e8d48b]">{r.seasons.reset}</strong>{" "}
                  {r.seasons.resetDesc}
                </p>
                <p>
                  <strong className="text-[#e8d48b]">
                    {r.seasons.rewards}
                  </strong>{" "}
                  {r.seasons.rewardsDesc}
                </p>
              </div>

              <Card className="mt-8" delay={100}>
                <h3 className="text-base font-bold mb-4 text-[#f0e6d3]">
                  {r.seasons.rewardsTitle}
                </h3>
                <div className="space-y-2.5">
                  {r.seasons.rewardsList.map((item) => (
                    <div
                      key={item.tier}
                      className="flex items-center justify-between py-2 border-b border-[#1a1a2e]"
                    >
                      <span className="text-sm font-semibold text-[#e8d48b]">
                        {item.tier}
                      </span>
                      <span className="text-xs text-[#8b7e6a]">
                        {item.reward}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeUp>

            {/* Season visual */}
            <FadeUp delay={200}>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-md">
                  <GameImage
                    src="/picture/gameplay-season.jpg"
                    aspect="video"
                    glowColor="purple"
                    overlayText="Season 12 — Battle Pass"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/gameplay-season.jpg" aspect="square" glowColor="indigo" overlayText="Season Rewards"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[#2a2a3e]">
                    <GameImage
                      src="/picture/mode-tournament.jpg" aspect="square" glowColor="orange" overlayText="Tournament Bracket"
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Leaderboard Categories */}
      <section
        id="categories"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{r.categories.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              {r.categories.desc}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {r.categories.items.map((item, i) => {
              const Icon = categoryIcons[i];
              return (
                <Card
                  key={item.title}
                  className="p-0 overflow-hidden"
                  delay={i * 100}
                >
                  <div className="h-28 overflow-hidden">
                    <GameImage
                      src={["/picture/feat-winrate.jpg", "/picture/feat-optimal.jpg", "/picture/feat-sparring.jpg", "/picture/feat-review.jpg"][i]} aspect="wide" glowColor={categoryColors[i]} overlayText={item.title}
                      className="h-full !aspect-auto"
                    />
                  </div>
                  <div className="p-5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#c9a44c]/10 to-[#e44d8a]/10 border border-[#c9a44c]/20 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-[#c9a44c]" />
                    </div>
                    <h3 className="text-sm font-bold mb-1.5 text-[#e8d48b]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#8b7e6a] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function RankingPage() {
  return (
    <I18nProvider>
      <RankingContent />
    </I18nProvider>
  );
}
