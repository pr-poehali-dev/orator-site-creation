import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsultDialogOpen, setIsConsultDialogOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={handleLogoClick}
          >
            <img 
              src="https://cdn.poehali.dev/files/ecc5e6e8-0ee3-4150-821f-c092246ec57f.png" 
              alt="KUZIKOVA SCHOOL Logo" 
              className="h-12 w-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all">
                KUZIKOVA SCHOOL
              </h1>
              <p className="text-xs text-muted-foreground">Школа ораторского искусства и импровизации</p>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О курсе</a>
            <a href="#program" className="text-foreground hover:text-primary transition-colors">Программа</a>
            <a href="#trainer" className="text-foreground hover:text-primary transition-colors">Преподаватель</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Стоимость</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <button onClick={() => navigate('/blog')} className="text-foreground hover:text-primary transition-colors font-medium">Полезные материалы</button>
            <div className="flex gap-2 items-center border-l pl-4">
              <a 
                href="https://t.me/svetlana_kuzikova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a 
                href="https://vk.com/svetlana_kuzikova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="VKontakte"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.9 11.54c-.24.71-.72 1.19-1.43 1.43-1.45.39-7.29.39-7.29.39s-5.84 0-7.29-.39c-.71-.24-1.19-.72-1.43-1.43C1 12.09 1 12 1 12s0-.09.04-.54c.24-.71.72-1.19 1.43-1.43C3.92 9.64 9.76 9.64 9.76 9.64s5.84 0 7.29.39c.71.24 1.19.72 1.43 1.43.04.45.04.54.04.54s0 .09-.04.54z"/>
                  <path d="M12.5 15.5v-7l6 3.5z"/>
                </svg>
              </a>
              <a 
                href="tel:+79183111712"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Телефон"
                onClick={() => trackGoal(GOALS.PHONE_CLICK)}
              >
                <Icon name="Phone" size={20} className="text-primary" />
              </a>
            </div>
            <Button 
              variant="outline" 
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
              onClick={() => setIsConsultDialogOpen(true)}
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Бесплатная консультация
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => {
              trackGoal(GOALS.COURSE_SIGNUP_CLICK);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>Записаться</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Меню"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} className="text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t space-y-4 animate-in slide-in-from-top">
            <a 
              href="#about" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              О курсе
            </a>
            <a 
              href="#program" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Программа
            </a>
            <a 
              href="#trainer" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Преподаватель
            </a>
            <a 
              href="#pricing" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Стоимость
            </a>
            <a 
              href="#testimonials" 
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={handleLinkClick}
            >
              Отзывы
            </a>
            <button 
              onClick={() => {
                navigate('/blog');
                handleLinkClick();
              }}
              className="block text-foreground hover:text-primary transition-colors py-2 text-left font-medium"
            >
              Полезные материалы
            </button>
            
            <div className="flex gap-4 items-center pt-4 border-t">
              <a 
                href="https://t.me/svetlana_kuzikova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
              <a 
                href="https://vk.com/svetlana_kuzikova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="VKontakte"
              >
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.9 11.54c-.24.71-.72 1.19-1.43 1.43-1.45.39-7.29.39-7.29.39s-5.84 0-7.29-.39c-.71-.24-1.19-.72-1.43-1.43C1 12.09 1 12 1 12s0-.09.04-.54c.24-.71.72-1.19 1.43-1.43C3.92 9.64 9.76 9.64 9.76 9.64s5.84 0 7.29.39c.71.24 1.19.72 1.43 1.43.04.45.04.54.04.54s0 .09-.04.54z"/>
                  <path d="M12.5 15.5v-7l6 3.5z"/>
                </svg>
              </a>
              <a 
                href="tel:+79183111712"
                className="p-2 hover:bg-primary/10 rounded-full transition-colors"
                aria-label="Телефон"
                onClick={() => trackGoal(GOALS.PHONE_CLICK)}
              >
                <Icon name="Phone" size={24} className="text-primary" />
              </a>
            </div>

            <Button 
              variant="outline"
              className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-white mt-4" 
              onClick={() => {
                handleLinkClick();
                setIsConsultDialogOpen(true);
              }}
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Бесплатная консультация
            </Button>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 mt-3" 
              onClick={() => {
                trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                handleLinkClick();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Записаться на курс
            </Button>
          </div>
        )}
      </div>

      <Dialog open={isConsultDialogOpen} onOpenChange={setIsConsultDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">Выберите удобный способ связи</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            <Button
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6"
              onClick={() => {
                trackGoal(GOALS.WHATSAPP_CLICK);
                window.open('https://wa.me/79183111712?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию', '_blank');
                setIsConsultDialogOpen(false);
              }}
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              WhatsApp
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 text-lg py-6"
              onClick={() => {
                trackGoal(GOALS.PHONE_CLICK);
                window.location.href = 'tel:+79183111712';
                setIsConsultDialogOpen(false);
              }}
            >
              <Icon name="Phone" size={24} className="mr-2" />
              Позвонить: +7 918 311-17-12
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 text-lg py-6"
              onClick={() => {
                window.open('https://t.me/svetlana_kuzikova', '_blank');
                setIsConsultDialogOpen(false);
              }}
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Telegram
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 text-lg py-6"
              onClick={() => {
                trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                setIsConsultDialogOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Icon name="Send" size={24} className="mr-2" />
              Оставить заявку на сайте
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Header;