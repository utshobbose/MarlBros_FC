"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CrestLogo } from "./crest-logo";
import { clubConfig } from "@/lib/config";
import {
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  MessageCircle,
  Shield,
  Users,
  Camera,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMega(null);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Club Identity",
      href: "/about",
      mega: "club",
    },
    {
      name: "Gallery",
      href: "/gallery",
      mega: "gallery",
    },
    {
      name: "Jersey Shop",
      href: "/jersey",
      badge: "Batch 01",
    },
    { name: "Order Form", href: "/order" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-editorial-border"
          : "bg-white border-b border-editorial-border"
      }`}
    >
      {/* 1. Slim Utility Bar (THR Style Topline) */}
      <div className="bg-[#111111] text-white text-[11px] font-medium tracking-wider uppercase py-1.5 px-4 sm:px-8 border-b border-[#262626]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-neutral-300">
              Internal Batch #01: 15 Custom Jerseys
            </span>
            <span className="hidden md:inline text-neutral-500">|</span>
            <span className="hidden md:inline text-neutral-400">
              Est. 2023 · 7 to 30 Brothers Strong
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`https://wa.me/${clubConfig.whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-neutral-300 hover:text-white transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Order Desk</span>
            </a>
            <span className="text-neutral-600">·</span>
            <Link
              href="/admin"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Main Editorial Masthead Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Masthead Brand Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3.5 group focus:outline-none"
          >
            <div className="w-12 h-12 bg-[#70111A] rounded-sm flex items-center justify-center border border-[#9A1E2B] shadow-inner group-hover:scale-105 transition-transform duration-200">
              <CrestLogo size={32} color="cream" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black tracking-tight text-2xl leading-none text-[#111111] group-hover:text-black">
                MARLBROS <span className="font-sans font-light text-sm tracking-widest text-neutral-500">FC</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-neutral-500 mt-1">
                Official Football Club
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div
                  key={link.name}
                  className="relative py-6"
                  onMouseEnter={() => link.mega && setActiveMega(link.mega)}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-bold transition-colors ${
                      isActive
                        ? "text-[#111111] border-b-2 border-[#111111] pb-1"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="bg-[#70111A] text-white text-[9px] font-semibold px-1.5 py-0.5 rounded tracking-normal normal-case">
                        {link.badge}
                      </span>
                    )}
                    {link.mega && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMega === link.mega ? "rotate-180 text-black" : "text-neutral-400"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {link.mega === "club" && activeMega === "club" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white border border-editorial-border shadow-lift p-6 rounded-sm grid grid-cols-2 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      onMouseEnter={() => setActiveMega("club")}
                      onMouseLeave={() => setActiveMega(null)}
                    >
                      <div className="space-y-3">
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
                          Heritage & Identity
                        </div>
                        <Link
                          href="/about"
                          className="group block p-2 -mx-2 rounded hover:bg-neutral-50 transition-colors"
                        >
                          <div className="font-serif font-bold text-sm text-[#111111] group-hover:underline flex items-center justify-between">
                            <span>From 7 to 30 Strong</span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                          <p className="text-xs text-neutral-500 mt-1 leading-relaxed">
                            How a grassroots game between 7 mates grew into a disciplined 30-brother football club.
                          </p>
                        </Link>
                        <Link
                          href="/about#crest"
                          className="group block p-2 -mx-2 rounded hover:bg-neutral-50 transition-colors"
                        >
                          <div className="font-serif font-bold text-sm text-[#111111] group-hover:underline">
                            Crest & Kit Philosophy
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">
                            The crown, interlocking MB monogram, and deep crimson & cream colors.
                          </p>
                        </Link>
                      </div>

                      <div className="border-l border-editorial-border pl-6 space-y-3">
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400">
                          Squad Roster
                        </div>
                        <Link
                          href="/about#squad"
                          className="group block p-2 -mx-2 rounded hover:bg-neutral-50 transition-colors"
                        >
                          <div className="font-serif font-bold text-sm text-[#111111] group-hover:underline">
                            The 30 Brotherhood
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">
                            Browse full player positions, starting XI, and jersey number allocations.
                          </p>
                        </Link>
                        <div className="bg-[#FAF6EE] p-3 rounded border border-[#EDE3D2]">
                          <div className="text-[11px] font-bold text-[#70111A]">
                            Next Match Fixture
                          </div>
                          <div className="text-xs text-neutral-700 font-medium mt-0.5">
                            MarlBros FC vs Victoria United
                          </div>
                          <div className="text-[10px] text-neutral-500 mt-1">
                            Friday 4:30 PM · Home Ground
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {link.mega === "gallery" && activeMega === "gallery" && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] bg-white border border-editorial-border shadow-lift p-6 rounded-sm grid grid-cols-2 gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                      onMouseEnter={() => setActiveMega("gallery")}
                      onMouseLeave={() => setActiveMega(null)}
                    >
                      <Link
                        href="/gallery?category=Matches"
                        className="group p-3 border border-neutral-100 rounded hover:border-black transition-all"
                      >
                        <Camera className="w-5 h-5 text-neutral-700 mb-2" />
                        <div className="font-serif font-bold text-sm text-[#111111]">
                          Matchday Action
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">
                          Photos from league ties and weekend friendlies.
                        </p>
                      </Link>
                      <Link
                        href="/gallery?category=Reveal"
                        className="group p-3 border border-neutral-100 rounded hover:border-black transition-all"
                      >
                        <Shield className="w-5 h-5 text-[#70111A] mb-2" />
                        <div className="font-serif font-bold text-sm text-[#111111]">
                          2026 Kit Reveal
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">
                          Closeups of the embroidered crest, collar & custom names.
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Button: Order Jersey */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/jersey"
              className="inline-flex items-center space-x-2 bg-[#111111] hover:bg-black text-white px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow"
            >
              <ShoppingBag className="w-4 h-4 text-[#F3EBDD]" />
              <span>Get Your Jersey</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link
              href="/jersey"
              className="p-2 bg-neutral-100 rounded text-neutral-900"
              title="Order Jersey"
            >
              <ShoppingBag className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-neutral-800 hover:bg-neutral-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-editorial-border bg-white px-4 pt-3 pb-8 space-y-3 shadow-lg">
          <div className="flex flex-col divide-y divide-neutral-100">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-3 px-2 flex items-center justify-between text-sm uppercase tracking-wider font-bold text-neutral-800 hover:text-black"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="bg-[#70111A] text-white text-[10px] px-2 py-0.5 rounded">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <Link
              href="/admin"
              className="py-3 px-2 flex items-center justify-between text-xs uppercase tracking-wider font-medium text-neutral-500"
            >
              <span>Admin Order Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="pt-4 space-y-2">
            <Link
              href="/jersey"
              className="w-full flex items-center justify-center space-x-2 bg-[#111111] text-white py-3 rounded text-xs font-bold uppercase tracking-wider"
            >
              <ShoppingBag className="w-4 h-4 text-[#F3EBDD]" />
              <span>Customize & Order Jersey</span>
            </Link>
            <a
              href={`https://wa.me/${clubConfig.whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded text-xs font-bold tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Coordination</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
