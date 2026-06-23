"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Target, Users, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
                Who We Are
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tighter leading-[1.05]"
            >
              About <span className="text-nri-orange">NRI</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-400 font-body leading-relaxed max-w-2xl"
            >
              One team. Every property solution. Discover the story and values behind Australia's most integrated construction and fabrication company.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story (Magazine Layout) */}
      <section className="py-16 md:py-24 bg-white dark:bg-background relative">
        <div className="absolute top-24 right-0 w-1/3 h-2/3 bg-gray-50 dark:bg-slate-900/50 rounded-l-[3rem] -z-10" />
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-5">
                <span className="text-nri-orange font-bold font-heading text-lg opacity-50">01</span>
                <div className="h-px w-12 bg-gray-200 dark:bg-slate-800" />
                <span className="font-bold uppercase tracking-widest text-xs text-gray-400">Foundation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-nri-navy dark:text-white tracking-tight leading-tight mb-4 md:mb-6">
                Built on a simple <br className="hidden md:block" />
                <span className="text-gray-400 dark:text-gray-600">philosophy.</span>
              </h2>
              
              <div className="relative">
                <span className="absolute top-0 left-0 text-5xl md:text-6xl font-serif text-nri-orange leading-none -ml-3 -mt-2 opacity-20">F</span>
                <p className="text-sm md:text-lg text-gray-600 dark:text-gray-400 font-body leading-relaxed mb-4 md:mb-5 pl-4 relative z-10">
                  ounded on the principle that property projects shouldn't be stressful, NRI Construction & Fabrication was built to bring every trade under one roof.
                </p>
              </div>
              
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-body leading-relaxed mb-4 md:mb-5">
                We saw the frustration clients faced when dealing with multiple contractors, misaligned schedules, and budget blowouts. Our solution was simple: build a single, elite team capable of handling everything.
              </p>
              
              <p className="text-sm md:text-base text-nri-navy dark:text-white font-bold leading-relaxed border-l-2 border-nri-orange pl-5 py-2 my-4 md:my-6 italic">
                "From initial architectural planning and structural fabrication to the final coat of paint and ongoing maintenance."
              </p>
              
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-body leading-relaxed">
                Today, we are proud to be the trusted partner for hundreds of residential and commercial property owners across Australia, setting the benchmark for integrated property solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/images/construction.jpg" 
                  alt="NRI Team at work" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                  className="object-cover" 
                />
              </div>
              {/* Overlapping smaller image for premium magazine feel */}
              <div className="absolute -bottom-12 -left-12 w-64 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-background hidden md:block">
                <Image 
                  src="/images/fabrication.jpg" 
                  alt="NRI Fabrication" 
                  fill 
                  sizes="250px" 
                  className="object-cover" 
                />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-10 md:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="h-[2px] w-8 md:w-12 bg-nri-orange" />
                <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                  What Drives Us
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-nri-navy dark:text-white tracking-tight leading-tight">
                Our Core <span className="text-gray-400 dark:text-gray-600">Values</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Shield className="w-7 h-7" />, title: "Uncompromising Quality", desc: "We never cut corners. From materials to execution, excellence is our standard." },
              { icon: <Target className="w-7 h-7" />, title: "Client First", desc: "Your vision is our priority. We communicate transparently and deliver on our promises." },
              { icon: <Users className="w-7 h-7" />, title: "Unified Teamwork", desc: "One team working in harmony means faster delivery and cohesive results." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group bg-white dark:bg-slate-900 p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 hover:border-nri-orange/30 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 flex items-center justify-center text-nri-orange mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-nri-navy dark:text-white mb-2 md:mb-3 tracking-tight">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-body leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-white dark:bg-background border-t border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-nri-orange/10 flex items-center justify-center mb-6 md:mb-8">
            <MapPin className="w-6 h-6 md:w-8 md:h-8 text-nri-orange" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-nri-navy dark:text-white tracking-tight leading-tight mb-4 md:mb-6">
            Proudly Servicing <br/> Australia
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 font-body leading-relaxed mb-8 md:mb-10">
            While based in Sydney, NSW, our capabilities and reach extend to major commercial and high-end residential projects across the region.
          </p>
          <Link href="/projects" className="group inline-flex items-center gap-2 md:gap-3 text-nri-navy dark:text-white font-bold hover:text-nri-orange dark:hover:text-nri-orange transition-colors">
            <span className="uppercase tracking-widest text-[10px] md:text-xs">See Our Work</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 dark:border-slate-800 flex items-center justify-center group-hover:border-nri-orange transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
