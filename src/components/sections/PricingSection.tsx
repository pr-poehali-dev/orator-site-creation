import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';
import { useEffect, useRef, useState } from 'react';
import ApplicationModal from '@/components/ApplicationModal';

const PricingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({ name: '', subtitle: '' });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const packages = [
    {
      name: 'Ораторский курс с нуля',
      tariff: 'Тариф 1',
      groups: [
        {
          label: 'Дневная группа · пн/ср · 14:00–16:00',
          dates: ['13 июля — 05 августа', '03 августа — 29 августа'],
          color: 'blue'
        },
        {
          label: 'Вечерняя группа · пн/ср · 19:00–21:00',
          dates: ['03 августа — 29 августа'],
          color: 'purple'
        }
      ],
      price: '22 500',
      oldPrice: '24 000',
      features: [
        '8 групповых занятий и 1 индивидуальное',
        'Самопрезентация',
        'Управление страхом публичных выступлений',
        'Поза, жесты, поведение на сцене',
        'Речь, голос, дикция',
        'Структура речи, крючки внимания',
        'Ответы на неудобные вопросы',
        'Импровизация в речи',
        'Актёрские практики для раскрепощения оратора'
      ]
    },
    {
      name: 'Импровизация. Сторителлинг',
      tariff: 'Тариф 2',
      isPopular: true,
      groups: [
        {
          label: 'Дневная группа · пн/ср · 14:00–16:00',
          dates: ['13 июля — 05 августа', '03 августа — 29 августа'],
          color: 'blue'
        },
        {
          label: 'Вечерняя группа · пн/ср · 19:00–21:00',
          dates: ['03 августа — 29 августа'],
          color: 'purple'
        }
      ],
      price: '34 500',
      oldPrice: '39 000',
      features: [
        'Всё, что входит в первый тариф',
        'Дополнительно 2 групповых и 2 индивидуальных занятия',
        'Сторителлинг — умение рассказывать и продавать через истории',
        'Развитие речевой креативности',
        'Психологическое сопровождение',
        'Финальное выступление с личным сторителлингом (мини-спектакль на основе реальных событий)'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-10 px-4 bg-gradient-to-br from-secondary/5 via-white to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -top-64 left-1/4"
          style={{ transform: `translate3d(0, ${scrollY * 0.22}px, 0)` }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-orange/10 to-primary/10 rounded-full blur-3xl -bottom-32 right-1/4"
          style={{ transform: `translate3d(0, ${scrollY * -0.16}px, 0)` }}
        />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Стоимость курса</h2>
          <p className="text-center text-muted-foreground mb-8 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto px-4">
            Выберите удобный для вас формат обучения
          </p>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-200 mb-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute -top-3 right-4 md:right-8 z-10 bg-gray-700 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
            ОФФЛАЙН
          </div>
          <div className="bg-gradient-to-r from-primary to-secondary rounded-t-2xl px-6 py-5 flex items-center gap-4 justify-center">
            <Icon name="GraduationCap" size={28} className="text-white flex-shrink-0" />
            <span className="text-2xl md:text-3xl font-bold text-white text-center">Курс ораторского искусства и импровизации</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 md:mb-12 rounded-b-2xl overflow-hidden shadow-xl border-2 border-t-0 border-primary/20">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`group relative transition-all duration-500 border-0 rounded-none shadow-none overflow-visible ${index === 0 ? 'md:border-r md:border-primary/20' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4 pt-8">
                {pkg.tariff && (
                  <div className={`inline-block mx-auto mb-3 px-5 py-1.5 rounded-full text-white text-lg font-bold uppercase tracking-widest ${pkg.isPopular ? 'bg-secondary' : 'bg-primary'}`}>
                    {pkg.tariff}
                  </div>
                )}
                <CardTitle className="mb-3 text-foreground">
                  <span className="block text-2xl md:text-3xl">{pkg.name}</span>
                </CardTitle>
                {pkg.groups && (
                  <div className="flex flex-col gap-3 mt-4">
                    {pkg.groups.map((g, gi) => (
                      <div
                        key={gi}
                        className={`px-4 py-4 rounded-xl text-left ${g.color === 'blue' ? 'bg-blue-50 border border-blue-200' : 'bg-purple-50 border border-purple-200'}`}
                      >
                        <p className={`text-xl font-bold mb-2 ${g.color === 'blue' ? 'text-blue-800' : 'text-purple-800'}`}>{g.label}</p>
                        <div className="flex flex-col gap-1">
                          {g.dates?.map((d, di) => (
                            <div key={di} className="flex items-center gap-2">
                              <Icon name="Calendar" size={16} className={g.color === 'blue' ? 'text-blue-500 flex-shrink-0' : 'text-purple-500 flex-shrink-0'} />
                              <span className={`text-lg font-semibold ${g.color === 'blue' ? 'text-blue-700' : 'text-purple-700'}`}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-5 md:mt-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className={`text-5xl md:text-6xl font-bold ${pkg.isPopular ? 'text-secondary' : 'text-primary'}`}>{pkg.price} ₽</span>
                    {pkg.oldPrice && <span className="text-2xl md:text-3xl text-muted-foreground line-through">{pkg.oldPrice} ₽</span>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name={idx === 0 && pkg.isPopular ? 'Star' : 'Check'} className={`flex-shrink-0 mt-1 ${idx === 0 && pkg.isPopular ? 'text-secondary' : 'text-primary'}`} size={22} />
                      <span className={`text-xl leading-relaxed ${idx === 0 && pkg.isPopular ? 'font-semibold text-foreground' : ''}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-7 text-xl bg-gradient-to-r hover:opacity-90 ${pkg.isPopular ? 'from-secondary to-primary' : 'from-primary to-secondary'}`}
                  size="lg"
                  onClick={() => {
                    trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                    setSelectedPackage({ 
                      name: pkg.name,
                      subtitle: ''
                    });
                    setModalOpen(true);
                  }}
                >
                  <Icon name="Sparkles" size={22} className="mr-2" />
                  Записаться на курс
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`max-w-md mx-auto mb-8 md:mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="relative overflow-visible border-2 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="absolute -top-3 right-4 z-10 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
              АКЦИЯ ТРИ ДНЯ
            </div>
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg pb-4 md:pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">
                Курс ораторского искусства "РЕЧЕВАЯ КРЕАТИВНОСТЬ" (онлайн)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 md:pt-6 space-y-4">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Для тех, кто хочет научиться быстро находить слова в любой ситуации. Будет полезно тем, кому сложно спонтанно выступать на публике, у кого страх блокирует словесный поток, кому не хватает смелости выступать без подготовки.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-lg">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  Обратная связь в чате курса лично от педагога
                </li>
                <li className="flex items-start gap-2 text-lg">
                  <Icon name="Check" size={20} className="text-primary mt-1 flex-shrink-0" />
                  Доступ — навсегда
                </li>
              </ul>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground line-through text-xl">2450 руб.</span>
                <span className="text-4xl font-bold text-primary">990 руб.</span>
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 text-xl py-7"
                asChild
              >
                <a href="https://kuzikova.robo.market/pro100reche" target="_blank" rel="noopener noreferrer">
                  <Icon name="Zap" size={22} className="mr-2" />
                  Начать сейчас
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className={`mt-6 md:mt-8 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-300 rounded-2xl px-6 py-4 md:py-6 shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 justify-center">
                <Icon name="Percent" size={28} className="text-orange-600 flex-shrink-0" />
                <p className="text-lg md:text-xl font-bold text-orange-900">
                  Выпускникам курсов Школы «Kuzikova school» — скидка 10%
                </p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-base md:text-lg px-6 py-5 md:py-6"
                onClick={() => {
                  trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                  setSelectedPackage({
                    name: 'Полный курс (1 и 2 ступень со скидкой 10%)',
                    subtitle: 'Обе ступени со скидкой'
                  });
                  setModalOpen(true);
                }}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Записаться
              </Button>
            </div>
          </div>
        </div>

        <ApplicationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          courseName={selectedPackage.name}
          courseDate="Выбрать удобную дату"
        />
      </div>
    </section>
  );
};

export default PricingSection;