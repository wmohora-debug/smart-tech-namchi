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

    const targetId = href.replace(/^#/, "");
    const element = document.getElementById(targetId) || document.querySelector(href);

    if (element) {
      setTimeout(() => {
        const navbarOffset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = Math.max(0, elementPosition - navbarOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "glass-navbar py-3 sm:py-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo and Name */}
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center space-x-2.5 sm:space-x-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 border border-white/10 flex-shrink-0">
            <Image
              src="/gallery/logo.png"
              alt="SMART TECH Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-heading font-bold text-base sm:text-lg tracking-wider leading-none select-none">
              SMART TECH
            </span>
            <span className="text-accent font-heading font-medium text-[10px] sm:text-xs tracking-widest mt-0.5 sm:mt-1 select-none">
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
          className="md:hidden flex items-center justify-center p-2.5 min-w-[42px] min-h-[42px] rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors active:scale-95"
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-bg-dark/95 border-b border-white/10 absolute top-full left-0 right-0 overflow-hidden shadow-2xl backdrop-blur-xl max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="px-5 py-5 flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="py-3 px-1 text-base text-gray-300 font-semibold hover:text-white border-b border-white/5 hover:border-white/10 hover:pl-2 transition-all duration-300 block whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col space-y-3">
                <a
                  href="https://wa.me/917719330915?text=Hello%20Smart%20Tech%20Namchi,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 rounded-btn bg-primary text-white font-semibold text-sm transition-all hover:bg-primary/90 shadow-lg shadow-primary/20 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
