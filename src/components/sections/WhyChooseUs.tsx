"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, Layers, Building2, PlayCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "approach",
    label: "Our Approach",
    title: "One Point Of Contact & Reliable Communication",
    description: "We simplify your project with a single dedicated project manager handling all trades and services. Expect transparent updates, clear timelines, and open lines of communication throughout the entire process.",
    icon: <UserCheck className="w-10 h-10" />,
    image: "/images/why-choose/image1.jpg",
  },
  {
    id: "services",
    label: "Integrated Services",
    title: "Multiple Trades & Fabrication Under One Roof",
    description: "From plumbers and electricians to builders and landscapers, our in-house team does it all. Our integrated fabrication workshop means faster turnaround times for bespoke structural elements.",
    icon: <Layers className="w-10 h-10" />,
    image: "/images/why-choose/image2.jpg",
  },
  {
    id: "scope",
    label: "Proven Experience",
    title: "End-to-End Management for Any Scale",
    description: "We provide scaled solutions tailored for both luxury residential homes and large commercial properties. We handle everything from planning and permits to execution and final handover.",
    icon: <Building2 className="w-10 h-10" />,
    image: "/images/why-choose/image3.jpg",
  },
];

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "15+", label: "In-House Services" },
  { value: "100%", label: "Client Focused" },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="py-16 md:py-24 bg-nri-navy dark:bg-background text-white relative overflow-hidden">
      {/* Background Abstract Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-nri-orange/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
          
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-nri-orange" />
              <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                The NRI Difference
              </p>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-4 md:mb-6"
            >
              Why Choose <br className="hidden md:block"/>
              <span className="text-nri-orange">NRI</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base text-gray-300 mb-10 leading-relaxed font-body"
            >
              We eliminate the stress of managing multiple contractors. By keeping everything under one roof, we deliver superior quality, faster timelines, and better value.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="border-l-[3px] border-nri-orange pl-6 relative group"
                >
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1.5 tracking-tighter drop-shadow-md">{stat.value}</p>
                  <p className="text-[10px] md:text-xs font-bold text-nri-orange uppercase tracking-[0.2em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col">
            {/* Interactive Tabs Header */}
            <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-10 mb-8 md:mb-10 border-b border-white/10 pb-4 md:pb-5">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative pb-4 md:pb-6 font-bold uppercase tracking-widest text-xs md:text-sm transition-colors",
                    activeTab === tab.id
                      ? "text-white"
                      : "text-white/40 hover:text-white/80"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="whyChooseUsTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-nri-orange"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-grow min-h-[380px]">
              <AnimatePresence mode="wait">
                {TABS.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center bg-white/5 dark:bg-slate-900/40 p-5 md:p-8 lg:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
                      >
                        <div className="flex flex-col h-full justify-center">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-nri-orange/10 text-nri-orange flex items-center justify-center mb-4 md:mb-6 border border-nri-orange/20 shadow-inner">
                            {tab.icon}
                          </div>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-3 md:mb-4 tracking-tight leading-tight drop-shadow-sm">
                            {tab.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-300 font-body leading-relaxed mb-6 md:mb-8">
                            {tab.description}
                          </p>
                          <Link href="/about" className="group inline-flex items-center gap-3 text-white font-bold hover:text-nri-orange transition-colors mt-auto self-start">
                            <span className="uppercase tracking-widest text-xs drop-shadow-md">Learn More</span>
                            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-nri-orange bg-white/5 backdrop-blur-sm transition-colors shadow-lg">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </Link>
                        </div>
                        
                        <div className="relative aspect-square md:aspect-[4/5] md:h-full rounded-3xl overflow-hidden group shadow-2xl">
                          <Image
                            src={tab.image}
                            alt={tab.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-nri-navy/30 group-hover:bg-transparent transition-colors duration-500" />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-16 h-16 rounded-full bg-nri-orange/90 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-500 shadow-xl pointer-events-auto cursor-pointer">
                              <PlayCircle className="w-8 h-8 ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
