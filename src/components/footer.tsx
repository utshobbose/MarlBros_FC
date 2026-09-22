import React from "react";
import Link from "next/link";
import { CrestLogo } from "./crest-logo";
import { clubConfig } from "@/lib/config";
import { MessageCircle, Phone, ArrowUpRight, Shield, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-16 pb-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Masthead in Footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#222222]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 bg-[#70111A] rounded-sm flex items-center justify-center border border-[#9A1E2B]">
                <CrestLogo size={32} color="cream" />
              </div>
              <div>
                <span className="font-serif font-black text-2xl tracking-tight text-white block leading-none">
                  MARLBROS FC
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-neutral-400 mt-1 block">
                  Football Club · Est. 2023
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Founded as seven brothers united by the beautiful game. Now thirty strong.
              Built on camaraderie, discipline, and the pursuit of athletic excellence on every pitch.
            </p>

            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase bg-[#181818] px-3 py-1.5 rounded border border-[#2B2B2B] text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#70111A]"></span>
              <span>Official 2026 Crimson & Cream Kit</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 font-sans border-b border-[#222222] pb-2">
              The Club
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story (7 to 30)
                </Link>
              </li>
              <li>
                <Link href="/about#crest" className="hover:text-white transition-colors">
                  Crest & Heritage
                </Link>
              </li>
              <li>
                <Link href="/about#squad" className="hover:text-white transition-colors">
                  Squad Roster (30)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Photo Archive
                </Link>
              </li>
            </ul>
          </div>

          {/* Jersey & Shop */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 font-sans border-b border-[#222222] pb-2">
              Kit & Merchandise
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-medium">
              <li>
                <Link href="/jersey" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Batch #01 Jersey</span>
                  <span className="text-[10px] bg-[#70111A] text-white px-1.5 py-0.5 rounded">15 Units</span>
                </Link>
              </li>
              <li>
                <Link href="/order" className="hover:text-white transition-colors">
                  Submit Jersey Order
                </Link>
              </li>
              <li>
                <Link href="/jersey#sizing" className="hover:text-white transition-colors">
                  Size Guide & Chart
                </Link>
              </li>
              <li>
                <span className="text-neutral-600 cursor-not-allowed">
                  Phase 2 Public Shop (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* bKash & WhatsApp Direct Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-300 font-sans border-b border-[#222222] pb-2">
              Payment & Support
            </h4>
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="bg-[#181818] p-3 rounded border border-[#2B2B2B]">
                <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                  bKash Send Money Desk
                </div>
                <div className="font-mono text-sm font-bold text-white mt-1">
                  {clubConfig.bKashNumber}
                </div>
                <div className="text-[10px] text-neutral-500 mt-0.5">
                  Type: {clubConfig.bKashType} · Use Name as Reference
                </div>
              </div>

              <a
                href={`https://wa.me/${clubConfig.whatsAppNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/50 text-emerald-300 transition-all font-medium"
              >
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Coordination</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} MarlBros FC. All rights reserved.</span>
            <span>·</span>
            <span>Strict Editorial Edition</span>
          </div>

          <div className="flex items-center space-x-6 text-neutral-400">
            <Link href="/admin" className="hover:text-white transition-colors">
              Admin Gateway
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact & Matchdays
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
