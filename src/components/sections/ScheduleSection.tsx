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
      name: 'Ораторское мастерство с нуля (1 ступень)',
      startDate: '25 марта - 25 апреля 2026',
      duration: '8 групповых тренингов + 1 индивидуальное занятие + 1 тренинг по импровизации',
      schedule: 'Понедельник, Среда, 14:00-16:00',
      spots: 'Идёт набор на дневной поток',
      color: 'from-green-500 to-emerald-500',
      isDayGroup: true
    },
    {
      name: 'Ораторское мастерство с нуля (1 ступень)',
      startDate: '16 мая - 4 июля 2026',
      duration: '8 групповых тренингов + 1 индивидуальное занятие + 1 тренинг по импровизации',
      schedule: 'Суббота, 11:00-13:00',
      spots: 'Идёт набор на субботнюю группу',
      color: 'from-green-500 to-emerald-500',
      isDayGroup: true
    },
    {
      name: 'Углублённый курс ораторского искусства и импровизации "Своя игра"',
      startDate: 'Старт: 18 марта 2026 г.',
      duration: 'Продолжительность: 1,5 месяца',
      description: '10 групповых тренингов + 2 индивидуальных занятия + 1 тренинг импровизации',
      schedule: 'Понедельник, Среда, 14:00-16:00 (дневная группа)',
      spots: 'Набор открыт',
      color: 'from-secondary to-secondary/80',
      isAdvanced: true
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
      duration: '3 месяца',
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
              {course.isDayGroup && (
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-full shadow-xl transform -rotate-3 hover:rotate-0 transition-transform animate-pulse">
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={18} />
                      <span className="font-bold text-base whitespace-nowrap">ИДЁТ НАБОР</span>
                    </div>
                  </div>
                </div>
              )}
              {course.isAdvanced && (
                <div className="absolute -top-3 -left-3 z-10">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform">
                    <div className="flex items-center gap-2">
                      <Icon name="Trophy" size={16} />
                      <span className="font-bold text-sm whitespace-nowrap">2 ступень</span>
                    </div>
                  </div>
                </div>
              )}
              <CardHeader className={`bg-gradient-to-r ${course.color} text-white rounded-t-lg pb-4 md:pb-6`}>
                <CardTitle className="text-xl md:text-2xl">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 md:pt-6 space-y-3 md:space-y-4 text-lg md:text-xl">
                {course.description && (
                  <div className="mb-4">
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>
                )}
                {!course.isCorporate && course.startDate && (
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
                          <span className="font-semibold text-blue-900 text-base">{course.startDate}</span>
                        </div>
                        {course.schedule && <p className="text-sm text-blue-700 ml-5">{course.schedule}</p>}
                      </div>
                      <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-300 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-colors cursor-pointer" onClick={() => handleDateSelect(course.name, course.startDate2)}>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name={course.isCoaching ? "MapPin" : "Calendar"} size={16} className="text-purple-600 flex-shrink-0" />
                          <span className="font-semibold text-purple-900 text-base">{course.startDate2}</span>
                        </div>
                        {course.schedule2 && <p className="text-sm text-purple-700 ml-5">{course.schedule2}</p>}
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} className="text-blue-600 flex-shrink-0" />
                        <span className="font-semibold text-blue-900 text-base">{course.startDate}</span>
                      </div>
                    </div>
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
                      <p className="text-muted-foreground text-base">{course.schedule}</p>
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
                          <span className="text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 pb-2">
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-base font-semibold">
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
                      {course.isCoaching && (
                        <p className="text-xs text-muted-foreground text-center mb-3">
                          Выберите формат и узнайте подробности
                        </p>
                      )}
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
                            <Icon name="Info" size={18} className="mr-2" />
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
            Не нашли подходящее время? <a href="tel:+79183111712" className="text-primary font-semibold hover:underline" onClick={() => trackGoal(GOALS.PHONE_CLICK)}>Позвоните нам</a> или <a href="https://wa.me/message/FKFHPRMEDBRYP1" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline" onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}>напишите в WhatsApp</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;