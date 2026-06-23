"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-nri-navy relative overflow-hidden text-white pt-12 md:pt-20 pb-6 md:pb-8 transition-colors duration-300">
      {/* Abstract Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nri-orange/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            <Link href="/">
              <Image
                src="/logos/logo-white.png"
                alt="NRI Construction & Fabrication"
                width={400}
                height={150}
                className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                priority
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-body">
              One Team. Every Property Solution. We handle everything from planning and building to repairs and maintenance across Australia.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-nri-orange hover:border-nri-orange flex items-center justify-center text-white transition-all duration-300 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-nri-orange hover:border-nri-orange flex items-center justify-center text-white transition-all duration-300 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-nri-orange hover:border-nri-orange flex items-center justify-center text-white transition-all duration-300 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Our Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Our Services</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services#construction" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Construction</Link></li>
              <li><Link href="/services#fabrication" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Fabrication</Link></li>
              <li><Link href="/services#trade" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Trade Services</Link></li>
              <li><Link href="/services#outdoor" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Outdoor Works</Link></li>
              <li><Link href="/services#maintenance" className="text-gray-400 hover:text-nri-orange transition-colors text-sm">Property Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-nri-orange shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Sydney, NSW, Australia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-nri-orange shrink-0" />
                <span className="text-gray-400 text-sm">1800 NRI CON</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-nri-orange shrink-0" />
                <span className="text-gray-400 text-sm">info@nriconstruction.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-xs text-center md:text-left tracking-wider">
            &copy; {new Date().getFullYear()} NRI Construction & Fabrication. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white tracking-wider">
            <Link href="/privacy" className="hover:text-nri-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-nri-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
