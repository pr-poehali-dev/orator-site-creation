import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const SignUpSection = () => {
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
    <section id="contact" className="py-14 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SignUpSection;