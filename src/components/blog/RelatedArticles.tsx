import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Article } from '@/data/articles';

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

const RelatedArticles = ({ articles, title = 'Читайте также' }: RelatedArticlesProps) => {
  const navigate = useNavigate();

  if (articles.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <Icon name="BookMarked" size={28} className="text-primary" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card 
            key={article.id}
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
              
              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all text-sm">
                <span>{article.isVideo ? 'Смотреть' : 'Читать'}</span>
                <Icon name={article.isVideo ? 'Play' : 'ArrowRight'} size={14} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
