import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Mic2" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ораторское искусство
            </h1>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О курсе</a>
            <a href="#program" className="text-foreground hover:text-primary transition-colors">Программа</a>
            <a href="#trainer" className="text-foreground hover:text-primary transition-colors">Преподаватель</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Стоимость</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Записаться</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;