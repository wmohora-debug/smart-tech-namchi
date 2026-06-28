"use strict";

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Minimize2, 
  Expand 
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

const categories = ["All", "Printing", "Sports", "Machines", "Certificates", "Frames", "Shop"];

const galleryItems = [
  {
    title: "Namchi Shop Front",
    categories: ["Shop", "Certificates", "Frames"],
    description: "Our main storefront and design workspace located on Melli Road, Namchi.",
    src: "/gallery/Shop-front.jpeg",
  },
  {
    title: "High-Speed Print Plotter",
    categories: ["Machines", "Printing"],
    description: "Advanced industrial plotter machine for precise flex and digital banner prints.",
    src: "/gallery/printer-machine.jpeg",
  },
  {
    title: "Sublimated Jersey Proof",
    categories: ["Sports"],
    description: "Custom dye-sublimated football team jersey with vibrant anti-fade graphics.",
    src: "/gallery/football-jersey-1.jpeg",
  },
  {
    title: "Namchi Football Uniform",
    categories: ["Sports"],
    description: "Athletic jersey sublimation design featuring custom player numbering.",
    src: "/gallery/football-jersey-2.jpeg",
  },
  {
    title: "Pro Soccer Turf Cleats",
    categories: ["Sports"],
    description: "High-performance football shoes with professional grip spikes.",
    src: "/gallery/football-shoes-1.jpeg",
  },
  {
    title: "Turf Football Footwear",
    categories: ["Sports"],
    description: "Lightweight synthetic athletic shoes engineered for local turf grounds.",
    src: "/gallery/football-shoes-2.jpeg",
  },
  {
    title: "Sublimated Sports Spikes",
    categories: ["Sports"],
    description: "Professional sports shoe showcase with custom shock-absorption sole technology.",
    src: "/gallery/football-shoes-3.jpeg",
  },
  {
    title: "Team Athletic Footwear",
    categories: ["Sports"],
    description: "High-traction football cleats and equipment ready for tournament play.",
    src: "/gallery/football-shoes-4.jpeg",
  },
  {
    title: "Corporate Bill Books",
    categories: ["Printing"],
    description: "Custom printed carbonless bill books, cash memos, and receipts for Namchi businesses.",
    src: "/gallery/bill-books.png",
  },
  {
    title: "Academic Certificates",
    categories: ["Certificates", "Printing"],
    description: "Premium embossed seminar and graduation certificates with gold foil stamping.",
    src: "/gallery/certificates.jpg",
  },
  {
    title: "Digital Brochure Press",
    categories: ["Printing"],
    description: "Vibrant high-contrast marketing brochures, booklets, and promotional flyers.",
    src: "/gallery/digital-printing.jpg",
  },
  {
    title: "Hardcover Book Binding",
    categories: ["Printing"],
    description: "Professional leather-style hardcover binding with gold foil embossing for journals and theses.",
    src: "/gallery/hard-binding.jpeg",
  },
  {
    title: "Premium Photo Framing",
    categories: ["Frames"],
    description: "Bespoke wooden mouldings and clear glass frames for photography and artwork displays.",
    src: "/gallery/photo-framing.jpg",
  },
  {
    title: "PVC ID Cards",
    categories: ["Printing"],
    description: "High-durability plastic employee badges, student ID cards, and visitor passes.",
    src: "/gallery/pvc-id-card.jpeg",
  },
  {
    title: "Pre-Inked Rubber Stamps",
    categories: ["Printing"],
    description: "Self-inking corporate seals, dater stamps, and signature stamps for official use.",
    src: "/gallery/rubber-stamp.jpeg",
  },
  {
    title: "Spiral Document Binding",
    categories: ["Printing"],
    description: "Clean plastic spiral document bindings for reports, training manuals, and student projects.",
    src: "/gallery/spiral-binding.jpg",
  },
  {
    title: "Custom Achievement Trophies",
    categories: ["Sports"],
    description: "Laser-engraved achievement awards, sports league trophies, and customized corporate cups.",
    src: "/gallery/trophies.jpeg",
  },
];

export default function GalleryPreview() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.categories.includes(selectedCategory));

  const openLightbox = (index: number) => {
    setActivePhoto(index);
  };

  const closeLightbox = () => {
    setActivePhoto(null);
    setZoom(false);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const nextPhoto = () => {
    if (activePhoto !== null) {
      setActivePhoto((activePhoto + 1) % filteredItems.length);
      setZoom(false);
    }
  };

  const prevPhoto = () => {
    if (activePhoto !== null) {
      setActivePhoto((activePhoto - 1 + filteredItems.length) % filteredItems.length);
      setZoom(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhoto === null) return;
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto, filteredItems]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch(() => {});
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch(() => {});
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      nextPhoto();
    } else if (info.offset.x > swipeThreshold) {
      prevPhoto();
    }
  };

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };

  return (
    <section id="gallery" className="relative py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background Decor */}
      <div className="gradient-glow w-[350px] h-[350px] bg-primary/10 bottom-[20%] left-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4"
            >
              VISUAL SHOWCASE
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight"
            >
              Excellence in <span className="gradient-blue-text">Every Detail</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-btn bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,87,255,0.15)]"
            >
              Request Custom Design
            </a>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-start gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.src}
                onClick={() => openLightbox(index)}
                className="relative rounded-card overflow-hidden group cursor-zoom-in border border-white/5 shadow-xl aspect-[4/3]"
              >
                {/* Media with Shimmer Loading Overlay */}
                <div className="absolute inset-0 z-0 bg-card-dark">
                  {!loadedImages[item.src] && (
                    <div className="absolute inset-0 shimmer-loader z-10" />
                  )}
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
                    className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 ${
                      loadedImages[item.src] ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                    onLoad={() => handleImageLoad(item.src)}
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300 z-10" />

                {/* Detail */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 transition-all duration-300">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-1">
                    {item.categories.join(" / ")}
                  </span>
                  <h3 className="text-base font-heading font-bold text-white mb-1 leading-tight group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {item.description}
                  </p>
                </div>

                {/* Float Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 z-20">
                  <Expand className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            {/* Close trigger background */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox} />

            {/* Top Bar controls */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 text-white">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                  {filteredItems[activePhoto].categories.join(" / ")}
                </span>
                <span className="text-base font-bold font-heading">
                  {filteredItems[activePhoto].title}
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Toggle Fullscreen"
                >
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                {/* Zoom Button */}
                <button
                  onClick={() => setZoom(!zoom)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Toggle Zoom"
                >
                  {zoom ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                </button>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ scale: 0.95 }}
              animate={{ 
                scale: zoom ? 1.5 : 1,
                cursor: zoom ? "zoom-out" : "grab"
              }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative max-w-5xl w-full h-[70vh] md:h-[80vh] flex items-center justify-center z-0"
              onClick={(e) => {
                e.stopPropagation();
                setZoom(!zoom);
              }}
            >
              <Image
                src={filteredItems[activePhoto].src}
                alt={filteredItems[activePhoto].title}
                fill
                sizes="100vw"
                className="object-contain pointer-events-none select-none"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
