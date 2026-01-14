import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';
import ApplicationModal from '@/components/ApplicationModal';

const HeroSection = () => {
  const [isConsultDialogOpen, setIsConsultDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="pt-32 pb-14 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-32 -left-32"
          style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl top-20 right-0"
          style={{ transform: `translate3d(0, ${scrollY * -0.2}px, 0)` }}
        />
        <div
          className="absolute w-[300px] h-[300px] bg-orange/10 rounded-full blur-3xl bottom-0 left-1/3"
          style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
        />
      </div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-primary to-secondary rounded-full">
              <span className="text-white font-semibold text-xs sm:text-sm">🎯 Курсы и индивидуально • Онлайн/Офлайн • Краснодар</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-5 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Курсы ораторского искусства и импровизации
              </span>
              <br />
              <span className="text-foreground text-2xl md:text-3xl lg:text-4xl xl:text-5xl">для карьеры, бизнеса и жизни</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-5 md:mb-6 max-w-2xl mx-auto lg:mx-0 px-2 lg:px-0">
              Единственный в Краснодаре курс, где сочетаются <span className="font-bold text-primary">групповые тренинги</span> и <span className="font-bold text-secondary">индивидуальные занятия</span> с каждым участником
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-5 md:mb-6 max-w-2xl mx-auto lg:mx-0 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-primary" size={22} />
                <span className="font-semibold whitespace-nowrap">8 или 16 занятий</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-primary" size={22} />
                <span className="font-semibold whitespace-nowrap">2 индивидуальных</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-primary" size={22} />
                <span className="font-semibold whitespace-nowrap">Сертификат</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-5 sm:py-6 w-full sm:w-auto"
                onClick={() => {
                  trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                  setModalOpen(true);
                }}
              >
                <Icon name="Sparkles" size={18} className="mr-2 flex-shrink-0" />
                <span className="truncate">Записаться на пробное бесплатно</span>
              </Button>
              <ApplicationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                courseName="Пробное занятие (бесплатно)"
                courseDate="Выбрать удобную дату"
              />
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm sm:text-base md:text-lg px-4 sm:px-6 py-5 sm:py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all w-full sm:w-auto"
                onClick={() => setIsConsultDialogOpen(true)}
              >
                <Icon name="MessageCircle" size={18} className="mr-2 flex-shrink-0" />
                <span className="truncate">Задать вопрос</span>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/cdb16129-8438-4096-836c-d31dff16e716.JPG" 
                alt="Ораторское искусство - курс в Краснодаре"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isConsultDialogOpen} onOpenChange={setIsConsultDialogOpen}>
        <DialogContent className="max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl text-center">Выберите удобный способ связи</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 mt-4">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-base sm:text-lg py-5 sm:py-6"
              onClick={() => {
                setIsConsultDialogOpen(false);
                setModalOpen(true);
              }}
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Отправить заявку
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">или свяжитесь напрямую</span>
              </div>
            </div>
            
            <Button
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white text-base sm:text-lg py-5 sm:py-6"
              onClick={() => {
                trackGoal(GOALS.WHATSAPP_CLICK);
                window.open('https://wa.me/79183111712?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию', '_blank');
                setIsConsultDialogOpen(false);
              }}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              WhatsApp
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 text-base sm:text-lg py-5 sm:py-6"
              onClick={() => {
                trackGoal(GOALS.PHONE_CLICK);
                window.location.href = 'tel:+79183111712';
                setIsConsultDialogOpen(false);
              }}
            >
              <Icon name="Phone" size={20} className="mr-2 flex-shrink-0" />
              <span className="truncate">+7 918 311-17-12</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 text-base sm:text-lg py-5 sm:py-6"
              onClick={() => {
                window.open('https://t.me/svetlana_kuzikova', '_blank');
                setIsConsultDialogOpen(false);
              }}
            >
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              Telegram
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full border-2 border-blue-700 text-blue-700 hover:bg-blue-50 text-base sm:text-lg py-5 sm:py-6"
              onClick={() => {
                window.open('https://vk.com/svetlana_kuzikova', '_blank');
                setIsConsultDialogOpen(false);
              }}
            >
              <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.18 14.48h-1.26c-.54 0-.71-.43-1.67-1.39-0.85-0.8-1.22-0.91-1.43-0.91-0.29 0-0.38 0.09-0.38 0.52v1.27c0 0.34-0.11 0.54-1 0.54-1.5 0-3.16-0.91-4.33-2.6-1.77-2.37-2.25-4.15-2.25-4.52 0-0.21 0.09-0.41 0.52-0.41h1.26c0.39 0 0.54 0.18 0.69 0.59 0.75 2.13 2.01 4 2.52 4 0.19 0 0.28-0.09 0.28-0.58v-2.25c-0.06-1-0.58-1.09-0.58-1.44 0-0.17 0.14-0.34 0.37-0.34h1.97c0.33 0 0.45 0.18 0.45 0.56v3.04c0 0.33 0.15 0.45 0.24 0.45 0.19 0 0.35-0.12 0.7-0.47 1.07-1.2 1.84-3.05 1.84-3.05 0.1-0.21 0.28-0.41 0.67-0.41h1.26c0.47 0 0.57 0.24 0.47 0.56-0.16 0.75-1.93 3.32-1.93 3.32-0.16 0.26-0.22 0.37 0 0.67 0.16 0.22 0.69 0.67 1.04 1.08 0.64 0.72 1.14 1.32 1.27 1.73 0.13 0.42-0.07 0.63-0.49 0.63z"/>
              </svg>
              ВКонтакте
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;