import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const products = [
    {
      id: 1,
      title: 'Книга-тренинг «Публичные выступления: 7 шагов к успеху»',
      description: 'Электронная книга. Практическое руководство для уверенных выступлений',
      price: 'от 299 ₽',
      links: [
        { label: 'Читать на ЛитРес', url: 'https://www.litres.ru/71829709/', icon: 'BookOpen' },
        { label: 'Купить', url: 'http://kuzikova.robo.market/buy/133928/', icon: 'ShoppingCart' }
      ],
      badge: 'Бестселлер',
      icon: 'BookMarked'
    },
    {
      id: 2,
      title: 'Книга-тренинг «Речевая креативность»',
      description: 'Электронная книга. Развитие креативного мышления и импровизации',
      price: '300 ₽',
      oldPrice: '450 ₽',
      links: [
        { label: 'Купить', url: 'http://kuzikova.robo.market/buy/133929/', icon: 'ShoppingCart' }
      ],
      badge: 'Скидка 33%',
      icon: 'Lightbulb'
    },
    {
      id: 3,
      title: 'Курс «Речевая креативность за 7 дней»',
      description: 'Видеокурс для развития навыков креативного мышления и спонтанной речи',
      price: '2 450 ₽',
      oldPrice: '4 900 ₽',
      links: [
        { label: 'Купить курс', url: 'https://kuzikova.robo.market/pro100reche', icon: 'Play' }
      ],
      badge: 'Скидка 50%',
      icon: 'Video'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Материалы для самостоятельного обучения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Не готовы к полному курсу? Начните с наших книг и видеокурсов
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary">
            <Icon name="Gift" size={16} />
            <span className="font-medium">Участники курса получают бесплатно</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <Card key={product.id} className={`p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 relative group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
              {product.badge && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {product.badge}
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg w-fit group-hover:scale-110 transition-transform">
                  <Icon name={product.icon} size={32} className="text-primary" />
                </div>
                
                <h3 className="font-bold text-lg mb-2 min-h-[3.5rem]">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
                
                <div className="mt-auto">
                  <div className="mb-4">
                    {product.oldPrice && (
                      <div className="text-sm text-gray-400 line-through">{product.oldPrice}</div>
                    )}
                    <div className="text-2xl font-bold text-primary">{product.price}</div>
                  </div>
                  
                  <div className="space-y-2">
                    {product.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button 
                          className="w-full group/btn"
                          variant={index === 0 ? "default" : "outline"}
                        >
                          <Icon name={link.icon} size={16} className="mr-2" />
                          {link.label}
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/materials">
            <Button variant="outline" size="lg" className="group">
              Подробнее о материалах
              <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;