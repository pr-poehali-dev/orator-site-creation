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
      image: 'https://cv4.litres.ru/pub/c/cover_415/71829709.webp'
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
      image: 'https://cv1.litres.ru/pub/c/cover_415/71829715.webp'
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
      image: 'https://i.ytimg.com/vi/1JqR3GVqib4/maxresdefault.jpg'
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Подарки участникам курса
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Все материалы бесплатно при покупке программы обучения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className={`p-4 hover:shadow-lg transition-all duration-500 border border-gray-200 hover:border-primary/30 relative group hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {product.badge && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white px-2 py-0.5 rounded-full text-[10px] font-bold shadow-md z-10">
                  {product.badge}
                </div>
              )}
              
              <div className="flex gap-3 items-start">
                <div className="w-16 h-20 flex-shrink-0 rounded overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.title}</h3>
                  <p className="text-gray-500 text-xs mb-2 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-baseline gap-2">
                    {product.oldPrice && (
                      <div className="text-[10px] text-gray-400 line-through">{product.oldPrice}</div>
                    )}
                    <div className="text-sm font-bold text-primary">{product.price}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/materials">
            <Button variant="outline" size="sm" className="group text-xs">
              Подробнее о материалах
              <Icon name="ArrowRight" size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;