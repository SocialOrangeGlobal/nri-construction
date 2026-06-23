import Hero from "@/components/sections/Hero";
import ServicesBento from "@/components/sections/ServicesBento";
import ProjectJourney from "@/components/sections/ProjectJourney";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesBento />
      <ProjectJourney />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
