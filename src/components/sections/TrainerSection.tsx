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
    <section id="trainer" className="py-20 px-4 bg-white">
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
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/b6fd0c25-ceb9-47e2-8e1e-b7de9dbdfd3a.jpg"
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

        <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none max-w-4xl mx-auto mb-16">
          <CardContent className="p-8">
            <p className="text-xl italic text-center leading-relaxed">
              "Моя миссия — помочь каждому человеку раскрыть свой ораторский потенциал 
              и получать искреннее удовольствие от публичных выступлений"
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Театр «Комильфо»
          </h3>
          <p className="text-center text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
            Наши выпускники играют на сцене театра, применяя навыки ораторского мастерства в живых постановках
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/ec918dae-38a2-4d12-af45-65ddbdcb96e6.JPG"
                alt="Выступление в театре Комильфо"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/898e2a43-89c2-4cdd-a6cc-00a638c03629.JPG"
                alt="Актёры театра Комильфо"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img 
              src="https://cdn.poehali.dev/files/dba690b5-c01e-4cd5-adae-fbcbc337fd59.JPG"
              alt="Спектакль театра Комильфо"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Обучение и выпускники
          </h3>
          <p className="text-center text-muted-foreground mb-8 text-lg max-w-3xl mx-auto">
            Практические занятия по ораторскому мастерству и вручение сертификатов нашим успешным выпускникам
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/a11109b0-914c-4a05-9e4c-e2b4e327596b.JPG"
                alt="Занятие по ораторскому мастерству"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/62867835-ef13-40aa-98c3-6840a822110f.JPG"
                alt="Выпускники курса с сертификатами"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;