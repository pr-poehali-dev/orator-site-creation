import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/7e98268b-4991-45ff-8a16-bc95b72168b3.png" 
              alt="KUZIKOVA SCHOOL Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                KUZIKOVA SCHOOL
              </h1>
              <p className="text-xs text-muted-foreground">Ораторское искусство</p>
            </div>
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