import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Cloud, Server, Database, HardDrive, Network, Shield } from "lucide-react";

interface PartnerProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const PartnersSection = () => {
  const { t } = useLanguage();

  const partners: PartnerProps[] = [
    {
      name: "Amazon Web Services",
      icon: <Cloud size={36} />,
      color: "text-orange-600"
    },
    {
      name: "Microsoft Azure",
      icon: <Server size={36} />,
      color: "text-blue-500"
    },
    {
      name: "Intel",
      icon: <HardDrive size={36} />,
      color: "text-blue-700"
    },
    {
      name: "Cisco",
      icon: <Network size={36} />,
      color: "text-blue-400"
    },
    {
      name: "Red Hat",
      icon: <Shield size={36} />,
      color: "text-red-600"
    },
    {
      name: "VMware",
      icon: <Database size={36} />,
      color: "text-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-inter">{t("partners.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("partners.description")}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div className="h-20 w-full bg-white shadow-md rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300 p-4">
                <div className={`${partner.color}`}>
                  {partner.icon}
                </div>
              </div>
              <span className="mt-2 text-gray-700 text-sm font-medium">{partner.name}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-gray-500 italic">
            {t("partners.disclaimer")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
