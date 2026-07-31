"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Settings, 
  BadgeCheck, 
  Clock, 
  HelpCircle, 
  MapPin,
  HeartHandshake
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

const trustReasons = [
  {
    icon: Settings,
    title: "Professional Equipment",
    description: "Equipped with high-performance production plotters, laser engravers, and high-fidelity thermal sublimation gear to ensure maximum definition.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description: "Every file, substrate, fabric batch, and frame spacing undergoes multi-point checks. We do not deliver until colors align with design specs.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Our digital pre-press workflow and automated cutting systems speed up manufacturing, enabling same-day or next-day local pickups.",
  },
  {
    icon: MapPin,
    title: "Local Business",
    description: "Conveniently located near the District Court on Melli Road in Namchi. Sourcing locally eliminates shipping costs and simplifies proofing.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Support",
    description: "Direct access to creative designers and print operators. Inquire via WhatsApp, email, or visit our studio for face-to-face consultation.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments & Billing",
    description: "Clear, upfront quotations with detailed invoices. Safe payment options and corporate accounts available for local Sikkim departments.",
  },
];

export default function WhyTrustUs() {
  return (
    <section id="why-trust-us" className="relative py-14 sm:py-20 lg:py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background radial soft light */}
      <div className="gradient-glow w-[450px] h-[450px] bg-primary/5 top-[10%] left-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[450px] h-[450px] bg-accent/5 bottom-[10%] right-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] sm:text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4"
          >
            OUR COMMITMENTS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight"
          >
            Why Customers Trust <span className="gradient-blue-text">SMART TECH NAMCHI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Over the years, we have built a reputation for excellence, reliability, and precision. Here is how we earn your trust with every order.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {trustReasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="glass-card p-5 sm:p-8 rounded-2xl sm:rounded-card border border-white/5 relative group overflow-hidden flex flex-col justify-between"
              >
                {/* Visual accent top edge */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white tracking-wide group-hover:text-accent transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
