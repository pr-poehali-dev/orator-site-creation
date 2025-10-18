import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TrainerSection = () => {
  const achievements = [
    {
      icon: 'GraduationCap',
      text: 'Подготовка по ораторскому мастерству в ГИТИС'
    },
    {
      icon: 'Theater',
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
    <section id="trainer" className="py-14 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Ваш преподаватель</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Профессионал с уникальным сочетанием компетенций
        </p>
        
        <div className="mb-12 max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Светлана Алексеевна Кузикова
          </h3>
          <p className="text-xl text-muted-foreground text-center leading-relaxed">
            Театральный режиссёр и профессиональный психолог. Создатель театра «Комильфо», 
            в котором играют мои выпускники. Автор уникальной методики, которая объединяет 
            театральную педагогику с глубинной психологической работой.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/388aba51-c814-4b4a-a857-b405c993ab25.JPG"
                alt="Светлана Алексеевна Кузикова - преподаватель курса ораторского мастерства"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <p className="text-lg pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none max-w-4xl mx-auto">
          <CardContent className="p-8">
            <p className="text-xl italic text-center leading-relaxed">
              "Моя миссия — помочь каждому человеку раскрыть свой ораторский потенциал 
              и получать искреннее удовольствие от публичных выступлений"
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TrainerSection;