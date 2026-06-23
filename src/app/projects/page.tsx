"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "p1",
    title: "Modern Luxury Build",
    category: "Construction",
    location: "Sydney, NSW",
    image: "/images/construction.jpg",
  },
  {
    id: "p2",
    title: "Commercial HQ Fit-out",
    category: "Commercial",
    location: "Parramatta, NSW",
    image: "/images/commercial.jpg",
  },
  {
    id: "p3",
    title: "Heritage Villa Renovation",
    category: "Renovation",
    location: "Bondi, NSW",
    image: "/images/renovation.jpg",
  },
  {
    id: "p4",
    title: "Premium Outdoor & Pool",
    category: "Outdoor Works",
    location: "Manly, NSW",
    image: "/images/outdoor-works.jpg",
  },
  {
    id: "p5",
    title: "Structural Steel Framework",
    category: "Fabrication",
    location: "Wetherill Park, NSW",
    image: "/images/fabrication.jpg",
  },
  {
    id: "p6",
    title: "Integrated Trade Overhaul",
    category: "Maintenance",
    location: "North Sydney, NSW",
    image: "/images/trade-services.jpg",
  },
  {
    id: "p7",
    title: "Retail Store Build",
    category: "Commercial",
    location: "Chatswood, NSW",
    image: "/images/retail-store.jpg",
  },
  {
    id: "p8",
    title: "High-Rise Apartment Block",
    category: "Construction",
    location: "Sydney CBD",
    image: "/images/apartment-block.jpg",
  },
];

const categories = ["All", "Construction", "Commercial", "Fabrication", "Renovation", "Outdoor Works", "Maintenance"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Hero */}
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
                Our Portfolio
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tighter leading-[1.05]"
            >
              Our <span className="text-nri-orange">Projects</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-400 font-body leading-relaxed max-w-2xl"
            >
              Explore our portfolio of premium builds, comprehensive renovations, and expert fabrication works.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-8 md:mb-16 border-b border-gray-200 dark:border-slate-800 pb-3 md:pb-5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative pb-3 md:pb-5 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider transition-colors ${activeCategory === category
                  ? "text-nri-navy dark:text-white"
                  : "text-gray-400 hover:text-nri-navy dark:hover:text-gray-300"
                  }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-nri-orange"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-14">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group relative flex flex-col ${index % 2 !== 0 ? "md:mt-16" : ""}`}
                >
                  <Link href={`/projects`} className="block relative w-full aspect-[4/5] rounded-3xl overflow-hidden mb-4 md:mb-6 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-nri-navy/10 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-3">
                      <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[10px] md:text-xs font-bold text-nri-navy dark:text-white tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-nri-orange rounded-full flex items-center justify-center text-white opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </Link>

                  <div className="px-2">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-nri-orange font-bold uppercase tracking-wider mb-2 md:mb-3">
                      <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      {project.location}
                    </div>
                    <Link href={`/projects`} className="inline-block group-hover:text-nri-orange transition-colors duration-300">
                      <h3 className="text-lg md:text-2xl font-extrabold text-nri-navy dark:text-white mb-1.5 md:mb-2 tracking-tight">{project.title}</h3>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 md:py-32">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-nri-navy dark:text-white mb-4 tracking-tight">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400 font-body">Check back later for updates in this category.</p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
