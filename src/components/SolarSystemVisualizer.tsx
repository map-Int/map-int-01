"use client";

import React, { useState } from "react";
import { Sun, Zap, ArrowRight, BatteryCharging, Droplets, ArrowLeftRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export const SolarSystemVisualizer: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"ongrid" | "offgrid" | "pump">("ongrid");
  const [activeNode, setActiveNode] = useState<string>("panels");

  return (
    <div className="bg-white rounded-2xl border border-surface-border shadow-card overflow-hidden">
      {/* Header & Tabs */}
      <div className="p-6 md:p-8 bg-brand-deep text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider block mb-1">
            {t("Interactive Architecture Schematic", "ইন্টারেক্টিভ সোলার আর্কিটেকচার")}
          </span>
          <h3 className="text-xl md:text-2xl font-bold font-sans">
            {t("How MAP Solar Systems Operate in Bangladesh", "কীভাবে কাজ করে আমাদের সোলার সিস্টেম")}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {t("Click any component to inspect its engineering specifications and flow.", "প্রতিটি উপাদানে ক্লিক করে কারিগরি বিবরণ ও বিদ্যুৎ প্রবাহ দেখুন।")}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab("ongrid");
              setActiveNode("panels");
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "ongrid"
                ? "bg-brand-blue text-white shadow-md border border-sky-400"
                : "bg-white/10 text-slate-200 hover:bg-white/20"
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-brand-yellow" />
            <span>{t("On-Grid Net Metering", "অন-গ্রিড নেট মিটারিং")}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("offgrid");
              setActiveNode("battery");
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "offgrid"
                ? "bg-brand-green text-white shadow-md border border-emerald-400"
                : "bg-white/10 text-slate-200 hover:bg-white/20"
            }`}
          >
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>{t("Off-Grid Hybrid Storage", "অফ-গ্রিড হাইব্রিড")}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("pump");
              setActiveNode("pumpMotor");
            }}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === "pump"
                ? "bg-amber-600 text-white shadow-md border border-amber-400"
                : "bg-white/10 text-slate-200 hover:bg-white/20"
            }`}
          >
            <Droplets className="w-3.5 h-3.5" />
            <span>{t("Solar Irrigation Pump", "সোলার সেচ পাম্প")}</span>
          </button>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-bg">
        {/* SVG Diagram Canvas (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-surface-border p-4 sm:p-6 shadow-sm">
          {activeTab === "ongrid" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-brand-primary pb-2 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{t("Bi-directional Energy Exchange", "দ্বিমুখী বিদ্যুৎ সরবরাহ")}</span>
                </span>
                <span className="text-text-muted">{t("Grid Connected (Zero Battery)", "জাতীয় গ্রিড সংযুক্ত")}</span>
              </div>

              {/* Vector Diagram: On-Grid */}
              <svg viewBox="0 0 600 280" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid Lines */}
                <path d="M50 140 H550" stroke="#DFE7EF" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M120 70 V140 M260 70 V140 M400 70 V140 M490 70 V140" stroke="#DFE7EF" strokeWidth="1.5" />

                {/* Node 1: Sun & Solar PV Panels */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveNode("panels")}
                >
                  <circle cx="100" cy="50" r="22" fill="#F4C400" fillOpacity="0.2" />
                  <circle cx="100" cy="50" r="16" fill="#F4C400" />
                  <rect x="55" y="85" width="90" height="60" rx="8" fill={activeNode === "panels" ? "#00549A" : "#0A2540"} stroke="#0284C7" strokeWidth="2" />
                  {/* Solar cell grid lines */}
                  <line x1="85" y1="85" x2="85" y2="145" stroke="#60A5FA" strokeWidth="1" />
                  <line x1="115" y1="85" x2="115" y2="145" stroke="#60A5FA" strokeWidth="1" />
                  <line x1="55" y1="105" x2="145" y2="105" stroke="#60A5FA" strokeWidth="1" />
                  <line x1="55" y1="125" x2="145" y2="125" stroke="#60A5FA" strokeWidth="1" />
                  <text x="100" y="165" textAnchor="middle" fill="#0F2417" fontSize="11" fontWeight="bold">
                    Tier-1 PV Array
                  </text>
                  <text x="100" y="178" textAnchor="middle" fill="#42584A" fontSize="9">
                    550W+ TopCon
                  </text>
                </g>

                {/* Flow Arrow: PV to Inverter */}
                <g>
                  <line x1="150" y1="115" x2="215" y2="115" stroke="#F4C400" strokeWidth="3" strokeDasharray="6 4" className="animate-power-flow" />
                  <polygon points="220,115 212,110 212,120" fill="#F4C400" />
                  <text x="182" y="105" textAnchor="middle" fill="#D97706" fontSize="9" fontWeight="bold">DC Power</text>
                </g>

                {/* Node 2: Smart String Inverter */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveNode("inverter")}
                >
                  <rect x="225" y="85" width="85" height="60" rx="8" fill={activeNode === "inverter" ? "#0D7A3E" : "#FFFFFF"} stroke="#0D7A3E" strokeWidth="2" />
                  <circle cx="267" cy="110" r="14" fill="#EAF5EE" />
                  <text x="267" y="114" textAnchor="middle" fill="#0D7A3E" fontSize="11" fontWeight="bold">⚡ AC</text>
                  <text x="267" y="165" textAnchor="middle" fill="#0F2417" fontSize="11" fontWeight="bold">
                    Grid-Tie Inverter
                  </text>
                  <text x="267" y="178" textAnchor="middle" fill="#42584A" fontSize="9">
                    98.6% Efficiency
                  </text>
                </g>

                {/* Flow Arrow: Inverter to Home / Loads */}
                <g>
                  <line x1="315" y1="115" x2="355" y2="115" stroke="#16A34A" strokeWidth="3" />
                  <polygon points="360,115 352,110 352,120" fill="#16A34A" />
                </g>

                {/* Node 3: Home / Commercial Loads */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveNode("loads")}
                >
                  <rect x="365" y="85" width="80" height="60" rx="8" fill={activeNode === "loads" ? "#EAF5EE" : "#FFFFFF"} stroke={activeNode === "loads" ? "#0D7A3E" : "#D4E6D9"} strokeWidth="2" />
                  <text x="405" y="110" textAnchor="middle" fontSize="18">🏢</text>
                  <text x="405" y="130" textAnchor="middle" fill="#0F2417" fontSize="9" fontWeight="bold">Building Load</text>
                  <text x="405" y="165" textAnchor="middle" fill="#0F2417" fontSize="11" fontWeight="bold">
                    Daytime Use
                  </text>
                  <text x="405" y="178" textAnchor="middle" fill="#16A34A" fontSize="9" fontWeight="bold">
                    100% Free Solar
                  </text>
                </g>

                {/* Flow: Bi-directional Meter to Utility Grid */}
                <g>
                  <line x1="450" y1="110" x2="485" y2="110" stroke="#0D7A3E" strokeWidth="2.5" />
                  <polygon points="490,110 482,106 482,114" fill="#0D7A3E" />
                  <line x1="490" y1="120" x2="455" y2="120" stroke="#16A34A" strokeWidth="2" strokeDasharray="6 6" className="animate-power-flow" />
                  <polygon points="450,120 458,116 458,124" fill="#16A34A" />
                  <text x="470" y="100" textAnchor="middle" fill="#0D7A3E" fontSize="8" fontWeight="bold">Export/Import</text>
                </g>

                {/* Node 4: Bi-directional Net Meter & National Grid */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveNode("grid")}
                >
                  <rect x="495" y="85" width="85" height="60" rx="8" fill={activeNode === "grid" ? "#0A2540" : "#FFFFFF"} stroke="#00549A" strokeWidth="2" />
                  <text x="537" y="112" textAnchor="middle" fill={activeNode === "grid" ? "#FFF" : "#0A2540"} fontSize="16">🌐 ⇌</text>
                  <text x="537" y="132" textAnchor="middle" fill={activeNode === "grid" ? "#F4C400" : "#00549A"} fontSize="9" fontWeight="bold">BREB / BPDB</text>
                  <text x="537" y="165" textAnchor="middle" fill="#0F2417" fontSize="11" fontWeight="bold">
                    National Grid
                  </text>
                  <text x="537" y="178" textAnchor="middle" fill="#63748A" fontSize="9">
                    Net Metered
                  </text>
                </g>

                {/* Bottom Highlight Badge */}
                <rect x="180" y="220" width="240" height="28" rx="14" fill="#EDF7EF" stroke="#168A3B" strokeWidth="1" />
                <text x="300" y="238" textAnchor="middle" fill="#168A3B" fontSize="10" fontWeight="bold">
                  ✓ Excess Power Turns Your Meter Backwards
                </text>
              </svg>
            </div>
          )}

          {activeTab === "offgrid" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-brand-green pb-2 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                  <span>{t("24/7 Independent Power Storage", "নিরবচ্ছিন্ন ২৪ ঘণ্টা বিদ্যুৎ ব্যাকআপ")}</span>
                </span>
                <span className="text-text-muted">{t("LiFePO4 Lithium Bank", "লিথিয়াম ব্যাটারি")}</span>
              </div>

              {/* Vector Diagram: Off-Grid */}
              <svg viewBox="0 0 600 280" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 140 H550" stroke="#DFE7EF" strokeWidth="2" strokeDasharray="4 4" />

                {/* PV Array */}
                <g className="cursor-pointer" onClick={() => setActiveNode("panels")}>
                  <rect x="60" y="85" width="90" height="60" rx="8" fill={activeNode === "panels" ? "#0D7A3E" : "#062E1B"} stroke="#0D7A3E" strokeWidth="2" />
                  <text x="105" y="120" textAnchor="middle" fill="#FFF" fontSize="16">☀️ PV</text>
                  <text x="105" y="165" textAnchor="middle" fill="#0F2417" fontSize="11" fontWeight="bold">Solar Array</text>
                  <text x="105" y="178" textAnchor="middle" fill="#42584A" fontSize="9">Generates DC</text>
                </g>

                <line x1="155" y1="115" x2="220" y2="115" stroke="#F4C400" strokeWidth="3" />
                <polygon points="225,115 217,110 217,120" fill="#F4C400" />

                {/* Hybrid Inverter */}
                <g className="cursor-pointer" onClick={() => setActiveNode("hybridInverter")}>
                  <rect x="230" y="85" width="95" height="60" rx="8" fill={activeNode === "hybridInverter" ? "#16A34A" : "#FFFFFF"} stroke="#16A34A" strokeWidth="2" />
                  <text x="277" y="112" textAnchor="middle" fill={activeNode === "hybridInverter" ? "#FFF" : "#16A34A"} fontSize="12" fontWeight="bold">⚡ Hybrid</text>
                  <text x="277" y="130" textAnchor="middle" fill={activeNode === "hybridInverter" ? "#FFF" : "#42584A"} fontSize="8">Smart Inverter</text>
                  <text x="277" y="165" textAnchor="middle" fill="#0F2417" fontSize="11" fontWeight="bold">Hybrid Inverter</text>
                  <text x="277" y="178" textAnchor="middle" fill="#42584A" fontSize="9">Multi-Source</text>
                </g>

                {/* Flow to Battery */}
                <line x1="277" y1="150" x2="277" y2="200" stroke="#16A34A" strokeWidth="3" strokeDasharray="6 6" className="animate-power-flow" />

                {/* LiFePO4 Battery */}
                <g className="cursor-pointer" onClick={() => setActiveNode("battery")}>
                  <rect x="230" y="205" width="95" height="50" rx="8" fill={activeNode === "battery" ? "#0D7A3E" : "#EDF7EF"} stroke="#16A34A" strokeWidth="2" />
                  <text x="277" y="228" textAnchor="middle" fill={activeNode === "battery" ? "#FFF" : "#16A34A"} fontSize="11" fontWeight="bold">🔋 LiFePO4</text>
                  <text x="277" y="244" textAnchor="middle" fill={activeNode === "battery" ? "#A7F3D0" : "#42584A"} fontSize="8">6,000+ Cycles (48V)</text>
                </g>

                {/* Flow to Critical Loads */}
                <line x1="330" y1="115" x2="410" y2="115" stroke="#0D7A3E" strokeWidth="3" />
                <polygon points="415,115 407,110 407,120" fill="#0D7A3E" />

                {/* 24/7 Loads */}
                <g className="cursor-pointer" onClick={() => setActiveNode("loads")}>
                  <rect x="420" y="85" width="110" height="60" rx="8" fill={activeNode === "loads" ? "#EAF5EE" : "#FFFFFF"} stroke="#0D7A3E" strokeWidth="2" />
                  <text x="475" y="112" textAnchor="middle" fontSize="14">💡 ❄️ 🖥️</text>
                  <text x="475" y="130" textAnchor="middle" fill="#0D7A3E" fontSize="9" fontWeight="bold">Home / Farm / Clinic</text>
                  <text x="475" y="165" textAnchor="middle" fill="#0F2417" fontSize="11" fontWeight="bold">24/7 Protected Loads</text>
                  <text x="475" y="178" textAnchor="middle" fill="#16A34A" fontSize="9">Zero Blackouts</text>
                </g>
              </svg>
            </div>
          )}

          {activeTab === "pump" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-amber-700 pb-2 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>{t("Zero-Diesel Agricultural Irrigation", "ডিজেলমুক্ত কৃষি সেচ ব্যবস্থা")}</span>
                </span>
                <span className="text-text-muted">{t("3 HP to 15 HP Solar Pump", "৩ থেকে ১৫ ঘোড়া পাম্প")}</span>
              </div>

              {/* Vector Diagram: Solar Pump */}
              <svg viewBox="0 0 600 280" className="w-full h-auto select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Solar Ground Array */}
                <g className="cursor-pointer" onClick={() => setActiveNode("panels")}>
                  <rect x="60" y="85" width="95" height="60" rx="8" fill="#0D7A3E" stroke="#0D7A3E" strokeWidth="2" />
                  <text x="107" y="118" textAnchor="middle" fill="#FFF" fontSize="14">☀️ Ground PV</text>
                  <text x="107" y="165" textAnchor="middle" fill="#172B45" fontSize="11" fontWeight="bold">Solar Array</text>
                  <text x="107" y="178" textAnchor="middle" fill="#63748A" fontSize="9">Anti-Theft Mount</text>
                </g>

                <line x1="160" y1="115" x2="230" y2="115" stroke="#F4C400" strokeWidth="3" />
                <polygon points="235,115 227,110 227,120" fill="#F4C400" />

                {/* MPPT VFD Pump Controller */}
                <g className="cursor-pointer" onClick={() => setActiveNode("vfd")}>
                  <rect x="240" y="85" width="90" height="60" rx="8" fill={activeNode === "vfd" ? "#082B59" : "#FFFFFF"} stroke="#082B59" strokeWidth="2" />
                  <text x="285" y="112" textAnchor="middle" fill={activeNode === "vfd" ? "#FFF" : "#082B59"} fontSize="12" fontWeight="bold">⚙️ MPPT VFD</text>
                  <text x="285" y="130" textAnchor="middle" fill={activeNode === "vfd" ? "#F4C400" : "#63748A"} fontSize="8">Soft-Start Drive</text>
                  <text x="285" y="165" textAnchor="middle" fill="#172B45" fontSize="11" fontWeight="bold">Pump Controller</text>
                  <text x="285" y="178" textAnchor="middle" fill="#63748A" fontSize="9">Dry-Run Safe</text>
                </g>

                <line x1="335" y1="115" x2="400" y2="115" stroke="#0284C7" strokeWidth="3" />
                <polygon points="405,115 397,110 397,120" fill="#0284C7" />

                {/* Submersible Pump */}
                <g className="cursor-pointer" onClick={() => setActiveNode("pumpMotor")}>
                  <rect x="410" y="85" width="85" height="60" rx="8" fill={activeNode === "pumpMotor" ? "#0284C7" : "#EAF3FB"} stroke="#0284C7" strokeWidth="2" />
                  <text x="452" y="115" textAnchor="middle" fill={activeNode === "pumpMotor" ? "#FFF" : "#0284C7"} fontSize="14">🌀 SS 304</text>
                  <text x="452" y="132" textAnchor="middle" fill={activeNode === "pumpMotor" ? "#FFF" : "#172B45"} fontSize="8">Submersible</text>
                  <text x="452" y="165" textAnchor="middle" fill="#172B45" fontSize="11" fontWeight="bold">Deep Tube-well</text>
                  <text x="452" y="178" textAnchor="middle" fill="#0284C7" fontSize="9">Continuous Flow</text>
                </g>

                {/* Water Discharge */}
                <line x1="500" y1="115" x2="540" y2="115" stroke="#0284C7" strokeWidth="4" strokeDasharray="6 6" className="animate-power-flow" />
                <text x="565" y="112" textAnchor="middle" fontSize="20">🌾</text>
                <text x="565" y="132" textAnchor="middle" fill="#168A3B" fontSize="8" fontWeight="bold">Paddy Field</text>
              </svg>
            </div>
          )}
        </div>

        {/* Right Info Box for Selected Node (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-surface-border space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-brand-primary">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>{t("Component Engineering Breakdown", "উপাদানটির কারিগরি বিবরণ")}</span>
          </div>

          {activeTab === "ongrid" && (
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-brand-deep">
                {activeNode === "panels"
                  ? t("Tier-1 TopCon Photovoltaic Modules", "টপকন মনো সোলার প্যানেল")
                  : activeNode === "inverter"
                  ? t("Three-Phase Transformerless Inverter", "থ্রি-ফেজ অন-গ্রিড ইনভার্টার")
                  : activeNode === "grid"
                  ? t("National Grid & Net Metering", "জাতীয় গ্রিড ও নেট মিটারিং")
                  : t("Self-Consumed Building Power", "ভবনের নিজস্ব বিদ্যুৎ ব্যবহার")}
              </h4>

              <p className="text-xs text-text-secondary leading-relaxed">
                {activeNode === "panels"
                  ? t(
                      "High-efficiency N-Type TopCon 550W–600W modules convert sunlight into DC electricity with 22.8% module efficiency and 25-year linear generation guarantee.",
                      "উচ্চ ক্ষমতাসম্পন্ন এন-টাইপ টপকন প্যানেল যা সর্বোচ্চ ২২.৮% কার্যক্ষমতায় সূর্যালোককে বিদ্যুতে রূপান্তর করে এবং ২৫ বছর স্থায়ী উৎপাদন দেয়।"
                    )
                  : activeNode === "inverter"
                  ? t(
                      "Converts DC power into synchronized 400V/230V 50Hz AC electricity matching Bangladesh grid standards with IP66 protection and anti-islanding safety.",
                      "ডিসি বিদ্যুৎকে বাংলাদেশের জাতীয় গ্রিড মান অনুযায়ী এসি বিদ্যুতে রূপান্তর করে। এতে রয়েছে অ্যান্টি-আইল্যান্ডিং নিরাপত্তা।"
                    )
                  : activeNode === "grid"
                  ? t(
                      "Under Bangladesh SREDA Net Metering policy, excess solar power flows to the utility. Your bi-directional meter records credit, offsetting your monthly electricity bill.",
                      "সরকারের নেট মিটারিং নীতিমালার আওতায় দিনের অতিরিক্ত বিদ্যুৎ জাতীয় গ্রিডে চলে যায় এবং আপনার বিদ্যুৎ বিল সমন্বয় করে।"
                    )
                  : t(
                      "Daytime electricity runs all fans, lights, air conditioners, and machinery for free directly from the sun, eliminating peak daytime utility tariffs.",
                      "দিনের বেলা ভবনের সব এসি, ফ্যান, বাতি ও মোটর সরাসরি সৌরশক্তিতে চলে এবং বিদ্যুৎ বিল বাঁচায়।"
                    )}
              </p>

              <div className="p-3 bg-surface-blue rounded-lg border border-emerald-100 text-xs space-y-1">
                <span className="font-bold text-brand-deep block text-[11px]">{t("Economic Advantage", "অর্থনৈতিক লাভ")}</span>
                <span className="text-text-primary block">
                  {activeNode === "grid"
                    ? t("Up to 80% to 90% utility bill reduction without battery maintenance.", "কোনো ব্যাটারির খরচ ছাড়াই ৮০-৯০% বিদ্যুৎ বিল সাশ্রয়।")
                    : t("Full capital investment recovered within 3.5 to 5 years.", "৩.৫ থেকে ৫ বছরের মধ্যে সম্পূর্ণ খরচ উঠে আসে।")}
                </span>
              </div>
            </div>
          )}

          {activeTab === "offgrid" && (
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-brand-deep">
                {t("LiFePO4 Lithium Energy Storage", "লিথিয়াম ব্যাটারি ব্যাকআপ")}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {t(
                  "Safe, non-toxic Lithium Iron Phosphate (LiFePO4) storage engineered for 6,000+ deep cycles. Completely replaces noisy, polluting diesel generators.",
                  "উন্নত লিথিয়াম ব্যাটারি যা ৬০০০+ সাইকেল স্থায়ী হয়। এটি ক্ষতিকর ও ব্যয়বহুল ডিজেল জেনারেটরের সম্পূর্ণ বিকল্প হিসেবে কাজ করে।"
                )}
              </p>
              <div className="p-3 bg-surface-green rounded-lg border border-emerald-100 text-xs space-y-1">
                <span className="font-bold text-brand-green block text-[11px]">{t("Key Advantage", "মূল সুবিধা")}</span>
                <span className="text-text-primary block">
                  {t("Less than 10ms transfer time: Computers, lab instruments & fans run without a flicker.", "১০ মিলিসেকেন্ডেরও কম সময়ে পাওয়ার সুইচ: কম্পিউটার বা এসি বন্ধ না হয়ে নিরবচ্ছিন্ন চলবে।")}
                </span>
              </div>
            </div>
          )}

          {activeTab === "pump" && (
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-brand-deep">
                {t("Stainless Steel Submersible Pump (3 HP - 15 HP)", "এসএস সাবমারসিবল সেচ পাম্প")}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {t(
                  "Engineered for deep-well irrigation in Kurigram, Rangpur, and northern Bangladesh. The smart VFD controller automatically begins pumping water as soon as dawn breaks.",
                  "কুড়িগ্রাম ও রংপুর অঞ্চলের ভূগর্ভস্থ পানির গভীরতার উপযোগী বিশেষ সেচ পাম্প। ভোর হতেই স্বয়ংক্রিয়ভাবে জমিতে পানি দেওয়া শুরু করে।"
                )}
              </p>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs space-y-1">
                <span className="font-bold text-amber-800 block text-[11px]">{t("Farmer Savings", "কৃষকের সাশ্রয়")}</span>
                <span className="text-text-primary block">
                  {t("Saves 3,000+ liters of diesel fuel every boro rice irrigation season.", "প্রতি বোরো মৌসুমে ৩০০০+ লিটার ডিজেল খরচ সাশ্রয় করে।")}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
