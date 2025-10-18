import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ShareButtons from '@/components/ui/ShareButtons';
import { articles } from '@/data/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Header />
        <section className="py-20 px-4 text-center">
          <Icon name="FileQuestion" size={64} className="text-muted-foreground mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
          <Button onClick={() => navigate('/blog')}>
            Вернуться к блогу
          </Button>
        </section>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-8 group"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Вернуться к блогу
          </Button>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                <Icon name={article.icon as any} size={16} />
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Calendar" size={16} />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="Clock" size={16} />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="User" size={16} />
                {article.author}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.description}
            </p>
          </div>

          <div className="w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 rounded-full mb-8"></div>

          <div className="mb-12">
            <ShareButtons 
              url={`/blog/${article.id}`}
              title={article.title}
              description={article.description}
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-2xl font-bold mt-8 mb-4 text-foreground">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              
              if (paragraph.match(/^\d+\./)) {
                return (
                  <p key={index} className="text-lg leading-relaxed mb-4 ml-4 text-foreground">
                    {paragraph}
                  </p>
                );
              }

              if (paragraph.startsWith('✓')) {
                return (
                  <p key={index} className="text-lg leading-relaxed mb-2 flex items-start gap-2 text-foreground">
                    <span className="text-primary mt-1">✓</span>
                    <span>{paragraph.substring(2)}</span>
                  </p>
                );
              }

              const processedText = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
              
              return (
                <p 
                  key={index} 
                  className="text-lg leading-relaxed mb-6 text-foreground"
                  dangerouslySetInnerHTML={{ __html: processedText }}
                />
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t space-y-8">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t">
              <ShareButtons 
                url={`/blog/${article.id}`}
                title={article.title}
                description={article.description}
              />
            </div>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-purple-50 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="GraduationCap" size={40} className="text-primary" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Хотите узнать больше?</h3>
                <p className="text-muted-foreground mb-4">
                  Запишитесь на бесплатный урок и получите практические навыки от Светланы Кузиковой
                </p>
                <Button 
                  size="lg" 
                  className="group"
                  onClick={() => window.open('https://kuzikova.com/urok', '_blank')}
                >
                  Записаться на бесплатный урок
                  <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Похожие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Card 
                  key={related.id}
                  onClick={() => navigate(`/blog/${related.id}`)}
                  className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={related.icon as any} size={24} className="text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {related.category}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all text-sm">
                    <span>Читать</span>
                    <Icon name="ArrowRight" size={14} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ArticlePage;