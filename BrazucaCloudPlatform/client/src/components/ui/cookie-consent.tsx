import { useState, useEffect } from 'react';
import { Button } from './button';
import { Card } from './card';
import { Link } from 'wouter';
import { useLanguage } from '@/hooks/useLanguage';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/20 backdrop-blur-sm">
      <Card className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <span className="text-black">Utilizamos cookies para melhorar sua experiência em nosso site. Para saber mais, acesse nossa</span>{' '}
            <Link 
              href="/politica-de-cookies"
              className="text-[#0a1f44] hover:underline font-medium"
            >
              Política de Cookies
            </Link>.
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={declineCookies}
              className="whitespace-nowrap text-sm"
            >
              Recusar
            </Button>
            <Button
              onClick={acceptCookies}
              className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 font-bold shadow-lg transform hover:scale-105 transition-transform"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}