
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white text-center mb-6">
              Termos de Serviço
            </h1>
            <p className="text-gray-100 text-center max-w-2xl mx-auto">
              Bem-vindo aos Termos de Serviço da Brazuca Cloud. Por favor, leia atentamente os termos abaixo.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="p-8 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <div className="mb-12">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Ao usar nossos serviços, você concorda com estes termos. Por favor, leia-os cuidadosamente.
                  </p>
                </div>
                
                {/* Sections */}
                <div className="space-y-12">
                  {/* Services Section */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                      <h2 className="text-2xl font-semibold text-dark-blue">1. Serviços</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      A Brazuca Cloud fornece serviços de cloud computing, incluindo mas não limitado a servidores virtuais, 
                      armazenamento e processamento em nuvem. Nossa infraestrutura é projetada para oferecer alto desempenho 
                      e confiabilidade.
                    </p>
                  </div>

                  {/* Client Responsibilities Section */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                      <h2 className="text-2xl font-semibold text-dark-blue">2. Responsabilidades do Cliente</h2>
                    </div>
                    <p className="text-gray-600 mb-4">O cliente é responsável por:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Manter a segurança de suas credenciais de acesso</li>
                      <li>Usar os serviços de acordo com as leis aplicáveis</li>
                      <li>Pagar pelos serviços contratados nos prazos estabelecidos</li>
                      <li>Manter seus dados cadastrais atualizados</li>
                      <li>Reportar quaisquer problemas ou irregularidades</li>
                    </ul>
                  </div>

                  {/* Service Availability Section */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                      <h2 className="text-2xl font-semibold text-dark-blue">3. Disponibilidade do Serviço</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      A Brazuca Cloud se compromete a manter uma alta disponibilidade dos serviços, seguindo as 
                      melhores práticas do mercado. Nosso objetivo é garantir um uptime de 99.9%, conforme 
                      especificado em nosso SLA (Service Level Agreement).
                    </p>
                  </div>

                  {/* Privacy Policy Section */}
                  <div className="bg-white p-6 rounded-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <ChevronRight className="text-secondary w-5 h-5 mr-2" />
                      <h2 className="text-2xl font-semibold text-dark-blue">4. Política de Privacidade</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      O uso dos seus dados pessoais é regido por nossa Política de Privacidade. Comprometemo-nos 
                      a proteger suas informações e utilizá-las apenas para os fins especificados em nossa política.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold text-dark-blue mb-4">Precisa de ajuda?</h3>
                  <p className="text-gray-600">
                    Se você tiver dúvidas sobre nossos termos de serviço, entre em contato com nossa equipe de suporte:
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

export default TermsOfServicePage;
