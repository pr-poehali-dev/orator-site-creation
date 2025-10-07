import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
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
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Записаться на курс
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-2"
                asChild
              >
                <a href="tel:+79183111712" className="inline-flex items-center">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Узнать подробнее
                </a>
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
    </section>
  );
};

export default HeroSection;