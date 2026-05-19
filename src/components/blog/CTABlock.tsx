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
      description: 'Напишите нам в Telegram, WhatsApp или MAX — ответим в течение 15 минут',
      buttonText: 'Написать в Telegram',
      icon: 'MessageCircle' as const,
      action: () => window.open('https://t.me/+79183111712', '_blank'),
      gradient: 'from-blue-50 to-sky-50'
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
        <div className="flex flex-col gap-2 flex-shrink-0">
          <Button 
            size="lg"
            onClick={config.action}
            className="group"
          >
            {config.buttonText}
            <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          {variant === 'contact' && (
            <>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-500 text-green-600 hover:bg-green-50"
                onClick={() => window.open('https://wa.me/message/FKFHPRMEDBRYP1', '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50"
                onClick={() => window.open('https://max.ru/u/f9LHodD0cOLvTbH1OK3umoWq_Fy3X11Wi5Hy97U7oooxquX7NJ9GnWOYoYw', '_blank')}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                MAX
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTABlock;