import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Article } from '@/data/articles';

interface ArticleNavigationProps {
  prevArticle?: Article;
  nextArticle?: Article;
}

const ArticleNavigation = ({ prevArticle, nextArticle }: ArticleNavigationProps) => {
  const navigate = useNavigate();

  if (!prevArticle && !nextArticle) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 border-t border-b border-gray-200">
      {prevArticle ? (
        <Button
          variant="outline"
          onClick={() => navigate(`/blog/${prevArticle.id}`)}
          className="h-auto p-6 justify-start text-left group hover:border-primary"
        >
          <div className="flex items-start gap-4 w-full">
            <Icon name="ChevronLeft" size={24} className="text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground mb-1">Предыдущая статья</div>
              <div className="font-bold text-base group-hover:text-primary transition-colors line-clamp-2">
                {prevArticle.title}
              </div>
            </div>
          </div>
        </Button>
      ) : (
        <div></div>
      )}
      
      {nextArticle && (
        <Button
          variant="outline"
          onClick={() => navigate(`/blog/${nextArticle.id}`)}
          className="h-auto p-6 justify-end text-right group hover:border-primary"
        >
          <div className="flex items-start gap-4 w-full">
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground mb-1">Следующая статья</div>
              <div className="font-bold text-base group-hover:text-primary transition-colors line-clamp-2">
                {nextArticle.title}
              </div>
            </div>
            <Icon name="ChevronRight" size={24} className="text-muted-foreground group-hover:text-primary flex-shrink-0 mt-1" />
          </div>
        </Button>
      )}
    </div>
  );
};

export default ArticleNavigation;
