"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useWhiteText = !scrolled;

  const iconClasses = useWhiteText ? "text-white hover:bg-white/10 hover:text-white" : "text-nri-navy hover:bg-gray-100 hover:text-nri-orange";

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-1.5 border-gray-100" : "bg-transparent py-2 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl flex items-center justify-between">
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src={useWhiteText ? "/logos/logo-white.png" : "/logos/logo-dark.png"}
            alt="NRI Construction & Fabrication"
            width={500}
            height={200}
            className="h-10 md:h-12 lg:h-16 w-auto object-contain transition-all duration-500 ease-in-out"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-heading font-semibold transition-all duration-300",
                  isActive
                    ? useWhiteText
                      ? "text-white underline decoration-nri-orange decoration-2 underline-offset-[6px]"
                      : "text-nri-orange"
                    : useWhiteText
                      ? "text-white/80 hover:text-white"
                      : "text-nri-navy hover:text-nri-orange"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <div className={cn("flex items-center gap-4 border-l pl-4 lg:pl-6 transition-colors duration-500", useWhiteText ? "border-white/20" : "border-gray-200")}>
            <Link href="/contact" className="group inline-flex items-center gap-2">
              <span className={cn("font-bold text-sm transition-colors", useWhiteText ? "text-white group-hover:text-nri-orange" : "text-nri-navy group-hover:text-nri-orange")}>
                Start Project
              </span>
              <div className="w-8 h-8 rounded-full bg-nri-orange text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-md">
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-end">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  className={cn("w-12 h-12 p-0 flex items-center justify-center transition-colors duration-300 hover:bg-transparent", iconClasses)}
                />
              }
            >
              <Menu className="!w-8 !h-8" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[400px] bg-white border-l border-gray-100 flex flex-col p-6 pt-12">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex justify-center items-center border-b border-gray-100 pb-8 mb-8">
                <Image
                  src="/logos/logo-dark.png"
                  alt="NRI Construction & Fabrication"
                  width={340}
                  height={120}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>

              <nav className="flex flex-col gap-6 items-center text-center">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "text-lg font-semibold transition-colors",
                        isActive ? "text-nri-orange" : "text-nri-navy hover:text-nri-orange"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Link href="/contact" onClick={() => setOpen(false)} className="mt-8 flex items-center justify-center gap-2 bg-nri-orange text-white hover:bg-nri-orange/90 w-full rounded-full py-4 text-base font-semibold transition-colors shadow-lg">
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
