"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Palette, Printer, ClipboardCheck, Truck, ChevronRight, ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

const steps = [
  {
    step: "01",
    title: "Share Requirement",
    description: "Submit details, sizes, materials, and guidelines via WhatsApp or our contact form.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Design & Confirmation",
    description: "Our design team creates vector mockups and sends them for your final approval.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Printing & Production",
    description: "We configure print profiles, load materials, and run the job on our machines.",
    icon: Printer,
  },
  {
    step: "04",
    title: "Quality Check",
    description: "Every item undergoes rigorous checking to verify alignment, colors, and cuts.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "Delivery / Pickup",
    description: "Collect from our Namchi storefront or receive quick local delivery at your address.",
    icon: Truck,
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="relative py-14 sm:py-20 lg:py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background glow orbs */}
      <div className="gradient-glow w-[350px] h-[350px] bg-accent/5 top-[10%] left-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[350px] h-[350px] bg-primary/5 bottom-[10%] right-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] sm:text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4"
          >
            OUR WORKFLOW
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight"
          >
            How We <span className="gradient-blue-text">Operate</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-2.5 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            A seamless, structured production path from raw concept files to final high-fidelity physical delivery.
          </motion.p>
        </div>

        {/* Timeline Grid Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-stretch justify-between gap-3 sm:gap-6 lg:gap-4 relative"
        >
          {steps.map((stepItem, idx) => {
            const IconComponent = stepItem.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={stepItem.step}>
                {/* Step Card */}
                <motion.div
                  variants={fadeInUp}
                  className="flex-1 glass-card p-5 sm:p-6 rounded-2xl sm:rounded-card border border-white/5 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Top Header */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <span className="text-xs sm:text-sm font-heading font-bold text-accent tracking-wider bg-accent/10 border border-accent/20 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                        Step {stepItem.step}
                      </span>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 flex-shrink-0">
                        <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-accent group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Step Title & Details */}
                    <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-1.5 sm:mb-2 tracking-wide group-hover:text-accent transition-colors duration-300">
                      {stepItem.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {stepItem.description}
                    </p>
                  </div>
                </motion.div>

                {/* Connecting Arrow */}
                {!isLast && (
                  <div className="flex items-center justify-center text-gray-500 lg:my-auto my-0.5">
                    {/* Mobile: Vertical Arrow */}
                    <ChevronDown className="w-5 h-5 lg:hidden text-accent/60" />
                    {/* Desktop: Horizontal Arrow */}
                    <ChevronRight className="w-6 h-6 hidden lg:block" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
