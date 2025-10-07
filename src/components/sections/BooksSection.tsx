import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BooksSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Авторские книги в подарок</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Каждый участник курса получает авторские книги-тренинги Светланы Кузиковой с практическими упражнениями
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80" 
              alt="Авторские книги Светланы Кузиковой"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
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
                      Практическое руководство по развитию творческого мышления в публичных выступлениях
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
                    <h3 className="font-bold text-xl mb-2">Книга-тренинг с упражнениями</h3>
                    <p className="text-muted-foreground">
                      Пошаговые практические задания для самостоятельной работы над речью и уверенностью
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
                    <h3 className="font-bold text-xl mb-2 text-green-800">Бонус каждому участнику</h3>
                    <p className="text-green-700">
                      Все книги входят в стоимость курса и остаются с вами навсегда
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
