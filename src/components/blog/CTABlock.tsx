import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CTABlockProps {
  variant?: 'course' | 'materials' | 'contact';
  className?: string;
}

const CTABlock = ({ variant = 'course', className = '' }: CTABlockProps) => {
  const navigate = useNavigate();

  const variants = {
    course: {
      title: 'Готовы выступать уверенно?',
      description: 'Запишитесь на курс ораторского мастерства и преодолейте страх публичных выступлений',
      buttonText: 'Записаться на курс',
      icon: 'Mic' as const,
      action: () => navigate('/#contact'),
      gradient: 'from-primary/10 to-purple-50'
    },
    materials: {
      title: 'Хотите больше полезных материалов?',
      description: 'Практические статьи, видео и упражнения по ораторскому мастерству',
      buttonText: 'Смотреть все материалы',
      icon: 'BookOpen' as const,
      action: () => navigate('/blog'),
      gradient: 'from-blue-50 to-purple-50'
    },
    contact: {
      title: 'Остались вопросы?',
      description: 'Напишите нам в WhatsApp — ответим в течение 15 минут',
      buttonText: 'Написать в WhatsApp',
      icon: 'MessageCircle' as const,
      action: () => window.open('https://wa.me/message/FKFHPRMEDBRYP1', '_blank'),
      gradient: 'from-green-50 to-emerald-50'
    }
  };

  const config = variants[variant];

  return (
    <div className={`bg-gradient-to-r ${config.gradient} rounded-2xl p-8 md:p-10 my-12 ${className}`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 p-4 bg-white rounded-full shadow-lg">
          <Icon name={config.icon} size={40} className="text-primary" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{config.title}</h3>
          <p className="text-muted-foreground text-lg">{config.description}</p>
        </div>
        <Button 
          size="lg"
          onClick={config.action}
          className="group flex-shrink-0"
        >
          {config.buttonText}
          <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CTABlock;
