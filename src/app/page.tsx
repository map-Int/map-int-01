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
} from "lucide-react";
import { COMPANY_INFO, VALUE_PROPOSITIONS, PROCESS_STEPS } from "@/data/companyData";
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

  const filteredProjects = activeProjectFilter === "all"
    ? PROJECTS_DATA.slice(0, 4)
    : PROJECTS_DATA.filter((p) => p.category === activeProjectFilter).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          SECTION 02 — HERO SECTION (Clean, Uncluttered, High-Tech Corporate)
          Headline: "Powering a Brighter Future with Smarter Solar Energy."
          ========================================================================= */}
      <section className="relative bg-gradient-to-br from-[#061B36] via-[#004884] to-[#0D7A3E] text-white overflow-hidden py-16 md:py-24">
        {/* Subtle geometric solar pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4C400_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Core Positioning Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-400/40 text-xs text-blue-100 backdrop-blur-md">
                <Sun className="w-3.5 h-3.5 text-brand-yellow" />
                <span className="font-semibold tracking-wide">
                  {t("Complete Solar Energy Solutions Provider in Bangladesh", "বাংলাদেশে সম্পূর্ণ সোলার এনার্জি সলিউশন প্রদানকারী")}
                </span>
              </div>

              {/* Blueprint Exact Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.14] font-sans">
                {t(
                  "Powering a Brighter Future with Smarter Solar Energy.",
                  "স্মার্ট সৌরশক্তিতে গড়ছি আলোকিত ও নির্ভরযোগ্য ভবিষ্যৎ।"
                )}
              </h1>

              {/* Blueprint Exact Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                {t(
                  "Complete solar energy solutions for homes, businesses and industries. From system design and equipment supply to installation and ongoing technical support.",
                  "বাসাবাড়ি, বাণিজ্যিক ভবন, ভারী শিল্পকারখানা ও কৃষিখাতে পূর্ণাঙ্গ সোলার সলিউশন। ইঞ্জিনিয়ারিং ডিজাইন, উন্নত যন্ত্রপাতি, নেট মিটারিং অনুমোদন ও নির্ভরযোগ্য টেকনিক্যাল সাপোর্ট।"
                )}
              </p>

              {/* CTAs (Request Free Consultation + Solar Calculator) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  className="px-7 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>{t("Request a Free Consultation", "বিনামূল্যে পরামর্শ নিন")}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/calculator"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/25 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Calculator className="w-4 h-4 text-brand-yellow" />
                  <span>{t("Solar Calculator", "সোলার ক্যালকুলেটর")}</span>
                </Link>
              </div>

              {/* Trust perception badges (Trust, Expertise, Accessibility) */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/15 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <div>
                    <strong className="block text-white text-xs font-bold">{t("Trust & Safety", "আস্থা ও নিরাপত্তা")}</strong>
                    <span className="text-[11px] text-slate-300">{t("Verified Standards", "নিরাপদ ওয়্যারিং")}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <div>
                    <strong className="block text-white text-xs font-bold">{t("Expertise", "প্রকৌশল দক্ষতা")}</strong>
                    <span className="text-[11px] text-slate-300">{t("Net-Metering SLD", "অনুমোদিত ডিজাইন")}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <div>
                    <strong className="block text-white text-xs font-bold">{t("Accessibility", "সহজ যোগাযোগ")}</strong>
                    <span className="text-[11px] text-slate-300">{t("Kurigram • Dhaka", "কুড়িগ্রাম • ঢাকা")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Hero Image with Real Engineer & Live Telemetry Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-brand-deep group">
                {/* Real Bangladesh Solar Engineer Photograph */}
                <div className="relative h-[340px] sm:h-[400px] md:h-[440px] w-full">
                  <Image
                    src="/images/hero-engineer.jpg"
                    alt="MAP International Power Certified Solar Engineer on Rooftop in Bangladesh"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 550px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/30 to-transparent" />
                </div>

                {/* Overlaid Live Performance & Regional Hub Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl border border-white/80 text-text-primary">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-primary flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                      <span>{t("Verified Clean Energy Output", "সৌর বিদ্যুৎ উৎপাদন মান")}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      ● {t("Active Systems", "সক্রিয় সিস্টেম")}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2.5 text-center">
                    <div>
                      <span className="text-[10px] text-text-secondary block">{t("Max Savings", "বিল সাশ্রয়")}</span>
                      <span className="text-base font-extrabold text-brand-blue">Up to 85%</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-secondary block">{t("Warranty", "ওয়ারেন্টি")}</span>
                      <span className="text-base font-extrabold text-brand-green">25 Years</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-secondary block">{t("Tariff Offset", "নেট মিটারিং")}</span>
                      <span className="text-base font-extrabold text-brand-primary">BREB/BPDB</span>
                    </div>
                  </div>
                </div>

                {/* Floating Certified Engineer Badge */}
                <div className="absolute top-4 left-4 bg-brand-deep/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-lg border border-white/20 shadow-md flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>{t("Certified On-Site Engineers", "প্রশিক্ষিত প্রকৌশলী দ্বারা ইন্সটলেশন")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LIVE SOLAR BENCHMARK & REGULATORY TICKER (Modern High-Tech Energy Vibe)
          ========================================================================= */}
      <div className="bg-[#061A2E] border-y border-blue-900/50 py-3 text-slate-200 text-xs overflow-hidden select-none">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <strong className="text-white font-bold">{t("Bangladesh Clean Energy Telemetry:", "বাংলাদেশ ক্লিন এনার্জি মানদণ্ড:")}</strong>
            <span className="text-brand-yellow font-semibold">{t("4.85 kWh/m²/day Solar Yield", "৪.৮৫ কিলোওয়াট-ঘন্টা/বর্গমিটার দৈনিক বিকিরণ")}</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-[11px] text-slate-300">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>SREDA Net-Metering Compliant</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow" />
              <span>25-Yr Linear Power Guarantee</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>Kurigram • Rangpur • Dhaka Service</span>
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 03 — BUSINESS INTRODUCTION (Section-by-Section Blueprint)
          Headline: "Your Trusted Partner in Solar Energy Solutions."
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-surface-bg border-b border-surface-border">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Business Story */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-brand-primary font-bold text-xs uppercase tracking-wider">
                <Sun className="w-3.5 h-3.5 text-brand-yellow" />
                <span>{t("About MAP International Power", "ম্যাপ ইন্টারন্যাশনাল পাওয়ার পরিচিতি")}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
                {t(
                  "Your Trusted Partner in Solar Energy Solutions.",
                  "সৌরশক্তি সমাধানের বিশ্বস্ত ও নির্ভরযোগ্য সহযোগী।"
                )}
              </h2>

              <p className="text-text-secondary text-base leading-relaxed">
                {t(
                  "MAP International Power is dedicated to accelerating Bangladesh's clean energy transition. Headquartered with key regional hubs in Kurigram and Rangpur Division, along with our corporate branch in Mirpur 1, Dhaka, we provide end-to-end solar solutions that empower homeowners, industrial factories, and agricultural farmers.",
                  "ম্যাপ ইন্টারন্যাশনাল পাওয়ার বাংলাদেশের পরিচ্ছন্ন ও টেকসই বিদ্যুৎ নিশ্চিত করতে নিরলসভাবে কাজ করছে। উত্তরবঙ্গের কুড়িগ্রাম ও রংপুর বিভাগকে কেন্দ্র করে এবং রাজধানী ঢাকায় মিরপুর ১ কর্পোরেট অফিসের মাধ্যমে আমরা আবাসিক, বাণিজ্যিক ও কৃষিখাতে পূর্ণাঙ্গ সোলার সেবা পৌঁছে দিচ্ছি।"
                )}
              </p>

              <p className="text-text-secondary text-sm leading-relaxed">
                {t(
                  "Unlike generic solar equipment retailers, MAP delivers complete turnkey engineering: precision shadow simulations, high-voltage switchgear integration, official BREB/BPDB net-metering approvals, and scheduled local maintenance teams stationed directly in our service zones.",
                  "আমরা শুধু সোলার প্যানেল বিক্রেতা নই; সাইট পরিদর্শন, বিশেষজ্ঞ ইঞ্জিনিয়ারিং ডিজাইন, সরকারি নেট মিটারিং অনুমোদন ও আজীবন সার্ভিসিং সহ একটি পূর্ণাঙ্গ সমাধান নিশ্চিত করি।"
                )}
              </p>

              {/* Three Perception Pillars from Section 1.1 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-blue-100 shadow-card">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center mb-2 font-bold text-xs">
                    01
                  </div>
                  <h3 className="font-bold text-sm text-text-primary mb-1">{t("Trust", "আস্থা ও বিশ্বস্ততা")}</h3>
                  <p className="text-xs text-text-secondary">
                    {t("Transparent warranties, certified components, and substantiated engineering claims.", "স্বচ্ছ ওয়ারেন্টি ও সার্টিফাইড ইকুইপমেন্ট।")}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-surface-border shadow-card">
                  <div className="w-8 h-8 rounded-lg bg-surface-green text-brand-green flex items-center justify-center mb-2 font-bold text-xs">
                    02
                  </div>
                  <h3 className="font-bold text-sm text-text-primary mb-1">{t("Technical Expertise", "কারিগরি দক্ষতা")}</h3>
                  <p className="text-xs text-text-secondary">
                    {t("On-grid net metering, off-grid storage, and custom agricultural pump inverters.", "অন-গ্রিড নেট মিটারিং ও গভীর সেচ পাম্পে বিশেষ দক্ষতা।")}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-surface-border shadow-card">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-2 font-bold text-xs">
                    03
                  </div>
                  <h3 className="font-bold text-sm text-text-primary mb-1">{t("Accessibility", "সহজপ্রাপ্যতা")}</h3>
                  <p className="text-xs text-text-secondary">
                    {t("Ground presence in Kurigram & Rangpur making solar adoption straightforward.", "স্থানীয় অফিস ও সরাসরি হটলাইনে দ্রুত সাড়া।")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Real Corporate Engineering Photo */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-surface-border p-4 sm:p-5 shadow-xl space-y-4">
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/images/industrial-solar-facility.jpg"
                    alt="MAP Solar Engineers Inspecting Industrial Inverters and Rooftop Panels in Bangladesh"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-brand-deep/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/20">
                    {t("Field Engineering", "মাঠপর্যায়ে প্রকৌশল")}
                  </div>
                </div>
                <div className="pt-1 space-y-1.5">
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">
                    {t("On-Ground Engineering Verification", "মাঠপর্যায়ে দক্ষ প্রকৌশলী যাচাই")}
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {t(
                      "Our teams perform single-line diagrams (SLD), mechanical torque checks, DC surge protection (Type-II SPD), and earthing resistance tests compliant with Bangladesh electrical standards.",
                      "প্রতিটি প্রকল্পে সঠিক আর্থিং, লাইটনিং প্রটেকশন, থার্মাল স্ক্যানিং ও নিরাপদ ওয়্যারিং নিশ্চিত করে ম্যাপের নিজস্ব টেকনিক্যাল টিম।"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 — OUR SOLAR SOLUTIONS (Section-by-Section Blueprint)
          Headline: "Solar Solutions Designed Around Your Energy Needs."
          4 Core Category Cards with Real Bangladesh Imagery
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 text-brand-primary font-bold text-xs uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{t("Tailored Energy Architecture", "নির্দিষ্ট চাহিদামাফিক সমাধান")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t(
                "Solar Solutions Designed Around Your Energy Needs.",
                "আপনার বিদ্যুৎ চাহিদার উপযোগী টেকসই সোলার সমাধান।"
              )}
            </h2>
            <p className="text-text-secondary text-sm">
              {t(
                "From residential rooftops in Kurigram to multi-megawatt industrial plants across Bangladesh, explore our engineered categories.",
                "কুড়িগ্রামের পারিবারিক বাড়ি থেকে শুরু করে শিল্পকারখানার মেগাওয়াট স্কেল পর্যন্ত আমাদের বহুমুখী সোলার ক্যাটাগরি।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Residential Solar with Real Homeowner Family */}
            <div className="bg-surface-bg rounded-xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/residential-solar-family.jpg"
                  alt="Bangladeshi Homeowners on Terrace with Solar Rooftop"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                  {t("Residential & Commercial", "আবাসিক ও বাণিজ্যিক")}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-brand-primary transition-colors">
                    {t("Rooftop Solar Systems", "রুফটপ সোলার সিস্টেম")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mt-1">
                    {t(
                      "Slash electricity bills by 60%–85% for independent villas, apartments, hospitals, and corporate facilities.",
                      "বাসাবাড়ি, অ্যাপার্টমেন্ট ও বাণিজ্যিক প্রতিষ্ঠানে সর্বোচ্চ বিদ্যুৎ বিল কমানোর সমাধান।"
                    )}
                  </p>
                </div>
                <Link
                  href="/solutions#residential-solar"
                  className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all pt-2 border-t border-slate-200"
                >
                  <span>{t("View Solutions", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Industrial Solar with Real Engineers */}
            <div className="bg-surface-bg rounded-xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/industrial-solar-facility.jpg"
                  alt="Industrial Rooftop Solar Plant with Engineers"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-deep text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                  {t("Industrial & MW Plants", "ইন্ডাস্ট্রিয়াল প্ল্যান্ট")}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-brand-primary transition-colors">
                    {t("Industrial Power Plants", "মেগাওয়াট সোলার প্ল্যান্ট")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mt-1">
                    {t(
                      "MW-scale rooftop solar plants for textile mills, rice mills, factories, and cold storages with grid synchronizing.",
                      "টেক্সটাইল, অটো রাইস মিল ও কারখানার জন্য ভারী মেগাওয়াট স্কেল সোলার প্ল্যান্ট।"
                    )}
                  </p>
                </div>
                <Link
                  href="/solutions#industrial-solar"
                  className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all pt-2 border-t border-slate-200"
                >
                  <span>{t("View Solutions", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Solar Irrigation Pump with Real Farmers */}
            <div className="bg-surface-bg rounded-xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/solar-pump-farmers.jpg"
                  alt="Bangladeshi Farmer and Technician at Solar Irrigation Pump"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand-green text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                  {t("Agri-Power & Irrigation", "কৃষি সেচ ও পাম্প")}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-brand-primary transition-colors">
                    {t("Solar Irrigation Pumps", "সোলার সেচ পাম্প")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mt-1">
                    {t(
                      "Eliminate diesel fuel costs completely. High-discharge 3 HP to 15 HP pumps for Kurigram & Rangpur paddy fields.",
                      "ডিজেলমুক্ত স্বয়ংক্রিয় কৃষি সেচ পাম্প যা বোরো ধান ও ফসলের সেচ খরচ শূন্যে নামিয়ে আনে।"
                    )}
                  </p>
                </div>
                <Link
                  href="/solutions#solar-pump"
                  className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all pt-2 border-t border-slate-200"
                >
                  <span>{t("View Solutions", "বিস্তারিত দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Equipment & Servicing with Real Technician */}
            <div className="bg-surface-bg rounded-xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/solar-inverter-technician.jpg"
                  alt="Technician Testing Hybrid Inverter and LiFePO4 Battery"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                  {t("Equipment & Servicing", "যন্ত্রপাতি ও সার্ভিসিং")}
                </span>
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-base text-text-primary group-hover:text-brand-primary transition-colors">
                    {t("Products & Maintenance", "যন্ত্রপাতি ও রক্ষণাবেক্ষণ")}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mt-1">
                    {t(
                      "Direct supply of Tier-1 TopCon panels, LiFePO4 batteries, inverters, and on-ground preventive health maintenance.",
                      "উন্নত মানের সোলার প্যানেল, লিথিয়াম ব্যাটারি, ইনভার্টার সরবরাহ ও নিয়মিত সার্ভিসিং সেবা।"
                    )}
                  </p>
                </div>
                <Link
                  href="/products"
                  className="text-xs font-bold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all pt-2 border-t border-slate-200"
                >
                  <span>{t("Browse Products", "পণ্য তালিকা দেখুন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 — INTERACTIVE ARCHITECTURE SCHEMATIC (Interactive Visuals!)
          On-Grid Net Metering, Off-Grid Hybrid, and Solar Irrigation Pump
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#EBF4FA] via-white to-[#F5F8FC] border-y border-blue-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SolarSystemVisualizer />
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SUN & PHOTON HARVEST SIMULATOR
          Interactive Sun elevation, time-of-day slider, irradiance & net-metering
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
          <InteractiveSunSimulator />
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CALCULATOR SPOTLIGHT
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <SolarCalculatorWidget
            onQuoteTrigger={({ bill, capacity, systemType }) =>
              openQuoteModal({ bill, capacity, solution: systemType })
            }
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 — WHY CHOOSE MAP? (Section-by-Section Blueprint)
          Headline: "Why Choose MAP International Power?"
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-surface-bg border-t border-surface-border">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-1.5 text-brand-primary font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
              <span>{t("The MAP Engineering Advantage", "কেন আমাদের বেছে নেবেন")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t(
                "Why Choose MAP International Power?",
                "কেন ম্যাপ ইন্টারন্যাশনাল পাওয়ার আপনার প্রথম পছন্দ?"
              )}
            </h2>
            <p className="text-text-secondary text-sm">
              {t(
                "We substantiate every capability claim with verified tier-1 equipment, safety standards, and dedicated local regional support teams.",
                "আমরা প্রতিটি প্রতিশ্রুতি বাস্তবায়ন করি গুণগত যন্ত্রপাতি, নিখুঁত ডিজাইন ও স্থানীয় সার্ভিস টিমের মাধ্যমে।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUE_PROPOSITIONS.map((prop, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-surface-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-blue text-brand-primary flex items-center justify-center font-bold">
                    <Sun className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <h3 className="font-bold text-base text-text-primary">
                    {language === "bn" ? prop.titleBn : prop.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {language === "bn" ? prop.descBn : prop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07 — OUR PROJECTS (Section-by-Section Blueprint)
          Headline: "Powering Real Projects with Solar Energy."
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
                {t("Proven Field Experience", "বাস্তবায়িত প্রকল্পের অভিজ্ঞতা")}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans mt-1">
                {t(
                  "Powering Real Projects with Solar Energy.",
                  "বাস্তব সৌর প্রকল্প বাস্তবায়নে আমাদের সাফল্য।"
                )}
              </h2>
              <p className="text-text-secondary text-sm mt-2 max-w-xl">
                {t(
                  "Explore verified MAP installations across Kurigram, Rangpur Division, and Dhaka.",
                  "কুড়িগ্রাম, রংপুর বিভাগ ও ঢাকায় বাস্তবায়িত প্রকল্পের বিবরণ।"
                )}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "All Projects", labelBn: "সকল প্রকল্প" },
                { id: "industrial", label: "Industrial", labelBn: "ইন্ডাস্ট্রিয়াল" },
                { id: "commercial", label: "Commercial", labelBn: "বাণিজ্যিক" },
                { id: "agricultural", label: "Agri-Pumps", labelBn: "কৃষি পাম্প" },
                { id: "residential", label: "Residential", labelBn: "আবাসিক" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveProjectFilter(f.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activeProjectFilter === f.id
                      ? "bg-brand-primary text-white shadow-sm"
                      : "bg-surface-bg text-text-secondary border border-surface-border hover:bg-slate-100"
                  }`}
                >
                  {language === "bn" ? f.labelBn : f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-surface-bg rounded-2xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-brand-deep/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-md border border-white/20">
                    {proj.systemType}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand-yellow text-brand-deep text-xs font-black px-3 py-1 rounded-md shadow-sm">
                    {proj.capacity}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-brand-primary font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-brand-primary transition-colors">
                      {language === "bn" ? proj.titleBn : proj.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mt-2">
                      {language === "bn" ? proj.summaryBn : proj.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-text-muted block text-[10px]">{t("Generation", "উৎপাদন")}</span>
                      <span className="font-bold text-text-primary">{proj.dailyGeneration}</span>
                    </div>
                    <div>
                      <span className="text-text-muted block text-[10px]">{t("Commissioned", "চালুকরণ")}</span>
                      <span className="font-bold text-text-primary">{proj.completionYear}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-bold text-sm shadow-sm transition-colors"
            >
              <span>{t("View All Projects", "সকল প্রকল্প দেখুন")}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08 — PRODUCTS & EQUIPMENT (Section-by-Section Blueprint)
          Headline: "Reliable Components for Smarter Solar Systems."
          CTA: "Request Product Price" button
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-surface-bg border-t border-surface-border">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 text-brand-primary font-bold text-xs uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{t("Certified Hardware Supply", "প্রমাণিত যন্ত্রপাতি সরবরাহ")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t(
                "Reliable Components for Smarter Solar Systems.",
                "টেকসই ও আন্তর্জাতিক মানের সোলার যন্ত্রপাতি।"
              )}
            </h2>
            <p className="text-text-secondary text-sm">
              {t(
                "We supply and install genuine Tier-1 photovoltaic components with official factory warranties.",
                "আমরা সরবরাহ করি বিশ্বমানের সোলার প্যানেল, ইনভার্টার, লিথিয়াম ব্যাটারি ও সেচ পাম্প।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS_DATA.slice(0, 6).map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <VisualCardImage
                    src={prod.image}
                    type={
                      prod.category === "panels"
                        ? "panel"
                        : prod.category === "inverters"
                        ? "inverter"
                        : prod.category === "batteries"
                        ? "battery"
                        : prod.category === "pumps"
                        ? "pump"
                        : "mounting"
                    }
                    alt={prod.name}
                    className="h-48"
                    badge={prod.badge || prod.manufacturer}
                  />

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                      {prod.manufacturer} • Model: {prod.model}
                    </span>
                    <h3 className="font-bold text-sm text-text-primary line-clamp-2">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-text-secondary line-clamp-2">
                      {prod.shortDesc}
                    </p>

                    <div className="pt-2 text-[11px] text-brand-green font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{prod.warranty}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({ productName: prod.name })}
                    className="w-full py-2.5 px-4 bg-surface-blue hover:bg-brand-primary hover:text-white text-brand-primary rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{t("Request Product Price", "পণ্যের মূল্য ও তথ্য জানুন")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/products"
              className="text-xs font-bold text-brand-primary hover:underline inline-flex items-center gap-1.5"
            >
              <span>{t("Explore Complete Products Catalogue & Technical Specifications", "সম্পূর্ণ পণ্য ক্যাটালগ ও স্পেসিফিকেশন দেখুন")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 — OUR WORKING PROCESS (Interactive Turnkey Flowchart!)
          Five-step responsive flowchart pipeline
          ========================================================================= */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-brand-deep via-[#051d3b] to-brand-deep text-white relative overflow-hidden">
        {/* Subtle geometric pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#F4C400_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          aria-hidden="true"
        />

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

          {/* Interactive Flowchart Component (Responsive Horizontal on Desktop, Vertical on Mobile) */}
          <WorkProcessFlowchart />
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — GEOGRAPHIC COVERAGE (Section-by-Section Blueprint)
          Kurigram, Rangpur Division, Dhaka — Mirpur 1.
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              {t("Regional Presence", "আঞ্চলিক অফিস ও কভারেজ")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t(
                "Serving Customers Across Our Service Areas.",
                "আমাদের সেবা আওতাভুক্ত অঞ্চলসমূহ।"
              )}
            </h2>
            <p className="text-text-secondary text-sm">
              {t(
                "Direct contact points serving Kurigram, Rangpur Division, and the Dhaka metropolitan area.",
                "কুড়িগ্রাম, রংপুর বিভাগ ও ঢাকায় আমাদের অফিস এবং কারিগরি সহায়তা কেন্দ্র।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Kurigram Regional Hub */}
            <div className="bg-surface-blue p-5 sm:p-6 lg:p-8 rounded-2xl border border-emerald-200/60 shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary text-brand-yellow flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-brand-primary bg-white px-3 py-1 rounded-full border border-emerald-200">
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

              <div className="pt-6">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-3 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("Call Kurigram Hub (01347-548295)", "কুড়িগ্রাম হাবে কল করুন (০১৩৪৭-৫৪৮২৯৫)")}</span>
                </a>
              </div>
            </div>

            {/* Dhaka Corporate Office */}
            <div className="bg-[#EBF4FA] p-5 sm:p-6 lg:p-8 rounded-2xl border border-blue-200 shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                    <Building className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold text-brand-blue bg-white px-3 py-1 rounded-full border border-blue-200">
                    {t("Corporate & Project Office", "কর্পোরেট ও প্রজেক্ট অফিস")}
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

              <div className="pt-6">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full py-3 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
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
          SECTION 11 — CUSTOMER TESTIMONIALS & PARTNER STANDARDS
          ========================================================================= */}
      <section className="py-16 md:py-20 bg-surface-bg border-t border-surface-border">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              {t("Client Stories", "গ্রাহকদের সন্তুষ্টি ও অভিজ্ঞতা")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary tracking-tight font-sans">
              {t("What Our Clients Say About MAP", "গ্রাহকদের প্রতিক্রিয়া")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-surface-border shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-xs text-text-secondary italic leading-relaxed">
                  {t(
                    '"MAP installed a 150 kWp system on our factory in Rangpur. Their team handled everything from structural clamps to the utility connection. Our daytime electricity costs dropped by over 40%."',
                    '"রংপুরে আমাদের ফ্যাক্টরিতে ১৫০ কিলোওয়াটের সোলার সিস্টেম করেছে ম্যাপ টিম। অত্যন্ত দায়িত্বশীল ও সময়মতো কাজ শেষ করেছে। বিদ্যুৎ খরচ উল্লেখযোগ্যভাবে কমেছে।"'
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="font-bold text-sm text-text-primary block">Engr. Tofazzal Hossain</span>
                <span className="text-[11px] text-text-muted">Factory Operations Director, Rangpur</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-surface-border shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-xs text-text-secondary italic leading-relaxed">
                  {t(
                    '"Our 10 HP solar pump in Kurigram has been running for two full boro seasons without a single hiccup. No more buying expensive diesel every morning!"',
                    '"কুড়িগ্রামে আমাদের সোলার সেচ পাম্পটি গত দুই মৌসুম ধরে অসাধারণভাবে চলছে। প্রতিদিন সকালে ডিজেল কেনার ঝামেলা থেকে আমরা সম্পূর্ণ মুক্ত।"'
                  )}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="font-bold text-sm text-text-primary block">Md. Abul Kashem</span>
                <span className="text-[11px] text-text-muted">Agricultural Farm Lead, Rajarhat, Kurigram</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-surface-border shadow-card flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-xs text-text-secondary italic leading-relaxed">
                  {t(
                    '"Net metering in Mirpur 1 Dhaka seemed intimidating until MAP took over the paperwork and meter synchronization with DESCO. Seamless and transparent."',
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
          SECTION 12 — FINAL CONVERSION SECTION (Section-by-Section Blueprint)
          Headline: "Ready to Make the Switch to Solar?"
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#071E3D] via-[#05291E] to-brand-primary text-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs text-brand-yellow border border-white/15">
            <Sun className="w-3.5 h-3.5" />
            <span>{t("Clean Energy | Brighter Future", "পরিচ্ছন্ন শক্তি | আলোকিত ভবিষ্যৎ")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight font-sans">
            {t(
              "Ready to Make the Switch to Solar?",
              "সৌরশক্তিতে বিদ্যুৎ সাশ্রয় করতে প্রস্তুত?"
            )}
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t(
              "Talk to MAP International Power and find the right solar solution for your property or business.",
              "ম্যাপ ইন্টারন্যাশনাল পাওয়ারের সাথে কথা বলুন এবং আপনার বাড়ি, কারখানা বা কৃষিখামারের জন্য সেরা সোলার সমাধানটি বেছে নিন।"
            )}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-green hover:bg-brand-green-hover text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95"
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
