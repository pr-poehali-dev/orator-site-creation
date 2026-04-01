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
      icon: 'Award',
      accent: false
    },
    {
      title: 'Психологическая глубина',
      description: 'Работа с внутренними блоками и страхами от дипломированного психолога',
      icon: 'Brain',
      accent: false
    },
    {
      title: 'Комфортная атмосфера',
      description: 'Осваиваем навык с усилием, но без насилия в безопасной обстановке',
      icon: 'Heart',
      accent: false
    },
    {
      title: 'Личный прогресс',
      description: 'Индивидуальные занятия с каждым для проработки именно ваших особенностей',
      icon: 'UserCheck',
      accent: false
    },
    {
      title: 'Работа со страхом выступлений',
      description: 'В курсе можно индивидуально проработать страх публичных выступлений методом EMDR-терапии — с сертифицированным EMDR-терапевтом Светланой Кузиковой. Научно доказанный метод.',
      icon: 'Sparkles',
      accent: true
    }
  ];

  const courseIncludes = [
    {
      title: 'Базовый и углублённый ораторский курс',
      description: '8 или 10 занятий + индивидуальные и дополнительные мастер-классы',
      icon: 'Users',
      type: 'main'
    },
    {
      title: 'Персональные сессии с преподавателем',
      description: '1-2 индивидуальных занятия для проработки ваших особенностей',
      icon: 'UserCheck',
      type: 'main'
    },
    {
      title: 'Имидж оратора',
      description: 'Мастер-класс от профессионального стилиста (в полном курсе)',
      icon: 'Sparkles',
      type: 'masterclass'
    },
    {
      title: 'Психология влияния',
      description: 'Мастер-класс «Психология влияния: психотипы аудитории, психотрюки для переговоров»',
      icon: 'Brain',
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
      description: '🎓 Финальное выступление при реальных зрителях: одно или два публичных выступления + Сертификат',
      icon: 'Award',
      type: 'final'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-10 px-4 bg-white relative overflow-hidden">
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
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4">
            Курс ведёт <span className="font-bold text-primary">Светлана Алексеевна Кузикова</span> — театральный режиссёр и профессиональный психолог
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-6 md:mb-8">
          {uniqueApproach.filter(item => !item.accent).map((item, index) => (
            <Card 
              key={index} 
              className={`group text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03] border-2 hover:border-primary/50 bg-gradient-to-br from-white to-secondary/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={item.icon as 'Award'} size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Акцентная карточка EMDR */}
        <div className={`max-w-6xl mx-auto mb-12 md:mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="group border-2 border-orange-400 bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 hover:shadow-[0_8px_40px_rgba(249,115,22,0.3)] hover:border-orange-500 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-orange-300/30 to-red-300/30 rounded-full blur-2xl -translate-y-10 translate-x-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-amber-200/25 to-orange-200/25 rounded-full blur-2xl translate-y-8 -translate-x-8 pointer-events-none" />
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-200">
                    <Icon name="Brain" size={32} className="text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-3 shadow-md shadow-orange-200">
                    <Icon name="Flame" size={14} className="text-white" />
                    Уникально — только у нас
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Работа со страхом выступлений</h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                    В рамках курса ты можешь индивидуально проработать страх публичных выступлений и негативный прошлый опыт методом <strong>EMDR-терапии</strong> — с автором курса, сертифицированным EMDR-терапевтом Светланой Кузиковой. Это не гипноз и не беседа — это научно доказанный метод.
                  </p>
                  <a
                    href="#emdr"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-red-700 transition-colors duration-200 text-base md:text-lg group/link"
                  >
                    Узнать подробнее
                    <Icon name="ArrowRight" size={18} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className={`bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Что входит в ораторский курс?</h3>
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
                    <Icon name={item.icon as 'Award'} size={30} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{item.description}</p>
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