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
      name: 'Ораторское мастерство с нуля (базовый курс) - первая ступень',
      startDate: '17 января - 21 февраля 2026',
      startDate2: '19 января - 19 февраля 2026',
      duration: '10 занятий, 20 часов практики',
      schedule: 'Суббота, 11:00-14:00',
      schedule2: 'Понедельник, Среда, 14:00-16:00',
      spots: 'Набор открыт',
      color: 'from-primary to-primary/80'
    },
    {
      name: 'Ораторское мастерство с нуля (базовый курс) - первая ступень',
      startDate: '16 января 2026',
      duration: '10 занятий, 20 часов практики',
      schedule: 'Пятница, 18:00-20:00',
      spots: 'Набор открыт',
      color: 'from-primary to-primary/80',
      isEvening: true
    },
    {
      name: 'Полный курс ораторского искусства "Своя игра" - первая и вторая ступень',
      startDate: '11 марта - 13 мая 2026',
      duration: '2 месяца, 40 часов практики',
      schedule: 'Понедельник и Среда, 19:00-21:00',
      spots: 'Набор открыт',
      color: 'from-secondary to-secondary/80',
      isPopular: true
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
      startDate: '30 ноября - 4 марта 2026',
      duration: '3 месяца',
      schedule: 'Понедельник, Среда, 19:00-21:00',
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
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-4">
          Выберите удобное время и запишитесь уже сегодня
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 relative overflow-visible">
              {index === 0 && (
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-2">
                      <Icon name="Sun" size={16} />
                      <span className="font-bold text-sm whitespace-nowrap">Дневная группа</span>
                    </div>
                  </div>
                </div>
              )}
              {course.isEvening && !course.isPopular && (
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-2">
                      <Icon name="Moon" size={16} />
                      <span className="font-bold text-sm whitespace-nowrap">Вечерняя группа</span>
                    </div>
                  </div>
                </div>
              )}
              {course.isPopular && (
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={16} />
                      <span className="font-bold text-sm whitespace-nowrap">Популярный курс</span>
                    </div>
                  </div>
                </div>
              )}
              <CardHeader className={`bg-gradient-to-r ${course.color} text-white rounded-t-lg pb-4 md:pb-6`}>
                <CardTitle className="text-lg md:text-xl">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 md:pt-6 space-y-3 md:space-y-4 text-sm md:text-base">
                {course.description && (
                  <div className="mb-4">
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>
                )}
                {!course.isCorporate && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name="Calendar" size={20} className="text-primary" />
                      <p className="font-semibold">{course.isCoaching ? 'Выберите формат:' : 'Выберите дату старта:'}</p>
                    </div>
                  {course.startDate2 ? (
                    <div className="flex flex-col gap-2">
                      <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-colors cursor-pointer" onClick={() => handleDateSelect(course.name, course.startDate)}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={course.isCoaching ? "Monitor" : "Calendar"} size={16} className="text-blue-600 flex-shrink-0" />
                          <span className="font-semibold text-blue-900 text-sm">{course.startDate}</span>
                        </div>
                        {course.schedule && index === 0 && <p className="text-xs text-blue-700 ml-5">{course.schedule}</p>}
                      </div>
                      <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-300 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-colors cursor-pointer" onClick={() => handleDateSelect(course.name, course.startDate2)}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={course.isCoaching ? "MapPin" : "Calendar"} size={16} className="text-purple-600 flex-shrink-0" />
                          <span className="font-semibold text-purple-900 text-sm">{course.startDate2}</span>
                        </div>
                        {course.schedule2 && index === 0 && <p className="text-xs text-purple-700 ml-5">{course.schedule2}</p>}
                      </div>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300 hover:from-blue-100 hover:to-blue-200 hover:border-blue-400 text-blue-900 font-semibold"
                      onClick={() => handleDateSelect(course.name, course.startDate)}
                    >
                      <Icon name="Calendar" size={18} className="mr-2" />
                      {course.startDate}
                    </Button>
                  )}
                </div>
                )}
                
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Продолжительность</p>
                    <p className="text-muted-foreground">{course.duration}</p>
                  </div>
                </div>

                {!course.startDate2 && course.schedule && (
                  <div className="flex items-start gap-3">
                    <Icon name="CalendarDays" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Расписание</p>
                      <p className="text-muted-foreground text-sm">{course.schedule}</p>
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
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 pb-2">
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ {course.spots}
                  </div>
                </div>

                <div className="pt-2">
                  {course.isCorporate ? (
                    <Button
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => {
                        trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                        handleDateSelect(course.name, 'Формат по запросу');
                      }}
                    >
                      <Icon name="UserPlus" size={18} className="mr-2" />
                      Записаться
                    </Button>
                  ) : (
                    <>
                      <p className="text-xs text-muted-foreground text-center mb-3">
                        {course.isCoaching ? 'Выберите формат и узнайте подробности' : 'Выберите дату выше, чтобы записаться'}
                      </p>
                      {course.isCoaching ? (
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          asChild
                        >
                          <a href="#individual">
                            <Icon name="Info" size={18} className="mr-2" />
                            Подробнее
                          </a>
                        </Button>
                      ) : course.isTheater ? (
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          asChild
                        >
                          <a href={course.externalLink} target="_blank" rel="noopener noreferrer">
                            <Icon name="ExternalLink" size={18} className="mr-2" />
                            О курсе подробнее
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                          asChild
                        >
                          <a href="#pricing">
                            <Icon name="DollarSign" size={18} className="mr-2" />
                            Узнать стоимость
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
            Не нашли подходящее время? <a href="tel:+79183111712" className="text-primary font-semibold hover:underline" onClick={() => trackGoal(GOALS.PHONE_CLICK)}>Позвоните нам</a> или <a href="https://wa.me/message/FKFHPRMEDBRYP1" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline" onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}>напишите в WhatsApp</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;