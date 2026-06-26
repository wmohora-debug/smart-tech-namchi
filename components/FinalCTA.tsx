"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-28 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Visual background glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="gradient-glow w-[550px] h-[550px] bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 filter blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center">
        
        {/* Visual Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block text-[10px] font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-4.5 py-2 rounded-full mb-6"
        >
          START YOUR PROJECT
        </motion.div>

        {/* Big Typography Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight text-white mb-6"
        >
          Ready to Bring Your <br className="hidden sm:inline" />
          <span className="gradient-blue-text">Vision to Life?</span>
        </motion.h2>

        {/* Copywriting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Connect with our Namchi design and printing technicians today. Whether you need corporate visiting cards, high-contrast flex banners, or custom dye-sublimation sports jerseys, we guarantee precision engineering and fast turnaround.
        </motion.p>

        {/* Buttons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/917719330915?text=Hello%20Smart%20Tech%20Namchi,%20I%20have%20a%20new%20printing%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-7 py-4 rounded-btn bg-primary hover:bg-primary/95 text-white font-bold text-sm transition-all shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:-translate-y-0.5 active:scale-95 border border-white/10"
          >
            <MessageSquare className="w-4.5 h-4.5 mr-2" />
            Chat on WhatsApp
          </a>

          <a
            href="tel:+917719330915"
            className="inline-flex items-center justify-center px-7 py-4 rounded-btn bg-white/5 hover:bg-white/10 border border-white/5 text-white font-bold text-sm transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <Phone className="w-4.5 h-4.5 mr-2 text-gray-400" />
            Call Us Now
          </a>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center px-7 py-4 rounded-btn bg-white/3 hover:bg-white/5 border border-white/10 text-white font-bold text-sm transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <span>Request Quote</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 text-accent" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
