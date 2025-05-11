
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Users,
  Lightbulb,
  Gauge,
  LineChart,
  Shield,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";

const CloudConsultingPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Lightbulb className="w-10 h-10 text-blue-500" />,
      title: "Estratégia Cloud",
      description: "Planejamento estratégico para migração à nuvem"
    },
    {
      icon: <Gauge className="w-10 h-10 text-indigo-500" />,
      title: "Otimização",
      description: "Otimização de custos e performance"
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Segurança",
      description: "Consultoria em segurança na nuvem"
    },
    {
      icon: <LineChart className="w-10 h-10 text-amber-500" />,
      title: "Análise de Dados",
      description: "Estratégias para análise de dados em cloud"
    }
  ];

  const benefits = [
    {
      title: "Redução de Custos",
      description: "Otimize seus investimentos em infraestrutura de TI"
    },
    {
      title: "Maior Eficiência",
      description: "Melhore o desempenho e a produtividade"
    },
    {
      title: "Segurança Reforçada",
      description: "Proteja seus dados com as melhores práticas"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Consultoria em Cloud Computing
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Transforme seu negócio com soluções de nuvem personalizadas e expertise especializada
              </p>
              <a
                href="https://wa.me/551146734420"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Fale com Especialista
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Benefícios</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nossa consultoria oferece vantagens competitivas para seu negócio
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow text-center"
                >
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Entre em contato conosco para uma consultoria personalizada
              </p>
              <a
                href="https://wa.me/551146734420"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Agendar Consultoria
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CloudConsultingPage;
