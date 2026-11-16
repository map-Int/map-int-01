"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sun,
  ShieldCheck,
  Zap,
  BatteryCharging,
  ArrowLeftRight,
  Droplets,
  Wrench,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  Building,
  Factory,
  Home,
  Star,
  Cpu,
  Layers,
  ChevronRight,
  Calculator,
  Compass,
  Check,
  Sparkles,
  TrendingUp,
  Award,
  AlertTriangle,
  Scale,
  Clock,
} from "lucide-react";
import {
  COMPANY_INFO,
  VALUE_PROPOSITIONS,
  PROCESS_STEPS,
  LIVE_IMPACT_METRICS,
  BOX_PUSHER_VS_MAP,
} from "@/data/companyData";
import { SOLUTIONS_DATA } from "@/data/solutionsData";
import { PRODUCTS_DATA } from "@/data/productsData";
import { PROJECTS_DATA } from "@/data/projectsData";
import { SolarCalculatorWidget } from "@/components/SolarCalculatorWidget";
import { SolarSystemVisualizer } from "@/components/SolarSystemVisualizer";
import { InteractiveSunSimulator } from "@/components/InteractiveSunSimulator";
import { WorkProcessFlowchart } from "@/components/WorkProcessFlowchart";
import { VisualCardImage } from "@/components/VisualCardImage";
import { useQuoteModal } from "@/components/AppShell";
import { useLanguage } from "@/components/LanguageContext";

export default function HomePage() {
  const { t, language } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>("all");

  const filteredProjects =
    activeProjectFilter === "all"
      ? PROJECTS_DATA.slice(0, 4)
      : PROJECTS_DATA.filter((p) => p.category === activeProjectFilter).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          SECTION 01: HIGH-IMPACT MARKETING HERO (Modern Tech & High-Conversion)
          Headline: "Stop Paying Exorbitant Electricity Bills. Turn Your Idle Rooftop into a High-Yield Power Plant."
          ========================================================================= */}
      <section className="relative bg-gradient-to-br from-[#05182E] via-[#072448] to-[#0A386D] text-white overflow-hidden py-16 md:py-24 border-b border-blue-900/50">
        {/* Modern Blueprint Tech Grid Background */}
        <div className="absolute inset-0 tech-grid-dark opacity-35 pointer-events-none" aria-hidden="true" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Core Positioning Copy & Value Hooks (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge with Live Pulse Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-sky-400/30 text-xs text-sky-200 backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold tracking-wide">
                  {t(
                    "⚡ Bangladesh's Premier Turnkey Solar EPC Partner",
                    "⚡ বাংলাদেশে শীর্ষস্থানীয় টার্নকি সোলার ইপিসি পার্টনার"
                  )}
                </span>
              </div>

              {/* Masterclass Marketer Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight leading-[1.12] font-sans text-white">
                {language === "bn" ? (
                  <span>
                    বিদ্যুৎ বিলের বোঝা চিরতরে বিদায় দিন।{" "}
                    <span className="text-brand-yellow underline decoration-sky-400/40 decoration-4 underline-offset-4">
                      আপনার অলস ছাদকে
                    </span>{" "}
                    রূপান্তর করুন লাভজনক বিদ্যুৎ কেন্দ্রে।
                  </span>
                ) : (
                  <span>
                    Stop Paying Exorbitant Electricity Bills.{" "}
                    <span className="text-brand-yellow underline decoration-sky-400/40 decoration-4 underline-offset-4">
                      Turn Your Idle Rooftop
                    </span>{" "}
                    into a High-Yield Power Plant.
                  </span>
                )}
              </h1>

              {/* Persuasive, Benefit-Driven Sub-headline */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                {language === "bn"
                  ? COMPANY_INFO.subHeadlineBn
                  : COMPANY_INFO.subHeadline}
              </p>

              {/* Conversion CTAs (Direct Proposal + Calculator + WhatsApp) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="px-7 py-4 rounded-xl bg-gradient-to-r from-brand-green to-emerald-600 hover:from-brand-green-hover hover:to-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 border border-emerald-400/40"
                >
                  <span>{t("Get a Free Rooftop & Bill Assessment", "বিনামূল্যে ছাদের সম্ভাব্যতা ও সাশ্রয় রিপোর্ট নিন")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/calculator"
                  className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-all flex items-center justify-center gap-2 text-center backdrop-blur-sm shadow-sm"
                >
                  <Calculator className="w-4 h-4 text-brand-yellow" />
                  <span>{t("Calculate Solar ROI", "সোলার সাশ্রয় হিসাব করুন")}</span>
                </Link>

                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:hidden px-4 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp: 01347-548295</span>
                </a>
              </div>

              {/* Trust Perception Footprint */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <strong className="block text-white font-bold">{t("100% Genuine Tier-1", "আসল টিয়ার-১ যন্ত্র")}</strong>
                    <span className="text-[11px] text-slate-300">{t("Verified Flash Tests", "ফ্যাক্টরি টেস্ট সনদ")}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <ArrowLeftRight className="w-4 h-4 text-brand-yellow shrink-0" />
                  <div>
                    <strong className="block text-white font-bold">{t("Turnkey Net-Metering", "সরকারি নেট মিটারিং")}</strong>
                    <span className="text-[11px] text-slate-300">{t("BREB • DESCO • BPDB", "অনুমোদনের দায়িত্ব আমাদের")}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <div>
                    <strong className="block text-white font-bold">{t("Local Hubs On-Site", "নিজস্ব আঞ্চলিক অফিস")}</strong>
                    <span className="text-[11px] text-slate-300">{t("Kurigram • Dhaka", "কুড়িগ্রাম ও ঢাকায় টিম")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Hero Media Showcase & Live Telemetry (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-brand-deep group card-shine">
                {/* Real Bangladesh Solar Rooftop Engineer Photograph */}
                <div className="relative h-[360px] sm:h-[420px] md:h-[460px] w-full">
                  <Image
                    src="/images/hero-engineer.jpg"
                    alt="MAP International Power Certified Solar Engineer on Rooftop in Bangladesh"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 550px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05182E] via-[#05182E]/40 to-transparent" />
                </div>

                {/* Overlaid Live Performance & Regional Hub Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-white/80 text-text-primary">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-black uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                      <span>{t("Verified Clean Energy Output", "যাচাইকৃত উৎপাদন মান")}</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      ● {t("Active Systems", "সক্রিয় সিস্টেম")}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2.5 text-center">
                    <div>
                      <span className="text-[10px] text-text-secondary block font-medium">{t("Max Savings", "বিল সাশ্রয়")}</span>
                      <span className="text-base font-black text-brand-blue">Up to 85%</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-secondary block font-medium">{t("Warranty", "ওয়ারেন্টি")}</span>
                      <span className="text-base font-black text-brand-green">25 Years</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-secondary block font-medium">{t("Net-Metering", "নেট মিটারিং")}</span>
                      <span className="text-base font-black text-brand-primary">BREB/BPDB</span>
                    </div>
                  </div>
                </div>

                {/* Floating Certified Engineer Badge */}
                <div className="absolute top-4 left-4 bg-[#05182E]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>{t("Certified On-Site Engineers", "প্রশিক্ষিত প্রকৌশলী দ্বারা ইন্সটলেশন")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Hero Impact Metrics Cards (The Value Proof Matrix) */}
          <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {LIVE_IMPACT_METRICS.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-yellow font-sans block">
                    {language === "bn" ? metric.valueBn : metric.value}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                    {language === "bn" ? metric.labelBn : metric.label}
                  </h3>
                </div>
                <p className="text-[10px] sm:text-[11px] text-slate-300 mt-2 border-t border-white/10 pt-2">
                  {language === "bn" ? metric.captionBn : metric.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: NATIONAL REGULATORY COMPLIANCE & TRUST MARQUEE
          ========================================================================= */}
      <div className="bg-[#041324] border-b border-blue-900/60 py-3.5 text-slate-200 text-xs select-none">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <strong className="text-white font-bold">{t("Bangladesh Solar Standards Compliance:", "জাতীয় সোলার নীতিমালা মানদণ্ড:")}</strong>
            <span className="text-brand-yellow font-semibold">{t("4.85 kWh/m²/day Northern Yield", "৪.৮৫ কিলোওয়াট-ঘন্টা/বর্গমিটার দৈনিক গড় রোদ")}</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>SREDA Net-Metering Policy</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>BREB & DESCO Synchronized</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
              <span>Bloomberg Tier-1 TopCon</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>Kurigram Regional Hub & Dhaka Office</span>
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 03: THE GAME CHANGER — "BOX-PUSHER VS. MAP TURNKEY EPC"
          Directly answering the user: establishes the USP and why MAP is miles ahead!
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-surface-bg border-b border-surface-border">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
              <span>{t("Buyer Warning: Avoid Common Solar Traps", "সোলার নেওয়ার আগে ক্রেতার সতর্কতা")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-text-primary tracking-tight font-sans">
              {t(
                "Why 60% of Solar Buyers Regret Their Purchase — And How MAP Eliminates All Risk",
                "সস্তা সোলারের ফাঁদে পা দেবেন না: সাধারণ দোকান বনাম ম্যাপের ইঞ্জিনিয়ারিং পার্থক্য"
              )}
            </h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              {t(
                "In Bangladesh, roadside panel retailers sell uncertified hardware and leave you to battle the electricity office alone. See why smart businesses and homeowners choose MAP's certified turnkey EPC standard.",
                "বাংলাদেশে অনেকেই নিম্নমানের সরঞ্জাম কিনে পরে সার্ভিসিং ও সরকারি নেট মিটারিং না পেয়ে ক্ষতিগ্রস্ত হন। জেনে নিন কেন অভিজ্ঞ প্রতিষ্ঠান ও সচেতন গ্রাহকরা ম্যাপ ইন্টারন্যাশনাল পাওয়ারকে বেছে নেন।"
              )}
            </p>
          </div>

          {/* Interactive Contrast Matrix Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* The Roadside "Box-Pusher" Pitfalls (5 cols) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-red-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-red-100">
                  <div className="flex items-center gap-2 text-red-600">
                    <XCircle className="w-6 h-6" />
                    <h3 className="font-extrabold text-lg sm:text-xl font-sans text-text-primary">
                      {t("The Generic 'Box-Pusher' Retailer", "সাধারণ সোলার দোকান ও ট্রেডার্স")}
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-black uppercase">
                    High Risk
                  </span>
                </div>

                <div className="space-y-4 pt-4">
                  {BOX_PUSHER_VS_MAP.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-text-primary font-bold">
                          {language === "bn" ? item.featureBn : item.feature}
                        </strong>
                        <p className="text-text-secondary mt-0.5 leading-relaxed">
                          {language === "bn" ? item.boxPusherBn : item.boxPusher}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-red-50 rounded-2xl border border-red-200 text-xs text-red-800 font-medium text-center">
                ⚠️ {t("Result: Frequent breakdowns, zero utility rollback, and stranded investment.", "ফলাফল: ঘন ঘন নষ্ট হওয়া, বিল না কমা এবং অর্থনৈতিক ক্ষতি।")}
              </div>
            </div>

            {/* The MAP International Power Certified Standard (7 cols) */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#061E3D] via-[#082A52] to-[#0D7A3E] text-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-400/50 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                    <h3 className="font-black text-xl sm:text-2xl font-sans text-white">
                      {t("MAP Certified Turnkey EPC Standard", "ম্যাপ সার্টিফাইড টার্নকি ইপিসি মানদণ্ড")}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-brand-yellow text-brand-deep text-[11px] font-black uppercase shadow">
                    Zero Risk
                  </span>
                </div>

                <div className="space-y-4 pt-4">
                  {BOX_PUSHER_VS_MAP.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="block text-emerald-300 font-bold">
                          {language === "bn" ? item.featureBn : item.feature}
                        </strong>
                        <p className="text-slate-200 mt-0.5 leading-relaxed">
                          {language === "bn" ? item.mapStandardBn : item.mapStandard}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white/10 p-4 rounded-2xl border border-white/15">
                <div>
                  <span className="text-xs font-bold text-brand-yellow block">
                    {t("⚡ Guaranteed Outcome Guarantee", "⚡ নিশ্চিত ফলাফলের নিশ্চয়তা")}
                  </span>
                  <p className="text-[11px] text-slate-300">
                    {t("Up to 85% bill savings + bi-directional net meter active in 14 days.", "৮৫% পর্যন্ত বিল সাশ্রয় ও দ্বিমুখী মিটারে বিল উল্টো ঘোরার নিশ্চয়তা।")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="px-5 py-2.5 rounded-xl bg-brand-yellow hover:bg-amber-400 text-brand-deep font-black text-xs shrink-0 shadow transition-all active:scale-95"
                >
                  {t("Claim Free Assessment", "পরামর্শ গ্রহণ করুন")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: CORE SOLAR ARCHITECTURAL SOLUTIONS (Benefit-Led)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 text-brand-primary font-bold text-xs uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{t("Engineered Solar Categories", "সুনির্দিষ্ট চাহিদামাফিক সমাধান")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t(
                "Solar Solutions Designed Around Your Energy Needs.",
                "আপনার বিদ্যুৎ চাহিদার উপযোগী টেকসই সোলার সমাধান।"
              )}
            </h2>
            <p className="text-text-secondary text-sm">
              {t(
                "From residential villas in Kurigram to multi-megawatt industrial factories across Bangladesh, explore our engineered categories.",
                "কুড়িগ্রামের পারিবারিক বাড়ি থেকে শুরু করে শিল্পকারখানার মেগাওয়াট স্কেল পর্যন্ত আমাদের বহুমুখী সোলার ক্যাটাগরি।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Residential Solar with Real Homeowner Family */}
            <div className="bg-surface-bg rounded-2xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/residential-solar-family.jpg"
                    alt="Bangladeshi Homeowners on Terrace with Solar Rooftop"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {t("Residential Villas & Homes", "আবাসিক বাড়ি ও ভিলা")}
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-primary uppercase tracking-wider block">
                    {t("Cut Bills by 60%–85%", "বিদ্যুৎ বিল ৬০%–৮৫% সাশ্রয়")}
                  </span>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-brand-primary transition-colors">
                    {t("Residential Rooftop Systems", "আবাসিক রুফটপ সোলার")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t(
                      "Slash electricity bills, protect expensive household appliances from voltage surges, and enjoy uninterrupted power with net-metering.",
                      "মাসিক বিদ্যুৎ বিল উল্লেখযোগ্যভাবে কমিয়ে আনুন এবং সরকারের সাথে নেট মিটারিংয়ের মাধ্যমে অতিরিক্ত বিদ্যুৎ বিক্রি করুন।"
                    )}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/solutions#residential-solar"
                  className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all pt-2.5 border-t border-slate-200"
                >
                  <span>{t("View Residential Specs", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Commercial Solar */}
            <div className="bg-surface-bg rounded-2xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/commercial-rooftop-complex.jpg"
                    alt="Commercial Solar Rooftop System on Bangladesh Building"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-brand-blue text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {t("Offices & Commercial Buildings", "বাণিজ্যিক ও কর্পোরেট")}
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider block">
                    {t("High Daytime Tariff Offset", "সর্বোচ্চ ট্যারিফ সাশ্রয়")}
                  </span>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-brand-blue transition-colors">
                    {t("Commercial Solar Systems", "বাণিজ্যিক সোলার সিস্টেম")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t(
                      "Target peak commercial tariff slabs (BDT 13.5+/unit) for hospitals, hotels, shopping complexes, and schools with grid-tie solar.",
                      "বাণিজ্যিক বিদ্যুৎ ট্যারিফের চড়া ব্যয় বাঁচান এবং দিনের বেলায় সম্পূর্ণ সোলারে অফিস ও এসি পরিচালনা করুন।"
                    )}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/solutions#commercial-solar"
                  className="text-xs font-bold text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all pt-2.5 border-t border-slate-200"
                >
                  <span>{t("View Commercial Specs", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Industrial Captive Mega Solar */}
            <div className="bg-surface-bg rounded-2xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/industrial-solar-facility.jpg"
                    alt="Industrial Solar Rooftop Power Plant in Bangladesh"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#071E3D] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {t("Factories & Mega Rooftops", "শিল্পকারখানা ও ফ্যাক্টরি")}
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                    {t("Multi-Hundred kWp Scale", "মেগাওয়াট স্কেল সক্ষমতা")}
                  </span>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-brand-primary transition-colors">
                    {t("Industrial Mega Solar Plants", "ইন্ডাস্ট্রিয়াল সোলার পাওয়ার")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t(
                      "Turnkey engineering for textile mills, spinning, and cold storage with HT line integration and SREDA compliance.",
                      "টেক্সটাইল, স্পিনিং ও হিমাগারের জন্য শতভাগ সরকারি কমপ্লায়েন্স সম্পন্ন মেগাওয়াট স্কেল সোলার পাওয়ার প্ল্যান্ট।"
                    )}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/solutions#industrial-solar"
                  className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all pt-2.5 border-t border-slate-200"
                >
                  <span>{t("View Industrial Specs", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Deep Solar Irrigation Pump */}
            <div className="bg-surface-bg rounded-2xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/solar-irrigation-field.jpg"
                    alt="Solar Irrigation Pump Watering Crops in Northern Bangladesh"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {t("Agri-Farms & Irrigation", "কৃষি ও গভীর সেচ পাম্প")}
                  </span>
                </div>
                <div className="p-5 space-y-2.5">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block">
                    {t("Zero Daily Diesel Expense", "ডিজেল খরচ শূন্য")}
                  </span>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-amber-600 transition-colors">
                    {t("Solar Irrigation Pumps", "সোলার সেচ পাম্প")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t(
                      "Direct variable-frequency solar pumping (5 HP – 20 HP) delivering thousands of liters/minute without grid power or costly fuel.",
                      "উত্তরবঙ্গের কৃষকদের জন্য নিরবচ্ছিন্ন পানি উত্তোলনের সোলার সেচ পাম্প। ডিজেলের খরচ ছাড়াই সারা বছর নির্বিঘ্নে সেচ দিন।"
                    )}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/solutions#solar-pump"
                  className="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:gap-2 transition-all pt-2.5 border-t border-slate-200"
                >
                  <span>{t("View Agri Pump Specs", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: MASTERPIECE INTERACTIVE SUN ORBIT & NET-METERING SIMULATOR
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#05182E] via-[#072448] to-[#05182E] text-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <InteractiveSunSimulator />
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: OUR 5-PHASE TURNKEY WORKING PROCESS (WorkProcessFlowchart)
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#051d3b] via-[#072448] to-[#051d3b] text-white relative overflow-hidden border-t border-blue-900/60">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-brand-yellow border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("End-to-End Turnkey Flowchart", "পর্যায়ক্রমিক টার্নকি ফ্লোচার্ট")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-sans">
              {t("Our Working Process", "আমাদের কর্মপদ্ধতি")}
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              {t(
                "A five-step turnkey methodology from first 3D shadow analysis to utility net-metering and lifetime monitoring.",
                "পরামর্শ গ্রহণ ও ৩ডি শ্যাডো সিমুলেশন থেকে শুরু করে সরকারি নেট মিটারিং অনুমোদন ও আজীবন সার্ভিসিং।"
              )}
            </p>
          </div>

          <WorkProcessFlowchart />
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: INTERACTIVE SOLAR SAVINGS CALCULATOR
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-surface-bg border-b border-surface-border">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              {t("Interactive Savings Model", "তাৎক্ষণিক সাশ্রয় হিসাব")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t(
                "How Much Money Can Solar Save You Every Month?",
                "আপনার বাসা বা কারখানায় প্রতি মাসে কত টাকা সাশ্রয় হবে?"
              )}
            </h2>
            <p className="text-text-secondary text-sm">
              {t(
                "Adjust your current monthly electricity bill to see your required system capacity, capital investment, and 25-year financial payback.",
                "আপনার মাসিক বিদ্যুৎ বিলের পরিমাণ বাড়িয়ে বা কমিয়ে দেখুন আপনার কত কিলোওয়াট সোলার প্রয়োজন এবং কত টাকা সাশ্রয় হবে।"
              )}
            </p>
          </div>

          <SolarCalculatorWidget
            onQuoteTrigger={({ bill, capacity, systemType }) =>
              openQuoteModal({ bill, capacity, solution: systemType })
            }
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: VERIFIED REGIONAL FOOTPRINT (Dual Engineering Hubs)
          Kurigram Operational Hub + Dhaka Corporate Headquarters
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              {t("Regional Presence", "আঞ্চলিক অফিস ও কভারেজ")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t(
                "Serving Customers Across Our Strategic Service Centers.",
                "আমাদের সেবা আওতাভুক্ত অঞ্চল ও নিজস্ব অফিসসমূহ।"
              )}
            </h2>
            <p className="text-text-secondary text-sm">
              {t(
                "Direct contact points serving Kurigram, Rangpur Division, and the Dhaka metropolitan area with certified on-site engineers.",
                "কুড়িগ্রাম, রংপুর বিভাগ ও ঢাকায় আমাদের অফিস এবং সার্বক্ষণিক কারিগরি সহায়তা কেন্দ্র।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Kurigram Regional Hub */}
            <div className="bg-surface-blue p-5 sm:p-6 lg:p-8 rounded-3xl border border-emerald-200/60 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-yellow flex items-center justify-center shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-brand-primary bg-white px-3 py-1 rounded-full border border-emerald-200 shadow-sm">
                    {t("Primary Regional Hub", "প্রধান আঞ্চলিক হাব")}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-brand-deep">
                    {t("Kurigram Regional Hub & Service Center", "কুড়িগ্রাম রিজিওনাল হাব ও সার্ভিস সেন্টার")}
                  </h3>
                  <p className="text-sm font-semibold text-brand-primary mt-1">
                    {COMPANY_INFO.offices[0].address}
                  </p>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {t(
                    "Our dedicated northern operational center serving Kurigram Sadar, Ulipur, Nageshwari, Chilmari, Rajarhat, and greater Rangpur Division with on-site engineers, spare parts, and agricultural pump servicing.",
                    "কুড়িগ্রাম সদর, উলিপুর, নাগেশ্বরী, চিলমারী, রাজারহাট সহ সমগ্র রংপুর বিভাগে দ্রুত অন-সাইট সার্ভে, সোলার সেচ পাম্প ও নিয়মিত সার্ভিসিং সহায়তা।"
                  )}
                </p>

                <div className="pt-2 text-xs space-y-1.5 text-text-primary">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-primary" />
                    <span className="font-bold">{COMPANY_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-green" />
                    <span>{t("Verified Points: Hotel Serity Area & Bus Station Area", "যাচাইকৃত পয়েন্ট: হোটেল সেরটি ও বাস স্টেশন এলাকা")}</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-3.5 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("Call Kurigram Hub (01347-548295)", "কুড়িগ্রাম হাবে কল করুন (০১৩৪৭-৫৪৮২৯৫)")}</span>
                </a>
              </div>
            </div>

            {/* Dhaka Corporate Office */}
            <div className="bg-[#EBF4FA] p-5 sm:p-6 lg:p-8 rounded-3xl border border-blue-200 shadow-card flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-md">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-brand-blue bg-white px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                    {t("Corporate & Project Headquarters", "কর্পোরেট ও প্রজেক্ট হেডকোয়ার্টার্স")}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    {t("Dhaka Corporate Office", "ঢাকা কর্পোরেট অফিস")}
                  </h3>
                  <p className="text-sm font-semibold text-brand-blue mt-1">
                    {COMPANY_INFO.offices[1].address}
                  </p>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {t(
                    "Our capital engineering and consultation office coordinating commercial net-metering projects, industrial rooftop designs, SREDA/utility compliance, and supply chain logistics for Dhaka and surrounding industrial zones.",
                    "বাণিজ্যিক ও শিল্পকারখানার নেট মিটারিং, এসআরইডিএ ও বিতরণ কোম্পানি সমূহের অনুমোদন এবং রাজধানী কেন্দ্রিক প্রজেক্ট সমন্বয়।"
                  )}
                </p>

                <div className="pt-2 text-xs space-y-1.5 text-text-primary">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-blue" />
                    <span className="font-bold">{COMPANY_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    <span>{t("Sahalibag, Mirpur 1, Dhaka 1216", "শাহআলীবাগ, মিরপুর ১, ঢাকা ১২১৬")}</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-3.5 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("Call Dhaka Office (01347-548295)", "ঢাকা অফিসে কল করুন (০১৩৪৭-৫৪৮২৯৫)")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09: VERIFIED CUSTOMER CASE STUDIES & TESTIMONIALS
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-surface-bg border-t border-surface-border">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              {t("Real Field Results", "বাস্তবায়িত প্রকল্পের অভিজ্ঞতা")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t("Documented Client Results with MAP Systems", "গ্রাহকদের সন্তুষ্টি ও সাশ্রয়ের বাস্তব প্রমাণ")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">
                  {t(
                    '"MAP engineered a 150 kWp system on our factory in Rangpur. Their team handled everything from structural clamps to the utility connection. Our daytime electricity costs dropped by over 40% immediately."',
                    '"রংপুরে আমাদের ফ্যাক্টরিতে ১৫০ কিলোওয়াটের সোলার সিস্টেম করেছে ম্যাপ টিম। অত্যন্ত দায়িত্বশীল ও সময়মতো কাজ শেষ করেছে। বিদ্যুৎ খরচ উল্লেখযোগ্যভাবে কমেছে।"'
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="font-bold text-sm text-text-primary block">Engr. Tofazzal Hossain</span>
                <span className="text-[11px] text-text-muted">Factory Operations Director, Rangpur</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">
                  {t(
                    '"Our 10 HP solar pump in Kurigram has been running for two full boro seasons without a single hiccup. No more buying expensive diesel every morning! Our irrigation costs dropped to zero."',
                    '"কুড়িগ্রামে আমাদের সোলার সেচ পাম্পটি গত দুই মৌসুম ধরে অসাধারণভাবে চলছে। প্রতিদিন সকালে ডিজেল কেনার ঝামেলা ও খরচ থেকে আমরা সম্পূর্ণ মুক্ত।"'
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="font-bold text-sm text-text-primary block">Md. Abul Kashem</span>
                <span className="text-[11px] text-text-muted">Agricultural Farm Lead, Rajarhat, Kurigram</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">
                  {t(
                    '"Net metering in Mirpur 1 Dhaka seemed intimidating until MAP took over the paperwork and meter synchronization with DESCO. The meter actually rolls backwards during peak afternoon sun!"',
                    '"মিরপুরে আমাদের বাসার ছাদে নেট মিটারিং সোলার করা ছিল চমৎকার সিদ্ধান্ত। ডেসকোর মিটার অনুমোদন ও পুরো প্রক্রিয়ায় ম্যাপ টিম দারুণ সহযোগিতা করেছে।"'
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="font-bold text-sm text-text-primary block">Syed Nazmul Haque</span>
                <span className="text-[11px] text-text-muted">Residential Property Owner, Mirpur, Dhaka</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: HIGH-CONVERSION FINAL ACTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#071E3D] via-[#05291E] to-brand-primary text-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs text-brand-yellow border border-white/15">
            <Sun className="w-3.5 h-3.5" />
            <span>{t("Clean Energy | Brighter Future", "পরিচ্ছন্ন শক্তি | আলোকিত ভবিষ্যৎ")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-sans">
            {t(
              "Ready to Stop Wasting Money on Electricity Bills?",
              "অপ্রয়োজনীয় বিদ্যুৎ বিল দিয়ে আর কত অপচয় করবেন? আজই সোলারে আসুন।"
            )}
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t(
              "Talk directly with MAP International Power's certified engineers. Get an honest, transparent feasibility report and start your path to 85% bill savings today.",
              "ম্যাপ ইন্টারন্যাশনাল পাওয়ারের অভিজ্ঞ প্রকৌশলীদের সাথে সরাসরি কথা বলুন। ছাদের সম্ভাব্য উৎপাদন ও ব্যয়ের স্বচ্ছ হিসাব নিন।"
            )}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-green to-emerald-600 hover:from-brand-green-hover hover:to-emerald-700 text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 border border-emerald-400/40"
            >
              <span>{t("Request a Consultation", "পরামর্শের জন্য অনুরোধ করুন")}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-brand-deep hover:bg-slate-100 font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-primary" />
              <span>{t("Call 01347-548295", "কল করুন: ০১৩৪৭-৫৪৮২৯৫")}</span>
            </a>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp (01347-548295)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
