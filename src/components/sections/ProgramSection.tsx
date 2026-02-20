import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useEffect, useRef, useState } from 'react';

const ProgramSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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

  const program = [
    {
      title: 'Секреты ораторского искусства',
      icon: 'Lightbulb',
      items: [
        'Управляем страхом публичных выступлений, вырабатываем новый условный рефлекс "публичное выступление - это удовольствие"',
        'Узнаём крючки привлечения внимания публики и психотрюки переговоров',
        'Развиваем чувство уверенности и свободы',
        'Управляем эмоциями и стрессом',
        'Трансформируем ограничивающие убеждения по поводу своих ораторских способностей',
        'Работаем с профессиональным стилистом над имиджем оратора'
      ]
    },
    {
      title: 'Голос. Речь. Дикция',
      icon: 'Mic',
      items: [
        'Постановка голоса и дыхания',
        'Техники создания харизматичного и уверенного голоса',
        'Интонация, сила и подача голоса',
        'Учимся структурировать речь и говорить так, чтобы тебя слышали',
        'Повышаем словарный запас, избавляемся от слов-паразитов',
        'Изучаем законы устной речи',
        'Создаём голос эксперта'
      ]
    },
    {
      title: 'Импровизация и актёрское мастерство',
      icon: 'Sparkles',
      items: [
        'Спонтанность, выход из шаблонов мышления',
        'Развиваем словесную гибкость',
        'Учимся импровизировать',
        'Повышаем скорость креативного мышления, спонтанность и остроумие',
        'Практикуем умение действовать эффективно «здесь и сейчас»',
        'Выступаем с театральным монологом'
      ]
    }
  ];

  const results = [
    { icon: 'Users', text: 'Уверенно выступать перед любой аудиторией' },
    { icon: 'MessageCircle', text: 'Говорить чётко, внятно и выразительно' },
    { icon: 'Eye', text: 'Удерживать внимание слушателей' },
    { icon: 'Sparkles', text: 'Убеждать и вдохновлять людей' },
    { icon: 'Zap', text: 'Импровизировать и отвечать на вопросы' },
    { icon: 'Heart', text: 'Получать удовольствие от выступлений' }
  ];

  return (
    <section ref={sectionRef} id="program" className="py-10 px-3 md:px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[550px] h-[550px] bg-gradient-to-br from-secondary/8 to-orange/8 rounded-full blur-3xl top-0 left-0"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0)` }}
        />
        <div
          className="absolute w-[450px] h-[450px] bg-gradient-to-br from-primary/8 to-secondary/8 rounded-full blur-3xl bottom-0 right-0"
          style={{ transform: `translate3d(0, ${scrollY * -0.18}px, 0)` }}
        />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Программа ораторского курса</h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto px-4">
            Три основных блока для комплексного развития
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16">
          {program.map((block, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] border-2 hover:border-primary/50 bg-gradient-to-br from-white to-primary/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-3 md:pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={block.icon as any} size={24} className="text-white md:w-8 md:h-8" />
                </div>
                <CardTitle className="text-lg md:text-xl lg:text-2xl mb-3 md:mb-4">{block.title}</CardTitle>
              </CardHeader>
              <div className="px-4 md:px-6 pb-4 md:pb-6 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <CardDescription className="text-lg md:text-xl leading-relaxed">{item}</CardDescription>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className={`mt-10 md:mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-center">После курса вы сможете</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {results.map((result, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-3 md:gap-4 bg-white/70 p-3 md:p-4 rounded-xl hover:shadow-lg transition-all ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={result.icon as any} size={18} className="text-white md:w-5 md:h-5" />
                </div>
                <p className="text-lg md:text-xl font-medium mt-1 md:mt-1.5">{result.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;