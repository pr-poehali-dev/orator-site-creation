import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { articles } from '@/data/articles';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Психология', 'Практика', 'Риторика', 'Техника', 'Подготовка', 'Мастерство'];

  const filteredArticles = selectedCategory === 'Все' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-purple-50 to-primary/10">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <Icon name="BookOpen" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Блог об ораторском искусстве</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Практические советы, упражнения и секреты мастерства от Светланы Кузиковой — 
            педагога с 25-летним опытом преподавания риторики и актерского мастерства
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Card 
                key={index} 
                onClick={() => navigate(`/blog/${article.id}`)}
                className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group"
              >
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
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all text-sm">
                    <span>Читать статью</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">Статей в этой категории пока нет</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary/5 to-purple-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Хотите научиться выступать уверенно?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Запишитесь на авторский курс по ораторскому мастерству и актёрскому искусству
          </p>
          <Button size="lg" className="group">
            Записаться на курс
            <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;