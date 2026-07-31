"use strict";

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

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

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col md:hidden space-y-3 pb-[env(safe-area-inset-bottom)]"
        >
          {/* Phone Button */}
          <a
            href="tel:+917719330915"
            className="w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] rounded-full bg-primary text-white flex items-center justify-center shadow-xl border border-white/15 hover:bg-primary/90 active:scale-95 transition-all"
            aria-label="Call Now"
          >
            <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917719330915?text=Hello%20Smart%20Tech%20Namchi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 sm:w-12 sm:h-12 min-w-[44px] min-h-[44px] rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl border border-white/15 hover:bg-emerald-600 active:scale-95 transition-all"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
