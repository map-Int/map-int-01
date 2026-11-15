"use client";

import React, { useState, useId, useRef, useCallback } from "react";
import {
  Sun,
  Zap,
  Cloud,
  CloudSun,
  Compass,
  Sparkles,
  RotateCw,
  Gauge,
  CheckCircle2,
  Home,
  Sliders,
  BatteryCharging,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

export const InteractiveSunSimulator: React.FC = () => {
  const { t, language } = useLanguage();
  const sliderId = useId();
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Time of day in decimal hours (6.0 = 6:00 AM, 12.0 = Noon, 18.0 = 6:00 PM)
  const [timeOfDay, setTimeOfDay] = useState<number>(12);
  const [weather, setWeather] = useState<"clear" | "clouds" | "monsoon">("clear");
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Solar Geometry for Bangladesh (~23.8° N Latitude):
  // Peak solar elevation at noon is ~82° (summer solstice benchmark ~89°, winter ~43°, annual mean ~82°)
  const hourOffset = Math.abs(timeOfDay - 12); // 0 at noon, 6 at dawn/dusk
  const elevationDeg = Math.max(6, Math.round(82 - Math.pow(hourOffset / 6, 1.85) * 76));

  // Sun Normalized Progress: 0.0 (6 AM) to 1.0 (6 PM)
  const sunNorm = (timeOfDay - 6) / 12;

  // ViewBox: 1000 x 480
  // Arc trajectory: from x=90, y=340 up to x=500, y=70 down to x=910, y=340
  const sunX = Math.round(90 + sunNorm * 820);
  const sunY = Math.round(340 - Math.sin(sunNorm * Math.PI) * 270);

  // Weather derate multiplier
  const weatherMult = weather === "clear" ? 1.0 : weather === "clouds" ? 0.75 : 0.35;

  // Solar Irradiance in W/m² (Peak in Bangladesh ~1020 W/m² at noon clear sky)
  const baseIrradiance = Math.round(Math.sin(sunNorm * Math.PI) * 1020);
  const irradiance = Math.max(35, Math.round(baseIrradiance * weatherMult));

  // Power output for standard 10 kWp installed system
  const systemCapacityKwp = 10;
  const systemEfficiency = 0.84; // 16% total BOS / thermal losses
  const currentOutputKw = Math.max(
    0.2,
    (irradiance / 1000) * systemCapacityKwp * systemEfficiency
  ).toFixed(1);

  // Home consumption base (constant 3.2 kW building load)
  const homeLoadKw = 3.2;
  const netExportKw = (Number(currentOutputKw) - homeLoadKw).toFixed(1);
  const isExporting = Number(netExportKw) > 0;

  // Formatted Time Display
  const formattedTime = () => {
    const hours = Math.floor(timeOfDay);
    const minutes = timeOfDay % 1 !== 0 ? "30" : "00";
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  // Sky Gradient definitions based on time of day & weather
  const getSkyGradients = () => {
    if (weather === "monsoon") {
      return {
        top: "#1E293B",
        mid: "#334155",
        horizon: "#475569",
        ambientGlow: "rgba(148, 163, 184, 0.15)",
      };
    }
    // Dawn / Dusk (6 - 7.5 AM or 4.5 - 6 PM)
    if (timeOfDay < 7.5 || timeOfDay > 16.5) {
      return {
        top: "#0A192F",
        mid: "#1E3A8A",
        horizon: "#EA580C",
        ambientGlow: "rgba(249, 115, 22, 0.35)",
      };
    }
    // Morning / Afternoon (7.5 - 10 AM or 2 - 4.5 PM)
    if (timeOfDay < 10 || timeOfDay > 14) {
      return {
        top: "#061A36",
        mid: "#0369A1",
        horizon: "#38BDF8",
        ambientGlow: "rgba(244, 196, 0, 0.28)",
      };
    }
    // Peak Noon (10 AM - 2 PM) — Radiant Solar Sapphire Sky
    return {
      top: "#071E3D",
      mid: "#0284C7",
      horizon: "#7DD3FC",
      ambientGlow: "rgba(254, 240, 138, 0.42)",
    };
  };

  const sky = getSkyGradients();

  // Dragging interaction along the SVG arc
  const handleSvgPointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    setIsDragging(true);
    handlePointerMove(e);
  };

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<SVGSVGElement>) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      // Map relativeX (0.0 to 1.0) to timeOfDay (6 to 18)
      const clamped = Math.max(0, Math.min(1, relativeX));
      const newHour = Math.round((6 + clamped * 12) * 4) / 4;
      setTimeOfDay(newHour);
    },
    []
  );

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#05182E] via-[#072445] to-[#04172B] rounded-3xl border border-blue-800/60 shadow-2xl overflow-hidden text-white">
      {/* =========================================================================
          HUD HEADER: Clean Energy Green + Tech Navy + Solar Gold Synergy
          ========================================================================= */}
      <div className="p-6 sm:p-8 border-b border-blue-900/60 flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
            <span>{t("Interactive Sun Orbit & Net-Metering Simulator", "ইন্টারেক্টিভ সৌর কক্ষপথ ও গ্রিড সিমুলেটর")}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white">
            {t("Experience How Sun Position Powers Bangladesh", "সূর্যের অবস্থান ও তাৎক্ষণিক সৌর উৎপাদন দেখুন")}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t(
              "Drag the sun across Bangladesh's celestial arc or tap presets to see real-time photon harvest, panel generation (kW), and bi-directional utility net-metering in action.",
              "আকাশজুড়ে সূর্যকে টেনে কিংবা আবহাওয়া পরিবর্তন করে দেখুন কীভাবে তাৎক্ষণিক সৌরশক্তি উৎপন্ন হয়ে জাতীয় গ্রিডে রপ্তানি হয়।"
            )}
          </p>
        </div>

        {/* Weather Mode Selector Pills */}
        <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 shrink-0 self-start lg:self-center">
          <button
            type="button"
            onClick={() => setWeather("clear")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              weather === "clear"
                ? "bg-brand-yellow text-brand-navy shadow-lg font-black"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>{t("Clear Sun", "উজ্জ্বল রোদ")}</span>
          </button>
          <button
            type="button"
            onClick={() => setWeather("clouds")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              weather === "clouds"
                ? "bg-white text-slate-900 shadow-lg font-black"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <CloudSun className="w-3.5 h-3.5" />
            <span>{t("Light Clouds", "হালকা মেঘ")}</span>
          </button>
          <button
            type="button"
            onClick={() => setWeather("monsoon")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              weather === "monsoon"
                ? "bg-slate-400 text-slate-950 shadow-lg font-black"
                : "text-slate-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>{t("Monsoon", "বর্ষা")}</span>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* =========================================================================
            SIMULATION STAGE: Masterpiece SVG Architecture + Celestial Solar Orbit
            ========================================================================= */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30 select-none bg-slate-950">
          <svg
            ref={svgRef}
            viewBox="0 0 1000 480"
            className="w-full h-auto block cursor-crosshair touch-none"
            onPointerDown={handleSvgPointerDown}
            onPointerMove={isDragging ? handlePointerMove : undefined}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <defs>
              {/* Dynamic Sky Gradient */}
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={sky.top} />
                <stop offset="55%" stopColor={sky.mid} />
                <stop offset="90%" stopColor={sky.horizon} />
                <stop offset="100%" stopColor="#0D2E1F" />
              </linearGradient>

              {/* Dynamic Radial Sun Aura */}
              <radialGradient id="sunAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF7A1" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.12" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>

              {/* Volumetric Photon Cone Gradient */}
              <linearGradient id="photonFunnel" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.65" />
                <stop offset="40%" stopColor="#FDE047" stopOpacity="0.30" />
                <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
              </linearGradient>

              {/* Photovoltaic Solar Panel Cell Gradient (Crystalline Blue) */}
              <linearGradient id="pvCellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B335E" />
                <stop offset="50%" stopColor="#072242" />
                <stop offset="100%" stopColor="#03152B" />
              </linearGradient>

              {/* Glass Window Reflection Gradient */}
              <linearGradient id="glassReflect" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#0284C7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0C4A6E" stopOpacity="0.6" />
              </linearGradient>

              {/* Inverter Chassis Gradient */}
              <linearGradient id="inverterChassis" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="70%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>

              {/* Soft Drop Shadow for Solar Panels & Architecture */}
              <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.45" />
              </filter>

              {/* Sun Core Glow Filter */}
              <filter id="sunGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. Dynamic Atmosphere Sky Canvas */}
            <rect x="0" y="0" width="1000" height="480" fill="url(#skyGrad)" />

            {/* Subtle Stars at Dawn & Dusk */}
            {(timeOfDay < 7.2 || timeOfDay > 16.8) && (
              <g opacity="0.35">
                <circle cx="150" cy="60" r="1.5" fill="#FFF" />
                <circle cx="280" cy="40" r="1.2" fill="#FFF" />
                <circle cx="420" cy="80" r="1" fill="#FFF" />
                <circle cx="700" cy="50" r="1.5" fill="#FFF" />
                <circle cx="840" cy="70" r="1.2" fill="#FFF" />
                <circle cx="920" cy="110" r="1" fill="#FFF" />
              </g>
            )}

            {/* 2. Celestial Solar Orbit Path (Dashed Arc with Hour Milestones) */}
            <path
              d="M 90 340 Q 500 70 910 340"
              fill="none"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />

            {/* Celestial Hour Milestones */}
            {[
              { h: 6, x: 90, y: 340, label: "6 AM" },
              { h: 8, x: 226, y: 205, label: "8 AM" },
              { h: 10, x: 363, y: 115, label: "10 AM" },
              { h: 12, x: 500, y: 70, label: "12 PM" },
              { h: 14, x: 637, y: 115, label: "2 PM" },
              { h: 16, x: 774, y: 205, label: "4 PM" },
              { h: 18, x: 910, y: 340, label: "6 PM" },
            ].map((pt) => (
              <g key={pt.label} opacity={timeOfDay >= pt.h - 0.75 && timeOfDay <= pt.h + 0.75 ? "1" : "0.55"}>
                <circle cx={pt.x} cy={pt.y} r="3" fill="#FDE047" />
                <text
                  x={pt.x}
                  y={pt.y + 16}
                  textAnchor="middle"
                  fill="#E2E8F0"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  {pt.label}
                </text>
              </g>
            ))}

            {/* 3. Volumetric Photonic Sunbeam Funnel from Sun to Rooftop PV Array */}
            {/* Array bounds: left x=330, right x=670, roof y=250 */}
            <polygon
              points={`${sunX},${sunY} 330,250 670,250`}
              fill="url(#photonFunnel)"
              className="transition-all duration-300 pointer-events-none"
            />

            {/* Triple Dynamic Photon Stream Ray Lasers */}
            <line
              x1={sunX}
              y1={sunY}
              x2="380"
              y2="250"
              stroke="#FDE047"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="animate-power-flow pointer-events-none"
              opacity="0.8"
            />
            <line
              x1={sunX}
              y1={sunY}
              x2="500"
              y2="250"
              stroke="#F59E0B"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              className="animate-power-flow pointer-events-none"
              opacity="0.95"
            />
            <line
              x1={sunX}
              y1={sunY}
              x2="620"
              y2="250"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="animate-power-flow pointer-events-none"
              opacity="0.8"
            />

            {/* 4. Background Horizon Landscape: Clean Energy Silhouettes & Ground */}
            {/* Distant rolling hills & clean wind turbines */}
            <path
              d="M 0 380 Q 200 365 400 380 T 800 375 T 1000 380 L 1000 480 L 0 480 Z"
              fill="#062518"
            />
            {/* Distant Clean Energy Wind Turbines */}
            <g opacity="0.35" transform="translate(140, 310)">
              <line x1="0" y1="0" x2="0" y2="70" stroke="#94A3B8" strokeWidth="2" />
              <circle cx="0" cy="0" r="2.5" fill="#FFF" />
              <line x1="0" y1="0" x2="22" y2="-12" stroke="#CBD5E1" strokeWidth="1.2" />
              <line x1="0" y1="0" x2="-22" y2="-12" stroke="#CBD5E1" strokeWidth="1.2" />
              <line x1="0" y1="0" x2="0" y2="25" stroke="#CBD5E1" strokeWidth="1.2" />
            </g>
            <g opacity="0.25" transform="translate(820, 320)">
              <line x1="0" y1="0" x2="0" y2="60" stroke="#94A3B8" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="2" fill="#FFF" />
              <line x1="0" y1="0" x2="18" y2="-10" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="0" y1="0" x2="-18" y2="-10" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="0" y1="0" x2="0" y2="20" stroke="#CBD5E1" strokeWidth="1" />
            </g>

            {/* Foreground Lush Lawn (Clean Energy Green Ground) */}
            <rect x="0" y="395" width="1000" height="85" fill="#0A3822" />
            <line x1="0" y1="395" x2="1000" y2="395" stroke="#16A34A" strokeWidth="2" opacity="0.6" />

            {/* Landscaped Decorative Bushes around Foundation */}
            <ellipse cx="290" cy="395" rx="35" ry="14" fill="#0D7A3E" />
            <ellipse cx="320" cy="397" rx="25" ry="12" fill="#16A34A" />
            <ellipse cx="680" cy="396" rx="30" ry="13" fill="#0D7A3E" />
            <ellipse cx="710" cy="397" rx="25" ry="11" fill="#16A34A" />

            {/* 5. ARCHITECTURAL BUILDING (Modern Commercial / Villa Facility) */}
            <g transform="translate(300, 240)" filter="url(#shadow)">
              {/* Foundation & Paved Terrace */}
              <rect x="-10" y="150" width="420" height="10" rx="3" fill="#1E293B" />

              {/* Main Building Facade: Architectural Modern Charcoal with Grooves */}
              <rect x="0" y="30" width="400" height="122" rx="4" fill="#0F1F35" stroke="#1E3A5F" strokeWidth="2" />

              {/* Architectural Horizontal Cladding Grooves */}
              <line x1="0" y1="70" x2="400" y2="70" stroke="#1E3A5F" strokeWidth="1" />
              <line x1="0" y1="110" x2="400" y2="110" stroke="#1E3A5F" strokeWidth="1" />

              {/* Concrete Rooftop Parapet Deck */}
              <rect x="-15" y="15" width="430" height="18" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="2" />
              <line x1="-15" y1="30" x2="415" y2="30" stroke="#475569" strokeWidth="2" />

              {/* Parapet Safety Railing */}
              <line x1="-5" y1="2" x2="405" y2="2" stroke="#94A3B8" strokeWidth="2" />
              <line x1="5" y1="2" x2="5" y2="15" stroke="#94A3B8" strokeWidth="2" />
              <line x1="100" y1="2" x2="100" y2="15" stroke="#94A3B8" strokeWidth="2" />
              <line x1="200" y1="2" x2="200" y2="15" stroke="#94A3B8" strokeWidth="2" />
              <line x1="300" y1="2" x2="300" y2="15" stroke="#94A3B8" strokeWidth="2" />
              <line x1="395" y1="2" x2="395" y2="15" stroke="#94A3B8" strokeWidth="2" />

              {/* WINDOW 1 (Left): Illuminated Living Room / Engineering Space */}
              <rect x="25" y="45" width="130" height="90" rx="4" fill="#0A192F" stroke="#38BDF8" strokeWidth="2" />
              {/* Soft Interior Lighting Glow */}
              <rect x="27" y="47" width="126" height="86" rx="3" fill="#FEF08A" opacity={timeOfDay >= 17 || timeOfDay <= 7 ? "0.45" : "0.18"} />
              {/* Glass Diagonal Reflections */}
              <polygon points="35,135 85,45 105,45 55,135" fill="url(#glassReflect)" />
              <polygon points="90,135 130,55 140,55 100,135" fill="url(#glassReflect)" />
              {/* Window Frame Mullions */}
              <line x1="90" y1="45" x2="90" y2="135" stroke="#1E293B" strokeWidth="2" />
              <line x1="25" y1="90" x2="155" y2="90" stroke="#1E293B" strokeWidth="2" />
              {/* Desk & Lamp Silhouette Inside */}
              <circle cx="58" cy="78" r="7" fill="#F59E0B" opacity="0.8" />
              <rect x="42" y="105" width="40" height="25" rx="2" fill="#1E293B" />
              <text x="62" y="70" textAnchor="middle" fill="#E2E8F0" fontSize="10" fontWeight="bold">💡 Lighting</text>

              {/* WINDOW 2 (Right): Modern High-Efficiency Cooling / Load Zone */}
              <rect x="175" y="45" width="130" height="90" rx="4" fill="#0A192F" stroke="#38BDF8" strokeWidth="2" />
              <polygon points="185,135 235,45 255,45 205,135" fill="url(#glassReflect)" />
              <line x1="240" y1="45" x2="240" y2="135" stroke="#1E293B" strokeWidth="2" />
              <line x1="175" y1="90" x2="305" y2="90" stroke="#1E293B" strokeWidth="2" />
              {/* Split AC Unit on Interior Wall */}
              <rect x="200" y="55" width="55" height="16" rx="2" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
              <line x1="205" y1="67" x2="250" y2="67" stroke="#38BDF8" strokeWidth="1.5" />
              <text x="240" y="90" textAnchor="middle" fill="#38BDF8" fontSize="11">❄️ AC 24°C</text>
              <text x="240" y="118" textAnchor="middle" fill="#94A3B8" fontSize="9" fontWeight="bold">{homeLoadKw} kW Active Load</text>

              {/* EXTERIOR WALL BOS HARDWARE: Inverter, LiFePO4 Battery & Net Meter */}
              {/* 1. Smart Hybrid Solar Inverter (Right Exterior Pier) */}
              <g transform="translate(325, 42)">
                {/* Aluminum Inverter Body */}
                <rect x="0" y="0" width="34" height="48" rx="4" fill="url(#inverterChassis)" stroke="#00549A" strokeWidth="1.5" />
                {/* Heat Sink Fins on Top */}
                <line x1="4" y1="-3" x2="30" y2="-3" stroke="#64748B" strokeWidth="2" />
                <line x1="8" y1="-3" x2="8" y2="0" stroke="#64748B" strokeWidth="1.5" />
                <line x1="17" y1="-3" x2="17" y2="0" stroke="#64748B" strokeWidth="1.5" />
                <line x1="26" y1="-3" x2="26" y2="0" stroke="#64748B" strokeWidth="1.5" />
                {/* Digital OLED Status Screen */}
                <rect x="5" y="8" width="24" height="14" rx="2" fill="#0A192F" stroke="#00549A" strokeWidth="1" />
                <text x="17" y="18" textAnchor="middle" fill="#4ADE80" fontSize="7" fontWeight="bold">
                  {currentOutputKw}k
                </text>
                {/* Heartbeat Status LED */}
                <circle cx="17" cy="28" r="2.5" fill="#22C55E" className="animate-pulse" />
                <text x="17" y="42" textAnchor="middle" fill="#00549A" fontSize="6" fontWeight="bold">
                  INVERTER
                </text>
              </g>

              {/* 2. LiFePO4 Energy Storage Battery (Below Inverter) */}
              <g transform="translate(323, 98)">
                <rect x="0" y="0" width="38" height="34" rx="3" fill="#0A1F38" stroke="#16A34A" strokeWidth="1.5" />
                <text x="19" y="10" textAnchor="middle" fill="#FFF" fontSize="6.5" fontWeight="bold">LiFePO4</text>
                {/* 5-Segment State-of-Charge LED Fuel Gauge */}
                <rect x="6" y="15" width="4" height="12" rx="1" fill="#22C55E" />
                <rect x="12" y="15" width="4" height="12" rx="1" fill="#22C55E" />
                <rect x="18" y="15" width="4" height="12" rx="1" fill="#22C55E" />
                <rect x="24" y="15" width="4" height="12" rx="1" fill="#22C55E" />
                <rect x="30" y="15" width="4" height="12" rx="1" fill="#22C55E" />
                <text x="19" y="31" textAnchor="middle" fill="#38BDF8" fontSize="5.5" fontWeight="bold">48V 100%</text>
              </g>

              {/* 3. Bi-Directional Smart Net Meter (Wall Lower Edge) */}
              <g transform="translate(368, 85)">
                {/* Meter Base Box */}
                <rect x="0" y="0" width="26" height="32" rx="3" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.5" />
                {/* Circular Glass Window */}
                <circle cx="13" cy="14" r="9" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" />
                {/* Spinning Disc / Indicator */}
                <line
                  x1="13"
                  y1="8"
                  x2="13"
                  y2="20"
                  stroke={isExporting ? "#16A34A" : "#0284C7"}
                  strokeWidth="2"
                  className={isExporting ? "animate-spin origin-center" : ""}
                />
                <circle cx="13" cy="14" r="3" fill={isExporting ? "#22C55E" : "#38BDF8"} />
                <text x="13" y="29" textAnchor="middle" fill="#FDE047" fontSize="5.5" fontWeight="bold">
                  {isExporting ? "EXPORT" : "IMPORT"}
                </text>
              </g>

              {/* Internal BOS Wiring (Dashed Power Flow from Inverter -> Meter) */}
              <path
                d="M 342 90 L 342 94 L 368 94"
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                className="animate-power-flow"
              />

              {/* 6. HIGH-PRECISION ROOFTOP SOLAR PV ARRAYS (Dual Tier-1 TopCon Strings) */}
              {/* String 1: Left Array (Tilted at 23°) */}
              <g transform="translate(30, -50)">
                {/* Aluminum Support Struts */}
                <line x1="20" y1="18" x2="20" y2="65" stroke="#94A3B8" strokeWidth="3" />
                <line x1="140" y1="18" x2="140" y2="65" stroke="#94A3B8" strokeWidth="3" />
                <line x1="80" y1="18" x2="80" y2="65" stroke="#64748B" strokeWidth="2.5" />
                <polygon points="18,65 24,65 22,68 16,68" fill="#475569" />
                <polygon points="138,65 144,65 142,68 136,68" fill="#475569" />

                {/* Tilted Solar Panel Glass Face */}
                <polygon
                  points="10,58 150,58 165,18 25,18"
                  fill="url(#pvCellGrad)"
                  stroke="#00549A"
                  strokeWidth="2.5"
                />
                {/* High-Reflectivity Glass Sheen */}
                <polygon points="25,18 70,18 45,58 10,58" fill="#38BDF8" opacity="0.18" />

                {/* Half-Cut Cell Dividers & Busbars */}
                <line x1="55" y1="58" x2="70" y2="18" stroke="#38BDF8" strokeWidth="1" opacity="0.75" />
                <line x1="100" y1="58" x2="115" y2="18" stroke="#38BDF8" strokeWidth="1" opacity="0.75" />
                <line x1="17" y1="38" x2="157" y2="38" stroke="#60A5FA" strokeWidth="1" opacity="0.65" />
              </g>

              {/* String 2: Right Array (Tilted at 23°) */}
              <g transform="translate(195, -50)">
                <line x1="20" y1="18" x2="20" y2="65" stroke="#94A3B8" strokeWidth="3" />
                <line x1="140" y1="18" x2="140" y2="65" stroke="#94A3B8" strokeWidth="3" />
                <line x1="80" y1="18" x2="80" y2="65" stroke="#64748B" strokeWidth="2.5" />

                <polygon
                  points="10,58 150,58 165,18 25,18"
                  fill="url(#pvCellGrad)"
                  stroke="#00549A"
                  strokeWidth="2.5"
                />
                <polygon points="25,18 70,18 45,58 10,58" fill="#38BDF8" opacity="0.18" />

                <line x1="55" y1="58" x2="70" y2="18" stroke="#38BDF8" strokeWidth="1" opacity="0.75" />
                <line x1="100" y1="58" x2="115" y2="18" stroke="#38BDF8" strokeWidth="1" opacity="0.75" />
                <line x1="17" y1="38" x2="157" y2="38" stroke="#60A5FA" strokeWidth="1" opacity="0.65" />
              </g>

              {/* Tier-1 TopCon Specs Pill on Parapet */}
              <rect x="120" y="20" width="160" height="15" rx="3" fill="#0A2540" stroke="#0284C7" strokeWidth="1" />
              <text x="200" y="31" textAnchor="middle" fill="#7DD3FC" fontSize="8" fontWeight="bold">
                MAP 10kWp TopCon N-Type Solar Array
              </text>
            </g>

            {/* 7. UTILITY TRANSMISSION INFRASTRUCTURE (Right Side Grid Pole) */}
            <g transform="translate(860, 240)">
              {/* Heavy-Duty Concrete Utility Pole */}
              <line x1="30" y1="20" x2="30" y2="180" stroke="#475569" strokeWidth="7" strokeLinecap="round" />
              {/* Dual Cross-Arms */}
              <line x1="5" y1="35" x2="55" y2="35" stroke="#334155" strokeWidth="4" />
              <line x1="10" y1="65" x2="50" y2="65" stroke="#334155" strokeWidth="3.5" />
              {/* Ceramic Disc Insulators */}
              <circle cx="10" cy="35" r="3.5" fill="#94A3B8" />
              <circle cx="30" cy="35" r="3.5" fill="#94A3B8" />
              <circle cx="50" cy="35" r="3.5" fill="#94A3B8" />
              {/* Pole-Mounted Step-Down Transformer */}
              <rect x="35" y="80" width="18" height="28" rx="3" fill="#334155" stroke="#64748B" strokeWidth="1.5" />
              <line x1="30" y1="90" x2="35" y2="90" stroke="#CBD5E1" strokeWidth="2" />

              {/* Power Lines connecting Building Net-Meter to Utility Grid */}
              <path
                d="M -166 100 Q -60 145 10 35"
                fill="none"
                stroke={isExporting ? "#16A34A" : "#38BDF8"}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-power-flow"
              />

              {/* National Grid Identification Badge */}
              <rect x="-15" y="5" width="90" height="18" rx="4" fill="#071E3D" stroke="#F59E0B" strokeWidth="1.5" />
              <text x="30" y="17" textAnchor="middle" fill="#FDE047" fontSize="8.5" fontWeight="bold">
                BREB / BPDB Grid
              </text>
            </g>

            {/* 8. CELESTIAL SUN ORB: Perfectly aligned inside SVG */}
            {/* Soft Ambient Radial Sun Aura (Moves dynamically with sun) */}
            <circle cx={sunX} cy={sunY} r="95" fill="url(#sunAura)" pointerEvents="none" />

            {/* Rotating Solar Flare Ring */}
            <g transform={`translate(${sunX}, ${sunY})`} pointerEvents="none">
              <circle cx="0" cy="0" r="36" fill="none" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="6 8" opacity="0.6" className="animate-spin origin-center" />
              <circle cx="0" cy="0" r="48" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 12" opacity="0.4" />
            </g>

            {/* Sun Core Disc (Draggable Target) */}
            <circle
              cx={sunX}
              cy={sunY}
              r="24"
              fill="url(#sunAura)"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              filter="url(#sunGlowFilter)"
              className="cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
            />
            {/* Inner Golden Core */}
            <circle cx={sunX} cy={sunY} r="18" fill="#F59E0B" pointerEvents="none" />
            <circle cx={sunX} cy={sunY} r="10" fill="#FFF7ED" pointerEvents="none" />

            {/* Telemetry Floating Pill Badge over Sun */}
            <g transform={`translate(${sunX}, ${sunY - 38})`} pointerEvents="none">
              <rect
                x="-80"
                y="-14"
                width="160"
                height="24"
                rx="12"
                fill="#071E3D"
                fillOpacity="0.92"
                stroke="#FDE047"
                strokeWidth="1.5"
              />
              <text
                x="0"
                y="2"
                textAnchor="middle"
                fill="#FFF"
                fontSize="9.5"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {formattedTime()} • {elevationDeg}° Elevation
              </text>
            </g>

            {/* Top HUD Cards (Integrated directly into canvas) */}
            {/* Top-Left: Sun Position */}
            <g transform="translate(20, 20)">
              <rect x="0" y="0" width="180" height="34" rx="10" fill="#071E3D" fillOpacity="0.88" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <circle cx="18" cy="17" r="9" fill="#F59E0B" fillOpacity="0.25" />
              <text x="18" y="21" textAnchor="middle" fill="#FDE047" fontSize="11">🧭</text>
              <text x="36" y="21" fill="#E2E8F0" fontSize="10.5" fontWeight="600">
                {t("Sun Position:", "সূর্যের সময়:")} <tspan fill="#FDE047" fontWeight="bold">{formattedTime()}</tspan>
              </text>
            </g>

            {/* Top-Right: Solar Irradiance */}
            <g transform="translate(790, 20)">
              <rect x="0" y="0" width="190" height="34" rx="10" fill="#071E3D" fillOpacity="0.88" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <circle cx="18" cy="17" r="9" fill="#0284C7" fillOpacity="0.25" />
              <text x="18" y="21" textAnchor="middle" fill="#38BDF8" fontSize="11">⚡</text>
              <text x="36" y="21" fill="#E2E8F0" fontSize="10.5" fontWeight="600">
                {t("Irradiance:", "সৌর বিকিরণ:")} <tspan fill="#4ADE80" fontWeight="bold">{irradiance} W/m²</tspan>
              </text>
            </g>
          </svg>
        </div>

        {/* =========================================================================
            SLIDER CONTROLS & QUICK PRESET BUTTONS
            ========================================================================= */}
        <div className="space-y-4 bg-slate-900/70 p-5 rounded-2xl border border-blue-900/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <label
              htmlFor={sliderId}
              className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2"
            >
              <Sliders className="w-4 h-4 text-brand-yellow" />
              <span>{t("Drag Sun Across the Sky (6:00 AM – 6:00 PM)", "সূর্যকে স্লাইড করে দিনকালের পরিবর্তন ও উৎপাদন দেখুন")}</span>
            </label>
            <span className="text-xs font-black text-brand-yellow bg-slate-800 px-3 py-1 rounded-lg border border-blue-800/80 self-start sm:self-auto">
              {formattedTime()} • Azimuth {Math.round(90 + sunNorm * 180)}°
            </span>
          </div>

          <input
            id={sliderId}
            type="range"
            min="6"
            max="18"
            step="0.25"
            value={timeOfDay}
            onChange={(e) => setTimeOfDay(Number(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-lg cursor-pointer accent-brand-yellow focus:outline-none"
          />

          {/* Quick Jump Stage Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
            {[
              { hour: 7, label: "Sunrise (7:00 AM)", labelBn: "ভোর (৭:০০)" },
              { hour: 9.5, label: "Morning (9:30 AM)", labelBn: "সকাল (৯:৩০)" },
              { hour: 12, label: "Peak Noon (12:00 PM)", labelBn: "সর্বোচ্চ দুপুর (১২:০০)" },
              { hour: 14.5, label: "Afternoon (2:30 PM)", labelBn: "দুপুর (২:৩০)" },
              { hour: 17.5, label: "Golden Hour (5:30 PM)", labelBn: "সন্ধ্যা (৫:৩০)" },
            ].map((p) => (
              <button
                key={p.hour}
                type="button"
                onClick={() => setTimeOfDay(p.hour)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all text-center border ${
                  timeOfDay === p.hour
                    ? "bg-gradient-to-r from-brand-primary to-brand-green text-white border-emerald-400 shadow-lg font-black scale-[1.02]"
                    : "bg-slate-800/70 text-slate-300 border-white/10 hover:bg-slate-700/80 hover:text-white"
                }`}
              >
                {language === "bn" ? p.labelBn : p.label}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            HIGH-TECH DASHBOARD METRICS: Clean Green + Tech Blue + Solar Gold
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Solar Irradiance */}
          <div className="bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl border border-blue-900/50 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t("Solar Irradiance", "সূর্যের বিকিরণ")}
                </span>
                <Gauge className="w-4 h-4 text-brand-yellow" />
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-white font-sans">{irradiance}</span>
                <span className="text-xs font-bold text-slate-400">W/m²</span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 mt-3 text-[11px] text-slate-300">
              {weather === "clear"
                ? "100% Direct Photons"
                : weather === "clouds"
                ? "75% Diffused Rays"
                : "35% Monsoon Ambient"}
            </div>
          </div>

          {/* Card 2: 10kWp Instant Output */}
          <div className="bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl border border-emerald-900/50 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t("10kWp Instant Output", "সৌর বিদ্যুৎ উৎপাদন")}
                </span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-emerald-400 font-sans">
                  {currentOutputKw}
                </span>
                <span className="text-xs font-bold text-slate-400">kW</span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 mt-3 text-[11px] text-emerald-300 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t("Clean Electricity Flowing", "পরিচ্ছন্ন সৌর বিদ্যুৎ")}</span>
            </div>
          </div>

          {/* Card 3: In-House Consumption */}
          <div className="bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl border border-blue-900/50 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {t("Building Usage", "ভবনের নিজস্ব ব্যবহার")}
                </span>
                <Home className="w-4 h-4 text-sky-400" />
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-black text-white font-sans">{homeLoadKw}</span>
                <span className="text-xs font-bold text-slate-400">kW</span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 mt-3 text-[11px] text-slate-300">
              {t("AC, Fans, Lighting & Motors", "বাতি, ফ্যান, এসি ও মোটর")}
            </div>
          </div>

          {/* Card 4: Net Metering Dynamic Export / Import */}
          <div
            className={`p-5 rounded-2xl border shadow-lg flex flex-col justify-between transition-colors ${
              isExporting
                ? "bg-gradient-to-br from-emerald-950/90 to-emerald-900/70 border-emerald-500/50"
                : "bg-gradient-to-br from-blue-950/90 to-slate-900/90 border-blue-500/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-200">
                  {isExporting
                    ? t("Surplus Net Export", "উদ্বৃত্ত গ্রিডে রপ্তানি")
                    : t("Grid Import Needed", "গ্রিড থেকে আমদানি")}
                </span>
                <RotateCw
                  className={`w-4 h-4 ${
                    isExporting ? "text-emerald-400 animate-spin" : "text-sky-400"
                  }`}
                />
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span
                  className={`text-3xl font-black font-sans ${
                    isExporting ? "text-emerald-300" : "text-sky-300"
                  }`}
                >
                  {Math.abs(Number(netExportKw))}
                </span>
                <span className="text-xs font-bold text-slate-300">kW</span>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10 mt-3 text-[11px] font-black">
              {isExporting ? (
                <span className="text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>{t("🟢 Meter Rolling Backwards!", "🟢 মিটার উল্টো ঘুরছে (বিল সাশ্রয়!)")}</span>
                </span>
              ) : (
                <span className="text-sky-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span>{t("🔵 Drawing difference from grid", "🔵 গ্রিড থেকে বিদ্যুৎ গ্রহণ")}</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
