"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

// ─── Tilt Card — 3D perspective tilt on hover ────────────────────────────────
export function TiltCard({
  children,
  className = "",
  intensity = 8,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02, 1.02, 1.02)`;
    el.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Shine overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background:
            "radial-gradient(300px circle at var(--shine-x, 50%) var(--shine-y, 50%), rgba(255,255,255,0.15), transparent 60%)",
        }}
      />
      {children}
    </div>
  );
}

// ─── Animated Counter — counts up with easing ────────────────────────────────
export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Floating Cards — animated floating poker cards in hero ──────────────────
export function FloatingCards() {
  const cards = [
    {
      suit: "♠",
      value: "A",
      x: "8%",
      y: "20%",
      delay: 0,
      rotate: -15,
      size: "lg",
    },
    {
      suit: "♥",
      value: "K",
      x: "75%",
      y: "15%",
      delay: 0.5,
      rotate: 12,
      size: "lg",
    },
    {
      suit: "♦",
      value: "Q",
      x: "85%",
      y: "55%",
      delay: 1.0,
      rotate: -8,
      size: "md",
    },
    {
      suit: "♣",
      value: "J",
      x: "15%",
      y: "60%",
      delay: 1.5,
      rotate: 20,
      size: "md",
    },
    {
      suit: "♥",
      value: "10",
      x: "60%",
      y: "70%",
      delay: 0.8,
      rotate: -5,
      size: "sm",
    },
    {
      suit: "♠",
      value: "7",
      x: "40%",
      y: "12%",
      delay: 1.2,
      rotate: 8,
      size: "sm",
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {cards.map((card, i) => {
        const isRed = card.suit === "♥" || card.suit === "♦";
        const sizeClass =
          card.size === "lg"
            ? "w-16 h-22 text-lg"
            : card.size === "md"
              ? "w-12 h-16 text-sm"
              : "w-10 h-14 text-xs";

        return (
          <div
            key={i}
            className={`absolute ${sizeClass} rounded-lg border border-[#c9a44c]/20 bg-[#12121e]/80 backdrop-blur-sm flex flex-col items-center justify-center shadow-sm`}
            style={{
              left: card.x,
              top: card.y,
              transform: `rotate(${card.rotate}deg)`,
              animation: `floatCard 6s ease-in-out ${card.delay}s infinite`,
              opacity: 0.7,
            }}
          >
            <span
              className={`font-light ${isRed ? "text-red-400" : "text-indigo-400"}`}
            >
              {card.value}
            </span>
            <span
              className={`text-[10px] ${isRed ? "text-red-300" : "text-indigo-300"}`}
            >
              {card.suit}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ─── Stagger Children — reveals children one by one ──────────────────────────
export function StaggerChildren({
  children,
  className = "",
  stagger = 80,
  threshold = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// ─── Pulse Dot — breathing indicator ─────────────────────────────────────────
export function PulseDot({
  color = "emerald",
  size = 2,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <span className="relative inline-flex">
      <span
        className={`absolute inline-flex h-full w-full rounded-full bg-${color}-400 opacity-75 animate-ping`}
        style={{ width: size * 4, height: size * 4 }}
      />
      <span
        className={`relative inline-flex rounded-full bg-${color}-500`}
        style={{ width: size * 4, height: size * 4 }}
      />
    </span>
  );
}

// ─── Magnetic Button — slightly follows cursor ───────────────────────────────
export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  href?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  };

  const props = {
    ref: ref as any,
    className: `transition-transform duration-300 ease-out ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
  };

  if (href) {
    const Link = require("next/link").default;
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  return <button {...props}>{children}</button>;
}

// ─── Typewriter Number — reveals number digit by digit ───────────────────────
export function TypewriterNumber({
  value,
  className = "",
  delay = 0,
}: {
  value: string;
  className?: string;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(value.slice(0, i));
        if (i >= value.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, value, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed || "\u00A0"}
    </span>
  );
}

// ─── Parallax Section — subtle parallax on scroll ────────────────────────────
export function ParallaxSection({
  children,
  className = "",
  speed = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = elementCenter - viewportCenter;
      setOffset(distance * speed);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {children}
      </div>
    </div>
  );
}
