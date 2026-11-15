"use client";

import React, { useState } from "react";
import { Cpu, ShieldCheck, ArrowRight, Zap, CheckCircle2, Phone, Search } from "lucide-react";
import { PRODUCTS_DATA, SolarProduct } from "@/data/productsData";
import { VisualCardImage } from "@/components/VisualCardImage";
import { useQuoteModal } from "@/components/AppShell";
import { useLanguage } from "@/components/LanguageContext";
import { COMPANY_INFO } from "@/data/companyData";

export default function ProductsPage() {
  const { t, language } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-surface-bg pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-deep to-brand-primary text-white py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-brand-yellow border border-white/15">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t("Verified Equipment Supply", "সার্টিফাইড সোলার যন্ত্রপাতি")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight">
            {t("Solar Products & Components", "সোলার যন্ত্রপাতি ও সরঞ্জাম")}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t(
              "Genuine Tier-1 solar modules, on-grid & hybrid inverters, LiFePO4 batteries, and heavy-duty mounting accessories with verified factory warranties.",
              "আন্তর্জাতিক মানের সোলার প্যানেল, ইনভার্টার, লিথিয়াম ব্যাটারি ও মাউন্টিং সামগ্রী।"
            )}
          </p>

          {/* Search & Filter Bar */}
          <div className="pt-4 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Equipment", labelBn: "সকল পণ্য" },
                { id: "panels", label: "Solar Panels", labelBn: "সোলার প্যানেল" },
                { id: "inverters", label: "Inverters", labelBn: "ইনভার্টার" },
                { id: "batteries", label: "Batteries", labelBn: "ব্যাটারি" },
                { id: "pumps", label: "Solar Pumps", labelBn: "সেচ পাম্প" },
                { id: "accessories", label: "Accessories", labelBn: "মাউন্টিং ও এক্সেসরিজ" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-brand-yellow text-brand-deep shadow-sm"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {language === "bn" ? cat.labelBn : cat.label}
                </button>
              ))}
            </div>

            {/* Quick Search */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-slate-300 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t("Search equipment...", "যন্ত্রপাতি খুঁজুন...")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white/10 text-white placeholder-slate-300 text-xs rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-surface-border">
            <p className="text-text-secondary">{t("No products matched your search.", "কোনো পণ্য পাওয়া যায়নি।")}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                id={prod.category}
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

                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                        {prod.manufacturer} • Model: {prod.model}
                      </span>
                      <h2 className="font-bold text-base text-text-primary mt-0.5">
                        {prod.name}
                      </h2>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed">
                      {prod.shortDesc}
                    </p>

                    {/* Technical Specifications */}
                    <div className="bg-surface-bg rounded-lg p-3 border border-surface-border text-xs space-y-1.5">
                      <span className="font-bold text-brand-deep text-[11px] block border-b border-slate-200 pb-1">
                        {t("Key Technical Parameters", "কারিগরি স্পেসিফিকেশন")}
                      </span>
                      {prod.specs.slice(0, 4).map((s, idx) => (
                        <div key={idx} className="flex justify-between items-center text-[11px]">
                          <span className="text-text-muted">{s.label}:</span>
                          <span className="font-semibold text-text-primary text-right">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Warranty */}
                    <div className="text-[11px] text-brand-green font-semibold flex items-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{prod.warranty}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => openQuoteModal({ productName: prod.name })}
                    className="w-full py-2.5 px-4 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>{t("Request Product Price & Availability", "মূল্য ও প্রাপ্যতা জানতে চান")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
