import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Елена',
      text: 'Тренинг превзошёл все ожидания! Алёна — профессионал высочайшего уровня. Атмосфера невероятная, все раскрываются и растут прямо на глазах.'
    },
    {
      name: 'Дмитрий',
      text: 'Спасибо огромное за курс! Я преодолел страх выступлений, который мучил меня годами. Теперь провожу презентации легко и с удовольствием.'
    },
    {
      name: 'Анна',
      text: 'Лучший курс ораторского мастерства в Краснодаре! Индивидуальный подход к каждому, много практики, конкретные техники. Результат виден сразу!'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы выпускников</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Реальные истории успеха наших студентов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <Icon name="Quote" size={24} className="text-primary opacity-50" />
                </div>
                <p className="text-muted-foreground italic">{testimonial.text}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
