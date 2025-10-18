import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const IndividualLessonsSection = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    format: 'online',
    topic: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const services = [
    {
      icon: 'Presentation',
      title: 'Подготовка к выступлению',
      description: 'Структура речи, работа с содержанием, отработка выступления'
    },
    {
      icon: 'MessageSquare',
      title: 'Консультация ораторскому мастерству',
      description: 'Разбор ваших выступлений, рекомендации, план развития'
    },
    {
      icon: 'Zap',
      title: 'Развитие импровизации',
      description: 'Техники спонтанной речи, работа с неожиданными вопросами'
    },
    {
      icon: 'Mic',
      title: 'Работа с голосом и речью',
      description: 'Дикция, интонации, дыхание, сила и выразительность голоса'
    }
  ];

  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
    '18:00 - 19:00',
    '19:00 - 20:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для уточнения деталей занятия.",
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      format: 'online',
      topic: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
    
    setIsOpen(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50" id="individual">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
            <Icon name="UserCog" size={40} className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Индивидуальные занятия</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Персональная работа с педагогом — самый эффективный способ развития ораторских навыков. 
            Занятия проходят онлайн или оффлайн в удобное для вас время
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-purple-50 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Стоимость занятия</h3>
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-5xl font-bold text-primary">4 000 ₽</span>
                  <span className="text-2xl text-muted-foreground line-through">5 000 ₽</span>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1" />
                    <span className="text-lg">Продолжительность: 60 минут</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Monitor" size={20} className="text-primary mt-1" />
                    <span className="text-lg">Формат: онлайн или очно в Москве</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Calendar" size={20} className="text-primary mt-1" />
                    <span className="text-lg">Гибкий график: выбирайте удобное время</span>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Icon name="Sparkles" size={20} className="text-yellow-600 mt-1" />
                    <div>
                      <p className="font-semibold text-yellow-800 mb-1">Специальное предложение</p>
                      <p className="text-sm text-yellow-700">
                        Скидка 1000 ₽ действует до конца месяца. Успейте записаться по выгодной цене!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Icon name="Target" size={24} className="text-primary" />
                    Что вы получите
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span>Персональный план развития навыков</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span>Практические упражнения и техники</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span>Анализ и работа над ошибками</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span>Запись занятия для самостоятельной работы</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Check" size={20} className="text-primary mt-0.5" />
                      <span>Домашнее задание с проверкой</span>
                    </li>
                  </ul>
                </div>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="w-full text-lg h-14 group">
                      Записаться на занятие
                      <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Запись на индивидуальное занятие</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ваше имя *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="Иван Иванов"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+7 (999) 123-45-67"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="example@mail.ru"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Формат занятия *</Label>
                        <RadioGroup value={formData.format} onValueChange={(value) => handleChange('format', value)}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="online" />
                            <Label htmlFor="online" className="font-normal cursor-pointer">
                              Онлайн (Zoom / Skype)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="offline" id="offline" />
                            <Label htmlFor="offline" className="font-normal cursor-pointer">
                              Оффлайн (Москва)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="topic">Тема занятия *</Label>
                        <Input
                          id="topic"
                          required
                          value={formData.topic}
                          onChange={(e) => handleChange('topic', e.target.value)}
                          placeholder="Например: подготовка к презентации, работа с голосом"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Предпочтительная дата</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleChange('preferredDate', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Предпочтительное время</Label>
                          <select
                            id="time"
                            value={formData.preferredTime}
                            onChange={(e) => handleChange('preferredTime', e.target.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option value="">Выберите время</option>
                            {timeSlots.map((slot) => (
                              <option key={slot} value={slot}>{slot}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Дополнительная информация</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder="Расскажите о ваших целях, опыте, особых пожеланиях..."
                          rows={4}
                        />
                      </div>

                      <div className="bg-primary/5 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground">
                          После отправки заявки мы свяжемся с вами в течение 24 часов для подтверждения времени и уточнения деталей занятия.
                        </p>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IndividualLessonsSection;