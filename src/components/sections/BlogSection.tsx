import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { articles } from '@/data/articles';
import { useEffect, useRef, useState } from 'react';

const BlogSection = () => {
  const navigate = useNavigate();
  const latestArticles = [...articles].reverse().slice(0, 6);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-14 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4 animate-bounce">
            <Icon name="BookOpen" size={32} className="text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-orange bg-clip-text text-transparent leading-tight">
            Бесплатные статьи, видео и упражнения для развития навыков публичных выступлений
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto font-medium">
            Изучайте материалы в удобном темпе и практикуйте техники ораторского мастерства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className={`hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/blog/${article.id}`)}
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
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    <span>{article.isVideo ? 'Смотреть' : 'Читать'}</span>
                    <Icon name={article.isVideo ? 'Play' : 'ArrowRight'} size={14} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button size="lg" variant="outline" className="group" onClick={() => navigate('/blog')}>
            Все статьи блога
            <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;