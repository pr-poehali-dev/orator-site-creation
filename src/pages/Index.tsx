import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const uniqueApproach = [
    {
      title: 'Театральный подход',
      description: 'Методики театральной педагогики от профессионального режиссёра',
      icon: 'Drama'
    },
    {
      title: 'Психологическая глубина',
      description: 'Работа с внутренними блоками и страхами от дипломированного психолога',
      icon: 'Brain'
    },
    {
      title: 'Групповая динамика',
      description: '8 или 16 тренингов в комфортной атмосфере единомышленников',
      icon: 'Users'
    },
    {
      title: 'Личный прогресс',
      description: '4 индивидуальных занятия для проработки именно ваших особенностей',
      icon: 'UserCheck'
    }
  ];

  const courseIncludes = [
    {
      title: 'Групповые тренинги',
      description: '8 или 16 занятий (базовый или расширенный курс)',
      icon: 'Users',
      type: 'main'
    },
    {
      title: 'Индивидуальные занятия',
      description: '4 персональных сессии с преподавателем',
      icon: 'UserCheck',
      type: 'main'
    },
    {
      title: 'Имидж оратора',
      description: 'Мастер-класс от профессионального стилиста',
      icon: 'Sparkles',
      type: 'masterclass'
    },
    {
      title: 'Работа с убеждениями',
      description: 'Мастер-класс по проработке ограничивающих убеждений',
      icon: 'Lock',
      type: 'masterclass'
    },
    {
      title: 'Видеокурс',
      description: '🎁 «Речевая креативность» + книга-тренинг с упражнениями',
      icon: 'Gift',
      type: 'bonus'
    },
    {
      title: 'Антистресс техники',
      description: '🎁 Запись вебинара с техниками снятия страха перед публикой',
      icon: 'Heart',
      type: 'bonus'
    },
    {
      title: 'Импровизация',
      description: '🎁 Два тренинга «Джем» по импровизации',
      icon: 'Zap',
      type: 'bonus'
    },
    {
      title: 'Выпускной',
      description: '🎓 Финальное выступление при реальных зрителях + Сертификат',
      icon: 'Award',
      type: 'final'
    }
  ];

  const program = [
    {
      title: 'Работа с телом и жестами',
      description: 'Язык тела, постановка осанки, управление жестикуляцией',
      icon: 'Users'
    },
    {
      title: 'Голос и дикция',
      description: 'Постановка голоса, дыхание, артикуляция, интонации',
      icon: 'Mic'
    },
    {
      title: 'Психология выступлений',
      description: 'Работа со страхами, уверенность, контакт с аудиторией',
      icon: 'Brain'
    },
    {
      title: 'Риторика',
      description: 'Структура речи, аргументация, импровизация',
      icon: 'MessageSquare'
    },
    {
      title: 'Практика',
      description: 'Видеосъемка, разбор выступлений, реальные кейсы',
      icon: 'Video'
    },
    {
      title: 'Индивидуальный подход',
      description: 'Персональная работа с каждым участником',
      icon: 'UserCheck'
    }
  ];

  const results = [
    'Уверенно выступаете перед любой аудиторией',
    'Говорите чётко, внятно и выразительно',
    'Удерживаете внимание слушателей',
    'Убеждаете и вдохновляете людей',
    'Импровизируете и отвечаете на вопросы',
    'Получаете удовольствие от выступлений'
  ];

  const testimonials = [
    {
      name: 'Елена',
      text: 'Тренинг превзошёл все ожидания! Алёна — профессионал высочайшего уровня. Атмосфера невероятная, все раскрываются и растут прямо на глазах.'
    },
    {
      name: 'Дмитрий',
      text: 'Спасибо огромное за курс! Я преодолел страх выступлений, который мучил меня годами. Теперь провожу презентации легко и с удовольствием.'
    },
    {
      name: 'Анна',
      text: 'Лучший курс ораторского мастерства в Краснодаре! Индивидуальный подход к каждому, много практики, конкретные техники. Результат виден сразу!'
    }
  ];

  const faqs = [
    {
      question: 'Какой формат занятий?',
      answer: 'Уникальное сочетание групповых тренингов и индивидуальных занятий с каждым участником. Это позволяет работать над общими навыками в группе и прорабатывать личные особенности индивидуально.'
    },
    {
      question: 'Сколько длится курс?',
      answer: 'Базовый курс длится 8 занятий по 3 часа. Занятия проходят 1-2 раза в неделю. Также есть интенсивы и индивидуальные программы.'
    },
    {
      question: 'Нужна ли специальная подготовка?',
      answer: 'Нет, никакой подготовки не требуется. Курс подходит как для новичков, так и для опытных ораторов, желающих усовершенствовать навыки.'
    },
    {
      question: 'Сколько человек в группе?',
      answer: 'Не более 10 человек. Малые группы позволяют уделить внимание каждому участнику и создать комфортную атмосферу для практики.'
    },
    {
      question: 'Что будет на занятиях?',
      answer: '70% времени — практика: выступления перед камерой, импровизации, ролевые игры. 30% — теория и разбор видеозаписей. Каждое занятие — реальный прогресс.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Mic2" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ораторское искусство
              </h1>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О курсе</a>
              <a href="#program" className="text-foreground hover:text-primary transition-colors">Программа</a>
              <a href="#teacher" className="text-foreground hover:text-primary transition-colors">Преподаватель</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">Вопросы</a>
              <Button className="bg-primary hover:bg-primary/90">Записаться</Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full">
                <span className="text-white font-semibold text-sm">🎯 Уникальный курс в Краснодаре</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Ораторское искусство
                </span>
                <br />
                <span className="text-foreground text-4xl md:text-5xl">«Своя игра»</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Единственный в Краснодаре курс, где сочетаются <span className="font-bold text-primary">групповые тренинги</span> и <span className="font-bold text-secondary">индивидуальные занятия</span> с каждым участником
              </p>
              <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Записаться на курс
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 918 123-45-67
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/b3205ba1-dee0-4d9e-82cb-e6b4d0a97505.jpg" 
                alt="Ораторское искусство - курс в Краснодаре"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Уникальность подхода</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Курс ведёт <span className="font-bold text-primary">Светлана Алексеевна Кузикова</span> — театральный режиссёр и профессиональный психолог
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {uniqueApproach.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-center">Что входит в курс</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseIncludes.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.type === 'main' ? 'bg-gradient-to-br from-primary to-secondary' :
                      item.type === 'masterclass' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      item.type === 'bonus' ? 'bg-gradient-to-br from-green-500 to-emerald-500' :
                      'bg-gradient-to-br from-yellow-500 to-orange-500'
                    }`}>
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Программа курса</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Комплексный подход к развитию ораторского мастерства
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {program.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">После курса вы сможете</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <p className="text-lg">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="teacher" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Ваш преподаватель</h2>
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto bg-gradient-to-br from-primary to-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="User" size={120} className="text-white/30" />
                </div>
              </div>
              <div className="p-8 md:p-12">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl mb-2">Светлана Алексеевна Кузикова</CardTitle>
                  <CardDescription className="text-lg text-primary font-semibold">
                    Театральный режиссёр и профессиональный психолог
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Drama" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Профессиональный театральный режиссёр с многолетним опытом</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Brain" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Дипломированный психолог, эксперт по работе со страхами и убеждениями</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Users" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Более 500 выпускников в Краснодаре</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Star" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Авторская методика сочетания театральной педагогики и психологии</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Heart" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">Индивидуальный подход к каждому студенту</p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Отзывы выпускников</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Реальные истории успеха наших студентов
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
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

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Частые вопросы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Ответы на популярные вопросы о курсе
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
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Mic2" size={28} className="text-primary" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ораторское искусство «Своя игра»
            </h3>
          </div>
          <p className="text-gray-400 mb-6">Уникальный курс в Краснодаре</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Icon name="MessageCircle" size={24} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Алёна Дикопольцева. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;