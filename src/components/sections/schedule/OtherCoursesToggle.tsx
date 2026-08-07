import Icon from '@/components/ui/icon';
import { Course } from './scheduleData';
import CourseCard from './CourseCard';

interface OtherCoursesToggleProps {
  otherCourses: Course[];
  isOtherCoursesExpanded: boolean;
  setIsOtherCoursesExpanded: (value: boolean) => void;
  isStorytellingExpanded: boolean;
  setIsStorytellingExpanded: (value: boolean) => void;
  isTopicsExpanded: boolean;
  setIsTopicsExpanded: (value: boolean) => void;
  handleDateSelect: (courseName: string, date: string) => void;
}

const OtherCoursesToggle = ({
  otherCourses,
  isOtherCoursesExpanded,
  setIsOtherCoursesExpanded,
  isStorytellingExpanded,
  setIsStorytellingExpanded,
  isTopicsExpanded,
  setIsTopicsExpanded,
  handleDateSelect
}: OtherCoursesToggleProps) => {
  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setIsOtherCoursesExpanded(!isOtherCoursesExpanded)}
        className="flex items-center gap-2 mx-auto text-primary font-semibold text-lg md:text-xl hover:underline"
      >
        <Icon name="LayoutGrid" size={20} />
        {isOtherCoursesExpanded ? 'Скрыть другие курсы' : 'Другие курсы'}
        <Icon name={isOtherCoursesExpanded ? 'ChevronUp' : 'ChevronDown'} size={18} />
      </button>
      {isOtherCoursesExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-6">
          {otherCourses.map((course, index) => (
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
      )}
    </div>
  );
};

export default OtherCoursesToggle;
