import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { Building2, Award, Users, Target } from "lucide-react";

const AboutPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section id="about-hero" className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("nav.about")}</h1>
              <p className="text-xl opacity-90 mb-8">
                Conheça a Brazuca Cloud, a sua parceira em soluções de cloud computing no Brasil.
              </p>
            </motion.div>
          </div>
        </section>

        {/* História Section */}
        <section id="history" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
                <Building2 className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">{t("nav.aboutDropdown.history")}</h2>
              <p className="text-gray-600 text-lg">
                Fundada em 2015, a Brazuca Cloud nasceu da visão de criar uma empresa de cloud computing 100% brasileira, que entendesse as necessidades específicas do mercado nacional e oferecesse soluções tecnológicas de ponta com suporte especializado em português.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Nossa Jornada</h3>
                <p className="text-gray-600 mb-4">
                  A Brazuca Cloud iniciou suas operações com apenas 5 servidores e um pequeno escritório em São Paulo. Em poucos anos, expandimos nossa infraestrutura para múltiplos datacenters no Brasil, investindo constantemente em tecnologias de ponta e formando parcerias estratégicas com os principais players do mercado.
                </p>
                <p className="text-gray-600">
                  Hoje, atendemos mais de 500 empresas de diversos segmentos, desde startups até grandes corporações, sempre com o compromisso de oferecer a melhor experiência em cloud computing.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">Marcos Importantes</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="font-semibold mr-2">2015:</span>
                    <span className="text-gray-600">Fundação da Brazuca Cloud em São Paulo.</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold mr-2">2017:</span>
                    <span className="text-gray-600">Expansão para um segundo datacenter e lançamento das soluções de Nuvem Privada.</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold mr-2">2019:</span>
                    <span className="text-gray-600">Expansão da infraestrutura própria para datacenters TIER 3 Ascenty e Equinix.</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold mr-2">2021:</span>
                    <span className="text-gray-600">Lançamento de nossa plataforma de Cloud Center.</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold mr-2">2023:</span>
                    <span className="text-gray-600">Expansão da presença em datacenters TIER 3 e fortalecimento da infraestrutura nacional.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Equipe Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">{t("nav.aboutDropdown.team")}</h2>
              <p className="text-gray-600 text-lg">
                Nossa equipe é formada por profissionais altamente qualificados e apaixonados por tecnologia, comprometidos em oferecer as melhores soluções de cloud computing para nossos clientes.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Executivo de Vendas 1 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  EM
                </div>
                <h3 className="text-xl font-bold mb-2">Edson Meneghello</h3>
                <p className="text-blue-600 font-medium mb-4">Executivo de Vendas Sênior</p>
                <p className="text-gray-600">
                  Com mais de 15 anos no mercado corporativo, Edson é especialista em desenvolver estratégias de transformação digital que geram ROI mensurável. Sua expertise abrange desde soluções de nuvem privada até implementações completas de data centers virtuais, tendo conduzido projetos de sucesso para empresas do Fortune 500.
                </p>
              </motion.div>

              {/* Executivo de Vendas 2 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  AA
                </div>
                <h3 className="text-xl font-bold mb-2">Alexandre Alcântara</h3>
                <p className="text-blue-600 font-medium mb-4">Executivo de Vendas Enterprise</p>
                <p className="text-gray-600">
                  Especialista em contas enterprise, Alexandre tem histórico comprovado em otimizar custos operacionais através de soluções cloud personalizadas. Sua abordagem consultiva já ajudou dezenas de empresas a reduzirem em até 40% seus custos de infraestrutura enquanto aumentam performance e segurança.
                </p>
              </motion.div>

              {/* Executivo de Vendas 3 */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  HS
                </div>
                <h3 className="text-xl font-bold mb-2">Heitor Souza</h3>
                <p className="text-blue-600 font-medium mb-4">Executivo de Vendas Técnico</p>
                <p className="text-gray-600">
                  Combinando expertise técnica com visão comercial, Heitor é especialista em arquiteturas cloud-first e migração para nuvem. Seu conhecimento profundo em tecnologias emergentes permite oferecer soluções inovadoras que já geraram mais de R$ 50 milhões em economia para nossos clientes.
                </p>
              </motion.div>
            </div>

            <motion.div 
              className="text-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe conta com mais de 50 profissionais dedicados, incluindo engenheiros de sistemas, especialistas em segurança, desenvolvedores e consultores de negócios, prontos para atender às suas necessidades.
              </p>
              <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Entre em Contato com Nossa Equipe
              </a>
            </motion.div>
          </div>
        </section>

        {/* Missão e Valores Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block p-3 bg-amber-100 rounded-2xl mb-4">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">{t("nav.aboutDropdown.mission")}</h2>
              <p className="text-gray-600 text-lg">
                Nossos valores fundamentais orientam todas as nossas decisões e ações, formando a base de nossa cultura organizacional.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-gray-600">
                  Democratizar o acesso à tecnologia de ponta em cloud computing para empresas brasileiras de todos os portes, oferecendo soluções confiáveis, seguras e de alto desempenho, com suporte de excelência e preços justos.
                </p>
              </motion.div>

              <motion.div 
                className="bg-gray-50 p-8 rounded-xl shadow-sm"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a principal provedora brasileira de soluções em cloud computing, destacando-se pela excelência técnica, inovação constante e relacionamento próximo com os clientes.
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
              <h3 className="text-2xl font-bold mb-6 text-center">Nossos Valores</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Excelência</h4>
                  <p className="text-gray-600">
                    Buscamos a excelência em tudo o que fazemos, desde nossa infraestrutura até o atendimento ao cliente.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Inovação</h4>
                  <p className="text-gray-600">
                    Estamos sempre na vanguarda tecnológica, implementando as últimas inovações em nossa plataforma.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Confiabilidade</h4>
                  <p className="text-gray-600">
                    Construímos relacionamentos duradouros baseados em confiança, transparência e resultados consistentes.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Segurança</h4>
                  <p className="text-gray-600">
                    A segurança dos dados e operações de nossos clientes é nossa prioridade número um.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Comprometimento</h4>
                  <p className="text-gray-600">
                    Estamos comprometidos com o sucesso de nossos clientes, parceiros e colaboradores.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Sustentabilidade</h4>
                  <p className="text-gray-600">
                    Buscamos minimizar nosso impacto ambiental através de práticas sustentáveis em nossos datacenters.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;