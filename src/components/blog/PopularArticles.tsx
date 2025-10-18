import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Article } from '@/data/articles';

interface PopularArticlesProps {
  articles: Article[];
}

const PopularArticles = ({ articles }: PopularArticlesProps) => {
  const navigate = useNavigate();

  if (articles.length === 0) return null;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-purple-50 rounded-xl p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <Icon name="TrendingUp" size={24} className="text-primary" />
        <h3 className="text-xl font-bold">Популярное</h3>
      </div>
      
      <div className="space-y-4">
        {articles.map((article, index) => (
          <Card 
            key={article.id}
            onClick={() => navigate(`/blog/${article.id}`)}
            className="hover:shadow-lg transition-all cursor-pointer group bg-white/80 backdrop-blur"
          >
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={12} />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularArticles;
