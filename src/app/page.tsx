"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CrestLogo } from "@/components/crest-logo";
import { JerseyPreview } from "@/components/jersey-preview";
import { Lightbox, GalleryItem } from "@/components/lightbox";
import { clubConfig, formatBDT } from "@/lib/config";
import {
  ArrowRight,
  ShoppingBag,
  Shield,
  Users,
  Flame,
  Calendar,
  Sparkles,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Camera,
} from "lucide-react";

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [heroImageTab, setHeroImageTab] = useState<"squad" | "jersey">("squad");

  // Curated gallery preview items
  const galleryPreview: GalleryItem[] = [
    {
      id: "gal-1",
      title: "Batch #01 Official Kit Reveal",
      category: "Reveal",
      src: "/images/jersey-showcase.jpg",
      caption: "Front and back showcase of the 2026 crimson and vintage ivory kit.",
      date: "Sept 2026",
    },
    {
      id: "gal-2",
      title: "The MarlBros 30 Brotherhood on Turf",
      category: "Brotherhood",
      src: "/images/team-squad.jpg",
      caption: "The complete MarlBros squad under the floodlights after an intensive evening session.",
      date: "2026",
    },
    {
      id: "gal-3",
      title: "Embroidered Monogram Crest Detail",
      category: "Reveal",
      src: "/images/marlbros-crest-patch.jpg",
      caption: "Intricate crown and interlocking MB gold embroidery over deep crimson weave.",
      date: "Sept 2026",
    },
    {
      id: "gal-4",
      title: "Signature Ivory Collar Finish",
      category: "Reveal",
      src: "/images/collar-detail.jpg",
      caption: "Classic polo collar with red/cream stripe insert and tailored neckline.",
      date: "Sept 2026",
    },
    {
      id: "gal-5",
      title: "High Intensity Evening Training Session",
      category: "Training",
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=800&q=80",
      caption: "Drills, endurance conditioning, and tactical positioning under the floodlights.",
      date: "Aug 2026",
    },
    {
      id: "gal-6",
      title: "Weekend Championship Victory",
      category: "Matches",
      src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      caption: "3-1 win in the inter-city invitational cup group stage.",
      date: "July 2026",
    },
  ];

  // Editorial Dispatches / "Most Popular" rail (THR style)
  const squadHighlights = [
    {
      rank: "01",
      kicker: "KIT PRODUCTION",
      title: "Batch #01 Allocation Opens for 15 Squad Members",
      time: "Current Phase",
      link: "/jersey",
    },
    {
      rank: "02",
      kicker: "CLUB EXPANSION",
      title: "From 7 to 30: The Journey of Brotherhood & Discipline",
      time: "Club Story",
      link: "/about",
    },
    {
      rank: "03",
      kicker: "TACTICAL BRIEF",
      title: "High-Pressing 4-3-3: Coach & Captain's Strategy Blueprint",
      time: "Match Prep",
      link: "/about#squad",
    },
    {
      rank: "04",
      kicker: "MATCH FIXTURE",
      title: "Friday Derby Against Victoria United at Home Turf",
      time: "Upcoming",
      link: "/contact",
    },
    {
      rank: "05",
      kicker: "COMMUNITY DESK",
      title: "WhatsApp Coordination Desk Live for bKash Orders",
      time: "Order Support",
      link: "/order",
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO MODULE (The Hollywood Reporter Editorial Energy) */}
      <section className="relative border-b border-editorial-border bg-[#0C0C0C] text-white overflow-hidden">
        {/* Background glow & subtle texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(112,17,26,0.35)_0%,transparent_65%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Bold Headline & Editorial Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="editorial-kicker text-[#C2A267]">
                  Official Club Announcement
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-xs uppercase font-mono text-neutral-400">
                  Batch #01 Allocation
                </span>
                <span className="inline-flex items-center space-x-1 bg-[#70111A] text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide">
                  <Flame className="w-3 h-3" />
                  <span>15 Kits Only</span>
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.98] text-white">
                THE PRIDE OF <span className="italic font-normal text-[#F3EBDD]">MARLBROS</span> — FROM 7 TO 30 STRONG.
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                What began as seven friends on a concrete pitch has grown into a thirty-brother football family. Today, we officially reveal our 2026 custom jersey — engineered with an embroidered crest, classic ivory collar, and bespoke numbering.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/jersey"
                  className="inline-flex items-center justify-center space-x-3 bg-white hover:bg-neutral-200 text-black px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-lift"
                >
                  <ShoppingBag className="w-4 h-4 text-[#70111A]" />
                  <span>Customize & Order Jersey</span>
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center space-x-2 border border-neutral-700 hover:border-white text-white px-6 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
                >
                  <span>Explore Club Story</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </Link>
              </div>

              {/* Live Metric Strip */}
              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-3 gap-4 max-w-lg">
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-[#F3EBDD]">7 → 30</span>
                  <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mt-0.5">
                    Brotherhood Growth
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-white">15</span>
                  <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mt-0.5">
                    Batch #01 Units
                  </span>
                </div>
                <div>
                  <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-400">bKash</span>
                  <span className="block text-[10px] uppercase font-bold text-neutral-400 tracking-wider mt-0.5">
                    Direct Send Money
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase (With Squad Photo Featured) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-lg group">
                {/* Switcher Pills on top of Hero Card */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="inline-flex p-1 bg-neutral-900/90 rounded-lg border border-neutral-800 backdrop-blur-sm">
                    <button
                      type="button"
                      onClick={() => setHeroImageTab("squad")}
                      className={`px-3.5 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase transition-all flex items-center space-x-1.5 ${
                        heroImageTab === "squad"
                          ? "bg-white text-black shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>The Squad</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroImageTab("jersey")}
                      className={`px-3.5 py-1.5 rounded-md text-xs font-bold tracking-wider uppercase transition-all flex items-center space-x-1.5 ${
                        heroImageTab === "jersey"
                          ? "bg-white text-black shadow-sm"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#70111A]" />
                      <span>2026 Kit</span>
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-[#C2A267] uppercase tracking-wider hidden sm:inline">
                    {heroImageTab === "squad" ? "★ The 30 Brothers" : "★ Batch #01"}
                  </span>
                </div>

                {/* Visual Card Frame */}
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-neutral-700 shadow-2xl bg-neutral-950">
                  {heroImageTab === "squad" ? (
                    <>
                      <Image
                        src="/images/team-squad.jpg"
                        alt="MarlBros FC Official Squad Photo - From 7 to 30 Brothers"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest font-mono text-[#C2A267] block">
                            MarlBros FC · Home Turf
                          </span>
                          <div className="font-serif font-bold text-lg leading-snug">
                            The 30 Brotherhood
                          </div>
                          <p className="text-[11px] text-neutral-300 mt-0.5 line-clamp-1">
                            United under the night lights at Victoria Arena.
                          </p>
                        </div>
                        <Link
                          href="/about"
                          className="p-2.5 bg-white text-black rounded-full hover:scale-110 transition-transform shadow shrink-0 ml-3"
                          title="View Club Story"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <Image
                        src="/images/jersey-showcase.jpg"
                        alt="MarlBros FC Official 2026 Jersey"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest font-mono text-[#C2A267] block">
                            2026 Home Kit
                          </span>
                          <div className="font-serif font-bold text-lg leading-snug">
                            Crimson & Vintage Cream
                          </div>
                          <p className="text-[11px] text-neutral-300 mt-0.5 line-clamp-1">
                            Embroidered crown monogram & custom numbering.
                          </p>
                        </div>
                        <Link
                          href="/jersey"
                          className="p-2.5 bg-white text-black rounded-full hover:scale-110 transition-transform shadow shrink-0 ml-3"
                          title="Customize Jersey"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>

                {/* Sub-badge below hero */}
                <div className="mt-3 flex items-center justify-between px-2 text-xs text-neutral-400 font-mono">
                  <span>EST. 2023</span>
                  <span>·</span>
                  <span>VICTORIA ARENA</span>
                  <span>·</span>
                  <span>30 REGISTERED BROTHERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TICKER STRIP (Hollywood Reporter Breaking News Style) */}
      <div className="bg-[#FAF6EE] border-b border-[#E5D7C0] py-2.5 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center space-x-3 overflow-hidden">
          <span className="bg-[#70111A] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider shrink-0">
            INTERNAL ROUND
          </span>
          <p className="text-neutral-800 truncate font-medium">
            MarlBros FC members may now register their customized jersey (Size, Name, Number). Allocations reserved upon bKash payment verification via WhatsApp.
          </p>
          <Link href="/order" className="underline font-bold text-[#70111A] shrink-0 hover:text-black">
            Order Now →
          </Link>
        </div>
      </div>

      {/* 3. MAIN EDITORIAL BODY: LEAD STORIES & "SQUAD HIGHLIGHTS" RAIL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (8 cols): Lead Features & Editorial Cards */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section Header */}
            <div className="border-b-2 border-black pb-3">
              <span className="editorial-kicker">FEATURE STORY</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#111111] mt-1">
                The Anatomy of the 2026 Kit
              </h2>
            </div>

            {/* Lead Big Editorial Card */}
            <article className="group space-y-4">
              <div className="relative aspect-[16/9] bg-neutral-900 rounded-sm overflow-hidden border border-editorial-border">
                <Image
                  src="/images/jersey-showcase.jpg"
                  alt="MarlBros FC Official Kit Details"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-xs text-neutral-500">
                  <span className="editorial-kicker text-[#70111A]">KIT REVEAL</span>
                  <span>·</span>
                  <span>By MarlBros Kit Committee</span>
                  <span>·</span>
                  <span>Sept 2026</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] group-hover:underline">
                  Engineered For Glory: Deep Crimson Body, Regal Crown Monogram, and Custom Player Lettering
                </h3>

                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Every thread of the new MarlBros FC jersey was specified with our club identity at its core. From the custom polo neck with inset piping to the breathable mesh flanks and collegiate back numbers, this is not a replica — it is our battle armor.
                </p>

                <div className="pt-2">
                  <Link
                    href="/jersey"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#70111A]"
                  >
                    <span>View Sizing & Customizer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Two-Column Card Grid (THR Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-editorial-border">
              {/* Card 1: Club Story with Real Squad Photo */}
              <article className="group space-y-3">
                <div className="relative aspect-[4/3] bg-neutral-100 rounded-sm overflow-hidden border border-editorial-border">
                  <Image
                    src="/images/team-squad.jpg"
                    alt="MarlBros FC Brotherhood"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="editorial-kicker text-neutral-400">HERITAGE</div>
                <h4 className="font-serif text-lg font-bold text-[#111111] group-hover:underline leading-snug">
                  How 7 Mates on a Dusty Ground Built a 30-Man Collective
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We never recruited through advertisements. MarlBros grew word-of-mouth through mutual respect, competitive fire, and loyalty.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#70111A] hover:underline"
                >
                  <span>Read Story</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </article>

              {/* Card 2: The Monogram Crest */}
              <article className="group space-y-3">
                <div className="relative aspect-[4/3] bg-neutral-900 rounded-sm overflow-hidden border border-editorial-border">
                  <Image
                    src="/images/marlbros-crest-patch.jpg"
                    alt="The Embroidered Crest"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="editorial-kicker text-neutral-400">CREST SYMBOLISM</div>
                <h4 className="font-serif text-lg font-bold text-[#111111] group-hover:underline leading-snug">
                  The Crown & Interlocking MB: A Royal Standard for Grassroots Football
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  The heraldic crown symbolizes ambition, while the intertwining M and B represents unbreakable brotherly bonds.
                </p>
                <Link
                  href="/about#crest"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#70111A] hover:underline"
                >
                  <span>Crest Breakdown</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </article>
            </div>
          </div>

          {/* Right Column (4 cols): THR "Most Popular" Style Rail ("Club Dispatch") */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Top Widget: Squad Highlights / Most Read */}
            <div className="bg-neutral-50 border border-editorial-border p-6 rounded-sm">
              <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-6">
                <span className="font-serif font-black text-lg tracking-tight uppercase text-[#111111]">
                  Club Dispatch
                </span>
                <span className="editorial-kicker text-neutral-400">LATEST</span>
              </div>

              <div className="divide-y divide-neutral-200">
                {squadHighlights.map((item) => (
                  <Link
                    key={item.rank}
                    href={item.link}
                    className="group block py-4 first:pt-0 last:pb-0 transition-colors"
                  >
                    <div className="flex items-start space-x-3.5">
                      <span className="font-serif font-black text-2xl sm:text-3xl text-neutral-300 group-hover:text-[#70111A] transition-colors leading-none">
                        {item.rank}
                      </span>
                      <div className="space-y-1">
                        <span className="editorial-kicker text-[10px] text-[#70111A]">
                          {item.kicker}
                        </span>
                        <h5 className="font-serif font-bold text-sm text-[#111111] group-hover:underline leading-snug">
                          {item.title}
                        </h5>
                        <span className="text-[11px] text-neutral-400 font-mono block">
                          {item.time}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Callout Box: Direct bKash Send Money instructions */}
            <div className="bg-[#FAF6EE] border border-[#EDE3D2] p-6 rounded-sm space-y-4">
              <div className="flex items-center space-x-2 text-[#70111A]">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Payment Protocol
                </span>
              </div>

              <h4 className="font-serif font-bold text-base text-[#111111]">
                Simple, Low-Friction bKash Ordering
              </h4>

              <p className="text-xs text-neutral-600 leading-relaxed">
                No third-party payment gateways. Submit your details online, transfer via bKash, and confirm directly on WhatsApp with our kit manager.
              </p>

              <div className="p-3 bg-white rounded border border-[#E5D7C0] text-center">
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                  Club bKash Desk
                </span>
                <span className="font-mono text-base font-black text-[#111111]">
                  {clubConfig.bKashNumber}
                </span>
              </div>

              <Link
                href="/order"
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#111111] hover:bg-black text-white py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Go to Order Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* 4. GALLERY PREVIEW (Grid of 6 Photos + Lightbox) */}
      <section className="bg-neutral-950 text-white py-16 border-t border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-neutral-800 gap-4">
            <div>
              <span className="editorial-kicker text-[#C2A267]">PHOTO ARCHIVE</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mt-1">
                Visual Dispatches From the Pitch
              </h2>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white transition-colors"
            >
              <span>View Full Gallery ({galleryPreview.length}+)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 6 Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPreview.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative aspect-[4/3] rounded overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#C2A267] block">
                    {item.category}
                  </span>
                  <h4 className="font-serif font-bold text-sm mt-0.5 line-clamp-1 group-hover:underline">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "GET YOUR JERSEY" FULL WIDTH BANNER CTA */}
      <section className="bg-[#70111A] text-white py-16 px-4 sm:px-8 border-b border-[#4D0911]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
            <CrestLogo size={40} color="cream" />
          </div>

          <span className="editorial-kicker text-[#FAF6EE]">BATCH #01 NOW ACTIVE</span>

          <h2 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Wear The Crimson & Cream With Pride. Claim Your Jersey.
          </h2>

          <p className="text-sm sm:text-base text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
            Only 15 bespoke jerseys will be produced in our inaugural run. Customize your personal name and squad number before allocations close.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/jersey"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white hover:bg-[#F3EBDD] text-black px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="w-4 h-4 text-[#70111A]" />
              <span>Launch Jersey Customizer</span>
            </Link>

            <Link
              href="/order"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-white/40 hover:border-white text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>Direct Checkout ({formatBDT(clubConfig.jerseyPrice)})</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        items={galleryPreview}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % galleryPreview.length : null
          )
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null
              ? (prev - 1 + galleryPreview.length) % galleryPreview.length
              : null
          )
        }
      />
    </div>
  );
}
