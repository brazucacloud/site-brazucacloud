
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white text-center mb-6">
              Blog Brazuca Cloud
            </h1>
            <p className="text-gray-100 text-center max-w-2xl mx-auto">
              Fique por dentro das últimas novidades em cloud computing e tecnologia
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Placeholder for when there are no posts */}
              <Card className="p-8 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Conteúdo em Breve
                </h2>
                <p className="text-gray-600 mb-6">
                  Estamos preparando conteúdo relevante sobre cloud computing, 
                  infraestrutura e tecnologia para compartilhar com você.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://wa.me/551146734420" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80"
                  >
                    Entre em contato para sugerir temas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
