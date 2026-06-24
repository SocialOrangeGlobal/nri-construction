"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    id: 1,
    image: "/images/hero/hero1.jpg",
    subtitle: "Homes & Commercial",
    title: "Construction & Renovation",
    description: "Homes, Villas, Commercial Buildings, Renovations & Extensions seamlessly managed.",
    label: "Construction",
    href: "/services#construction",
  },
  {
    id: 2,
    image: "/images/hero/hero2.jpg",
    subtitle: "Expert Trades",
    title: "Trade Services",
    description: "Carpentry, Painting, Plumbing, Electrical, Roofing, Flooring & Tiling.",
    label: "Trades",
    href: "/services#trade",
  },
  {
    id: 3,
    image: "/images/hero/hero3.jpg",
    subtitle: "Custom Metal Works",
    title: "Premium Fabrication",
    description: "High-quality structural steel and bespoke architectural metalwork manufactured in-house.",
    label: "Fabrication",
    href: "/services#fabrication",
  },
  {
    id: 4,
    image: "/images/hero/hero4.jpg",
    subtitle: "Landscaping & Pools",
    title: "Outdoor Works",
    description: "Landscaping, Fencing, Gates, and Premium Pools built to perfection.",
    label: "Outdoor",
    href: "/services#outdoor",
  },
  {
    id: 5,
    image: "/images/hero/hero5.jpg",
    subtitle: "Property Care",
    title: "Integrated Maintenance",
    description: "General Repairs, Property & Building Maintenance keeping assets in peak condition.",
    label: "Maintenance",
    href: "/services#maintenance",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.05 },
    visible: { scale: 1, transition: { duration: 8, ease: "linear" } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-nri-navy z-0">

      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            <motion.div variants={imageVariants} initial="hidden" animate="visible" className="w-full h-full relative">
              <Image
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].subtitle}
                fill
                priority
                loading="eager"
                sizes="100vw"
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Brand Color Overlay Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-nri-navy/80 via-nri-navy/40 to-nri-navy/10" />
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* Slide Content */}
      <div className="container mx-auto px-4 md:px-8 xl:px-12 max-w-7xl relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="max-w-4xl pt-20"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4 md:mb-8">
              <div className="h-[2px] w-8 md:w-12 bg-nri-orange" />
              <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-xs md:text-sm lg:text-base">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.05] mb-4 md:mb-8 drop-shadow-lg"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-xl text-gray-200 font-body leading-relaxed max-w-2xl mb-6 md:mb-12 drop-shadow-md"
            >
              {HERO_SLIDES[currentSlide].description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-8"
            >
              <Link href="/contact" className="group inline-flex items-center gap-2 md:gap-3 text-white font-bold hover:text-nri-orange transition-colors">
                <span className="uppercase tracking-widest text-[10px] md:text-xs sm:text-sm drop-shadow-md">Start Your Project</span>
                <div className="w-10 h-10 md:w-12 md:h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-nri-orange bg-white/5 backdrop-blur-sm transition-colors shadow-lg">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 sm:w-5 sm:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </Link>
              
              <Link href={HERO_SLIDES[currentSlide].href} className="group inline-flex items-center gap-2 md:gap-3 text-white/80 font-bold hover:text-white transition-colors">
                <span className="uppercase tracking-widest text-[10px] md:text-xs sm:text-sm drop-shadow-md">Explore Services</span>
                <div className="w-10 h-10 md:w-12 md:h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2">
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 sm:w-5 sm:h-5" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom Bottom Nav Indicators */}
      <div className="absolute bottom-12 w-full z-30 hidden md:block">
        <div className="container mx-auto px-8 xl:px-12 max-w-7xl">
          <div className="flex items-end justify-end gap-4 lg:gap-8">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <div
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`flex flex-col gap-3 cursor-pointer transition-all duration-500 ${isActive ? "w-40 opacity-100" : "w-10 opacity-50 hover:opacity-80"
                    }`}
                >
                  <span className="text-white font-heading text-xs font-bold tracking-widest">
                    0{slide.id}
                  </span>

                  <div className="relative w-full h-[3px] bg-white/20 overflow-hidden rounded-full">
                    {isActive && (
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 6, ease: "linear" }}
                        className="absolute inset-0 bg-nri-orange"
                      />
                    )}
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-1 flex flex-col gap-1"
                    >
                      <span className="text-nri-orange text-[10px] font-bold uppercase tracking-widest">{slide.subtitle}</span>
                      <p className="font-heading font-bold text-sm text-white leading-tight">
                        {slide.label}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile simple dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30 md:hidden">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-nri-orange" : "w-2 bg-white/40"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
