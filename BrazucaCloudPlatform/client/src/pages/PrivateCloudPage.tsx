import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Lock, 
  Shield, 
  Settings, 
  BarChart3, 
  Layers, 
  Zap,
  Server,
  ArrowRight
} from "lucide-react";

const PrivateCloudPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Lock className="w-10 h-10 text-blue-500" />,
      title: "Dedicado e Isolado",
      description: "Infraestrutura totalmente dedicada ao seu negócio, garantindo isolamento completo de recursos."
    },
    {
      icon: <Shield className="w-10 h-10 text-indigo-500" />,
      title: "Segurança Máxima",
      description: "Camadas avançadas de segurança física e lógica para proteger seus dados e aplicações."
    },
    {
      icon: <Settings className="w-10 h-10 text-green-500" />,
      title: "Personalização Total",
      description: "Configurações de hardware e software adaptadas às suas necessidades específicas."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-amber-500" />,
      title: "Performance Garantida",
      description: "Recursos dedicados garantem desempenho consistente, sem concorrência com outros clientes."
    },
    {
      icon: <Layers className="w-10 h-10 text-purple-500" />,
      title: "Conformidade e Governança",
      description: "Ambientes que atendem aos mais rigorosos requisitos regulatórios e de compliance."
    },
    {
      icon: <Zap className="w-10 h-10 text-red-500" />,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada para suporte e monitoramento 24/7 de sua infraestrutura."
    }
  ];

  const usesCases = [
    {
      title: "Instituições Financeiras",
      description: "Bancos, seguradoras e fintechs que necessitam de alto nível de segurança e conformidade regulatória.",
      benefits: [
        "Conformidade com regulamentações bancárias",
        "Segurança de dados financeiros sensíveis",
        "Alta disponibilidade para operações críticas"
      ]
    },
    {
      title: "Área da Saúde",
      description: "Hospitais, clínicas e empresas de saúde que lidam com dados sensíveis de pacientes e precisam garantir a conformidade com normas como LGPD.",
      benefits: [
        "Proteção de dados de pacientes",
        "Conformidade com regulamentações de saúde",
        "Ambiente seguro para aplicações críticas"
      ]
    },
    {
      title: "Grandes Corporações",
      description: "Empresas de grande porte que necessitam de recursos dedicados para suas operações de TI críticas.",
      benefits: [
        "Ambiente isolado para aplicações críticas",
        "Personalização de acordo com necessidades específicas",
        "Controle total sobre a infraestrutura"
      ]
    },
    {
      title: "E-commerce e Varejo",
      description: "Plataformas de comércio eletrônico que precisam de alta disponibilidade e desempenho consistente.",
      benefits: [
        "Desempenho estável durante picos de tráfego",
        "Segurança para transações online",
        "Escalabilidade para datas sazonais"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="private-cloud-hero" className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("nav.privateCloud")}</h1>
              <p className="text-xl opacity-90 mb-8">
                Maximize controle, segurança e performance com uma infraestrutura de nuvem totalmente dedicada e personalizada para sua empresa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Solicitar Proposta
                </a>
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Falar com Consultor
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Principais Características</h2>
              <p className="text-gray-600 text-lg">
                Nossa solução de Nuvem Privada oferece controle total sobre seus recursos, com segurança, performance e personalização inigualáveis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
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
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Como Funciona</h2>
              <p className="text-gray-600 text-lg">
                Entenda como implementamos e gerenciamos sua infraestrutura de Nuvem Privada, garantindo máxima eficiência e controle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1">
                  <div className="bg-white rounded-xl p-8">
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                          <span className="font-bold text-blue-600">1</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Avaliação e Planejamento</h3>
                          <p className="text-gray-600">
                            Nossa equipe técnica avalia suas necessidades específicas e desenvolve um plano detalhado para sua infraestrutura de nuvem privada.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                          <span className="font-bold text-blue-600">2</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Implementação Personalizada</h3>
                          <p className="text-gray-600">
                            Configuramos hardware, software e segurança de acordo com suas especificações, garantindo um ambiente totalmente dedicado.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                          <span className="font-bold text-blue-600">3</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Migração de Dados</h3>
                          <p className="text-gray-600">
                            Realizamos a migração de seus sistemas e dados para a nova infraestrutura, minimizando tempo de inatividade e riscos.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mr-4">
                          <span className="font-bold text-blue-600">4</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">Gerenciamento Contínuo</h3>
                          <p className="text-gray-600">
                            Monitoramos, mantemos e otimizamos sua nuvem privada 24/7, garantindo performance, segurança e alta disponibilidade.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6">Infraestrutura Dedicada</h3>
                <p className="text-gray-600 mb-6">
                  Sua Nuvem Privada é construída com hardware de última geração, oferecendo:
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Servidores físicos dedicados com processadores Intel Xeon ou AMD EPYC</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Armazenamento SSD NVMe de alta performance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Rede dedicada de 10Gbps com proteção DDoS</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Sistemas de virtualização enterprise-grade como VMware ou Hyper-V</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <Server className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Sistemas de backup e recuperação de desastres</span>
                  </li>
                </ul>
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Ver especificações técnicas detalhadas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Casos de Uso Section */}
        <section id="use-cases" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Casos de Uso</h2>
              <p className="text-gray-600 text-lg">
                Nossa solução de Nuvem Privada é ideal para empresas que precisam de alto nível de segurança, conformidade e desempenho.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {usesCases.map((useCase, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <h4 className="font-semibold mb-2">Principais benefícios:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Pronto para implementar sua Nuvem Privada?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Entre em contato para uma consultoria personalizada e descubra como nossa solução de Nuvem Privada pode transformar a infraestrutura de TI da sua empresa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Solicitar Proposta
                </a>
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Agendar Demonstração
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

export default PrivateCloudPage;