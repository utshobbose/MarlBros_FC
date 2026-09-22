"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Matches" | "Training" | "Reveal" | "Brotherhood";
  src: string;
  caption?: string;
  date?: string;
}

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none hidden sm:block"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none hidden sm:block"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image Frame */}
      <div className="relative max-w-5xl w-full h-[80vh] flex flex-col items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={currentItem.src}
            alt={currentItem.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption Bar */}
        <div className="w-full bg-[#111111]/90 border-t border-neutral-800 p-4 mt-2 rounded-b-lg flex items-center justify-between text-white">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#C2A267]">
                {currentItem.category}
              </span>
              <span className="text-neutral-500">·</span>
              <span className="text-xs text-neutral-400">{currentItem.date}</span>
            </div>
            <h3 className="font-serif text-base font-bold tracking-tight text-white mt-0.5">
              {currentItem.title}
            </h3>
            {currentItem.caption && (
              <p className="text-xs text-neutral-400 mt-0.5">{currentItem.caption}</p>
            )}
          </div>

          <div className="text-xs font-mono text-neutral-500">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
