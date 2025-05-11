import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Server, Headset, Shield, Award } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
    >
      <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-inter">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Server className="text-2xl text-primary" />,
      title: t("features.uptime.title"),
      description: t("features.uptime.description"),
    },
    {
      icon: <Headset className="text-2xl text-primary" />,
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
    {
      icon: <Shield className="text-2xl text-primary" />,
      title: t("features.security.title"),
      description: t("features.security.description"),
    },
    {
      icon: <Award className="text-2xl text-primary" />,
      title: t("features.certification.title"),
      description: t("features.certification.description"),
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
