import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
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
                <span className="text-lg">+7 918 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Icon name="Instagram" size={20} className="text-primary" />
                <a href="#" className="text-lg hover:text-primary transition-colors">@orator_krasnodar</a>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <Icon name="MapPin" size={20} className="text-primary" />
                <span className="text-lg">Краснодар</span>
              </div>
              <div className="flex justify-center mt-6">
                <iframe 
                  src="https://yandex.ru/sprav/widget/rating-badge/108893235678?type=rating" 
                  width="150" 
                  height="50" 
                  frameBorder="0"
                  title="Рейтинг на Яндекс"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;