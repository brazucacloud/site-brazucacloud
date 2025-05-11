import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";

const HeroSection = () => {
  const { t } = useLanguage();

  const handleScroll = (selector: string) => {
    scrollToSection(selector);
  };

  return (
    <section className="bg-dark-blue text-white py-16 md:py-24" id="hero">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 font-inter leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("hero.title")}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t("hero.description")}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="https://wa.me/551146734420"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0056b3] hover:bg-[#003d80] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 text-lg inline-block"
            >
              {t("hero.buttons.primary")}
            </a>
            <Button 
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-md border-2 border-white transition-colors duration-300 text-lg"
              onClick={() => handleScroll("#services")}
            >
              {t("hero.buttons.secondary")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;