import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const PrivacyPolicyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white text-center mb-6">
              Política de Privacidade
            </h1>
            <p className="text-gray-100 text-center max-w-2xl mx-auto">
              Nossa política de privacidade explica como coletamos, usamos e protegemos suas informações.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8">
              <div className="space-y-8">
                {/* Coleta de Dados */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-dark-blue">1. Coleta de Dados</h2>
                  </div>
                  <p className="text-black leading-relaxed">
                    Coletamos informações quando você se registra em nosso site, faz uma compra ou preenche um formulário. 
                    As informações incluem seu nome, e-mail, endereço e informações de contato.
                  </p>
                </div>

                {/* Uso das Informações */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-dark-blue">2. Uso das Informações</h2>
                  </div>
                  <p className="text-black leading-relaxed">
                    Utilizamos suas informações para personalizar sua experiência, melhorar nosso site,
                    processar transações e enviar emails periódicos.
                  </p>
                </div>

                {/* Proteção de Dados */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-dark-blue">3. Proteção de Dados</h2>
                  </div>
                  <p className="text-black leading-relaxed">
                    Implementamos medidas de segurança para manter a proteção de suas informações pessoais
                    quando você faz um pedido, insere, envia ou acessa suas informações.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-dark-blue mb-4">Dúvidas sobre Privacidade?</h3>
                  <p className="text-gray-600">
                    Se você tiver dúvidas sobre nossa política de privacidade, entre em contato:
                  </p>
                  <p className="text-secondary font-medium mt-2">
                    contato@brazucacloud.com.br
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;