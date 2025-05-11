
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Cloud,
  Lock,
  History,
  Zap,
  RefreshCw,
  Shield,
  CheckCircle2
} from "lucide-react";

const CloudBackupPage = () => {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Lock className="w-10 h-10 text-blue-500" />,
      title: "Backup Seguro",
      description: "Dados criptografados e armazenados com segurança"
    },
    {
      icon: <History className="w-10 h-10 text-indigo-500" />,
      title: "Retenção Flexível",
      description: "Políticas de retenção personalizáveis"
    },
    {
      icon: <Zap className="w-10 h-10 text-green-500" />,
      title: "Recuperação Rápida",
      description: "Restauração de dados ágil e eficiente"
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-amber-500" />,
      title: "Backup Automático",
      description: "Agendamento e execução automática de backups"
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
                Backup em Nuvem
              </h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Proteja seus dados com nossa solução de backup em nuvem confiável e segura
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
              <h2 className="text-3xl font-bold mb-4">Vantagens do Backup em Nuvem</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubra como nossa solução pode proteger os dados da sua empresa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow"
              >
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1" />
                    <span>Proteção contra perda de dados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1" />
                    <span>Recuperação rápida em caso de desastres</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1" />
                    <span>Conformidade com regulamentações</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow"
              >
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1" />
                    <span>Economia em infraestrutura</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1" />
                    <span>Monitoramento e relatórios detalhados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-green-500 mr-2 mt-1" />
                    <span>Escalabilidade conforme necessidade</span>
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
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Proteja seus Dados Agora</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Entre em contato e descubra como podemos ajudar sua empresa a manter seus dados seguros
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

export default CloudBackupPage;
