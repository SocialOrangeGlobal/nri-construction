"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FormField } from "@/components/ui/form-field";
import { FormSelect } from "@/components/ui/form-select";
import { FormTextarea } from "@/components/ui/form-textarea";

export default function ContactCTA() {
  return (
    <section className="py-0 relative overflow-hidden bg-white dark:bg-background">
      <div className="flex flex-col lg:flex-row min-h-[680px]">
        {/* Left Side - Dark Premium */}
        <div className="w-full lg:w-1/2 bg-nri-navy relative flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-20 overflow-hidden">
          {/* Decorative Mesh */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-nri-orange/30 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] translate-y-1/3 translate-x-1/3" />
          </div>

          <div className="relative z-10 w-full max-w-lg">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-nri-orange" />
              <p className="text-nri-orange font-body font-bold uppercase tracking-[0.2em] text-xs md:text-sm">
                Start Your Project
              </p>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-4 md:mb-6">
              Ready to bring your vision to life?
            </h2>
            
            <p className="text-sm md:text-base text-gray-300 font-body leading-relaxed mb-8 md:mb-10">
              Whether it's a complete luxury build, architectural fabrication, or commercial fit-out, our experts are ready to partner with you.
            </p>

            <div className="space-y-4">
              {[
                "Comprehensive Project Management",
                "In-house Fabrication & Trades",
                "Transparent Pricing & Timelines"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-nri-orange/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-nri-orange" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Premium Form */}
        <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-slate-900 flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-lg bg-white dark:bg-background p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800"
          >
            <h3 className="text-xl md:text-2xl font-extrabold text-nri-navy dark:text-white mb-6 tracking-tight">Start a Project</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6">
                <FormField
                  id="name"
                  type="text"
                  label="Full Name"
                />
                <FormField
                  id="phone"
                  type="tel"
                  label="Phone Number"
                />
              </div>

              <FormField
                id="email"
                type="email"
                label="Email Address"
              />

              <FormSelect
                id="service"
                label="Select a Service"
                options={[
                  { value: "construction", label: "Construction & Renovation" },
                  { value: "trade", label: "Trade Services" },
                  { value: "fabrication", label: "Fabrication" },
                  { value: "outdoor", label: "Outdoor Works" },
                ]}
              />

              <FormTextarea
                id="message"
                label="Project Details"
                rows={4}
              />

              <button className="w-full h-12 md:h-14 text-sm md:text-base bg-nri-navy hover:bg-nri-orange dark:bg-white dark:hover:bg-nri-orange text-white dark:text-nri-navy dark:hover:text-white font-bold tracking-widest uppercase rounded-xl transition-colors flex items-center justify-center gap-3 mt-4 group shadow-md hover:shadow-xl">
                Submit Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
