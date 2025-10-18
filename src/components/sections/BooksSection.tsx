import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BooksSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Подарки участникам</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Каждый участник курса получает ценные бонусы: электронные книги и видеокурс от Светланы Кузиковой
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
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
                <img 
                  src="https://cdn.poehali.dev/files/1e1c8073-4bbb-4d7a-9c51-c40fe25e52c2.png" 
                  alt="Видеокурс - Речевая креативность за 7 дней"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300 col-span-1"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-4 pb-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name="Book" size={20} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">«Речевая креативность»</h3>
                    <p className="text-muted-foreground text-sm">
                      Рабочая тетрадь: Говори красиво! Выступай легко! Импровизируй! Новый уровень вербального интеллекта
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-4 pb-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon name="BookOpen" size={20} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">«Публичные выступления: 7 шагов к успеху»</h3>
                    <p className="text-muted-foreground text-sm">
                      Практическое руководство оратора с упражнениями и техниками для успешных выступлений
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-4 pb-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <Icon name="Video" size={20} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Видеокурс «Речевая креативность за 7 дней»</h3>
                    <p className="text-muted-foreground text-sm">
                      Мини-курс для развития словесной импровизации и креативного мышления в речи
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
              <CardContent className="pt-4 pb-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Icon name="Gift" size={20} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-green-800">Все подарки бесплатно для участников</h3>
                    <p className="text-green-700 mb-1 text-sm">
                      Книги и видеокурс входят в стоимость обучения и остаются с вами навсегда
                    </p>
                    <p className="text-sm text-green-600/80">
                      💡 Материалы также можно приобрести отдельно в разделе <a href="/materials" className="underline hover:text-green-800 transition-colors font-medium">"Материалы"</a>
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