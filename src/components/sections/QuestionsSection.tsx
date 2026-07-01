import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const QuestionsSection = () => {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center border-t border-b border-gray-200 py-5">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Есть вопросы? Свяжитесь с нами удобным способом
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button 
              asChild
              size="default" 
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              <a 
                href="https://t.me/+79183111712"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
                onClick={() => trackGoal(GOALS.TELEGRAM_CLICK)}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Telegram
              </a>
            </Button>
            <Button 
              asChild
              size="default" 
              className="bg-primary hover:bg-primary/90"
            >
              <a 
                href="https://wa.me/message/FKFHPRMEDBRYP1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
                onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                WhatsApp
              </a>
            </Button>
            <Button 
              asChild
              size="default" 
              variant="outline"
              className="border-purple-500 text-purple-600 hover:bg-purple-50"
            >
              <a 
                href="https://max.ru/u/f9LHodD0cOLvTbH1OK3umoWq_Fy3X11Wi5Hy97U7oooxquX7NJ9GnWOYoYw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
                MAX
              </a>
            </Button>
            <Button 
              asChild
              size="default" 
              variant="outline"
            >
              <a 
                href="tel:+79183111712"
                className="inline-flex items-center"
                onClick={() => trackGoal(GOALS.PHONE_CLICK)}
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;