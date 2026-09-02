import { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import CountdownTimer from '@/components/ui/countdown-timer';
import { trackGoal, GOALS } from '@/utils/goals';
import { Course } from './scheduleData';
import CourseCardBadges from './CourseCardBadges';

interface CourseVariantProps {
  course: Course;
  index: number;
  isStorytellingExpanded: boolean;
  setIsStorytellingExpanded: (value: boolean) => void;
  isTopicsExpanded: boolean;
  setIsTopicsExpanded: (value: boolean) => void;
  handleDateSelect: (courseName: string, date: string) => void;
}

const CourseImageCard = ({
  course,
  index,
  isTopicsExpanded,
  setIsTopicsExpanded,
  handleDateSelect
}: CourseVariantProps) => {
  const [isImageCardExpanded, setIsImageCardExpanded] = useState(false);

  return (
      <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2 relative overflow-visible">
        <CourseCardBadges course={course} />
        <img src={course.image} alt={course.name} className="w-full h-auto rounded-t-lg" />
        <CardContent className="pt-4 md:pt-6 space-y-3 md:space-y-4 text-lg md:text-xl">
          <CardTitle className="text-xl md:text-2xl font-bold leading-snug tracking-tight text-foreground">
            {course.name}
          </CardTitle>
          {course.locationLabel && (
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={18} className="text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{course.locationLabel}</span>
            </div>
          )}
          {course.isCombined && course.groups && (
            <div className="flex flex-col gap-2">
              {course.groups.map((g, gi) => (
                <div
                  key={gi}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${g.color === 'blue' ? 'bg-blue-50 border-blue-300 hover:bg-blue-100' : 'bg-purple-50 border-purple-300 hover:bg-purple-100'}`}
                  onClick={() => handleDateSelect(course.name, g.dates)}
                >
                  <span className={`font-bold text-lg block ${g.color === 'blue' ? 'text-blue-900' : 'text-purple-900'}`}>{g.dates}</span>
                  <span className={`text-base whitespace-pre-line ${g.color === 'blue' ? 'text-blue-700' : 'text-purple-700'}`}>{g.schedule}</span>
                </div>
              ))}
            </div>
          )}
          {course.isCoaching && course.startDate && (
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-colors cursor-pointer" onClick={() => handleDateSelect(course.name, course.startDate!)}>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="Monitor" size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-blue-900 text-lg">{course.startDate}</span>
                </div>
                {course.schedule && <p className="text-base text-blue-700 ml-5">{course.schedule}</p>}
              </div>
              {course.startDate2 && (
                <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-300 rounded-lg hover:from-purple-100 hover:to-purple-200 transition-colors cursor-pointer" onClick={() => handleDateSelect(course.name, course.startDate2!)}>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="MapPin" size={16} className="text-purple-600 flex-shrink-0" />
                    <span className="font-semibold text-purple-900 text-lg">{course.startDate2}</span>
                  </div>
                  {course.schedule2 && <p className="text-base text-purple-700 ml-5">{course.schedule2}</p>}
                </div>
              )}
            </div>
          )}
          {(course.isCorporate || course.isTheater || course.isStorytellingCard) && course.duration && (
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={18} className="text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{course.duration}</span>
            </div>
          )}
          {course.promoPrice ? (
            <div className="p-3 bg-red-50 border border-red-300 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground line-through text-lg">{course.cardOldPrice || course.oldPrice}</span>
                <span className="text-3xl font-bold text-red-600">{course.promoPrice}</span>
              </div>
              {course.promoDeadline && (
                <p className="text-red-600 font-semibold text-sm mt-1">{course.promoDeadline}</p>
              )}
              {course.promoDeadlineDate && (
                <CountdownTimer targetDate={course.promoDeadlineDate} className="mt-2" />
              )}
            </div>
          ) : (course.cardPrice || course.oldPrice) && (
            <div className="flex items-center gap-3">
              {(course.cardOldPrice || course.oldPrice) && (
                <span className="text-muted-foreground line-through text-lg">{course.cardOldPrice || course.oldPrice}</span>
              )}
              <span className="text-3xl font-bold text-primary">{course.cardPrice || course.newPrice}</span>
            </div>
          )}
          {course.spots && (
            <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-base font-semibold">
              ✓ {course.spots}
            </div>
          )}
          <button
            type="button"
            onClick={() => setIsImageCardExpanded(!isImageCardExpanded)}
            className="flex items-center gap-1 text-primary font-semibold text-lg hover:underline"
          >
            {isImageCardExpanded ? 'Свернуть' : 'Подробнее о курсе'}
            <Icon name={isImageCardExpanded ? 'ChevronUp' : 'ChevronDown'} size={18} />
          </button>
          {isImageCardExpanded && (
            <>
              {course.tagline && (
                <p className="text-secondary font-semibold leading-relaxed">{course.tagline}</p>
              )}
              {course.description && (
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>
                </div>
              )}
              {course.aboutPoints && (
                <div>
                  <p className="font-semibold mb-1">О чём курс</p>
                  <ul className="space-y-1">
                    {course.aboutPoints.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-base">
                        <Icon name="Dot" size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
              {course.isCorporate && course.schedule && (
                <div className="flex items-start gap-3">
                  <Icon name="CalendarDays" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Расписание</p>
                    <p className="text-muted-foreground text-lg">{course.schedule}</p>
                  </div>
                </div>
              )}
              {course.features && (
                <ul className="space-y-1">
                  {course.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg md:text-xl">
                      <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              {course.topics && (
                <div>
                  <button
                    type="button"
                    onClick={() => setIsTopicsExpanded(!isTopicsExpanded)}
                    className="flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
                  >
                    <Icon name="ListChecks" size={18} className="flex-shrink-0" />
                    {isTopicsExpanded ? 'Скрыть темы занятий' : 'Темы занятий'}
                    <Icon name={isTopicsExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
                  </button>
                  {isTopicsExpanded && (
                    <ul className="space-y-1 mt-2">
                      {course.topics.map((t, ti) => (
                        <li key={ti} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-base">
                          <span className="flex-shrink-0 font-bold text-primary">{ti + 1}.</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </>
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
            ) : course.isCombined && course.groups ? (
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                onClick={() => handleDateSelect(course.name, course.groups![0].dates)}
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Записаться на курс
              </Button>
            ) : course.isCoaching ? (
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                onClick={() => handleDateSelect(course.name, course.startDate || '')}
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Записаться
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
            ) : course.isStorytellingCard ? (
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-lg py-6"
                onClick={() => {
                  trackGoal(GOALS.COURSE_SIGNUP_CLICK);
                  handleDateSelect(course.name, 'Индивидуальный формат');
                }}
              >
                <Icon name="UserPlus" size={20} className="mr-2" />
                Записаться на курс
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
          </div>
        </CardContent>
      </Card>
  );
};

export default CourseImageCard;
