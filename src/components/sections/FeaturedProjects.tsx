"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "p1",
    title: "Modern Luxury Build",
    category: "Construction",
    location: "Sydney, NSW",
    summary: "A complete knock-down and rebuild of a modern luxury residential home featuring high-end finishes, structural steel beams, and open-plan living.",
    services: ["Construction", "Electrical", "Plumbing", "Landscaping"],
    image: "/images/construction.jpg",
  },
  {
    id: "p2",
    title: "Commercial HQ Fit-out",
    category: "Commercial",
    location: "Parramatta, NSW",
    summary: "Construction of a multi-level commercial office space including structural fabrication, complete fit-out, and HVAC installation.",
    services: ["Construction", "Fabrication", "Commercial Trade"],
    image: "/images/commercial.jpg",
  },
  {
    id: "p4",
    title: "Structural Steel Framework",
    category: "Fabrication",
    location: "Wetherill Park, NSW",
    summary: "Custom steel fabrication and erection for a large-scale warehouse facility, demonstrating our in-house engineering capabilities.",
    services: ["Fabrication", "Engineering", "Welding"],
    image: "/images/fabrication.jpg",
  },
  {
    id: "p5",
    title: "Premium Outdoor & Pool",
    category: "Outdoor Works",
    location: "Manly, NSW",
    summary: "Complete transformation of outdoor space including custom pool construction, structural glass fencing, and premium hardscaping.",
    services: ["Pools", "Landscaping", "Fencing"],
    image: "/images/outdoor-works.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background" id="projects">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-nri-orange" />
              <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-xs md:text-sm md:text-base">
                Our Portfolio
              </p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-nri-navy dark:text-white tracking-tight leading-tight">
              Featured <span className="text-gray-400 dark:text-gray-600">Projects</span>
            </h2>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 text-nri-navy dark:text-white font-bold hover:text-nri-orange dark:hover:text-nri-orange transition-colors">
            <span className="uppercase tracking-widest text-xs md:text-sm">View All Projects</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 dark:border-slate-800 flex items-center justify-center group-hover:border-nri-orange transition-colors">
              <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 md:gap-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className={`group relative flex flex-col ${index % 2 !== 0 ? "md:mt-12" : ""}`}
            >
              <Link href={`/projects/${project.id}`} className="block relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4 md:mb-5 shadow-lg hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-nri-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Overlay gradient for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 left-4 flex gap-3">
                  <span className="px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[10px] md:text-xs font-bold text-nri-navy dark:text-white tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-nri-orange rounded-full flex items-center justify-center text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </Link>

              <div className="px-1">
                <div className="flex items-center gap-2 text-[10px] md:text-xs text-nri-orange font-bold uppercase tracking-wider mb-2">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </div>
                <Link href={`/projects/${project.id}`} className="inline-block group-hover:text-nri-orange transition-colors duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-nri-navy dark:text-white mb-2 tracking-tight">{project.title}</h3>
                </Link>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-body leading-relaxed mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((service, i) => (
                    <span key={i} className="text-xs font-bold uppercase tracking-wider text-nri-navy dark:text-gray-300 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
