import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Server, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  HardDrive,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import PriceCalculatorSection from "@/components/sections/PriceCalculatorSection";

const CloudServerPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Alta Performance",
      description: "Servidores virtuais com recursos dedicados para garantir máximo desempenho para suas aplicações."
    },
    {
      icon: <Server className="w-10 h-10 text-indigo-500" />,
      title: "Recursos Dedicados",
      description: "CPU, memória e armazenamento dedicados, sem concorrência com outros clientes."
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "Segurança Avançada",
      description: "Proteção contra ameaças com firewalls gerenciados e proteção DDoS incluída."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-amber-500" />,
      title: "Disponibilidade Garantida",
      description: "SLA de 99,9% de disponibilidade com infraestrutura redundante em todos os níveis."
    },
    {
      icon: <Clock className="w-10 h-10 text-purple-500" />,
      title: "Rápida Implementação",
      description: "Deployment de novos servidores em minutos, com sistema operacional de sua escolha."
    },
    {
      icon: <HardDrive className="w-10 h-10 text-red-500" />,
      title: "Backup Automatizado",
      description: "Backup diário dos seus dados com retenção configurável para garantir a segurança das informações."
    }
  ];

  const operatingSystems = [
    { name: "Ubuntu", versions: ["24.04 LTS", "22.04 LTS", "20.04 LTS", "18.04 LTS"] },
    { name: "CentOS", versions: ["9 Stream", "8 Stream", "7"] },
    { name: "Debian", versions: ["12", "11", "10", "9"] },
    { name: "Windows Server", versions: ["2025", "2022", "2019", "2016"] },
    { name: "Red Hat Enterprise Linux", versions: ["9", "8", "7"] },
    { name: "CloudLinux", versions: ["8", "7"] }
  ];

  const applications = [
    { name: "cPanel/WHM", category: "Painel de Controle" },
    { name: "Plesk", category: "Painel de Controle" },
    { name: "WordPress", category: "CMS" },
    { name: "Docker", category: "Containerização" },
    { name: "LAMP Stack", category: "Development" },
    { name: "LEMP Stack", category: "Development" },
    { name: "Node.js", category: "Development" },
    { name: "SQL Server", category: "Database" },
    { name: "MySQL/MariaDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Redis", category: "Database" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="cloud-server-hero" className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("nav.cloudServer")}</h1>
              <p className="text-xl opacity-90 mb-8">
                Servidores virtuais de alta performance com recursos dedicados, ideal para aplicações críticas que exigem estabilidade e desempenho consistente.
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://wa.me/551146734420"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Ver Planos
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
              <h2 className="text-3xl font-bold mb-6">Benefícios dos Cloud Servers</h2>
              <p className="text-gray-600 text-lg">
                Nossos Cloud Servers oferecem a combinação perfeita de desempenho, segurança e flexibilidade para suas aplicações críticas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
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
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Especificações Técnicas Section */}
        <section id="tech-specs" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Especificações Técnicas</h2>
              <p className="text-gray-600 text-lg">
                Nossos Cloud Servers são construídos com hardware de última geração, garantindo desempenho excepcional para suas aplicações.
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
                <h3 className="text-2xl font-bold mb-6">Hardware de Ponta</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Processadores de Alta Performance</h4>
                      <p className="text-gray-600">
                        Processadores Intel Xeon e AMD EPYC de última geração, oferecendo desempenho excepcional para suas aplicações.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Armazenamento SSD NVMe</h4>
                      <p className="text-gray-600">
                        Discos SSD NVMe de alto desempenho, proporcionando operações de I/O ultrarrápidas para suas aplicações e bancos de dados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Rede de 40Gbps</h4>
                      <p className="text-gray-600">
                        Conexões de rede redundantes de 40Gbps, garantindo alta disponibilidade e velocidade para transferência de dados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4">
                      <CheckCircle2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Memória DDR4 ECC</h4>
                      <p className="text-gray-600">
                        Memória RAM DDR4 com correção de erros (ECC), garantindo estabilidade e confiabilidade para aplicações críticas.
                      </p>
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
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-1 rounded-2xl">
                  <div className="bg-white rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Infraestrutura Redundante</h3>
                    <p className="text-gray-600 mb-6">
                      Nossa infraestrutura é projetada com redundância em todos os níveis:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Múltiplos servidores físicos em configuração de alta disponibilidade</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Armazenamento distribuído com replicação automática</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Conexões de rede redundantes com múltiplos provedores</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Sistemas de energia redundantes com geradores de backup</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">Sistemas de refrigeração de precisão com redundância N+1</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Saiba mais sobre nossa infraestrutura
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sistemas Operacionais Section */}
        <section id="operating-systems" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Sistemas Operacionais</h2>
              <p className="text-gray-600 text-lg">
                Oferecemos uma ampla variedade de sistemas operacionais para atender às suas necessidades específicas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {operatingSystems.map((os, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-4">{os.name}</h3>
                  <p className="text-gray-600 mb-4">Versões disponíveis:</p>
                  <ul className="space-y-2">
                    {os.versions.map((version, i) => (
                      <li key={i} className="flex items-start">
                        <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{version}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                Não encontrou o sistema operacional que precisa? Entre em contato conosco para discutir opções personalizadas.
              </p>
              <a 
                href="https://wa.me/551146734420"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Solicitar Sistema Operacional Personalizado
              </a>
            </motion.div>
          </div>
        </section>

        {/* Aplicações Pré-configuradas Section */}
        <section id="applications" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Aplicações Pré-configuradas</h2>
              <p className="text-gray-600 text-lg">
                Acelere sua implementação com nossas aplicações pré-configuradas, prontas para uso imediato.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="mb-3">
                    <Server className="w-8 h-8 mx-auto text-blue-500" />
                  </div>
                  <h3 className="font-bold mb-1">{app.name}</h3>
                  <p className="text-sm text-gray-500">{app.category}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                Todas as aplicações são instaladas e configuradas por nossa equipe técnica, garantindo segurança e otimização de desempenho.
              </p>
              <a 
                href="https://wa.me/551146734420"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Ver Todas as Aplicações
              </a>
            </motion.div>
          </div>
        </section>

        {/* Calculadora de Preços Section */}
        <section id="price-calculator">
          <PriceCalculatorSection />
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
                Nossos Cloud Servers são a escolha ideal para uma ampla variedade de aplicações e cenários.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">Hospedagem Web</h3>
                <p className="text-gray-600 mb-4">
                  Ideal para sites de alto tráfego, e-commerce e aplicações web que exigem desempenho consistente e alta disponibilidade.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Desempenho estável mesmo durante picos de tráfego</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Escalabilidade para acomodar crescimento</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Segurança para proteger dados sensíveis</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Bancos de Dados</h3>
                <p className="text-gray-600 mb-4">
                  Performance otimizada para bancos de dados SQL e NoSQL, garantindo operações rápidas e confiáveis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Armazenamento SSD NVMe para operações de I/O ultrarrápidas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Memória otimizada para cargas de trabalho de bancos de dados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Backup automatizado para proteção de dados</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Aplicações Corporativas</h3>
                <p className="text-gray-600 mb-4">
                  Ambiente confiável para aplicações críticas de negócios, como CRM, ERP e sistemas de gestão.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Alta disponibilidade para aplicações críticas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Performance consistente para múltiplos usuários</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Segurança e conformidade para dados sensíveis</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">Desenvolvimento e Testes</h3>
                <p className="text-gray-600 mb-4">
                  Ambientes isolados e configuráveis para desenvolvimento, testes e integração contínua.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Rápida criação e exclusão de ambientes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Suporte a ferramentas de CI/CD</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-2 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Isolamento para testes reproduzíveis</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Pronto para impulsionar suas aplicações?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Crie seu Cloud Server agora mesmo e experimente a diferença em desempenho, confiabilidade e suporte.
              </p>
              <div className="flex justify-center">
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Fale com Especialista
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

export default CloudServerPage;