import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { trackGoal, GOALS } from '@/utils/goals';
import { useEffect, useState } from 'react';

const ContactSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<{course: string, date: string} | null>(null);

  useEffect(() => {
    const section = document.getElementById('contact');
    const observer = new MutationObserver(() => {
      const course = section?.getAttribute('data-course');
      const date = section?.getAttribute('data-date');
      if (course && date) {
        setSelectedCourse({ course, date });
      }
    });

    if (section) {
      observer.observe(section, { attributes: true, attributeFilter: ['data-course', 'data-date'] });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-14 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
        <p className="text-center text-muted-foreground mb-4 text-lg">
          Свяжитесь с нами удобным для вас способом
        </p>
        {selectedCourse && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg">
                <Icon name="Check" size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Вы выбрали курс:</h3>
                <p className="text-base font-semibold text-primary mb-1">{selectedCourse.course}</p>
                <p className="text-sm text-muted-foreground">Дата старта: <span className="font-semibold">{selectedCourse.date}</span></p>
                <p className="text-sm text-muted-foreground mt-2">Свяжитесь с нами любым удобным способом ниже, чтобы завершить запись</p>
              </div>
            </div>
          </div>
        )}
        <p className="text-center text-muted-foreground mb-12 text-base">
          {selectedCourse ? 'Выберите удобный способ связи:' : 'Или свяжитесь с нами для консультации'}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.9 11.54c-.24.71-.72 1.19-1.43 1.43-1.45.39-7.29.39-7.29.39s-5.84 0-7.29-.39c-.71-.24-1.19-.72-1.43-1.43C1 12.09 1 12 1 12s0-.09.04-.54c.24-.71.72-1.19 1.43-1.43C3.92 9.64 9.76 9.64 9.76 9.64s5.84 0 7.29.39c.71.24 1.19.72 1.43 1.43.04.45.04.54.04.54s0 .09-.04.54z"/>
                    <path d="M12.5 15.5v-7l6 3.5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-sm sm:text-base mb-1">VKontakte</h3>
              <a 
                href="https://vk.com/svetlana_kuzikova" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:underline text-sm"
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
              <h3 className="font-semibold text-sm sm:text-base mb-1">Адрес</h3>
              <p className="text-muted-foreground text-sm">Краснодар,<br />Горького, 104</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-0.5">
            <CardContent className="pt-4 pb-4 text-center">
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Icon name="Youtube" size={20} className="text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">Rutube</h3>
              <a 
                href="https://rutube.ru/channel/27062031/" 
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