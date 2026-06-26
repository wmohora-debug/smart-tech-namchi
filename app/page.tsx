"use strict";

"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import WhyTrustUs from "../components/WhyTrustUs";
import About from "../components/About";
import Services from "../components/Services";
import HowWeWork from "../components/HowWeWork";
import GalleryPreview from "../components/GalleryPreview";
import SportsSection from "../components/SportsSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactPreview from "../components/ContactPreview";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import CustomCursor from "../components/CustomCursor";
import Loader from "../components/Loader";
import QuoteModal from "../components/QuoteModal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Custom Desktop-Only Glowing Cursor */}
      <CustomCursor />

      {/* PWA Floating Get Quote CTA Form & Trigger */}
      <QuoteModal />

      {/* Preloader Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Page Content - Only reveal fully once Loader exits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen flex flex-col"
      >
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Layout */}
        <main className="flex-1">
          {/* Full-screen Hero Banner */}
          <Hero />

          {/* Core Selling Points */}
          <WhyChooseUs />

          {/* Detailed Customer Trust Commitments */}
          <WhyTrustUs />

          {/* Company History and Scroll Stats Counter */}
          <About />

          {/* Grid-based Core Print Services & Spec Modals */}
          <Services />

          {/* Work Timeline and Process Workflow */}
          <HowWeWork />

          {/* Asymmetrical Grid Gallery Visual Showcase */}
          <GalleryPreview />

          {/* Sport Uniforms & Footwear Highlight */}
          <SportsSection />

          {/* Customer Testimonial Slider */}
          <Testimonials />

          {/* FAQ Accordion Section */}
          <FAQ />

          {/* Contact Info and Message Form */}
          <ContactPreview />

          {/* Conversion CTA right before footer */}
          <FinalCTA />
        </main>

        {/* Footer Branding Info */}
        <Footer />

        {/* Mobile Floating Direct Action Actions */}
        <FloatingButtons />
      </motion.div>
    </>
  );
}
