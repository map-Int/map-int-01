"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Calculator,
  ArrowRight,
  Home,
  Building2,
  Factory,
  Zap,
  BatteryCharging,
  ArrowLeftRight,
  Droplets,
  Wrench,
  Sun,
  ShieldCheck,
} from "lucide-react";
import { MapLogo } from "./MapLogo";
import { COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "./LanguageContext";

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const solutionsLinks = [
    { title: "Residential Solar", titleBn: "আবাসিক সোলার", href: "/solutions#residential-solar", icon: Home },
    { title: "Commercial Solar", titleBn: "বাণিজ্যিক সোলার", href: "/solutions#commercial-solar", icon: Building2 },
    { title: "Industrial Solar", titleBn: "ইন্ডাস্ট্রিয়াল সোলার", href: "/solutions#industrial-solar", icon: Factory },
    { title: "On-Grid Systems", titleBn: "অন-গ্রিড সিস্টেম", href: "/solutions#on-grid-solar", icon: Zap },
    { title: "Off-Grid & Hybrid", titleBn: "অফ-গ্রিড ও হাইব্রিড", href: "/solutions#off-grid-solar", icon: BatteryCharging },
    { title: "Net Metering Solutions", titleBn: "নেট মিটারিং সুবিধা", href: "/solutions#net-metering", icon: ArrowLeftRight },
    { title: "Solar Irrigation Pumps", titleBn: "সোলার সেচ পাম্প", href: "/solutions#solar-pump", icon: Droplets },
    { title: "Maintenance & Servicing", titleBn: "সার্ভিসিং ও মেরামত", href: "/solutions#maintenance-servicing", icon: Wrench },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
        scrolled ? "shadow-sm border-b border-surface-border py-2.5" : "border-b border-surface-border/70 py-3.5"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Real Brand Logo on Left */}
        <div className="flex-shrink-0">
          <MapLogo size={scrolled ? "sm" : "md"} />
        </div>

        {/* Clean Center Navigation (Decluttered, generous spacing) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
              pathname === "/" ? "text-brand-primary font-bold" : "text-text-primary"
            }`}
          >
            {t("Home", "হোম")}
          </Link>

          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <Link
              href="/solutions"
              className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-primary ${
                pathname.startsWith("/solutions") ? "text-brand-primary font-bold" : "text-text-primary"
              }`}
            >
              <span>{t("Solutions", "সমাধান")}</span>
              <ChevronDown className="w-3.5 h-3.5 text-text-secondary" />
            </Link>

            {solutionsOpen && (
              <div className="absolute top-full -left-12 w-[340px] bg-white rounded-xl shadow-xl border border-surface-border p-2.5 grid grid-cols-1 gap-1 animate-in fade-in slide-in-from-top-1 duration-150">
                {solutionsLinks.map((sol) => {
                  const Icon = sol.icon;
                  return (
                    <Link
                      key={sol.href}
                      href={sol.href}
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-blue transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-md bg-surface-blue group-hover:bg-brand-primary text-brand-primary group-hover:text-white flex items-center justify-center transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-text-primary group-hover:text-brand-primary">
                        {language === "bn" ? sol.titleBn : sol.title}
                      </span>
                    </Link>
                  );
                })}
                <div className="pt-2 border-t border-slate-100 px-2">
                  <Link
                    href="/solutions"
                    className="text-xs font-bold text-brand-primary hover:underline flex items-center justify-between"
                  >
                    <span>{t("View All Solutions", "সকল সমাধান দেখুন")}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/products"
            className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
              pathname === "/products" ? "text-brand-primary font-bold" : "text-text-primary"
            }`}
          >
            {t("Products", "পণ্যসমূহ")}
          </Link>

          <Link
            href="/projects"
            className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
              pathname === "/projects" ? "text-brand-primary font-bold" : "text-text-primary"
            }`}
          >
            {t("Projects", "প্রকল্প")}
          </Link>

          <Link
            href="/about"
            className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
              pathname === "/about" ? "text-brand-primary font-bold" : "text-text-primary"
            }`}
          >
            {t("About Us", "আমাদের সম্পর্কে")}
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
              pathname === "/contact" ? "text-brand-primary font-bold" : "text-text-primary"
            }`}
          >
            {t("Contact", "যোগাযোগ")}
          </Link>
        </nav>

        {/* Right CTA Actions (User explicit instruction: Solar Calculator in CTA + Request a Quote) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Solar Calculator CTA Button */}
          <Link
            href="/calculator"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-50/80 hover:bg-blue-100/90 text-brand-blue border border-blue-200/80 text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <Calculator className="w-4 h-4 text-brand-yellow" />
            <span>{t("Solar Calculator", "সোলার ক্যালকুলেটর")}</span>
          </Link>

          {/* Primary Consultation Button */}
          <button
            type="button"
            onClick={onOpenQuote}
            className="px-4 py-2 rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>{t("Free Consultation", "পরামর্শ নিন")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Clean Language Switcher */}
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "bn" : "en")}
            className="px-2 py-1.5 rounded-md text-xs font-bold text-text-secondary hover:text-brand-primary hover:bg-surface-bg border border-surface-border transition-colors ml-1"
            aria-label="Toggle language between English and Bengali"
          >
            {language === "en" ? "বাংলা" : "EN"}
          </button>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/calculator"
            className="p-2 rounded-lg bg-blue-50/80 text-brand-blue border border-blue-200/80"
            aria-label="Solar Calculator"
          >
            <Calculator className="w-4 h-4 text-brand-yellow" />
          </Link>

          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "bn" : "en")}
            className="px-2 py-1.5 rounded-md text-xs font-bold bg-surface-bg text-text-primary border border-surface-border"
          >
            {language === "en" ? "বাং" : "EN"}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-primary hover:bg-surface-bg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-surface-border shadow-xl px-5 py-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            <Link href="/" className="py-2 text-sm font-bold text-text-primary border-b border-slate-100">
              {t("Home", "হোম")}
            </Link>

            <div className="py-2 border-b border-slate-100">
              <span className="text-xs font-bold text-text-muted uppercase tracking-wider block mb-2">
                {t("Solar Solutions", "সোলার সমাধান")}
              </span>
              <div className="grid grid-cols-2 gap-2">
                {solutionsLinks.map((sol) => (
                  <Link
                    key={sol.href}
                    href={sol.href}
                    className="text-xs py-1.5 px-2 rounded bg-surface-bg text-text-primary hover:text-brand-primary"
                  >
                    {language === "bn" ? sol.titleBn : sol.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/products" className="py-2 text-sm font-bold text-text-primary border-b border-slate-100">
              {t("Products Catalogue", "যন্ত্রপাতি ক্যাটালগ")}
            </Link>

            <Link href="/projects" className="py-2 text-sm font-bold text-text-primary border-b border-slate-100">
              {t("Projects Portfolio", "প্রকল্পসমূহ")}
            </Link>

            <Link
              href="/calculator"
              className="py-2.5 px-3 rounded-lg bg-surface-blue text-brand-primary font-bold text-xs flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-brand-yellow" />
                <span>{t("Solar Requirement Calculator", "সোলার ক্যালকুলেটর")}</span>
              </span>
              <span className="text-[10px] bg-brand-primary text-white px-2 py-0.5 rounded font-semibold">
                {t("Calculate", "হিসেব করুন")}
              </span>
            </Link>

            <Link href="/about" className="py-2 text-sm font-bold text-text-primary border-b border-slate-100">
              {t("About Us", "আমাদের সম্পর্কে")}
            </Link>

            <Link href="/contact" className="py-2 text-sm font-bold text-text-primary border-b border-slate-100">
              {t("Contact & Offices", "যোগাযোগ ও ঠিকানা")}
            </Link>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-bold rounded-lg text-xs text-center shadow-sm"
              >
                {t("Request a Free Consultation", "পরামর্শের জন্য অনুরোধ করুন")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
