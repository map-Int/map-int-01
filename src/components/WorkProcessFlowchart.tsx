"use client";

import React, { useState, useEffect } from "react";
import {
  Compass,
  FileSpreadsheet,
  PackageCheck,
  Wrench,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Layers,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface StepDetail {
  number: string;
  title: string;
  titleBn: string;
  tagline: string;
  taglineBn: string;
  desc: string;
  descBn: string;
  deliverables: string[];
  deliverablesBn: string[];
  duration: string;
  durationBn: string;
}

const FLOWCHART_STEPS: StepDetail[] = [
  {
    number: "01",
    title: "Site Survey & Shadow Analysis",
    titleBn: "সাইট পরিদর্শন ও শ্যাডো অ্যানালাইসিস",
    tagline: "3D Solar Irradiation Assessment",
    taglineBn: "৩ডি রুফটপ শ্যাডো সিমুলেশন",
    desc: "Our engineers visit your rooftop or land in Kurigram, Rangpur, or Dhaka with digital solar irradiance meters and structural sensors to evaluate RCC concrete load capacity and azimuth angles.",
    descBn: "আমাদের প্রকৌশলীরা আপনার ছাদ বা জমি সরেজমিনে পরিদর্শন করে ৩ডি ড্রোন ম্যাপিং ও শ্যাডো অ্যানালাইসিস সম্পন্ন করেন।",
    deliverables: ["3D Shadow Simulation Report", "Structural Load Verification", "Expected Monthly Generation Model"],
    deliverablesBn: ["৩ডি শ্যাডো সিমুলেশন রিপোর্ট", "ছাদের ভারবহন সক্ষমতা পরীক্ষা", "মাসিক সম্ভাব্য সৌর উৎপাদন মডেল"],
    duration: "Day 1 – 2",
    durationBn: "১ – ২ দিন",
  },
  {
    number: "02",
    title: "Precision Engineering Design",
    titleBn: "ইঞ্জিনিয়ারিং ডিজাইন ও এসএলডি",
    tagline: "Certified Single-Line Diagram (SLD)",
    taglineBn: "প্রকৌশল ড্রয়িং ও এসএলডি প্রণয়ন",
    desc: "We draft complete CAD layouts, DC string sizing, cable cross-sections, and utility-compliant Single-Line Diagrams (SLD) ready for official BREB/BPDB/DESCO net-metering submission.",
    descBn: "জাতীয় গ্রিডের নীতিমালা অনুযায়ী নিখুঁত এসএলডি (Single Line Diagram) এবং ক্যাবল সাইজিং ড্রয়িং তৈরি করা হয়।",
    deliverables: ["Official SLD Schematic", "String Voltage & Inverter Matching", "BREB / BPDB Net-Metering File"],
    deliverablesBn: ["অফিসিয়াল এসএলডি ড্রয়িং", "ইনভার্টার ও প্যানেল স্ট্রিং ম্যাচিং", "নেট মিটারিং সরকারি ফাইল প্রস্তুতি"],
    duration: "Day 3 – 5",
    durationBn: "৩ – ৫ দিন",
  },
  {
    number: "03",
    title: "Tier-1 Equipment Supply",
    titleBn: "যন্ত্রপাতি সরবরাহ ও গুণমান যাচাই",
    tagline: "Genuine Bloomberg Tier-1 Modules",
    taglineBn: "আন্তর্জাতিক মানের সার্টিফাইড পণ্য",
    desc: "Direct allocation of factory-fresh N-Type TopCon panels (585W+), German/Global standard smart inverters, Class-II DC Surge Arresters (SPD), and cyclone-tested AL6005-T5 mounting structures.",
    descBn: "বিয়ারফাস্ট ব্লুমবার্গ টিয়ার-১ অনুমোদিত এন-টাইপ টপকন সোলার প্যানেল, ইনভার্টার ও এসএস মাউন্টিং হার্ডওয়্যার সরবরাহ।",
    deliverables: ["Tier-1 Flash Test Reports", "Official Factory Warranties (25 Yrs)", "Anti-Corrosion Structural Hardware"],
    deliverablesBn: ["ফ্যাক্টরি ফ্ল্যাশ টেস্ট রিপোর্ট", "২৫ বছরের অফিসিয়াল ওয়ারেন্টি সনদ", "ঘূর্ণিঝড় প্রতিরোধী মাউন্টিং সামগ্রী"],
    duration: "Day 6 – 8",
    durationBn: "৬ – ৮ দিন",
  },
  {
    number: "04",
    title: "Installation & Grid Sync",
    titleBn: "ইনস্টলেশন ও গ্রিড সিনক্রোনাইজেশন",
    tagline: "Precision Mechanical & Electrical Works",
    taglineBn: "দক্ষ প্রকৌশলী দ্বারা নিখুঁত সংযোগ",
    desc: "Our certified installation team erects high-tensile mounting racks, connects multi-contact MC4 waterproof lines, implements grounding systems (<1 Ohm resistance), and completes inverter integration.",
    descBn: "প্রশিক্ষিত মেকানিক্যাল ও ইলেকট্রিক্যাল টিমের মাধ্যমে নিখুঁত মাউন্টিং, বজ্রপাত সুরক্ষা এবং আর্থিং সংযোগ নিশ্চিত করা হয়।",
    deliverables: ["Low-Resistance Earthing (<1Ω)", "Class-II Surge Protection (SPD)", "Inverter Pre-Commissioning Tests"],
    deliverablesBn: ["নিরাপদ আর্থিং (<১ ওহম রেজিস্ট্যান্স)", "বজ্রপাত ও ওভার-ভোল্টেজ প্রটেকশন", "ইনভার্টার প্রি-কমিশনিং টেস্ট"],
    duration: "Day 9 – 12",
    durationBn: "৯ – ১২ দিন",
  },
  {
    number: "05",
    title: "Net-Metering & Lifetime Support",
    titleBn: "নেট মিটারিং ও আজীবন সার্ভিসিং",
    tagline: "Meter Roll-Back & 24/7 Monitoring",
    taglineBn: "দ্বিমুখী মিটার ও সার্বক্ষণিক ট্র্যাকিং",
    desc: "We coordinate with local electric utility inspectors for bi-directional net meter installation. We hand over the mobile monitoring dashboard and station regional technicians in Kurigram and Dhaka.",
    descBn: "পল্লী বিদ্যুৎ/ডেসকো/বিপিডিবির সাথে যৌথ পরিদর্শনে নেট মিটার স্থাপন এবং মোবাইল অ্যাপে সার্বক্ষণিক লাইভ উৎপাদন ট্র্যাকিং।",
    deliverables: ["Synchronized Bi-Directional Meter", "Mobile App Remote IoT Tracking", "Scheduled Annual Health Servicing"],
    deliverablesBn: ["দ্বিমুখী নেট মিটার চালু", "মোবাইল অ্যাপে লাইভ উৎপাদন ট্র্যাকিং", "বাৎসরিক নিয়মিত শিডিউলড সার্ভিসিং"],
    duration: "Active Onwards",
    durationBn: "চালুর পর আজীবন",
  },
];

export const WorkProcessFlowchart: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-hover / advance flowchart every 1.5 seconds unless user hovers with mouse
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % FLOWCHART_STEPS.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const step = FLOWCHART_STEPS[activeStep];

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Solar Engineering and Commissioning Process"
    >
      {/* Flowchart Control Pipeline: Responsive Horizontal (Tablet & Desktop) & Step Selector */}
      <div className="relative">
        {/* Pipeline Connector Bar (Backbone) - Visible on tablet (md: 768px+) and desktop */}
        <div className="hidden md:block absolute top-7 left-8 right-8 lg:left-12 lg:right-12 h-1 bg-blue-900/60 z-0">
          <div
            className="h-full bg-gradient-to-r from-brand-yellow via-sky-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${(activeStep / (FLOWCHART_STEPS.length - 1)) * 100}%` }}
          />
        </div>

        {/* Five Interactive Stage Nodes: 2-col on mobile (5th spans 2), 5-col on tablet & desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-4 relative z-10" role="group" aria-label="Process stages">
          {FLOWCHART_STEPS.map((s, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = activeStep > idx;
            const isLastMobile = idx === 4;

            return (
              <button
                key={s.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveStep(idx);
                }}
                onMouseLeave={() => setIsPaused(false)}
                aria-current={isActive ? "true" : undefined}
                aria-label={`Stage ${s.number}: ${s.title}`}
                className={`p-3 sm:p-4 md:p-3 lg:p-5 rounded-2xl text-left transition-all duration-300 relative group flex flex-col justify-between border ${
                  isLastMobile ? "col-span-2 md:col-span-1" : ""
                } ${
                  isActive
                    ? "bg-gradient-to-b from-[#0B3A6E] to-[#061F3B] border-brand-yellow shadow-xl scale-[1.02] ring-2 ring-brand-yellow/30"
                    : isCompleted
                    ? "bg-blue-950/70 border-sky-500/40 hover:border-sky-400/80 hover:bg-blue-900/50"
                    : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                }`}
              >
                {/* Active indicator bar showing current step */}
                {isActive && (
                  <div className="absolute top-0 left-3 right-3 h-1 bg-gradient-to-r from-brand-yellow to-emerald-400 rounded-full" />
                )}

                {/* Top Row: Number Node Badge & Connector Indicator */}
                <div className="flex items-center justify-between w-full mb-2.5 md:mb-2 lg:mb-3">
                  <div
                    className={`w-8 h-8 lg:w-9 lg:h-9 rounded-xl flex items-center justify-center font-black text-xs transition-transform duration-300 ${
                      isActive
                        ? "bg-brand-yellow text-brand-deep shadow-md scale-110"
                        : isCompleted
                        ? "bg-emerald-500 text-white"
                        : "bg-white/10 text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : s.number}
                  </div>

                  <span
                    className={`text-[9px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      isActive
                        ? "bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/40"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {language === "bn" ? s.durationBn : s.duration}
                  </span>
                </div>

                {/* Step Title & Sub-tag */}
                <div className="space-y-1">
                  <h4
                    className={`font-bold text-xs md:text-[11px] lg:text-sm font-sans line-clamp-2 transition-colors leading-snug ${
                      isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                    }`}
                  >
                    {language === "bn" ? s.titleBn : s.title}
                  </h4>
                  <p className="text-[10px] md:text-[10px] lg:text-[11px] text-slate-400 line-clamp-1">
                    {language === "bn" ? s.taglineBn : s.tagline}
                  </p>
                </div>

                {/* Forward Arrow indicator on tablet and desktop */}
                {idx < FLOWCHART_STEPS.length - 1 && (
                  <div className="hidden md:flex absolute -right-2.5 lg:-right-3 top-6 lg:top-7 w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-brand-deep border border-blue-600 items-center justify-center text-slate-300 z-20 pointer-events-none">
                    <ArrowRight className="w-2.5 h-2.5 lg:w-3 lg:h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Active Stage Deep-Dive Card (All-Device Modern Presentation) */}
      <div className="bg-gradient-to-br from-[#072448] via-[#0A386D] to-[#05182E] p-6 sm:p-8 rounded-3xl border border-blue-600/50 shadow-2xl relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Stage Detail (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-yellow text-brand-deep text-xs font-black uppercase tracking-wider shadow">
                Phase {step.number} of 05
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow" />
                <span>{language === "bn" ? step.durationBn : step.duration}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-sans tracking-tight">
              {language === "bn" ? step.titleBn : step.title}
            </h3>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {language === "bn" ? step.descBn : step.desc}
            </p>

            {/* Turnkey Engineering Deliverables */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-yellow block mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-green" />
                <span>{t("Verified Engineering Milestones & Deliverables:", "যাচাইকৃত কারিগরি মাইলফলক ও সরবরাহ:")}</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(language === "bn" ? step.deliverablesBn : step.deliverables).map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-xl text-xs text-slate-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Step Navigator & Quick Action (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-brand-yellow" />
                <span>{t("Flow Progress Indicator", "প্রসেস অগ্রগতি সূচক")}</span>
              </span>
              <span className="text-brand-yellow font-extrabold">{((activeStep + 1) * 20)}% Complete</span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-brand-yellow to-brand-green h-full rounded-full transition-all duration-500"
                style={{ width: `${((activeStep + 1) * 20)}%` }}
              />
            </div>

            <div className="text-xs text-slate-300 leading-relaxed bg-black/20 p-3.5 rounded-xl border border-white/10">
              <span className="text-brand-yellow font-bold block mb-1">
                {t("⚡ Turnkey Assurance Guarantee", "⚡ টার্নকি ইঞ্জিনিয়ারিং নিশ্চয়তা")}
              </span>
              {t(
                "MAP International Power assigns a certified electrical project lead for every rooftop from initial shadow cadastre to bi-directional meter activation.",
                "প্রতিটি প্রকল্পে প্রাথমিক থ্রি-ডি শ্যাডো সিমুলেশন থেকে শুরু করে পল্লী বিদ্যুৎ/ডেসকো নেট মিটারিং অনুমোদন পর্যন্ত ম্যাপের নিজস্ব ইঞ্জিনিয়ার দায়িত্ব পালন করেন।"
              )}
            </div>

            {/* Prev / Next Step Buttons */}
            <div className="flex items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev - 1 + FLOWCHART_STEPS.length) % FLOWCHART_STEPS.length)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Go to previous stage"
              >
                {t("← Previous Stage", "← পূর্ববর্তী ধাপ")}
              </button>

              <button
                type="button"
                onClick={() => setActiveStep((prev) => (prev + 1) % FLOWCHART_STEPS.length)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-brand-yellow hover:bg-amber-400 text-brand-deep text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                aria-label="Go to next stage"
              >
                <span>{t("Next Stage →", "পরবর্তী ধাপ →")}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};