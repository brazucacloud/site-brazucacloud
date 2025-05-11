import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechInfrastructureSection from "@/components/sections/TechInfrastructureSection";

import PriceCalculatorSection from "@/components/sections/PriceCalculatorSection";
import PartnersSection from "@/components/sections/PartnersSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <TechInfrastructureSection />
        <PriceCalculatorSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
