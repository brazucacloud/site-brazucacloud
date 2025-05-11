
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Server, Database, HardDrive, Cloud } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  index: number;
}

const ServiceCard = ({ id, title, description, features, icon, color, index }: ServiceCardProps) => {
  const { t } = useLanguage();
  
  const handleContact = () => {
    scrollToSection("#contact");
  };

  return (
    <motion.div 
      className="rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className={`h-48 ${color} relative overflow-hidden flex flex-col items-center justify-center p-6`}>
        <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-white text-2xl font-bold text-center font-inter">{title}</h3>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <ul className="mb-6 space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="text-[#0056b3] mr-2 h-5 w-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link href={`/${id}`}>
          <a className="inline-block bg-[#0056b3] hover:bg-[#003d80] text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300">
            {t("services.learnMore")}
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: "nuvem-privada",
      title: t("services.cards.privateCloud.title"),
      description: t("services.cards.privateCloud.description"),
      features: [
        t("services.cards.privateCloud.features.0"),
        t("services.cards.privateCloud.features.1"),
        t("services.cards.privateCloud.features.2")
      ],
      icon: <Cloud className="h-10 w-10 text-white" />,
      color: "bg-[#0056b3]"
    },
    {
      id: "cloud-center",
      title: t("services.cards.cloudCenter.title"),
      description: t("services.cards.cloudCenter.description"),
      features: [
        t("services.cards.cloudCenter.features.0"),
        t("services.cards.cloudCenter.features.1"),
        t("services.cards.cloudCenter.features.2")
      ],
      icon: <Database className="h-10 w-10 text-white" />,
      color: "bg-[#4169e1]"
    },
    {
      id: "datacenter-virtual",
      title: t("services.cards.virtualDatacenter.title"),
      description: t("services.cards.virtualDatacenter.description"),
      features: [
        t("services.cards.virtualDatacenter.features.0"),
        t("services.cards.virtualDatacenter.features.1"),
        t("services.cards.virtualDatacenter.features.2")
      ],
      icon: <HardDrive className="h-10 w-10 text-white" />,
      color: "bg-[#0056b3]"
    },
    {
      id: "cloud-server",
      title: t("services.cards.cloudServer.title"),
      description: t("services.cards.cloudServer.description"),
      features: [
        t("services.cards.cloudServer.features.0"),
        t("services.cards.cloudServer.features.1"),
        t("services.cards.cloudServer.features.2")
      ],
      icon: <Server className="h-10 w-10 text-white" />,
      color: "bg-[#4169e1]"
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">{t("services.title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
              color={service.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
