import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const SignUpSection = () => {
  const handleTelegramClick = () => {
    trackGoal(GOALS.CONTACT_FORM_SUBMIT);
    window.open('https://t.me/svetlana_kuzikova', '_blank');
  };

  return (
    <section id="contact" className="py-10 md:py-14 px-3 md:px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Записаться на курс</h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-lg md:text-xl px-4">
          Свяжитесь со мной напрямую в Telegram
        </p>
        <Card className="shadow-2xl">
          <CardContent className="pt-8 md:pt-12 pb-8 md:pb-12 px-4 md:px-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="MessageCircle" size={40} className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-lg md:text-xl text-muted-foreground mb-2">
                  Отвечу на все ваши вопросы и помогу записаться на курс
                </p>
                <p className="text-base text-muted-foreground">
                  Обычно отвечаю в течение нескольких часов
                </p>
              </div>
              <Button 
                onClick={handleTelegramClick}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg py-6 md:py-7"
                size="lg"
              >
                <Icon name="Send" size={24} className="mr-2" />
                Написать в Telegram
              </Button>
              <p className="text-sm text-muted-foreground">
                Или позвоните: <a href="tel:+79183111712" className="text-primary hover:underline font-medium">+7 918 311-17-12</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUpSection;