"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "construction",
    title: "Construction & Renovation",
    description: "Whether you are building a new luxury home, extending your current property, or constructing a commercial building, our expert team manages the entire process from planning to handover. We focus on premium finishes and structural integrity.",
    benefits: ["Custom Home Builds", "Commercial Fit-outs", "Extensions & Additions", "Heritage Renovations"],
    image: "/images/construction.jpg",
  },
  {
    id: "trade",
    title: "Trade Services",
    description: "We provide all essential trade services in-house, ensuring absolute quality control and eliminating the delays of coordinating multiple independent contractors. A single point of contact for every trade.",
    benefits: ["Plumbing & Electrical", "Carpentry & Joinery", "Painting & Decorating", "Tiling & Flooring"],
    image: "/images/trade-services.jpg",
  },
  {
    id: "fabrication",
    title: "Steel & Aluminium Fabrication",
    description: "Our fully equipped fabrication workshop allows us to create custom structural steel, architectural features, and bespoke metalwork for any project. Engineered for precision and built to last.",
    benefits: ["Structural Steel", "Custom Gates & Fences", "Architectural Metalwork", "On-site Welding"],
    image: "/images/fabrication.jpg",
  },
  {
    id: "outdoor",
    title: "Outdoor Works",
    description: "Transform your exterior spaces into stunning outdoor living areas with our comprehensive landscaping and luxury pool construction services.",
    benefits: ["Premium Pool Construction", "Hard & Soft Landscaping", "Retaining Walls", "Decking & Pergolas"],
    image: "/images/outdoor-works.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Services Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-nri-navy dark:bg-background text-white relative overflow-hidden">
        {/* Abstract background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-nri-orange/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-4 md:mb-6"
            >
              <div className="h-[2px] w-12 bg-nri-orange" />
              <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-sm">
                What We Do
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tighter leading-[1.05]"
            >
              Our <span className="text-nri-orange">Services</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-400 font-body leading-relaxed max-w-2xl"
            >
              From the initial architectural design to the final coat of paint, NRI Construction & Fabrication delivers comprehensive, end-to-end property solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col gap-16 md:gap-36">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-nri-orange translate-x-3 translate-y-3 rounded-3xl opacity-20 dark:opacity-10" />
                  <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-nri-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex items-center gap-4 mb-4 md:mb-5">
                    <span className="text-nri-orange font-bold font-heading text-lg opacity-50">0{index + 1}</span>
                    <div className="h-px flex-1 bg-gray-200 dark:bg-slate-800" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-nri-navy dark:text-white mb-4 md:mb-5 tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-body leading-relaxed mb-6 md:mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-nri-orange shrink-0 mt-0.5" />
                        <span className="font-bold text-nri-navy dark:text-gray-300 uppercase tracking-wider text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className="group inline-flex items-center gap-2 md:gap-3 text-nri-navy dark:text-white font-bold hover:text-nri-orange dark:hover:text-nri-orange transition-colors mt-auto self-start">
                    <span className="uppercase tracking-widest text-[10px] md:text-xs">Start Your Project</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 dark:border-slate-800 flex items-center justify-center group-hover:border-nri-orange transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
