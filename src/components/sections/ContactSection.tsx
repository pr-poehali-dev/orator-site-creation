import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { trackGoal, GOALS } from '@/utils/goals';

const ContactSection = () => {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Свяжитесь с нами удобным для вас способом
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Телефон</h3>
              <a 
                href="tel:+79183111712" 
                className="text-primary hover:underline text-xs"
                onClick={() => trackGoal(GOALS.PHONE_CLICK)}
              >
                +7 918 311-17-12
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Telegram</h3>
              <a 
                href="https://t.me/svetlana_kuzikova" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-xs"
              >
                Написать
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">WhatsApp</h3>
              <a 
                href="https://wa.me/79183111712" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-xs"
                onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}
              >
                Написать
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.9 11.54c-.24.71-.72 1.19-1.43 1.43-1.45.39-7.29.39-7.29.39s-5.84 0-7.29-.39c-.71-.24-1.19-.72-1.43-1.43C1 12.09 1 12 1 12s0-.09.04-.54c.24-.71.72-1.19 1.43-1.43C3.92 9.64 9.76 9.64 9.76 9.64s5.84 0 7.29.39c.71.24 1.19.72 1.43 1.43.04.45.04.54.04.54s0 .09-.04.54z"/>
                    <path d="M12.5 15.5v-7l6 3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">VKontakte</h3>
              <a 
                href="https://vk.com/svetlana_kuzikova" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-xs"
              >
                Страница
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name="MapPin" size={20} className="text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Адрес</h3>
              <p className="text-muted-foreground text-xs">Краснодар,<br />Горького, 104</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name="Youtube" size={20} className="text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">YouTube</h3>
              <a 
                href="https://youtube.com/@kuzikova_school?si=R44ul5a4I0twihLm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-xs"
              >
                Канал школы
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href="https://yandex.ru/profile/108893235678?intent=reviews" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <iframe 
              src="https://yandex.ru/sprav/widget/rating-badge/108893235678?type=rating" 
              width="150" 
              height="50" 
              frameBorder="0"
              title="Рейтинг на Яндекс"
              className="rounded-lg pointer-events-none"
            ></iframe>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;