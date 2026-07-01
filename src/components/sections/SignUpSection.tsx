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
  const [mailingConsent, setMailingConsent] = useState(false);
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
        description: 'Свяжитесь с нами через Telegram, MAX или позвоните',
        duration: 6000,
        action: {
          label: 'Открыть MAX',
          onClick: () => window.open('https://max.ru/u/f9LHodD0cOLvTbH1OK3umoWq_Fy3X11Wi5Hy97U7oooxquX7NJ9GnWOYoYw', '_blank'),
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
                <label className="block text-lg font-semibold mb-2">Ваше имя</label>
                <Input
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Телефон</label>
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
                <label className="block text-lg font-semibold mb-2">Комментарий (необязательно)</label>
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
                  className="text-lg text-muted-foreground leading-relaxed cursor-pointer"
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
                  {' '}*
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="mailing-consent"
                  checked={mailingConsent}
                  onCheckedChange={(checked) => setMailingConsent(checked as boolean)}
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="mailing-consent"
                  className="text-lg text-muted-foreground leading-relaxed cursor-pointer"
                >
                  Согласен на получение{' '}
                  <a
                    href="/mailing-consent"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    рекламных рассылок
                  </a>
                </label>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg md:text-xl py-6 md:py-7"
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

              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-base text-muted-foreground">или напишите напрямую</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 text-lg md:text-xl py-6 md:py-7"
                onClick={() => window.open('https://t.me/+79183111712', '_blank')}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Написать в Telegram
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUpSection;