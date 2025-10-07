import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://functions.poehali.dev/2708494c-3d0e-4905-b18f-86093217671b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert('✅ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert('❌ Произошла ошибка. Попробуйте позвонить нам напрямую.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('❌ Произошла ошибка. Попробуйте позвонить нам напрямую.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Записаться на курс</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Оставьте заявку, и мы свяжемся с вами в ближайшее время
        </p>
        <Card className="shadow-2xl">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                <Textarea
                  placeholder="Расскажите, что вас интересует"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
            
            <div className="mt-8 pt-8 border-t space-y-4">
              <div className="text-center mb-4">
                <p className="font-semibold text-lg mb-2">Контакты</p>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Icon name="Phone" size={20} className="text-primary" />
                <a href="tel:+79183111712" className="text-lg hover:text-primary transition-colors">+7 918 311-17-12</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                <a href="https://t.me/svetlana_kuzikova" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">Личный Telegram</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                <a href="https://t.me/kuzikova_school" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">Канал в Telegram</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.9 11.54c-.24.71-.72 1.19-1.43 1.43-1.45.39-7.29.39-7.29.39s-5.84 0-7.29-.39c-.71-.24-1.19-.72-1.43-1.43C1 12.09 1 12 1 12s0-.09.04-.54c.24-.71.72-1.19 1.43-1.43C3.92 9.64 9.76 9.64 9.76 9.64s5.84 0 7.29.39c.71.24 1.19.72 1.43 1.43.04.45.04.54.04.54s0 .09-.04.54z"/>
                  <path d="M12.5 15.5v-7l6 3.5z"/>
                </svg>
                <a href="https://vk.com/svetlana_kuzikova" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">VKontakte</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span className="text-lg">Краснодар</span>
              </div>
              <div className="flex justify-center mt-6">
                <a 
                  href="https://yandex.ru/profile/108893235678?intent=reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <iframe 
                    src="https://yandex.ru/sprav/widget/rating-badge/108893235678?type=rating" 
                    width="150" 
                    height="50" 
                    frameBorder="0"
                    title="Рейтинг на Яндекс"
                    className="rounded-lg pointer-events-none"
                  ></iframe>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;