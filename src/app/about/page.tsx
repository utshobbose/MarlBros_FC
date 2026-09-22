"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CrestLogo } from "@/components/crest-logo";
import { clubConfig } from "@/lib/config";
import { Shield, Users, Trophy, Award, Heart, ChevronRight, ArrowRight } from "lucide-react";

interface SquadMember {
  number: number;
  name: string;
  position: "Goalkeeper" | "Defender" | "Midfielder" | "Forward" | "Staff";
  role?: string;
  isFounder?: boolean;
}

export default function AboutPage() {
  // 30 Member Brotherhood Roster
  const squad: SquadMember[] = [
    // Founding 7 highlighted
    { number: 1, name: "Tanvir Ahmed", position: "Goalkeeper", role: "Vice Captain", isFounder: true },
    { number: 4, name: "Farhan Kabir", position: "Defender", role: "Centre Back", isFounder: true },
    { number: 5, name: "Zubair Hossain", position: "Defender", role: "Club Captain", isFounder: true },
    { number: 8, name: "Nayeem Islam", position: "Midfielder", role: "Playmaker", isFounder: true },
    { number: 10, name: "Arifur Rahman", position: "Forward", role: "Top Scorer", isFounder: true },
    { number: 7, name: "Rifat Hasan", position: "Forward", role: "Winger", isFounder: true },
    { number: 11, name: "Sabbir Chowdhury", position: "Midfielder", role: "Box-to-Box", isFounder: true },

    // The expanding brotherhood to 30
    { number: 13, name: "Mahfuz Anam", position: "Goalkeeper" },
    { number: 2, name: "Imtiaz Shovon", position: "Defender", role: "Right Back" },
    { number: 3, name: "Shahriar Niloy", position: "Defender", role: "Left Back" },
    { number: 6, name: "Muntasir Billah", position: "Defender" },
    { number: 14, name: "Ashikur Rahman", position: "Defender" },
    { number: 15, name: "Mehedi Hasan", position: "Defender" },
    { number: 16, name: "Kazi Tahsin", position: "Defender" },
    { number: 12, name: "Siam Ahmed", position: "Midfielder", role: "Holding Mid" },
    { number: 17, name: "Anisur Rahman", position: "Midfielder" },
    { number: 18, name: "Fahim Faysal", position: "Midfielder" },
    { number: 20, name: "Taufiq Umar", position: "Midfielder" },
    { number: 21, name: "Nahid Parvez", position: "Midfielder" },
    { number: 22, name: "Shakil Mahmud", position: "Midfielder" },
    { number: 23, name: "Wasim Akram", position: "Midfielder" },
    { number: 9, name: "Junaid Siddiqui", position: "Forward", role: "Striker" },
    { number: 19, name: "Tamim Iqbal Jr.", position: "Forward" },
    { number: 24, name: "Rayhan Kabir", position: "Forward" },
    { number: 25, name: "Asif Adnan", position: "Forward" },
    { number: 26, name: "Mustafizur R.", position: "Forward" },
    { number: 27, name: "Hasan Mahmud", position: "Forward" },
    { number: 28, name: "Kamrul Islam", position: "Forward" },
    { number: 99, name: "Nasir Uddin", position: "Staff", role: "Team Manager" },
    { number: 0, name: "Coach Alamgir", position: "Staff", role: "Head Coach" },
  ];

  return (
    <div className="bg-white">
      {/* 1. Header Masthead */}
      <section className="border-b border-editorial-border py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="editorial-kicker text-[#70111A]">CLUB IDENTITY & HERITAGE</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111]">
              From Seven Founders to Thirty Brothers.
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              MarlBros FC was founded not as a corporate franchise, but as a commitment to loyalty, athletic passion, and relentless brotherhood on the pitch.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Club Story Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Deep Story Article */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6 text-neutral-800 leading-relaxed font-light text-base sm:text-lg">
              <h2 className="font-serif text-3xl font-bold text-[#111111] leading-tight">
                "We started with one football, uneven posts, and seven friends who refused to lose."
              </h2>

              <p>
                In 2023, seven footballers gathered for what was meant to be an informal weekend match. But from that very first 90 minutes, something clicked. The relentless pressing, the fierce tactical communication, and the collective refusal to accept defeat became our blueprint.
              </p>

              <p>
                Over the following two years, friends brought brothers, training sessions became disciplined rituals, and the squad naturally evolved into thirty registered members. Despite our growth, the core values remain unchanged: humility, unyielding effort, and respect for every teammate who wears the colors.
              </p>

              {/* Milestone Timeline Callout */}
              <div className="my-8 p-6 bg-[#FAF6EE] rounded-lg border-l-4 border-[#70111A] space-y-4">
                <span className="editorial-kicker text-[#70111A]">CHRONOLOGY</span>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <span className="font-mono font-bold text-[#70111A] shrink-0">2023</span>
                    <p className="text-neutral-700">
                      <strong>Inauguration:</strong> 7 founding members establish the club on local weekend turf.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="font-mono font-bold text-[#70111A] shrink-0">2024</span>
                    <p className="text-neutral-700">
                      <strong>Expansion:</strong> Roster expands to 18 members; inaugural entry into regional knockout tournaments.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="font-mono font-bold text-[#70111A] shrink-0">2026</span>
                    <p className="text-neutral-700">
                      <strong>The Brotherhood at 30:</strong> Squad reaches full 30-member strength; commission of the custom Batch #01 Crimson & Cream kit.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                As we enter our next competitive cycle, the production of our custom jerseys marks a defining milestone: every member steps onto the pitch wearing their own name, their chosen squad number, and the imperial crown monogram over their heart.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Callouts */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-neutral-900 text-white p-6 rounded-lg space-y-4 border border-neutral-800">
              <span className="editorial-kicker text-[#C2A267]">THE FOUNDING CREED</span>
              <blockquote className="font-serif text-xl italic font-normal text-[#FAF6EE] leading-snug">
                "No individual is bigger than the crest. The ball moves faster than any runner. We play for the badge."
              </blockquote>
              <div className="text-xs font-mono text-neutral-400">
                â€” MarlBros FC Founding Principles
              </div>
            </div>

            <div className="border border-editorial-border p-6 rounded-lg space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#111111]">
                Quick Facts
              </h3>
              <ul className="space-y-3 text-xs text-neutral-700">
                <li className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Founded:</span>
                  <span className="font-bold">2023</span>
                </li>
                <li className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Founding Members:</span>
                  <span className="font-mono font-bold">7</span>
                </li>
                <li className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Current Squad:</span>
                  <span className="font-mono font-bold">30 Brothers</span>
                </li>
                <li className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Club Colors:</span>
                  <span className="font-bold text-[#70111A]">Crimson & Vintage Cream</span>
                </li>
                <li className="flex justify-between border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Home Ground:</span>
                  <span className="font-bold">Victoria Stadium / Green Turf</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Crest & Kit Meaning Section */}
      <section id="crest" className="bg-[#FAF6EE] border-t border-b border-[#EDE3D2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="editorial-kicker text-[#70111A]">HERALDIC SYMBOLISM</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111111]">
              The Crest & Kit Architecture
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              An intricate breakdown of every design motif embroidered into our 2026 kit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Symbol 1 */}
            <div className="bg-white p-6 rounded-lg border border-[#E5D7C0] space-y-4 text-center">
              <div className="w-16 h-16 bg-[#500308] rounded-full flex items-center justify-center mx-auto shadow-md p-2 border border-[#7A0D15]">
                <CrestLogo size={44} variant="transparent" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#111111]">
                The Imperial Crown
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                The five-point crown represents sovereign ambition and self-governance. We answer to our own standards of sportsmanship, honour, and relentless work ethic.
              </p>
            </div>

            {/* Symbol 2 */}
            <div className="bg-white p-6 rounded-lg border border-[#E5D7C0] space-y-4 text-center">
              <div className="w-16 h-16 bg-[#111111] rounded-full flex items-center justify-center mx-auto shadow-md p-2 border border-[#333]">
                MB
              </div>
              <h3 className="font-serif font-bold text-lg text-[#111111]">
                Interlocking Monogram
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                The letters 'M' and 'B' are seamlessly intertwined, mirroring how every individual playerâ€™s identity is locked into the greater collective brotherhood of MarlBros.
              </p>
            </div>

            {/* Symbol 3 */}
            <div className="bg-white p-6 rounded-lg border border-[#E5D7C0] space-y-4 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#70111A] to-[#EDE3D2] rounded-full flex items-center justify-center mx-auto shadow-md">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#111111]">
                Crimson & Vintage Cream
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Deep crimson for blood, fire, and competitive passion. Soft vintage cream for poise, tradition, and timeless football aesthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full Squad Roster (30 Members) */}
      <section id="squad" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-editorial-border gap-4">
          <div>
            <span className="editorial-kicker text-neutral-400">THE ROSTER</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111111] mt-1">
              The 30 Brotherhood
            </h2>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#70111A]"></span>
            <span className="font-semibold text-neutral-600">â˜… = Founding Seven Member</span>
          </div>
        </div>

        {/* Squad Table / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {squad.map((player) => (
            <div
              key={`${player.number}-${player.name}`}
              className={`p-4 rounded border transition-all hover:shadow-sm ${
                player.isFounder
                  ? "bg-[#FAF6EE] border-[#EDE3D2]"
                  : "bg-white border-editorial-border hover:border-black"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-black text-[#70111A]">
                  #{player.number}
                </span>
                {player.isFounder && (
                  <span className="text-[10px] bg-[#70111A] text-white px-1.5 py-0.5 rounded font-bold uppercase">
                    â˜… Founder
                  </span>
                )}
              </div>

              <div className="mt-3">
                <h4 className="font-serif font-bold text-sm text-[#111111] truncate">
                  {player.name}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-neutral-500 mt-1">
                  <span>{player.position}</span>
                  {player.role && <span className="font-medium text-neutral-800">{player.role}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Call To Action to Order Jersey */}
      <section className="bg-[#111111] text-white py-12 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold">
              Ready to Join the Pitch in the Official Colors?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Internal allocation for 15 squad jerseys is currently open for registration.
            </p>
          </div>

          <Link
            href="/jersey"
            className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-[#FAF6EE] transition-all shrink-0"
          >
            <span>Customize Jersey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

