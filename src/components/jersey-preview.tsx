"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CrestLogo } from "./crest-logo";
import { Eye, RotateCw, Sparkles, CheckCircle2 } from "lucide-react";

interface JerseyPreviewProps {
  jerseyName?: string;
  jerseyNumber?: number | string;
  size?: string;
  defaultView?: "front" | "back";
  showControls?: boolean;
}

export function JerseyPreview({
  jerseyName = "NAME",
  jerseyNumber = "10",
  size = "L",
  defaultView = "back",
  showControls = true,
}: JerseyPreviewProps) {
  const [view, setView] = useState<"front" | "back">(defaultView);
  const [mode, setMode] = useState<"custom" | "photo">("custom");

  const displayName = (jerseyName.trim() || "NAME").toUpperCase().slice(0, 12);
  const displayNumber = jerseyNumber.toString().trim() === "" ? "10" : jerseyNumber;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Control Switchers */}
      {showControls && (
        <div className="flex flex-wrap items-center justify-between w-full max-w-md mb-4 px-2 gap-2">
          {/* Front / Back Toggle */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-full border border-neutral-200">
            <button
              type="button"
              onClick={() => setView("front")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                view === "front"
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Front View
            </button>
            <button
              type="button"
              onClick={() => setView("back")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                view === "back"
                  ? "bg-[#111111] text-white shadow-sm"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Back View (Custom)
            </button>
          </div>

          {/* Custom Simulation vs Official Photo */}
          <div className="inline-flex p-1 bg-neutral-100 rounded-full border border-neutral-200">
            <button
              type="button"
              onClick={() => setMode("custom")}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                mode === "custom"
                  ? "bg-white text-black shadow-sm font-bold"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Live Simulator
            </button>
            <button
              type="button"
              onClick={() => setMode("photo")}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                mode === "photo"
                  ? "bg-white text-black shadow-sm font-bold"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              Official Photo
            </button>
          </div>
        </div>
      )}

      {/* Jersey Canvas Stage */}
      <div className="relative w-full max-w-[440px] aspect-[4/5] bg-gradient-to-b from-neutral-900 via-[#180305] to-[#2B0609] rounded-xl shadow-2xl p-6 flex items-center justify-center overflow-hidden border border-[#3E0A0F]/60">
        {/* Subtle studio spotlight background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(180,30,45,0.22)_0%,transparent_70%)] pointer-events-none" />

        {/* MODE 1: Official Photos Mode */}
        {mode === "photo" ? (
          <div className="relative w-full h-full flex flex-col items-center justify-center animate-in fade-in duration-300">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <Image
                src={view === "front" ? "/images/jersey-front.jpg" : "/images/jersey-back.jpg"}
                alt={`MarlBros FC Jersey ${view}`}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-2 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] text-neutral-300 font-mono tracking-wider uppercase">
              Official 2026 Batch #01 Sample ({view})
            </div>
          </div>
        ) : (
          /* MODE 2: SVG/Canvas Interactive Customizer with Realtime Name & Number */
          <div className="relative w-full h-full flex items-center justify-center animate-in fade-in duration-200">
            <svg
              viewBox="0 0 400 460"
              className="w-full h-full drop-shadow-2xl select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Fabric gradient: Rich crimson/maroon */}
                <linearGradient id="maroonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7E1520" />
                  <stop offset="50%" stopColor="#6C0F19" />
                  <stop offset="100%" stopColor="#550A12" />
                </linearGradient>

                <linearGradient id="creamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FAF6EE" />
                  <stop offset="100%" stopColor="#EDE3D2" />
                </linearGradient>

                {/* Diagonal micro-weave pattern */}
                <pattern id="jerseyWeave" width="6" height="6" patternUnits="userSpaceOnUse">
                  <path d="M0 6 L6 0" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                </pattern>
              </defs>

              {/* Base Jersey Body Silhouette */}
              <g id="jersey-body">
                {/* Main Torso & Sleeves Path */}
                <path
                  d="M 120 40 
                     L 50 110 
                     L 15 160 
                     L 55 188 
                     L 85 145 
                     L 85 410 
                     C 85 425 315 425 315 410 
                     L 315 145 
                     L 345 188 
                     L 385 160 
                     L 350 110 
                     L 280 40 
                     C 250 55 150 55 120 40 Z"
                  fill="url(#maroonGradient)"
                  stroke="#42080E"
                  strokeWidth="2"
                />

                {/* Fabric weave overlay */}
                <path
                  d="M 120 40 L 50 110 L 15 160 L 55 188 L 85 145 L 85 410 C 85 425 315 425 315 410 L 315 145 L 345 188 L 385 160 L 350 110 L 280 40 C 250 55 150 55 120 40 Z"
                  fill="url(#jerseyWeave)"
                />

                {/* Shoulder Stripes - Left (Wearer's Right) */}
                <path
                  d="M 115 50 L 38 128 L 47 136 L 123 58 Z"
                  fill="#EDE3D2"
                />
                <path
                  d="M 108 55 L 28 135 L 36 142 L 115 63 Z"
                  fill="#EDE3D2"
                />

                {/* Shoulder Stripes - Right (Wearer's Left) */}
                <path
                  d="M 285 50 L 362 128 L 353 136 L 277 58 Z"
                  fill="#EDE3D2"
                />
                <path
                  d="M 292 55 L 372 135 L 364 142 L 285 63 Z"
                  fill="#EDE3D2"
                />

                {/* Sleeve Cuffs (Cream) */}
                <polygon points="15,160 55,188 62,176 22,148" fill="#FAF6EE" stroke="#D8CEBD" strokeWidth="1" />
                <polygon points="385,160 345,188 338,176 378,148" fill="#FAF6EE" stroke="#D8CEBD" strokeWidth="1" />

                {/* Breathable Side Panels (Cream curved panels with piping) */}
                {/* Left side panel */}
                <path
                  d="M 85 240 C 105 280 108 340 85 410 L 85 240 Z"
                  fill="#EDE3D2"
                  opacity="0.95"
                />
                <path
                  d="M 85 240 C 105 280 108 340 85 410"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />

                {/* Right side panel */}
                <path
                  d="M 315 240 C 295 280 292 340 315 410 L 315 240 Z"
                  fill="#EDE3D2"
                  opacity="0.95"
                />
                <path
                  d="M 315 240 C 295 280 292 340 315 410"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />

                {/* Collar */}
                {view === "front" ? (
                  <g id="collar-front">
                    {/* V-neck throat inset */}
                    <polygon points="160,42 240,42 200,105" fill="#3D060B" />
                    {/* Inner neck collar tag */}
                    <rect x="190" y="44" width="20" height="24" fill="#7E1520" rx="1" />
                    <line x1="195" y1="44" x2="195" y2="68" stroke="#EDE3D2" strokeWidth="2" />
                    <line x1="205" y1="44" x2="205" y2="68" stroke="#EDE3D2" strokeWidth="2" />

                    {/* Classic Ivory Polo Collar Flaps */}
                    {/* Left Collar Leaf */}
                    <polygon
                      points="130,35 190,44 185,96 142,82"
                      fill="url(#creamGradient)"
                      stroke="#CFC4B0"
                      strokeWidth="1.5"
                    />
                    {/* Right Collar Leaf */}
                    <polygon
                      points="270,35 210,44 215,96 258,82"
                      fill="url(#creamGradient)"
                      stroke="#CFC4B0"
                      strokeWidth="1.5"
                    />
                  </g>
                ) : (
                  <g id="collar-back">
                    {/* Back Collar Band */}
                    <path
                      d="M 130 35 C 165 48 235 48 270 35 L 265 52 C 235 62 165 62 135 52 Z"
                      fill="url(#creamGradient)"
                      stroke="#CFC4B0"
                      strokeWidth="1.5"
                    />
                  </g>
                )}
              </g>

              {/* VIEW SPECIFIC GRAPHICS */}
              {view === "front" ? (
                /* FRONT GRAPHICS: Chest Text & Embroidered Crest */
                <g id="front-details">
                  {/* Embroidered Crest on Left Chest (Wearer's Left = Viewer's Right) */}
                  <g transform="translate(246, 96)">
                    <image
                      href="/images/marlbros-crest-transparent.png"
                      x="0"
                      y="0"
                      width="46"
                      height="46"
                    />
                  </g>

                  {/* Chest Brand Typography: "MARLBROS" and "â€” FC â€”" */}
                  <text
                    x="200"
                    y="180"
                    textAnchor="middle"
                    fill="#EDE3D2"
                    fontSize="26"
                    fontFamily="Playfair Display, Georgia, serif"
                    fontWeight="800"
                    letterSpacing="3"
                  >
                    MARLBROS
                  </text>

                  {/* Horizontal Bar with FC */}
                  <g transform="translate(0, 192)">
                    <line x1="125" y1="0" x2="175" y2="0" stroke="#EDE3D2" strokeWidth="2.5" />
                    <text
                      x="200"
                      y="5"
                      textAnchor="middle"
                      fill="#EDE3D2"
                      fontSize="18"
                      fontFamily="Playfair Display, Georgia, serif"
                      fontWeight="700"
                      letterSpacing="2"
                    >
                      FC
                    </text>
                    <line x1="225" y1="0" x2="275" y2="0" stroke="#EDE3D2" strokeWidth="2.5" />
                  </g>
                </g>
              ) : (
                /* BACK GRAPHICS: Custom Name & Number */
                <g id="back-details">
                  {/* Custom Name */}
                  <text
                    x="200"
                    y="130"
                    textAnchor="middle"
                    fill="#EDE3D2"
                    fontSize="28"
                    fontFamily="Playfair Display, Georgia, serif"
                    fontWeight="800"
                    letterSpacing="2"
                    style={{ textTransform: "uppercase" }}
                  >
                    {displayName}
                  </text>

                  {/* Custom Number (Athletic Double-Bordered Style) */}
                  <g transform="translate(200, 260)">
                    {/* Outer glow/offset border */}
                    <text
                      x="0"
                      y="40"
                      textAnchor="middle"
                      fill="#EDE3D2"
                      stroke="#42080E"
                      strokeWidth="12"
                      strokeLinejoin="round"
                      fontSize="145"
                      fontFamily="Oswald, Impact, Arial Black, sans-serif"
                      fontWeight="900"
                      className="jersey-number"
                    >
                      {displayNumber}
                    </text>
                    {/* Inner body */}
                    <text
                      x="0"
                      y="40"
                      textAnchor="middle"
                      fill="#FAF6EE"
                      fontSize="145"
                      fontFamily="Oswald, Impact, Arial Black, sans-serif"
                      fontWeight="900"
                      className="jersey-number"
                    >
                      {displayNumber}
                    </text>
                    {/* Secondary hairline stripe inside digits */}
                    <text
                      x="0"
                      y="40"
                      textAnchor="middle"
                      fill="none"
                      stroke="#EDE3D2"
                      strokeWidth="2.5"
                      fontSize="145"
                      fontFamily="Oswald, Impact, Arial Black, sans-serif"
                      fontWeight="900"
                      className="jersey-number"
                    >
                      {displayNumber}
                    </text>
                  </g>
                </g>
              )}
            </svg>

            {/* Floating Live Badge */}
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-400 flex items-center space-x-1.5 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>LIVE PREVIEW</span>
            </div>

            {/* Quick Rotate Button */}
            <button
              type="button"
              onClick={() => setView(view === "front" ? "back" : "front")}
              className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/80 hover:bg-black text-[#EDE3D2] border border-[#C2A267]/30 shadow-lg transition-transform hover:scale-110"
              title="Flip Jersey"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Sizing Indicator Tag */}
      <div className="mt-3 flex items-center space-x-2 text-xs text-neutral-500">
        <span className="font-semibold text-neutral-800">Selected Size:</span>
        <span className="bg-[#111111] text-white px-2 py-0.5 rounded text-[11px] font-mono font-bold">
          {size}
        </span>
        <span>Â·</span>
        <span>Official Player Cut</span>
      </div>
    </div>
  );
}

