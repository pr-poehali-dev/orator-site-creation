import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import ShareButtons from '@/components/ui/ShareButtons';
import RelatedArticles from '@/components/blog/RelatedArticles';
import ArticleNavigation from '@/components/blog/ArticleNavigation';
import CTABlock from '@/components/blog/CTABlock';
import { articles } from '@/data/articles';

const ArticlePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === id);
  const [viewCount, setViewCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const viewKey = `article_views_${id}`;
      const currentViews = parseInt(localStorage.getItem(viewKey) || '0');
      const newViews = currentViews + 1;
      localStorage.setItem(viewKey, newViews.toString());
      setViewCount(newViews);

      const likeKey = `article_likes_${id}`;
      const currentLikes = parseInt(localStorage.getItem(likeKey) || '0');
      setLikeCount(currentLikes);

      const likedKey = `article_liked_${id}`;
      const hasLiked = localStorage.getItem(likedKey) === 'true';
      setIsLiked(hasLiked);
    }
  }, [id]);

  const handleLike = () => {
    if (!id) return;
    
    const likeKey = `article_likes_${id}`;
    const likedKey = `article_liked_${id}`;
    
    if (isLiked) {
      const newLikes = Math.max(0, likeCount - 1);
      setLikeCount(newLikes);
      localStorage.setItem(likeKey, newLikes.toString());
      localStorage.setItem(likedKey, 'false');
      setIsLiked(false);
    } else {
      const newLikes = likeCount + 1;
      setLikeCount(newLikes);
      localStorage.setItem(likeKey, newLikes.toString());
      localStorage.setItem(likedKey, 'true');
      setIsLiked(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const currentIndex = articles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : undefined;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : undefined;

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const recommendedVideos = articles
    .filter(a => a.isVideo && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <article className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="group"
              >
                <Icon name="Home" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                На главную
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="group"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                К материалам
              </Button>
            </div>
            <Button 
              variant="outline"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: article.description,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Ссылка скопирована!');
                }
              }}
              className="group"
            >
              <Icon name="Share2" size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              Поделиться
            </Button>
          </div>

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
                <Icon name="Eye" size={16} />
                {viewCount} {viewCount === 1 ? 'просмотр' : viewCount < 5 ? 'просмотра' : 'просмотров'}
              </span>
              <button
                onClick={handleLike}
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
                  isLiked 
                    ? 'bg-red-50 text-red-600' 
                    : 'hover:bg-gray-100 text-muted-foreground'
                }`}
              >
                <Icon name={isLiked ? 'Heart' : 'Heart'} size={16} className={isLiked ? 'fill-red-600' : ''} />
                {likeCount > 0 && <span className="font-medium">{likeCount}</span>}
              </button>
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

          {article.isVideo && article.videoUrl && (
            <div className="mb-12">
              <div className="relative w-full rounded-lg overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={article.videoUrl}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  title={article.title}
                ></iframe>
              </div>
            </div>
          )}

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
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
              
              <Button
                onClick={handleLike}
                variant={isLiked ? "default" : "outline"}
                size="lg"
                className={`group ${
                  isLiked 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'border-2 border-red-200 text-red-600 hover:bg-red-50'
                }`}
              >
                <Icon 
                  name="Heart" 
                  size={20} 
                  className={`mr-2 group-hover:scale-110 transition-transform ${isLiked ? 'fill-white' : ''}`} 
                />
                {isLiked ? 'Нравится' : 'Мне нравится'}
                {likeCount > 0 && <span className="ml-2 font-bold">({likeCount})</span>}
              </Button>
            </div>

            <div className="pt-6 border-t">
              <ShareButtons 
                url={`/blog/${article.id}`}
                title={article.title}
                description={article.description}
              />
            </div>
          </div>

          <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
          
          <CTABlock variant="course" />
        </div>
      </article>

      {recommendedVideos.length > 0 && (
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-primary/5">
          <div className="container mx-auto max-w-6xl">
            <RelatedArticles articles={recommendedVideos} title="Рекомендуем посмотреть" />
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <RelatedArticles articles={relatedArticles} title="Похожие статьи" />
          </div>
        </section>
      )}
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <CTABlock variant="contact" />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 group"
          aria-label="Наверх"
        >
          <Icon name="ArrowUp" size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default ArticlePage;