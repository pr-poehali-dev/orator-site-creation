import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';
import { Course } from './scheduleData';

interface CourseCardProps {
  course: Course;
  index: number;
  isStorytellingExpanded: boolean;
  setIsStorytellingExpanded: (value: boolean) => void;
  isTopicsExpanded: boolean;
  setIsTopicsExpanded: (value: boolean) => void;
  handleDateSelect: (courseName: string, date: string) => void;
}

const CourseCard = ({
  course,
  index,
  isStorytellingExpanded,
  setIsStorytellingExpanded,
  isTopicsExpanded,
  setIsTopicsExpanded,
  handleDateSelect
}: CourseCardProps) => {
  const [isImageCardExpanded, setIsImageCardExpanded] = useState(false);

  if (course.image) {
    return (
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
          {course.isCorporate && course.duration && (
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={18} className="text-primary flex-shrink-0" />
              <span className="text-muted-foreground">{course.duration}</span>
            </div>
          )}
          {(course.cardPrice || course.oldPrice) && (
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
              {course.description && (
                <div className="flex items-start gap-3">
                  <Icon name="BookOpen" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>
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
  }

  return (
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
            {course.aboutPoints && (
              <div>
                <p className="font-semibold mb-1">О чём курс</p>
                <ul className="space-y-1">
                  {course.aboutPoints.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg md:text-xl">
                      <Icon name="Dot" size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {isStorytellingExpanded && (
              <>
                {course.uniqueness && (
                  <div>
                    <p className="font-semibold mb-1">Уникальность программы</p>
                    <ul className="space-y-1">
                      {course.uniqueness.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg md:text-xl">
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
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg md:text-xl">
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
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg md:text-xl">
                          <Icon name="ArrowRight" size={16} className="text-secondary mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            <button
              type="button"
              onClick={() => setIsStorytellingExpanded(!isStorytellingExpanded)}
              className="flex items-center gap-1 text-primary font-semibold text-lg md:text-xl hover:underline"
            >
              {isStorytellingExpanded ? 'Свернуть' : 'Читать подробнее'}
              <Icon name={isStorytellingExpanded ? 'ChevronUp' : 'ChevronDown'} size={18} />
            </button>
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
                  <span className={`text-lg md:text-xl whitespace-pre-line ${g.color === 'blue' ? 'text-blue-700' : 'text-purple-700'}`}>{g.schedule}</span>
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
                  <li key={fi} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg md:text-xl">
                    <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                    {f}
                  </li>
                ))}
                {course.topics && (
                  <li>
                    <button
                      type="button"
                      onClick={() => setIsTopicsExpanded(!isTopicsExpanded)}
                      className="flex items-center gap-2 text-primary font-semibold text-lg md:text-xl hover:underline"
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
                  </li>
                )}
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
              <li key={fi} className="flex items-start gap-2 text-muted-foreground leading-relaxed text-lg md:text-xl">
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
  );
};

export default CourseCard;