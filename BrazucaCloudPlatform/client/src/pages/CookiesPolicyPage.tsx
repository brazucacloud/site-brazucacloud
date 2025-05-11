
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const CookiesPolicyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white text-center mb-6">
              Política de Cookies
            </h1>
            <p className="text-gray-100 text-center max-w-2xl mx-auto">
              Entenda como utilizamos cookies para melhorar sua experiência em nosso site.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8">
              <div className="space-y-8">
                {/* O que são Cookies */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-dark-blue">1. O que são Cookies</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel 
                    quando você visita nosso site. Eles são amplamente utilizados para fazer os sites funcionarem de 
                    maneira mais eficiente e fornecer informações aos proprietários do site.
                  </p>
                </div>

                {/* Como Usamos os Cookies */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-dark-blue">2. Como Usamos os Cookies</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Utilizamos cookies para melhorar sua experiência de navegação, entender como você utiliza nosso site
                    e personalizar o conteúdo de acordo com seus interesses. Isso inclui cookies essenciais para o
                    funcionamento do site e cookies analíticos para melhorar nosso serviço.
                  </p>
                </div>

                {/* Tipos de Cookies */}
                <div className="bg-white p-6 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-dark-blue">3. Tipos de Cookies</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Utilizamos diferentes tipos de cookies em nosso site:
                    <br /><br />
                    • Cookies Essenciais: Necessários para o funcionamento básico do site
                    <br />
                    • Cookies de Desempenho: Ajudam a entender como os visitantes interagem com o site
                    <br />
                    • Cookies de Funcionalidade: Permitem que o site lembre de suas escolhas
                    <br />
                    • Cookies de Marketing: Usados para mostrar anúncios relevantes
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-dark-blue mb-4">Dúvidas sobre Cookies?</h3>
                  <p className="text-gray-600">
                    Se você tiver dúvidas sobre nossa política de cookies, entre em contato:
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

export default CookiesPolicyPage;
