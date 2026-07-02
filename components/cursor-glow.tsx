"use client";

import { useEffect, useRef } from "react";

// Global cursor glow that follows the mouse
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let x = 0,
      y = 0,
      targetX = 0,
      targetY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      el.style.transform = `translate(${x - 200}px, ${y - 200}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    requestAnimationFrame(animate);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9999] mix-blend-soft-light opacity-0 md:opacity-100 transition-opacity duration-1000"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
