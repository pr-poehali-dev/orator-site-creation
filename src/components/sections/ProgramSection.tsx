import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  const program = [
    {
      title: 'Работа с телом и жестами',
      description: 'Язык тела, постановка осанки, управление жестикуляцией',
      icon: 'Users'
    },
    {
      title: 'Голос и дикция',
      description: 'Постановка голоса, дыхание, артикуляция, интонации',
      icon: 'Mic'
    },
    {
      title: 'Психология выступлений',
      description: 'Работа со страхами, уверенность, контакт с аудиторией',
      icon: 'Brain'
    },
    {
      title: 'Риторика',
      description: 'Структура речи, аргументация, импровизация',
      icon: 'MessageSquare'
    },
    {
      title: 'Практика',
      description: 'Видеосъемка, разбор выступлений, реальные кейсы',
      icon: 'Video'
    },
    {
      title: 'Индивидуальный подход',
      description: 'Персональная работа с каждым участником',
      icon: 'UserCheck'
    }
  ];

  const results = [
    'Уверенно выступаете перед любой аудиторией',
    'Говорите чётко, внятно и выразительно',
    'Удерживаете внимание слушателей',
    'Убеждаете и вдохновляете людей',
    'Импровизируете и отвечаете на вопросы',
    'Получаете удовольствие от выступлений'
  ];

  return (
    <section id="program" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Программа курса</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Комплексный подход к развитию ораторского мастерства
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {program.map((item, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">После курса вы сможете</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Check" size={16} className="text-white" />
                </div>
                <p className="text-lg">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
