"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JerseyPreview } from "@/components/jersey-preview";
import { CrestLogo } from "@/components/crest-logo";
import { clubConfig, formatBDT } from "@/lib/config";
import { JerseySize } from "@/types/order";
import {
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  Maximize2,
  Clock,
} from "lucide-react";

export default function JerseyShopPage() {
  const router = useRouter();

  // Customizer state
  const [jerseyName, setJerseyName] = useState("MARLBROS");
  const [jerseyNumber, setJerseyNumber] = useState("10");
  const [selectedSize, setSelectedSize] = useState<JerseySize>("L");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"overview" | "specs" | "sizing">("overview");

  const sizes: JerseySize[] = ["S", "M", "L", "XL", "XXL"];

  const handleProceedToOrder = () => {
    // Store customization parameters in query parameters or session
    const query = new URLSearchParams({
      size: selectedSize,
      name: jerseyName,
      number: jerseyNumber,
      quantity: quantity.toString(),
    });
    router.push(`/order?${query.toString()}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="border-b border-editorial-border py-10 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="editorial-kicker text-[#70111A]">OFFICIAL MERCHANDISE</span>
                <span className="text-neutral-400">·</span>
                <span className="text-xs font-mono uppercase bg-neutral-200 px-2 py-0.5 rounded text-neutral-800 font-bold">
                  Phase 1: Internal Run
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-[#111111]">
                2026 Batch #01 Player Jersey
              </h1>
            </div>

            <div className="flex items-center space-x-4 bg-white p-3 rounded-lg border border-neutral-200 shadow-sm">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                  Club Allocation Price
                </span>
                <span className="font-mono text-2xl font-black text-[#70111A]">
                  {formatBDT(clubConfig.jerseyPrice)}
                </span>
              </div>
              <span className="text-neutral-300">|</span>
              <div className="text-xs text-neutral-600 font-medium">
                <span className="font-bold text-emerald-600">15 Units</span>
                <br />
                Production Batch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product / Customizer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (6 cols): The Interactive Jersey Simulator */}
          <div className="lg:col-span-6 sticky top-28 space-y-6">
            <JerseyPreview
              jerseyName={jerseyName}
              jerseyNumber={jerseyNumber}
              size={selectedSize}
              defaultView="back"
              showControls={true}
            />

            {/* Thumbnail closeups from the jersey garment */}
            <div className="grid grid-cols-4 gap-3 pt-2">
              <div className="relative aspect-square rounded border border-neutral-200 overflow-hidden bg-neutral-100 group">
                <Image
                  src="/images/marlbros-crest-patch.jpg"
                  alt="Embroidered Crest"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] font-bold uppercase text-white bg-black/70 py-0.5 text-center rounded truncate">
                  Crest
                </span>
              </div>

              <div className="relative aspect-square rounded border border-neutral-200 overflow-hidden bg-neutral-100 group">
                <Image
                  src="/images/collar-detail.jpg"
                  alt="Collar Detail"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] font-bold uppercase text-white bg-black/70 py-0.5 text-center rounded truncate">
                  Collar
                </span>
              </div>

              <div className="relative aspect-square rounded border border-neutral-200 overflow-hidden bg-neutral-100 group">
                <Image
                  src="/images/jersey-front.jpg"
                  alt="Front View"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] font-bold uppercase text-white bg-black/70 py-0.5 text-center rounded truncate">
                  Front
                </span>
              </div>

              <div className="relative aspect-square rounded border border-neutral-200 overflow-hidden bg-neutral-100 group">
                <Image
                  src="/images/jersey-back.jpg"
                  alt="Back View"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <span className="absolute bottom-1 inset-x-1 text-[9px] font-bold uppercase text-white bg-black/70 py-0.5 text-center rounded truncate">
                  Back
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Customization Controls & Specifications */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-b border-editorial-border pb-6 space-y-3">
              <span className="editorial-kicker text-neutral-400">PRODUCT SPECIFICATION</span>
              <h2 className="font-serif text-3xl font-bold text-[#111111]">
                Bespoke Crimson & Vintage Cream Match Kit
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                Tailored for the 30-member MarlBros FC collective. Produced with breathable micro-mesh side ventilation, double shoulder racing stripes, and high-tensile heat-pressed lettering.
              </p>
            </div>

            {/* LIVE CUSTOMIZATION INPUTS */}
            <div className="p-6 bg-neutral-50 rounded-xl border border-editorial-border space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#70111A]" />
                  <span>Configure Your Player Kit</span>
                </span>
                <span className="text-[11px] text-neutral-500 font-mono">
                  Updates Live On Canvas
                </span>
              </div>

              {/* 1. Name on Jersey */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Jersey Name (Back)
                  </label>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {jerseyName.length}/12 chars
                  </span>
                </div>
                <input
                  type="text"
                  maxLength={12}
                  value={jerseyName}
                  onChange={(e) => setJerseyName(e.target.value.toUpperCase().slice(0, 12))}
                  placeholder="e.g. TANVIR"
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-md font-serif font-bold text-base uppercase tracking-wider text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#70111A]"
                />
                <p className="text-[11px] text-neutral-500 mt-1">
                  Arched classic serif typography across the upper shoulder blades.
                </p>
              </div>

              {/* 2. Number on Jersey */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Jersey Number (0-99)
                  </label>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Double-stroke athletic
                  </span>
                </div>
                <input
                  type="number"
                  min={0}
                  max={99}
                  value={jerseyNumber}
                  onChange={(e) => {
                    const val = e.target.value;
                    setJerseyNumber(val === "" ? "" : Math.min(99, Math.max(0, parseInt(val, 10))).toString());
                  }}
                  placeholder="10"
                  className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-md font-mono font-bold text-base text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#70111A]"
                />
              </div>

              {/* 3. Size Picker */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                    Garment Size
                  </label>
                  <span className="text-[11px] text-neutral-500">
                    Player Fit (Standard UK/Asian)
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2.5">
                  {sizes.map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`py-3 text-xs font-bold rounded-md border transition-all ${
                        selectedSize === sz
                          ? "bg-[#111111] text-white border-black shadow"
                          : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Quantity */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Quantity
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded border border-neutral-300 bg-white font-bold text-sm hover:bg-neutral-100"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-mono font-bold text-sm">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(15, quantity + 1))}
                    className="w-8 h-8 rounded border border-neutral-300 bg-white font-bold text-sm hover:bg-neutral-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Total & Submit Button */}
            <div className="p-6 bg-[#FAF6EE] rounded-xl border border-[#EDE3D2] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-600 block">Total Order Value:</span>
                  <span className="font-mono text-3xl font-black text-[#111111]">
                    {formatBDT(quantity * clubConfig.jerseyPrice)}
                  </span>
                </div>
                <div className="text-right text-xs text-neutral-500">
                  <span>Payment Method:</span>
                  <span className="font-bold text-[#111111] block">bKash Send Money</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleProceedToOrder}
                className="w-full flex items-center justify-center space-x-3 bg-[#111111] hover:bg-black text-white py-4 px-6 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <ShoppingBag className="w-5 h-5 text-[#F3EBDD]" />
                <span>Submit Order ({quantity} Unit{quantity > 1 ? "s" : ""})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-neutral-500">
                Proceeding will open the member checkout sheet where your custom specifications will be pre-filled.
              </p>
            </div>

            {/* Sizing Chart & Fabric Specs Tabs */}
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <div className="flex border-b border-neutral-200 bg-neutral-50">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === "overview" ? "bg-white text-black border-b-2 border-black" : "text-neutral-500"
                  }`}
                >
                  Highlights
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("sizing")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === "sizing" ? "bg-white text-black border-b-2 border-black" : "text-neutral-500"
                  }`}
                >
                  Size Chart
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("specs")}
                  className={`flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    activeTab === "specs" ? "bg-white text-black border-b-2 border-black" : "text-neutral-500"
                  }`}
                >
                  Fabric & Care
                </button>
              </div>

              <div className="p-4 text-xs text-neutral-700">
                {activeTab === "overview" && (
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Embroidered crown & monogram crest on chest.</li>
                    <li>Twin vintage ivory shoulder racing stripes.</li>
                    <li>Curved breathable mesh side ventilation inserts.</li>
                    <li>Tailored polo collar with V-neck placket.</li>
                  </ul>
                )}

                {activeTab === "sizing" && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-center border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-200 font-bold text-[11px] text-neutral-500">
                          <th className="py-1">Size</th>
                          <th className="py-1">Chest (in)</th>
                          <th className="py-1">Length (in)</th>
                          <th className="py-1">Shoulder (in)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100 font-mono">
                        <tr><td className="py-1.5 font-bold">S</td><td>38"</td><td>27"</td><td>16.5"</td></tr>
                        <tr><td className="py-1.5 font-bold">M</td><td>40"</td><td>28"</td><td>17.5"</td></tr>
                        <tr><td className="py-1.5 font-bold">L</td><td>42"</td><td>29"</td><td>18.5"</td></tr>
                        <tr><td className="py-1.5 font-bold">XL</td><td>44"</td><td>30"</td><td>19.5"</td></tr>
                        <tr><td className="py-1.5 font-bold">XXL</td><td>46"</td><td>31"</td><td>20.5"</td></tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {activeTab === "specs" && (
                  <div className="space-y-2">
                    <p><strong>Material:</strong> 100% High-Performance Polyester Interlock with Jacquard weave.</p>
                    <p><strong>Wash Care:</strong> Cold machine wash inside-out; do not iron directly over the print or embroidered crest.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
