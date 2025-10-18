import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
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
      title: 'Речевая креативность',
      description: 'Электронная рабочая тетрадь. Развитие креативного мышления и импровизации',
      price: '490 ₽',
      links: [
        { label: 'Купить', url: 'http://kuzikova.robo.market/buy/133929/', icon: 'ShoppingCart' }
      ],
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
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Полезные материалы
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
          {products.map((product) => (
            <Card key={product.id} className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 relative group">
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

        <div className="text-center">
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