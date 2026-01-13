import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const SignUpSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      alert('Пожалуйста, примите условия обработки данных');
      return;
    }
    
    try {
      const now = new Date();
      const timestamp = now.toLocaleString('ru-RU', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit', 
        minute: '2-digit'
      });

      const messageWithTime = `⏰ Время заявки: ${timestamp}${formData.message ? '\n\n' + formData.message : ''}`;

      const response = await fetch('https://functions.poehali.dev/22a2bfc5-9a6d-46f8-957d-c1239099dca9', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          message: messageWithTime
        }),
      });

      if (response.ok) {
        trackGoal(GOALS.CONTACT_FORM_SUBMIT);
        alert('✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', message: '' });
        setConsent(false);
      } else {
        const errorText = await response.text();
        console.error('Server error:', response.status, errorText);
        alert('❌ Произошла ошибка при отправке. Пожалуйста, позвоните нам: +7 918 311-17-12');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ Произошла ошибка при отправке. Пожалуйста, позвоните нам: +7 918 311-17-12');
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
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-2">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-base font-medium mb-2">Комментарий (необязательно)</label>
                <Textarea
                  placeholder="Расскажите, что вас интересует"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="consent" 
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  required
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
                disabled={!consent}
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUpSection;