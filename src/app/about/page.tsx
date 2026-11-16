"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  ShieldCheck,
  Cpu,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Target,
  Eye,
  Award,
  Zap,
  Wrench,
  Clock,
  Building2,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { useQuoteModal } from "@/components/AppShell";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-surface-bg pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#071E3D] via-[#004884] to-[#0D7A3E] text-white py-16 md:py-20 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-brand-yellow border border-white/20 backdrop-blur-sm">
            <Sun className="w-3.5 h-3.5" />
            <span>{t("Clean Energy | Brighter Future", "পরিচ্ছন্ন শক্তি | আলোকিত ভবিষ্যৎ")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white">
            {t("About MAP International Power", "ম্যাপ ইন্টারন্যাশনাল পাওয়ার সম্পর্কে")}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t(
              "Pioneering dependable, engineering-grade solar energy solutions across Bangladesh. From our primary operational service hub in Kurigram to our corporate project headquarters in Dhaka.",
              "বাংলাদেশের প্রতিটি প্রান্তে বিশ্বমানের সোলার ইঞ্জিনিয়ারিং ও গ্রিন এনার্জি পৌঁছে দিতে আমরা বদ্ধপরিকর। উত্তরবঙ্গের কুড়িগ্রাম থেকে শুরু করে রাজধানী ঢাকা পর্যন্ত আমাদের বিস্তৃত সেবা।"
            )}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-200 font-medium">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg border border-white/15">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t("Certified SREDA Net-Metering Partner", "স্রেডা ও সরকারি নেট মিটারিং সহযোগী")}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg border border-white/15">
              <Award className="w-4 h-4 text-brand-yellow" />
              <span>{t("Tier-1 Bloomberg Approved Hardware", "ব্লুমবার্গ অনুমোদিত টিয়ার-১ যন্ত্রপাতি")}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-12 space-y-12">
        {/* Official Brand Identity Showcase with Official Logo */}
        <section className="bg-white rounded-3xl border border-surface-border p-6 sm:p-10 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Logo Showcase Left Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-2xl bg-gradient-to-br from-[#F5F8FC] to-[#EBF4FA] border border-blue-200/70 text-center space-y-4">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-28 sm:h-32 bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex items-center justify-center">
              <Image
                src="/logo-cropped.png"
                alt="MAP International Power Official Logo"
                width={300}
                height={122}
                priority
                className="object-contain max-h-24 w-auto select-none"
              />
            </div>

            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-[#00549A]">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {t("Official Corporate Identity", "অফিসিয়াল কর্পোরেট পরিচিতি")}
              </span>
              <p className="text-xs text-text-secondary">
                {t("Tagline: Clean Energy | Brighter Future", "স্লোগান: পরিচ্ছন্ন শক্তি | আলোকিত ভবিষ্যৎ")}
              </p>
            </div>

            <div className="pt-2 w-full grid grid-cols-2 gap-2 text-left">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs">
                <span className="text-[10px] text-slate-500 block">{t("Primary Hub", "প্রধান আঞ্চলিক হাব")}</span>
                <span className="font-bold text-text-primary">Kurigram, Rangpur</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs">
                <span className="text-[10px] text-slate-500 block">{t("Corporate Hub", "কর্পোরেট হাব")}</span>
                <span className="font-bold text-text-primary">Mirpur 1, Dhaka</span>
              </div>
            </div>
          </div>

          {/* Company Story & Purpose Right Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#00549A]/10 text-[#00549A] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>{t("Corporate Profile & Origin", "কোম্পানির পরিচিতি ও পটভূমি")}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-text-primary font-sans tracking-tight">
              {t(
                "Engineering-Driven Solar Energy for Homes, Businesses & Industry",
                "ইঞ্জিনিয়ারিং-ভিত্তিক নিরাপদ ও লাভজনক সৌরশক্তি প্রযুক্তি"
              )}
            </h2>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {t(
                "MAP International Power was established with a singular objective: to eradicate substandard solar installations and inaccurate generation claims in Bangladesh by providing certified, true-to-spec solar engineering solutions.",
                "ম্যাপ ইন্টারন্যাশনাল পাওয়ার প্রতিষ্ঠিত হয়েছে একটি সুনির্দিষ্ট লক্ষ্য নিয়ে: বাংলাদেশে নিম্নমানের সোলার যন্ত্রপাতি ও ভুয়া হিসাব-নিকাশের বদলে শতভাগ স্বচ্ছ ও বৈজ্ঞানিক ইঞ্জিনিয়ারিং সলিউশন প্রদান করা।"
              )}
            </p>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {t(
                "We bridge the gap between high-end international photovoltaic technologies and real Bangladeshi field conditions. By pairing factory-direct Bloomberg Tier-1 N-Type TopCon solar modules and smart grid-tied/hybrid inverters with certified Single-Line Diagrams (SLD), we help consumers achieve substantial electricity bill reductions of 70% to 90% while exporting surplus energy back to the national grid through government net-metering.",
                "আমরা আন্তর্জাতিক মানসম্পন্ন ব্লুমবার্গ টিয়ার-১ এন-টাইপ টপকন সোলার প্যানেল, গ্রিড-টাই ও হাইব্রিড ইনভার্টার এবং সরকারি নেট-মিটারিং নীতিমালা সমন্বয় করে গ্রাহকদের বিদ্যুৎ বিল ৭০% থেকে ৯০% পর্যন্ত হ্রাস নিশ্চিত করি।"
              )}
            </p>

            {/* Core Commitments */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-bg border border-surface-border">
                <ShieldCheck className="w-4 h-4 text-[#0D7A3E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-text-primary block">{t("Zero False Claims", "শতভাগ বাস্তবসম্মত হিসাব")}</span>
                  <span className="text-text-muted text-[11px] leading-tight">
                    {t("Transparent generation modeling based on 4.85 kWh/m²/day irradiance.", "প্রতি কিলোওয়াটের প্রকৃত উৎপাদন হিসাব ও নিরাপদ লোড ক্যালকুলেশন।")}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-bg border border-surface-border">
                <Cpu className="w-4 h-4 text-[#00549A] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-text-primary block">{t("Tier-1 Hardware Only", "শুধুমাত্র টিয়ার-১ গ্রেড পণ্য")}</span>
                  <span className="text-text-muted text-[11px] leading-tight">
                    {t("Direct authorized supply of N-Type TopCon panels & LiFePO4 batteries.", "অরিজিনাল ফ্যাক্টরি ওয়্যারেন্টি সহ টপকন সেল ও লিথিয়াম ব্যাটারি।")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Core Operational Engineering Pillars */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00549A]">
              {t("Our Core Engineering Pillars", "আমাদের মূল প্রকৌশল ভিত্তি")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-text-primary font-sans">
              {t(
                "Why Leading Facilities & Homeowners Trust MAP",
                "গ্রাহক ও শিল্পকারখানা কেন ম্যাপ ইন্টারন্যাশনাল পাওয়ারকে বেছে নেন"
              )}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {t(
                "From initial 3D solar irradiance modeling to bi-directional net-meter integration and 25-year warranty support, our structured execution eliminates all operational risks.",
                "প্রাথমিক ৩ডি শ্যাডো সিমুলেশন থেকে শুরু করে দ্বিমুখী নেট মিটার স্থাপন এবং ২৫ বছরের পারফরম্যান্স নিশ্চিতকরণ পর্যন্ত প্রতিটি ধাপে আমরা দায়বদ্ধ।"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#00549A]/10 text-[#00549A] flex items-center justify-center font-black">
                <Sun className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-text-primary">
                {t("1. 3D Shadow & CAD Analysis", "১. ৩ডি শ্যাডো ও ক্যাড অ্যানালাইসিস")}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {t(
                  "We conduct comprehensive on-site drone and irradiance surveys to measure rooftop tilt angles, RCC load integrity, and eliminate seasonal building shadow losses before installing a single panel.",
                  "ছাদের ৩ডি ড্রোন ম্যাপিং ও রোদের তীব্রতা বিশ্লেষণ করে ছায়ামুক্ত সর্বোচ্চ শক্তি উৎপাদনের নিখুঁত লেআউট ডিজাইন তৈরি করা হয়।"
                )}
              </p>
              <div className="text-[11px] font-semibold text-[#00549A] flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A3E]" />
                <span>{t("PVsyst & CAD Certified", "পিভিসিস্ট ও অটোক্যাড সনদ")}</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#0D7A3E]/10 text-[#0D7A3E] flex items-center justify-center font-black">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-text-primary">
                {t("2. Tier-1 Direct Supply Chain", "২. টিয়ার-১ সরাসরি যন্ত্রপাতি সরবরাহ")}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {t(
                  "Factory-fresh Bloomberg Tier-1 N-Type TopCon bifacial modules (585W+), German-engineered hybrid and on-grid inverters, Class-II DC surge arresters, and cyclone-rated AL6005-T5 aluminum mounting racks.",
                  "এন-টাইপ টপকন সোলার প্যানেল, জার্মান ও গ্লোবাল স্ট্যান্ডার্ড ইনভার্টার, বজ্রপাত নিরোধক এসপিডি এবং উচ্চমাত্রার মাউন্টিং সামগ্রী।"
                )}
              </p>
              <div className="text-[11px] font-semibold text-[#0D7A3E] flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A3E]" />
                <span>{t("25-Yr Linear Warranty", "২৫ বছরের উৎপাদন ওয়ারেন্টি")}</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-text-primary">
                {t("3. Net-Metering Authorization", "৩. সরকারি নেট মিটারিং অনুমোদন")}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {t(
                  "Complete end-to-end liaison with SREDA, BREB (Palli Bidyut), BPDB, DESCO, DPDC, and NESCO. We prepare certified Single-Line Diagrams (SLD) and manage all utility testing for bi-directional meter roll-back.",
                  "পল্লী বিদ্যুৎ, ডেসকো, বিপিডিবি বা নেসকোর সাথে সকল দাপ্তরিক ও কারিগরি সংযোগ সমন্বয় করে দ্বিমুখী নেট মিটার চালু করার দায়িত্ব আমাদের।"
                )}
              </p>
              <div className="text-[11px] font-semibold text-amber-600 flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A3E]" />
                <span>{t("100% Policy Compliant", "শতভাগ সরকারি নীতিমালা অনুমোদিত")}</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-2xl border border-surface-border shadow-card hover:shadow-card-hover transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-black">
                <Wrench className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-text-primary">
                {t("4. Ground Support in Kurigram & Dhaka", "৪. কুড়িগ্রাম ও ঢাকায় নিজস্ব টিম")}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {t(
                  "Unlike remote brokers, our certified technical teams are permanently stationed in Kurigram (Hotel Serity area) and Dhaka (Mirpur 1), offering scheduled thermographic maintenance and rapid 24/7 emergency dispatch.",
                  "কুড়িগ্রাম ও ঢাকায় নিজস্ব অফিস ও কারিগরি টিম থাকায় যেকোনো সেবা বা রক্ষণাবেক্ষণে তাৎক্ষণিক উপস্থিত হয়ে দীর্ঘমেয়াদি সেবা প্রদান করি।"
                )}
              </p>
              <div className="text-[11px] font-semibold text-sky-600 flex items-center gap-1 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A3E]" />
                <span>{t("24/7 Field Assistance", "সার্বক্ষণিক টেকনিক্যাল ব্যাকআপ")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Impact Metrics */}
        <section className="bg-gradient-to-r from-[#071E3D] to-[#0A386D] text-white p-5 sm:p-8 md:p-10 rounded-3xl border border-blue-900 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 text-center">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1 flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-yellow font-sans block">25 Yrs</span>
              <p className="text-xs text-slate-300 font-medium">
                {t("Linear Performance Warranty", "লিনিয়ার পারফরম্যান্স ওয়ারেন্টি")}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1 flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-emerald-400 font-sans block">4.85</span>
              <p className="text-xs text-slate-300 font-medium">
                {t("kWh/m²/day Peak Yield Benchmark", "প্রতিদিন সৌর উৎপাদন বেঞ্চমার্ক")}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1 flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-sky-400 font-sans block">2 Hubs</span>
              <p className="text-xs text-slate-300 font-medium">
                {t("Kurigram Regional & Dhaka Office", "কুড়িগ্রাম ও ঢাকা রিজিওনাল সেন্টার")}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1 flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 font-sans block">&lt;1.0 Ω</span>
              <p className="text-xs text-slate-300 font-medium">
                {t("Earthing Resistance Standard", "আন্তর্জাতিক মানের নিরাপদ আর্থিং")}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#EBF4FA] p-8 rounded-3xl border border-blue-200/80 shadow-card space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#00549A] text-brand-yellow flex items-center justify-center shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-[#071E3D] font-sans">
              {t("Our Mission", "আমাদের মিশন")}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {t(
                "To accelerate Bangladesh's clean energy transition by delivering transparent, high-yield solar power solutions to residential rooftops, commercial establishments, industries, and agricultural water pumps—backed by verified engineering calculations and lifelong local technical care.",
                "সঠিক ইঞ্জিনিয়ারিং, আন্তর্জাতিক মানের ইকুইপমেন্ট ও আজীবন স্থানীয় সার্ভিসিং নিশ্চয়তার মাধ্যমে বাংলাদেশের প্রতিটি প্রান্তে অর্থনৈতিকভাবে সাশ্রয়ী ও পরিবেশবান্ধব সৌরশক্তি ছড়িয়ে দেওয়া।"
              )}
            </p>
          </div>

          <div className="bg-[#EAF5EE] p-8 rounded-3xl border border-emerald-200/80 shadow-card space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0D7A3E] text-white flex items-center justify-center shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-text-primary font-sans">
              {t("Our Vision", "আমাদের ভিশন")}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {t(
                "To stand as Bangladesh's most reputable clean-energy EPC and equipment provider, setting the benchmark for ethical solar engineering, zero false claims, and measurable contribution to national energy independence.",
                "বাংলাদেশের শীর্ষস্থানীয় ও সর্বাধিক নির্ভরযোগ্য সোলার সলিউশন কোম্পানি হিসেবে নিজেকে প্রতিষ্ঠিত করা, যা গুণগত মান ও নৈতিক ব্যবসায়িক চর্চার মাধ্যমে জাতীয় অর্থনীতি ও গ্রিন এনার্জি বিপ্লবে নেতৃত্ব দেবে।"
              )}
            </p>
          </div>
        </div>

        {/* Regional Hubs & Direct Contact Cards */}
        <section className="bg-white rounded-3xl border border-surface-border p-6 sm:p-10 shadow-card space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00549A]">
              {t("Regional Operational Network", "আঞ্চলিক উপস্থিতি ও অফিসসমূহ")}
            </span>
            <h3 className="text-2xl font-black text-text-primary font-sans">
              {t("Visit or Contact Our Strategic Centers", "সরাসরি যোগাযোগ করুন আমাদের অফিসে")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kurigram Hub */}
            <div className="p-6 rounded-2xl bg-surface-bg border border-surface-border space-y-3 hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  {t("Northern Regional Hub", "উত্তরবঙ্গ রিজিওনাল হাব")}
                </span>
                <span className="text-xs text-text-muted">{t("Serving Kurigram & Rangpur", "কুড়িগ্রাম ও রংপুর বিভাগ")}</span>
              </div>
              <h4 className="font-bold text-base text-text-primary">
                {COMPANY_INFO.offices[0].name}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                <MapPin className="w-3.5 h-3.5 inline mr-1 text-emerald-600" />
                {COMPANY_INFO.offices[0].address}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Dhaka Office */}
            <div className="p-6 rounded-2xl bg-surface-bg border border-surface-border space-y-3 hover:border-blue-300 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {t("Corporate & Project Office", "কর্পোরেট ও প্রজেক্ট অফিস")}
                </span>
                <span className="text-xs text-text-muted">{t("Serving Dhaka Division", "ঢাকা ও সংলগ্ন অঞ্চল")}</span>
              </div>
              <h4 className="font-bold text-base text-text-primary">
                {COMPANY_INFO.offices[1].name}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#00549A]" />
                {COMPANY_INFO.offices[1].address}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-3.5 py-1.5 rounded-lg bg-[#00549A] hover:bg-[#071E3D] text-white font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <Link
                  href="/contact"
                  className="px-3.5 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-text-primary font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{t("Get Directions", "ম্যাপ লোকেশন")}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#0D7A3E] hover:bg-[#0a6332] text-white rounded-xl font-bold text-sm shadow-md transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>{t("Request Free Rooftop Assessment", "বিনামূল্যে সাইট ভিজিট ও অ্যাসেসমেন্ট")}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-sm shadow-md transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>{t("Instant WhatsApp Inquiry", "সরাসরি হোয়াটসঅ্যাপে যোগাযোগ")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
