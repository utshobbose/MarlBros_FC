import React from "react";
import Image from "next/image";

interface CrestLogoProps {
  className?: string;
  size?: number;
  variant?: "badge" | "transparent" | "black";
  color?: "cream" | "gold" | "black" | "white";
}

export function CrestLogo({
  className = "",
  size = 48,
  variant = "transparent",
  color = "cream",
}: CrestLogoProps) {
  const src =
    variant === "black" || color === "black"
      ? "/images/marlbros-crest-black.png"
      : variant === "badge"
      ? "/images/marlbros-official-crest.png"
      : "/images/marlbros-crest-transparent.png";

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: size, height: size }}
      title="MarlBros FC Official Crest"
    >
      <Image
        src={src}
        alt="MarlBros FC Official Crest"
        width={size}
        height={size}
        className="object-contain w-full h-full"
        priority
      />
    </div>
  );
}
