import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ProgramSection = () => {
  const program = [
    {
      title: 'Секреты ораторского искусства',
      icon: 'Lightbulb',
      items: [
        'Управляем страхом публичных выступлений, вырабатываем новый условный рефлекс "публичное выступление - это удовольствие"',
        'Учимся структурировать речь и говорить так, чтобы тебя слышали',
        'Узнаём крючки привлечения внимания публики и психотрюки переговоров',
        'Повышаем словарный запас, избавляемся от слов-паразитов',
        'Развиваем чувство уверенности и свободы',
        'Управляем эмоциями и стрессом',
        'Трансформируем ограничивающие убеждения по поводу своих ораторских способностей',
        'Работаем с профессиональным стилистом над имиджем оратора'
      ]
    },
    {
      title: 'Голос. Речь. Дикция',
      icon: 'Mic',
      items: [
        'Постановка голоса и дыхания',
        'Техники создания харизматичного и уверенного голоса',
        'Интонация',
        'Сила и подача голоса',
        'Изучаем законы устной речи',
        'Создаём голос эксперта'
      ]
    },
    {
      title: 'Импровизация и актёрское мастерство',
      icon: 'Sparkles',
      items: [
        'Спонтанность, выход из шаблонов мышления',
        'Развиваем словесную гибкость',
        'Учимся импровизировать',
        'Повышаем скорость креативного мышления, спонтанность и остроумие',
        'Практикуем умение действовать эффективно «здесь и сейчас»',
        'Выступаем с театральным монологом'
      ]
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
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Программа курса</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Три основных блока для комплексного развития
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {program.map((block, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon name={block.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-4">{block.title}</CardTitle>
              </CardHeader>
              <div className="px-6 pb-6 space-y-3">
                {block.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-2">
                    <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <CardDescription className="text-sm leading-relaxed">{item}</CardDescription>
                  </div>
                ))}
              </div>
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