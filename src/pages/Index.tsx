import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const courses = [
    {
      title: 'Основы ораторского мастерства',
      description: 'Научитесь уверенно выступать перед аудиторией',
      duration: '8 недель',
      level: 'Начальный',
      icon: 'Mic2'
    },
    {
      title: 'Искусство убеждения',
      description: 'Овладейте техниками влияния и аргументации',
      duration: '6 недель',
      level: 'Средний',
      icon: 'MessageSquare'
    },
    {
      title: 'Публичные выступления PRO',
      description: 'Продвинутые навыки для профессионалов',
      duration: '10 недель',
      level: 'Продвинутый',
      icon: 'TrendingUp'
    },
    {
      title: 'Деловая риторика',
      description: 'Эффективная коммуникация в бизнесе',
      duration: '7 недель',
      level: 'Средний',
      icon: 'Briefcase'
    }
  ];

  const teachers = [
    {
      name: 'Анна Волкова',
      role: 'Главный преподаватель',
      experience: '15 лет опыта в ораторском искусстве',
      description: 'Эксперт по публичным выступлениям, автор бестселлера "Говори и убеждай"'
    },
    {
      name: 'Михаил Соколов',
      role: 'Преподаватель',
      experience: '10 лет опыта',
      description: 'Специалист по деловой коммуникации и презентациям'
    },
    {
      name: 'Елена Петрова',
      role: 'Тренер по дикции',
      experience: '12 лет опыта',
      description: 'Профессиональный актёр и педагог по сценической речи'
    }
  ];

  const testimonials = [
    {
      name: 'Дмитрий К.',
      role: 'Предприниматель',
      text: 'После курса моя уверенность на переговорах выросла в разы. Теперь я легко провожу презентации для инвесторов!'
    },
    {
      name: 'Мария С.',
      role: 'Менеджер',
      text: 'Школа Виля помогла мне преодолеть страх публичных выступлений. Спасибо за профессионализм!'
    },
    {
      name: 'Алексей П.',
      role: 'Студент',
      text: 'Отличные преподаватели и атмосфера. Каждое занятие — это новый уровень мастерства.'
    }
  ];

  const gallery = [
    { title: 'Выпускной вечер 2024', category: 'События' },
    { title: 'Мастер-класс по риторике', category: 'Обучение' },
    { title: 'Конференция выпускников', category: 'События' },
    { title: 'Практические занятия', category: 'Обучение' }
  ];

  const faqs = [
    {
      question: 'Какой уровень подготовки нужен для начала обучения?',
      answer: 'Никакой специальной подготовки не требуется. У нас есть курсы для всех уровней — от новичков до опытных ораторов.'
    },
    {
      question: 'Сколько длится обучение?',
      answer: 'Продолжительность зависит от выбранного курса: от 6 до 10 недель. Занятия проходят 2-3 раза в неделю.'
    },
    {
      question: 'Можно ли учиться онлайн?',
      answer: 'Да, мы предлагаем как очный, так и онлайн формат обучения. Качество материала одинаково высокое в обоих форматах.'
    },
    {
      question: 'Выдаётся ли сертификат?',
      answer: 'Да, по окончании курса все студенты получают сертификат о прохождении обучения.'
    },
    {
      question: 'Есть ли практические занятия?',
      answer: 'Конечно! 70% времени отводится на практику: выступления, дебаты, ролевые игры и реальные презентации.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Школа Виля
            </h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Галерея</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button className="hidden md:block bg-primary hover:bg-primary/90">Записаться</Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
            Раскройте силу своего голоса
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Научитесь говорить так, чтобы вас слушали. Профессиональное обучение ораторскому искусству с практикой и реальными результатами.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Icon name="Sparkles" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Выпускников</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">15 лет</h3>
              <p className="text-muted-foreground">Опыт работы</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">98%</h3>
              <p className="text-muted-foreground">Довольных студентов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши курсы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Выберите программу, которая подходит именно вам
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon name={course.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} className="text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="BarChart" size={16} className="text-primary" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Преподаватели</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Учитесь у лучших экспертов в области ораторского искусства
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">{teacher.experience}</p>
                  <p className="text-sm text-muted-foreground">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Что говорят наши выпускники
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Icon name="Quote" size={24} className="text-primary opacity-50" />
                  </div>
                  <p className="text-muted-foreground italic">{testimonial.text}</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Моменты из жизни нашей школы
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-primary to-secondary hover:shadow-xl transition-all cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex flex-col items-center justify-center p-6 text-white">
                  <Icon name="Image" size={48} className="mb-4 opacity-80" />
                  <h3 className="text-lg font-bold text-center mb-2">{item.title}</h3>
                  <span className="text-sm opacity-90">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Вопросы и ответы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на часто задаваемые вопросы
          </p>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами, и мы ответим на все ваши вопросы
          </p>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, что вас интересует"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
              
              <div className="mt-8 pt-8 border-t space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <span>info@shkola-vilya.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Москва, ул. Примерная, д. 10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Школа Виля
          </h3>
          <p className="text-gray-400 mb-6">Раскройте силу своего голоса</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Facebook" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Школа Виля. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
