import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

interface PricingPlanProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  popular?: boolean;
  index: number;
}

const PricingPlan = ({ 
  title, 
  subtitle, 
  price, 
  features, 
  popular = false,
  index
}: PricingPlanProps) => {
  const { t } = useLanguage();

  const handleNavigation = (section: string) => {
    scrollToSection(section);
  };

  return (
    <motion.div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg border ${popular ? 'border-2 border-[#0056b3] transform scale-105 relative z-10' : 'border-gray-200'} transition-transform duration-300 ${!popular ? 'hover:-translate-y-2' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 text-sm font-bold">
          {t("pricing.mostPopular")}
        </div>
      )}
      <div className={`${popular ? 'bg-[#0056b3] py-6 px-6 text-center' : 'bg-light-gray py-6 px-6 text-center'}`}>
        <h3 className={`text-2xl font-bold font-inter ${popular ? 'text-white' : 'text-dark-blue'}`}>{title}</h3>
        <p className={`${popular ? 'text-gray-100' : 'text-gray-600'} mt-1`}>{subtitle}</p>
      </div>
      <div className="p-8">
        <div className="flex justify-center items-baseline mb-6">
          <span className="text-5xl font-bold text-[#0056b3]">{price}</span>
          <span className="text-gray-500 ml-2">/mês</span>
        </div>
        <ul className="mb-8 space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="text-[#0056b3] mr-3 h-5 w-5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className={`block text-center ${popular ? 'bg-accent hover:bg-orange-600' : 'bg-[#0056b3] hover:bg-[#003d80]'} text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 w-full`}
          onClick={() => window.open('https://wa.me/551146734420', '_blank')}
        >
          {t("pricing.signup")}
        </Button>
      </div>
    </motion.div>
  );
};

const PricingSection = () => {
  const { t } = useLanguage();

  const plans = [
    {
      title: t("pricing.plans.start.title"),
      subtitle: t("pricing.plans.start.subtitle"),
      price: "R$129",
      features: [
        t("pricing.plans.start.features.0"),
        t("pricing.plans.start.features.1"),
        t("pricing.plans.start.features.2"),
        t("pricing.plans.start.features.3"),
        t("pricing.plans.start.features.4")
      ],
      popular: false
    },
    {
      title: t("pricing.plans.pro.title"),
      subtitle: t("pricing.plans.pro.subtitle"),
      price: "R$299",
      features: [
        t("pricing.plans.pro.features.0"),
        t("pricing.plans.pro.features.1"),
        t("pricing.plans.pro.features.2"),
        t("pricing.plans.pro.features.3"),
        t("pricing.plans.pro.features.4"),
        t("pricing.plans.pro.features.5")
      ],
      popular: true
    },
    {
      title: t("pricing.plans.enterprise.title"),
      subtitle: t("pricing.plans.enterprise.subtitle"),
      price: "R$599",
      features: [
        t("pricing.plans.enterprise.features.0"),
        t("pricing.plans.enterprise.features.1"),
        t("pricing.plans.enterprise.features.2"),
        t("pricing.plans.enterprise.features.3"),
        t("pricing.plans.enterprise.features.4"),
        t("pricing.plans.enterprise.features.5"),
        t("pricing.plans.enterprise.features.6")
      ],
      popular: false
    }
  ];

  const handleNavigation = (section: string) => {
    scrollToSection(section);
  };

  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">{t("pricing.title")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("pricing.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingPlan 
              key={index}
              title={plan.title}
              subtitle={plan.subtitle}
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-700 mb-4">{t("pricing.customSolution")}</p>
          <a 
            href="https://wa.me/551146734420"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent hover:bg-[#0056b3]/5 text-[#0056b3] border-2 border-[#0056b3] font-semibold py-3 px-8 rounded-md transition-colors duration-300"
          >
            {t("pricing.customButton")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;