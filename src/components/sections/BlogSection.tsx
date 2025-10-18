import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BlogSection = () => {
  const navigate = useNavigate();
  const articles = [
    {
      title: 'Как побороть страх публичных выступлений',
      description: 'Практические советы и упражнения для преодоления волнения перед аудиторией',
      category: 'Психология',
      readTime: '5 мин',
      icon: 'Heart'
    },
    {
      title: '10 упражнений для развития голоса',
      description: 'Эффективные техники для улучшения дикции и силы голоса',
      category: 'Практика',
      readTime: '7 мин',
      icon: 'Mic'
    },
    {
      title: 'Секреты убедительной речи',
      description: 'Как структурировать выступление, чтобы зацепить слушателей',
      category: 'Риторика',
      readTime: '6 мин',
      icon: 'MessageCircle'
    },
    {
      title: 'Невербальное общение в публичных выступлениях',
      description: 'Язык тела, жесты и мимика — как использовать их правильно',
      category: 'Техника',
      readTime: '8 мин',
      icon: 'Users'
    },
    {
      title: 'Как готовиться к важному выступлению',
      description: 'Пошаговый план подготовки к презентации или докладу',
      category: 'Подготовка',
      readTime: '10 мин',
      icon: 'BookOpen'
    },
    {
      title: 'Импровизация в публичной речи',
      description: 'Техники быстрого мышления и умение отвечать на неожиданные вопросы',
      category: 'Мастерство',
      readTime: '6 мин',
      icon: 'Zap'
    }
  ];

  return (
    <section className="py-14 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Полезные материалы</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Бесплатные статьи и советы по ораторскому искусству от Светланы Кузиковой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon name={article.icon as any} size={24} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    <span>Читать</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group" onClick={() => navigate('/blog')}>
            Все статьи блога
            <Icon name="BookOpen" size={18} className="ml-2 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;