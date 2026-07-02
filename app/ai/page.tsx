"use client";

import React, { useRef, useEffect, useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { GameImage } from "@/components/game-image";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { Brain, Database, Zap, Eye, Layers, GitBranch } from "lucide-react";

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

function AIContent() {
  const { t } = useI18n();
  const a = t.aiPage;

  const moduleIcons = [Database, Brain, GitBranch, Eye, Layers, Zap];
  const moduleColors = [
    {
      color: "text-[#4d9de4]",
      bg: "from-[#4d9de4]/10 to-[#c9a44c]/10 border-[#4d9de4]/20",
      imgColor: "indigo" as const,
    },
    {
      color: "text-[#e44d8a]",
      bg: "from-[#e44d8a]/10 to-[#ff7eb3]/10 border-[#e44d8a]/20",
      imgColor: "purple" as const,
    },
    {
      color: "text-[#c9a44c]",
      bg: "from-[#c9a44c]/10 to-[#4d9de4]/10 border-[#c9a44c]/20",
      imgColor: "indigo" as const,
    },
    {
      color: "text-[#2dd4a8]",
      bg: "from-[#2dd4a8]/10 to-[#2dd4a8]/5 border-[#2dd4a8]/20",
      imgColor: "emerald" as const,
    },
    {
      color: "text-[#ff8c42]",
      bg: "from-[#ff8c42]/10 to-[#c9a44c]/5 border-[#ff8c42]/20",
      imgColor: "orange" as const,
    },
    {
      color: "text-[#ef4444]",
      bg: "from-[#ef4444]/10 to-[#e44d8a]/10 border-[#ef4444]/20",
      imgColor: "purple" as const,
    },
  ];

  const difficultyColors = ["emerald", "indigo", "purple", "orange"] as const;

  return (
    <PageLayout>
      {/* Hero with AI visualization */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-semibold text-[#c9a44c] bg-[#c9a44c]/10 border border-[#c9a44c]/20 mb-6">
                {a.tag}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 whitespace-pre-line">
                <span className="text-shimmer">{a.heroTitle}</span>
              </h1>
              <p className="text-lg text-[#8b7e6a] leading-relaxed max-w-xl">
                {a.heroDesc}
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-xl shadow-[#c9a44c]/10">
                  <GameImage
                    src="/picture/hero-ai-engine.jpg"
                    aspect="video"
                    glowColor="indigo"
                    overlayText="AI Engine Visualization"
                  />
                </div>
                {/* Floating data overlay */}
                <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-[#0a0a14]/95 backdrop-blur-sm border border-[#c9a44c]/20 shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2dd4a8]" />
                    </span>
                    <span className="text-[10px] text-[#2dd4a8] font-semibold">
                      {a.live}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#f0e6d3]">12M+</div>
                  <div className="text-[10px] text-[#8b7e6a]">
                    {a.gamesAnalyzed}
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{a.architecture.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              {a.architecture.desc}
            </p>
          </FadeUp>

          {/* Architecture diagram placeholder */}
          <FadeUp delay={100}>
            <div className="mb-12 rounded-2xl overflow-hidden border border-[#2a2a3e] shadow-md">
              <GameImage
                src="/picture/ai-architecture.jpg"
                aspect="wide"
                glowColor="indigo"
                overlayText="System Architecture Diagram"
              />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {a.architecture.modules.map((mod, i) => {
              const Icon = moduleIcons[i];
              const style = moduleColors[i];
              return (
                <Card
                  key={mod.title}
                  className="p-0 overflow-hidden"
                  delay={i * 100}
                >
                  <div className="h-32 overflow-hidden">
                    <GameImage
                      src={
                        [
                          "/picture/gameplay-pve.jpg",
                          "/picture/ai-demo.jpg",
                          "/picture/feat-optimal.jpg",
                          "/picture/feat-sparring.jpg",
                          "/picture/feat-review.jpg",
                          "/picture/feat-winrate.jpg",
                        ][i]
                      }
                      aspect="wide"
                      glowColor={style.imgColor}
                      overlayText={mod.title}
                      className="h-full !aspect-auto"
                    />
                  </div>
                  <div className="p-6">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${style.bg} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-5 h-5 ${style.color}`} />
                    </div>
                    <h3 className="text-base font-bold mb-2 text-[#f0e6d3]">
                      {mod.title}
                    </h3>
                    <p className="text-sm text-[#8b7e6a] leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section
        id="performance"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#c9a44c]/5 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{a.performance.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              {a.performance.desc}
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {a.performance.stats.map((stat, i) => (
              <Card key={stat.label} className="text-center" delay={i * 80}>
                <div className="text-2xl md:text-3xl font-extrabold text-[#c9a44c] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-[#8b7e6a] font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* AI in action */}
          <FadeUp delay={100}>
            <Card className="p-0 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4 text-[#f0e6d3]">
                    {a.performance.actionTitle}
                  </h3>
                  <p className="text-sm text-[#8b7e6a] leading-relaxed mb-6">
                    {a.performance.actionDesc}
                  </p>
                  <div className="space-y-2">
                    {a.performance.actionFeatures.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a44c]" />
                        <span className="text-xs text-[#8b7e6a]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-full min-h-[280px] overflow-hidden">
                  <GameImage
                    src="/picture/gameplay-pvp.jpg"
                    aspect="square"
                    glowColor="indigo"
                    overlayText="AI Analysis Demo"
                    className="h-full !aspect-auto"
                  />
                </div>
              </div>
            </Card>
          </FadeUp>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section
        id="difficulty"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{a.difficulty.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              {a.difficulty.desc}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {a.difficulty.levels.map((item, i) => (
              <Card
                key={item.level}
                className="p-0 overflow-hidden"
                delay={i * 120}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr]">
                  <div className="h-full min-h-[120px] overflow-hidden">
                    <GameImage
                      src={
                        [
                          "/picture/ai-analysis.jpg",
                          "/picture/ai-decision.jpg",
                          "/picture/ai-pve-interface.jpg",
                          "/picture/ai-architecture.jpg",
                        ][i]
                      }
                      aspect="square"
                      glowColor={difficultyColors[i]}
                      overlayText={item.level}
                      className="h-full !aspect-auto"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-base font-bold text-[#f0e6d3]">
                        {item.level}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c9a44c]/10 text-[#c9a44c] font-medium">
                        ELO {item.elo}
                      </span>
                    </div>
                    <p className="text-xs text-[#8b7e6a] mb-2">{item.desc}</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#ff8c42]/10 text-[#ff8c42] font-medium">
                      {item.tokenCost} {a.difficulty.tokenCostLabel}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Helps You */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#e44d8a]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{a.howAiHelps.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              {a.howAiHelps.desc}
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {a.howAiHelps.items.map((item, i) => (
              <Card key={item.title} delay={i * 100}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a44c]/10 to-[#e44d8a]/10 border border-[#c9a44c]/20 flex items-center justify-center mb-4">
                  <span className="text-[#c9a44c] font-bold text-sm">{`0${i + 1}`}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#e8d48b]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#8b7e6a] leading-relaxed">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">
                {(a as any).caseStudies?.title ||
                  "Real-World Performance Cases"}
              </span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              {(a as any).caseStudies?.desc ||
                "Documented examples demonstrating our AI infrastructure's capabilities under real operating conditions."}
            </p>
          </FadeUp>
          <div className="space-y-6">
            {((a as any).caseStudies?.items || []).map((cs: any, i: number) => (
              <FadeUp key={cs.title} delay={i * 120}>
                <div className="rounded-2xl border border-[#2a2a3e] bg-[#12121e] overflow-hidden hover:border-[#c9a44c]/30 hover:shadow-lg hover:shadow-[#c9a44c]/10 transition-all duration-300">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-lg font-bold text-[#f0e6d3]">
                        {cs.title}
                      </h3>
                      <span className="shrink-0 text-[10px] px-3 py-1 rounded-full bg-[#c9a44c]/10 text-[#c9a44c] font-semibold border border-[#c9a44c]/20">
                        {cs.metric}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#c9a44c] font-semibold mb-1.5">
                          Scenario
                        </div>
                        <p className="text-sm text-[#8b7e6a] leading-relaxed">
                          {cs.scenario}
                        </p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#e44d8a] font-semibold mb-1.5">
                          Challenge
                        </div>
                        <p className="text-sm text-[#8b7e6a] leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#2dd4a8] font-semibold mb-1.5">
                          Result
                        </div>
                        <p className="text-sm text-[#8b7e6a] leading-relaxed">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default function AIPage() {
  return (
    <I18nProvider>
      <AIContent />
    </I18nProvider>
  );
}
