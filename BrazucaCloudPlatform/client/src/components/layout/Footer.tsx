import { useLanguage } from "@/hooks/useLanguage";
import { scrollToSection } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-brazuca-cloud.png";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail,
  Send
} from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  const { t } = useLanguage();

  const handleNavigation = (section: string) => {
    scrollToSection(section);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logoImage} alt="Brazuca Cloud Logo" className="h-10" />
            </div>
            <p className="text-gray-300 mb-6">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/profile.php?id=100080580866006" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/brazuca_cloud" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/brazuca-cloud/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/brazucacloud" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-inter">{t("footer.services.title")}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/nuvem-privada" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.services.privateCloud")}
                </a>
              </li>
              <li>
                <a 
                  href="/cloud-center" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.services.cloudCenter")}
                </a>
              </li>
              <li>
                <a 
                  href="/datacenter-virtual" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.services.virtualDatacenter")}
                </a>
              </li>
              <li>
                <a 
                  href="/cloud-server" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.services.cloudServer")}
                </a>
              </li>
              <li>
                <Link
                  href="/backup-em-nuvem"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.services.cloudBackup")}
                </Link>
              </li>
              <li>
                <Link
                  href="/consultoria-em-cloud"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.services.cloudConsulting")}
                </Link>
              </li>
              <li>
                <Link
                  href="/telefonia-ip"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Telefonia IP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-inter">{t("footer.usefulLinks.title")}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => handleNavigation("#about")}
                >
                  {t("footer.usefulLinks.aboutUs")}
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => handleNavigation("#pricing")}
                >
                  {t("footer.usefulLinks.pricing")}
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.usefulLinks.blog")}
                </a>
              </li>
              <li>
                <Link
                  href="/client-area"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.usefulLinks.clientArea")}
                </Link>
              </li>
              <li>
                <a 
                  href="/termos-de-servico" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.usefulLinks.terms")}
                </a>
              </li>
              <li>
                <a 
                  href="/politica-de-privacidade" 
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {t("footer.usefulLinks.privacy")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 font-inter">{t("footer.contact.title")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-secondary h-5 w-5" />
                <span className="text-gray-300">Avenida Santa Cruz, 2187, Vila Madalena, São Paulo-SP</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-secondary h-5 w-5" />
                <a href="https://wa.me/551146734420" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  (11) 4673-4420
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-secondary h-5 w-5" />
                <span className="text-gray-300">contato@brazucacloud.com.br</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold mb-2">{t("footer.newsletter.title")}</h4>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <Input 
                  type="email" 
                  placeholder={t("footer.newsletter.placeholder")}
                  className="rounded-r-none focus:ring-2 focus:ring-secondary text-dark-blue"
                />
                <Button type="submit" className="bg-secondary hover:bg-blue-500 text-white px-4 rounded-l-none transition-colors duration-300">
                  <Send size={16} />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Brazuca Cloud. {t("footer.copyright")}
            </p>
            <div className="flex space-x-6">
              <a 
                href="/termos-de-servico" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                {t("footer.bottom.terms")}
              </a>
              <li>
                <a 
                  href="/politica-de-privacidade" 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {t("footer.bottom.privacy")}
                </a>
              </li>
              <a 
                href="/politica-de-cookies" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                {t("footer.bottom.cookies")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;