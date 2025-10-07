import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/ecc5e6e8-0ee3-4150-821f-c092246ec57f.png" 
              alt="KUZIKOVA SCHOOL Logo" 
              className="h-16 w-16 object-contain"
            />
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KUZIKOVA SCHOOL
              </h3>
              <p className="text-sm text-gray-400">Ораторское искусство «Своя игра»</p>
            </div>
          </div>
          <p className="text-gray-400 mb-6">Уникальный курс в Краснодаре</p>
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="https://t.me/svetlana_kuzikova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Telegram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/79183111712" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a 
              href="https://vk.com/svetlana_kuzikova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="VKontakte"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.9 11.54c-.24.71-.72 1.19-1.43 1.43-1.45.39-7.29.39-7.29.39s-5.84 0-7.29-.39c-.71-.24-1.19-.72-1.43-1.43C1 12.09 1 12 1 12s0-.09.04-.54c.24-.71.72-1.19 1.43-1.43C3.92 9.64 9.76 9.64 9.76 9.64s5.84 0 7.29.39c.71.24 1.19.72 1.43 1.43.04.45.04.54.04.54s0 .09-.04.54z"/>
                <path d="M12.5 15.5v-7l6 3.5z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com/@kuzikova_school?si=R44ul5a4I0twihLm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Icon name="Youtube" size={24} />
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
            <p className="text-gray-500 text-sm">© 2018 Светлана Кузикова. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;