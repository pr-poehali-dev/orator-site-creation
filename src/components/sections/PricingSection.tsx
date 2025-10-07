import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PricingSection = () => {
  const packages = [
    {
      name: 'Базовый',
      subtitle: 'Ораторское мастерство с нуля',
      duration: '8 занятий',
      price: '15 900',
      oldPrice: '19 900',
      features: [
        '8 групповых тренингов',
        '2 индивидуальных занятия',
        'Мастер-класс по работе с убеждениями',
        'Видеокурс «Речевая креативность» + книга',
        'Запись вебинара с техниками снятия страха публичных выступлений',
        '1 тренинг «Джем» по импровизации',
        'Выпускной + Сертификат'
      ],
      popular: false
    },
    {
      name: 'Расширенный',
      subtitle: 'Ораторский курс "Своя игра"',
      duration: '16 занятий',
      price: '39 000',
      oldPrice: '45 000',
      features: [
        '16 групповых тренингов',
        '4 индивидуальных занятия',
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
    <section id="pricing" className="py-14 px-4 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Стоимость курса</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Выберите удобный для вас формат обучения
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-2xl transition-all ${
                pkg.popular ? 'border-primary border-2 shadow-xl scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full">
                  <span className="text-white font-bold text-sm">🔥 ПОПУЛЯРНЫЙ</span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                {pkg.subtitle && <p className="text-lg font-semibold text-primary mb-2">{pkg.subtitle}</p>}
                <CardDescription className="text-lg">{pkg.duration}</CardDescription>
                <div className="mt-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-2xl text-muted-foreground line-through">{pkg.oldPrice}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Возможна оплата в 2 этапа</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full py-6 text-lg ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Записаться на курс
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center">
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