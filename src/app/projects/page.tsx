"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Zap, ShieldCheck, ArrowRight, Sun, Calendar, CheckCircle2 } from "lucide-react";
import { PROJECTS_DATA, ProjectItem } from "@/data/projectsData";
import { useQuoteModal } from "@/components/AppShell";
import { useLanguage } from "@/components/LanguageContext";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [divisionFilter, setDivisionFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesDiv = divisionFilter === "all" || p.division === divisionFilter;
    const matchesCat = categoryFilter === "all" || p.category === categoryFilter;
    return matchesDiv && matchesCat;
  });

  return (
    <div className="min-h-screen bg-surface-bg pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-deep to-brand-primary text-white py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-brand-yellow border border-white/15">
            <Sun className="w-3.5 h-3.5" />
            <span>{t("Verified Engineering Records", "বাস্তবায়িত প্রকল্পের রেকর্ড")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight">
            {t("Our Solar Projects Portfolio", "আমাদের সোলার প্রকল্পসমূহ")}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t(
              "Delivering measurable clean power across Kurigram, Rangpur Division, and Dhaka. Explore our executed residential, commercial, industrial, and agricultural installations.",
              "কুড়িগ্রাম, রংপুর ও ঢাকায় সফলভাবে বাস্তবায়িত আবাসিক, বাণিজ্যিক, মেগা ইন্ডাস্ট্রিয়াল ও সোলার সেচ পাম্পের বাস্তব চিত্র।"
            )}
          </p>

          {/* Division Filter */}
          <div className="pt-4 flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Regions", labelBn: "সকল অঞ্চল" },
              { id: "Rangpur", label: "Kurigram & Rangpur Hub", labelBn: "কুড়িগ্রাম ও রংপুর হাব" },
              { id: "Dhaka", label: "Dhaka Projects", labelBn: "ঢাকা প্রকল্প" },
            ].map((div) => (
              <button
                key={div.id}
                type="button"
                onClick={() => setDivisionFilter(div.id)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  divisionFilter === div.id
                    ? "bg-brand-yellow text-brand-deep shadow"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {language === "bn" ? div.labelBn : div.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-surface-border overflow-hidden shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-deep/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-md">
                    {proj.systemType}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand-yellow text-brand-deep text-xs font-black px-3 py-1 rounded-md shadow-sm">
                    {proj.capacity}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-brand-primary font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{proj.location}</span>
                  </div>

                  <h2 className="text-xl font-bold text-text-primary">
                    {language === "bn" ? proj.titleBn : proj.title}
                  </h2>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {language === "bn" ? proj.summaryBn : proj.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {proj.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs Grid */}
                  <div className="bg-surface-bg p-3 rounded-xl border border-surface-border grid grid-cols-2 gap-2 text-xs pt-3">
                    {proj.specs.map((s, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] text-text-muted block">{s.label}:</span>
                        <span className="font-semibold text-text-primary">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openQuoteModal({ solution: proj.systemType })}
                  className="w-full py-2.5 px-4 bg-surface-blue hover:bg-brand-primary hover:text-white text-brand-primary rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{t("Request Assessment for Similar Project", "অনুরূপ প্রকল্পের জন্য পরামর্শ নিন")}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
