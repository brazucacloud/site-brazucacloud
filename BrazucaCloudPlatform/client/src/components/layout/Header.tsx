import { useState } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { Link } from "wouter";
import logoImage from "@/assets/logo-brazuca-cloud.png";

import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (section: string) => {
    scrollToSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md flex items-center">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center -my-3">
            <Link href="/" className="flex items-center">
              <img src={logoImage} alt="Brazuca Cloud Logo" className="h-36" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/sobre"
              className="text-dark-blue hover:text-primary transition-colors duration-300 font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              {t("nav.about")}
            </Link>
            <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/nuvem-privada" className="text-dark-blue hover:text-primary transition-colors duration-300 font-medium">
              Nuvem Privada
            </a>
            <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/cloud-center" className="text-dark-blue hover:text-primary transition-colors duration-300 font-medium">
              Cloud Center
            </a>
            <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/datacenter-virtual" className="text-dark-blue hover:text-primary transition-colors duration-300 font-medium">
              Datacenter Virtual
            </a>
            <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/cloud-server" className="text-dark-blue hover:text-primary transition-colors duration-300 font-medium">
              Cloud Server
            </a>
          </nav>

          {/* Client Area Button */}
          <Button
            className="bg-primary hover:bg-primary-light text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm"
            onClick={() => setLocation("/client-area")}
          >
            {t("nav.clientArea")}
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-dark-blue focus:outline-none" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden mt-4 pb-4 ${mobileMenuOpen ? "block" : "hidden"}`}>
          <Link
            href="/sobre"
            className="block py-2 text-dark-blue hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.about")}
          </Link>
          <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/nuvem-privada" className="block py-2 text-dark-blue hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Nuvem Privada
          </a>
          <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/cloud-center" className="block py-2 text-dark-blue hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Cloud Center
          </a>
          <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/datacenter-virtual" className="block py-2 text-dark-blue hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Datacenter Virtual
          </a>
          <a href="https://f1e86904-e25c-44f6-9426-94260275a256-00-1pujf2y15c91l.janeway.replit.dev/cloud-server" className="block py-2 text-dark-blue hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
            Cloud Server
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;