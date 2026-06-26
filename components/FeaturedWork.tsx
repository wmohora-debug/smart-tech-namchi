"use strict";

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

const projectsList = [
  {
    title: "Flex Banner",
    image: "/gallery/printer-machine.jpeg",
    description: "Grand format billboard flex banner printed with UV-resistant vibrant inks.",
  },
  {
    title: "Sports Jerseys",
    image: "/gallery/football-jersey-2.jpeg",
    description: "Premium full-sublimation athletic jerseys customized for Namchi FC.",
  },
  {
    title: "Visiting Cards",
    image: "/gallery/Shop-front.jpeg",
    description: "Minimalist executive-grade business cards with custom spot-UV overlays.",
  },
  {
    title: "Certificates",
    image: "/gallery/Shop-front.jpeg",
    description: "Official achievement certificates printed on acid-free textured artboards.",
  },
  {
    title: "School ID Cards",
    image: "/gallery/Shop-front.jpeg",
    description: "High-durability PVC identity cards with double-sided design and barcodes.",
  },
  {
    title: "Photo Frames",
    image: "/gallery/Shop-front.jpeg",
    description: "Bespoke mahogany framing with double mat boards and anti-glare museum glass.",
  },
  {
    title: "Bill Books",
    image: "/gallery/Shop-front.jpeg",
    description: "Duplicate carbonless bill books with custom numbering and cover bindings.",
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="relative py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="gradient-glow w-[400px] h-[400px] bg-primary/5 top-[20%] right-[-10%] animate-pulse-slow" />
      <div className="gradient-glow w-[350px] h-[350px] bg-accent/5 bottom-[10%] left-[-10%] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4"
          >
            OUR RECENT OUTPUT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight"
          >
            Featured <span className="gradient-blue-text">Craftsmanship</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed"
          >
            Browse physical proofs of premium printing and customized products delivered to corporate groups and teams.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projectsList.map((project, idx) => {
            // Make the first card span 2 columns on lg to add organic layout variation (Apple style)
            const isFeatured = idx === 0;
            return (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className={`glass-card rounded-card border border-white/5 relative group overflow-hidden flex flex-col justify-between ${
                  isFeatured ? "md:col-span-2" : ""
                }`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden ${
                  isFeatured ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[16/9]"
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes={isFeatured ? "(max-w-1024px) 100vw, 60vw" : "(max-w-1024px) 100vw, 30vw"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-70" />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-white tracking-wide mb-2 flex items-center justify-between group-hover:text-accent transition-colors duration-300">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
