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
      name: 'Ораторское мастерство с нуля (базовый курс)',
      startDate: '24 ноября - 24 декабря 2025',
      startDate2: '19 января - 19 февраля 2026',
      duration: '8 занятий',
      schedule: 'Дневная группа: Понедельник, Среда, 13:00-15:00',
      spots: 'Набор открыт',
      color: 'from-primary to-primary/80'
    },
    {
      name: 'Ораторское мастерство с нуля (базовый курс)',
      startDate: '16 января 2026',
      duration: '1,5 месяца, 8 занятий',
      schedule: 'Вечерняя группа: Пятница, 18:00-20:00',
      spots: 'Набор открыт',
      color: 'from-primary to-primary/80',
      isEvening: true
    },
    {
      name: 'Полный курс ораторского искусства "Своя игра"',
      startDate: '11 марта - 13 мая 2026',
      duration: '2 месяца, 40 часов практики',
      schedule: 'Вечерняя группа: Понедельник и Среда, 19:00-21:00',
      spots: 'Набор открыт',
      color: 'from-secondary to-secondary/80',
      isPopular: true
    },
    {
      name: 'Актерский психологический курс "Перформанс-терапия"',
      startDate: '28 ноября 2025',
      duration: '3 месяца',
      schedule: 'Пн, Ср, Пт, 19:00-21:00',
      spots: 'Набор открыт',
      color: 'from-primary to-secondary'
    }
  ];

  return (
    <section id="schedule" className="py-14 px-4 bg-white">
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
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Calendar" size={20} className="text-primary" />
                    <p className="font-semibold">Выберите дату старта:</p>
                  </div>
                  {index === 0 && course.startDate2 ? (
                    <div className="flex flex-col gap-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300 hover:from-blue-100 hover:to-blue-200 hover:border-blue-400 text-blue-900 font-semibold"
                        onClick={() => handleDateSelect(course.name, course.startDate)}
                      >
                        <Icon name="Calendar" size={18} className="mr-2" />
                        {course.startDate}
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-gradient-to-r from-purple-50 to-purple-100 border-purple-300 hover:from-purple-100 hover:to-purple-200 hover:border-purple-400 text-purple-900 font-semibold"
                        onClick={() => handleDateSelect(course.name, course.startDate2)}
                      >
                        <Icon name="Calendar" size={18} className="mr-2" />
                        {course.startDate2}
                      </Button>
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
                
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Продолжительность</p>
                    <p className="text-muted-foreground">{course.duration}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Icon name="CalendarDays" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Расписание</p>
                    <p className="text-muted-foreground">{course.schedule}</p>
                  </div>
                </div>

                <div className="pt-2 pb-2">
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    ✓ {course.spots}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-muted-foreground text-center mb-2">
                    Выберите дату выше, чтобы записаться
                  </p>
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

        <div className="mt-8 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
          <p className="text-base mb-3">
            <span className="font-bold">Не нашли подходящее время?</span> Свяжитесь с нами
          </p>
          <Button 
            variant="outline"
            asChild
          >
            <a 
              href="tel:+79183111712" 
              className="inline-flex items-center gap-2"
              onClick={() => trackGoal(GOALS.PHONE_CLICK)}
            >
              <Icon name="Phone" size={18} />
              Позвонить
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;