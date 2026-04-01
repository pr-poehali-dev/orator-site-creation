import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ApplicationModal from '@/components/ApplicationModal';

const EMDRSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const emdrCards = [
    {
      icon: 'FlaskConical',
      label: 'Что такое EMDR?',
      text: 'Метод ДПДГ — научно доказанная техника психотерапии. Не гипноз, не беседа. Признан ВОЗ как эффективный метод работы с психологической травмой.',
      color: 'from-violet-500 to-indigo-600',
      bg: 'bg-violet-50 border-violet-200'
    },
    {
      icon: 'Brain',
      label: 'Как работает?',
      text: 'Активирует те же процессы, что в REM-фазе сна — когда мозг сам перерабатывает негативный опыт. Страх теряет эмоциональный заряд.',
      color: 'from-indigo-500 to-purple-600',
      bg: 'bg-indigo-50 border-indigo-200'
    },
    {
      icon: 'Eye',
      label: 'Как выглядит сессия?',
      text: 'Двойной фокус внимания: на тревожащем воспоминании + внешний стимул. Так снижается чувствительность к травматическому опыту.',
      color: 'from-purple-500 to-pink-600',
      bg: 'bg-purple-50 border-purple-200'
    }
  ];

  const fears = [
    'Страх публичных выступлений',
    'Негативный прошлый опыт (провал на выступлении, насмешки, критика)',
    'Ступор, паника, «выбивание» на сцене'
  ];

  return (
    <section ref={sectionRef} id="emdr" className="py-16 px-4 bg-gradient-to-b from-slate-50 to-violet-50/30 relative overflow-hidden">
      {/* Декоративный фон */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-violet-200/20 to-indigo-200/20 rounded-full blur-3xl -top-40 -right-40" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-purple-200/15 to-violet-200/15 rounded-full blur-3xl -bottom-32 -left-32" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">

        {/* Заголовок */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Icon name="Sparkles" size={15} className="text-violet-600" />
            Уникальное преимущество курса
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Боишься выступать?{' '}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Есть научное решение
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            В отличие от других школ ораторства — здесь страх можно{' '}
            <strong className="text-violet-700">убрать</strong>, а не просто «перетерпеть»
          </p>
        </div>

        {/* Основной блок: текст + карточки */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-10">

          {/* Левая часть — текст */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-violet-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Icon name="Brain" size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-violet-600 font-semibold uppercase tracking-wide">Автор курса</p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Светлана Кузикова</h3>
                </div>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Светлана — не просто педагог, но и{' '}
                <strong className="text-violet-700">сертифицированный EMDR-терапевт</strong>.
                В рамках курса ты можешь индивидуально проработать:
              </p>
              <ul className="space-y-3">
                {fears.map((fear, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={14} className="text-white" />
                    </div>
                    <span className="text-lg text-gray-800 leading-snug">{fear}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Правая часть — 3 карточки метода */}
          <div className={`flex flex-col gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {emdrCards.map((card, i) => (
              <div
                key={i}
                className={`rounded-xl p-5 border ${card.bg} transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow`}>
                    <Icon name={card.icon as 'Brain'} size={22} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{card.label}</h4>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Дисклеймер + CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm text-gray-400 mb-6 max-w-xl mx-auto">
            Проработка страха — по желанию участника, в рамках индивидуального занятия, входящего в стоимость курса
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white text-base md:text-lg px-8 py-6 shadow-xl hover:shadow-violet-200 transition-all duration-300 hover:-translate-y-1"
            onClick={() => setModalOpen(true)}
          >
            <Icon name="Sparkles" size={20} className="mr-2" />
            Записаться на курс
          </Button>
        </div>
      </div>

      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        courseName="Записаться на курс (EMDR)"
        courseDate="Выбрать удобную дату"
      />
    </section>
  );
};

export default EMDRSection;
