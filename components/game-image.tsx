"use client";

import { useRef, useState, useEffect } from "react";

/**
 * Luxury casino-themed SVG illustrations
 * Dark + Gold + Neon style for a mature gaming platform
 */
function PlaceholderIllustration({
  type,
  glowColor,
}: {
  type: string;
  glowColor: "indigo" | "purple" | "orange" | "emerald";
}) {
  const colorMap = {
    indigo: {
      primary: "#c9a44c",
      secondary: "#e8d48b",
      accent: "#ff6b6b",
      bg1: "#1a1a2e",
      bg2: "#16213e",
      glow: "#c9a44c",
    },
    purple: {
      primary: "#e44d8a",
      secondary: "#ff7eb3",
      accent: "#c9a44c",
      bg1: "#1a1a2e",
      bg2: "#2d1b4e",
      glow: "#e44d8a",
    },
    orange: {
      primary: "#ff8c42",
      secondary: "#ffb366",
      accent: "#c9a44c",
      bg1: "#1a1a2e",
      bg2: "#2e1a0e",
      glow: "#ff8c42",
    },
    emerald: {
      primary: "#2dd4a8",
      secondary: "#6ee7b7",
      accent: "#c9a44c",
      bg1: "#1a1a2e",
      bg2: "#0e2e24",
      glow: "#2dd4a8",
    },
  };
  const c = colorMap[glowColor];
  const t = type.toLowerCase();

  // Win Big / Poker / Classic card game
  if (
    t.includes("win big") ||
    t.includes("3-card") ||
    t.includes("poker") ||
    t.includes("classic")
  ) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-poker" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.bg1} />
            <stop offset="100%" stopColor={c.bg2} />
          </linearGradient>
          <radialGradient id="glow-poker" cx="50%" cy="50%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.3" />
            <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d77a" />
            <stop offset="50%" stopColor="#c9a44c" />
            <stop offset="100%" stopColor="#a67c28" />
          </linearGradient>
          <filter id="neon-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="225" fill="url(#bg-poker)" />
        <ellipse cx="200" cy="112" rx="150" ry="90" fill="url(#glow-poker)" />
        {/* Casino table felt */}
        <ellipse
          cx="200"
          cy="140"
          rx="140"
          ry="55"
          fill="#0d4a2e"
          stroke="#c9a44c"
          strokeWidth="2"
          opacity="0.6"
        />
        <ellipse
          cx="200"
          cy="140"
          rx="120"
          ry="45"
          fill="none"
          stroke="#c9a44c"
          strokeWidth="0.5"
          opacity="0.4"
        />
        {/* Poker cards - premium style */}
        <g transform="translate(200, 100)">
          <g transform="rotate(-20)" filter="url(#neon-glow)">
            <rect
              x="-28"
              y="-40"
              width="56"
              height="80"
              rx="5"
              fill="#1a1a2e"
              stroke="url(#gold-grad)"
              strokeWidth="1.5"
            />
            <rect
              x="-24"
              y="-36"
              width="48"
              height="72"
              rx="3"
              fill="#0f0f1a"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="24"
              fill="#ef4444"
              fontFamily="serif"
            >
              ♥
            </text>
            <text
              x="-12"
              y="-18"
              fontSize="12"
              fontWeight="bold"
              fill="#ef4444"
              fontFamily="serif"
            >
              A
            </text>
          </g>
          <g transform="rotate(0)">
            <rect
              x="-28"
              y="-40"
              width="56"
              height="80"
              rx="5"
              fill="#1a1a2e"
              stroke="url(#gold-grad)"
              strokeWidth="1.5"
            />
            <rect
              x="-24"
              y="-36"
              width="48"
              height="72"
              rx="3"
              fill="#0f0f1a"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="24"
              fill={c.primary}
              fontFamily="serif"
            >
              ♠
            </text>
            <text
              x="-12"
              y="-18"
              fontSize="12"
              fontWeight="bold"
              fill={c.primary}
              fontFamily="serif"
            >
              K
            </text>
          </g>
          <g transform="rotate(20)" filter="url(#neon-glow)">
            <rect
              x="-28"
              y="-40"
              width="56"
              height="80"
              rx="5"
              fill="#1a1a2e"
              stroke="url(#gold-grad)"
              strokeWidth="1.5"
            />
            <rect
              x="-24"
              y="-36"
              width="48"
              height="72"
              rx="3"
              fill="#0f0f1a"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="24"
              fill={c.primary}
              fontFamily="serif"
            >
              ♦
            </text>
            <text
              x="-12"
              y="-18"
              fontSize="12"
              fontWeight="bold"
              fill={c.primary}
              fontFamily="serif"
            >
              Q
            </text>
          </g>
        </g>
        {/* Gold chips */}
        <g opacity="0.8">
          <circle
            cx="80"
            cy="160"
            r="14"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="2.5"
          />
          <circle
            cx="80"
            cy="160"
            r="9"
            fill="none"
            stroke={c.primary}
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="60"
            cy="170"
            r="14"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="2.5"
          />
          <circle
            cx="60"
            cy="170"
            r="9"
            fill="none"
            stroke={c.primary}
            strokeWidth="1"
            opacity="0.6"
          />
          <circle
            cx="320"
            cy="155"
            r="14"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="2.5"
          />
          <circle
            cx="340"
            cy="165"
            r="14"
            fill="none"
            stroke="url(#gold-grad)"
            strokeWidth="2.5"
          />
        </g>
        {/* Sparkle particles */}
        <circle cx="50" cy="40" r="1.5" fill={c.primary} opacity="0.8" />
        <circle cx="350" cy="30" r="1" fill={c.secondary} opacity="0.6" />
        <circle cx="370" cy="80" r="1.5" fill={c.primary} opacity="0.5" />
        <circle cx="30" cy="100" r="1" fill={c.secondary} opacity="0.7" />
      </svg>
    );
  }

  // Landlord / Strategy
  if (
    t.includes("landlord") ||
    t.includes("strategy") ||
    t.includes("3-player")
  ) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-ll" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.bg1} />
            <stop offset="100%" stopColor={c.bg2} />
          </linearGradient>
          <radialGradient id="glow-ll" cx="50%" cy="40%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.25" />
            <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gold-ll" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5d77a" />
            <stop offset="100%" stopColor="#a67c28" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#bg-ll)" />
        <ellipse cx="200" cy="100" rx="180" ry="100" fill="url(#glow-ll)" />
        {/* Luxury table */}
        <ellipse
          cx="200"
          cy="135"
          rx="130"
          ry="50"
          fill="#0d3320"
          stroke={c.primary}
          strokeWidth="1.5"
          opacity="0.7"
        />
        {/* Crown / Landlord title */}
        <g transform="translate(200, 35)">
          <path
            d="M-15,-8 L-10,2 L-5,-4 L0,4 L5,-4 L10,2 L15,-8 L12,8 L-12,8 Z"
            fill="url(#gold-ll)"
          />
          <rect
            x="-12"
            y="8"
            width="24"
            height="6"
            rx="2"
            fill="url(#gold-ll)"
          />
        </g>
        {/* Three-position layout with neon outlines */}
        <g>
          {/* Landlord position (top) */}
          <circle
            cx="200"
            cy="60"
            r="18"
            fill="rgba(201,164,76,0.15)"
            stroke={c.primary}
            strokeWidth="1.5"
          />
          <text
            x="200"
            y="65"
            textAnchor="middle"
            fontSize="11"
            fontWeight="bold"
            fill={c.primary}
            fontFamily="sans-serif"
          >
            地主
          </text>
          {/* Farmer left */}
          <circle
            cx="90"
            cy="155"
            r="16"
            fill="rgba(201,164,76,0.1)"
            stroke={c.secondary}
            strokeWidth="1"
            opacity="0.7"
          />
          <text
            x="90"
            y="160"
            textAnchor="middle"
            fontSize="9"
            fill={c.secondary}
          >
            农民
          </text>
          {/* Farmer right */}
          <circle
            cx="310"
            cy="155"
            r="16"
            fill="rgba(201,164,76,0.1)"
            stroke={c.secondary}
            strokeWidth="1"
            opacity="0.7"
          />
          <text
            x="310"
            y="160"
            textAnchor="middle"
            fontSize="9"
            fill={c.secondary}
          >
            农民
          </text>
        </g>
        {/* Connection neon lines */}
        <g
          stroke={c.primary}
          strokeWidth="1"
          opacity="0.4"
          strokeDasharray="4 3"
        >
          <line x1="200" y1="78" x2="106" y2="143" />
          <line x1="200" y1="78" x2="294" y2="143" />
        </g>
        {/* Cards in hand (fan) */}
        <g transform="translate(200, 130)" opacity="0.9">
          {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={i * 8 - 10}
              y={Math.abs(i) * 2 - 22}
              width="20"
              height="30"
              rx="2"
              fill="#0f0f1a"
              stroke={c.primary}
              strokeWidth="0.8"
              transform={`rotate(${i * 5})`}
              opacity={0.7 + Math.abs(i) * 0.04}
            />
          ))}
        </g>
        {/* Gold particle accents */}
        <circle cx="40" cy="30" r="1.5" fill={c.primary} opacity="0.6" />
        <circle cx="360" cy="40" r="1" fill={c.secondary} opacity="0.5" />
        <circle cx="370" cy="190" r="1.5" fill={c.primary} opacity="0.4" />
        <circle cx="30" cy="180" r="1" fill={c.secondary} opacity="0.5" />
      </svg>
    );
  }

  // AI / Analysis / Decision / Engine
  if (
    t.includes("ai") ||
    t.includes("analysis") ||
    t.includes("decision") ||
    t.includes("engine")
  ) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-ai" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#1a1a3e" />
          </linearGradient>
          <radialGradient id="glow-ai" cx="50%" cy="50%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.35" />
            <stop offset="70%" stopColor={c.glow} stopOpacity="0" />
          </radialGradient>
          <filter id="ai-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="225" fill="url(#bg-ai)" />
        <circle cx="200" cy="112" r="100" fill="url(#glow-ai)" />
        {/* Circuit board traces */}
        <g stroke={c.primary} strokeWidth="0.8" opacity="0.3">
          <path d="M30,50 H100 V80 H140" />
          <path d="M370,40 H320 V70 H280" />
          <path d="M40,180 H90 V150 H130" />
          <path d="M360,190 H310 V160 H270" />
          <circle cx="140" cy="80" r="3" fill={c.primary} opacity="0.5" />
          <circle cx="280" cy="70" r="3" fill={c.primary} opacity="0.5" />
          <circle cx="130" cy="150" r="3" fill={c.primary} opacity="0.5" />
          <circle cx="270" cy="160" r="3" fill={c.primary} opacity="0.5" />
        </g>
        {/* Central AI core */}
        <g filter="url(#ai-glow)">
          <circle
            cx="200"
            cy="112"
            r="40"
            fill="none"
            stroke={c.primary}
            strokeWidth="2"
          />
          <circle
            cx="200"
            cy="112"
            r="28"
            fill="none"
            stroke={c.secondary}
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle
            cx="200"
            cy="112"
            r="16"
            fill="rgba(201,164,76,0.15)"
            stroke={c.primary}
            strokeWidth="1.5"
          />
        </g>
        {/* AI text */}
        <text
          x="200"
          y="117"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill={c.primary}
          fontFamily="monospace"
        >
          AI
        </text>
        {/* Neural links */}
        <g stroke={c.primary} strokeWidth="1.2" opacity="0.5">
          <line x1="200" y1="72" x2="200" y2="45" />
          <line x1="240" y1="112" x2="275" y2="112" />
          <line x1="160" y1="112" x2="125" y2="112" />
          <line x1="228" y1="84" x2="255" y2="60" />
          <line x1="172" y1="84" x2="145" y2="60" />
          <line x1="228" y1="140" x2="255" y2="165" />
          <line x1="172" y1="140" x2="145" y2="165" />
        </g>
        {/* Data nodes */}
        {[
          [200, 45],
          [275, 112],
          [125, 112],
          [255, 60],
          [145, 60],
          [255, 165],
          [145, 165],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill={c.primary} opacity="0.6" />
        ))}
        {/* Stats panels */}
        <g>
          <rect
            x="290"
            y="85"
            width="70"
            height="26"
            rx="4"
            fill="rgba(201,164,76,0.1)"
            stroke={c.primary}
            strokeWidth="0.8"
          />
          <text
            x="325"
            y="96"
            textAnchor="middle"
            fontSize="7"
            fill={c.secondary}
            opacity="0.8"
          >
            WIN RATE
          </text>
          <text
            x="325"
            y="107"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill={c.primary}
          >
            98.5%
          </text>
          <rect
            x="40"
            y="85"
            width="70"
            height="26"
            rx="4"
            fill="rgba(201,164,76,0.1)"
            stroke={c.primary}
            strokeWidth="0.8"
          />
          <text
            x="75"
            y="96"
            textAnchor="middle"
            fontSize="7"
            fill={c.secondary}
            opacity="0.8"
          >
            RESPONSE
          </text>
          <text
            x="75"
            y="107"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill={c.primary}
          >
            0.3s
          </text>
        </g>
        {/* Scanning line animation hint */}
        <rect
          x="0"
          y="110"
          width="400"
          height="1"
          fill={c.primary}
          opacity="0.1"
        />
      </svg>
    );
  }

  // PvE Battle
  if (
    t.includes("pve") ||
    t.includes("battle interface") ||
    t.includes("pve battle")
  ) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-pve" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a0a0a" />
            <stop offset="100%" stopColor="#2e1a0e" />
          </linearGradient>
          <radialGradient id="glow-pve" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="225" fill="url(#bg-pve)" />
        <circle cx="200" cy="112" r="100" fill="url(#glow-pve)" />
        {/* VS emblem */}
        <g transform="translate(200, 100)">
          <circle r="28" fill="none" stroke="#c9a44c" strokeWidth="2.5" />
          <circle r="22" fill="rgba(201,164,76,0.1)" />
          <text
            x="0"
            y="7"
            textAnchor="middle"
            fontSize="16"
            fontWeight="900"
            fill="#c9a44c"
            fontFamily="sans-serif"
          >
            VS
          </text>
        </g>
        {/* Player side - left */}
        <g transform="translate(80, 100)">
          <rect
            x="-35"
            y="-30"
            width="70"
            height="60"
            rx="10"
            fill="rgba(201,164,76,0.08)"
            stroke="#c9a44c"
            strokeWidth="1.5"
          />
          <text
            x="0"
            y="-5"
            textAnchor="middle"
            fontSize="18"
            fill="#c9a44c"
            fontFamily="serif"
          >
            ♠
          </text>
          <text
            x="0"
            y="18"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#e8d48b"
            letterSpacing="2"
          >
            YOU
          </text>
        </g>
        {/* AI side - right */}
        <g transform="translate(320, 100)">
          <rect
            x="-35"
            y="-30"
            width="70"
            height="60"
            rx="10"
            fill="rgba(255,107,53,0.08)"
            stroke="#ff6b35"
            strokeWidth="1.5"
          />
          <circle
            cx="0"
            cy="-5"
            r="12"
            fill="none"
            stroke="#ff6b35"
            strokeWidth="1"
          />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#ff6b35"
          >
            AI
          </text>
          <text
            x="0"
            y="18"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#ffb366"
            letterSpacing="2"
          >
            BOT
          </text>
        </g>
        {/* Token cost */}
        <g transform="translate(200, 175)">
          <rect
            x="-40"
            y="-10"
            width="80"
            height="20"
            rx="10"
            fill="rgba(201,164,76,0.15)"
            stroke="#c9a44c"
            strokeWidth="0.8"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#c9a44c"
          >
            -5 TOKENS
          </text>
        </g>
        {/* Energy lines */}
        <g stroke="#ff6b35" strokeWidth="1" opacity="0.3">
          <line x1="130" y1="90" x2="160" y2="95" strokeDasharray="2 2" />
          <line x1="130" y1="110" x2="160" y2="105" strokeDasharray="2 2" />
          <line x1="240" y1="95" x2="270" y2="90" strokeDasharray="2 2" />
          <line x1="240" y1="105" x2="270" y2="110" strokeDasharray="2 2" />
        </g>
      </svg>
    );
  }

  // PvP
  if (t.includes("pvp") || t.includes("match") || t.includes("real player")) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-pvp" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#1a1a3e" />
          </linearGradient>
          <radialGradient id="glow-pvp" cx="50%" cy="60%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.2" />
            <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="225" fill="url(#bg-pvp)" />
        <ellipse cx="200" cy="140" rx="160" ry="60" fill="url(#glow-pvp)" />
        {/* Luxury poker table */}
        <ellipse
          cx="200"
          cy="140"
          rx="130"
          ry="48"
          fill="#0d3320"
          stroke="#c9a44c"
          strokeWidth="1.5"
        />
        <ellipse
          cx="200"
          cy="140"
          rx="110"
          ry="38"
          fill="none"
          stroke="#c9a44c"
          strokeWidth="0.5"
          opacity="0.5"
        />
        {/* Player seats */}
        {[
          [100, 90, "P1"],
          [200, 70, "P2"],
          [300, 90, "P3"],
        ].map(([x, y, label], i) => (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <circle
              r="16"
              fill="rgba(201,164,76,0.1)"
              stroke="#c9a44c"
              strokeWidth="1.2"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="8"
              fontWeight="bold"
              fill="#e8d48b"
            >
              {label as string}
            </text>
          </g>
        ))}
        {/* Center pot */}
        <g transform="translate(200, 140)">
          <circle
            r="20"
            fill="rgba(201,164,76,0.1)"
            stroke="#c9a44c"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="7"
            fontWeight="bold"
            fill="#c9a44c"
          >
            POT
          </text>
        </g>
        {/* AI assist badge */}
        <g transform="translate(340, 175)">
          <rect
            x="-22"
            y="-9"
            width="44"
            height="18"
            rx="9"
            fill="rgba(201,164,76,0.2)"
            stroke="#c9a44c"
            strokeWidth="0.8"
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontSize="7"
            fontWeight="bold"
            fill="#c9a44c"
          >
            AI ✦
          </text>
        </g>
        {/* Sparkles */}
        <circle cx="50" cy="50" r="1" fill="#c9a44c" opacity="0.6" />
        <circle cx="360" cy="35" r="1.5" fill="#e8d48b" opacity="0.5" />
      </svg>
    );
  }

  // Tournament / Lobby
  if (t.includes("tournament") || t.includes("lobby")) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-tourney" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#1a0a2e" />
          </linearGradient>
          <linearGradient id="gold-trophy" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5d77a" />
            <stop offset="50%" stopColor="#c9a44c" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
          <filter id="trophy-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="225" fill="url(#bg-tourney)" />
        {/* Trophy - center */}
        <g transform="translate(200, 90)" filter="url(#trophy-glow)">
          <path
            d="M-12,-30 C-12,-30 -20,-30 -20,-20 C-20,-10 -12,0 -8,5 L-8,15 L-15,18 L-15,22 L15,22 L15,18 L8,15 L8,5 C12,0 20,-10 20,-20 C20,-30 12,-30 12,-30 Z"
            fill="url(#gold-trophy)"
          />
          <rect
            x="-18"
            y="22"
            width="36"
            height="6"
            rx="2"
            fill="url(#gold-trophy)"
          />
        </g>
        {/* Bracket lines */}
        <g stroke="#c9a44c" strokeWidth="1.2" opacity="0.5">
          {/* Left bracket */}
          <line x1="30" y1="60" x2="80" y2="60" />
          <line x1="30" y1="95" x2="80" y2="95" />
          <line x1="80" y1="60" x2="80" y2="95" />
          <line x1="80" y1="77" x2="130" y2="77" />
          <line x1="30" y1="140" x2="80" y2="140" />
          <line x1="30" y1="175" x2="80" y2="175" />
          <line x1="80" y1="140" x2="80" y2="175" />
          <line x1="80" y1="157" x2="130" y2="157" />
          <line x1="130" y1="77" x2="130" y2="157" />
          <line x1="130" y1="117" x2="170" y2="117" />
          {/* Right bracket */}
          <line x1="370" y1="60" x2="320" y2="60" />
          <line x1="370" y1="95" x2="320" y2="95" />
          <line x1="320" y1="60" x2="320" y2="95" />
          <line x1="320" y1="77" x2="270" y2="77" />
          <line x1="370" y1="140" x2="320" y2="140" />
          <line x1="370" y1="175" x2="320" y2="175" />
          <line x1="320" y1="140" x2="320" y2="175" />
          <line x1="320" y1="157" x2="270" y2="157" />
          <line x1="270" y1="77" x2="270" y2="157" />
          <line x1="270" y1="117" x2="230" y2="117" />
        </g>
        {/* Prize pool */}
        <g transform="translate(200, 200)">
          <rect
            x="-50"
            y="-10"
            width="100"
            height="20"
            rx="10"
            fill="rgba(201,164,76,0.15)"
            stroke="#c9a44c"
            strokeWidth="0.8"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#c9a44c"
            letterSpacing="1"
          >
            💰 10K PRIZE
          </text>
        </g>
      </svg>
    );
  }

  // Rankings
  if (t.includes("ranking") || t.includes("leaderboard")) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-rank" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </linearGradient>
          <linearGradient id="gold-bar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c9a44c" />
            <stop offset="100%" stopColor="#f5d77a" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#bg-rank)" />
        {/* Podium */}
        <g transform="translate(120, 195)">
          {/* 2nd place */}
          <rect
            x="0"
            y="-60"
            width="50"
            height="60"
            rx="3"
            fill="rgba(192,192,192,0.15)"
            stroke="#c0c0c0"
            strokeWidth="1"
          />
          <text x="25" y="-65" textAnchor="middle" fontSize="14" fill="#c0c0c0">
            2
          </text>
          {/* 1st place */}
          <rect
            x="55"
            y="-90"
            width="50"
            height="90"
            rx="3"
            fill="rgba(201,164,76,0.15)"
            stroke="#c9a44c"
            strokeWidth="1.5"
          />
          <text x="80" y="-95" textAnchor="middle" fontSize="14" fill="#c9a44c">
            1
          </text>
          {/* Crown on 1st */}
          <path
            d="M70,-108 L75,-100 L80,-105 L85,-100 L90,-108 L87,-96 L73,-96 Z"
            fill="#c9a44c"
          />
          {/* 3rd place */}
          <rect
            x="110"
            y="-45"
            width="50"
            height="45"
            rx="3"
            fill="rgba(205,127,50,0.15)"
            stroke="#cd7f32"
            strokeWidth="1"
          />
          <text
            x="135"
            y="-50"
            textAnchor="middle"
            fontSize="14"
            fill="#cd7f32"
          >
            3
          </text>
        </g>
        {/* Leaderboard list on right */}
        <g transform="translate(270, 40)">
          {[
            { rank: "#1", score: "9,850", color: "#c9a44c" },
            { rank: "#2", score: "8,720", color: "#c0c0c0" },
            { rank: "#3", score: "7,340", color: "#cd7f32" },
            { rank: "#4", score: "6,100", color: "#888" },
            { rank: "#5", score: "5,890", color: "#888" },
          ].map((item, i) => (
            <g key={i} transform={`translate(0, ${i * 30})`}>
              <rect
                x="0"
                y="0"
                width="100"
                height="24"
                rx="4"
                fill="rgba(201,164,76,0.05)"
                stroke={item.color}
                strokeWidth="0.8"
                opacity="0.8"
              />
              <text
                x="15"
                y="16"
                fontSize="8"
                fontWeight="bold"
                fill={item.color}
              >
                {item.rank}
              </text>
              <text x="80" y="16" textAnchor="end" fontSize="8" fill="#e8d48b">
                {item.score}
              </text>
            </g>
          ))}
        </g>
      </svg>
    );
  }

  // Token / Reward
  if (t.includes("token") || t.includes("reward")) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-token" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </linearGradient>
          <linearGradient id="coin-face" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5d77a" />
            <stop offset="50%" stopColor="#c9a44c" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
          <filter id="coin-glow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="225" fill="url(#bg-token)" />
        {/* Main token coin */}
        <g transform="translate(200, 100)" filter="url(#coin-glow)">
          <ellipse cx="0" cy="0" rx="45" ry="45" fill="url(#coin-face)" />
          <ellipse
            cx="0"
            cy="0"
            rx="36"
            ry="36"
            fill="none"
            stroke="#8b6914"
            strokeWidth="2"
          />
          <ellipse
            cx="0"
            cy="0"
            rx="30"
            ry="30"
            fill="none"
            stroke="#f5d77a"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fontSize="22"
            fontWeight="bold"
            fill="#1a1a2e"
            fontFamily="serif"
          >
            T
          </text>
        </g>
        {/* Stacked coins behind */}
        <g opacity="0.5">
          <ellipse
            cx="190"
            cy="108"
            rx="45"
            ry="45"
            fill="none"
            stroke="#c9a44c"
            strokeWidth="1"
          />
          <ellipse
            cx="180"
            cy="116"
            rx="45"
            ry="45"
            fill="none"
            stroke="#c9a44c"
            strokeWidth="0.5"
          />
        </g>
        {/* Floating small coins */}
        <g opacity="0.6">
          <circle
            cx="80"
            cy="60"
            r="12"
            fill="none"
            stroke="#c9a44c"
            strokeWidth="1.5"
          />
          <text x="80" y="64" textAnchor="middle" fontSize="8" fill="#c9a44c">
            T
          </text>
          <circle
            cx="320"
            cy="50"
            r="10"
            fill="none"
            stroke="#e8d48b"
            strokeWidth="1"
          />
          <text x="320" y="54" textAnchor="middle" fontSize="7" fill="#e8d48b">
            T
          </text>
          <circle
            cx="90"
            cy="170"
            r="8"
            fill="none"
            stroke="#c9a44c"
            strokeWidth="1"
          />
          <circle
            cx="320"
            cy="170"
            r="11"
            fill="none"
            stroke="#c9a44c"
            strokeWidth="1"
          />
        </g>
        {/* Reward banner */}
        <g transform="translate(200, 175)">
          <rect
            x="-55"
            y="-12"
            width="110"
            height="24"
            rx="12"
            fill="rgba(201,164,76,0.15)"
            stroke="#c9a44c"
            strokeWidth="1"
          />
          <text
            x="0"
            y="3"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#c9a44c"
            letterSpacing="1"
          >
            +500 TOKENS
          </text>
        </g>
      </svg>
    );
  }

  // Step illustrations
  if (t.includes("step")) {
    const stepNum = t.match(/step\s*(\d)/)?.[1] || "1";
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-step" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c.bg1} />
            <stop offset="100%" stopColor={c.bg2} />
          </linearGradient>
          <radialGradient id="glow-step" cx="50%" cy="50%">
            <stop offset="0%" stopColor={c.glow} stopOpacity="0.2" />
            <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="225" fill="url(#bg-step)" />
        <circle cx="200" cy="112" r="80" fill="url(#glow-step)" />
        {/* Step number - large faded */}
        <text
          x="200"
          y="140"
          textAnchor="middle"
          fontSize="120"
          fontWeight="900"
          fill={c.primary}
          opacity="0.08"
          fontFamily="sans-serif"
        >
          {stepNum}
        </text>
        {/* Step content */}
        {stepNum === "1" && (
          <g transform="translate(200, 105)">
            {/* Registration form */}
            <rect
              x="-50"
              y="-40"
              width="100"
              height="80"
              rx="8"
              fill="rgba(201,164,76,0.05)"
              stroke={c.primary}
              strokeWidth="1.2"
            />
            <circle
              cx="0"
              cy="-15"
              r="14"
              fill="none"
              stroke={c.primary}
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="-10"
              textAnchor="middle"
              fontSize="10"
              fill={c.primary}
            >
              ♠
            </text>
            <rect
              x="-30"
              y="8"
              width="60"
              height="6"
              rx="3"
              fill={c.primary}
              opacity="0.3"
            />
            <rect
              x="-25"
              y="20"
              width="50"
              height="6"
              rx="3"
              fill={c.primary}
              opacity="0.2"
            />
            <text
              x="0"
              y="50"
              textAnchor="middle"
              fontSize="8"
              fontWeight="bold"
              fill={c.primary}
            >
              CREATE
            </text>
          </g>
        )}
        {stepNum === "2" && (
          <g transform="translate(200, 105)">
            {/* Game selection */}
            <rect
              x="-55"
              y="-25"
              width="45"
              height="50"
              rx="6"
              fill="rgba(201,164,76,0.08)"
              stroke={c.primary}
              strokeWidth="1.5"
            />
            <text
              x="-32"
              y="8"
              textAnchor="middle"
              fontSize="16"
              fill={c.primary}
            >
              ♠
            </text>
            <rect
              x="5"
              y="-25"
              width="45"
              height="50"
              rx="6"
              fill="rgba(201,164,76,0.05)"
              stroke={c.primary}
              strokeWidth="0.8"
              opacity="0.6"
            />
            <text
              x="28"
              y="8"
              textAnchor="middle"
              fontSize="16"
              fill={c.secondary}
            >
              ♦
            </text>
            {/* Check mark */}
            <circle cx="-32" cy="-30" r="7" fill={c.primary} />
            <text
              x="-32"
              y="-27"
              textAnchor="middle"
              fontSize="8"
              fill="#0a0a1a"
            >
              ✓
            </text>
            <text
              x="0"
              y="45"
              textAnchor="middle"
              fontSize="8"
              fontWeight="bold"
              fill={c.primary}
            >
              CHOOSE
            </text>
          </g>
        )}
        {stepNum === "3" && (
          <g transform="translate(200, 105)">
            {/* Play button */}
            <circle
              cx="0"
              cy="-5"
              r="28"
              fill="none"
              stroke={c.primary}
              strokeWidth="2"
            />
            <polygon points="-8,-15 -8,5 8,-5" fill={c.primary} />
            <text
              x="0"
              y="40"
              textAnchor="middle"
              fontSize="8"
              fontWeight="bold"
              fill={c.primary}
              letterSpacing="2"
            >
              PLAY & WIN
            </text>
          </g>
        )}
        {/* Corner accents */}
        <path
          d="M20,20 L40,20 M20,20 L20,40"
          stroke={c.primary}
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M380,20 L360,20 M380,20 L380,40"
          stroke={c.primary}
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M20,205 L40,205 M20,205 L20,185"
          stroke={c.primary}
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M380,205 L360,205 M380,205 L380,185"
          stroke={c.primary}
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    );
  }

  // Game Main Visual / Hero
  if (
    t.includes("game main") ||
    t.includes("hero") ||
    t.includes("main visual")
  ) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-hero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="50%" stopColor="#1a1a3e" />
            <stop offset="100%" stopColor="#0a0a1a" />
          </linearGradient>
          <radialGradient id="glow-hero" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#c9a44c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c9a44c" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="gold-hero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d77a" />
            <stop offset="50%" stopColor="#c9a44c" />
            <stop offset="100%" stopColor="#8b6914" />
          </linearGradient>
          <filter id="hero-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="400" height="225" fill="url(#bg-hero)" />
        <ellipse cx="200" cy="100" rx="180" ry="100" fill="url(#glow-hero)" />
        {/* Premium card spread */}
        <g transform="translate(200, 95)" filter="url(#hero-glow)">
          <g transform="rotate(-25) translate(-5, 5)">
            <rect
              x="-24"
              y="-36"
              width="48"
              height="72"
              rx="5"
              fill="#0f0f1a"
              stroke="url(#gold-hero)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="20"
              fill="#ef4444"
              fontFamily="serif"
            >
              ♥
            </text>
            <text
              x="-10"
              y="-16"
              fontSize="10"
              fontWeight="bold"
              fill="#ef4444"
              fontFamily="serif"
            >
              A
            </text>
          </g>
          <g transform="rotate(-8) translate(0, 0)">
            <rect
              x="-24"
              y="-36"
              width="48"
              height="72"
              rx="5"
              fill="#0f0f1a"
              stroke="url(#gold-hero)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="20"
              fill="#c9a44c"
              fontFamily="serif"
            >
              ♠
            </text>
            <text
              x="-10"
              y="-16"
              fontSize="10"
              fontWeight="bold"
              fill="#c9a44c"
              fontFamily="serif"
            >
              K
            </text>
          </g>
          <g transform="rotate(8) translate(0, 0)">
            <rect
              x="-24"
              y="-36"
              width="48"
              height="72"
              rx="5"
              fill="#0f0f1a"
              stroke="url(#gold-hero)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="20"
              fill="#c9a44c"
              fontFamily="serif"
            >
              ♦
            </text>
            <text
              x="-10"
              y="-16"
              fontSize="10"
              fontWeight="bold"
              fill="#c9a44c"
              fontFamily="serif"
            >
              Q
            </text>
          </g>
          <g transform="rotate(25) translate(5, 5)">
            <rect
              x="-24"
              y="-36"
              width="48"
              height="72"
              rx="5"
              fill="#0f0f1a"
              stroke="url(#gold-hero)"
              strokeWidth="1.5"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="20"
              fill="#ef4444"
              fontFamily="serif"
            >
              ♣
            </text>
            <text
              x="-10"
              y="-16"
              fontSize="10"
              fontWeight="bold"
              fill="#ef4444"
              fontFamily="serif"
            >
              J
            </text>
          </g>
        </g>
        {/* AI Powered badge */}
        <g transform="translate(200, 175)">
          <rect
            x="-55"
            y="-12"
            width="110"
            height="24"
            rx="12"
            fill="rgba(201,164,76,0.1)"
            stroke="#c9a44c"
            strokeWidth="1"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#c9a44c"
            letterSpacing="2"
          >
            ⚡ AI POWERED
          </text>
        </g>
        {/* Gold sparkles */}
        <circle cx="55" cy="35" r="2" fill="#c9a44c" opacity="0.7" />
        <circle cx="345" cy="28" r="1.5" fill="#f5d77a" opacity="0.6" />
        <circle cx="40" cy="140" r="1" fill="#e8d48b" opacity="0.5" />
        <circle cx="365" cy="150" r="2" fill="#c9a44c" opacity="0.5" />
        <circle cx="160" cy="25" r="1" fill="#f5d77a" opacity="0.4" />
        <circle cx="250" cy="200" r="1.5" fill="#c9a44c" opacity="0.4" />
      </svg>
    );
  }

  // Win Rate / Optimal / Sparring / Review (data/analytics style)
  if (
    t.includes("win rate") ||
    t.includes("optimal") ||
    t.includes("sparring") ||
    t.includes("review")
  ) {
    return (
      <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="bg-data" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a0a1a" />
            <stop offset="100%" stopColor="#1a1a2e" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#bg-data)" />
        {/* Chart background */}
        <g transform="translate(60, 30)">
          {/* Grid lines */}
          <g stroke="#c9a44c" strokeWidth="0.3" opacity="0.2">
            {[0, 35, 70, 105, 140].map((y) => (
              <line key={y} x1="0" y1={y} x2="280" y2={y} />
            ))}
          </g>
          {/* Bar chart */}
          {[
            { x: 20, h: 70, o: 0.5 },
            { x: 60, h: 100, o: 0.6 },
            { x: 100, h: 85, o: 0.55 },
            { x: 140, h: 120, o: 0.7 },
            { x: 180, h: 110, o: 0.65 },
            { x: 220, h: 130, o: 0.8 },
            { x: 260, h: 125, o: 0.75 },
          ].map((bar, i) => (
            <rect
              key={i}
              x={bar.x}
              y={140 - bar.h}
              width="25"
              height={bar.h}
              rx="3"
              fill="#c9a44c"
              opacity={bar.o}
            />
          ))}
          {/* Trend line */}
          <polyline
            points="32,95 72,65 112,78 152,45 192,50 232,30 272,35"
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.8"
          />
          {/* Dots on trend */}
          {[
            [32, 95],
            [72, 65],
            [112, 78],
            [152, 45],
            [192, 50],
            [232, 30],
            [272, 35],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill="#ff6b6b" opacity="0.9" />
          ))}
        </g>
        {/* Stats panel */}
        <g transform="translate(320, 155)">
          <rect
            x="-35"
            y="-30"
            width="70"
            height="60"
            rx="6"
            fill="rgba(201,164,76,0.08)"
            stroke="#c9a44c"
            strokeWidth="0.8"
          />
          <text
            x="0"
            y="-12"
            textAnchor="middle"
            fontSize="7"
            fill="#e8d48b"
            opacity="0.7"
          >
            WIN RATE
          </text>
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fontSize="14"
            fontWeight="bold"
            fill="#c9a44c"
          >
            87%
          </text>
          <text x="0" y="22" textAnchor="middle" fontSize="7" fill="#2dd4a8">
            ▲ +12%
          </text>
        </g>
      </svg>
    );
  }

  // Default fallback — luxury card
  return (
    <svg viewBox="0 0 400 225" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="bg-def" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.bg1} />
          <stop offset="100%" stopColor={c.bg2} />
        </linearGradient>
        <radialGradient id="glow-def" cx="50%" cy="50%">
          <stop offset="0%" stopColor={c.glow} stopOpacity="0.2" />
          <stop offset="100%" stopColor={c.glow} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="225" fill="url(#bg-def)" />
      <circle cx="200" cy="112" r="80" fill="url(#glow-def)" />
      {/* Single luxury card */}
      <g transform="translate(200, 105)">
        <rect
          x="-30"
          y="-42"
          width="60"
          height="84"
          rx="6"
          fill="#0f0f1a"
          stroke={c.primary}
          strokeWidth="1.5"
        />
        <text
          x="0"
          y="8"
          textAnchor="middle"
          fontSize="24"
          fill={c.primary}
          fontFamily="serif"
        >
          ♠
        </text>
        <text
          x="-14"
          y="-18"
          fontSize="11"
          fontWeight="bold"
          fill={c.primary}
          fontFamily="serif"
        >
          A
        </text>
      </g>
      {/* Corner accents */}
      <path
        d="M20,20 L40,20 M20,20 L20,40"
        stroke={c.primary}
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M380,20 L360,20 M380,20 L380,40"
        stroke={c.primary}
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M20,205 L40,205 M20,205 L20,185"
        stroke={c.primary}
        strokeWidth="1"
        opacity="0.3"
      />
      <path
        d="M380,205 L360,205 M380,205 L380,185"
        stroke={c.primary}
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Sparkles */}
      <circle cx="60" cy="50" r="1.5" fill={c.primary} opacity="0.5" />
      <circle cx="340" cy="40" r="1" fill={c.secondary} opacity="0.4" />
      <circle cx="350" cy="180" r="1.5" fill={c.primary} opacity="0.4" />
    </svg>
  );
}

/**
 * GameImage — 游戏图片组件
 * 深色奢华赌场风格
 * 当传入真实 src 时显示图片，否则显示主题化 SVG 插画
 */
export function GameImage({
  src,
  alt = "Game screenshot",
  aspect = "video",
  className = "",
  overlayText,
  glowColor = "indigo",
}: {
  src?: string;
  alt?: string;
  aspect?: "video" | "square" | "wide" | "tall";
  className?: string;
  overlayText?: string;
  glowColor?: "indigo" | "purple" | "orange" | "emerald";
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if IntersectionObserver doesn't fire within 1.5s, force show
    const fallbackTimer = setTimeout(() => setInView(true), 1500);

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          clearTimeout(fallbackTimer);
        }
      },
      { threshold: 0.01, rootMargin: "100px" },
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const aspectMap = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  };

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden ${aspectMap[aspect]} ${className}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(16px) scale(0.98)",
        transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {src ? (
        <>
          {/* Real image */}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
            ref={(el) => {
              // Handle cached images that may not fire onLoad
              if (el && el.complete && el.naturalHeight > 0) {
                setLoaded(true);
              }
            }}
          />
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 bg-[#1a1a2e] animate-pulse" />
          )}
        </>
      ) : (
        <>
          {/* SVG illustration placeholder - dark luxury style */}
          <div className="absolute inset-0 overflow-hidden">
            <PlaceholderIllustration
              type={overlayText || "default"}
              glowColor={glowColor}
            />
          </div>
        </>
      )}
      {/* Hover overlay glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}

/**
 * GameScreenshotGallery — 游戏截图画廊
 * 带有自动滚动和 hover 暂停效果
 */
export function GameScreenshotGallery({
  images,
  className = "",
}: {
  images: { src?: string; alt: string; label?: string }[];
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;
    let animId: number;
    const speed = 0.5;
    const scroll = () => {
      posRef.current += speed;
      if (posRef.current >= el.scrollWidth / 2) posRef.current = 0;
      el.scrollLeft = posRef.current;
      animId = requestAnimationFrame(scroll);
    };
    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {/* Duplicate for infinite scroll */}
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="group relative shrink-0 w-[320px] md:w-[400px] rounded-2xl overflow-hidden border border-[#c9a44c]/20 hover:border-[#c9a44c]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#c9a44c]/10"
          >
            <GameImage
              src={img.src}
              alt={img.alt}
              aspect="video"
              glowColor={
                i % 4 === 0
                  ? "indigo"
                  : i % 4 === 1
                    ? "purple"
                    : i % 4 === 2
                      ? "orange"
                      : "emerald"
              }
              overlayText={img.label || img.alt}
            />
            {img.label && (
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[#e8d48b] text-xs font-medium tracking-wide">
                  {img.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a14] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none z-10" />
    </div>
  );
}
