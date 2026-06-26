"use strict";

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Placeholder Testimonials - Replace with real client reviews in production
const testimonialsData = [
  {
    id: 1,
    name: "Tashi Namgyal",
    role: "Local Tournament Organizer",
    rating: 5,
    text: "Smart Tech Namchi delivered 40 custom dye-sublimated soccer jerseys within a week. The printing quality is outstanding, and the fabric is extremely breathable. Highly recommended for sports teamwear in Sikkim!",
  },
  {
    id: 2,
    name: "Dr. P. S. Subba",
    role: "Academic Administrator",
    rating: 5,
    text: "We regularly print school PVC ID cards, certificates, and hard-bound journals here. The text embossing and color match are precise. Having a premium studio in South Sikkim saves us massive logistics costs.",
  },
  {
    id: 3,
    name: "Prerna Chettri",
    role: "Namchi Business Owner",
    rating: 5,
    text: "Exceptional quality on our corporate visiting cards and cash memo bill books. The pre-inked rubber stamps are clean and don't smudge. Quick turnarounds and transparent pricing every single time.",
  },
  {
    id: 4,
    name: "Rohan Pradhan",
    role: "Creative Agency Director",
    rating: 5,
    text: "Best photo framing and flex banner services near District Court. They use high-grade wooden mouldings and premium acrylic glass that protects the art prints beautifully. Very professional staff.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section id="testimonials" className="relative py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Glow Backdrops */}
      <div className="gradient-glow w-[350px] h-[350px] bg-accent/5 top-[10%] left-[-5%] animate-pulse-slow" />
      <div className="gradient-glow w-[350px] h-[350px] bg-primary/5 bottom-[10%] right-[-5%] animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4"
          >
            CLIENT REVIEWS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight"
          >
            Trusted by the <span className="gradient-blue-text">Community</span>
          </motion.h2>
        </div>

        {/* Carousel Card Area */}
        <div 
          className="relative min-h-[300px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass-panel p-8 md:p-10 rounded-card border border-white/5 w-full relative flex flex-col md:flex-row items-start gap-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-white/5 pointer-events-none" />

              <div className="flex-1 space-y-4">
                {/* Star rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium italic">
                  "{testimonialsData[activeIndex].text}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-white font-heading font-bold text-base tracking-wide">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {testimonialsData[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-16 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-16 w-11 h-11 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet Pagination Indicators */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonialsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx ? "bg-accent w-6" : "bg-white/10 hover:bg-white/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
