"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lag follower effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const smallScreen = window.innerWidth < 768;
      setIsMobile(isTouch || smallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile || !visible) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-accent/40 bg-accent/10 pointer-events-none z-50 mix-blend-screen shadow-[0_0_15px_rgba(0,194,255,0.4)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.8 }}
      exit={{ scale: 0, opacity: 0 }}
    />
  );
}
