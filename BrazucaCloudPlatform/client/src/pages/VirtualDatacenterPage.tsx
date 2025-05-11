import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Database, 
  Network, 
  Lock, 
  BarChart3, 
  Layers, 
  Zap,
  ArrowRight,
  CheckCircle2,
  Server
} from "lucide-react";

const VirtualDatacenterPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const advantages = [
    {
      icon: <Database className="w-10 h-10 text-blue-500" />,
      title: "Recursos Flexíveis",
      description: "Ajuste CPU, memória, armazenamento e rede de acordo com suas necessidades específicas."
    },
    {
      icon: <Network className="w-10 h-10 text-indigo-500" />,
      title: "Infraestrutura Completa",
      description: "Toda a infraestrutura de um datacenter físico em um ambiente virtualizado e gerenciável."
    },
    {
      icon: <Lock className="w-10 h-10 text-green-500" />,
      title: "Segurança Avançada",
      description: "Múltiplas camadas de segurança para proteção de dados e aplicações críticas."
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-amber-500" />,
      title: "Alta Performance",
      description: "Tecnologia de ponta garantindo desempenho consistente para suas aplicações mais exigentes."
    },
    {
      icon: <Layers className="w-10 h-10 text-purple-500" />,
      title: "Redundância Total",
      description: "Infraestrutura redundante em todos os níveis para garantir máxima disponibilidade."
    },
    {
      icon: <Zap className="w-10 h-10 text-red-500" />,
      title: "Escalabilidade Rápida",
      description: "Expanda ou reduza recursos em minutos de acordo com a demanda do seu negócio."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="vdc-hero" className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("nav.virtualDatacenter")}</h1>
              <p className="text-xl opacity-90 mb-8">
                Toda a potência e flexibilidade de um datacenter físico em uma plataforma virtualizada, totalmente gerenciável e com recursos sob demanda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Conhecer Planos
                </a>
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Solicitar Demo
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vantagens Section */}
        <section id="advantages" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Vantagens do Virtual Datacenter</h2>
              <p className="text-gray-600 text-lg">
                Nosso Virtual Datacenter oferece todos os benefícios de um datacenter físico, com a flexibilidade e eficiência da virtualização.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
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
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* O que Incluímos Section */}
        <section id="what-we-include" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">O Que Incluímos</h2>
              <p className="text-gray-600 text-lg">
                Nosso Virtual Datacenter oferece uma solução completa para a infraestrutura de TI da sua empresa, incluindo:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Servidores Virtuais</h3>
                      <p className="text-gray-600">
                        Múltiplos servidores virtuais com recursos dedicados de CPU, memória e armazenamento, configuráveis de acordo com suas necessidades.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Rede Virtual</h3>
                      <p className="text-gray-600">
                        Infraestrutura de rede completa, incluindo switches virtuais, firewalls, balanceadores de carga e VPNs para conectividade segura.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Armazenamento de Alta Performance</h3>
                      <p className="text-gray-600">
                        Soluções de armazenamento baseadas em SSD NVMe, com opções de níveis de serviço para diferentes necessidades de performance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Backup e Recuperação</h3>
                      <p className="text-gray-600">
                        Sistemas automáticos de backup e recuperação de desastres para proteger seus dados e garantir continuidade de negócios.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Segurança Avançada</h3>
                      <p className="text-gray-600">
                        Proteção DDoS, firewalls gerenciados, detecção de intrusão e monitoramento de segurança 24/7.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-2xl">
                  <div className="bg-white rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-6">Painel de Controle</h3>
                    <p className="text-gray-600 mb-6">
                      Gerencie todo seu Virtual Datacenter através do nosso painel de controle intuitivo:
                    </p>
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Server className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-gray-700">Provisionamento e gerenciamento de servidores virtuais em minutos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Server className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-gray-700">Configuração de redes, firewalls e políticas de segurança</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Server className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-gray-700">Monitoramento de desempenho e utilização de recursos em tempo real</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Server className="w-5 h-5 text-indigo-600" />
                        </div>
                        <span className="text-gray-700">Configuração de políticas de backup e retenção</span>
                      </li>
                    </ul>
                    <button className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      Ver demonstração do painel
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certificações Section */}
        <section id="certifications" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Certificações e Compliance</h2>
              <p className="text-gray-600 text-lg">
                Nosso Virtual Datacenter atende aos mais rigorosos padrões de certificação e conformidade regulatória.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-8 rounded-xl shadow-sm mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-blue-600">T3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">TIER 3 Certificado</h3>
                  <p className="text-gray-600">
                    Infraestrutura própria em datacenters TIER 3 da Ascenty e Equinix, garantindo 99,99% de disponibilidade.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-24 h-24 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-green-600">ISO</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">ISO 27001</h3>
                  <p className="text-gray-600">
                    Certificação de segurança da informação e gerenciamento de riscos.
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-purple-600">LGPD</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">LGPD Compliant</h3>
                  <p className="text-gray-600">
                    Conformidade com a Lei Geral de Proteção de Dados Brasileira.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                Além das certificações, oferecemos suporte para ajudar sua empresa a atender requisitos específicos de conformidade para seu setor.
              </p>
              <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Saber Mais Sobre Compliance
              </a>
            </motion.div>
          </div>
        </section>

        {/* Planos Section */}
        <section id="plans" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Planos de Virtual Datacenter</h2>
              <p className="text-gray-600 text-lg">
                Escolha o plano que melhor atende às necessidades da sua empresa ou solicite uma configuração personalizada.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plano Básico */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">VDC Startup</h3>
                  <p className="text-gray-600 mb-6">Ideal para pequenas empresas e startups</p>
                  <div className="mb-6 text-xl font-bold text-primary">Consulte nossa equipe de vendas</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">8 vCPUs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">32GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">500GB SSD NVMe</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">5TB Transferência</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">3 Servidores Virtuais</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Backup Diário</span>
                    </li>
                  </ul>
                  <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-block text-center">
                    Falar com Vendas
                  </a>
                </div>
              </motion.div>

              {/* Plano Premium - Destacado */}
              <motion.div 
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-indigo-500 relative md:scale-105 transform z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-indigo-500 text-white text-center py-2">
                  <span className="font-medium">Mais Popular</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">VDC Business</h3>
                  <p className="text-gray-600 mb-6">Para empresas em crescimento</p>
                  <div className="mb-6 text-xl font-bold text-primary">Consulte nossa equipe de vendas</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">16 vCPUs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">64GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">1TB SSD NVMe</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">10TB Transferência</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">8 Servidores Virtuais</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Backup Diário + Semanal</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Proteção DDoS</span>
                    </li>
                  </ul>
                  <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-block text-center">
                    Falar com Vendas
                  </a>
                </div>
              </motion.div>

              {/* Plano Enterprise */}
              <motion.div 
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">VDC Enterprise</h3>
                  <p className="text-gray-600 mb-6">Para grandes empresas</p>
                  <div className="mb-6 text-xl font-bold text-primary">Consulte nossa equipe de vendas</div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">32 vCPUs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">128GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">2TB SSD NVMe</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">20TB Transferência</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">16 Servidores Virtuais</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Backup Diário + Semanal + Mensal</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Proteção DDoS Avançada</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Suporte Prioritário 24/7</span>
                    </li>
                  </ul>
                  <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors inline-block text-center">
                    Falar com Vendas
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="mt-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-xl text-gray-700 mb-8">
                Precisa de uma configuração personalizada para seu Virtual Datacenter?
              </p>
              <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Solicitar Proposta Personalizada
              </a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Pronto para migrar para um Virtual Datacenter?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Simplifique sua infraestrutura e maximize a eficiência dos seus recursos com nossa solução de Virtual Datacenter. Entre em contato para uma avaliação personalizada.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-700 hover:bg-indigo-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Agendar Consultoria Gratuita
                </a>
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Ver Demonstração
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

export default VirtualDatacenterPage;