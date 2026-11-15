import React from "react";
import Link from "next/link";
import Image from "next/image";

interface MapLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const MapLogo: React.FC<MapLogoProps> = ({
  variant = "light",
  size = "md",
  className = "",
}) => {
  const isDark = variant === "dark";

  // Dimension scaling based on 2.45:1 aspect ratio of the real cropped logo
  const height = size === "sm" ? 40 : size === "lg" ? 60 : 48;
  const width = Math.round(height * 2.45);

  return (
    <Link
      href="/"
      aria-label="MAP International Power - Home"
      className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary transition-transform hover:opacity-95 ${
        isDark ? "bg-white px-3.5 py-2 shadow-sm border border-slate-200/60" : ""
      } ${className}`}
    >
      <div className="relative flex items-center">
        <Image
          src="/logo-cropped.png"
          alt="MAP International Power - Clean Energy | Brighter Future"
          width={width}
          height={height}
          priority
          className="object-contain select-none"
          style={{ height: `${height}px`, width: "auto" }}
        />
      </div>
    </Link>
  );
};
