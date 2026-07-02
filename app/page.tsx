"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { IntroAnimation } from "@/components/intro-animation";
import { LiveAgentFeed, LiveAgentCounter } from "@/components/live-agent-feed";
import { RevealText } from "@/components/reveal-text";
import { MobileNav } from "@/components/mobile-nav";
import { I18nProvider, useI18n } from "@/lib/i18n";
import {
  FloatingCards,
  StaggerChildren,
  MagneticButton,
  AnimatedCounter,
  TiltCard,
} from "@/components/animations";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";
import { ParticleField } from "@/components/particles";
import { GameImage, GameScreenshotGallery } from "@/components/game-image";
import { ContactModal } from "@/components/contact-modal";
import {
  PvEIcon,
  PvPIcon,
  TournamentIcon,
  StepCreateIcon,
  StepChooseIcon,
  StepPlayIcon,
  WinRateIcon,
  OptimalPlayIcon,
  AISparringIcon,
  ReviewIcon,
  EncryptionIcon,
  RNGIcon,
  AntiCheatIcon,
  PaymentIcon,
  GoldMedalIcon,
  SilverMedalIcon,
  BronzeMedalIcon,
  PokerIcon,
  LandlordIcon,
} from "@/components/icons";

function useInView(threshold = 0.15) {
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

function BentoCard({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView(0.1);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  const handleLeave = () => {
    const el = cardRef.current;
    if (el)
      el.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
  };
  return (
    <div
      ref={ref}
      className="h-full"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(24px) scale(0.97)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div
        ref={cardRef}
        className={`group relative rounded-2xl border border-[#2a2a3e] bg-[#12121e] overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-[#c9a44c]/30 hover:shadow-xl hover:shadow-[#c9a44c]/10 gradient-border ripple-effect ${className}`}
        style={{
          transformStyle: "preserve-3d",
          transition:
            "transform 0.2s ease-out, border-color 0.3s, box-shadow 0.3s",
        }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(201,164,76,0.08), transparent 60%)",
          }}
        />
        {children}
      </div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-semibold text-[#c9a44c] bg-[#c9a44c]/10 border border-[#c9a44c]/20 hover-wobble cursor-default transition-all hover:bg-[#c9a44c]/20 hover:scale-105">
      {children}
    </span>
  );
}

function SectionDivider() {
  const { ref, inView } = useInView(0.5);
  return (
    <div ref={ref} className="mx-6 md:mx-20 h-px overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-transparent via-[#c9a44c]/40 to-transparent"
        style={{
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
          transition: "transform 1.2s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </div>
  );
}

function PageContent() {
  const { t } = useI18n();
  const [heroReady, setHeroReady] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const handleIntroDone = useCallback(() => {
    setHeroReady(true);
  }, []);

  return (
    <div className="min-h-screen font-sans antialiased bg-transparent text-[#f0e6d3]">
      <ScrollProgress />
      <CursorGlow />
      <IntroAnimation onDone={handleIntroDone} />
      <MobileNav />

      {/* ♠•♠•♠•?HERO ♠•♠•♠•?*/}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#c9a44c]/10 blur-[120px] animate-pulse"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#e44d8a]/8 blur-[80px] animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#ff8c42]/8 blur-[100px] animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "4s" }}
          />
        </div>
        <div
          className="absolute inset-0 z-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(201,164,76,0.08) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <ParticleField />
        <FloatingCards />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12121e] border border-[#2a2a3e] shadow-sm mb-8 glow-shadow"
                style={{
                  opacity: heroReady ? 1 : 0,
                  transform: heroReady ? "translateY(0)" : "translateY(12px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[11px] text-[#8b7e6a] tracking-wide">
                  {t.hero.onlineNow}
                </span>
              </div>
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6 whitespace-pre-line"
                style={{
                  opacity: heroReady ? 1 : 0,
                  filter: heroReady ? "blur(0px)" : "blur(20px)",
                  transform: heroReady ? "translateY(0)" : "translateY(28px)",
                  transition: "all 1s cubic-bezier(0.16,1,0.3,1) 80ms",
                }}
              >
                <span className="text-shimmer">{t.hero.title}</span>
              </h1>
              <p
                className="text-lg text-[#8b7e6a] leading-relaxed max-w-xl mb-10"
                style={{
                  opacity: heroReady ? 1 : 0,
                  transform: heroReady ? "translateY(0)" : "translateY(14px)",
                  transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 180ms",
                }}
              >
                {t.hero.subtitle}
              </p>
              <div
                className="flex gap-10 sm:gap-14 mb-12"
                style={{
                  opacity: heroReady ? 1 : 0,
                  transform: heroReady ? "translateY(0)" : "translateY(12px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 280ms",
                }}
              >
                {t.hero.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#f0e6d3] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-[#8b7e6a] tracking-widest uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="flex flex-wrap gap-4"
                style={{
                  opacity: heroReady ? 1 : 0,
                  transform: heroReady ? "translateY(0)" : "translateY(12px)",
                  transition: "all 0.8s cubic-bezier(0.16,1,0.3,1) 380ms",
                }}
              >
                <Link
                  href="/games"
                  className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] text-sm font-semibold tracking-wider shadow-lg shadow-[#c9a44c]/25 hover:shadow-[#c9a44c]/40 hover:scale-[1.05] transition-all duration-300 glow-shadow"
                >
                  {t.nav.cta}
                </Link>
                <a
                  href="#ai-battle"
                  className="px-8 py-4 rounded-xl border border-[#2a2a3e] text-[#8b7e6a] text-sm font-medium tracking-wide hover:border-[#c9a44c]/40 hover:text-[#c9a44c] hover:bg-[#c9a44c]/10 transition-all duration-300 ripple-effect"
                >
                  {t.hero.learnMore}
                </a>
              </div>
            </div>

            {/* Right: Hero game visual */}
            <div
              className="relative hidden lg:block"
              style={{
                opacity: heroReady ? 1 : 0,
                transform: heroReady
                  ? "translateX(0) rotate(0deg)"
                  : "translateX(40px) rotate(2deg)",
                transition: "all 1.2s cubic-bezier(0.16,1,0.3,1) 300ms",
              }}
            >
              <div className="image-float">
                <div className="relative rounded-2xl overflow-hidden border border-[#c9a44c]/20 shadow-2xl shadow-[#c9a44c]/10 glow-shadow">
                  <GameImage
                    src="/picture/hero-main.jpg"
                    aspect="video"
                    glowColor="indigo"
                    overlayText="Game Main Visual"
                  />
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#0a0a14]/90 backdrop-blur-sm border border-[#c9a44c]/20 shadow-lg">
                    <span className="text-[10px] font-bold text-[#c9a44c] tracking-wider">
                      {t.misc.live}
                    </span>
                  </div>
                </div>
              </div>
              {/* Decorative floating mini cards */}
              <div
                className="absolute -bottom-6 -left-6 w-32 h-20 rounded-xl border border-[#2a2a3e] bg-[#12121e] shadow-lg overflow-hidden"
                style={
                  {
                    animation: "floatCard 4s ease-in-out infinite",
                    "--rotate": "-3deg",
                  } as React.CSSProperties
                }
              >
                <GameImage
                  src="/picture/hero-win-big.jpg"
                  aspect="video"
                  glowColor="purple"
                  overlayText="Win Big"
                />
              </div>
              <div
                className="absolute -top-4 -right-4 w-28 h-18 rounded-xl border border-[#2a2a3e] bg-[#12121e] shadow-lg overflow-hidden"
                style={
                  {
                    animation: "floatCard 5s ease-in-out infinite 1s",
                    "--rotate": "2deg",
                  } as React.CSSProperties
                }
              >
                <GameImage
                  src="/picture/hero-landlord.jpg"
                  aspect="video"
                  glowColor="orange"
                  overlayText="Landlord"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a14] to-transparent z-20 pointer-events-none" />
      </section>

      <SectionDivider />

      {/* ♠•♠•♠•?GAME SCREENSHOT GALLERY ♠•♠•♠•?*/}
      <section className="py-16 overflow-hidden">
        <GameScreenshotGallery images={[...t.gallery]} />
      </section>

      <SectionDivider />

      {/* ♠•♠•♠•?GAMES ♠•♠•♠•?*/}
      <section id="games" className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <Tag>{t.games.tag}</Tag>
            <RevealText className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#f0e6d3]">
              {t.games.title}
            </RevealText>
          </div>

          {/* Game Cards ♠€?image-first layout */}
          <div className="space-y-8">
            {t.games.cards.map((game, i) => (
              <BentoCard
                key={game.label}
                className="overflow-hidden"
                delay={i * 120}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
                >
                  {/* Image side */}
                  <div
                    className={`relative overflow-hidden ${i % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="image-hover-zoom h-full min-h-[280px] lg:min-h-[360px]">
                      <GameImage
                        src={
                          i === 0
                            ? "/picture/gameplay-win-big.jpg"
                            : "/picture/gameplay-landlord.jpg"
                        }
                        aspect="video"
                        glowColor={i === 0 ? "indigo" : "purple"}
                        overlayText={game.title}
                        className="h-full !aspect-auto"
                      />
                    </div>
                    {/* Game label overlay */}
                    <div className="absolute top-4 left-4 z-20">
                      <Tag>{game.label}</Tag>
                    </div>
                  </div>
                  {/* Text side */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="float-rotate">
                        {i === 0 ? <PokerIcon /> : <LandlordIcon />}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#f0e6d3]">
                      {game.title}
                    </h3>
                    <p className="text-sm text-[#8b7e6a] leading-relaxed mb-8">
                      {game.desc}
                    </p>
                    <div className="flex gap-10 pt-6 border-t border-[#2a2a3e]">
                      {game.stats.map((s) => (
                        <div key={s.l}>
                          <div className="text-2xl font-bold text-[#c9a44c]">
                            {s.v}
                          </div>
                          <div className="text-[10px] text-[#8b7e6a] tracking-widest mt-1 uppercase">
                            {s.l}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>

          {/* Game Modes with thumbnails */}
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            stagger={100}
          >
            {t.games.modes.map((mode, mi) => (
              <BentoCard key={mode.title} className="h-full overflow-hidden">
                {/* Mode thumbnail */}
                <div className="relative h-36 overflow-hidden">
                  <GameImage
                    src={
                      mi === 0
                        ? "/picture/mode-pve.jpg"
                        : mi === 1
                          ? "/picture/mode-pvp.jpg"
                          : "/picture/mode-tournament.jpg"
                    }
                    aspect="wide"
                    glowColor={
                      mi === 0 ? "orange" : mi === 1 ? "indigo" : "emerald"
                    }
                    overlayText={mode.title}
                    className="h-full !aspect-auto"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    {mi === 0 ? (
                      <PvEIcon />
                    ) : mi === 1 ? (
                      <PvPIcon />
                    ) : (
                      <TournamentIcon />
                    )}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-[#e8d48b]">
                    {mode.title}
                  </h3>
                  <p className="text-sm text-[#8b7e6a] leading-relaxed">
                    {mode.desc}
                  </p>
                </div>
              </BentoCard>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?HOW IT WORKS ♠•♠•♠•?*/}
      <section className="py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#c9a44c]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Tag>{t.howItWorks.tag}</Tag>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#f0e6d3]">
              {t.howItWorks.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.howItWorks.steps.map((s, i) => {
              const colors = [
                "from-[#c9a44c] to-[#e8d48b]",
                "from-[#e44d8a] to-[#ff7eb3]",
                "from-[#ff8c42] to-[#ff6b35]",
              ];
              const imgColors = ["indigo", "purple", "orange"] as const;
              return (
                <BentoCard
                  key={s.step}
                  className="h-full overflow-hidden"
                  delay={i * 100}
                >
                  {/* Step screenshot */}
                  <div className="relative h-44 overflow-hidden">
                    <GameImage
                      aspect="video"
                      glowColor={imgColors[i]}
                      overlayText={`Step ${s.step}`}
                      className="h-full !aspect-auto"
                    />
                    <div className="absolute top-3 left-3">
                      <div
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r ${colors[i]} text-[#0a0a14] text-xs font-bold shadow-md`}
                      >
                        {s.step}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="mb-3">
                      {i === 0 ? (
                        <StepCreateIcon />
                      ) : i === 1 ? (
                        <StepChooseIcon />
                      ) : (
                        <StepPlayIcon />
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#f0e6d3]">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#8b7e6a] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </BentoCard>
              );
            })}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?AI BATTLE ♠•♠•♠•?*/}
      <section id="ai-battle" className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
            <div>
              <Tag>{t.aiBattle.tag}</Tag>
              <RevealText className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#f0e6d3]">
                {t.aiBattle.title}
              </RevealText>
            </div>
            <p className="text-sm text-[#8b7e6a] leading-relaxed max-w-sm">
              {t.aiBattle.subtitle}
            </p>
          </div>

          {/* Mode A & B ♠€?with screenshots */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
            <BentoCard className="overflow-hidden" delay={0}>
              {/* Mode A screenshot */}
              <div className="relative h-48 overflow-hidden">
                <GameImage
                  src="/picture/gameplay-pve.jpg"
                  aspect="wide"
                  glowColor="orange"
                  overlayText="PvE Battle Interface"
                  className="h-full !aspect-auto"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a14]/90 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-[#ff8c42] animate-pulse" />
                  <span className="text-[10px] text-[#a89a82] tracking-wide font-semibold">
                    {t.aiBattle.modeA.title}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {t.aiBattle.modeA.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#ff8c42]/10 border border-[#ff8c42]/20 flex items-center justify-center text-[#ff8c42] text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#e8d48b]">
                          {step.title}
                        </p>
                        <p className="text-xs text-[#8b7e6a] mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
            <BentoCard className="overflow-hidden" delay={100}>
              {/* Mode B screenshot */}
              <div className="relative h-48 overflow-hidden">
                <GameImage
                  src="/picture/ai-analysis.jpg"
                  aspect="wide"
                  glowColor="indigo"
                  overlayText="AI Analysis Interface"
                  className="h-full !aspect-auto"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a0a14]/90 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-[#c9a44c] animate-pulse" />
                  <span className="text-[10px] text-[#a89a82] tracking-wide font-semibold">
                    {t.aiBattle.modeB.title}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-4">
                  {t.aiBattle.modeB.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-[#c9a44c]/10 border border-[#c9a44c]/20 flex items-center justify-center text-[#c9a44c] text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#e8d48b]">
                          {step.title}
                        </p>
                        <p className="text-xs text-[#8b7e6a] mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </div>

          {/* AI Feature cards with thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.aiBattle.features.map((feat, i) => (
              <BentoCard
                key={feat.title}
                className="overflow-hidden h-full flex flex-col"
                delay={i * 60}
              >
                <div className="relative h-28 overflow-hidden shrink-0">
                  <GameImage
                    src={
                      [
                        "/picture/feat-winrate.jpg",
                        "/picture/feat-optimal.jpg",
                        "/picture/feat-sparring.jpg",
                        "/picture/feat-review.jpg",
                      ][i]
                    }
                    aspect="wide"
                    glowColor={
                      i === 0
                        ? "emerald"
                        : i === 1
                          ? "indigo"
                          : i === 2
                            ? "orange"
                            : "purple"
                    }
                    overlayText={feat.title}
                    className="h-full !aspect-auto"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-3">
                    {i === 0 ? (
                      <WinRateIcon />
                    ) : i === 1 ? (
                      <OptimalPlayIcon />
                    ) : i === 2 ? (
                      <AISparringIcon />
                    ) : (
                      <ReviewIcon />
                    )}
                  </div>
                  <h3 className="text-sm font-bold mb-1.5 text-[#e8d48b]">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#8b7e6a] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?AI TECH ♠•♠•♠•?*/}
      <section className="py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#e44d8a]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Tag>{t.aiTech.tag}</Tag>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#f0e6d3]">
              {t.aiTech.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {t.aiTech.stats.map((stat, i) => (
              <BentoCard
                key={stat.label}
                className="p-6 text-center"
                delay={i * 80}
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#c9a44c] mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="text-[10px] text-[#8b7e6a] tracking-widest uppercase">
                  {stat.label}
                </div>
              </BentoCard>
            ))}
          </div>

          {/* AI Tech ♠€?left text + right screenshot */}
          <BentoCard className="overflow-hidden" delay={0}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-[#f0e6d3]">
                  {t.aiTech.engineTitle}
                </h3>
                <p className="text-sm text-[#8b7e6a] leading-relaxed mb-6">
                  {t.aiTech.engineDesc}
                </p>
                <div className="space-y-3">
                  {t.aiTech.engineFeatures.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#c9a44c]" />
                      <span className="text-xs text-[#8b7e6a]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* AI interface screenshot */}
              <div className="relative h-full min-h-[300px] overflow-hidden">
                <GameImage
                  src="/picture/ai-analysis.jpg"
                  aspect="square"
                  glowColor="indigo"
                  overlayText="AI Decision Engine"
                  className="h-full !aspect-auto"
                />
                {/* Floating AI stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0a0a14]/90 backdrop-blur-sm border border-[#c9a44c]/20 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] text-[#2dd4a8] font-semibold">
                      {t.aiTech.analysisActive}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="text-sm font-bold text-[#c9a44c]">
                        87.3%
                      </div>
                      <div className="text-[9px] text-[#8b7e6a]">
                        {t.aiTech.strength}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#2dd4a8]">
                        72.1%
                      </div>
                      <div className="text-[9px] text-[#8b7e6a]">
                        {t.aiTech.winRate}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-orange-500">
                        RAISE
                      </div>
                      <div className="text-[9px] text-[#8b7e6a]">
                        {t.aiTech.action}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?TOKEN ♠•♠•♠•?*/}
      <section id="token" className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <Tag>{t.token.tag}</Tag>
            <RevealText className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#f0e6d3]">
              {t.token.title}
            </RevealText>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <BentoCard className="p-8 h-full" delay={0}>
                <h3 className="text-lg font-bold mb-6 text-[#f0e6d3]">
                  {t.token.tableTitle}
                </h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#2a2a3e]">
                      {t.token.tableHeaders.map((h) => (
                        <th
                          key={h}
                          className="text-left py-3 text-[10px] text-[#8b7e6a] tracking-widest font-semibold uppercase"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {t.token.tableRows.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          i < t.token.tableRows.length - 1
                            ? "border-b border-[#2a2a3e]"
                            : ""
                        }
                      >
                        <td className="py-4 text-[#a89a82]">{row.scenario}</td>
                        <td
                          className={`py-4 font-semibold ${row.isPositive ? "text-[#2dd4a8]" : "text-[#c9a44c]"}`}
                        >
                          {row.cost}
                        </td>
                        <td className="py-4 text-xs text-[#8b7e6a]">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </BentoCard>
            </div>
            <div>
              <BentoCard
                className="p-8 h-full flex flex-col justify-between"
                delay={120}
              >
                <div>
                  <div className="text-[10px] text-[#8b7e6a] tracking-widest uppercase font-semibold mb-4">
                    {t.token.liveTitle}
                  </div>
                  <div className="flex items-end gap-2 mb-6">
                    <LiveAgentCounter />
                    <span className="text-[#8b7e6a] text-xs mb-2">
                      {t.token.liveLabel}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {t.token.liveStats.map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-2.5 border-b border-[#2a2a3e]"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${i === 0 ? "bg-orange-400" : i === 1 ? "bg-emerald-400" : "bg-[#c9a44c]"}`}
                        />
                        <span className="text-xs text-[#8b7e6a]">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-sm font-bold text-[#e8d48b]">
                        <AnimatedCounter
                          end={parseInt(item.value.replace(/,/g, ""))}
                          duration={2500}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?TESTIMONIALS ♠•♠•♠•?*/}
      <section className="py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#c9a44c]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Tag>{t.testimonials.tag}</Tag>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#f0e6d3]">
              {t.testimonials.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.testimonials.reviews.map((review, i) => (
              <BentoCard
                key={review.name}
                className="p-8 h-full"
                delay={i * 100}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.stars)].map((_, j) => (
                    <span
                      key={j}
                      className="text-[#c9a44c] text-sm hover-wobble inline-block cursor-default"
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-sm text-[#8b7e6a] leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a44c]/15 to-[#e44d8a]/15 border border-[#c9a44c]/20 flex items-center justify-center text-sm font-bold text-[#c9a44c]">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#e8d48b]">
                      {review.name}
                    </div>
                    <div className="text-[11px] text-[#8b7e6a]">
                      {review.role}
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?SHOP ♠•♠•♠•?*/}
      <section id="shop" className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Tag>{t.shop.tag}</Tag>
            <RevealText className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#f0e6d3]">
              {t.shop.title}
            </RevealText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.shop.plans.map((plan, i) => (
              <BentoCard
                key={plan.name}
                className={`p-8 flex flex-col h-full ${plan.highlight ? "border-[#c9a44c]/30 bg-[#c9a44c]/10 ring-1 ring-[#c9a44c]/20" : ""}`}
                delay={i * 80}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4 text-[9px] px-2.5 py-1 rounded-full bg-[#c9a44c]/20 text-[#c9a44c] font-bold tracking-wider animate-pulse">
                    {t.misc.popular}
                  </div>
                )}
                <div className="mb-8">
                  <div className="text-[11px] tracking-widest text-[#8b7e6a] mb-3 uppercase font-semibold">
                    {plan.name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-extrabold text-[#f0e6d3]">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[#8b7e6a] text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#8b7e6a]">{plan.sub}</p>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-[#a89a82]"
                    >
                      <svg
                        className="w-4 h-4 text-[#c9a44c] shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setContactMessage(
                      `${t.contactModal.purchasePrefix}: ${plan.name} - ${plan.price}${plan.period}`,
                    );
                    setContactOpen(true);
                  }}
                  className={`block w-full py-3.5 rounded-xl text-sm font-semibold tracking-wider transition-all duration-300 ripple-effect text-center ${plan.highlight ? "bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] shadow-md shadow-[#c9a44c]/20 hover:shadow-[#c9a44c]/40 hover:scale-[1.02]" : "border border-[#2a2a3e] text-[#a89a82] hover:border-[#c9a44c]/40 hover:text-[#c9a44c] hover:bg-[#c9a44c]/10"}`}
                >
                  {plan.cta}
                </button>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?SECURITY ♠•♠•♠•?*/}
      <section className="py-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#c9a44c]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <Tag>{t.security.tag}</Tag>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-[#f0e6d3]">
              {t.security.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.security.items.map((item, i) => (
              <BentoCard key={item.title} className="p-6 h-full" delay={i * 60}>
                <div className="mb-4">
                  {i === 0 ? (
                    <EncryptionIcon />
                  ) : i === 1 ? (
                    <RNGIcon />
                  ) : i === 2 ? (
                    <AntiCheatIcon />
                  ) : (
                    <PaymentIcon />
                  )}
                </div>
                <h3 className="text-sm font-bold mb-2 text-[#e8d48b]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8b7e6a] leading-relaxed">
                  {item.desc}
                </p>
              </BentoCard>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?RANKINGS ♠•♠•♠•?*/}
      <section id="ranking" className="py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Tag>{t.ranking.tag}</Tag>
              <RevealText className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-[#f0e6d3]">
                {t.ranking.title}
              </RevealText>
              <p className="mt-4 text-[#8b7e6a] leading-relaxed max-w-sm">
                {t.ranking.subtitle}
              </p>
              <StaggerChildren className="mt-8 space-y-3" stagger={120}>
                {t.ranking.players.map((player, i) => (
                  <TiltCard
                    key={i}
                    className="flex items-center gap-4 p-5 rounded-xl bg-[#12121e] border border-[#2a2a3e] shadow-sm cursor-pointer hover:border-indigo-100 hover:shadow-md transition-all duration-300"
                    intensity={3}
                  >
                    {i === 0 ? (
                      <GoldMedalIcon />
                    ) : i === 1 ? (
                      <SilverMedalIcon />
                    ) : (
                      <BronzeMedalIcon />
                    )}
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#e8d48b]">
                        {player.name}
                      </div>
                      <div className="text-xs text-[#8b7e6a]">
                        {player.wins}
                      </div>
                    </div>
                    <div className="text-sm font-bold text-[#c9a44c]">
                      {player.winRate}
                    </div>
                  </TiltCard>
                ))}
              </StaggerChildren>
            </div>
            <div>
              <div className="text-[10px] text-[#8b7e6a] tracking-widest uppercase font-semibold mb-4">
                {t.ranking.liveTitle}
              </div>
              <LiveAgentFeed />
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* ♠•♠•♠•?MARQUEE ♠•♠•♠•?*/}
      <section className="py-0 overflow-hidden select-none bg-[#12121e]/80 backdrop-blur-sm">
        <div
          className="flex border-b border-[#2a2a3e]"
          style={{ animation: "marqueeLeft 32s linear infinite" }}
        >
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex shrink-0">
              {t.marquee.row1.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-4 px-8 py-5 border-r border-[#2a2a3e] shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a44c] shrink-0" />
                  <span className="text-sm text-[#8b7e6a] whitespace-nowrap tracking-wide">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          className="flex"
          style={{ animation: "marqueeRight 26s linear infinite" }}
        >
          {[...Array(3)].map((_, rep) => (
            <div key={rep} className="flex shrink-0">
              {t.marquee.row2.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-4 px-8 py-5 border-r border-[#2a2a3e] shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e44d8a]/40 shrink-0" />
                  <span className="text-sm text-[#5a5a6e] whitespace-nowrap tracking-wide">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ♠•♠•♠•?CTA ♠•♠•♠•?*/}
      <section className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#c9a44c]/10 blur-[100px] animate-pulse"
            style={{ animationDuration: "6s" }}
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 whitespace-pre-line text-[#f0e6d3]">
            {t.cta.title}
          </h2>
          <p className="text-base text-[#8b7e6a] leading-relaxed mb-10">
            {t.cta.subtitle}
          </p>
          <MagneticButton
            href="/games"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] text-sm font-semibold tracking-wider shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.03] transition-all duration-300 glow-shadow"
          >
            {t.cta.button}
          </MagneticButton>
        </div>
      </section>

      {/* ♠•♠•♠•?FOOTER ♠•♠•♠•?*/}
      <footer className="border-t border-[#2a2a3e] bg-[#12121e]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
              <a href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#c9a44c] to-[#8b6914] flex items-center justify-center shadow-md shadow-[#c9a44c]/20">
                  <span className="text-[#0a0a14] text-sm font-bold">
                    &#9824;
                  </span>
                </div>
                <span className="text-[12px] font-bold tracking-[0.12em] text-[#f0e6d3]">
                  {t.nav.brand}
                </span>
              </a>
              <p className="text-xs text-[#8b7e6a] leading-relaxed max-w-[200px]">
                {t.footer.brandDesc}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#e8d48b] uppercase tracking-wider mb-4">
                {t.footer.gamesTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.footer.gameLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#8b7e6a] hover:text-[#c9a44c] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#e8d48b] uppercase tracking-wider mb-4">
                {t.footer.aiTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.footer.aiLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#8b7e6a] hover:text-[#c9a44c] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#e8d48b] uppercase tracking-wider mb-4">
                {t.footer.tokenTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.footer.tokenLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#8b7e6a] hover:text-[#c9a44c] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#e8d48b] uppercase tracking-wider mb-4">
                {t.footer.shopTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.footer.shopLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#8b7e6a] hover:text-[#c9a44c] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#e8d48b] uppercase tracking-wider mb-4">
                {t.footer.rankingTitle}
              </h4>
              <ul className="space-y-2.5">
                {t.footer.rankingLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-[#8b7e6a] hover:text-[#c9a44c] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#2a2a3e]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#5a5a6e]">{t.footer.copyright}</span>
            <div className="flex items-center gap-6">
              {t.footer.links.map((l) =>
                l.label === "Contact" || l.label === "Hubungi" ? (
                  <button
                    key={l.label}
                    onClick={() => {
                      setContactMessage("");
                      setContactOpen(true);
                    }}
                    className="text-xs text-[#5a5a6e] hover:text-[#8b7e6a] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </button>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-xs text-[#5a5a6e] hover:text-[#8b7e6a] transition-colors"
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
          defaultMessage={contactMessage}
        />
      </footer>
    </div>
  );
}

export default function PokerAIPage() {
  return (
    <I18nProvider>
      <PageContent />
    </I18nProvider>
  );
}
