import React from "react";
import Image from "next/image";

interface VisualCardImageProps {
  type: "panel" | "inverter" | "battery" | "pump" | "mounting" | "industrial" | "residential" | "commercial";
  src?: string;
  alt: string;
  className?: string;
  badge?: string;
}

export const VisualCardImage: React.FC<VisualCardImageProps> = ({
  type,
  src,
  alt,
  className = "h-48",
  badge,
}) => {
  return (
    <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[#071E3D] via-[#0A3366] to-[#0D7A3E] flex items-center justify-center group ${className}`}>
      {/* If a real photo exists, render Next.js Image with smooth hover zoom */}
      {src ? (
        <div className="relative w-full h-full bg-slate-900">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle gradient vignette for contrast and polish */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </div>
      ) : (
        /* High-Fidelity Vector Solar Schematics as robust foundational backdrop */
        <svg
          viewBox="0 0 400 240"
          className="absolute inset-0 w-full h-full object-cover opacity-85 select-none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id="goldSun" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF275" />
              <stop offset="100%" stopColor="#F4C400" />
            </linearGradient>
          </defs>

          {/* Ambient Grid Background */}
          <pattern id="bgGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#bgGrid)" />

          {/* Sun Glow */}
          <circle cx="320" cy="50" r="45" fill="url(#goldSun)" fillOpacity="0.8" />
          <circle cx="320" cy="50" r="65" fill="#F4C400" fillOpacity="0.15" />

          {/* Dynamic Schematic per category */}
          {type === "panel" && (
            <g transform="translate(60, 40)">
              {/* Tilted Solar Panel Array */}
              <polygon points="40,140 180,140 230,50 90,50" fill="url(#panelGrad)" stroke="#60A5FA" strokeWidth="2.5" />
              {/* Cell dividers */}
              <line x1="85" y1="140" x2="135" y2="50" stroke="#93C5FD" strokeWidth="1" />
              <line x1="135" y1="140" x2="185" y2="50" stroke="#93C5FD" strokeWidth="1" />
              <line x1="60" y1="100" x2="205" y2="100" stroke="#93C5FD" strokeWidth="1" />
              {/* Supporting Aluminum legs */}
              <line x1="90" y1="140" x2="90" y2="160" stroke="#CBD5E1" strokeWidth="4" />
              <line x1="180" y1="140" x2="180" y2="160" stroke="#CBD5E1" strokeWidth="4" />
              <line x1="135" y1="50" x2="135" y2="160" stroke="#CBD5E1" strokeWidth="3" />
            </g>
          )}

          {type === "inverter" && (
            <g transform="translate(110, 40)">
              <rect x="30" y="20" width="120" height="130" rx="12" fill="#FFFFFF" stroke="#0D7A3E" strokeWidth="3" />
              <rect x="45" y="35" width="90" height="40" rx="6" fill="#062E1B" />
              <text x="90" y="58" textAnchor="middle" fill="#4ADE80" fontSize="12" fontWeight="bold">98.6% EFF</text>
              <circle cx="65" cy="105" r="14" fill="#EAF5EE" stroke="#0D7A3E" strokeWidth="1.5" />
              <text x="65" y="110" textAnchor="middle" fill="#0D7A3E" fontSize="11" fontWeight="bold">DC</text>
              <circle cx="115" cy="105" r="14" fill="#EDF7EF" stroke="#16A34A" strokeWidth="1.5" />
              <text x="115" y="110" textAnchor="middle" fill="#16A34A" fontSize="11" fontWeight="bold">AC</text>
              <path d="M 80 105 L 100 105" stroke="#F4C400" strokeWidth="3" />
            </g>
          )}

          {type === "battery" && (
            <g transform="translate(100, 35)">
              <rect x="20" y="20" width="140" height="135" rx="8" fill="#062E1B" stroke="#16A34A" strokeWidth="3" />
              <rect x="35" y="35" width="110" height="28" rx="4" fill="#1E293B" stroke="#334155" />
              <circle cx="50" cy="49" r="4" fill="#22C55E" />
              <text x="90" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">LiFePO4 51.2V</text>
              {/* Battery Level Indicators */}
              <rect x="35" y="75" width="22" height="60" rx="3" fill="#168A3B" />
              <rect x="65" y="75" width="22" height="60" rx="3" fill="#168A3B" />
              <rect x="95" y="75" width="22" height="60" rx="3" fill="#168A3B" />
              <rect x="123" y="75" width="22" height="60" rx="3" fill="#168A3B" />
            </g>
          )}

          {type === "pump" && (
            <g transform="translate(100, 30)">
              {/* Submersible stainless steel cylinder */}
              <rect x="70" y="20" width="45" height="130" rx="6" fill="#E2E8F0" stroke="#0284C7" strokeWidth="2.5" />
              <circle cx="92" cy="40" r="12" fill="#0284C7" />
              <path d="M 85 40 Q 92 32 100 40 Q 92 48 85 40" fill="#FFFFFF" />
              <line x1="70" y1="75" x2="115" y2="75" stroke="#94A3B8" strokeWidth="2" />
              <line x1="70" y1="105" x2="115" y2="105" stroke="#94A3B8" strokeWidth="2" />
              {/* Water waves */}
              <path d="M 20 130 Q 50 115 80 130 T 140 130 T 200 130" stroke="#38BDF8" strokeWidth="3" fill="none" />
              <path d="M 10 145 Q 40 130 70 145 T 130 145 T 190 145" stroke="#38BDF8" strokeWidth="3" fill="none" />
            </g>
          )}

          {(type === "industrial" || type === "commercial" || type === "residential" || type === "mounting") && (
            <g transform="translate(50, 40)">
              {/* Perspective Building Roof with Solar Array */}
              <polygon points="30,140 270,140 230,45 70,45" fill="#1E293B" stroke="#475569" strokeWidth="2" />
              {/* Solar Panels on Roof */}
              <polygon points="50,130 110,130 125,95 70,95" fill="url(#panelGrad)" stroke="#60A5FA" strokeWidth="1.5" />
              <polygon points="120,130 180,130 195,95 140,95" fill="url(#panelGrad)" stroke="#60A5FA" strokeWidth="1.5" />
              <polygon points="190,130 250,130 240,95 195,95" fill="url(#panelGrad)" stroke="#60A5FA" strokeWidth="1.5" />
              {/* Top row */}
              <polygon points="75,90 130,90 145,55 95,55" fill="url(#panelGrad)" stroke="#60A5FA" strokeWidth="1.5" />
              <polygon points="140,90 195,90 205,55 155,55" fill="url(#panelGrad)" stroke="#60A5FA" strokeWidth="1.5" />
            </g>
          )}
        </svg>
      )}

      {/* Badge on Top-Left */}
      {badge && (
        <span className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow z-10 border border-white/20">
          {badge}
        </span>
      )}
    </div>
  );
};
