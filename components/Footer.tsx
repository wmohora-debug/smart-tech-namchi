"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9.101 23.656V12.234H4.585V7.747h4.516V4.453c0-4.471 2.73-6.906 6.714-6.906 1.907 0 3.548.141 4.025.204v4.666h-2.76c-2.169 0-2.59 1.03-2.59 2.544v3.334h5.17l-.675 4.487h-4.495v11.412H9.101z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764.784-1.764 1.75-1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
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

  return (
    <footer className="relative bg-bg-dark border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute bottom-0 right-[20%] w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand Profile */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 border border-white/10">
                <Image
                  src="/gallery/logo.png"
                  alt="SMART TECH Logo"
                  fill
                  className="object-cover"
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
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Namchi's leading hub for professional printing and digital product sublimations. Empowering businesses and sports teams with precision execution and premium craftsmanship.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3.5 pt-2">
              {[
                { icon: InstagramIcon, href: "https://www.instagram.com/smart_tech_namchi?igsh=aXl5YmdxaTgxajVq" },
              ].map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                  >
                    <IconComp className="w-4.5 h-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Sports Division", href: "#sports" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Summary */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Core Expertise
            </h3>
            <ul className="space-y-3">
              {[
                "Large Format Flex Printing",
                "High-Speed Digital Printing",
                "Sublimated Sports Jerseys",
                "Bespoke Photo Framing",
                "Laser Engraved Trophies",
                "PVC Identity Cards",
              ].map((service) => (
                <li key={service} className="text-sm text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Info */}
          <div className="lg:col-span-3 space-y-5">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  Melli Road, Near District Court, <br />
                  Namchi, South Sikkim, India 737126
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+917719330915" className="hover:text-white transition-colors">
                  +91 77193 30915
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:Sachinlimbu2000@gmail.com" className="hover:text-white transition-colors">
                  Sachinlimbu2000@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Smart Tech Namchi. All rights reserved. Designed with precision.
          </div>
          
          <div className="flex items-center space-x-8 text-xs text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            
            {/* Scroll to Top */}
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
