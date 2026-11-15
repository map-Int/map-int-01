"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Sun, Zap, Globe } from "lucide-react";
import { MapLogo } from "./MapLogo";
import { COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "./LanguageContext";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-gradient-to-b from-[#071E3D] via-[#052219] to-[#03140F] text-slate-300 pt-16 pb-24 md:pb-14 border-t border-blue-900/60">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/50">
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <MapLogo variant="dark" size="md" />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm pt-2">
              {t(
                "Complete solar energy solutions for homes, businesses, industries, and agriculture in Bangladesh. Precision engineering design, Tier-1 equipment supply, net-metering approvals, and dedicated local maintenance.",
                "বাংলাদেশের আবাসিক, বাণিজ্যিক, শিল্পকারখানা ও কৃষিখাতে পূর্ণাঙ্গ সোলার এনার্জি সলিউশন। ইঞ্জিনিয়ারিং ডিজাইন, উন্নত যন্ত্রপাতি, নেট মিটারিং অনুমোদন ও নির্ভরযোগ্য টেকনিক্যাল সার্ভিস।"
              )}
            </p>

            {/* Social Media Links: Facebook, WhatsApp, Mail, LinkedIn, YouTube */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
                aria-label="Visit MAP International Power on Facebook"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-colors border border-[#25D366]/40"
                aria-label="Chat with MAP International Power on WhatsApp"
                title="WhatsApp Direct Chat"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-primary text-white flex items-center justify-center transition-colors"
                aria-label="Email MAP International Power"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-colors"
                aria-label="Visit MAP International Power on LinkedIn"
                title="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-colors"
                aria-label="Visit MAP International Power on YouTube"
                title="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-brand-yellow">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>{t("Verified Engineering Standards", "যাচাইকৃত প্রকৌশল মান")}</span>
            </div>
          </div>

          {/* Col 2: Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-yellow" />
              <span>{t("Solar Solutions", "সোলার সমাধান")}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/solutions#residential-solar" className="hover:text-white transition-colors">
                  {t("Residential Rooftop Solar", "আবাসিক ছাদ সোলার")}
                </Link>
              </li>
              <li>
                <Link href="/solutions#commercial-solar" className="hover:text-white transition-colors">
                  {t("Commercial Solar Systems", "বাণিজ্যিক সোলার")}
                </Link>
              </li>
              <li>
                <Link href="/solutions#industrial-solar" className="hover:text-white transition-colors">
                  {t("Industrial Rooftop Power Plants", "ইন্ডাস্ট্রিয়াল মেগা সোলার")}
                </Link>
              </li>
              <li>
                <Link href="/solutions#on-grid-solar" className="hover:text-white transition-colors">
                  {t("On-Grid Solar (Zero Battery)", "অন-গ্রিড সোলার")}
                </Link>
              </li>
              <li>
                <Link href="/solutions#off-grid-solar" className="hover:text-white transition-colors">
                  {t("Off-Grid & Hybrid Solar", "অফ-গ্রিড ও হাইব্রিড ব্যাটারি")}
                </Link>
              </li>
              <li>
                <Link href="/solutions#net-metering" className="hover:text-white transition-colors">
                  {t("Net Metering Interconnection", "নেট মিটারিং সুবিধা")}
                </Link>
              </li>
              <li>
                <Link href="/solutions#solar-pump" className="hover:text-white transition-colors">
                  {t("Solar Irrigation Pumps", "সোলার সেচ পাম্প")}
                </Link>
              </li>
              <li>
                <Link href="/solutions#maintenance-servicing" className="hover:text-white transition-colors">
                  {t("Maintenance & Health Servicing", "সোলার মেরামত ও রক্ষণাবেক্ষণ")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Calculator (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans flex items-center gap-2">
              <Sun className="w-4 h-4 text-brand-yellow" />
              <span>{t("Quick Links", "দ্রুত লিংক")}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors text-brand-yellow font-bold flex items-center gap-1">
                  <span>{t("Solar Calculator", "সোলার ক্যালকুলেটর")}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  {t("Products Catalogue", "যন্ত্রপাতি ক্যাটালগ")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  {t("Completed Projects", "সম্পন্ন প্রকল্প")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("About Us", "আমাদের সম্পর্কে")}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  {t("Solar FAQs & Guides", "সোলার গাইড ও প্রশ্নোত্তর")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("Contact & Locations", "যোগাযোগ ও ঠিকানা")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Points (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-sans">
              {t("Offices & Direct Contact", "অফিস ও যোগাযোগ")}
            </h4>
            <div className="space-y-3 text-xs">
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 block">{t("Direct Helpline", "সরাসরি হেল্পলাইন")}</span>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-white font-bold hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Direct */}
              <div className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">{t("WhatsApp Inquiry", "হোয়াটসঅ্যাপ ইনকোয়ারি")}</span>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    {COMPANY_INFO.phone} ({t("Instant", "সরাসরি")})
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 block">{t("Official Email", "অফিসিয়াল ইমেইল")}</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Kurigram Office */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t("Kurigram Regional Hub", "কুড়িগ্রাম রিজিওনাল হাব")}
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {COMPANY_INFO.offices[0].address}
                  </p>
                </div>
              </div>

              {/* Dhaka Office */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t("Dhaka Corporate Office", "ঢাকা কর্পোরেট অফিস")}
                  </span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {COMPANY_INFO.offices[1].address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. {COMPANY_INFO.tagline}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/resources#policy" className="hover:text-slate-200 transition-colors">
              {t("Net Metering Guidelines", "নেট মিটারিং নীতিমালা")}
            </Link>
            <Link href="/resources#faq" className="hover:text-slate-200 transition-colors">
              {t("Solar FAQs", "সাধারণ জিজ্ঞাসা")}
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              {t("Privacy & Terms", "শর্তাবলী ও নীতিমালা")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
