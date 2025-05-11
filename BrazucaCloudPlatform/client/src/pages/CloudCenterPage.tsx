import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Server, 
  CloudRain, 
  Shield, 
  BarChart3, 
  Layers, 
  Zap,
  Monitor,
  HardDrive,
  Network
} from "lucide-react";
import PricingSection from "@/components/sections/PricingSection";

const CloudCenterPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const serviceCards = [
    {
      icon: <Server className="w-10 h-10 text-blue-500" />,
      title: "Gerenciamento Centralizado",
      description: "Controle todos os seus recursos de nuvem através de uma interface unificada e intuitiva."
    },
    {
      icon: <CloudRain className="w-10 h-10 text-indigo-500" />,
      title: "Escalonamento Automático",
      description: "Ajuste automaticamente os recursos conforme a demanda, garantindo performance sem desperdício."
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Segurança Avançada",
      description: "Proteção contra ameaças com monitoramento 24/7 e sistemas de detecção de intrusão."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-amber-500" />,
      title: "Monitoramento em Tempo Real",
      description: "Acompanhe todos os aspectos de sua infraestrutura com dashboards detalhados e alertas configuráveis."
    },
    {
      icon: <Layers className="w-10 h-10 text-purple-500" />,
      title: "Backup Automatizado",
      description: "Realize backups programados de todos os seus dados com retenção configurável."
    },
    {
      icon: <Zap className="w-10 h-10 text-red-500" />,
      title: "Alta Disponibilidade",
      description: "Garanta uptime de 99,9% com nossa infraestrutura redundante e balanceamento de carga."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="cloud-center-hero" className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("nav.cloudCenter")}</h1>
              <p className="text-xl opacity-90 mb-8">
                Centralize o gerenciamento de toda sua infraestrutura em nuvem com nossa solução completa e integrada.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block">
                  Conheça os Planos
                </a>
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block">
                  Solicitar Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefícios Section */}
        <section id="benefits" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Benefícios do Cloud Center</h2>
              <p className="text-gray-600 text-lg">
                Nossa solução de Cloud Center oferece uma experiência integrada para gerenciar toda sua infraestrutura em nuvem, com ferramentas avançadas para monitoramento, segurança e otimização.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCards.map((card, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Infraestrutura Section */}
        <section id="infrastructure" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t("nav.cloudCenterDropdown.infrastructure")}</h2>
              <p className="text-gray-600 text-lg">
                Nossa infraestrutura de Cloud Center é construída com tecnologias de ponta para garantir máxima performance, segurança e disponibilidade.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="mb-5">
                  <Server className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Processadores de Alto Desempenho</h3>
                <p className="text-gray-600">
                  Servidores equipados com processadores Intel Xeon e AMD EPYC de última geração, oferecendo performance excepcional para cargas de trabalho intensivas.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="mb-5">
                  <HardDrive className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Armazenamento NVMe</h3>
                <p className="text-gray-600">
                  Discos SSD NVMe de alta velocidade proporcionando operações de I/O ultrarrápidas, eliminando gargalos de armazenamento.
                </p>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="mb-5">
                  <Network className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Rede Redundante</h3>
                <p className="text-gray-600">
                  Conexões de rede redundantes de 10Gbps, garantindo alta disponibilidade e velocidade para transferência de dados.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="bg-blue-50 p-8 rounded-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Especificações Técnicas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Certificações</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• TIER 3 com disponibilidade de 99,9%</li>
                    <li>• ISO 27001 para Segurança da Informação</li>
                    <li>• Conformidade com LGPD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Segurança</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Proteção DDoS avançada</li>
                    <li>• Firewall gerenciado</li>
                    <li>• Monitoramento 24/7</li>
                    <li>• Backup e recuperação de desastres</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Conectividade</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Múltiplos provedores de trânsito</li>
                    <li>• Conexão direta a PIX brasileiro</li>
                    <li>• Baixa latência para América Latina</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Energia</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Sistemas de alimentação redundantes</li>
                    <li>• Geradores de backup</li>
                    <li>• UPS de alta capacidade</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Soluções Section */}
        <section id="solutions" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t("nav.cloudCenterDropdown.solutions")}</h2>
              <p className="text-gray-600 text-lg">
                Oferecemos soluções completas para diferentes necessidades de negócio, desde startups até grandes corporações.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">Cloud Center para Startups</h3>
                <p className="text-gray-600 mb-6">
                  Solução ideal para startups em crescimento, oferecendo infraestrutura escalável com controles de custo eficientes.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Escalabilidade automática para acompanhar seu crescimento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Gerenciamento simplificado da infraestrutura</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Controle de custos com alertas de orçamento</span>
                  </li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Ver Detalhes
                </button>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Cloud Center Enterprise</h3>
                <p className="text-gray-600 mb-6">
                  Solução robusta para empresas de médio e grande porte que precisam de alta disponibilidade e recursos avançados.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">SLA de 99,99% de disponibilidade</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Recursos dedicados para máxima performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Segurança avançada e conformidade com normas regulatórias</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Suporte técnico prioritário 24/7</span>
                  </li>
                </ul>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300">
                  Ver Detalhes
                </button>
              </motion.div>
            </div>

            <motion.div 
              className="mt-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-xl text-gray-700 mb-8">
                Não encontrou uma solução que atenda às suas necessidades específicas?
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Solicitar Solução Personalizada
              </button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Pronto para centralizar sua infraestrutura em nuvem?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Simplifique o gerenciamento de sua infraestrutura com o Brazuca Cloud Center. Entre em contato hoje mesmo para uma demonstração gratuita.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block">
                  Solicitar Demonstração
                </a>
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block">
                  Falar com um Especialista
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CloudCenterPage;