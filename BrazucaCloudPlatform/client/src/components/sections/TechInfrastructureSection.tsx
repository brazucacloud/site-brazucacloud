import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Server, HardDrive, Network, Shield, Database, Cpu } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const TechInfrastructureSection = () => {
  const { t } = useLanguage();
  
  const handleNavigation = (section: string) => {
    scrollToSection(section);
  };

  return (
    <section className="py-16 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-inter">{t("infrastructure.title")}</h2>
            <p className="text-lg mb-6 text-gray-200">
              {t("infrastructure.description")}
            </p>
            <ul className="space-y-4 mb-8">
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Cpu className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-inter">{t("infrastructure.processors.title")}</h3>
                  <p className="text-gray-300">{t("infrastructure.processors.description")}</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <HardDrive className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-inter">{t("infrastructure.storage.title")}</h3>
                  <p className="text-gray-300">{t("infrastructure.storage.description")}</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-white/10 rounded-full w-10 h-10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <Network className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 font-inter">{t("infrastructure.network.title")}</h3>
                  <p className="text-gray-300">{t("infrastructure.network.description")}</p>
                </div>
              </motion.li>
            </ul>
            <Button 
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-colors duration-300"
              onClick={() => handleNavigation("#services")}
            >
              {t("infrastructure.button")}
            </Button>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/10 p-8 rounded-lg shadow-xl">
              <div className="text-center mb-6">
                <Database className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-inter">{t("infrastructure.specs.title")}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <Server className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-bold mb-1">{t("infrastructure.specs.servers")}</h4>
                  <p className="text-sm text-gray-300">{t("infrastructure.specs.serversDetail")}</p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <HardDrive className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-bold mb-1">{t("infrastructure.specs.storage")}</h4>
                  <p className="text-sm text-gray-300">{t("infrastructure.specs.storageDetail")}</p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <Network className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-bold mb-1">{t("infrastructure.specs.network")}</h4>
                  <p className="text-sm text-gray-300">{t("infrastructure.specs.networkDetail")}</p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <Shield className="h-6 w-6 text-accent mb-2" />
                  <h4 className="font-bold mb-1">{t("infrastructure.specs.security")}</h4>
                  <p className="text-sm text-gray-300">{t("infrastructure.specs.securityDetail")}</p>
                </div>
              </div>
              
              <div className="mt-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">{t("infrastructure.certification.title")}</p>
                <p className="text-sm">{t("infrastructure.certification.description")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechInfrastructureSection;
