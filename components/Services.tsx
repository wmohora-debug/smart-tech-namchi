"use strict";

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Printer, 
  Maximize, 
  IdCard, 
  Award, 
  Stamp, 
  Frame, 
  Receipt, 
  BookOpen, 
  Book, 
  Trophy, 
  Activity, 
  Shirt,
  ArrowRight,
  X,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../lib/variants";

interface ServiceItem {
  icon: React.ComponentType<any>;
  title: string;
  image: string;
  description: string;
  applications: string[];
  benefits: string[];
  whatsappTemplate: string;
}

const servicesList: ServiceItem[] = [
  {
    icon: Printer,
    title: "Digital Printing",
    image: "/gallery/digital-printing.jpg",
    description: "High-definition color laser printing on premium ivory, glossy, matte, and specialty papers. Perfect for business cards, flyers, and premium marketing pamphlets.",
    applications: ["Executive Business Cards", "Product Catalogs & Brochures", "Premium Flyers & Leaflets", "Official Letterheads & Envelopes"],
    benefits: ["Crisp vector-sharp laser output", "Accurate CMYK color mapping", "Wide choice of heavy paper stocks", "Fast print turnarounds"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI would like a quotation for Digital Printing services.",
  },
  {
    icon: Maximize,
    title: "Flex Printing",
    image: "/gallery/printer-machine.jpeg",
    description: "Grand-format flex banner, billboard, and vinyl printing with weather-resistant inks. We deliver outstanding color fidelity, tear-proof materials, and high-visibility contrast.",
    applications: ["Outdoor Roadside Billboards", "Shopfront Glossy/Matte Signboards", "Exhibition Roll-up Stands", "Political & Event Backdrop Flexes"],
    benefits: ["Grand-format high-speed plotters", "UV & water-resistant inks", "Heavy-duty tearproof materials", "Custom eyelets and border bindings"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI need a quotation for Flex Printing banners/signboards.",
  },
  {
    icon: IdCard,
    title: "PVC ID Card",
    image: "/gallery/pvc-id-card.jpeg",
    description: "High-durability plastic PVC identity cards for corporate employees, schools, and organizations. Equipped with thermal transfer and protective lamination.",
    applications: ["School & College Student IDs", "Corporate Employee Badges", "Government Identification Cards", "Visitor Pass & Membership Cards"],
    benefits: ["Durable tearproof PVC sheets", "Thermal dye-sublimation print", "Barcode / QR code integration", "Matching custom lanyards available"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI would like a quotation for custom PVC ID Cards.",
  },
  {
    icon: Award,
    title: "Certificates",
    image: "/gallery/certificates.jpg",
    description: "Archival-quality textured certificate printing with luxury options like metallic foil stamping, security watermark seals, and custom layouts.",
    applications: ["Sports Tournament Awards", "Academic Board Certificates", "Corporate Training completion", "Workshop Merit recognitions"],
    benefits: ["Premium heavy texture parchment paper", "Gold/silver metallic foil stamping", "High-definition custom frame compatibility", "Watermark security printing margins"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI need custom printed Certificates for an upcoming event.",
  },
  {
    icon: Receipt,
    title: "Bill Books",
    image: "/gallery/bill-books.png",
    description: "Custom carbonless copy bill books, cash memos, and receipts. Features serial numbering, clean perforations, and customized branding.",
    applications: ["Corporate Invoice Books", "Retail Shop Cash Memos", "Delivery Challan pads", "Order Booking booklets"],
    benefits: ["Duplicate or triplicate carbonless copy", "Customized serial page numbering", "Micro-perforations for easy tearing", "Sturdy cardboard bindings"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI would like to get custom printed Invoice Bill Books.",
  },
  {
    icon: Stamp,
    title: "Rubber Stamp",
    image: "/gallery/rubber-stamp.jpeg",
    description: "Professional self-inking, pre-inked, and wood handle rubber stamps. Precision laser-engraved plates for clean, smudge-free impressions.",
    applications: ["Corporate seal signatures", "Bank transaction stamps", "Official department endorsements", "Standard Received/Paid status marks"],
    benefits: ["Heavy-duty self-inking mechanics", "Laser-engraved rubber dies for crisp text", "Pre-inked casing for 10,000+ prints", "Available in blue, red, and black ink"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI need to order custom Rubber Stamps.",
  },
  {
    icon: Frame,
    title: "Photo Framing",
    image: "/gallery/photo-framing.jpg",
    description: "Premium custom wooden and synthetic frames with acrylic glass protections. Preserves photographs, certificates, and canvases with elegant mats.",
    applications: ["Wedding & Family Portraits", "Certificate mounting frames", "Art Exhibition Canvas framing", "Personalized Gift photo mounts"],
    benefits: ["Premium synthetic and imported wooden mouldings", "Durable clear acrylic glass protection", "Acid-free spacer mat boards", "Heavy board back support hanging hardware"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI would like to customize a Photo Frame.",
  },
  {
    icon: BookOpen,
    title: "Spiral Binding",
    image: "/gallery/spiral-binding.jpg",
    description: "Professional comb and spiral coil binding for reports, student projects, and manuals. Comes with durable transparent protective covers.",
    applications: ["College & School Project Reports", "Training Manuals & Handbooks", "Corporate Presentation booklets", "Office document compilations"],
    benefits: ["High-durability plastic coils", "Flat 360-degree laying structure", "Thick transparent sheet overlays", "Accommodates up to 350 sheets"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI need Spiral Binding services for my documents.",
  },
  {
    icon: Book,
    title: "Hard Binding",
    image: "/gallery/hard-binding.jpeg",
    description: "Library-grade leatherette hard cover binding for dissertations, thesis papers, and official registers. Includes custom gold foil embossing.",
    applications: ["University Thesis & Dissertations", "Official Office Ledgers & Registers", "Luxury Product Portfolios", "Library Book restoration"],
    benefits: ["Library-grade thick cardboard binders", "Premium leatherette wrap textures", "Gold/silver hot foil text embossing", "Heavy thread-sewn bindings"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI need gold foil Hard Binding for my thesis/registers.",
  },
  {
    icon: Trophy,
    title: "Trophies",
    image: "/gallery/Shop-front.jpeg",
    description: "Exquisite metal, acrylic, and crystal achievement trophies and awards. Custom laser-engraved metal labels on wooden or marble bases.",
    applications: ["Sports Tournaments & Leagues", "Corporate Excellence Awards", "Academic Meritorious prizes", "Community Service recognitions"],
    benefits: ["Vibrant metal, crystal, and acrylic selections", "Precision laser-engraved metal plate titles", "Heavy solid marble and wood bases", "Durable electroplated finishes"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI am inquiring about Trophies and achievement awards.",
  },
  {
    icon: Activity,
    title: "Sports Goods",
    image: "/gallery/football-shoes-1.jpeg",
    description: "Premium athletic footwear, soccer cleats, turf shoes, shin guards, and sports equipment. Sourced from trusted manufacturers for maximum performance.",
    applications: ["Tournament Footballs & Nets", "Agility Turf Soccer Cleats", "Protective Shin Guards & Socks", "Custom Team Bags & Training Cones"],
    benefits: ["Pro-grade synthetic turf plates", "Sturdy shock-absorbing boot studs", "Durable water-resistant sports fabrics", "Partnerships with trusted athletic brands"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI would like to purchase Sports Goods and equipment.",
  },
  {
    icon: Shirt,
    title: "Jerseys",
    image: "/gallery/football-jersey-1.jpeg",
    description: "Custom dye-sublimation jerseys and teamwear uniforms. Lightweight dry-fit material printed with vivid anti-fade Italian inks.",
    applications: ["Football Club Team Jerseys", "School/College Athletic kits", "Corporate League Uniforms", "Marathon & Event singlet uniforms"],
    benefits: ["100% full dye-sublimation printing", "Lightweight moisture-wicking dry-fit mesh", "Colors never fade, peel, or crack", "Custom names and player numbers printed free"],
    whatsappTemplate: "Hello SMART TECH NAMCHI,\n\nI want to get custom Sublimation Jerseys for my team.",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveService(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeService]);

  const triggerInquiry = (service: ServiceItem) => {
    const encodedText = encodeURIComponent(service.whatsappTemplate);
    window.open(`https://wa.me/917719330915?text=${encodedText}`, "_blank");
  };

  return (
    <section id="services" className="relative py-24 bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="gradient-glow w-[500px] h-[500px] bg-accent/5 top-[10%] left-[-15%] animate-pulse-slow" />
      <div className="gradient-glow w-[500px] h-[500px] bg-primary/5 bottom-[10%] right-[-15%] animate-pulse-slow" />

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
            OUR PORTFOLIO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight"
          >
            Engineering Premium <span className="gradient-blue-text">Print & Product Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg leading-relaxed"
          >
            Discover our comprehensive spectrum of services, refined through precision engineering and premium materials.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                onClick={() => setActiveService(service)}
                className="glass-card p-6 rounded-card border border-white/5 relative group flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Accent Top Border Glow on Hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Card Visual Banner Image */}
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-white/5 group-hover:border-white/10 transition-colors">
                    <Image
                      src={service.image}
                      alt={`${service.title} illustration`}
                      fill
                      sizes="(max-w-768px) 100vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Shadow overlay inside image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Icon Header */}
                  <div className="mb-4 relative flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-accent group-hover:text-primary transition-colors duration-300" />
                    </div>
                    {/* Shadow Glow behind icon on hover */}
                    <div className="absolute inset-0 bg-primary/10 rounded-xl filter blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
                    
                    <h3 className="text-lg font-heading font-semibold text-white tracking-wide group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Read More / Action Prompt */}
                <div className="flex items-center text-xs font-semibold text-gray-400 group-hover:text-white transition-colors duration-300 mt-auto">
                  <span>View service details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Backdrop Click Trigger */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveService(null)} />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-3xl w-full rounded-card border border-white/10 glass-panel shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible z-10"
            >
              {/* Left Side: Large Image */}
              <div className="relative w-full md:w-[40%] h-64 md:h-auto min-h-[250px] overflow-hidden flex-shrink-0">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-w-768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark md:bg-gradient-to-r md:from-transparent md:to-bg-dark/80 opacity-60" />
              </div>

              {/* Right Side: Copy Specifications */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {/* Top Bar Logo / Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                      Product Specsheet
                    </span>
                    <button
                      onClick={() => setActiveService(null)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1.5 rounded-full hover:bg-white/5"
                      aria-label="Close details"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Title & Core Copy */}
                  <h3 id="modal-title" className="text-2xl font-heading font-extrabold text-white mb-3">
                    {activeService.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-2">
                    {/* Column 1: Applications */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                        Key Applications
                      </h4>
                      <ul className="space-y-2">
                        {activeService.applications.map((app) => (
                          <li key={app} className="flex items-start space-x-2 text-xs text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Benefits */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                        Technical Benefits
                      </h4>
                      <ul className="space-y-2">
                        {activeService.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start space-x-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Inquiry CTA */}
                <div className="pt-4 border-t border-white/5 flex gap-3">
                  <button
                    onClick={() => triggerInquiry(activeService)}
                    className="flex-1 inline-flex items-center justify-center py-3.5 rounded-btn bg-primary hover:bg-primary/95 text-white font-semibold text-sm transition-all shadow-lg shadow-primary/25 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Inquire via WhatsApp
                  </button>
                  <button
                    onClick={() => setActiveService(null)}
                    className="px-5 py-3.5 rounded-btn bg-white/5 hover:bg-white/10 text-white border border-white/5 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
