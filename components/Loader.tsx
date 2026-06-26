"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const duration = 1200; // Total duration of loading in ms
    const intervalTime = 30;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      if (!isMounted) return;
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (isMounted) {
              onFinish();
            }
          }, 200); // Small buffer before fade out
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => {
      isMounted = false;
      clearInterval(timer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-bg-dark flex flex-col items-center justify-center p-6"
    >
      <div className="flex flex-col items-center max-w-xs w-full space-y-8">
        
        {/* Animated Brand Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Pulsing Outer Glow */}
          <div className="absolute inset-0 bg-primary/25 rounded-2xl filter blur-xl animate-pulse" />
          
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/gallery/logo.png"
              alt="SMART TECH Logo"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Company Title */}
        <div className="text-center space-y-1.5">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-white font-heading font-bold text-lg tracking-widest uppercase"
          >
            SMART TECH
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-accent font-heading font-medium text-[10px] tracking-widest uppercase"
          >
            The Ultimate Printing Solution
          </motion.p>
        </div>

        {/* Loading Progress Bar Container */}
        <div className="w-full space-y-2">
          <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_#00C2FF]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
            <span>INITIALIZING ENGINE</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
