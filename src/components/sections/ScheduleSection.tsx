import { trackGoal, GOALS } from '@/utils/goals';
import { useState } from 'react';
import ApplicationModal from '@/components/ApplicationModal';
import { courses } from './schedule/scheduleData';
import CourseCard from './schedule/CourseCard';

const ScheduleSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({ name: '', date: '' });
  const [isStorytellingExpanded, setIsStorytellingExpanded] = useState(false);
  const [isTopicsExpanded, setIsTopicsExpanded] = useState(false);

  const handleDateSelect = (courseName: string, date: string) => {
    setSelectedCourse({ name: courseName, date });
    setModalOpen(true);
    trackGoal(GOALS.COURSE_SIGNUP_CLICK);
  };

  return (
    <section id="schedule" className="py-10 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4">Расписание ближайших курсов</h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl px-4">
          Выберите удобное время и запишитесь уже сегодня
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              index={index}
              isStorytellingExpanded={isStorytellingExpanded}
              setIsStorytellingExpanded={setIsStorytellingExpanded}
              isTopicsExpanded={isTopicsExpanded}
              setIsTopicsExpanded={setIsTopicsExpanded}
              handleDateSelect={handleDateSelect}
            />
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
