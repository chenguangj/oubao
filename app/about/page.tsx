"use client";

import { PageLayout } from "@/components/page-layout";
import { I18nProvider } from "@/lib/i18n";
import {
  Shield,
  Globe,
  Users,
  Heart,
  Code,
  Lock,
  Server,
  Zap,
} from "lucide-react";

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#2a2a3e] bg-[#12121e] p-8 hover:border-[#c9a44c]/30 hover:shadow-lg hover:shadow-[#c9a44c]/10 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <I18nProvider>
      <PageLayout>
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-20 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-semibold text-[#c9a44c] bg-[#c9a44c]/10 border border-[#c9a44c]/20 mb-6">
                ABOUT US
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
                  Building the Future
                  <br />
                  of Card Gaming
                </span>
              </h1>
              <p className="text-lg text-[#8b7e6a] leading-relaxed max-w-xl">
                We believe card games become infinitely more interesting when
                powered by AI. Our mission is to create the most intelligent,
                fair, and engaging card gaming platform in Southeast Asia and
                beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#c9a44c]/10 to-[#4d9de4]/10 border border-[#c9a44c]/20 flex items-center justify-center mb-5">
                  <Heart className="w-5 h-5 text-[#c9a44c]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#f0e6d3]">
                  Our Mission
                </h3>
                <p className="text-sm text-[#8b7e6a] leading-relaxed">
                  To democratize advanced AI technology for casual and
                  competitive card gamers alike. We want every player â€?
                  regardless of experience level â€?to have access to the same
                  caliber of strategic insights that were previously available
                  only to professionals with years of study.
                </p>
                <p className="text-sm text-[#8b7e6a] leading-relaxed mt-4">
                  By making AI accessible through a simple Token system, we
                  ensure that strategic assistance is available to everyone
                  without creating an unfair advantage for those who use it
                  most.
                </p>
              </Card>
              <Card>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#e44d8a]/10 to-[#ff7eb3]/10 border border-[#e44d8a]/20 flex items-center justify-center mb-5">
                  <Globe className="w-5 h-5 text-[#e44d8a]" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#f0e6d3]">
                  Our Vision
                </h3>
                <p className="text-sm text-[#8b7e6a] leading-relaxed">
                  To become the leading AI-powered card gaming platform in
                  Southeast Asia by 2027, serving millions of players across
                  Malaysia, Indonesia, Thailand, Philippines, and Singapore. We
                  envision a platform where:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Every game is fair and verified by certified RNG",
                    "AI helps players learn and improve, not just win",
                    "Token economics reward skill and consistency",
                    "Community thrives through tournaments and social features",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#8b7e6a]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-[#c9a44c]/5 to-transparent">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-[#f0e6d3]">
              Our Values
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              These principles guide every decision we make, from AI model
              training to community management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Shield,
                  title: "Fair Play First",
                  desc: "Certified RNG, anti-cheat systems, and transparent algorithms. Fairness is non-negotiable.",
                  color: "text-[#2dd4a8]",
                  bg: "from-[#2dd4a8]/10 to-[#2dd4a8]/5 border-[#2dd4a8]/20",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  desc: "Player feedback shapes our roadmap. Regular surveys, community events, and open communication.",
                  color: "text-[#4d9de4]",
                  bg: "from-blue-50 to-indigo-50 border-blue-100",
                },
                {
                  icon: Code,
                  title: "Tech Excellence",
                  desc: "Sub-300ms AI responses, 99.9% uptime, and continuous model improvements based on new game data.",
                  color: "text-[#e44d8a]",
                  bg: "from-[#e44d8a]/10 to-[#ff7eb3]/10 border-[#e44d8a]/20",
                },
                {
                  icon: Heart,
                  title: "Responsible Gaming",
                  desc: "Built-in spending limits, session time reminders, and resources for healthy gaming habits.",
                  color: "text-[#ef4444]",
                  bg: "from-[#ef4444]/10 to-[#e44d8a]/10 border-red-100",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <div
                    className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center mb-5`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="text-sm font-bold mb-2 text-[#f0e6d3]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8b7e6a] leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-4 text-[#f0e6d3]">
              Security & Compliance
            </h2>
            <p className="text-[#8b7e6a] mb-12 max-w-2xl">
              We hold ourselves to the highest standards of data protection and
              operational security.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  icon: Lock,
                  title: "Data Encryption",
                  desc: "All personal data and financial transactions are encrypted with AES-256 in transit and at rest. We never store raw card data or payment credentials on our servers.",
                },
                {
                  icon: Server,
                  title: "Infrastructure",
                  desc: "Multi-region cloud deployment across Southeast Asia ensures low latency and high availability. Automated failover and regular disaster recovery testing protect against outages.",
                },
                {
                  icon: Shield,
                  title: "Anti-Cheat & Anti-Collusion",
                  desc: "Advanced behavioral analysis detects coordinated play, shared accounts, bot usage, and other forms of cheating. Violations result in immediate account suspension and Token forfeiture.",
                },
                {
                  icon: Zap,
                  title: "Certified Randomness",
                  desc: "Our random number generator is independently audited quarterly by a third-party firm. Certification reports are published publicly to maintain transparency and player trust.",
                },
              ].map((item) => (
                <Card key={item.title}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a44c]/10 to-[#e44d8a]/10 border border-[#c9a44c]/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-[#c9a44c]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold mb-2 text-[#f0e6d3]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#8b7e6a] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[#2a2a3e] bg-gradient-to-b from-purple-50/20 to-transparent">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-12 text-[#f0e6d3]">
              Platform at a Glance
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "500K+", label: "Registered Players" },
                { value: "10M+", label: "Games Played" },
                { value: "12", label: "Seasons Completed" },
                { value: "5", label: "Countries Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-extrabold text-[#c9a44c] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8b7e6a] tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageLayout>
    </I18nProvider>
  );
}
