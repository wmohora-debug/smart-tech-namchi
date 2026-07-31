"use strict";

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Do you print certificates?",
    answer: "Yes! We print premium academic, corporate, and athletic certificates on high-quality heavy textured card stocks, linen, and parchment paper. We also offer elegant gold and silver metallic foil stamping options.",
  },
  {
    question: "Do you provide flex printing?",
    answer: "Yes, we operate grand-format flex banner printers in-house. We produce highly durable roadside banners, storefront signboards, roll-up banner stands, and backdrop panels using weather-proof and UV-resistant inks.",
  },
  {
    question: "Can I order custom jerseys?",
    answer: "Absolutely. We specialize in custom team jerseys using 100% full-dye sublimation on lightweight, moisture-wicking dry-fit mesh fabrics. This ensures that sponsor logos, player names, and numbers never crack, peel, or fade.",
  },
  {
    question: "How long does printing take?",
    answer: "Standard jobs like digital flyers, rubber stamps, and spiral bindings are often ready in 24 hours. Bulk flex prints, hardcover book bindings, and sublimated jerseys typically require 3-5 business days depending on order size.",
  },
  {
    question: "Do you design visiting cards?",
    answer: "Yes, our team provides professional pre-press design support. We can design your corporate business cards, menus, logos, invoice registers, and promotional flyers from scratch, or refine your existing vector drafts.",
  },
  {
    question: "Can I contact you through WhatsApp?",
    answer: "Yes, we encourage WhatsApp orders. You can message our business line (+91 77193 30915) to submit files (PDF, CDR, PNG), receive digital layout proofs, and request immediate pricing estimates directly on chat.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-14 sm:py-20 lg:py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Glow effect */}
      <div className="gradient-glow w-[380px] h-[380px] bg-primary/5 top-[30%] right-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[380px] h-[380px] bg-accent/5 bottom-[20%] left-[-10%] animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] sm:text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4"
          >
            COMMON INQUIRIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight leading-tight"
          >
            Frequently Asked <span className="gradient-blue-text">Questions</span>
          </motion.h2>
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-xl sm:rounded-2xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left cursor-pointer hover:bg-white/2 transition-colors duration-200 active:scale-[0.99]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-2.5 sm:space-x-3.5 pr-2 sm:pr-4 min-w-0">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 opacity-70" />
                    <span className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-400 flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </button>

                {/* Answer block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6 border-t border-white/5 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal pl-9 sm:pl-12">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
