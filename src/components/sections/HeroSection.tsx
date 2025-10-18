import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const HeroSection = () => {
  const [isConsultDialogOpen, setIsConsultDialogOpen] = useState(false);
  return (
    <section className="pt-24 pb-14 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full">
              <span className="text-white font-semibold text-sm">🎯 Уникальный курс в Краснодаре</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Ораторское искусство
              </span>
              <br />
              <span className="text-foreground text-4xl md:text-5xl">«Своя игра»</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Единственный в Краснодаре курс, где сочетаются <span className="font-bold text-primary">групповые тренинги</span> и <span className="font-bold text-secondary">индивидуальные занятия</span> с каждым участником
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-primary" size={24} />
                <span className="font-semibold">8 или 16 занятий</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-primary" size={24} />
                <span className="font-semibold">4 индивидуальных</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" className="text-primary" size={24} />
                <span className="font-semibold">Сертификат</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
                onClick={() => {
                  trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Записаться на курс
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all"
                onClick={() => setIsConsultDialogOpen(true)}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/files/b3205ba1-dee0-4d9e-82cb-e6b4d0a97505.jpg" 
              alt="Ораторское искусство - курс в Краснодаре"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
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
    </section>
  );
};

export default HeroSection;