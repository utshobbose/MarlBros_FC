import React from "react";
import Image from "next/image";

interface CrestLogoProps {
  className?: string;
  size?: number;
  variant?: "vector" | "embroidery" | "badge";
  color?: "cream" | "gold" | "black" | "white";
}

export function CrestLogo({
  className = "",
  size = 48,
  variant = "badge",
  color = "cream",
}: CrestLogoProps) {
  if (variant === "embroidery") {
    return (
      <div
        className={`relative inline-block overflow-hidden rounded-md shadow-md border border-[#C2A267]/30 ${className}`}
        style={{ width: size, height: size * 0.95 }}
      >
        <Image
          src="/images/marlbros-crest-patch.jpg"
          alt="MarlBros FC Embroidered Crest"
          fill
          className="object-cover"
        />
      </div>
    );
  }

  // Pure SVG vector version matching the jersey embroidery monogram (Crown + interlocking MB)
  const strokeColor =
    color === "cream"
      ? "#F3EBDD"
      : color === "gold"
      ? "#C2A267"
      : color === "black"
      ? "#111111"
      : "#FFFFFF";

  const fillColor = strokeColor;

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      title="MarlBros FC Crest"
    >
      <svg
        viewBox="0 0 120 130"
        width={size}
        height={size * 1.08}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crown at the top */}
        <g className="crown">
          {/* Crown Base */}
          <path
            d="M32 30 C45 34 75 34 88 30 L86 34 C75 38 45 38 34 34 Z"
            fill={fillColor}
          />
          {/* Crown Jewels / base band */}
          <ellipse cx="45" cy="33" rx="1.5" ry="1" fill="#70111A" />
          <ellipse cx="60" cy="34" rx="2" ry="1.2" fill="#70111A" />
          <ellipse cx="75" cy="33" rx="1.5" ry="1" fill="#70111A" />

          {/* Crown Spikes & Finials */}
          {/* Center Peak */}
          <path
            d="M57 30 L60 12 L63 30 Z"
            fill={fillColor}
          />
          <circle cx="60" cy="10" r="2.5" fill={fillColor} />
          <line x1="60" y1="6" x2="60" y2="12" stroke={fillColor} strokeWidth="1.2" />
          <line x1="57.5" y1="8.5" x2="62.5" y2="8.5" stroke={fillColor} strokeWidth="1.2" />

          {/* Mid Left Peak */}
          <path d="M42 31 L40 18 L48 28 Z" fill={fillColor} />
          <circle cx="40" cy="16.5" r="2" fill={fillColor} />

          {/* Mid Right Peak */}
          <path d="M78 31 L80 18 L72 28 Z" fill={fillColor} />
          <circle cx="80" cy="16.5" r="2" fill={fillColor} />

          {/* Outer Left Peak */}
          <path d="M32 30 L26 21 L35 27 Z" fill={fillColor} />
          <circle cx="25" cy="20" r="1.8" fill={fillColor} />

          {/* Outer Right Peak */}
          <path d="M88 30 L94 21 L85 27 Z" fill={fillColor} />
          <circle cx="95" cy="20" r="1.8" fill={fillColor} />
        </g>

        {/* Interlocking Monogram: M and B */}
        <g className="monogram">
          {/* Letter M - Main bold serif silhouette */}
          {/* Left vertical stem of M */}
          <path
            d="M 28 44 L 40 44 L 40 48 L 36 48 L 36 94 L 40 94 L 40 98 L 26 98 L 26 94 L 30 94 L 30 48 L 28 48 Z"
            fill={fillColor}
          />

          {/* Right vertical stem of M */}
          <path
            d="M 80 44 L 92 44 L 92 48 L 90 48 L 90 94 L 94 94 L 94 98 L 80 98 L 80 94 L 84 94 L 84 48 L 80 48 Z"
            fill={fillColor}
          />

          {/* Diagonal V of M */}
          <path
            d="M 33 46 L 60 82 L 87 46 L 79 46 L 60 71 L 41 46 Z"
            fill={fillColor}
          />

          {/* Letter B - Interlocking through M with elegant serifs & loops */}
          {/* Central spine of B */}
          <path
            d="M 52 38 L 68 38 C 82 38 88 47 88 56 C 88 63 82 68 74 69 C 84 71 90 77 90 87 C 90 98 81 106 66 106 L 52 106 Z"
            fill="none"
            stroke={fillColor}
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Inner cutout bars for B */}
          <line x1="56" y1="69" x2="74" y2="69" stroke={fillColor} strokeWidth="4" />

          {/* Decorative flourish spurs & fleur bracket at base */}
          <path
            d="M 44 114 C 54 118 66 118 76 114 C 70 120 50 120 44 114 Z"
            fill={fillColor}
          />
          <circle cx="60" cy="118" r="2.5" fill={fillColor} />
        </g>
      </svg>
    </div>
  );
}
