"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import Image from "next/image";

const TABS = [
  {
    id: "who-we-are",
    label: "Who We Are",
    title: "Integrated Construction Managers and Commercial Building Contractors",
    content: (
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          Founded in 2010 and serving a variety of sectors, NRI Construction & Fabrication is a leading integrated building and fabrication firm.
        </p>
        <p>
          Our strength lies in a transparent and fully collaborative approach to managing commercial construction projects throughout their entire life-cycle. We deliver projects via integrated management of development, design, construction, and property maintenance.
        </p>
        <p>
          Navigate this website by learning more about us, exploring our service offerings, or selecting your industry.
        </p>
      </div>
    ),
    link: "/about",
    linkText: "Learn More About Us",
    image: "/images/hero/hero1.jpg",
  },
  {
    id: "what-we-do",
    label: "What We Do",
    title: "Integrated Service Offering",
    content: (
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          We provide turnkey solutions by integrating early planning & development, design and documentation management, construction project management, general and specialist construction, and ongoing building maintenance.
        </p>
        <p>
          We also offer individual services such as custom structural steel and architectural fabrication, tailored to the specific needs of your project.
        </p>
      </div>
    ),
    link: "/services",
    linkText: "Explore Our Services",
    image: "/images/hero/hero2.jpg",
  },
  {
    id: "who-we-serve",
    label: "Who We Serve",
    title: "Sectors and Clients Served",
    content: (
      <div className="space-y-4 text-gray-600 dark:text-gray-300">
        <p>
          Our key sectors served include mixed-use commercial developments, industrial facilities, healthcare providers, as well as community and government institutions.
        </p>
        <p>
          Our past clients include property developers as well as individual owners/operators, local public bodies, private, and publicly listed companies.
        </p>
      </div>
    ),
    link: "/projects",
    linkText: "View Our Projects",
    image: "/images/hero/hero3.jpg",
  },
];

export default function HomeIntroTabs() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Intro Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold text-nri-navy dark:text-white leading-tight">
              100% Australian Owned <br />
              Fully Integrated Development, Construction and Maintenance Contractor
            </h2>
          </div>
          <div className="md:col-span-1">
            <p className="text-gray-600 dark:text-gray-400 font-body">
              Since 2010, NRI has been serving the needs of the commercial, industrial, and residential construction sectors. As a turnkey commercial builder, fabrication specialist, and seasoned construction project manager, we assist clients in delivering any project transparently and efficiently.
            </p>
          </div>
          <div className="md:col-span-1 border-l-2 border-nri-orange pl-6 flex items-center">
            <p className="text-gray-800 dark:text-gray-200 font-semibold font-heading text-lg">
              Navigate this website by selecting an industry sector or exploring our core service offerings below.
            </p>
          </div>
        </div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-200 dark:border-gray-800">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "pb-4 px-2 font-heading font-bold text-base md:text-lg transition-all relative",
                activeTab === tab.id
                  ? "text-nri-orange"
                  : "text-gray-500 hover:text-nri-navy dark:text-gray-400 dark:hover:text-white"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-nri-orange rounded-t-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {TABS.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-nri-navy dark:text-white mb-6">
                        {tab.title}
                      </h3>
                      {tab.content}
                      <Link
                        href={tab.link}
                        className="inline-flex items-center gap-2 mt-8 text-nri-orange font-bold hover:text-nri-navy dark:hover:text-white transition-colors uppercase tracking-wider text-sm"
                      >
                        {tab.linkText} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        fill
                        priority={tab.id === TABS[0].id}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-nri-navy/30 group-hover:bg-nri-navy/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-nri-orange/90 flex items-center justify-center text-white transform scale-90 group-hover:scale-100 transition-transform">
                          <PlayCircle className="w-8 h-8 ml-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
