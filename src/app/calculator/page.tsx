"use client";

import React from "react";
import { Calculator, Sun, Zap, Info, ShieldCheck } from "lucide-react";
import { SolarCalculatorWidget } from "@/components/SolarCalculatorWidget";
import { useQuoteModal } from "@/components/AppShell";
import { useLanguage } from "@/components/LanguageContext";

export default function CalculatorPage() {
  const { t } = useLanguage();
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-surface-bg pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-deep to-brand-primary text-white py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-brand-yellow border border-white/15">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t("Phase Two Interactive Tool", "সোলার সিমুলেশন ও সাশ্রয় ক্যালকুলেটর")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight">
            {t("Solar Requirement & ROI Calculator", "সোলার চাহিদা ও সাশ্রয় ক্যালকুলেটর")}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t(
              "Estimate your indicative solar system capacity, monthly unit generation, installation cost, and payback period based on Bangladesh electricity tariffs and regional solar irradiation.",
              "আপনার বর্তমান বিদ্যুৎ বিল ও ছাদের পরিমাপ দিয়ে এক ক্লিকে বের করুন আপনার কত কিলোওয়াট সোলার প্রয়োজন এবং কত টাকা সাশ্রয় হবে।"
            )}
          </p>
        </div>
      </section>

      {/* Calculator Body */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <SolarCalculatorWidget
          standalone={true}
          onQuoteTrigger={({ bill, capacity, systemType }) =>
            openQuoteModal({ bill, capacity, solution: systemType })
          }
        />

        {/* Technical Calculation Explanations */}
        <div className="mt-12 bg-white rounded-2xl border border-surface-border p-6 md:p-8 shadow-card space-y-6">
          <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
            <Info className="w-5 h-5 text-brand-primary" />
            <span>{t("How MAP Computes Your Solar Savings in Bangladesh", "হিসাবের কারিগরি ভিত্তি ও সূত্র")}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-text-secondary">
            <div className="space-y-2 p-4 bg-surface-bg rounded-xl border border-surface-border">
              <h3 className="font-bold text-sm text-text-primary">{t("1. Solar Irradiation", "১. দৈনিক সৌর বিকিরণ")}</h3>
              <p>
                {t(
                  "Bangladesh receives an average of 4.4 to 4.8 Peak Sun Hours (PSH) per day. In Kurigram and Rangpur, northern solar yield remains high from February through October.",
                  "বাংলাদেশে গড়ে ৪.৪ থেকে ৪.৮ পিক সান আওয়ার পাওয়া যায়। কুড়িগ্রাম ও রংপুর বিভাগে দীর্ঘ সময় পর্যাপ্ত রোদ থাকে।"
                )}
              </p>
            </div>

            <div className="space-y-2 p-4 bg-surface-bg rounded-xl border border-surface-border">
              <h3 className="font-bold text-sm text-text-primary">{t("2. BERC Electricity Tariffs", "২. বিইআরসি বিদ্যুৎ ট্যারিফ")}</h3>
              <p>
                {t(
                  "Calculated against current Bangladesh Energy Regulatory Commission weighted tariffs for residential (~BDT 9.8/unit), commercial (~BDT 13.5/unit), and industrial (~BDT 11.2/unit).",
                  "বাংলাদেশ এনার্জি রেগুলেটরি কমিশনের বর্তমান ট্যারিফ স্ল্যাব অনুযায়ী সাশ্রয় হিসেব করা হয়েছে।"
                )}
              </p>
            </div>

            <div className="space-y-2 p-4 bg-surface-bg rounded-xl border border-surface-border">
              <h3 className="font-bold text-sm text-text-primary">{t("3. 25-Year Long-Term ROI", "৩. ২৫ বছরের অর্থনৈতিক সুবিধা")}</h3>
              <p>
                {t(
                  "Solar panels carry a 25-year linear generation warranty. Once the system pays for itself in 3.8 to 5 years, your building enjoys virtually free clean electricity for the next 20 years.",
                  "৩.৫ থেকে ৫ বছরে সিস্টেমের পুরো খরচ উঠে আসে। এরপর পরবর্তী ২০ বছর বিনামূল্যে বিদ্যুৎ উৎপাদন উপভোগ করতে পারবেন।"
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
