"use client";

import React, { useState, createContext, useContext } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileContactBar } from "./MobileContactBar";
import { QuoteModal } from "./QuoteModal";

interface ModalContextType {
  openQuoteModal: (data?: { bill?: number; capacity?: number; solution?: string; productName?: string }) => void;
  closeQuoteModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export const useQuoteModal = () => useContext(ModalContext);

export const AppShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState<{
    bill?: number;
    capacity?: number;
    solution?: string;
    productName?: string;
  }>({});

  const openQuoteModal = (data?: { bill?: number; capacity?: number; solution?: string; productName?: string }) => {
    if (data) {
      setModalInitialData(data);
    } else {
      setModalInitialData({});
    }
    setIsModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      <div className="min-h-screen flex flex-col bg-surface-bg text-text-primary selection:bg-brand-primary selection:text-white">
        <Navbar onOpenQuote={() => openQuoteModal()} />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileContactBar onOpenQuote={() => openQuoteModal()} />
        <QuoteModal
          isOpen={isModalOpen}
          onClose={closeQuoteModal}
          initialData={modalInitialData}
        />
      </div>
    </ModalContext.Provider>
  );
};
