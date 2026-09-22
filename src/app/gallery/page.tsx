"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lightbox, GalleryItem } from "@/components/lightbox";
import { Camera, Filter, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Brotherhood", "Kit Reveal", "Garment Details"];

  // 100% Authentic MarlBros FC imagery — Zero generic stock photos!
  const allGalleryItems: GalleryItem[] = [
    {
      id: "g-1",
      title: "The MarlBros FC Squad on Turf",
      category: "Brotherhood",
      src: "/images/team-squad.jpg",
      caption: "All 30 brothers united under the night floodlights at Victoria Turf Arena.",
      date: "2026",
    },
    {
      id: "g-2",
      title: "Batch #01 Official Kit Reveal: Complete Layout",
      category: "Kit Reveal",
      src: "/images/jersey-showcase.jpg",
      caption: "The complete 2026 crimson and vintage cream matchday kit showcase.",
      date: "Sept 2026",
    },
    {
      id: "g-3",
      title: "Authentic Heraldic Embroidered Crest",
      category: "Garment Details",
      src: "/images/marlbros-crest-patch.jpg",
      caption: "High-density metallic gold & cream threading on rich crimson jacquard.",
      date: "Sept 2026",
    },
    {
      id: "g-4",
      title: "Tailored Vintage Polo Collar & Inset",
      category: "Garment Details",
      src: "/images/collar-detail.jpg",
      caption: "Classic collar with contrasting internal tri-stripe accent and throat inset.",
      date: "Sept 2026",
    },
    {
      id: "g-5",
      title: "Home Jersey: Front Chest & Shoulder Stripes",
      category: "Kit Reveal",
      src: "/images/jersey-front.jpg",
      caption: "Raglan shoulder racing stripes, curved breathable side panels, and chest branding.",
      date: "Sept 2026",
    },
    {
      id: "g-6",
      title: "Home Jersey: Player Custom Name & Collegiate Number",
      category: "Kit Reveal",
      src: "/images/jersey-back.jpg",
      caption: "Collegiate double-stroke athletic back numbers and arched player lettering.",
      date: "Sept 2026",
    },
    {
      id: "g-7",
      title: "Official MarlBros FC Crest Standard",
      category: "Garment Details",
      src: "/images/marlbros-official-crest.png",
      caption: "The royal crown with center fleur-de-lis, acanthus leaves, and intertwined MB monogram.",
      date: "Official Standard",
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? allGalleryItems
      : allGalleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="border-b border-editorial-border py-14 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="editorial-kicker text-[#70111A]">ARCHIVE & MEDIA</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111]">
              The MarlBros Photographic Ledger.
            </h1>
            <p className="text-base text-neutral-600 font-light">
              High-resolution dispatches from the pitch, official kit reveals, heraldic crest embroidery, and team squad moments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#111111] text-white shadow-sm"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] rounded overflow-hidden bg-neutral-900 border border-editorial-border cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Card Meta */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center space-x-2 text-[10px] uppercase font-bold tracking-wider text-[#C2A267]">
                  <span>{item.category}</span>
                  <span>·</span>
                  <span className="text-neutral-400">{item.date}</span>
                </div>
                <h3 className="font-serif font-bold text-base mt-0.5 group-hover:underline">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Viewer */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % filteredItems.length : null
          )
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null
              ? (prev - 1 + filteredItems.length) % filteredItems.length
              : null
          )
        }
      />
    </div>
  );
}
