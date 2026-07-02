"use client";

import { useEffect, useState, useMemo } from "react";

const LETTERS = ["O", "U", "B", "A", "O", "G", "A", "M", "E"];

const LETTER_IN_STAGGER = 80;
const LETTER_IN_DUR = 600;
const HOLD_DURATION = 600;
const LETTERS_IN_TOTAL =
  LETTER_IN_STAGGER * (LETTERS.length - 1) + LETTER_IN_DUR + HOLD_DURATION;

const LETTER_OUT_DUR = 500;
const LETTERS_OUT_TOTAL = LETTER_OUT_DUR + 200;

const CURTAIN_DELAY = LETTERS_IN_TOTAL + 200;
const CURTAIN_DURATION = 1300;
const ANIM_TOTAL = CURTAIN_DELAY + LETTERS_OUT_TOTAL + 1400;

export const INTRO_DURATION_MS = CURTAIN_DELAY + CURTAIN_DURATION;
export const HERO_REVEAL_MS = CURTAIN_DELAY + CURTAIN_DURATION - 150;

type Phase = "idle" | "in" | "hold" | "explode" | "done";

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [curtainUp, setCurtainUp] = useState(false);

  // Pre-calculate random explosion directions for each letter
  const explosionDirs = useMemo(() => {
    return LETTERS.map((_, i) => {
      const angle =
        (i / LETTERS.length) * Math.PI * 2 + (Math.random() - 0.5) * 0.8;
      const distance = 600 + Math.random() * 400;
      const rotation = (Math.random() - 0.5) * 720;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - 200,
        rotation,
        scale: 0.2 + Math.random() * 0.5,
      };
    });
  }, []);

  useEffect(() => {
    const t0 = setTimeout(() => setPhase("in"), 80);
    const t1 = setTimeout(
      () => setPhase("hold"),
      LETTERS_IN_TOTAL - HOLD_DURATION,
    );
    const t2 = setTimeout(() => setPhase("explode"), LETTERS_IN_TOTAL);
    const t3 = setTimeout(() => setCurtainUp(true), CURTAIN_DELAY);
    const t4 = setTimeout(() => onDone(), HERO_REVEAL_MS);
    const t5 = setTimeout(() => setPhase("done"), ANIM_TOTAL);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onDone]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none"
      aria-hidden="true"
    >
      {/* Dark curtain — retracts upward */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          bottom: curtainUp ? "100%" : "0%",
          transition: curtainUp
            ? "bottom 1.3s cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
          background: "#0a0a14",
        }}
      />

      {/* Explosion particles (show during explode phase) */}
      {phase === "explode" && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * Math.PI * 2;
            const dist = 100 + Math.random() * 300;
            const size = 2 + Math.random() * 4;
            const delay = Math.random() * 100;
            return (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  background:
                    i % 3 === 0
                      ? "#c9a44c"
                      : i % 3 === 1
                        ? "#e8d48b"
                        : "#e44d8a",
                  opacity: 0,
                  animation: `particleBurst ${LETTER_OUT_DUR}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards`,
                  ["--tx" as string]: `${Math.cos(angle) * dist}px`,
                  ["--ty" as string]: `${Math.sin(angle) * dist}px`,
                }}
              />
            );
          })}
        </div>
      )}

      {/* OUBAOGAME letters */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex" style={{ gap: "0.02em" }}>
          {LETTERS.map((letter, i) => {
            const inDelay = i * LETTER_IN_STAGGER;
            const dir = explosionDirs[i];

            const isIdle = phase === "idle";
            const isIn = phase === "in" || phase === "hold";
            const isExplode = phase === "explode";

            let opacity = 0;
            let blur = 0;
            let translateX = 0;
            let translateY = 0;
            let rotation = 0;
            let scale = 1;

            if (isIdle) {
              opacity = 0;
              blur = 36;
              translateY = 48;
              scale = 0.5;
            } else if (isIn) {
              opacity = 1;
              blur = 0;
              translateY = 0;
              scale = 1;
            } else if (isExplode) {
              opacity = 0;
              blur = 8;
              translateX = dir.x;
              translateY = dir.y;
              rotation = dir.rotation;
              scale = dir.scale;
            }

            const transition = isExplode
              ? `all ${LETTER_OUT_DUR}ms cubic-bezier(0.16, 1, 0.3, 1)`
              : isIn
                ? `opacity ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                   filter ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms,
                   transform ${LETTER_IN_DUR}ms cubic-bezier(0.16,1,0.3,1) ${inDelay}ms`
                : "none";

            return (
              <span
                key={i}
                className="font-sans font-bold leading-none select-none"
                style={{
                  fontSize: `calc((100vw - 80px) / ${LETTERS.length + 1})`,
                  letterSpacing: "0.04em",
                  background:
                    "linear-gradient(180deg, #f5d77a 0%, #c9a44c 50%, #8b6914 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity,
                  filter: `blur(${blur}px)`,
                  transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg) scale(${scale})`,
                  transition,
                  willChange: "opacity, filter, transform",
                  textShadow: isIn ? "0 0 40px rgba(201,164,76,0.3)" : "none",
                }}
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>

      {/* Flash on explosion */}
      {phase === "explode" && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle, rgba(201,164,76,0.3) 0%, transparent 60%)",
            animation: `flashBurst ${LETTER_OUT_DUR}ms ease-out forwards`,
          }}
        />
      )}

      <style>{`
        @keyframes particleBurst {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0.3);
          }
        }
        @keyframes flashBurst {
          0% {
            opacity: 1;
            transform: scale(0.5);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
    </div>
  );
}
