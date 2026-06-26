"use strict";

"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Users, FolderCheck, Cpu, Calendar } from "lucide-react";
import { fadeInUp, staggerContainer, scaleUp } from "../lib/variants";

// Custom Intersection-Observer-based Counter
function Counter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animationFrameId = requestAnimationFrame(updateCount);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

// Placeholder statistics - feel free to replace with real business figures later
const statsData = [
  { icon: Calendar, end: 12, suffix: "+", label: "Years Experience" },
  { icon: FolderCheck, end: 12000, suffix: "+", label: "Projects" },
  { icon: Cpu, end: 12, suffix: "", label: "Services" },
  { icon: Users, end: 99, suffix: "%", label: "Customer Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background decoration */}
      <div className="gradient-glow w-[400px] h-[400px] bg-primary/5 top-[30%] left-[-10%] animate-pulse-slow" />
      <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full border border-white/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Side: Image Showcase with Overlay Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-card overflow-hidden border border-white/10 group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              <Image
                src="/gallery/Shop-front.jpeg"
                alt="Smart Tech Namchi storefront in Melli Road"
                fill
                sizes="(max-w-768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
            </div>

            {/* Float Overlay Card */}
            <motion.div
              variants={scaleUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="absolute -bottom-6 -right-6 md:right-4 p-6 rounded-card glass-panel border border-white/10 shadow-2xl max-w-[200px] z-20 text-center"
            >
              <span className="text-3xl font-heading font-black text-accent block mb-1">
                Est. 2014
              </span>
              <span className="text-xs font-semibold text-gray-300 uppercase tracking-widest block">
                Namchi, Sikkim
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side: Copy & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="inline-block text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full"
              >
                ABOUT OUR COMPANY
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight"
              >
                Pioneering Print & Sports Sublimation in <span className="gradient-blue-text">Namchi</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-base md:text-lg leading-relaxed mt-4"
              >
                Welcome to SMART TECH NAMCHI, South Sikkim's premier destination for high-fidelity digital printing, flex banner production, and custom athletic wear. Conveniently located near the District Court on Melli Road, we serve businesses, schools, tournaments, and local communities with precise craftsmanship.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-400 text-sm leading-relaxed"
              >
                Our modern print studio integrates creative design with advanced mechanical production. We specialize in producing premium PVC ID cards, custom trophies, professional certificates, photo framing, spiral binding, library hard binding, invoice bill books, and customized business stationery. Guided by an absolute commitment to quality and customer satisfaction, we ensure every project meets international standards.
              </motion.p>
            </div>

            {/* Core Values Bullet List */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Modern printing technology",
                "Sublimation jersey expertise",
                "Premium framing and trophies",
                "Maximum customer satisfaction",
              ].map((value) => (
                <motion.div
                  key={value}
                  variants={fadeInUp}
                  className="flex items-center space-x-3 text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics Section Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5"
            >
              {statsData.map((stat) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    className="p-4 rounded-xl bg-card-dark/40 border border-white/5 hover:border-white/10 transition-colors duration-300"
                  >
                    <IconComp className="w-5 h-5 text-accent mb-2 opacity-80" />
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white block tracking-tight">
                      <Counter end={stat.end} suffix={stat.suffix} />
                    </span>
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1 block">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
