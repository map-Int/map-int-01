"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sun,
  Zap,
  Building2,
  Calendar,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  FileText,
  BadgeCheck,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "@/components/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const locationId = useId();
  const customerTypeId = useId();
  const solutionTypeId = useId();
  const billId = useId();
  const roofAreaId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Kurigram",
    customerType: "Residential",
    solution: "On-Grid Solar System (Net Metering)",
    bill: "",
    roofArea: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!formData.name.trim()) {
      setNameError(t("Please provide your full name or enterprise name", "অনুগ্রহ করে আপনার নাম অথবা প্রতিষ্ঠানের নাম লিখুন"));
      return;
    }
    if (!cleanPhone || cleanPhone.length < 10) {
      setPhoneError(t("Please enter a valid phone number (e.g. 01347-548295)", "সঠিক মোবাইল নম্বর প্রদান করুন (যেমন: 01347-548295)"));
      return;
    }

    setPhoneError("");
    setNameError("");
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `*New Solar Project Inquiry via MAP Contact Page*%0A*Name:* ${encodeURIComponent(
      formData.name || "Client"
    )}%0A*Phone:* ${encodeURIComponent(formData.phone || "Not provided")}%0A*Location:* ${encodeURIComponent(
      formData.location
    )}%0A*Customer Type:* ${encodeURIComponent(formData.customerType)}%0A*Solution:* ${encodeURIComponent(
      formData.solution
    )}%0A*Bill / Load:* ${encodeURIComponent(formData.bill || "N/A")}%0A*Roof Area:* ${encodeURIComponent(
      formData.roofArea || "N/A"
    )}%0A*Notes:* ${encodeURIComponent(formData.message || "Consultation requested")}`;
    return `https://wa.me/8801347548295?text=${text}`;
  };

  const faqs = [
    {
      q: t("How soon can MAP engineers visit my site for a technical survey?", "সাইট পরিদর্শনের জন্য ম্যাপের ইঞ্জিনিয়াররা কত দ্রুত আসতে পারবেন?"),
      a: t(
        "Our regional engineers stationed in Kurigram Sadar and Mirpur 1, Dhaka typically conduct on-site 3D shadow surveys within 24 to 48 hours of initial consultation.",
        "কুড়িগ্রাম ও ঢাকার নিজস্ব প্রকৌশলীদের মাধ্যমে প্রাথমিক আবেদনের ২৪ থেকে ৪৮ ঘণ্টার মধ্যে সরেজমিনে ৩ডি শ্যাডো ও লোড পরীক্ষা সম্পন্ন করা হয়।"
      ),
    },
    {
      q: t("Does MAP International Power handle the net-metering paperwork?", "নেট মিটারিংয়ের সরকারি কাগজপত্র ও অনুমোদন কি ম্যাপ সম্পন্ন করবে?"),
      a: t(
        "Yes, 100%. We handle all Single-Line Diagrams (SLD), BREB (Palli Bidyut) / BPDB / DESCO / DPDC / NESCO coordination, SREDA guideline compliance, and joint bi-directional meter testing.",
        "হ্যাঁ, সম্পূর্ণ দায়িত্ব আমাদের। এসএলডি ড্রয়িং, পল্লী বিদ্যুৎ/ডেসকো/বিপিডিবির সাথে সমন্বয় এবং দ্বিমুখী নেট মিটার অনুমোদন পর্যন্ত সকল আনুষ্ঠানিকতা আমরা সম্পন্ন করি।"
      ),
    },
    {
      q: t("Do you supply solar irrigation pumps in remote Upazilas?", "দূরবর্তী উপজেলায় কি সোলার সেচ পাম্প সরবরাহ ও ইনস্টলেশন করেন?"),
      a: t(
        "Yes. Through our Kurigram Regional Hub, we actively engineer solar agricultural pump solutions across Kurigram, Ulipur, Nageshwari, Chilmari, Rajarhat, and greater Rangpur Division.",
        "হ্যাঁ। কুড়িগ্রাম রিজিওনাল হাবের মাধ্যমে কুড়িগ্রামের সকল উপজেলা ও উত্তরবঙ্গের যেকোনো চরাঞ্চল বা দূরবর্তী মাঠে সেচ পাম্প স্থাপন করা হয়।"
      ),
    },
    {
      q: t("What warranties come with your solar installations?", "সোলার সিস্টেমে কী ধরনের ওয়ারেন্টি সুবিধা দেওয়া হয়?"),
      a: t(
        "All our Bloomberg Tier-1 N-Type TopCon solar panels carry a 25-Year Linear Performance Warranty. Smart inverters include 5-Year replacement warranties, and our LiFePO4 batteries feature 5 to 10-year design life support.",
        "আমাদের ব্লুমবার্গ টিয়ার-১ টপকন প্যানেলে ২৫ বছরের লিনিয়ার পারফরম্যান্স ওয়ারেন্টি, ইনভার্টারে ৫ বছরের রিপ্লেসমেন্ট এবং লিথিয়াম ব্যাটারিতে দীর্ঘমেয়াদি অফিসিয়াল গ্যারান্টি রয়েছে।"
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F8FC] pb-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#071E3D] via-[#004884] to-[#0D7A3E] text-white py-16 md:py-20 relative overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-brand-yellow border border-white/20 backdrop-blur-sm">
            <Sun className="w-3.5 h-3.5" />
            <span>{t("Verified Engineering Channels", "যাচাইকৃত প্রকৌশল ও অফিসিয়াল মাধ্যম")}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-white">
            {t("Contact MAP International Power", "যোগাযোগ ও সরাসরি সেবা কেন্দ্র")}
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-2xl leading-relaxed">
            {t(
              "Connect directly with our solar engineering consultants, request a comprehensive rooftop feasibility study, or visit our regional hubs in Kurigram and Dhaka.",
              "আমাদের অভিজ্ঞ সোলার প্রকৌশলীদের সাথে সরাসরি কথা বলুন, আপনার ছাদের বিদ্যুৎ উৎপাদন সম্ভাব্যতা যাচাই করুন অথবা কুড়িগ্রাম ও ঢাকায় আমাদের নিজস্ব অফিসে আসুন।"
            )}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg border border-white/15">
              <Clock className="w-3.5 h-3.5 text-brand-yellow" />
              <span>{t("Average Response: < 2 Business Hours", "গড় প্রতিক্রিয়া সময়: ২ ঘণ্টার মধ্যে")}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t("Free 3D Solar Yield Report", "বিনামূল্যে ৩ডি সোলার অ্যাসেসমেন্ট")}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 pt-10 space-y-10">
        {/* Top 4 Quick-Access Contact Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Direct Helpline */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="group p-5 rounded-2xl bg-white border border-[#D4E2ED] shadow-sm hover:shadow-md hover:border-[#00549A] transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#00549A]/10 text-[#00549A] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t("Online Helpline", "হটলাইন চালু")}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {t("Direct Phone Support", "সরাসরি ফোন কল")}
                </span>
                <span className="text-base font-black text-[#0A1C30] group-hover:text-[#00549A] transition-colors block">
                  {COMPANY_INFO.phone}
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t("Sat–Thu: 9:00 AM – 7:00 PM", "শনি–বৃহঃ সকাল ৯টা – সন্ধ্যা ৭টা")}
                </p>
              </div>
            </div>
            <div className="pt-3 text-[11px] font-bold text-[#00549A] flex items-center gap-1">
              <span>{t("Call Engineer Now", "এখনই কল করুন")}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: WhatsApp Chat */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-[#D4E2ED] shadow-sm hover:shadow-md hover:border-[#25D366] transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#128C7E] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#25D366]/10 text-emerald-800 border border-[#25D366]/30">
                  {t("Fastest Response", "দ্রুত উত্তর")}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  WhatsApp Direct
                </span>
                <span className="text-base font-black text-[#0A1C30] group-hover:text-[#128C7E] transition-colors block">
                  +880 1347-548295
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t("Instant quotes, bill sharing & photos", "বিল ও ছাদের ছবি পাঠিয়ে কোটেশন নিন")}
                </p>
              </div>
            </div>
            <div className="pt-3 text-[11px] font-bold text-[#128C7E] flex items-center gap-1">
              <span>{t("Start WhatsApp Chat", "হোয়াটসঅ্যাপে চ্যাট করুন")}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: Email Correspondence */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="group p-5 rounded-2xl bg-white border border-[#D4E2ED] shadow-sm hover:shadow-md hover:border-[#071E3D] transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#071E3D]/10 text-[#071E3D] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {t("Formal Enquiries", "অফিসিয়াল")}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  {t("Official Email", "অফিসিয়াল ইমেইল")}
                </span>
                <span className="text-sm font-black text-[#0A1C30] group-hover:text-[#00549A] transition-colors block break-all">
                  {COMPANY_INFO.email}
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t("Tenders, SLD files & corporate proposals", "কর্পোরেট প্রস্তাবনা ও ড্রয়িং")}
                </p>
              </div>
            </div>
            <div className="pt-3 text-[11px] font-bold text-[#071E3D] flex items-center gap-1">
              <span>{t("Send Corporate Email", "ইমেইল পাঠান")}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 4: Facebook Official Community */}
          <a
            href={COMPANY_INFO.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-white border border-[#D4E2ED] shadow-sm hover:shadow-md hover:border-[#1877F2] transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {t("Verified Page", "ভেরিফায়েড পেজ")}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Facebook Page
                </span>
                <span className="text-base font-black text-[#0A1C30] group-hover:text-[#1877F2] transition-colors block">
                  MAP International
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {t("Live installations, video tours & customer feedback", "প্রজেক্টের ভিডিও ও নতুন আপডেট")}
                </p>
              </div>
            </div>
            <div className="pt-3 text-[11px] font-bold text-[#1877F2] flex items-center gap-1">
              <span>{t("Visit Official Page", "ফেসবুক পেজ ভিজিট")}</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </section>

        {/* Master Section: Left (Offices) & Right (Engineering Proposal Form) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Strategic Office Hubs & Regional Services (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Header info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00549A] block">
                {t("Regional Operational Centers", "আঞ্চলিক কার্যালয় ও প্রকৌশল কেন্দ্র")}
              </span>
              <h2 className="text-2xl font-black text-[#0A1C30] font-sans">
                {t("Visit Our Regional Project Offices", "আমাদের সরাসরি অফিসে স্বাগতম")}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                {t(
                  "With on-ground engineers in Kurigram and corporate leaders in Dhaka, we eliminate long waiting times and ensure seamless post-installation support.",
                  "কুড়িগ্রাম ও ঢাকায় নিজস্ব দক্ষ টিম থাকায় যেকোনো টেকনিক্যাল সহায়তা দ্রুত প্রদান করা সম্ভব।"
                )}
              </p>
            </div>

            {/* Hub 1: Kurigram Regional Hub */}
            <div className="bg-white rounded-2xl border border-[#D4E2ED] p-6 shadow-sm hover:border-[#0D7A3E] transition-all space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#0D7A3E]">
                    {t("Northern Regional Operations", "উত্তরবঙ্গ প্রধান অপারেশন হাব")}
                  </span>
                  <h3 className="text-base font-extrabold text-[#0A1C30] mt-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#0D7A3E]" />
                    <span>{COMPANY_INFO.offices[0].name}</span>
                  </h3>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0D7A3E] shrink-0 mt-0.5" />
                  <span className="font-medium text-[#0A1C30]">{COMPANY_INFO.offices[0].address}</span>
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                  {COMPANY_INFO.offices[0].note}
                </p>
              </div>

              {/* Service tags */}
              <div className="pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  {t("Key Hub Capabilities:", "মূল সেবা ও সক্ষমতা:")}
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {COMPANY_INFO.offices[0].services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#EAF5EE] text-[#0D7A3E] font-medium border border-emerald-200/60"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#0D7A3E] hover:bg-[#0a6332] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("Call Kurigram Hub", "কুড়িগ্রাম অফিসে কল")}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] text-xs font-bold transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Hub 2: Dhaka Corporate Office */}
            <div className="bg-white rounded-2xl border border-[#D4E2ED] p-6 shadow-sm hover:border-[#00549A] transition-all space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100 text-[#00549A]">
                    {t("Corporate & Project Headquarters", "কর্পোরেট ও প্রজেক্ট হেডকোয়ার্টার")}
                  </span>
                  <h3 className="text-base font-extrabold text-[#0A1C30] mt-1.5 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#00549A]" />
                    <span>{COMPANY_INFO.offices[1].name}</span>
                  </h3>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#00549A] shrink-0 mt-0.5" />
                  <span className="font-medium text-[#0A1C30]">{COMPANY_INFO.offices[1].address}</span>
                </p>
                <p className="text-[11px] text-slate-500 leading-relaxed pl-6">
                  {COMPANY_INFO.offices[1].note}
                </p>
              </div>

              {/* Service tags */}
              <div className="pt-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  {t("Key Hub Capabilities:", "মূল সেবা ও সক্ষমতা:")}
                </span>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {COMPANY_INFO.offices[1].services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#EBF4FA] text-[#00549A] font-medium border border-blue-200/60"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 border-t border-slate-100">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#00549A] hover:bg-[#071E3D] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t("Call Dhaka Office", "ঢাকা অফিসে কল")}</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Mirpur+1+Dhaka+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                >
                  {t("Map", "ম্যাপ")}
                </a>
              </div>
            </div>

            {/* Emergency & Engineering Commitment Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#071E3D] to-[#0A386D] text-white space-y-2 border border-blue-900 shadow-md">
              <div className="flex items-center gap-2 text-brand-yellow font-bold text-xs uppercase tracking-wider">
                <Zap className="w-4 h-4 text-brand-yellow" />
                <span>{t("Rapid Technical Support Guarantee", "সার্বক্ষণিক টেকনিক্যাল ব্যাকআপ")}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                {t(
                  "Encountering an inverter fault, grid drop, or battery anomaly? Our technical leads are on-call with remote IoT diagnostics and physical spare part dispatch.",
                  "সোলার ইনভার্টার বা ব্যাটারিতে যেকোনো ত্রুটি দেখা দিলে আমাদের কারিগরি টিম রিমোট ডায়াগনস্টিক ও স্পেয়ার পার্টস সহায়তায় প্রস্তুত।"
                )}
              </p>
              <div className="pt-1 text-[11px] text-emerald-300 font-semibold flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-emerald-400" />
                <span>{t("Dedicated local service teams stationed in Kurigram & Dhaka", "কুড়িগ্রাম ও ঢাকায় সার্বক্ষণিক নিজস্ব টেকনিশিয়ান")}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Generation & Engineering Proposal Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-[#D4E2ED] p-6 sm:p-8 md:p-10 shadow-card">
              <div className="border-b border-slate-100 pb-5 mb-6 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-[#0D7A3E]">
                    {t("Turnkey Solar Assessment", "টার্নকি সোলার প্রকল্প মূল্যায়ন")}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">
                    {t("Step 1 of 1 • Free", "বিনামূল্যে সাইট স্টাডি")}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0A1C30] font-sans tracking-tight">
                  {t("Request a Solar Engineering Proposal", "সোলার প্রজেক্ট প্রস্তাবনার আবেদন")}
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t(
                    "Submit your rooftop and utility parameters. An electrical engineer from our regional team will calculate your expected monthly generation and prepare an initial Single-Line Diagram.",
                    "আপনার ছাদ ও বিদ্যুৎ বিলের তথ্য দিন। আমাদের প্রকৌশলী আপনার মাসিক সম্ভাব্য উৎপাদন হিসাব করে দ্রুত যোগাযোগ করবেন।"
                  )}
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 bg-emerald-100 text-[#0D7A3E] rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-[#0A1C30]">
                      {t("Inquiry Successfully Received!", "আপনার আবেদন সফলভাবে গৃহীত হয়েছে!")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      {t(
                        "Thank you for consulting MAP International Power. A certified solar engineer has been assigned and will contact you directly at",
                        "ম্যাপ ইন্টারন্যাশনাল পাওয়ারের সাথে যোগাযোগের জন্য ধন্যবাদ। আমাদের একজন সার্টিফাইড সোলার প্রকৌশলী খুব শীঘ্রই আপনার সাথে ফোনে কথা বলবেন:"
                      )}{" "}
                      <strong className="text-[#00549A]">{formData.phone}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F8FC] border border-[#D4E2ED] max-w-md mx-auto text-left text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t("Selected Location:", "এলাকা:")}</span>
                      <span className="font-bold text-[#0A1C30]">{formData.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t("System Solution:", "সমাধান:")}</span>
                      <span className="font-bold text-[#0A1C30]">{formData.solution}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t("Next Step:", "পরবর্তী ধাপ:")}</span>
                      <span className="font-bold text-emerald-600">{t("3D Rooftop Shadow Model", "৩ডি শ্যাডো সিমুলেশন")}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-xs shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{t("Send Instantly via WhatsApp", "হোয়াটসঅ্যাপে সরাসরি চ্যাট")}</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          location: "Kurigram",
                          customerType: "Residential",
                          solution: "On-Grid Solar System (Net Metering)",
                          bill: "",
                          roofArea: "",
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors"
                    >
                      {t("Submit Another Inquiry", "নতুন আবেদন করুন")}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Section 1: Contact Details */}
                  <div className="space-y-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-1">
                      {t("1. Contact Information", "১. আপনার যোগাযোগের তথ্য")}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor={nameId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Full Name / Enterprise Name", "আপনার নাম / প্রতিষ্ঠানের নাম")}{" "}
                          <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={nameId}
                          name="name"
                          type="text"
                          required
                          autoComplete="name"
                          placeholder={t("e.g. Engr. Tanvir Ahmed", "যেমন: প্রকৌশলী তানভীর আহমেদ")}
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (nameError) setNameError("");
                          }}
                          aria-invalid={nameError ? "true" : "false"}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border text-[#0A1C30] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px] ${
                            nameError ? "border-red-400 bg-red-50/40" : "border-[#D4E2ED]"
                          }`}
                        />
                        {nameError && (
                          <span className="text-[11px] text-red-600 font-medium block">{nameError}</span>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor={phoneId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Mobile Phone Number", "মোবাইল নম্বর")}{" "}
                          <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id={phoneId}
                          name="phone"
                          type="tel"
                          required
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="01347-XXXXXX"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (phoneError) setPhoneError("");
                          }}
                          aria-invalid={phoneError ? "true" : "false"}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border text-[#0A1C30] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px] ${
                            phoneError ? "border-red-400 bg-red-50/40" : "border-[#D4E2ED]"
                          }`}
                        />
                        {phoneError && (
                          <span className="text-[11px] text-red-600 font-medium block">{phoneError}</span>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor={emailId} className="block text-xs font-bold text-[#0A1C30]">
                        {t("Email Address (Optional)", "ইমেইল ঠিকানা (ঐচ্ছিক)")}
                      </label>
                      <input
                        id={emailId}
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border border-[#D4E2ED] text-[#0A1C30] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px]"
                      />
                    </div>
                  </div>

                  {/* Section 2: Project Specifications */}
                  <div className="space-y-4 pt-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-1">
                      {t("2. Solar System Requirements", "২. সৌরশক্তি প্রকল্পের বিবরণ")}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Location */}
                      <div className="space-y-1.5">
                        <label htmlFor={locationId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Project Location", "প্রকল্পের এলাকা / জেলা")}
                        </label>
                        <select
                          id={locationId}
                          name="location"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border border-[#D4E2ED] text-[#0A1C30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px]"
                        >
                          <option value="Kurigram">Kurigram (কুড়িগ্রাম সদর, নাগেশ্বরী, উলিপুর, চিলমারী, রাজারহাট)</option>
                          <option value="Rangpur">Rangpur Division (রংপুর, নীলফামারী, লালমনিরহাট, গাইবান্ধা)</option>
                          <option value="Dhaka">Dhaka Division (মিরপুর, উত্তরা, গুলশান, গাজীপুর, সাভার)</option>
                          <option value="Other">Other Serviceable Area in Bangladesh (অন্যান্য জেলা)</option>
                        </select>
                      </div>

                      {/* Customer Segment */}
                      <div className="space-y-1.5">
                        <label htmlFor={customerTypeId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Customer Sector", "গ্রাহকের ধরন")}
                        </label>
                        <select
                          id={customerTypeId}
                          name="customerType"
                          value={formData.customerType}
                          onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border border-[#D4E2ED] text-[#0A1C30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px]"
                        >
                          <option value="Residential">{t("Residential (Home / Villa / Apartment)", "আবাসিক (বাসাবাড়ি / ফ্ল্যাট)")}</option>
                          <option value="Commercial">{t("Commercial (Office / Shopping Mall / Hospital)", "বাণিজ্যিক (অফিস / মার্কেট / ক্লিনিক)")}</option>
                          <option value="Industrial">{t("Industrial (Factory / RMG / Textile / Mill)", "শিল্পকারখানা (গার্মেন্টস / মিল / ফ্যাক্টরি)")}</option>
                          <option value="Agricultural">{t("Agricultural (Solar Water Irrigation Pump)", "কৃষি (সোলার সেচ পাম্প)")}</option>
                          <option value="Institutional">{t("Institutional (School / College / Mosque)", "প্রাতিষ্ঠানিক (শিক্ষা প্রতিষ্ঠান / মসজিদ)")}</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Desired Solution */}
                      <div className="space-y-1.5">
                        <label htmlFor={solutionTypeId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Desired System Architecture", "প্রয়োজনীয় সোলার সিস্টেম")}
                        </label>
                        <select
                          id={solutionTypeId}
                          name="solution"
                          value={formData.solution}
                          onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border border-[#D4E2ED] text-[#0A1C30] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px]"
                        >
                          <option value="On-Grid Solar System (Net Metering)">On-Grid Solar (Net Metering • Zero Battery)</option>
                          <option value="Hybrid Solar System (Net Metering + LiFePO4)">Hybrid Solar (Net Metering + Battery Storage)</option>
                          <option value="Off-Grid Solar System (Complete Storage)">Off-Grid Solar (Complete Battery Autonomy)</option>
                          <option value="Solar Irrigation Pump">Solar Irrigation Pump (কৃষি সেচ পাম্প)</option>
                          <option value="Industrial Mega Rooftop Plant">Industrial Mega Rooftop Solar Plant</option>
                          <option value="Equipment Supply Only">Tier-1 Hardware Supply Only</option>
                          <option value="Maintenance & Health Audit">Maintenance, Cleaning & Servicing</option>
                        </select>
                      </div>

                      {/* Monthly Bill or Peak Load */}
                      <div className="space-y-1.5">
                        <label htmlFor={billId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Monthly Electricity Bill / Peak Load", "মাসিক বিদ্যুৎ বিল বা লোড")}
                        </label>
                        <input
                          id={billId}
                          name="bill"
                          type="text"
                          placeholder={t("e.g. 15,000 BDT or 25 kW", "যেমন: ১৫,০০০ টাকা বা ২৫ কিলোওয়াট")}
                          value={formData.bill}
                          onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border border-[#D4E2ED] text-[#0A1C30] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Rooftop & Notes */}
                  <div className="space-y-4 pt-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-1">
                      {t("3. Rooftop & Additional Specifications", "৩. ছাদের বিবরণ ও অতিরিক্ত তথ্য")}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Roof Area */}
                      <div className="sm:col-span-1 space-y-1.5">
                        <label htmlFor={roofAreaId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Approx Rooftop Area", "সম্ভাব্য ছাদের আয়তন")}
                        </label>
                        <input
                          id={roofAreaId}
                          name="roofArea"
                          type="text"
                          placeholder={t("e.g. 1200 sq ft", "যেমন: ১২০০ স্কয়ার ফিট")}
                          value={formData.roofArea}
                          onChange={(e) => setFormData({ ...formData, roofArea: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border border-[#D4E2ED] text-[#0A1C30] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all min-h-[46px]"
                        />
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2 space-y-1.5">
                        <label htmlFor={messageId} className="block text-xs font-bold text-[#0A1C30]">
                          {t("Specific Notes or Requirements (Optional)", "বিশেষ কোনো চাহিদা বা বিবরণ (ঐচ্ছিক)")}
                        </label>
                        <textarea
                          id={messageId}
                          name="message"
                          rows={2}
                          placeholder={t(
                            "e.g. RCC roof, interested in 5kW On-Grid Net Metering with BREB coordination...",
                            "যেমন: আরসিসি ছাদ, ৫ কিলোওয়াট নেট মিটারিং ও পল্লী বিদ্যুৎ অনুমোদনের আগ্রহ..."
                          )}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-[#F5F8FC] border border-[#D4E2ED] text-[#0A1C30] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00549A] transition-all resize-none min-h-[46px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submission Action Bar */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-[#0D7A3E]" />
                      <span>{t("Confidential data handling • No spam promise", "আপনার তথ্যের সম্পূর্ণ গোপনীয়তা নিশ্চিত")}</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors border border-[#25D366]/30"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{t("Instant WhatsApp", "হোয়াটসঅ্যাপ")}</span>
                      </a>

                      <button
                        type="submit"
                        className="flex-1 sm:flex-initial px-8 py-3.5 bg-[#00549A] hover:bg-[#071E3D] text-white rounded-xl font-black text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00549A] focus:ring-offset-2"
                      >
                        <span>{t("Submit Engineering Inquiry", "আবেদন জমা দিন")}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl border border-[#D4E2ED] p-6 sm:p-10 shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#00549A]">
              {t("Frequently Asked Questions", "সাধারণ জিজ্ঞাসা ও উত্তর")}
            </span>
            <h3 className="text-2xl font-black text-[#0A1C30] font-sans">
              {t("Have Questions Before Reaching Out?", "যোগাযোগের পূর্বে জেনে নিন")}
            </h3>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-slate-100">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left text-sm font-bold text-[#0A1C30] hover:text-[#00549A] transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-2 pr-4">
                      <HelpCircle className="w-4 h-4 text-[#00549A] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#00549A]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pt-2.5 pl-6 text-xs text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
