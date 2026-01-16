import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';
import { toast } from 'sonner';
import { formatPhoneNumber } from '@/utils/phoneFormat';

const SignUpSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      toast.error('Необходимо согласие', {
        description: 'Пожалуйста, примите условия обработки персональных данных',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/1427b9c7-37fe-40a5-8fe7-96646f8f064a', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        trackGoal(GOALS.CONTACT_FORM_SUBMIT);
        toast.success('Заявка отправлена!', {
          description: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
          duration: 5000,
        });
        setFormData({ name: '', phone: '', message: '' });
        setConsent(false);
      } else {
        const error = await response.json();
        toast.error('Ошибка отправки', {
          description: error.error || 'Произошла ошибка. Позвоните нам: +7 918 311-17-12',
          duration: 6000,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      toast.error('Не удалось отправить заявку', {
        description: 'Свяжитесь с нами через Telegram или позвоните',
        duration: 6000,
        action: {
          label: 'Открыть Telegram',
          onClick: () => window.open('https://t.me/svetlana_kuzikova', '_blank'),
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 md:py-14 px-3 md:px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Записаться на курс</h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-lg md:text-xl px-4">
          Оставьте заявку, и мы свяжемся с вами в ближайшее время
        </p>
        <Card className="shadow-2xl">
          <CardContent className="pt-4 md:pt-6 px-4 md:px-6">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-base font-medium mb-2">Ваше имя</label>
                <Input
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-2">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-2">Комментарий (необязательно)</label>
                <Textarea
                  placeholder="Расскажите, что вас интересует"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="consent" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  required
                  disabled={isSubmitting}
                />
                <label 
                  htmlFor="consent" 
                  className="text-base text-muted-foreground leading-relaxed cursor-pointer"
                >
                  Я согласен на{' '}
                  <a 
                    href="/consent" 
                    target="_blank" 
                    className="text-primary hover:underline"
                  >
                    обработку персональных данных
                  </a>
                  {' '}и принимаю условия{' '}
                  <a 
                    href="/privacy" 
                    target="_blank" 
                    className="text-primary hover:underline"
                  >
                    политики конфиденциальности
                  </a>
                </label>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base md:text-lg py-5 md:py-6"
                disabled={!consent || isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUpSection;