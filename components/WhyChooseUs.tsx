"use strict";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Tag, Cpu, Zap, ShieldCheck, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Every print job undergoes strict inspection, delivering crisp vector lines, exact color replication, and high-definition details.",
  },
  {
    icon: Cpu,
    title: "Latest Machines",
    description: "Powered by modern printing machinery including advanced UV flatbed printers, heavy-duty digital presses, and industry-grade sublimation plotters.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Our optimized production workflow and rapid mechanical throughput ensure quick turnarounds and prompt deliveries across South Sikkim.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Local Service",
    description: "Over a decade of reliable service, partnering with local educational departments, government offices, business teams, and clubs in Namchi.",
  },
  {
    icon: Users,
    title: "Professional Design Support",
    description: "Skilled designer specialists and print operators who calibrate machinery to achieve perfect alignment and material selections.",
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description: "Get high-end premium print finishes and dry-fit jersey materials at competitive pricing models tailored to meet local budgets.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background Orbs */}
      <div className="gradient-glow w-[350px] h-[350px] bg-primary/10 top-[20%] right-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[350px] h-[350px] bg-accent/10 bottom-[10%] left-[-15%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4"
          >
            OUR DISTINCTIONS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight"
          >
            Why Industry Leaders Choose <span className="gradient-blue-text">Smart Tech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed"
          >
            We merge design sophistication with mechanical excellence to deliver results that elevate your business.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center"
        >
          {features.map((feat) => {
            const IconComponent = feat.icon;
            
            return (
              <motion.div
                key={feat.title}
                variants={fadeInUp}
                className="glass-card p-8 rounded-card border border-white/5 relative group overflow-hidden"
              >
                {/* Glowing Card Border Top Hover effect */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Visual Icon Header */}
                <div className="mb-6 relative">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  {/* Subtle Background Glow behind icon */}
                  <div className="absolute inset-0 bg-primary/20 rounded-xl filter blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-white mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
