import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import {
  Phone,
  Globe,
  Headphones,
  Shield,
  BarChart3,
  Users,
  CheckCircle2,
  Building2,
  Network,
  Settings,
  PhoneCall,
  MessageSquare,
  Video,
  Clock
} from "lucide-react";

const IpTelephonyPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Conectividade Global",
      description: "Chamadas internacionais com qualidade e baixo custo"
    },
    {
      icon: <Shield className="w-10 h-10 text-indigo-500" />,
      title: "Segurança Avançada",
      description: "Criptografia de ponta a ponta em todas as chamadas"
    },
    {
      icon: <Headphones className="w-10 h-10 text-green-500" />,
      title: "Suporte 24/7",
      description: "Assistência técnica especializada disponível todos os dias"
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-amber-500" />,
      title: "Relatórios Detalhados",
      description: "Análise completa do uso e custos das chamadas"
    }
  ];

  const voipBenefits = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      title: "Escalabilidade",
      description: "Cresça conforme sua necessidade sem custos extras de infraestrutura"
    },
    {
      icon: <Network className="w-8 h-8 text-indigo-500" />,
      title: "Mobilidade",
      description: "Acesse seu ramal de qualquer lugar com internet"
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: "Integração",
      description: "Conecte com CRM, ERP e outras ferramentas empresariais"
    }
  ];

  const pabxFeatures = [
    {
      icon: <PhoneCall className="w-8 h-8 text-purple-500" />,
      title: "URA Inteligente",
      description: "Atendimento automático personalizado com reconhecimento de voz"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-rose-500" />,
      title: "Call Center",
      description: "Gestão completa de filas e atendimentos"
    },
    {
      icon: <Phone className="w-8 h-8 text-cyan-500" />,
      title: "Portabilidade",
      description: "Mantenha seu número ao migrar para nossa telefonia VoIP"
    }
  ];

  const portabilityBenefits = [
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: "Mantenha seus Contatos",
      description: "Preserve o mesmo número que seus clientes já conhecem"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-emerald-500" />,
      title: "Processo Simples",
      description: "Realizamos todo o processo de portabilidade para você"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Prazo Curto",
      description: "Portabilidade concluída em até 5 dias úteis"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Telefonia IP Empresarial
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Modernize sua comunicação empresarial com nossa solução completa de telefonia VoIP e PABX inteligente
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

        {/* VoIP Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Tecnologia VoIP</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Voice over IP (VoIP) é a tecnologia que permite realizar chamadas através da internet,
                oferecendo qualidade superior e custos reduzidos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {voipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PABX Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">PABX IP Inteligente</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Central telefônica na nuvem com recursos avançados para otimizar a comunicação da sua empresa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pabxFeatures.map((feature, index) => (
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

        {/* Portability Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Benefícios da Portabilidade</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mantenha seu número de telefone e seus contatos ao migrar para nossa plataforma.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portabilityBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Features Section */}
        <section className="py-20 bg-gray-50">
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
              <h2 className="text-3xl font-bold mb-6">Modernize sua Comunicação Empresarial</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Entre em contato e descubra como podemos ajudar sua empresa a se comunicar melhor
              </p>
              <a
                href="https://wa.me/551146734420"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Solicitar Demonstração
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IpTelephonyPage;