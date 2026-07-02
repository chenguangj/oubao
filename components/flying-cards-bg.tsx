"use client";

import { useEffect, useRef } from "react";

/**
 * FlyingCardsBg — 全局固定背景
 * 大量扑克牌在深色背景中飞舞飘动
 * 明显可见但不遮挡前景内容
 */

const CARD_SUITS = ["♠", "♥", "♦", "♣"];
const CARD_VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const SUIT_COLORS: Record<string, string> = {
  "♠": "#c9a44c",
  "♥": "#e44d8a",
  "♦": "#e8d48b",
  "♣": "#ff7eb3",
};

interface Card {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  suit: string;
  value: string;
  scale: number;
  opacity: number;
  flipPhase: number;
  flipSpeed: number;
  wobblePhase: number;
  wobbleSpeed: number;
  wobbleAmp: number;
}

export function FlyingCardsBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // More cards, bigger, more visible
    const CARD_COUNT = Math.min(Math.floor((w * h) / 25000), 40);
    const cards: Card[] = [];

    for (let i = 0; i < CARD_COUNT; i++) {
      cards.push(createCard(w, h));
    }

    function createCard(width: number, height: number): Card {
      const suit = CARD_SUITS[Math.floor(Math.random() * CARD_SUITS.length)];
      const value = CARD_VALUES[Math.floor(Math.random() * CARD_VALUES.length)];
      const scale = 0.6 + Math.random() * 0.9; // bigger: 0.6 ~ 1.5
      const speed = 0.4 + Math.random() * 0.8; // faster
      const angle = Math.random() * Math.PI * 2;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2, // faster rotation
        suit,
        value,
        scale,
        opacity: 0.5 + Math.random() * 0.4, // highly visible: 0.5 ~ 0.9
        flipPhase: Math.random() * Math.PI * 2,
        flipSpeed: 0.008 + Math.random() * 0.015,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02,
        wobbleAmp: 0.3 + Math.random() * 0.5,
      };
    }

    function drawCard(ctx: CanvasRenderingContext2D, card: Card) {
      const cardW = 56 * card.scale;
      const cardH = 80 * card.scale;

      // 3D flip effect
      const flipScale = Math.cos(card.flipPhase);
      const absFlip = Math.abs(flipScale);

      if (absFlip < 0.1) return; // Edge-on, skip

      ctx.save();
      ctx.translate(card.x, card.y);
      ctx.rotate((card.rotation * Math.PI) / 180);
      ctx.scale(flipScale, 1);
      ctx.globalAlpha = card.opacity * (0.7 + absFlip * 0.3);

      const isBack = flipScale < 0;
      const radius = 5 * card.scale;

      // Card shadow
      ctx.shadowColor = "rgba(201, 164, 76, 0.3)";
      ctx.shadowBlur = 18 * card.scale;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 4 * card.scale;

      // Card body
      ctx.beginPath();
      ctx.roundRect(-cardW / 2, -cardH / 2, cardW, cardH, radius);

      if (isBack) {
        // Card back — dark with ornate gold border
        ctx.fillStyle = "#1a1a2e";
        ctx.fill();

        // Gold border
        ctx.shadowColor = "transparent";
        ctx.strokeStyle = `rgba(201, 164, 76, 0.9)`;
        ctx.lineWidth = 1.5 * card.scale;
        ctx.stroke();

        // Inner frame
        const inset = 5 * card.scale;
        ctx.beginPath();
        ctx.roundRect(
          -cardW / 2 + inset,
          -cardH / 2 + inset,
          cardW - inset * 2,
          cardH - inset * 2,
          radius * 0.6,
        );
        ctx.strokeStyle = `rgba(201, 164, 76, 0.5)`;
        ctx.lineWidth = 0.8 * card.scale;
        ctx.stroke();

        // Center diamond pattern
        ctx.fillStyle = `rgba(201, 164, 76, 0.2)`;
        const cx = 0;
        const cy = 0;
        const ds = 8 * card.scale;
        ctx.beginPath();
        ctx.moveTo(cx, cy - ds);
        ctx.lineTo(cx + ds, cy);
        ctx.lineTo(cx, cy + ds);
        ctx.lineTo(cx - ds, cy);
        ctx.closePath();
        ctx.fill();
      } else {
        // Card front — dark with visible suit/value
        ctx.fillStyle = "#1c1c30";
        ctx.fill();

        // Gold border
        ctx.shadowColor = "transparent";
        ctx.strokeStyle = `rgba(201, 164, 76, 0.8)`;
        ctx.lineWidth = 1.2 * card.scale;
        ctx.stroke();

        // Suit and value
        const color = SUIT_COLORS[card.suit];

        // Value top-left
        ctx.fillStyle = color;
        ctx.font = `bold ${11 * card.scale}px "Georgia", serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(
          card.value,
          -cardW / 2 + 5 * card.scale,
          -cardH / 2 + 5 * card.scale,
        );

        // Small suit below value
        ctx.font = `${9 * card.scale}px serif`;
        ctx.fillText(
          card.suit,
          -cardW / 2 + 5 * card.scale,
          -cardH / 2 + 17 * card.scale,
        );

        // Large suit center
        ctx.font = `${26 * card.scale}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(card.suit, 0, 2 * card.scale);

        // Value bottom-right (inverted)
        ctx.save();
        ctx.translate(cardW / 2 - 5 * card.scale, cardH / 2 - 5 * card.scale);
        ctx.rotate(Math.PI);
        ctx.font = `bold ${11 * card.scale}px "Georgia", serif`;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(card.value, 0, 0);
        ctx.font = `${9 * card.scale}px serif`;
        ctx.fillText(card.suit, 0, 12 * card.scale);
        ctx.restore();
      }

      ctx.restore();
    }

    function animate() {
      if (!ctx) return;
      ctx.setTransform(
        window.devicePixelRatio,
        0,
        0,
        window.devicePixelRatio,
        0,
        0,
      );
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        // Wobble motion (sine wave drift)
        card.wobblePhase += card.wobbleSpeed;
        const wobbleOffset = Math.sin(card.wobblePhase) * card.wobbleAmp;

        // Update position
        card.x += card.vx + wobbleOffset * 0.1;
        card.y += card.vy;
        card.rotation += card.rotationSpeed;
        card.flipPhase += card.flipSpeed;

        // Wrap around screen edges
        const margin = 80 * card.scale;
        if (card.x > w + margin) card.x = -margin;
        if (card.x < -margin) card.x = w + margin;
        if (card.y > h + margin) card.y = -margin;
        if (card.y < -margin) card.y = h + margin;

        drawCard(ctx, card);
      }

      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
