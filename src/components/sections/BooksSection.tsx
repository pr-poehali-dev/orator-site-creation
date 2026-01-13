import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BooksSection = () => {
  const products = [
    {
      id: 1,
      title: '«Речевая креативность»',
      description: 'Рабочая тетрадь: Говори красиво! Выступай легко! Импровизируй!',
      image: 'https://cdn.poehali.dev/files/9209eed7-dd98-462d-895f-1707e50dc481.png'
    },
    {
      id: 2,
      title: '«Публичные выступления: 7 шагов к успеху»',
      description: 'Практическое руководство оратора с упражнениями и техниками',
      image: 'https://cdn.poehali.dev/files/c851bfe2-7e13-411b-a297-8be6ca26b397.png'
    },
    {
      id: 3,
      title: 'Видеокурс «Речевая креативность за 7 дней»',
      description: 'Мини-курс для развития словесной импровизации и креативного мышления',
      image: 'https://cdn.poehali.dev/files/1e1c8073-4bbb-4d7a-9c51-c40fe25e52c2.png'
    },
    {
      id: 4,
      title: '«Антистресс-путеводитель на каждый день»',
      description: 'Сборник упражнений для эмоциональной саморегуляции и управления стрессом',
      image: 'https://cdn.poehali.dev/files/8a1bf09b-c647-4937-8325-66b55c1ba93f.png'
    }
  ];

  return (
    <section className="py-8 md:py-12 px-3 md:px-4 bg-gradient-to-br from-secondary/5 via-white to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Подарки участникам курса</h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-10 max-w-3xl mx-auto px-4 text-base md:text-lg">
          Все материалы входят в стоимость обучения и остаются с вами навсегда
        </p>

        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="p-3 hover:shadow-lg transition-all duration-500 border border-gray-200 hover:border-primary/30 group hover:-translate-y-1"
            >
              <div className="flex gap-4 items-start">
                <div className="w-20 h-24 md:w-24 md:h-28 flex-shrink-0 rounded overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg md:text-xl mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-gray-500 text-base md:text-lg line-clamp-2">{product.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 md:p-5 border-2 border-green-200">
          <p className="text-green-800 font-bold mb-2 text-lg md:text-xl">Все подарки бесплатно для участников курса</p>
          <p className="text-green-700 text-base md:text-lg">Материалы также можно приобрести отдельно в разделе <a href="/materials" className="underline hover:text-green-800 transition-colors font-medium">"Магазин"</a></p>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;