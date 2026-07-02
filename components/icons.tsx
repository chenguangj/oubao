"use client";

import {
  Gamepad2,
  Users,
  Trophy,
  Sparkles,
  Target,
  Brain,
  Bot,
  BarChart3,
  Lock,
  Dice5,
  Shield,
  CreditCard,
  Medal,
  User,
  Swords,
  Zap,
  Eye,
  TrendingUp,
} from "lucide-react";

// Wrapper for consistent dark theme styling
function IconBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`w-11 h-11 rounded-xl bg-[#1a1a2e] border border-[#c9a44c]/20 flex items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Game mode icons ──────────────────────────────────────────────────────────
export function PvEIcon() {
  return (
    <IconBox>
      <User className="w-5 h-5 text-[#c9a44c]" />
    </IconBox>
  );
}

export function PvPIcon() {
  return (
    <IconBox>
      <Users className="w-5 h-5 text-[#e44d8a]" />
    </IconBox>
  );
}

export function TournamentIcon() {
  return (
    <IconBox>
      <Trophy className="w-5 h-5 text-[#c9a44c]" />
    </IconBox>
  );
}

// ─── How it works icons ───────────────────────────────────────────────────────
export function StepCreateIcon() {
  return (
    <IconBox>
      <Sparkles className="w-5 h-5 text-[#c9a44c]" />
    </IconBox>
  );
}

export function StepChooseIcon() {
  return (
    <IconBox>
      <Target className="w-5 h-5 text-[#e44d8a]" />
    </IconBox>
  );
}

export function StepPlayIcon() {
  return (
    <IconBox>
      <Trophy className="w-5 h-5 text-[#ff8c42]" />
    </IconBox>
  );
}

// ─── AI feature icons ─────────────────────────────────────────────────────────
export function WinRateIcon() {
  return (
    <IconBox>
      <TrendingUp className="w-5 h-5 text-[#2dd4a8]" />
    </IconBox>
  );
}

export function OptimalPlayIcon() {
  return (
    <IconBox>
      <Brain className="w-5 h-5 text-[#c9a44c]" />
    </IconBox>
  );
}

export function AISparringIcon() {
  return (
    <IconBox>
      <Swords className="w-5 h-5 text-[#ff8c42]" />
    </IconBox>
  );
}

export function ReviewIcon() {
  return (
    <IconBox>
      <BarChart3 className="w-5 h-5 text-[#e44d8a]" />
    </IconBox>
  );
}

// ─── Security icons ───────────────────────────────────────────────────────────
export function EncryptionIcon() {
  return (
    <IconBox>
      <Lock className="w-5 h-5 text-[#2dd4a8]" />
    </IconBox>
  );
}

export function RNGIcon() {
  return (
    <IconBox>
      <Dice5 className="w-5 h-5 text-[#4d9de4]" />
    </IconBox>
  );
}

export function AntiCheatIcon() {
  return (
    <IconBox>
      <Shield className="w-5 h-5 text-[#e44d8a]" />
    </IconBox>
  );
}

export function PaymentIcon() {
  return (
    <IconBox>
      <CreditCard className="w-5 h-5 text-[#c9a44c]" />
    </IconBox>
  );
}

// ─── Ranking icons ────────────────────────────────────────────────────────────
export function GoldMedalIcon() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#c9a44c]/30 flex items-center justify-center">
      <Medal className="w-5 h-5 text-[#c9a44c]" />
    </div>
  );
}

export function SilverMedalIcon() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#8b7e6a]/30 flex items-center justify-center">
      <Medal className="w-5 h-5 text-[#8b7e6a]" />
    </div>
  );
}

export function BronzeMedalIcon() {
  return (
    <div className="w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#ff8c42]/30 flex items-center justify-center">
      <Medal className="w-5 h-5 text-[#ff8c42]" />
    </div>
  );
}

// ─── Game card icons ──────────────────────────────────────────────────────────
export function PokerIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] border border-[#c9a44c]/20 flex items-center justify-center">
      <Swords className="w-6 h-6 text-[#c9a44c]" />
    </div>
  );
}

export function LandlordIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-[#1a1a2e] border border-[#e44d8a]/20 flex items-center justify-center">
      <Gamepad2 className="w-6 h-6 text-[#e44d8a]" />
    </div>
  );
}
