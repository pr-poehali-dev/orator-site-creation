import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
      name: 'Ораторское мастерство с нуля',
      subtitle: 'базовый курс',
      duration: '10 занятий, 20 часов практики',
      price: '19 500',
      oldPrice: '22 500',
      features: [
        '8 групповых тренингов',
        '1 индивидуальное занятие',
        '1 тренинг «Джем» по импровизации',
        'Мастер-класс по работе с убеждениями',
        'Мастер-класс «Психология влияния: психотипы аудитории, психотрюки для переговоров»',
        'Видеокурс «Речевая креативность» + книга',
        'Запись вебинара с техниками снятия страха публичных выступлений',
        'Выпускной + Сертификат'
      ],
      popular: false
    },
    {
      name: 'Полный ораторский курс "Своя игра"',
      subtitle: '',
      duration: '20 занятий, 40 часов практики',
      startDate: 'Старт: 02 марта (дневная группа)',
      startDate2: 'Старт: 20 апреля (вечерняя группа)',
      price: '42 000',
      oldPrice: '49 000',
      priceNote: 'При бронировании до 15 февраля',
      features: [
        '16 групповых тренингов',
        '2 индивидуальных занятия',
        '2 тренинга «Джем» по импровизации',
        'Мастер-класс со стилистом по имиджу оратора',
        'Мастер-класс с профессиональным психологом по работе с ограничивающими убеждениями',
        'Мастер-класс «Психология влияния: психотипы аудитории, психотрюки для переговоров»',
        'Видеокурс «Речевая креативность» + книга',
        'Запись вебинара с техниками снятия страха публичных выступлений',
        'Выпускной при реальных зрителях с ораторской речью и театральным монологом',
        'Профессиональная фотосессия',
        'Больше времени на отработку навыков',
        'Углубленная работа над речью'
      ],
      popular: true
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
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg max-w-2xl mx-auto px-4">
            Выберите удобный для вас формат обучения
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`group relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${
                pkg.popular ? 'border-primary border-2 shadow-xl lg:scale-105 hover:scale-[1.08]' : 'hover:scale-[1.02]'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full whitespace-nowrap z-10">
                  <span className="text-white font-bold text-xs sm:text-sm">⭐ VIP-ФОРМАТ</span>
                </div>
              )}
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-2xl md:text-3xl mb-2 text-foreground">{pkg.name}</CardTitle>
                {pkg.subtitle && <p className="text-base md:text-lg text-muted-foreground mb-2">{pkg.subtitle}</p>}
                <CardDescription className="text-lg md:text-xl">{pkg.duration}</CardDescription>
                {(pkg.startDate || pkg.startDate2) && (
                  <div className="flex flex-col gap-2 mt-3">
                    {pkg.startDate && (
                      <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
                        <span className="text-sm font-semibold text-blue-700">{pkg.startDate}</span>
                      </div>
                    )}
                    {pkg.startDate2 && (
                      <div className="inline-block px-4 py-2 bg-purple-50 rounded-full">
                        <span className="text-sm font-semibold text-purple-700">{pkg.startDate2}</span>
                      </div>
                    )}
                  </div>
                )}
                <div className="mt-4 md:mt-6">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground line-through">{pkg.oldPrice}</span>
                  </div>
                  {pkg.priceNote ? (
                    <>
                      <p className="text-base font-semibold text-orange">{pkg.priceNote}</p>
                      {pkg.popular && <p className="text-sm text-muted-foreground mt-1">Возможна оплата в 2 этапа</p>}
                    </>
                  ) : pkg.popular ? (
                    <p className="text-base text-muted-foreground">Возможна оплата в 2 этапа</p>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={22} />
                      <span className="text-base md:text-lg leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-5 md:py-6 text-base md:text-lg ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                  onClick={() => {
                    trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                    setSelectedPackage({ name: pkg.subtitle, subtitle: pkg.name });
                    setModalOpen(true);
                  }}
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Записаться на курс
                </Button>
              </CardContent>
            </Card>
          ))}
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