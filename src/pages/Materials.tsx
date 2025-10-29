import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ScrollToTop from '@/components/ui/scroll-to-top';
import GuideModal from '@/components/materials/GuideModal';

const Materials = () => {
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#download-guide') {
        setIsGuideModalOpen(true);
      }
    };
    
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);
  const materials = [
    {
      id: 1,
      title: 'Книга-тренинг «Публичные выступления: 7 шагов к успеху»',
      image: 'https://cdn.poehali.dev/files/c851bfe2-7e13-411b-a297-8be6ca26b397.png',
      description: 'Практическое руководство для тех, кто хочет научиться выступать уверенно и убедительно перед любой аудиторией.',
      price: 'от 299 ₽',
      features: [
        'Электронная книга (PDF, EPUB, FB2)',
        '7 пошаговых уроков',
        'Практические упражнения',
        'Техники работы со страхом',
        'Готовые речевые шаблоны',
        'Чек-листы для подготовки'
      ],
      links: [
        { label: 'Читать на ЛитРес', url: 'https://www.litres.ru/71829709/', icon: 'BookOpen', variant: 'default' },
        { label: 'Купить на Робомаркет', url: 'http://kuzikova.robo.market/buy/133928/', icon: 'ShoppingCart', variant: 'outline' }
      ],
      bonus: 'В подарок участникам курса',
      badge: 'Бестселлер'
    },
    {
      id: 2,
      title: 'Книга-тренинг «Речевая креативность»',
      image: 'https://cdn.poehali.dev/files/9209eed7-dd98-462d-895f-1707e50dc481.png',
      description: 'Говори красиво! Выступай легко! Импровизируй! Развитие вербального интеллекта и творческого мышления в речи.',
      price: '300 ₽',
      oldPrice: '450 ₽',
      features: [
        'Электронная книга (PDF)',
        'Упражнения на импровизацию',
        'Развитие креативного мышления',
        'Техники словесной игры',
        'Задания для самостоятельной работы',
        'Методики от театрального режиссёра'
      ],
      links: [
        { label: 'Купить на Робомаркет', url: 'http://kuzikova.robo.market/buy/133929/', icon: 'ShoppingCart', variant: 'default' }
      ],
      bonus: 'В подарок участникам курса',
      badge: 'Скидка 33%'
    },
    {
      id: 3,
      title: 'Видеокурс «Речевая креативность за 7 дней»',
      image: 'https://cdn.poehali.dev/files/1e1c8073-4bbb-4d7a-9c51-c40fe25e52c2.png',
      description: 'Интенсивный мини-курс для развития навыков креативного мышления и спонтанной речи за одну неделю.',
      price: '2 450 ₽',
      oldPrice: '4 900 ₽',
      features: [
        '7 видеоуроков',
        'Ежедневные практические задания',
        'Техники импровизации',
        'Методики развития словарного запаса',
        'Поддержка тренера в чате',
        'Доступ навсегда'
      ],
      links: [
        { label: 'Купить видеокурс', url: 'https://kuzikova.robo.market/pro100reche', icon: 'Play', variant: 'default' }
      ],
      bonus: 'В подарок участникам курса',
      badge: 'Скидка 50%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <section className="pt-28 pb-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5 animate-in fade-in duration-700">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Магазин
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Книги и видеокурсы от Светланы Кузиковой для самостоятельного развития навыков публичных выступлений
            </p>
            
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2 px-6 py-3 bg-green-50 border-2 border-green-200 rounded-full">
                <Icon name="Gift" size={20} className="text-green-600" />
                <span className="font-semibold text-green-700">Подарок участникам курса</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 border-2 border-primary/30 rounded-full">
                <Icon name="ShoppingCart" size={20} className="text-primary" />
                <span className="font-semibold text-primary">Покупка онлайн</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {materials.map((material, index) => (
              <Card 
                key={material.id} 
                className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`grid md:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    {material.badge && (
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                        {material.badge}
                      </div>
                    )}
                    <img 
                      src={material.image} 
                      alt={material.title}
                      className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    {material.bonus && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg">
                        <div className="flex items-center gap-2 text-green-700 font-medium">
                          <Icon name="Gift" size={18} />
                          <span>{material.bonus}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{material.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">{material.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3 text-lg">Что внутри:</h3>
                      <ul className="space-y-2">
                        {material.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <div className="mb-4">
                        {material.oldPrice && (
                          <div className="text-lg text-gray-400 line-through mb-1">{material.oldPrice}</div>
                        )}
                        <div className="text-3xl font-bold text-primary">{material.price}</div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {material.links.map((link, idx) => {
                          if ((link as any).isModal) {
                            return (
                              <Button
                                key={idx}
                                onClick={() => setIsGuideModalOpen(true)}
                                className="flex-1"
                                variant={link.variant as any}
                                size="lg"
                              >
                                <Icon name={link.icon} size={18} className="mr-2" />
                                {link.label}
                              </Button>
                            );
                          }
                          return (
                            <a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button 
                                className="w-full"
                                variant={link.variant as any}
                                size="lg"
                              >
                                <Icon name={link.icon} size={18} className="mr-2" />
                                {link.label}
                              </Button>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Хотите получить все материалы бесплатно?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                При записи на основной курс «Своя игра» все книги и видеокурс входят в стоимость обучения
              </p>
              <a href="/#pricing">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Записаться на курс
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <GuideModal isOpen={isGuideModalOpen} onClose={() => setIsGuideModalOpen(false)} />
    </div>
  );
};

export default Materials;