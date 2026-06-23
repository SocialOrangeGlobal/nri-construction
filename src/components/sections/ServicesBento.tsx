"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "construction",
    title: "Construction & Renovation",
    description: "From luxury homes to commercial buildings, our expert team manages the entire process from planning to handover. Uncompromising quality built to last.",
    image: "/images/hero/hero1.jpg",
    className: "md:col-span-8 md:row-span-2 min-h-[360px] md:min-h-[520px]",
  },
  {
    id: "trade",
    title: "Trade Services",
    description: "Carpentry, plumbing, electrical & more.",
    image: "/images/hero/hero2.jpg",
    className: "md:col-span-4 md:row-span-1 min-h-[240px]",
  },
  {
    id: "fabrication",
    title: "Steel Fabrication",
    description: "Custom structural steel & metalwork.",
    image: "/images/hero/hero3.jpg",
    className: "md:col-span-4 md:row-span-1 min-h-[240px]",
  },
  {
    id: "outdoor",
    title: "Outdoor Works",
    description: "Premium pools, retaining walls, and complete landscape transformations.",
    image: "/images/hero/hero4.jpg",
    className: "md:col-span-6 md:row-span-1 min-h-[280px]",
  },
  {
    id: "maintenance",
    title: "Integrated Maintenance",
    description: "Proactive property care, repairs, and building maintenance for lasting value.",
    image: "/images/hero/hero5.jpg",
    className: "md:col-span-6 md:row-span-1 min-h-[280px]",
  },
];

export default function ServicesBento() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background relative overflow-hidden" id="services">
      {/* Background styling */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 dark:bg-slate-900/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-nri-orange" />
              <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                Our Capabilities
              </p>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-nri-navy dark:text-white tracking-tight leading-tight"
            >
              Everything Your Property Needs <span className="text-gray-400 dark:text-gray-600">Under One Roof</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="group inline-flex items-center gap-2 md:gap-3 text-nri-navy dark:text-white font-bold hover:text-nri-orange dark:hover:text-nri-orange transition-colors">
              <span className="uppercase tracking-widest text-xs md:text-sm">View All Services</span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 dark:border-slate-800 flex items-center justify-center group-hover:border-nri-orange transition-colors">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              key={service.id}
              className={`group relative rounded-3xl overflow-hidden shadow-2xl ${service.className}`}
            >
              <Link href={`/services#${service.id}`} className="block w-full h-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Gradients for readability */}
                <div className="absolute inset-0 bg-nri-navy/40 md:bg-nri-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-nri-navy/95 via-nri-navy/60 to-transparent md:opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-2 md:gap-4">
                    <div className="max-w-xl">
                      <h3 className="text-base sm:text-lg md:text-2xl font-extrabold text-white mb-1 md:mb-2 tracking-tight drop-shadow-md">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-200 font-body leading-relaxed md:transform md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mt-1 md:mt-0">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-nri-orange rounded-full flex items-center justify-center text-white md:opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl mb-1 md:mb-3">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
