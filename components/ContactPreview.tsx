"use strict";

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Digital Printing",
    message: "",
  });

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    const text = `Hello Smart Tech Namchi, my name is ${formData.name}. I am inquiring about "${formData.service}". ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/917719330915?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background gradients */}
      <div className="gradient-glow w-[450px] h-[450px] bg-primary/10 bottom-[-10%] right-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[350px] h-[350px] bg-accent/5 top-[-10%] left-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[11px] sm:text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full mb-3 sm:mb-4"
          >
            GET IN TOUCH
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight leading-tight"
          >
            Let's Initialize Your <span className="gradient-blue-text">Next Project</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Get a high-fidelity consultation, sample print proofs, or project quotes. Reach out through our portal or visit us directly.
          </motion.p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Direct Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-6"
          >
            {/* Card Address */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-card border border-white/5 flex flex-col justify-between space-y-4 sm:space-y-5"
            >
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <a
                  href="https://maps.app.goo.gl/CGAf2muTyxyZufX48?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all flex-shrink-0"
                  title="Open exact location in Google Maps"
                >
                  <MapPin className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </a>
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest">
                      Our Address
                    </h3>
                    <span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded border border-primary/20 text-accent font-mono">MAP</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/CGAf2muTyxyZufX48?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent text-sm sm:text-base font-medium leading-relaxed transition-colors block mt-1"
                    title="Open exact location in Google Maps"
                  >
                    Smart Tech Namchi, Melli Road, <br />
                    Near District Court, Namchi, <br />
                    South Sikkim, India 737126
                  </a>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/CGAf2muTyxyZufX48?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 sm:py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-accent hover:text-white font-semibold text-xs transition-all duration-300 border border-primary/20 hover:border-primary/40 group cursor-pointer active:scale-95"
              >
                <MapPin className="w-4 h-4 mr-2 text-accent group-hover:scale-110 transition-transform" />
                Get Directions
              </a>
            </motion.div>

            {/* Card Contacts */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-card border border-white/5 flex items-start space-x-3.5 sm:space-x-4"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                <Phone className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </div>
              <div className="space-y-2 flex-1 min-w-0">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  Direct Inquiries
                </h3>
                <div className="flex flex-col space-y-1.5">
                  <a
                    href="tel:+917719330915"
                    className="text-white hover:text-accent font-heading font-bold text-base sm:text-lg transition-colors flex items-center justify-between"
                  >
                    <span>+91 77193 30915</span>
                    <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/10 text-gray-400 font-mono">CALL</span>
                  </a>
                  <a
                    href="https://wa.me/917719330915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 font-heading font-bold text-base sm:text-lg transition-colors flex items-center justify-between"
                  >
                    <span>+91 77193 30915</span>
                    <span className="text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-emerald-400 font-mono">WHATSAPP</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card Hours */}
            <motion.div
              variants={fadeInUp}
              className="glass-card p-5 sm:p-6 rounded-2xl sm:rounded-card border border-white/5 flex items-start space-x-3.5 sm:space-x-4"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent flex-shrink-0">
                <Clock className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  Business Hours
                </h3>
                <p className="text-white text-sm sm:text-base font-medium">
                  Monday – Sunday: <br />
                  <span className="text-accent">9:00 AM – 7:30 PM</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Portal Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-card border border-white/10 relative h-full flex flex-col justify-between shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
              
              {/* Form header */}
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1.5 sm:mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Complete the secure fields below. We typically reply within 2 hours.
                </p>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-white text-xs sm:text-sm outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-white text-xs sm:text-sm outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Required Service
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-white text-xs sm:text-sm outline-none transition-colors cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' class='w-4 h-4'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundPosition: "right 16px center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "16px",
                    }}
                  >
                    <option value="Digital Printing" className="bg-bg-dark text-white">Digital Printing</option>
                    <option value="Flex Printing" className="bg-bg-dark text-white">Flex Printing</option>
                    <option value="ID Cards" className="bg-bg-dark text-white">PVC ID Cards</option>
                    <option value="Certificates" className="bg-bg-dark text-white">Certificates</option>
                    <option value="Rubber Stamps" className="bg-bg-dark text-white">Rubber Stamps</option>
                    <option value="Photo Framing" className="bg-bg-dark text-white">Photo Framing</option>
                    <option value="Bill Books" className="bg-bg-dark text-white">Bill Books</option>
                    <option value="Book Binding" className="bg-bg-dark text-white">Book Binding</option>
                    <option value="Sports Goods & Jerseys" className="bg-bg-dark text-white">Sports Goods & Jerseys</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Project Requirements / Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 hover:border-white/20 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-white text-xs sm:text-sm outline-none transition-colors resize-none"
                    placeholder="Provide details about size, quantity, media weight, and turnaround expectations..."
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!formData.name || !formData.message}
                    className="w-full inline-flex items-center justify-center px-5 py-3.5 sm:px-6 sm:py-4 rounded-btn bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 border border-emerald-500/30 disabled:opacity-40 cursor-pointer active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5 mr-2" />
                    Send via WhatsApp
                  </button>
                </div>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
