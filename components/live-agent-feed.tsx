"use client";

import { useEffect, useState, useRef } from "react";

const PLAYER_NAMES = [
  "CardMaster",
  "PokerPro",
  "AI_Slayer",
  "LuckyAce",
  "BluffKing",
  "SilentFold",
  "AllInAlways",
  "PatientPete",
  "RiskTaker",
  "TokenKing",
];

const ACTIONS = [
  "Win Big — Round 3 showdown",
  "Landlord — bidding phase",
  "AI analysis: optimal play",
  "Win Big — AI training mode",
  "Landlord — Master AI battle",
  "Calculating win probability",
  "Tournament — semi-finals",
  "Post-game AI review",
  "Landlord — friend room",
  "Win Big — streak challenge",
  "AI advice: fold or raise?",
  "Landlord — AI card combo",
];

const STATUSES = [
  { label: "playing", color: "#2dd4a8" },
  { label: "playing", color: "#2dd4a8" },
  { label: "playing", color: "#2dd4a8" },
  { label: "waiting", color: "#c9a44c" },
  { label: "finished", color: "#e44d8a" },
];

type GameRow = {
  id: string;
  name: string;
  action: string;
  status: (typeof STATUSES)[number];
  tokenUsed: number;
  key: number;
};

function randomRow(key: number): GameRow {
  return {
    id: Math.random().toString(36).slice(2, 8).toUpperCase(),
    name: PLAYER_NAMES[Math.floor(Math.random() * PLAYER_NAMES.length)],
    action: ACTIONS[Math.floor(Math.random() * ACTIONS.length)],
    status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
    tokenUsed: Math.floor(Math.random() * 12 + 2),
    key,
  };
}

function ProgressBar({ initial }: { initial: number }) {
  const [pct, setPct] = useState(initial);
  const rafRef = useRef<number>(0);
  const pctRef = useRef(initial);
  useEffect(() => {
    const tick = () => {
      pctRef.current = Math.min(99, pctRef.current + 0.015);
      setPct(Math.round(pctRef.current));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: 3,
        background: "#2a2a3e",
        borderRadius: 9,
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: 9,
          width: `${pct}%`,
          background: "linear-gradient(90deg, #c9a44c, #e8d48b)",
          transition: "width 0.5s linear",
        }}
      />
    </div>
  );
}

const SEED_ROWS: GameRow[] = [
  {
    id: "A1B2C3",
    name: "CardMaster",
    action: "Win Big — Round 3 showdown",
    status: STATUSES[0],
    tokenUsed: 5,
    key: 0,
  },
  {
    id: "D4E5F6",
    name: "PokerPro",
    action: "Landlord — Master AI battle",
    status: STATUSES[0],
    tokenUsed: 12,
    key: 1,
  },
  {
    id: "G7H8I9",
    name: "AI_Slayer",
    action: "AI analysis: optimal play",
    status: STATUSES[3],
    tokenUsed: 3,
    key: 2,
  },
  {
    id: "J0K1L2",
    name: "LuckyAce",
    action: "Tournament — semi-finals",
    status: STATUSES[0],
    tokenUsed: 8,
    key: 3,
  },
  {
    id: "M3N4O5",
    name: "BluffKing",
    action: "Landlord — friend room",
    status: STATUSES[0],
    tokenUsed: 6,
    key: 4,
  },
  {
    id: "P6Q7R8",
    name: "SilentFold",
    action: "Post-game AI review",
    status: STATUSES[4],
    tokenUsed: 10,
    key: 5,
  },
];

export function LiveAgentFeed() {
  const [rows, setRows] = useState<GameRow[]>(SEED_ROWS);
  const keyRef = useRef(100);

  useEffect(() => {
    setRows(Array.from({ length: 6 }, (_, i) => randomRow(i)));
    const t = setInterval(() => {
      keyRef.current++;
      setRows((prev) => [...prev.slice(1), randomRow(keyRef.current)]);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-2xl border border-[#2a2a3e] overflow-hidden bg-[#12121e] shadow-sm">
      <div className="grid grid-cols-[90px_1fr_70px_70px] px-4 py-2.5 border-b border-[#2a2a3e] bg-[#1a1a2e]">
        {["PLAYER", "ACTIVITY", "TOKENS", "STATUS"].map((h) => (
          <span
            key={h}
            className="text-[8px] tracking-[0.16em] text-[#8b7e6a] font-mono"
          >
            {h}
          </span>
        ))}
      </div>
      <div>
        {rows.map((row, i) => (
          <div
            key={row.key}
            className="grid grid-cols-[90px_1fr_70px_70px] px-4 py-3 border-b border-[#1a1a2e] items-center gap-2"
            style={{
              animation:
                i === rows.length - 1
                  ? "rowSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) both"
                  : "none",
            }}
          >
            <div>
              <div className="text-[10px] font-medium text-[#e8d48b] mb-0.5">
                {row.name}
              </div>
              <div className="text-[8px] font-mono text-[#5a5a6e]">
                #{row.id}
              </div>
            </div>
            <div className="min-w-0">
              <div className="text-[10px] text-[#8b7e6a] mb-1.5 truncate">
                {row.action}
              </div>
              <ProgressBar initial={row.tokenUsed * 7} />
            </div>
            <div className="text-[10px] font-mono text-[#c9a44c] font-medium">
              -{row.tokenUsed}
            </div>
            <div className="flex items-center gap-1.5">
              <span
                className="w-[6px] h-[6px] rounded-full shrink-0"
                style={{
                  background: row.status.color,
                  boxShadow:
                    row.status.label === "playing"
                      ? `0 0 6px ${row.status.color}`
                      : "none",
                  animation:
                    row.status.label === "playing"
                      ? "statusPulse 2s ease-in-out infinite"
                      : "none",
                }}
              />
              <span className="text-[9px] font-mono text-[#8b7e6a]">
                {row.status.label}
              </span>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes rowSlideIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes statusPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </div>
  );
}

export function LiveAgentCounter() {
  const [count, setCount] = useState(3847);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => {
      setCount((v) => v + Math.floor(Math.random() * 3 - 1));
    }, 1200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="font-mono text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-[#c9a44c] leading-none tracking-tight">
      {mounted ? count.toLocaleString("en-US") : "3,847"}
    </span>
  );
}
