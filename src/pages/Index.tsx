import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowItWorks from "@/components/HowItWorks";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SparkleParticles from "@/components/SparkleParticles";

const Index = () => {
  return (
    <div className="relative">
      <SparkleParticles />
      <Navbar />
      <HeroSection />
      <WhySection />
      <HowItWorks />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
