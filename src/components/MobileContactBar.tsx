"use client";

import React from "react";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/companyData";
import { useLanguage } from "./LanguageContext";

interface MobileContactBarProps {
  onOpenQuote: () => void;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({ onOpenQuote }) => {
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-surface-border shadow-float px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-surface-blue text-brand-primary active:scale-95 transition-transform"
          aria-label={`Call MAP International Power at ${COMPANY_INFO.phone}`}
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">{t("Call Now", "কল করুন")}</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366]/10 text-[#128C7E] active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Get a Quote Action */}
        <button
          type="button"
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-brand-primary text-white shadow-sm active:scale-95 transition-transform"
          aria-label="Request a free solar quote"
        >
          <FileText className="w-5 h-5 mb-0.5 text-brand-yellow" />
          <span className="text-[11px] font-bold tracking-tight">{t("Get Quote", "কোটেশন")}</span>
        </button>
      </div>
    </aside>
  );
};
