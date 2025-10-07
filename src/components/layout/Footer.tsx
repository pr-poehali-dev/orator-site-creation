import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Icon name="Mic2" size={28} className="text-primary" />
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ораторское искусство «Своя игра»
          </h3>
        </div>
        <p className="text-gray-400 mb-6">Уникальный курс в Краснодаре</p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-primary transition-colors">
            <Icon name="Instagram" size={24} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Icon name="Youtube" size={24} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Icon name="MessageCircle" size={24} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">© 2024 Светлана Кузикова. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
