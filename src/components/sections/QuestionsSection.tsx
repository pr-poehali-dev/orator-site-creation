import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const QuestionsSection = () => {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Есть вопросы по программе?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом, мы с радостью ответим на все ваши вопросы
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:bg-primary/90"
            >
              <a 
                href="https://wa.me/message/FKFHPRMEDBRYP1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
                onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-2"
            >
              <a 
                href="tel:+79183111712"
                className="inline-flex items-center"
                onClick={() => trackGoal(GOALS.PHONE_CLICK)}
              >
                <Icon name="Phone" size={20} className="mr-2" />
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