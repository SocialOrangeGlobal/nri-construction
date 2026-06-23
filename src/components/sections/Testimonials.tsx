"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    initials: "SJ",
    content: "NRI transformed our property entirely. Having one company handle the structural rebuild, plumbing, and landscaping was a game-changer. Exceptional quality and communication.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Property Developer",
    initials: "MT",
    content: "We use NRI for all our commercial fit-outs. Their fabrication team is top-notch, and the fact that they manage all the trades makes our projects run smoothly and on budget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Villa Owner",
    initials: "ER",
    content: "The renovation of our heritage villa was complex, but NRI handled it with incredible professionalism. The attention to detail in the custom metal works and carpentry is stunning.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary dark:bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 opacity-[0.03] dark:opacity-5 transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
        <Quote className="w-[400px] h-[400px] text-nri-navy dark:text-white" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
            <div className="h-[2px] w-8 md:w-12 bg-nri-orange" />
            <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-xs md:text-sm md:text-base">
              Client Feedback
            </p>
            <div className="h-[2px] w-8 md:w-12 bg-nri-orange" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-nri-navy dark:text-white tracking-tight leading-tight">
            Trusted by <span className="text-gray-400 dark:text-gray-500">Property Owners</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`bg-white dark:bg-background p-6 md:p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-500 ${index === 1 ? "md:translate-y-8" : ""}`}
            >
              <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-nri-navy dark:text-white" />
              </div>
              
              <div className="flex items-center gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-nri-orange text-nri-orange" />
                ))}
              </div>
              <p className="text-sm md:text-base text-nri-navy dark:text-gray-300 font-body leading-relaxed mb-6 md:mb-8 flex-1">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3 md:gap-4 mt-auto">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-nri-navy text-white dark:bg-white dark:text-nri-navy font-bold flex items-center justify-center text-xs md:text-sm tracking-wider">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm md:text-base text-nri-navy dark:text-white uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-[10px] md:text-xs font-bold text-nri-orange uppercase tracking-widest mt-0.5 md:mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
