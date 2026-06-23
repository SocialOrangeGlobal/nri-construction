import Link from "next/link";
import { ArrowRight, Building2, HardHat, ShieldCheck, Ruler, Briefcase, Wrench } from "lucide-react";

const SERVICES = [
  {
    id: "development",
    title: "Planning & Development",
    subtitle: "Development Management",
    description: "Early stage involvement designed to reduce client/developer risk. Focus on budget, feasibility and constructibility.",
    icon: Briefcase,
    link: "/services",
  },
  {
    id: "design",
    title: "Design & Documentation",
    subtitle: "Design Management",
    description: "Collaborative, efficient coordination of design, documentation and specifications.",
    icon: Ruler,
    link: "/services",
  },
  {
    id: "project-management",
    title: "Project Management",
    subtitle: "Project Management",
    description: "Professional management of construction projects. Focus on accountability, efficiency and risk mitigation.",
    icon: Building2,
    link: "/services",
  },
  {
    id: "construction",
    title: "Construction Services",
    subtitle: "General Contracting",
    description: "Flexible project delivery models including construct only (GC), design & construct, construction management or cost-plus.",
    icon: HardHat,
    link: "/services",
  },
  {
    id: "asset-management",
    title: "Asset Management",
    subtitle: "Asset Protection",
    description: "Asset management, planned and unplanned maintenance, abortive and remedial works, audits and inspections.",
    icon: Wrench,
    link: "/services",
  },
  {
    id: "hseq",
    title: "HSEQ Management",
    subtitle: "HSEQ Services",
    description: "Health, Safety, Environment and Quality system management, auditing and risk analysis.",
    icon: ShieldCheck,
    link: "/services",
  },
];

export default function ServicesFlipGrid() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-nri-navy dark:text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-body">
            Delivering excellence across every phase of your project lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group h-[320px] [perspective:1000px] cursor-pointer"
              >
                {/* Inner Flip Container */}
                <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl rounded-xl">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white dark:bg-slate-950 rounded-xl border border-gray-100 dark:border-slate-800 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 bg-nri-orange/10 dark:bg-nri-orange/5 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10 text-nri-orange" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-nri-navy dark:text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-nri-navy rounded-xl p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white mb-4">
                        {service.subtitle}
                      </h3>
                      <p className="text-gray-300 font-body leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Link
                      href={service.link}
                      className="inline-flex items-center justify-center w-full bg-nri-orange hover:bg-nri-orange/90 text-white font-bold py-3 px-6 rounded-full transition-colors mt-6"
                    >
                      Read more...
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
