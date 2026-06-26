"use strict";

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MessageSquare, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Sports", href: "#sports" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-navbar py-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo and Name */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 border border-white/10">
            <Image
              src="/gallery/logo.png"
              alt="SMART TECH Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-heading font-bold text-lg tracking-wider leading-none">
              SMART TECH
            </span>
            <span className="text-accent font-heading font-medium text-xs tracking-widest mt-1">
              NAMCHI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-4 py-2 text-sm text-gray-400 font-medium hover:text-white rounded-lg transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-primary to-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/917719330915?text=Hello%20Smart%20Tech%20Namchi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-btn bg-primary hover:bg-primary/95 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 border border-white/10"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            WhatsApp Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-panel border-b border-white/5 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-2 text-base text-gray-300 font-medium hover:text-white border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a
                  href="https://wa.me/917719330915?text=Hello%20Smart%20Tech%20Namchi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-btn bg-primary text-white font-semibold text-sm transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
