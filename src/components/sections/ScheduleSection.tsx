import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const ScheduleSection = () => {
  const courses = [
    {
      name: 'Ораторское мастерство с нуля (базовый курс)',
      startDate: '26 октября 2025',
      duration: '8 занятий по субботам',
      schedule: 'Суббота, 11:00-13:00',
      spots: 'Набор открыт',
      color: 'from-primary to-primary/80'
    },
    {
      name: 'Ораторский курс "Своя игра" (расширенный)',
      startDate: '19 января 2026',
      duration: '2 месяца',
      schedule: 'Понедельник и Среда, 19:00-21:00',
      spots: 'Набор открыт',
      color: 'from-secondary to-secondary/80'
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Расписание ближайших курсов</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Выберите удобное время и запишитесь уже сегодня
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2">
              <CardHeader className={`bg-gradient-to-r ${course.color} text-white rounded-t-lg pb-6`}>
                <CardTitle className="text-xl">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Старт курса</p>
                    <p className="text-muted-foreground">{course.startDate}</p>
                  </div>
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

                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  asChild
                >
                  <a href="#contact" onClick={() => trackGoal(GOALS.COURSE_SIGNUP_CLICK)}>
                    Записаться на курс
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

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