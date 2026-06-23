"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PenTool, HardHat, Hammer, Droplet, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Plan & Design",
    description: "Initial consultation, architectural design, engineering, and seamless council approvals.",
    icon: <PenTool className="w-7 h-7" />,
  },
  {
    id: "02",
    title: "Construct",
    description: "Expert construction and management of the entire build process with uncompromising quality.",
    icon: <HardHat className="w-7 h-7" />,
  },
  {
    id: "03",
    title: "Fabricate",
    description: "Custom steel and aluminium fabrication for structural integrity and architectural beauty.",
    icon: <Hammer className="w-7 h-7" />,
  },
  {
    id: "04",
    title: "Maintain",
    description: "Ongoing property maintenance and facility repairs long after the initial build is complete.",
    icon: <Droplet className="w-7 h-7" />,
  },
];

export default function ProjectJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background overflow-hidden relative" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-50 dark:bg-slate-900/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-16">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4 md:mb-6"
            >
              <div className="h-[2px] w-12 bg-nri-orange" />
              <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                Our Process
              </p>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-nri-navy dark:text-white tracking-tighter leading-[1.05]"
            >
              The Complete <br className="hidden md:block"/><span className="text-gray-400 dark:text-gray-600">Project Lifecycle</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-body">
              From the first sketch to long-term maintenance, we manage every step of your property journey under one roof.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-[2px] bg-gray-100 dark:bg-slate-800 -translate-x-1/2 hidden md:block">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-nri-orange origin-top shadow-[0_0_15px_rgba(255,107,0,0.5)]"
            />
          </div>

          {/* Reduced gap */}
          <div className="flex flex-col gap-4 md:gap-6 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content (Flip Card) */}
                  <div className={`flex-1 w-full flex flex-col ${isEven ? "md:items-start" : "md:items-end"}`}>
                    <div className="group h-auto lg:h-[240px] w-full max-w-sm lg:[perspective:1000px] cursor-pointer">
                      <div className="relative w-full h-full transition-all duration-700 lg:[transform-style:preserve-3d] lg:group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-xl hover:shadow-2xl flex flex-col lg:block">
                        
                        {/* Front Side */}
                        <div className="relative lg:absolute inset-0 w-full h-full lg:[backface-visibility:hidden] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-t-2xl lg:rounded-2xl p-4 md:p-6 flex flex-col justify-center items-center text-center overflow-hidden z-10 lg:z-auto">
                          {/* Accent Gradient */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nri-orange to-nri-orange/50" />
                          
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-nri-orange/10 text-nri-orange flex items-center justify-center mb-3 md:mb-4 border border-nri-orange/20">
                            {step.icon}
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-nri-navy dark:text-white tracking-tight">{step.title}</h3>
                          
                          <div className="hidden lg:flex absolute bottom-4 right-4 text-gray-300 dark:text-gray-600 items-center gap-2 text-xs font-bold tracking-widest uppercase">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">Flip</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Back Side (Description) */}
                        <div className="relative lg:absolute inset-0 w-full h-full lg:[backface-visibility:hidden] lg:[transform:rotateY(180deg)] bg-nri-navy rounded-b-2xl lg:rounded-2xl p-4 md:p-6 flex flex-col justify-center text-center overflow-hidden">
                          {/* Subtle background abstract */}
                          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-nri-orange/10 rounded-full blur-2xl" />
                          
                          <h3 className="text-base font-extrabold text-white mb-3 tracking-tight relative z-10">{step.title}</h3>
                          <p className="text-sm text-gray-300 font-body leading-relaxed relative z-10">
                            {step.description}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex relative items-center justify-center w-12 h-12 shrink-0">
                    <motion.div 
                      initial={{ scale: 0.8, backgroundColor: "var(--background)", borderColor: "var(--border-color, #f97316)" }}
                      whileInView={{ scale: 1.1, backgroundColor: "#f97316", color: "#ffffff" }}
                      viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-full border-[2px] border-nri-orange flex items-center justify-center relative z-10 shadow-[0_0_12px_rgba(255,107,0,0.3)] text-nri-navy dark:text-white font-extrabold text-sm tracking-tighter transition-colors duration-500 bg-white dark:bg-background"
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
