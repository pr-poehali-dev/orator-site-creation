import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Mic2" size={28} className="text-primary" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ораторское искусство «Своя игра»
            </h3>
          </div>
          <p className="text-gray-400 mb-6">Уникальный курс в Краснодаре</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h4 className="text-lg font-bold mb-4 text-primary">Реквизиты</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="font-semibold text-white">ИП Кузикова Светлана Алексеевна</p>
                <p>ИНН: 260103234389</p>
                <p>ОГРН: 318237500160591</p>
                <p className="flex items-start gap-2">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>г. Краснодар, улица Горького, 104, офис 26</span>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <a href="tel:+79183111712" className="hover:text-primary transition-colors">+7 918 311 17 12</a>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <a href="mailto:s_kuzikova@mail.ru" className="hover:text-primary transition-colors">s_kuzikova@mail.ru</a>
                </p>
              </div>
            </div>

            <div className="text-left">
              <h4 className="text-lg font-bold mb-4 text-primary">Документы</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>
                  <a 
                    href="https://disk.yandex.ru/i/uYn3_o7baO2GSw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Icon name="FileText" size={16} />
                    Политика конфиденциальности
                  </a>
                </p>
                <p>
                  <a 
                    href="https://disk.yandex.ru/i/-bYRWaWj_7bgCg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Icon name="FileText" size={16} />
                    Публичная оферта
                  </a>
                </p>
                <p>
                  <a 
                    href="https://disk.yandex.ru/i/OaR47K7F_Z_l_A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <Icon name="FileText" size={16} />
                    Согласие на обработку персональных данных
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">© 2024 Светлана Кузикова. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;