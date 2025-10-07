import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Руководитель отдела продаж',
      text: 'Курс полностью изменил моё отношение к публичным выступлениям. Раньше боялась даже совещаний, а теперь провожу презентации на 100+ человек с удовольствием!'
    },
    {
      name: 'Михаил Соколов',
      role: 'Предприниматель',
      text: 'Уникальное сочетание практики и теории. Светлана Алексеевна — настоящий профессионал! Индивидуальные занятия дали мощный толчок к развитию.'
    },
    {
      name: 'Елена Волкова',
      role: 'Преподаватель университета',
      text: 'Методика работы с голосом и дикцией просто волшебная. За 16 занятий мой голос стал увереннее и глубже. Студенты заметили разницу сразу!'
    },
    {
      name: 'Дмитрий Князев',
      role: 'IT-менеджер',
      text: 'Импровизация и актёрское мастерство — это было для меня открытием. Теперь легко отвечаю на вопросы аудитории и не теряюсь в сложных ситуациях.'
    },
    {
      name: 'Ольга Сергеева',
      role: 'Психолог',
      text: 'Работа с ограничивающими убеждениями — это то, что отличает этот курс от других. Светлана Алексеевна действительно помогает трансформировать внутренние блоки.'
    },
    {
      name: 'Александр Морозов',
      role: 'Маркетолог',
      text: 'Выпускной спектакль стал для меня прорывом! Выступал перед залом, и это было настолько естественно. Спасибо за профессионализм и поддержку!'
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы выпускников</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Более 500 человек уже прошли курс и изменили свою жизнь
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-white" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <p className="text-2xl font-bold mb-2">⭐⭐⭐⭐⭐</p>
            <p className="text-lg">
              <span className="font-bold text-primary">4.9/5</span> — средняя оценка курса
            </p>
            <p className="text-muted-foreground mt-2">по отзывам выпускников</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;