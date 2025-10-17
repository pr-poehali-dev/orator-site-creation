import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              🍪 Мы используем cookies
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Этот сайт использует файлы cookie для улучшения работы и повышения удобства пользования. 
              Продолжая использовать сайт, вы соглашаетесь с{' '}
              <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                политикой конфиденциальности
              </a>
              {' '}и обработкой ваших персональных данных.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Только необходимые
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 text-sm font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
            >
              Принять все
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
