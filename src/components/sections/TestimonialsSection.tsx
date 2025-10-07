import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Мария Савицкая',
      text: 'Прошла курс ораторского искусства и импровизации у Светланы Кузиковой по рекомендации подруги. Безумно рада, что в нужный момент я узнала именно об этой школе! Светлана настоящий профессионал! Страх и сопротивление рассеялись сразу после первого занятия! Светлана создает комфортную и теплую атмосферу в группе, передает огромное количество знаний, упражнений, которые уже сразу начинаешь практиковать как в обычной жизни, так и в публичных выступлениях. По окончании курса трансформации не заставляют себя ждать! Однозначно, рекомендую «kuzikova_school»!'
    },
    {
      name: 'Елена Аксайская',
      text: 'Это был действительно мастерский курс. Где за два месяца я смогла освоить навыки ораторского и актерского мастерства. Конечно, есть куда расти. Но за эти два месяца я получила такое количество знаний и навыков, что могу гораздо увереннее выступать. В этом курсе прекрасно все: расписание, место проведения, наполнение курса. Каждое занятие - фейерверк эмоций. Светлана - настоящий профессионал и как педагог, и как психолог, и как режиссер. Если хотите прокачать навыки оратора - смело идите в Kuzikova School!'
    },
    {
      name: 'Александра Пронина',
      text: 'Если вы ещё сомневаетесь и выбираете школу по ораторскому мастерству - идите в Kuzikova School! Это открытие нового себя. Вас научат как правильно готовиться к выступлению, как держать фокус внимания аудитории, как овладеть со своими эмоциями, снимать напряжение и волнение перед выступлением и много-много полезной информации вас ждёт на обучении. Я не жалею ни одного дня потраченного на обучение!'
    },
    {
      name: 'Ксения Тышко',
      text: 'Прошла замечательный курс Светланы «Своя игра». Подача материала на высшем уровне, удобная прекрасная студия и график учёбы. Было очень интересно и познавательно. К концу курса действительно ты становишься другим человеком: самоуверенным, креативным и так далее (говорю за себя🙃). Ожидания оправданы)) Также было классно практиковать ораторские и актерские навыки в группе с другими осознанными людьми, появляются новые знакомства и, естественно, опыт✌️ Однозначно рекомендую эту студию🔥'
    },
    {
      name: 'Александра Шостак',
      text: 'Я прошла обучение по ораторскому искусству и импровизации «Своя игра» у Светланы Кузиковой. Этот курс был настоящим прорывом в саморазвитии и совершенствовании ораторских навыков. Каждое занятие проходило интересно, информативно, полезно, а уходила я всегда с новыми инсайтами. Благодаря обучению у Светланы, я не только получила новые навыки в области ораторского мастерства, но и обрела уверенность в себе на публике. Все цели, которые я ставила в начале курса были мной достигнуты по его окончанию. Теперь я готова к новым вызовам и выступлениям перед людьми с легкостью и уверенностью.'
    },
    {
      name: 'Ольга Беляева',
      text: 'Я прошла ораторский курс "Своя игра" и это одна из лучших моих инвестиций в себя в 2023 году. 2 месяца мощной прокачки, невероятная атмосфера в команде, настоящий индивидуальный подход к каждому, общение в кругу единомышленников. Рекомендую, даже не раздумывайте, это лучшее, что можно найти и нет никакого сравнения с курсами онлайн. Живое общение, налет ораторских часов и тонкая психологическая работа - это то, что дает Светлана на курсе. Теория преподносится легко и интересно! Записывайтесь!))'
    }
  ];

  return (
    <section id="testimonials" className="py-14 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
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
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center space-y-6">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <p className="text-2xl font-bold mb-2">⭐⭐⭐⭐⭐</p>
            <p className="text-lg">
              <span className="font-bold text-primary">4.9/5</span> — средняя оценка курса
            </p>
            <p className="text-muted-foreground mt-2">по отзывам выпускников</p>
          </div>
          
          <div>
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <a 
                href="https://yandex.ru/profile/108893235678?intent=reviews" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Все отзывы на Яндекс
                <Icon name="ExternalLink" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;