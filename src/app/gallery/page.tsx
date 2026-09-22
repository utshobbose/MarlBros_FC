"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lightbox, GalleryItem } from "@/components/lightbox";
import { Camera, Filter, ZoomIn } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ["All", "Reveal", "Matches", "Training", "Brotherhood"];

  const allGalleryItems: GalleryItem[] = [
    {
      id: "g-1",
      title: "Batch #01 Official Kit Reveal: Front & Back",
      category: "Reveal",
      src: "/images/jersey-showcase.jpg",
      caption: "The complete 2026 kit layout with embroidered monogram crest and polo collar.",
      date: "Sept 2026",
    },
    {
      id: "g-2",
      title: "Embroidered Monogram Crest Closeup",
      category: "Reveal",
      src: "/images/marlbros-crest-patch.jpg",
      caption: "High-density metallic gold & cream threading on rich crimson jacquard.",
      date: "Sept 2026",
    },
    {
      id: "g-3",
      title: "Tailored Vintage Polo Collar & Throat Inset",
      category: "Reveal",
      src: "/images/collar-detail.jpg",
      caption: "Classic collar with contrasting internal tri-stripe accent.",
      date: "Sept 2026",
    },
    {
      id: "g-4",
      title: "The Founding Seven: Post-Match Brotherhood",
      category: "Brotherhood",
      src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1000&q=80",
      caption: "Our inaugural team squad after the founding derby fixture.",
      date: "Oct 2023",
    },
    {
      id: "g-5",
      title: "Night Lights Tactical Training Drills",
      category: "Training",
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1000&q=80",
      caption: "Fast-transition passing drills and small-sided conditioning.",
      date: "Aug 2026",
    },
    {
      id: "g-6",
      title: "Championship Derby Final: Match Action",
      category: "Matches",
      src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80",
      caption: "Contesting a corner kick in our 3-1 victory against Victoria United.",
      date: "July 2026",
    },
    {
      id: "g-7",
      title: "Goalkeeper Reflex Training & Shot Stopping",
      category: "Training",
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80",
      caption: "Tanvir Ahmed undergoing specialized penalty box distribution training.",
      date: "Aug 2026",
    },
    {
      id: "g-8",
      title: "Starting XI Pre-Kickoff Huddle",
      category: "Matches",
      src: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=1000&q=80",
      caption: "Captain Zubair Hossain leading the pre-match chant before kick-off.",
      date: "June 2026",
    },
    {
      id: "g-9",
      title: "Weekend Team Barbecue & Tactical Review",
      category: "Brotherhood",
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80",
      caption: "Celebrating a milestone victory with all 30 squad members and supporters.",
      date: "May 2026",
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
              High-resolution dispatches from the pitch, training sessions, kit reveals, and club brotherhood moments.
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
