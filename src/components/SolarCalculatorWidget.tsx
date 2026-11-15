"use client";

import React, { useState, useId } from "react";
import { Calculator, ArrowRight, Zap, Sun, DollarSign, Leaf, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

interface CalculatorProps {
  onQuoteTrigger?: (params: { bill: number; capacity: number; systemType: string }) => void;
  standalone?: boolean;
}

export const SolarCalculatorWidget: React.FC<CalculatorProps> = ({ onQuoteTrigger, standalone = false }) => {
  const { t, language } = useLanguage();
  const billInputId = useId();
  const roofInputId = useId();
  const customerTypeId = useId();
  const locationId = useId();

  // Inputs
  const [monthlyBill, setMonthlyBill] = useState<number>(8500); // BDT
  const [customerType, setCustomerType] = useState<"residential" | "commercial" | "industrial" | "agricultural">("residential");
  const [roofArea, setRoofArea] = useState<number>(600); // Sq Ft
  const [location, setLocation] = useState<string>("Rangpur");
  const [systemPreference, setSystemPreference] = useState<"on-grid" | "hybrid">("on-grid");

  // Tariffs per unit (approximate BERC weighted tariffs)
  const tariffRates = {
    residential: 9.8,
    commercial: 13.5,
    industrial: 11.2,
    agricultural: 5.5,
  };

  const currentTariff = tariffRates[customerType];

  // Estimated Monthly Energy Consumption in kWh
  const estimatedUnitsConsumed = Math.round(monthlyBill / currentTariff);

  // Peak Sun Hours (Bangladesh average: Kurigram & Rangpur ~4.6 PSH, Dhaka ~4.4 PSH)
  const peakSunHours = location === "Kurigram" || location === "Rangpur" ? 4.6 : 4.4;
  const systemEfficiencyFactor = 0.82; // 18% system losses (temperature, cabling, inverter)

  // Target generation to cover 80% of bill (optimum economic sizing)
  const targetMonthlyKwh = estimatedUnitsConsumed * 0.85;
  const kwhPerKwpPerMonth = peakSunHours * 30 * systemEfficiencyFactor; // ~113 kWh / kWp / mo

  // Indicative capacity needed based on consumption
  let calculatedKwp = targetMonthlyKwh / kwhPerKwpPerMonth;

  // Rooftop limitation check: ~90 sq ft per kWp
  const maxKwpFromRoof = roofArea / 90;
  const recommendedCapacityKwp = Math.max(1, Math.min(Math.round(calculatedKwp * 10) / 10, Math.round(maxKwpFromRoof * 10) / 10));

  // Generation from recommended system
  const monthlyGenerationKwh = Math.round(recommendedCapacityKwp * kwhPerKwpPerMonth);
  const monthlySavingsBdt = Math.min(monthlyBill * 0.9, Math.round(monthlyGenerationKwh * currentTariff));
  const annualSavingsBdt = monthlySavingsBdt * 12;

  // Approximate Turnkey Cost (BDT per kWp in Bangladesh)
  // On-grid: ~70,000 - 80,000 BDT/kWp; Hybrid with LiFePO4: ~110,000 - 125,000 BDT/kWp
  const costPerKwp = systemPreference === "on-grid" ? 75000 : 115000;
  const approximateCostBdt = Math.round(recommendedCapacityKwp * costPerKwp);

  // Payback period in years
  const paybackYears = (approximateCostBdt / (annualSavingsBdt || 1)).toFixed(1);

  // 25-Year Net Lifetime Financial Savings (with 0.5% module degradation accounted)
  const lifetimeSavingsBdt = Math.round(annualSavingsBdt * 22 - approximateCostBdt);

  // Carbon offset: ~0.82 kg CO2 per kWh
  const annualCo2OffsetTons = ((monthlyGenerationKwh * 12 * 0.82) / 1000).toFixed(1);

  return (
    <div className={`bg-white rounded-xl border border-surface-border shadow-card overflow-hidden ${standalone ? "" : "my-6"}`}>
      {/* Widget Header */}
      <div className="bg-gradient-to-r from-[#071E3D] via-[#0A325E] to-[#0A2540] p-6 text-white flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-brand-blue flex items-center justify-center text-brand-yellow">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-sans">
              {t("Solar Requirement & Savings Calculator", "সোলার চাহিদা ও সাশ্রয় ক্যালকুলেটর")}
            </h3>
            <p className="text-sm text-slate-300">
              {t("Calibrated for Bangladesh utility tariffs, irradiation & rooftop area", "বাংলাদেশের বিদ্যুৎ বিল, রোদ ও ছাদের পরিমাপ অনুযায়ী হিসাব")}
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-2 bg-blue-900/60 px-3.5 py-1.5 rounded-full border border-blue-400/40 text-xs text-blue-100">
          <Sun className="w-3.5 h-3.5 text-brand-yellow" />
          <span>{t("Northern Bangladesh / Dhaka Solar Data", "উত্তরবঙ্গ ও ঢাকা সৌর তথ্য")}</span>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monthly Bill Input */}
          <div className="form-field">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={billInputId} className="text-text-primary font-bold text-sm">
                {t("Average Monthly Electricity Bill (BDT)", "মাসিক গড় বিদ্যুৎ বিল (টাকা)")}
              </label>
              <span className="text-base font-extrabold text-brand-primary bg-surface-blue px-3 py-1 rounded-md">
                ৳ {monthlyBill.toLocaleString("en-BD")}
              </span>
            </div>
            <input
              id={billInputId}
              type="range"
              min="2000"
              max="150000"
              step="1000"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full accent-brand-primary h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-text-muted mt-1 font-medium">
              <span>৳ 2,000</span>
              <span>৳ 50,000</span>
              <span>৳ 1,00,000</span>
              <span>৳ 1,50,000+</span>
            </div>
          </div>

          {/* Customer Segment & System Choice */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-field">
              <label htmlFor={customerTypeId} className="text-text-primary font-semibold text-xs uppercase tracking-wider">
                {t("Property Type", "গ্রাহকের ধরন")}
              </label>
              <select
                id={customerTypeId}
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value as any)}
                className="form-input text-sm font-medium"
              >
                <option value="residential">{t("Residential (Home / Villa / Flat)", "আবাসিক (বাড়ি / ভিলা / ফ্ল্যাট)")}</option>
                <option value="commercial">{t("Commercial (Office / Hotel / Market)", "বাণিজ্যিক (অফিস / হোটেল / মার্কেট)")}</option>
                <option value="industrial">{t("Industrial (Factory / Mill / Cold Storage)", "শিল্পকারখানা (মিল / ফ্যাক্টরি / হিমাগার)")}</option>
                <option value="agricultural">{t("Agricultural (Solar Pump / Irrigation)", "কৃষি (সোলার সেচ পাম্প / খামার)")}</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor={locationId} className="text-text-primary font-semibold text-xs uppercase tracking-wider">
                {t("Region / Division", "এলাকা / বিভাগ")}
              </label>
              <select
                id={locationId}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input text-sm font-medium"
              >
                <option value="Kurigram">Kurigram (কুড়িগ্রাম)</option>
                <option value="Rangpur">Rangpur Division (রংপুর বিভাগ)</option>
                <option value="Dhaka">Dhaka (ঢাকা)</option>
                <option value="Other">Other Districts in Bangladesh (অন্যান্য)</option>
              </select>
            </div>
          </div>

          {/* Rooftop Area & System Architecture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-field">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor={roofInputId} className="text-text-primary font-semibold text-xs uppercase tracking-wider">
                  {t("Available Rooftop Area", "উপলব্ধ ছাদের আয়তন")}
                </label>
                <span className="text-xs font-bold text-text-primary">{roofArea} sq.ft</span>
              </div>
              <input
                id={roofInputId}
                type="range"
                min="200"
                max="10000"
                step="100"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full accent-brand-green h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-text-muted">
                {t("Approx. 80-90 sq ft required per kWp", "প্রতি কিলোওয়াটের জন্য প্রায় ৮০-৯০ বর্গফুট")}
              </span>
            </div>

            <div className="form-field">
              <label className="text-text-primary font-semibold text-xs uppercase tracking-wider mb-2">
                {t("System Architecture", "সিস্টেমের ধরন")}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSystemPreference("on-grid")}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border text-center transition-all ${
                    systemPreference === "on-grid"
                      ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                      : "bg-surface-bg text-text-primary border-surface-border hover:bg-slate-100"
                  }`}
                >
                  {t("On-Grid (Net Metering)", "অন-গ্রিড (নেট মিটারিং)")}
                </button>
                <button
                  type="button"
                  onClick={() => setSystemPreference("hybrid")}
                  className={`py-2 px-3 rounded-lg text-xs font-bold border text-center transition-all ${
                    systemPreference === "hybrid"
                      ? "bg-brand-green text-white border-brand-green shadow-sm"
                      : "bg-surface-bg text-text-primary border-surface-border hover:bg-slate-100"
                  }`}
                >
                  {t("Hybrid + Battery", "হাইব্রিড + ব্যাটারি")}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Assumption Indicators */}
          <div className="p-3 bg-surface-bg rounded-lg border border-surface-border text-xs text-text-secondary flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-brand-primary" />
              <span>{t("BERC Tariff Rate:", "বিদ্যুৎ রেট:")} ~৳{currentTariff}/kWh</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{t("Est. Generation:", "মাসিক উৎপাদন:")} ~{monthlyGenerationKwh} {t("Units", "ইউনিট")}</span>
            </span>
          </div>
        </div>

        {/* Right Outputs / ROI Column */}
        <div className="lg:col-span-5 bg-[#EBF4FA] p-6 rounded-xl border border-blue-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-blue-200 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                {t("Recommended System Sizing", "সুপারিশকৃত সিস্টেম সাইজ")}
              </span>
              <span className="text-2xl font-black text-brand-blue">
                {recommendedCapacityKwp} <span className="text-sm font-bold">kWp</span>
              </span>
            </div>

            {/* Savings Cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white p-3.5 rounded-lg border border-blue-100 shadow-sm">
                <span className="text-[11px] font-semibold text-text-secondary block">
                  {t("Monthly Bill Savings", "মাসিক বিল সাশ্রয়")}
                </span>
                <span className="text-lg font-black text-brand-green">
                  ৳ {monthlySavingsBdt.toLocaleString("en-BD")}
                </span>
                <span className="text-[10px] text-text-muted block mt-0.5">
                  {t("Up to 85% reduction", "৮৫% পর্যন্ত সাশ্রয়")}
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-blue-100 shadow-sm">
                <span className="text-[11px] font-semibold text-text-secondary block">
                  {t("Annual Savings", "বার্ষিক সাশ্রয়")}
                </span>
                <span className="text-lg font-black text-brand-blue">
                  ৳ {annualSavingsBdt.toLocaleString("en-BD")}
                </span>
                <span className="text-[10px] text-text-muted block mt-0.5">
                  {t("Guaranteed clean yield", "পরিচ্ছন্ন বিদ্যুৎ")}
                </span>
              </div>
            </div>

            {/* Financial Metrics */}
            <div className="space-y-2.5 text-xs text-text-primary bg-white/80 p-3.5 rounded-lg border border-blue-100 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">{t("Approx. Turnkey Investment:", "সম্ভাব্য প্রাথমিক ব্যয়:")}</span>
                <span className="font-bold text-text-primary">৳ {approximateCostBdt.toLocaleString("en-BD")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">{t("Estimated Payback Period:", "বিনিয়োগ ফেরতের সময়কাল:")}</span>
                <span className="font-extrabold text-brand-green">{paybackYears} {t("Years", "বছর")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">{t("25-Yr Net Lifetime Profit:", "২৫ বছরে মোট নিট মুনাফা:")}</span>
                <span className="font-extrabold text-brand-primary">৳ {lifetimeSavingsBdt.toLocaleString("en-BD")}</span>
              </div>
              <div className="flex justify-between items-center pt-1.5 border-t border-slate-100">
                <span className="text-text-secondary flex items-center gap-1">
                  <Leaf className="w-3.5 h-3.5 text-brand-green" />
                  <span>{t("Annual CO2 Avoided:", "পরিবেশ রক্ষা (কার্বন হ্রাস):")}</span>
                </span>
                <span className="font-bold text-emerald-700">{annualCo2OffsetTons} {t("Tons / year", "টন / বছর")}</span>
              </div>
            </div>
          </div>

          <div>
            {/* CTA Button */}
            {onQuoteTrigger ? (
              <button
                type="button"
                onClick={() =>
                  onQuoteTrigger({
                    bill: monthlyBill,
                    capacity: recommendedCapacityKwp,
                    systemType: systemPreference === "on-grid" ? "On-Grid Net Metering" : "Hybrid with Battery",
                  })
                }
                className="w-full py-3 px-4 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>{t("Request Official Proposal For This System", "এই সিস্টেমের জন্য অফিসিয়াল কোটেশন নিন")}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href={`/contact?bill=${monthlyBill}&capacity=${recommendedCapacityKwp}&system=${systemPreference}`}
                className="w-full py-3 px-4 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md text-center"
              >
                <span>{t("Request Official Proposal For This System", "এই সিস্টেমের জন্য অফিসিয়াল কোটেশন নিন")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            {/* Mandatory Blueprint Disclaimer (Section 11) */}
            <p className="text-[10px] text-text-muted mt-3 leading-relaxed text-center">
              {t(
                "Disclaimer: Preliminary indicative estimate based on typical Bangladesh irradiation (~4.5 PSH) and standard BERC tariffs. Actual generation, cost, and savings depend on an on-site structural and shading assessment by MAP International Power engineers.",
                "সতর্কবার্তা: এটি একটি আনুমানিক প্রাথমিক মূল্যায়ন। ছাদের গঠন, দিক ও রোদের ওপর ভিত্তি করে চূড়ান্ত উৎপাদন ও ব্যয় নির্ধারিত হবে। সাইট ভিজিটের জন্য যোগাযোগ করুন।"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
