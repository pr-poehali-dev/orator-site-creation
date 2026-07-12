import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';
import { useState } from 'react';
import ApplicationModal from '@/components/ApplicationModal';

const ScheduleSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({ name: '', date: '' });

  const handleDateSelect = (courseName: string, date: string) => {
    setSelectedCourse({ name: courseName, date });
    setModalOpen(true);
    trackGoal(GOALS.COURSE_SIGNUP_CLICK);
  };

  const courses = [
    {
      name: 'Курс ораторского искусства и импровизации',
      badge: 'ОФФЛАЙН',
      color: 'from-primary to-secondary',
      isCombined: true,
      groups: [
        {
          dates: '03 августа — 29 августа',
          schedule: 'вечерняя группа · пн/ср\n19:00–21:00',
          color: 'purple'
        }
      ],
      features: [
        'Групповые и индивидуальные занятия',
        'Финальное выступление при реальных зрителях',
        'Онлайн курс «Речевая креативность за 7 дней» в подарок'
      ],
      spots: 'Идёт набор'
    },
    {
      name: 'Курс «Импровизация: личный сторителлинг»',
      color: 'from-secondary to-primary',
      isStorytellingCard: true,
      formatLabel: 'Индивидуальный формат',
      tagline: '6 трансформационных занятий на стыке ораторского искусства, психологии и бизнеса.',
      about: 'Это не тренинг ораторского мастерства в классическом понимании. Это глубокая проработка вашей личности через призму сцены. Мы учимся не просто говорить красиво, а рассказывать истории так, чтобы менять реальность слушателя. Главный инструмент курса — ваша биография.',
      uniqueness: [
        'Сплав трех дисциплин: Техника речи (как сказать) + Режиссура (как показать) + Психология (как прожить и отпустить).',
        'Трансформация негативного опыта. Превращаем уязвимость в мощный ресурс для влияния на аудиторию.',
        'Практика импровизации (чтобы выдать гениальный ответ в любой стрессовой ситуации).',
        'Индивидуальная психологическая работа на протяжении всего курса.',
        'Финальное выступление перед реальными зрителями.'
      ],
      results: [
        'Свободное тело и звучащий, объемный голос.',
        'Способность выкрутиться из любой неловкой паузы.',
        'Готовый 20-минутный моноспектакль.',
        'Способность продавать что угодно (себя, идеи, продукты) через проживание эмоций, а не через сухие характеристики.'
      ],
      audience: [
        'Руководителям и предпринимателям, которым нужно вдохновлять команду и партнеров.',
        'Специалистам помогающих профессий (врачи, юристы, психологи), чтобы клиенты чувствовали их уверенность.',
        'Творческим людям, которые ищут свой уникальный «голос» и хотят избавиться от страха сцены.'
      ],
      spots: 'Идёт набор'
    },
    {
      name: 'Ораторский курс "Речевая креативность (онлайн)"',
      description: 'Для тех, кто хочет научиться быстро находить слова в любой ситуации. Будет полезно тем, кому сложно спонтанно выступать на публике, у кого страх блокирует словесный поток, кому не хватает смелости выступать без подготовки.',
      features: [
        'Обратная связь в чате курса лично от педагога',
        'Доступ — навсегда'
      ],
      promoBadge: 'АКЦИЯ ТРИ ДНЯ',
      oldPrice: '2450 руб.',
      newPrice: '990 руб.',
      buttonLink: 'https://kuzikova.robo.market/pro100reche',
      color: 'from-blue-600 to-blue-800',
      isOnlinePromo: true
    },
    {
      name: 'Индивидуальный ораторский коучинг',
      startDate: 'Онлайн',
      startDate2: 'Офлайн',
      duration: 'Программа корректируется по запросу',
      schedule: 'По согласованию',
      spots: 'Набор открыт',
      color: 'from-orange to-primary',
      isCoaching: true
    },
    {
      name: 'Тренинги для корпоративных заказчиков',
      description: 'Курс ораторского искусства и импровизации для менеджеров, руководителей и всех специалистов, которые занимаются продажами, проводят презентации, выступают перед партнерами и клиентами.',
      duration: 'От 4 до 16+ академических часов',
      schedule: 'Однодневные/двухдневные тренинги с 10:00 до 17:00',
      spots: 'Формат по запросу',
      color: 'from-green-600 to-teal-600',
      isCorporate: true
    },
    {
      name: 'Актерский психологический курс "Перформанс-терапия"',
      description: 'Решаем психологические задачи творческим самовыражением через публичное выступление',
      duration: '4 месяца',
      spots: 'Набор открыт',
      color: 'from-primary to-secondary',
      isTheater: true,
      externalLink: 'https://performance-therapy-landing--preview.poehali.dev/'
    }
  ];

  return (
    <section id="schedule" className="py-10 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Расписание ближайших курсов</h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl px-4">
          Выберите удобное время и запишитесь уже сегодня
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 relative overflow-visible">
              {course.promoBadge && (
                <div className="absolute -top-3 right-4 z-10 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
                  {course.promoBadge}
                </div>
              )}
              {course.badge && (
                <div className="absolute -top-3 right-4 z-10 bg-gray-700 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wide">
                  {course.badge}
                </div>
              )}
              <CardHeader className={`bg-gradient-to-r ${course.color} text-white rounded-t-lg pb-4 md:pb-6`}>
                {course.type && (
                  <p className="text-sm font-medium uppercase tracking-wide opacity-80 mb-1">{course.type}</p>
                )}
                <CardTitle className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">{course.name}</CardTitle>
                {course.subtitle && (
                  <p className="text-lg md:text-xl opacity-90 font-semibold mt-2 tracking-wide">{course.subtitle}</p>
                )}
              </CardHeader>
              <CardContent className="pt-4 md:pt-6 space-y-3 md:space-y-4 text-lg md:text-xl">
                {course.isStorytellingCard && (
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg border bg-purple-50 border-purple-300">
                      <span className="font-bold text-xl block text-purple-900">{course.formatLabel}</span>
                    </div>
                    {course.tagline && (
                      <p className="text-secondary font-semibold leading-relaxed">{course.tagline}</p>
                    )}
                    {course.about && (
                      <div>
                        <p className="font-semibold mb-1">О чём курс</p>
                        <p className="text-muted-foreground leading-relaxed text-base">{course.about}</p>
                      </div>
                    )}
                    {course.uniqueness && (
                      <div>
                        <p className="font-semibold mb-1">Уникальность программы</p>
                        <ul className="space-y-1">
                          {course.uniqueness.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-base">
                              <span className="flex-shrink-0 font-bold text-secondary">{idx + 1}.</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {course.results && (
                      <div>
                        <p className="font-semibold mb-1">Что вы получите</p>
                        <ul className="space-y-1">
                          {course.results.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-base">
                              <Icon name="Check" size={16} className="text-secondary mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {course.audience && (
                      <div>
                        <p className="font-semibold mb-1">Кому подойдёт</p>
                        <ul className="space-y-1">
                          {course.audience.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-base">
                              <Icon name="ArrowRight" size={16} className="text-secondary mt-1 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
                {course.isCombined && course.groups && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <p className="font-semibold">Даты курса:</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {course.groups.map((g, gi) => (
                        <div
                          key={gi}
                          className={`p-3 rounded-lg border cursor-pointer transition-colors ${g.color === 'blue' ? 'bg-blue-50 border-blue-300 hover:bg-blue-100' : 'bg-purple-50 border-purple-300 hover:bg-purple-100'}`}
                          onClick={() => handleDateSelect(course.name, g.dates)}
                        >
                          <span className={`font-bold text-xl block ${g.color === 'blue' ? 'text-blue-900' : 'text-purple-900'}`}>{g.dates}</span>
                          <span className={`text-lg whitespace-pre-line ${g.color === 'blue' ? 'text-blue-700' : 'text-purple-700'}`}>{g.schedule}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {course.isCombined && course.features && (
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Состав курса</p>
                      <ul className="space-y-1">
                        {course.features.map((f, fi) => (
                          <li key={fi} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg">
                            <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                {course.description && (
                  <div className="flex items-start gap-3">
                    <Icon name="BookOpen" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                    </div>
                  </div>
                )}
                {!course.isCombined && course.features && (
                  <ul className="space-y-1">
                    {course.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg">
                        <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                {course.oldPrice && course.newPrice && (
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground line-through text-lg">{course.oldPrice}</span>
                    <span className="text-3xl font-bold text-primary">{course.newPrice}</span>
                  </div>
                )}
                {!course.isCorporate && !course.isCombined && course.startDate && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <p className="font-semibold">{course.isCoaching ? 'Выберите формат:' : 'Дата старта:'}</p>
                    </div>
                  {course.startDate2 ? (
                    <div className="flex flex-col gap-2">
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-colors cursor-pointer" onClick={() => handleDateSelect(course.name, course.startDate)}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={course.isCoaching ? "Monitor" : "Calendar"} size={16} className="text-blue-600 flex-shrink-0" />
                          <span className="font-semibold text-blue-900 text-lg">{course.startDate}</span>
                        </div>
                        {course.schedule && <p className="text-lg text-blue-700 ml-5">{course.schedule}</p>}
                      </div>
                      <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-300 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-colors cursor-pointer" onClick={() => handleDateSelect(course.name, course.startDate2)}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={course.isCoaching ? "MapPin" : "Calendar"} size={16} className="text-purple-600 flex-shrink-0" />
                          <span className="font-semibold text-purple-900 text-lg">{course.startDate2}</span>
                        </div>
                        {course.schedule2 && <p className="text-lg text-purple-700 ml-5">{course.schedule2}</p>}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={18} className="text-blue-600 flex-shrink-0" />
                        <span className="font-bold text-blue-900 text-xl">{course.startDate}</span>
                      </div>
                    </div>
                  )}
                </div>
                )}
                
                {course.duration && (
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      {!course.isDayGroup && !course.isSpecial && (
                        <p className="font-semibold">Продолжительность</p>
                      )}
                      <p className="text-muted-foreground text-lg">{course.duration}</p>
                    </div>
                  </div>
                )}

                {!course.startDate2 && course.schedule && (
                  <div className="flex items-start gap-3">
                    <Icon name="CalendarDays" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Расписание</p>
                      <p className="text-muted-foreground text-lg">{course.schedule}</p>
                    </div>
                  </div>
                )}

                {course.benefits && (
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">Подходит тем, кто хочет:</p>
                    <ul className="space-y-2">
                      {course.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {course.spots && (
                  <div className="pt-2 pb-2">
                    <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-lg font-semibold">
                      ✓ {course.spots}
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  {course.isOnlinePromo ? (
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                      asChild
                    >
                      <a href={course.buttonLink} target="_blank" rel="noopener noreferrer">
                        <Icon name="Zap" size={20} className="mr-2" />
                        Начать сейчас
                      </a>
                    </Button>
                  ) : course.isCorporate ? (
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                      onClick={() => {
                        trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                        handleDateSelect(course.name, 'Формат по запросу');
                      }}
                    >
                      <Icon name="UserPlus" size={20} className="mr-2" />
                      Записаться
                    </Button>
                  ) : (
                    <>
                      {course.isCoaching && (
                        <p className="text-base text-muted-foreground text-center mb-3">
                          Выберите формат и узнайте подробности
                        </p>
                      )}
                      {course.isCoaching ? (
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-6"
                          asChild
                        >
                          <a href="#individual">
                            <Icon name="Info" size={20} className="mr-2" />
                            Подробнее
                          </a>
                        </Button>
                      ) : course.isTheater ? (
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-6"
                          asChild
                        >
                          <a href={course.externalLink} target="_blank" rel="noopener noreferrer">
                            <Icon name="ExternalLink" size={20} className="mr-2" />
                            О курсе подробнее
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-6"
                          asChild
                        >
                          <a href="#pricing">
                            <Icon name="Info" size={20} className="mr-2" />
                            Подробнее
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ApplicationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          courseName={selectedCourse.name}
          courseDate={selectedCourse.date}
        />

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-3">
            Не нашли подходящее время? <a href="tel:+79183111712" className="text-primary font-semibold hover:underline" onClick={() => trackGoal(GOALS.PHONE_CLICK)}>Позвоните нам</a>, <a href="https://wa.me/message/FKFHPRMEDBRYP1" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline" onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}>напишите в WhatsApp</a> или <a href="https://max.ru/u/f9LHodD0cOLvTbH1OK3umoWq_Fy3X11Wi5Hy97U7oooxquX7NJ9GnWOYoYw" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">напишите в MAX</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;