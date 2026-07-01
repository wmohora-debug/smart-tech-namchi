"use strict";

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, ArrowRight, Sparkles, Layers, Cpu, Play, X } from "lucide-react";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "../lib/variants";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock page scrolling when video is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);
  const handleScrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector("#services");
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

  // Particles data for drift effect
  const particles = [
    { id: 1, size: 4, x: "15%", y: "20%", duration: 15, delay: 0 },
    { id: 2, size: 6, x: "75%", y: "15%", duration: 20, delay: 2 },
    { id: 3, size: 5, x: "40%", y: "60%", duration: 18, delay: 1 },
    { id: 4, size: 8, x: "85%", y: "70%", duration: 25, delay: 3 },
    { id: 5, size: 3, x: "25%", y: "80%", duration: 14, delay: 4 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark pt-20"
    >
      {/* Background Soft Grid Effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" />

      {/* Blue Gradient Glowing Spots */}
      <div className="gradient-glow w-[500px] h-[500px] bg-primary top-[-10%] left-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[600px] h-[600px] bg-accent bottom-[-10%] right-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[400px] h-[400px] bg-indigo-600 top-[30%] left-[60%] opacity-10 animate-pulse-slow" />

      {/* Slow Drifting Background Ambient Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: "rgba(0, 194, 255, 0.25)",
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Glass Shapes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[10%] w-24 h-24 rounded-3xl bg-white/2 backdrop-blur-md border border-white/5 pointer-events-none hidden md:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          rotate: [0, -4, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-[20%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 backdrop-blur-lg border border-white/5 pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-16 lg:py-24">
        {/* Left Side Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
        >
          {/* Logo Fades In */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-lg shadow-primary/25 border border-white/10 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/gallery/logo.png"
                alt="SMART TECH Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold text-base tracking-wider leading-none select-none">
                SMART TECH
              </span>
              <span className="text-accent font-heading font-semibold text-[10px] tracking-widest mt-1 select-none">
                NAMCHI
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full w-fit">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">
              NAMCHI'S PREMIER HUB
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.1]"
            >
              SMART TECH <br />
              <span className="gradient-blue-text">NAMCHI</span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl font-heading font-semibold text-gray-200 tracking-wide"
            >
              The Ultimate Printing Solution
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-normal"
            >
              Experience high-fidelity print solutions engineered with cutting-edge technology. From grand-scale flex printing to precise digital design, custom framing, jerseys, and trophies, we bring your vision to life with pixel-perfect accuracy and luxury finish.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-4 items-center"
          >
            <button
              onClick={handleScrollToServices}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-btn bg-primary hover:bg-primary/95 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:-translate-y-0.5 active:scale-95 border border-white/10 group cursor-pointer"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://wa.me/917719330915?text=Hello%20Smart%20Tech%20Namchi,%20I%20would%20like%20to%20inquire%20about%20your%20printing%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-btn glass-panel hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,194,255,0.2)] text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-accent" />
              WhatsApp
            </a>

            <a
              href="tel:+917719330915"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-btn bg-white/5 hover:bg-white/10 hover:border-white/10 text-white font-semibold text-sm transition-all duration-300 border border-white/5 hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-4 h-4 mr-2 text-gray-400" />
              Call Now
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Visual Illustration - Clickable for Virtual Tour */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative cursor-pointer group"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Main Visual Container */}
          <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square rounded-[32px] glass-panel border border-white/10 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-60 z-10 pointer-events-none" />
            
            {/* Image element */}
            <Image
              src="/gallery/new-shop-front.jpeg"
              alt="SMART TECH Namchi Shop Front"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/20 group-hover:bg-black/45 transition-colors duration-500">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg shadow-primary/30 border border-white/20 transition-all duration-300 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
              >
                <Play className="w-6 h-6 fill-white ml-1" />
              </motion.div>
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full glass-card border border-white/10 text-[9px] font-bold text-accent uppercase tracking-widest flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                Virtual Tour
              </div>
            </div>
            
            {/* Overlay badge/text */}
            <div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-2xl glass-card border border-white/10 backdrop-blur-md flex justify-between items-center">
              <div>
                <h3 className="text-white text-xs font-bold font-heading tracking-wide uppercase">SMART TECH Namchi</h3>
                <p className="text-gray-400 text-[10px] mt-0.5">Melli Road, Namchi, South Sikkim</p>
              </div>
              <div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Tour Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors duration-300 z-[110]"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl max-h-[85vh] aspect-[9/16] sm:aspect-video rounded-2xl border border-white/10 bg-bg-dark overflow-hidden shadow-2xl z-[105]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/gallery/Virtual-Tour.mp4"
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
