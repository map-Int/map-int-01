"use client";

import React, { useState } from "react";
import { BookOpen, HelpCircle, FileText, ChevronDown, CheckCircle2, ArrowRight, Sun, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { useQuoteModal } from "@/components/AppShell";

export default function ResourcesPage() {
  const { t, language } = useLanguage();
  const { openQuoteModal } = useQuoteModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does Net Metering work in Bangladesh?",
      qBn: "বাংলাদেশে নেট মিটারিং কীভাবে কাজ করে?",
      a: "Under the Net Energy Metering Guidelines approved by the Power Division of Bangladesh, commercial, industrial, and 3-phase residential consumers can connect their solar systems to the utility grid (BREB, BPDB, DESCO, DPDC, etc.). When your solar system produces more power than you consume during the daytime, the excess electricity flows into the national grid and runs your bi-directional meter backwards. At the end of the billing cycle, you only pay for the net units consumed, or receive credits carried over to future bills.",
      aBn: "বাংলাদেশ সরকারের নেট মিটারিং নীতিমালার আওতায় দিনের বেলায় অতিরিক্ত উৎপাদিত সৌর বিদ্যুৎ সরাসরি সরকারি গ্রিডে চলে যায়। আপনার বিশেষ দ্বি-মুখী (Bi-directional) মিটার এই বিদ্যুৎ হিসাব করে। ফলে মাস শেষে উৎপাদিত বিদ্যুৎ বাদ দিয়ে শুধু অবশিষ্ট ব্যবহারের বিল দিতে হয়, কিংবা অতিরিক্ত বিদ্যুৎ পরের মাসের বিলে ক্রেডিট হিসেবে জমা থাকে।"
    },
    {
      q: "What is the difference between an On-Grid and an Off-Grid solar system?",
      qBn: "অন-গ্রিড এবং অফ-গ্রিড সোলার সিস্টেমের মধ্যে মূল পার্থক্য কী?",
      a: "An On-Grid system does not use batteries; it operates in direct synchronization with the grid. It is the most economical solution and offers the fastest payback (3.5 to 5 years). An Off-Grid or Hybrid system incorporates battery storage (such as LiFePO4 Lithium) to store daytime solar energy for use at night or during power outages, making it ideal for areas with frequent load-shedding or remote rural locations.",
      aBn: "অন-গ্রিড সিস্টেমে কোনো ব্যাটারি থাকে না, এটি সরাসরি জাতীয় গ্রিডের সাথে সমন্বিতভাবে চলে। এর প্রাথমিক খরচ কম এবং ৩-৫ বছরে লাভজনক হয়। অন্যদিকে অফ-গ্রিড বা হাইব্রিড সিস্টেমে লিথিয়াম ব্যাটারি থাকে, যা রাতে বা লোডশেডিংয়ের সময় সার্বক্ষণিক ব্যাকআপ নিশ্চিত করে।"
    },
    {
      q: "How much rooftop area is required for a solar installation?",
      qBn: "সোলার প্যানেল বসানোর জন্য ছাদের কতটা জায়গার প্রয়োজন হয়?",
      a: "As a rule of thumb, approximately 80 to 90 square feet of shadow-free rooftop space is required for every 1 kilowatt peak (kWp) of solar capacity using modern high-efficiency 550W+ Tier-1 Monocrystalline panels. For example, a 5 kWp residential system requires around 400 to 450 sq.ft of clear roof space.",
      aBn: "আধুনিক উচ্চ ক্ষমতাসম্পন্ন মনো-ক্রিস্টালাইন প্যানেলের জন্য প্রতি ১ কিলোওয়াট ক্ষমতার বিপরীতে প্রায় ৮০ থেকে ৯০ বর্গফুট রোদযুক্ত ছাদের প্রয়োজন হয়। উদাহরণস্বরূপ, একটি ৫ কিলোওয়াট সিস্টেমের জন্য প্রায় ৪০০-৪৫০ বর্গফুট ছাদ যথেষ্ট।"
    },
    {
      q: "Can I run Air Conditioners (ACs) and heavy machinery on solar?",
      qBn: "সোলার দিয়ে কি এয়ার কন্ডিশনার (এসি) বা ভারী মোটর চালানো সম্ভব?",
      a: "Yes, absolutely! On-grid systems easily support inductive loads such as 1.5-ton to 2-ton inverter ACs, industrial motors, and water pumps. The solar electricity seamlessly supplements utility power. If running on battery (off-grid), the hybrid inverter and battery bank must be sized adequately to handle the compressor surge current.",
      aBn: "হ্যাঁ, অবশ্যই! অন-গ্রিড সিস্টেমে ১.৫ বা ২ টনের ইনভার্টার এসি, পানির পাম্প ও কারখানার মোটর অনায়াসে চলে। সোলার বিদ্যুৎ গ্রিডের বিদ্যুতের সাথে মিশে স্বাভাবিকভাবে পুরো ভবনের লোড পরিচালনা করে।"
    },
    {
      q: "What warranties are provided with MAP solar installations?",
      qBn: "ম্যাপ সোলার ইন্সটলেশনে কী ধরনের ওয়ারেন্টি প্রদান করা হয়?",
      a: "Our Tier-1 solar modules come with a 12-year product workmanship warranty and a 25-year linear power output performance warranty (>84.8% yield at year 25). Grid-tie inverters carry a 5-year replacement warranty, LiFePO4 lithium batteries come with 5-year warranties (designed for 6,000+ cycles / 10-15 years), and our mounting structures include a 15-year anti-corrosion guarantee.",
      aBn: "আমাদের সোলার প্যানেলে রয়েছে ২৫ বছরের পারফরম্যান্স ওয়ারেন্টি ও ১২ বছরের প্রোডাক্ট ওয়ারেন্টি। গ্রিড-টাই ইনভার্টারে ৫ বছরের রিপ্লেসমেন্ট এবং লিথিয়াম ব্যাটারিতে ৫ বছরের ওয়ারেন্টি (যা ১০-১৫ বছর সেবা দেয়)।"
    },
    {
      q: "How does cloudy or rainy weather affect solar output in Bangladesh?",
      qBn: "মেঘলা বা বর্ষার দিনে সোলার বিদ্যুৎ উৎপাদন কেমন হয়?",
      a: "Solar panels generate power from ambient daylight (solar irradiance), not heat. On overcast or rainy days, panels continue to produce between 25% and 40% of their peak rated output through diffused light. On-grid systems automatically draw the deficit balance from the utility grid so your power never blinks.",
      aBn: "সোলার প্যানেল সূর্যের আলোর বিকিরণ (ফোটন) থেকে বিদ্যুৎ তৈরি করে, তাপ থেকে নয়। ফলে মেঘলা বা বৃষ্টির দিনেও প্রায় ২৫% থেকে ৪০% বিদ্যুৎ উৎপাদিত হয়। অন-গ্রিড সিস্টেমে বাকিটুকু স্বয়ংক্রিয়ভাবে মেইন গ্রিড থেকে সরবরাহ হয়।"
    }
  ];

  return (
    <div className="min-h-screen bg-surface-bg pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-brand-deep to-brand-primary text-white py-16 md:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-brand-yellow border border-white/15">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t("Knowledge Base & Consumer Education", "সোলার গাইড ও তথ্যভাণ্ডার")}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight">
            {t("Solar Energy Resources & FAQs", "সোলার গাইড ও সাধারণ জিজ্ঞাসা")}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t(
              "Clear, engineering-backed information on Bangladesh Net Metering policies, system sizing, equipment standards, and return on investment.",
              "বাংলাদেশের নেট মিটারিং নীতিমালা, ছাদ মূল্যায়ন ও সোলার সিস্টেম নির্বাচনের প্রয়োজনীয় নির্দেশিকা।"
            )}
          </p>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-12 space-y-12">
        {/* Net Metering Policy Guide in Bangladesh (Section 13.1) */}
        <section id="policy" className="bg-white rounded-2xl border border-surface-border p-6 md:p-8 shadow-card space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-surface-blue text-brand-primary flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-brand-primary uppercase tracking-wider block">
                {t("Regulatory Blueprint", "সরকারি নীতিমালা")}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                {t("Bangladesh Net Energy Metering Guidelines", "বাংলাদেশ নেট এনার্জি মিটারিং নীতিমালা")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-text-secondary pt-2">
            <div className="p-4 bg-surface-bg rounded-xl border border-surface-border space-y-2">
              <h3 className="font-bold text-sm text-brand-deep">{t("Capacity Limits", "অনুমোদিত ক্ষমতা")}</h3>
              <p>
                {t(
                  "According to SREDA / BERC guidelines, consumers can install solar capacity up to 70% of their sanctioned utility load, ensuring distribution transformer safety.",
                  "গ্রাহক তার অনুমোদিত বা স্যাংশন লোডের সর্বোচ্চ ৭০% পর্যন্ত অন-গ্রিড সোলার সিস্টেম স্থাপন করতে পারবেন।"
                )}
              </p>
            </div>

            <div className="p-4 bg-surface-bg rounded-xl border border-surface-border space-y-2">
              <h3 className="font-bold text-sm text-brand-deep">{t("Bi-Directional Metering", "দ্বিমুখী ডিজিটাল মিটার")}</h3>
              <p>
                {t(
                  "The distribution utility (BREB, BPDB, DESCO, DPDC, etc.) tests and installs a Class 0.5S or 0.2S smart bi-directional meter recording export vs import kWh.",
                  "বিতরণ সংস্থা কর্তৃক অনুমোদিত বিশেষ ডিজিটাল মিটার বসানো হয় যা রপ্তানিকৃত ও আমদানিকৃত বিদ্যুতের নিখুঁত হিসাব রাখে।"
                )}
              </p>
            </div>

            <div className="p-4 bg-surface-bg rounded-xl border border-surface-border space-y-2">
              <h3 className="font-bold text-sm text-brand-deep">{t("MAP Facilitation", "ম্যাপের সম্পূর্ণ সহায়তা")}</h3>
              <p>
                {t(
                  "MAP prepares all engineering single-line diagrams (SLD), protection settings, and coordinates official testing with PBS / utility engineers.",
                  "ম্যাপের প্রকৌশলীরা প্রয়োজনীয় নকশা ও কাগজপত্র প্রস্তুত করে সরকারি অনুমোদন প্রক্রিয়া সম্পন্ন করে দেন।"
                )}
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section id="faq" className="bg-white rounded-2xl border border-surface-border p-6 md:p-8 shadow-card space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-primary">
              {t("Frequently Asked Questions", "সাধারণ প্রশ্নোত্তর")}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
              {t("Everything You Need to Know About Solar", "সোলার নিয়ে আপনার সব প্রশ্নের উত্তর")}
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-surface-border rounded-xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left bg-surface-bg hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-text-primary transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{language === "bn" ? faq.qBn : faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-brand-primary flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-3 bg-white text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-surface-border animate-in fade-in duration-200">
                      <p>{language === "bn" ? faq.aBn : faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-surface-blue p-8 rounded-2xl border border-emerald-200 text-center space-y-4">
          <h3 className="text-xl font-bold text-brand-deep">
            {t("Have a specific technical question?", "আপনার কি কোনো বিশেষ কারিগরি জিজ্ঞাসা আছে?")}
          </h3>
          <p className="text-xs text-text-secondary max-w-md mx-auto">
            {t(
              "Speak directly with our engineering team in Kurigram or Dhaka for customized advice on your building.",
              "আমাদের অভিজ্ঞ সোলার প্রকৌশলীদের সাথে সরাসরি কথা বলে আপনার ভবনের জন্য সঠিক সিদ্ধান্ত নিন।"
            )}
          </p>
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-bold text-xs inline-flex items-center gap-2 transition-colors shadow-sm"
          >
            <span>{t("Ask a Solar Engineer", "সোলার ইঞ্জিনিয়ারের সাথে কথা বলুন")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
