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
  Building,
  Factory,
  Home,
  FileText,
} from "lucide-react";
import { SOLUTIONS_DATA, SolarSolution } from "@/data/solutionsData";
import { VisualCardImage } from "@/components/VisualCardImage";
import { useQuoteModal } from "@/components/AppShell";
import { useLanguage } from "@/components/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export default function SolutionsPage() {
  const { t, language } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [filter, setFilter] = useState<string>("all");

  const filteredSolutions = filter === "all"
    ? SOLUTIONS_DATA
    : SOLUTIONS_DATA.filter((s) => s.category === filter);

  return (
    <div className="min-h-screen bg-surface-bg pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-brand-deep to-brand-primary text-white py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-brand-yellow border border-white/15">
            <Zap className="w-3.5 h-3.5" />
            <span>{t("Complete Turnkey Capabilities", "পূর্ণাঙ্গ সোলার সমাধান")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight">
            {t("Engineered Solar Architectures for Guaranteed Power & Savings", "নিশ্চিত বিদ্যুৎ বিল সাশ্রয় ও টেকসই সোলার আর্কিটেকচার")}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t(
              "Tailored for Bangladesh electricity tariffs, structural loads, and official utility net-metering. Explore our turnkey solutions designed to eliminate high electricity bills forever.",
              "বাংলাদেশের বিদ্যুৎ ট্যারিফ ও সরকারি নেট-মিটারিং নীতিমালা অনুযায়ী প্রণীত। অলস ছাদকে লাভজনক সম্পদে রূপান্তর করতে আমাদের বিশেষায়িত সলিউশনসমূহ এক্সপ্লোর করুন।"
            )}
          </p>

          {/* Filter Bar */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Solutions", labelBn: "সকল সমাধান" },
              { id: "installation", label: "Rooftop Solar", labelBn: "ছাদ সোলার" },
              { id: "systems", label: "On-Grid & Off-Grid", labelBn: "অন-গ্রিড ও অফ-গ্রিড" },
              { id: "agriculture", label: "Agri & Solar Pumps", labelBn: "কৃষি ও সেচ পাম্প" },
              { id: "services", label: "Maintenance & AMC", labelBn: "সার্ভিসিং ও মেরামত" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  filter === tab.id
                    ? "bg-brand-yellow text-brand-deep shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {language === "bn" ? tab.labelBn : tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-12 space-y-12">
        {filteredSolutions.map((sol) => (
          <section
            key={sol.id}
            id={sol.slug}
            className="bg-white rounded-2xl border border-surface-border shadow-card overflow-hidden scroll-mt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 md:p-8">
              {/* Image side (5 cols) with authentic photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-brand-deep/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/20">
                    {sol.category.toUpperCase()}
                  </div>
                </div>

                {/* Key specs pill box */}
                <div className="mt-4 grid grid-cols-2 gap-2 bg-surface-blue p-3.5 rounded-xl border border-emerald-100 text-xs">
                  {sol.keySpecs.map((spec, sIdx) => (
                    <div key={sIdx}>
                      <span className="text-[10px] text-text-muted block">{spec.label}</span>
                      <span className="font-bold text-brand-deep">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text side (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary font-sans">
                    {language === "bn" ? sol.titleBn : sol.title}
                  </h2>
                  <p className="text-sm font-semibold text-brand-primary mt-1">
                    {language === "bn" ? sol.shortDescBn : sol.shortDesc}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {sol.fullDesc}
                </p>

                {/* Core Benefits */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary">
                    {t("Key Advantages & Returns", "প্রধান সুবিধাসমূহ")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {sol.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal for */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-primary mb-1.5">
                    {t("Recommended Applications", "উপযুক্ত প্রতিষ্ঠান ও ক্ষেত্র")}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.idealFor.map((app, aIdx) => (
                      <span
                        key={aIdx}
                        className="bg-surface-bg border border-surface-border text-text-primary text-[11px] px-2.5 py-1 rounded-md"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({ solution: sol.title })}
                    className="w-full sm:w-auto px-6 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <span>{t("Request Proposal For This Solution", "এই সমাধানের জন্য কোটেশন নিন")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-text-primary rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-primary" />
                    <span>{t("Talk to an Engineer", "প্রকৌশলীর সাথে কথা বলুন")}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
