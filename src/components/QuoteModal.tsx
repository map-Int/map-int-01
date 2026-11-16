"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { X, Send, CheckCircle2, Phone, MessageSquare, ArrowRight, SunMedium, Building, Home, Factory, Droplets } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "./LanguageContext";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    bill?: number;
    capacity?: number;
    solution?: string;
    productName?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const { t } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const locationId = useId();
  const customerTypeId = useId();
  const solutionTypeId = useId();
  const billId = useId();
  const notesId = useId();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "Kurigram",
    customerType: "Residential",
    solution: initialData?.solution || "On-Grid Solar System (Net Metering)",
    bill: initialData?.bill ? String(initialData.bill) : "",
    notes: initialData?.productName ? `Inquiring about pricing and specs for: ${initialData.productName}` : "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  // Update initial data if changed
  useEffect(() => {
    if (initialData?.solution) {
      setFormData((prev) => ({ ...prev, solution: initialData.solution! }));
    }
    if (initialData?.productName) {
      setFormData((prev) => ({
        ...prev,
        notes: `Inquiring about pricing and specs for: ${initialData.productName}`,
      }));
    }
  }, [initialData]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Bangladesh phone validation (e.g. 013..., 017..., 018..., 019..., 015..., 016...)
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setPhoneError("Please enter a valid phone number (e.g., 01347-548295)");
      return;
    }
    if (!formData.name.trim()) {
      setNameError("Please provide your name or business name");
      return;
    }

    setPhoneError("");
    setNameError("");
    setSubmitted(true);
  };

  const generateWhatsAppInquiryUrl = () => {
    const text = `*New Solar Inquiry via MAP Website*%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Location:* ${encodeURIComponent(formData.location)}%0A*Customer Type:* ${encodeURIComponent(formData.customerType)}%0A*Required Solution:* ${encodeURIComponent(formData.solution)}%0A*Monthly Bill / Load:* ${encodeURIComponent(formData.bill || "N/A")}%0A*Notes:* ${encodeURIComponent(formData.notes || "Please send consultation.")}`;
    return `https://wa.me/8801347548295?text=${text}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-surface-border overflow-hidden my-4 sm:my-8 max-h-[92vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="bg-brand-primary p-4 sm:p-6 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 flex items-center justify-center text-brand-yellow flex-shrink-0">
              <SunMedium className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-title" className="text-lg sm:text-xl font-bold font-sans">
                {submitted
                  ? t("Inquiry Submitted Successfully!", "আপনার তথ্য সফলভাবে পাঠানো হয়েছে!")
                  : t("Request a Free Solar Consultation", "বিনামূল্যে সোলার পরামর্শ বা কোটেশন নিন")}
              </h2>
              <p className="text-[11px] sm:text-xs text-emerald-100">
                {t(
                  "MAP International Power • Kurigram & Rangpur Hub • Dhaka Office",
                  "ম্যাপ ইন্টারন্যাশনাল পাওয়ার • কুড়িগ্রাম ও রংপুর হাব • ঢাকা অফিস"
                )}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 text-center space-y-6 overflow-y-auto flex-1">
            <div className="w-16 h-16 bg-emerald-100 text-brand-green rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-text-primary">
                {t("Thank You,", "ধন্যবাদ,")} {formData.name}!
              </h3>
              <p className="text-sm text-text-secondary max-w-md mx-auto">
                {t(
                  "Your solar project details have been safely received. A certified MAP International Power engineer from our regional team will contact you at",
                  "আপনার তথ্য সফলভাবে গ্রহণ করা হয়েছে। আমাদের টেকনিক্যাল টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে:"
                )}{" "}
                <span className="font-bold text-brand-primary">{formData.phone}</span>.
              </p>
            </div>

            <div className="p-4 bg-surface-blue rounded-xl border border-emerald-100 max-w-md mx-auto text-left text-xs space-y-1.5">
              <div className="font-bold text-brand-deep text-sm mb-1">{t("Inquiry Summary", "তথ্য সারসংক্ষেপ")}</div>
              <div><span className="text-text-secondary">{t("Location:", "এলাকা:")}</span> <span className="font-semibold">{formData.location}</span></div>
              <div><span className="text-text-secondary">{t("Solution:", "সমাধান:")}</span> <span className="font-semibold">{formData.solution}</span></div>
              {formData.bill && <div><span className="text-text-secondary">{t("Monthly Bill:", "মাসিক বিল:")}</span> <span className="font-semibold">৳ {formData.bill}</span></div>}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={generateWhatsAppInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg font-bold text-sm inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t("Send Instantly via WhatsApp", "হোয়াটসঅ্যাপে সরাসরি পাঠান")}</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-text-primary rounded-lg font-semibold text-sm transition-colors"
              >
                {t("Close Window", "উইন্ডো বন্ধ করুন")}
              </button>
            </div>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="form-field">
                <label htmlFor={nameId}>
                  {t("Full Name / Company Name", "আপনার নাম / প্রতিষ্ঠানের নাম")}{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id={nameId}
                  type="text"
                  required
                  placeholder="e.g. Md. Rafiqul Islam / Apex Textiles"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  aria-invalid={nameError ? "true" : "false"}
                  aria-describedby={nameError ? "name-error" : undefined}
                />
                {nameError && (
                  <span id="name-error" className="text-xs text-red-600 font-medium">
                    {nameError}
                  </span>
                )}
              </div>

              {/* Phone Number */}
              <div className="form-field">
                <label htmlFor={phoneId}>
                  {t("Phone Number", "মোবাইল নম্বর")}{" "}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id={phoneId}
                  type="tel"
                  required
                  placeholder="01347-XXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                  aria-invalid={phoneError ? "true" : "false"}
                  aria-describedby={phoneError ? "phone-error" : undefined}
                />
                {phoneError && (
                  <span id="phone-error" className="text-xs text-red-600 font-medium">
                    {phoneError}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Location */}
              <div className="form-field">
                <label htmlFor={locationId}>
                  {t("Installation Location / City", "প্রকল্পের এলাকা / জেলা")}
                </label>
                <select
                  id={locationId}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="form-input"
                >
                  <option value="Kurigram">Kurigram (কুড়িগ্রাম - সদর, উলিপুর, নাগেশ্বরী, চিলমারী, রাজারহাট)</option>
                  <option value="Rangpur">Rangpur (রংপুর বিভাগ - রংপুর সিটি, মিঠাপুকুর, বদরগঞ্জ)</option>
                  <option value="Dhaka">Dhaka (ঢাকা - মিরপুর, উত্তরা, গুলশান, গাজীপুর, সাভার)</option>
                  <option value="Other">Other Serviceable Area in Bangladesh (অন্যান্য)</option>
                </select>
              </div>

              {/* Customer Type */}
              <div className="form-field">
                <label htmlFor={customerTypeId}>
                  {t("Customer Type", "গ্রাহকের ধরন")}
                </label>
                <select
                  id={customerTypeId}
                  value={formData.customerType}
                  onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                  className="form-input"
                >
                  <option value="Residential">{t("Residential (Home / Villa / Apartment)", "আবাসিক (বাসাবাড়ি / ফ্ল্যাট)")}</option>
                  <option value="Commercial">{t("Commercial (Office / Hotel / Hospital)", "বাণিজ্যিক (অফিস / হাসপাতাল / প্রতিষ্ঠান)")}</option>
                  <option value="Industrial">{t("Industrial (Factory / RMG / Mill)", "শিল্পকারখানা (ফ্যাক্টরি / মিল)")}</option>
                  <option value="Agricultural">{t("Agricultural (Solar Pump / Farm)", "কৃষি (সোলার সেচ পাম্প / খামার)")}</option>
                  <option value="Institutional">{t("Institutional / Educational", "প্রাতিষ্ঠানিক / শিক্ষা প্রতিষ্ঠান")}</option>
                  <option value="Other">{t("Other", "অন্যান্য")}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Required Solar Solution */}
              <div className="form-field">
                <label htmlFor={solutionTypeId}>
                  {t("Required Solar Solution", "প্রয়োজনীয় সোলার সমাধান")}
                </label>
                <select
                  id={solutionTypeId}
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  className="form-input font-medium"
                >
                  <option value="On-Grid Solar System (Net Metering)">On-Grid Solar (Net Metering)</option>
                  <option value="Off-Grid Solar System (Battery Backup)">Off-Grid Solar (Battery Storage)</option>
                  <option value="Industrial Rooftop Solar Plant">Industrial Rooftop Solar Plant</option>
                  <option value="Solar Irrigation Pump">Solar Irrigation Pump (কৃষি সেচ পাম্প)</option>
                  <option value="Solar Equipment / Products Supply">Solar Equipment / Products Supply</option>
                  <option value="Maintenance & Technical Servicing">Maintenance & Servicing</option>
                  <option value="Not Sure — Need Consultation">Not Sure — Need Consultation</option>
                </select>
              </div>

              {/* Monthly Bill or Load */}
              <div className="form-field">
                <label htmlFor={billId}>
                  {t("Monthly Electricity Bill (BDT) or Load (kW)", "মাসিক বিদ্যুৎ বিল (টাকা) বা লোড (কিলোওয়াট)")}
                </label>
                <input
                  id={billId}
                  type="text"
                  placeholder="e.g. 12,000 BDT or 25 kW"
                  value={formData.bill}
                  onChange={(e) => setFormData({ ...formData, bill: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            {/* Notes / Project Details */}
            <div className="form-field">
              <label htmlFor={notesId}>
                {t("Rooftop Space or Additional Requirements (Optional)", "ছাদের সাইজ বা বিশেষ কোনো বিবরণ (ঐচ্ছিক)")}
              </label>
              <textarea
                id={notesId}
                rows={2}
                placeholder="e.g. 1500 sq ft concrete roof in Kurigram, need net metering consultation..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="form-input resize-none"
              />
            </div>

            {/* Submit and Direct Call row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <Phone className="w-3.5 h-3.5 text-brand-primary" />
                <span>
                  {t("Urgent query? Call:", "জরুরি পরামর্শে কল করুন:")}{" "}
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-brand-primary hover:underline">
                    {COMPANY_INFO.phone}
                  </a>
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>{t("Submit Project Inquiry", "কোটেশনের অনুরোধ পাঠান")}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
