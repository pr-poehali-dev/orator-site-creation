import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import PopularArticles from '@/components/blog/PopularArticles';
import CTABlock from '@/components/blog/CTABlock';
import { articles } from '@/data/articles';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const categories = ['Все', 'Видео', 'Психология', 'Практика', 'Риторика', 'Техника', 'Подготовка', 'Мастерство'];

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (selectedCategory !== 'Все') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <section className="pt-28 pb-20 px-4 bg-gradient-to-r from-primary/10 via-purple-50 to-primary/10 animate-in fade-in duration-700">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6">
            <Icon name="BookOpen" size={40} className="text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Бесплатные материалы для самостоятельного обучения</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Практические советы, упражнения, видео, гайды и секреты ораторского мастерства от Светланы Кузиковой. 
            Все материалы в открытом доступе!
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="mb-12 overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl bg-gradient-to-br from-white to-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  Бесплатно
                </div>
                <img 
                  src="https://cdn.poehali.dev/files/20421d46-9aee-4297-9bcb-ab517acb9812.PNG" 
                  alt="Бесплатный гайд «7 секретов харизматичного оратора»"
                  className="w-full h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Бесплатный гайд «7 секретов харизматичного оратора»</h2>
                <p className="text-gray-600 mb-6 text-lg">Семь важных правил, которые помогут сделать ваше выступление незабываемым и достичь цели. Практические советы от Школы ораторского искусства.</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-lg">Что внутри:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">7 ключевых правил оратора</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Техники создания харизмы</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Работа с голосом и энергетикой</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle2" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Секреты контакта с аудиторией</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-auto">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => navigate('/guide')}
                  >
                    <Icon name="Eye" size={20} className="mr-2" />
                    Читать онлайн
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <Card 
                    key={index} 
                    onClick={() => navigate(`/blog/${article.id}`)}
                    className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${index * 50}ms` }}
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
                        <span>{article.isVideo ? 'Смотреть видео' : 'Читать статью'}</span>
                        <Icon name={article.isVideo ? 'Play' : 'ArrowRight'} size={14} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {filteredArticles.length === 0 && searchQuery && (
            <div className="text-center py-20">
              <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground mb-2">
                {searchQuery ? 'По вашему запросу ничего не найдено' : 'Статей в этой категории пока нет'}
              </p>
              {searchQuery && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Все');
                  }}
                  className="mt-4"
                >
                  Сбросить фильтры
                </Button>
              )}
            </div>
          )}

          <div className="mt-16 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4 text-center">Поиск по материалам</h3>
            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск по статьям, тегам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-9 h-10 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon name="X" size={16} />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Найдено: {filteredArticles.length}
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                  className="rounded-full text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <CTABlock variant="course" />
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

export default Blog;