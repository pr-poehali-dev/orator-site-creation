import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AudienceSection = () => {
  const audiences = [
    {
      title: 'Для бизнеса',
      icon: 'Briefcase',
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'Убедительно общаться с клиентами',
        'Увеличивать доход через публичные выступления',
        'Эффективно проводить презентации',
        'Завоевывать доверие партнёров'
      ]
    },
    {
      title: 'Для карьеры',
      icon: 'TrendingUp',
      color: 'from-purple-500 to-purple-600',
      benefits: [
        'Выгодно подавать себя',
        'Профессионально расти',
        'Развивать навыки коммуникации',
        'Выступать на конференциях и форумах'
      ]
    },
    {
      title: 'Для жизни',
      icon: 'Heart',
      color: 'from-pink-500 to-pink-600',
      benefits: [
        'Творчески развиваться',
        'Наладить отношения с собой',
        'Гармонично общаться с окружающими',
        'Раскрыть свой потенциал'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Для кого этот курс</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Курс подойдёт всем, кто хочет уверенно выступать и убедительно общаться
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <Icon name={audience.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl text-center mb-6">{audience.title}</CardTitle>
                <div className="space-y-3">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <CardDescription className="text-base leading-relaxed">{benefit}</CardDescription>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
