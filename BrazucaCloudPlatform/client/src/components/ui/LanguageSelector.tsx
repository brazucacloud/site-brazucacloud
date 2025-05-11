import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: "pt-BR" | "en-US" | "es-ES") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={dropdownRef}>
      <Button
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-light-gray bg-white shadow-lg p-2 focus:outline-none"
        aria-label="Language selector"
        variant="ghost"
      >
        <Globe className="text-primary h-5 w-5" />
      </Button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 bg-white rounded-md shadow-lg py-2 min-w-[140px]">
          <button
            onClick={() => handleLanguageChange("pt-BR")}
            className="block w-full px-4 py-2 text-sm text-dark-blue hover:bg-light-gray flex items-center text-left"
          >
            <div className="w-5 h-5 rounded-full bg-green-500 mr-2 flex items-center justify-center text-xs">BR</div>
            {t("languages.portuguese")}
          </button>
          <button
            onClick={() => handleLanguageChange("en-US")}
            className="block w-full px-4 py-2 text-sm text-dark-blue hover:bg-light-gray flex items-center text-left"
          >
            <div className="w-5 h-5 rounded-full bg-blue-500 mr-2 flex items-center justify-center text-xs">EN</div>
            {t("languages.english")}
          </button>
          <button
            onClick={() => handleLanguageChange("es-ES")}
            className="block w-full px-4 py-2 text-sm text-dark-blue hover:bg-light-gray flex items-center text-left"
          >
            <div className="w-5 h-5 rounded-full bg-red-500 mr-2 flex items-center justify-center text-xs">ES</div>
            {t("languages.spanish")}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
