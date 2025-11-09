import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const QuestionsSection = () => {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center border-t border-b border-gray-200 py-5">
          <p className="text-base md:text-lg text-muted-foreground mb-4">
            Есть вопросы? Свяжитесь с нами удобным способом
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
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