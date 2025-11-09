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
      name: 'Базовый',
      subtitle: 'Ораторское мастерство с нуля',
      duration: '8 занятий',
      price: '17 500',
      oldPrice: '19 900',
      features: [
        '8 групповых тренингов',
        '1 индивидуальное занятие',
        'Мастер-класс по работе с убеждениями',
        'Видеокурс «Речевая креативность» + книга',
        'Запись вебинара с техниками снятия страха публичных выступлений',
        '1 тренинг «Джем» по импровизации',
        'Выпускной + Сертификат'
      ],
      popular: false
    },
    {
      name: 'Полный курс',
      subtitle: 'Ораторский курс "Своя игра"',
      duration: '16 занятий',
      price: '39 000',
      oldPrice: '45 000',
      features: [
        '16 групповых тренингов',
        '2 индивидуальных занятия',
        'Мастер-класс по имиджу оратора',
        'Мастер-класс по работе с убеждениями',
        'Видеокурс «Речевая креативность» + книга',
        'Запись вебинара с техниками снятия страха публичных выступлений',
        '2 тренинга «Джем» по импровизации',
        'Выпускной + Сертификат',
        'Больше времени на отработку навыков',
        'Углубленная работа над речью'
      ],
      popular: true
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-14 px-4 bg-gradient-to-br from-secondary/5 via-white to-primary/5 relative overflow-hidden">
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
                  <span className="text-white font-bold text-xs sm:text-sm">🔥 ПОПУЛЯРНЫЙ</span>
                </div>
              )}
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-2xl md:text-3xl mb-2">{pkg.name}</CardTitle>
                {pkg.subtitle && <p className="text-lg md:text-xl font-semibold text-primary mb-2">{pkg.subtitle}</p>}
                <CardDescription className="text-lg md:text-xl">{pkg.duration}</CardDescription>
                <div className="mt-4 md:mt-6">
                  <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground line-through">{pkg.oldPrice}</span>
                  </div>
                  <p className="text-base text-muted-foreground">Возможна оплата в 2 этапа</p>
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

        <div className={`bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Есть вопросы по программе?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом, мы с радостью ответим на все ваши вопросы
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90"
            >
              <a 
                href="https://wa.me/message/FKFHPRMEDBRYP1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
                onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-2"
            >
              <a 
                href="tel:+79183111712"
                className="inline-flex items-center"
                onClick={() => trackGoal(GOALS.PHONE_CLICK)}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;