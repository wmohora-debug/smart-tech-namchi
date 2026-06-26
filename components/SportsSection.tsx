"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shirt, Footprints, Cpu, Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

const categories = [
  {
    icon: Shirt,
    title: "Sublimated Jerseys",
    description: "Custom-tailored jerseys for clubs, schools, and corporate leagues. Engineered with moisture-wicking interlock mesh and premium dye-sublimation print that guarantees zero peeling, fading, or cracking.",
    features: ["Vapor-knit breathable structure", "Custom numbers, names, and logos", "Overlock durable stitching"],
    images: ["/gallery/football-jersey-1.jpeg", "/gallery/football-jersey-2.jpeg"],
  },
  {
    icon: Footprints,
    title: "Football Shoes & Cleats",
    description: "Premium selection of professional football cleats, turf shoes, and indoor futsal footwear. Designed for maximum agility, touch control, and traction on local natural or artificial pitches.",
    features: ["Lightweight TPU speed plates", "High-grip studs and configuration", "Conical stud geometry"],
    images: ["/gallery/football-shoes-1.jpeg", "/gallery/football-shoes-2.jpeg", "/gallery/football-shoes-3.jpeg", "/gallery/football-shoes-4.jpeg"],
  },
  {
    icon: Star,
    title: "Sports Accessories & Equipment",
    description: "Complete team kits including personalized training bibs, backpacks, professional shinguards, socks, and custom tournament balls. Complete outfit cohesion for your squad.",
    features: ["Durable water-resistant fabrics", "Custom club crest printing", "Ergonomic designs"],
    images: ["/gallery/Shop-front.jpeg"],
  },
];

export default function SportsSection() {
  return (
    <section id="sports" className="relative py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="gradient-glow w-[400px] h-[400px] bg-primary/10 top-[20%] right-[-10%] animate-pulse-slow" />
      <div className="absolute bottom-[5%] left-[5%] w-64 h-64 rounded-full border border-white/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4"
          >
            SPORTS DIVISION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight"
          >
            Unleash Team Identity with <span className="gradient-blue-text">Pro Sports Gear</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed"
          >
            We supply high-performance sportswear and custom gear, engineered to give your team a psychological and physical edge.
          </motion.p>
        </div>

        {/* Split Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-card overflow-hidden border border-white/10 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent z-10 opacity-70" />
              
              <Image
                src="/gallery/football-jersey-1.jpeg"
                alt="Premium sports uniforms and jerseys showcase"
                fill
                sizes="(max-w-768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Float specs details */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-6 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <Cpu className="w-5 h-5 text-accent" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">
                    SUBLIMATION TECH
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Every fiber is dyed with high-density Italian sublimation inks. Colors remain vibrant and fabrics highly breathable, wash after wash.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Categories */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6"
          >
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  variants={fadeInUp}
                  className="glass-card p-6 rounded-card border border-white/5 relative group hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:text-primary group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 flex-shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Copy */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-lg sm:text-xl font-heading font-semibold text-white tracking-wide">
                        {cat.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Bullet Features */}
                      <div className="flex flex-wrap gap-x-6 gap-y-1.5 pt-2">
                        {cat.features.map((feat) => (
                          <div key={feat} className="flex items-center space-x-2 text-xs text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Sub-gallery of Actual Photographs */}
                      <div className="flex flex-wrap gap-3 pt-3">
                        {cat.images.map((imgSrc, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/10 hover:border-accent/30 transition-colors"
                          >
                            <Image
                              src={imgSrc}
                              alt={`${cat.title} sample ${imgIdx + 1}`}
                              fill
                              sizes="64px"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
