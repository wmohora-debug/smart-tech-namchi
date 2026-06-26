"use strict";

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, X, Send, MessageSquare } from "lucide-react";

const servicesList = [
  "Digital Printing",
  "Flex Printing",
  "PVC ID Card",
  "Certificates",
  "Bill Books",
  "Rubber Stamp",
  "Photo Framing",
  "Spiral Binding",
  "Hard Binding",
  "Trophies",
  "Sports Goods",
  "Jerseys"
];

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Digital Printing",
    requirement: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.requirement) return;

    // Generate custom Whatsapp message template
    const text = `Hello SMART TECH NAMCHI,

My name is ${formData.name} (Phone: ${formData.phone || "N/A"}).
I am requesting a quotation for: *${formData.service}*.

*Requirement details:*
${formData.requirement}

--------------------------------
Generated via Smart Tech Namchi Portal`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917719330915?text=${encoded}`, "_blank");

    // Close and reset
    setIsOpen(false);
    setFormData({
      name: "",
      phone: "",
      service: "Digital Printing",
      requirement: ""
    });
  };

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating CTA Trigger Button */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-primary hover:bg-primary/95 text-white font-semibold text-sm shadow-xl shadow-primary/25 border border-white/10 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
            aria-label="Request Quote"
          >
            <FileText className="w-4 h-4 text-accent" />
            <span>Get Quote</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            {/* Backdrop click trigger */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)} />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-lg w-full rounded-card border border-white/10 glass-panel p-8 shadow-2xl z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 id="quote-modal-title" className="text-xl font-heading font-extrabold text-white">
                    Request Quotation
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Submit your requirements to connect with our design/print team.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/5"
                  aria-label="Close quote modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="quote-name" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-phone" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Contact Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                    placeholder="e.g. +91 99999 99999"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-service" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Required Service
                  </label>
                  <select
                    id="quote-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' class='w-4 h-4'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundPosition: "right 16px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "16px",
                    }}
                  >
                    {servicesList.map((serviceName) => (
                      <option key={serviceName} value={serviceName} className="bg-bg-dark text-white">
                        {serviceName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="quote-req" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Requirement specifications
                  </label>
                  <textarea
                    id="quote-req"
                    required
                    rows={4}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
                    placeholder="Provide details about size, quantity, materials, and deadlines..."
                  />
                </div>

                {/* Submit */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center py-3.5 rounded-btn bg-primary hover:bg-primary/95 text-white font-semibold text-sm transition-all shadow-lg shadow-primary/25 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-accent" />
                    Inquire via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-3.5 rounded-btn bg-white/5 hover:bg-white/10 text-white border border-white/5 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
