import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TrainerSection = () => {
  const achievements = [
    {
      icon: 'GraduationCap',
      text: 'Театральный режиссёр с многолетним опытом'
    },
    {
      icon: 'Brain',
      text: 'Профессиональный психолог (диплом)'
    },
    {
      icon: 'Award',
      text: 'Автор уникальной методики обучения'
    },
    {
      icon: 'Users',
      text: 'Более 500 выпускников курса'
    },
    {
      icon: 'Star',
      text: 'Сочетание театральной педагогики и психологии'
    },
    {
      icon: 'Heart',
      text: 'Индивидуальный подход к каждому ученику'
    }
  ];

  return (
    <section id="trainer" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Ваш преподаватель</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Профессионал с уникальным сочетанием компетенций
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/b3205ba1-dee0-4d9e-82cb-e6b4d0a97505.jpg"
                alt="Светлана Алексеевна Кузикова - преподаватель курса ораторского мастерства"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Светлана Алексеевна Кузикова
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Театральный режиссёр и профессиональный психолог. Автор уникальной методики, 
              которая объединяет театральную педагогику с глубинной психологической работой.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <p className="text-lg pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-6">
                <p className="text-lg italic">
                  "Моя миссия — помочь каждому человеку раскрыть свой ораторский потенциал 
                  и получать искреннее удовольствие от публичных выступлений"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;
