import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import BMICalculator from "@/components/sections/BMICalculator";
import MembershipCTA from "@/components/sections/MembershipCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <GallerySection preview={true} />
        <BMICalculator />
        <MembershipCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
