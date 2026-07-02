"use client";

import React, { useRef, useEffect, useState } from "react";
import { PageLayout } from "@/components/page-layout";
import { GameImage } from "@/components/game-image";
import { I18nProvider, useI18n } from "@/lib/i18n";
import { ContactModal } from "@/components/contact-modal";
import {
  Cpu,
  Globe,
  CheckCircle2,
  Building2,
  Rocket,
  Brain,
  Server,
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

function AboutContent() {
  const { t } = useI18n();
  const s = t.shopPage;
  const [contactOpen, setContactOpen] = useState(false);
  const [contactMessage, setContactMessage] = useState("");

  const capabilityIcons = [Brain, Server, Cpu, Globe];
  const capabilityColors = [
    "text-[#c9a44c]",
    "text-[#2dd4a8]",
    "text-[#e44d8a]",
    "text-[#6366f1]",
  ];

  return (
    <PageLayout>
      {/* Hero */}
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
                    src="/picture/company.jpg"
                    aspect="video"
                    glowColor="purple"
                    overlayText="OUBAO SDN. BHD."
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Company Capabilities */}
      <section
        id="capabilities"
        className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]"
      >
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl font-extrabold mb-4">
              <span className="text-shimmer">{s.plans.title}</span>
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">{s.plans.desc}</p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {s.plans.items.map((item, i) => {
              const Icon = capabilityIcons[i] || Rocket;
              const color = capabilityColors[i] || "text-[#c9a44c]";
              return (
                <Card key={item.name} className="flex flex-col" delay={i * 120}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a44c]/10 border border-[#c9a44c]/20 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#f0e6d3] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-[#8b7e6a]">{item.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {item.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[#a89a82]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#c9a44c] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section
        id="scale"
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
            {s.packs.items.map((item, i) => (
              <Card
                key={item.name}
                className="text-center flex flex-col items-center"
                delay={i * 100}
              >
                <div className="text-3xl font-extrabold text-[#c9a44c] mb-2">
                  {item.tokens}
                </div>
                <div className="text-sm font-semibold text-[#f0e6d3] mb-1">
                  {item.name}
                </div>
                <div className="text-xs text-[#8b7e6a]">{item.price}</div>
                {item.bonus && (
                  <div className="text-xs text-[#2dd4a8] font-semibold mt-2">
                    {item.bonus}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section
        id="info"
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

      {/* Trust / Compliance */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#2dd4a8]/5 to-transparent">
        <FadeUp>
          <div className="max-w-4xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-[#c9a44c] mx-auto mb-6" />
            <h2 className="text-2xl font-extrabold mb-4 text-[#f0e6d3]">
              {s.trust.title}
            </h2>
            <p className="text-sm text-[#8b7e6a] leading-relaxed max-w-lg mx-auto mb-8">
              {s.trust.desc}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-[#8b7e6a]">
              {s.trust.badges.map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a44c]" /> {item}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]">
        <FadeUp>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4 text-[#f0e6d3]">
              {(s as any).ctaTitle || "Partner With Us"}
            </h2>
            <p className="text-[#8b7e6a] mb-8 max-w-xl mx-auto">
              {(s as any).ctaDesc ||
                "Interested in our AI gaming infrastructure capabilities? Get in touch to learn more about what OUBAO SDN. BHD. can deliver."}
            </p>
            <button
              onClick={() => {
                setContactMessage("");
                setContactOpen(true);
              }}
              className="inline-block px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#c9a44c] to-[#8b6914] text-[#0a0a14] font-semibold tracking-wider shadow-md shadow-[#c9a44c]/20 hover:shadow-[#c9a44c]/40 hover:scale-[1.02] transition-all duration-300 text-sm"
            >
              {(s as any).ctaButton || "Contact Us"}
            </button>
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

export default function AboutPage() {
  return (
    <I18nProvider>
      <AboutContent />
    </I18nProvider>
  );
}
