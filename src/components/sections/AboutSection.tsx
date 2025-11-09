import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';
import ApplicationModal from '@/components/ApplicationModal';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

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

  const uniqueApproach = [
    {
      title: 'Гарантия результата',
      description: 'Методики театральной педагогики от профессионального психолога',
      icon: 'Award'
    },
    {
      title: 'Психологическая глубина',
      description: 'Работа с внутренними блоками и страхами от дипломированного психолога',
      icon: 'Brain'
    },
    {
      title: 'Комфортная атмосфера',
      description: 'Осваиваем навык с усилием, но без насилия в кругу единомышленников',
      icon: 'Heart'
    },
    {
      title: 'Личный прогресс',
      description: '4 индивидуальных занятия для проработки именно ваших особенностей',
      icon: 'UserCheck'
    }
  ];

  const courseIncludes = [
    {
      title: 'Групповые тренинги',
      description: '8 или 16 занятий (базовый или расширенный курс)',
      icon: 'Users',
      type: 'main'
    },
    {
      title: 'Индивидуальные занятия',
      description: '4 персональных сессии с преподавателем',
      icon: 'UserCheck',
      type: 'main'
    },
    {
      title: 'Имидж оратора',
      description: 'Мастер-класс от профессионального стилиста',
      icon: 'Sparkles',
      type: 'masterclass'
    },
    {
      title: 'Работа с убеждениями',
      description: 'Мастер-класс по проработке ограничивающих убеждений',
      icon: 'Lock',
      type: 'masterclass'
    },
    {
      title: 'Видеокурс',
      description: '🎁 «Речевая креативность» + книга-тренинг с упражнениями',
      icon: 'Gift',
      type: 'bonus'
    },
    {
      title: 'Антистресс техники',
      description: '🎁 Запись вебинара с техниками снятия страха перед публикой',
      icon: 'Heart',
      type: 'bonus'
    },
    {
      title: 'Импровизация',
      description: '🎁 Два тренинга «Джем» по импровизации',
      icon: 'Zap',
      type: 'bonus'
    },
    {
      title: 'Выпускной',
      description: '🎓 Финальное выступление при реальных зрителях + Сертификат',
      icon: 'Award',
      type: 'final'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-14 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -top-48 -right-48"
          style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
        />
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-to-br from-orange/5 to-primary/5 rounded-full blur-3xl -bottom-48 -left-48"
          style={{ transform: `translate3d(0, ${scrollY * -0.15}px, 0)` }}
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Уникальность подхода</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg max-w-3xl mx-auto px-4">
            Курс ведёт <span className="font-bold text-primary">Светлана Алексеевна Кузикова</span> — театральный режиссёр и профессиональный психолог
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
          {uniqueApproach.map((item, index) => (
            <Card 
              key={index} 
              className={`group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border-2 hover:border-primary/50 bg-gradient-to-br from-white to-secondary/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={item.icon as any} size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Что входит в курс</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseIncludes.map((item, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.type === 'main' ? 'bg-gradient-to-br from-primary to-secondary' :
                    item.type === 'masterclass' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                    item.type === 'bonus' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                    'bg-gradient-to-br from-yellow-500 to-orange-500'
                  }`}>
                    <Icon name={item.icon as any} size={30} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
              onClick={() => setModalOpen(true)}
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Записаться на пробное бесплатно
            </Button>
          </div>
        </div>

        <ApplicationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          courseName="Пробное занятие (бесплатно)"
          courseDate="Выбрать удобную дату"
        />
      </div>
    </section>
  );
};

export default AboutSection;