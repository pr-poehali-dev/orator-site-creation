import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BooksSection = () => {
  return (
    <section className="py-14 px-4 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Подарки участникам</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Каждый участник курса получает ценные бонусы: электронные книги и видеокурс от Светланы Кузиковой
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="https://cdn.poehali.dev/files/9209eed7-dd98-462d-895f-1707e50dc481.png" 
                  alt="Рабочая тетрадь - Речевая креативность"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src="https://cdn.poehali.dev/files/c851bfe2-7e13-411b-a297-8be6ca26b397.png" 
                  alt="Публичные выступления: 7 шагов к успеху"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <img 
                src="https://cdn.poehali.dev/files/1e1c8073-4bbb-4d7a-9c51-c40fe25e52c2.png" 
                alt="Видеокурс - Речевая креативность за 7 дней"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name="Book" size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">«Речевая креативность»</h3>
                    <p className="text-muted-foreground">
                      Рабочая тетрадь: Говори красиво! Выступай легко! Импровизируй! Новый уровень вербального интеллекта
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon name="BookOpen" size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">«Публичные выступления: 7 шагов к успеху»</h3>
                    <p className="text-muted-foreground">
                      Практическое руководство оратора с упражнениями и техниками для успешных выступлений
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Icon name="Video" size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Видеокурс «Речевая креативность за 7 дней»</h3>
                    <p className="text-muted-foreground">
                      Мини-курс для развития словесной импровизации и креативного мышления в речи
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Icon name="Gift" size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-green-800">Все подарки бесплатно</h3>
                    <p className="text-green-700">
                      Книги и видеокурс входят в стоимость обучения и остаются с вами навсегда
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;