"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

export default function ContactPage() {
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
                Get In Touch
              </p>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tighter leading-[1.05]"
            >
              Contact <span className="text-nri-orange">Us</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-gray-400 font-body leading-relaxed max-w-2xl"
            >
              Get in touch with our team today to discuss your next project, request a comprehensive quote, or schedule a site visit.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-slate-800 flex flex-col items-start shadow-xl group hover:border-nri-orange/30 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center mb-4 md:mb-6 text-nri-orange group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-nri-navy dark:text-white mb-2 tracking-tight">Phone</h3>
                <p className="text-lg md:text-xl font-extrabold text-nri-navy dark:text-white mb-2">1800 NRI CON</p>
                <p className="text-gray-500 text-xs font-medium">Available 24/7 for emergencies</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-slate-800 flex flex-col items-start shadow-xl group hover:border-nri-orange/30 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center mb-4 md:mb-6 text-nri-orange group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-nri-navy dark:text-white mb-2 tracking-tight">Email</h3>
                <p className="text-sm md:text-base font-bold text-nri-navy dark:text-white mb-2 break-all">info@nriconstruction.com.au</p>
                <p className="text-gray-500 text-[10px] md:text-xs font-medium">We aim to reply within 2 hours</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-slate-800 flex flex-col items-start shadow-xl group hover:border-nri-orange/30 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center mb-4 md:mb-6 text-nri-orange group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-nri-navy dark:text-white mb-2 tracking-tight">Head Office</h3>
                <p className="text-sm md:text-base font-bold text-nri-navy dark:text-white mb-2">123 Builder St<br/>Sydney, NSW 2000</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-slate-800 flex flex-col items-start shadow-xl group hover:border-nri-orange/30 transition-colors"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm flex items-center justify-center mb-4 md:mb-6 text-nri-orange group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-nri-navy dark:text-white mb-2 tracking-tight">Business Hours</h3>
                <p className="text-sm md:text-base font-bold text-nri-navy dark:text-white">Mon-Fri: 7:00 AM - 5:00 PM</p>
                <p className="text-sm md:text-base font-bold text-nri-navy dark:text-white mt-1">Sat: 8:00 AM - 1:00 PM</p>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-full min-h-[300px] md:min-h-[450px] bg-gray-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-slate-800"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.835848506085!2d151.2071142152099!3d-33.86881968065609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccb0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1655112000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use the existing Contact Form Component */}
      <div className="relative z-10 border-t border-gray-100 dark:border-slate-800">
        <ContactCTA />
      </div>
    </div>
  );
}
