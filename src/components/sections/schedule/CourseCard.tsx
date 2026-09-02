import { Course } from './scheduleData';
import CourseImageCard from './CourseImageCard';
import CourseDetailsCard from './CourseDetailsCard';

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
  if (course.image) {
    return (
      <CourseImageCard
        course={course}
        index={index}
        isStorytellingExpanded={isStorytellingExpanded}
        setIsStorytellingExpanded={setIsStorytellingExpanded}
        isTopicsExpanded={isTopicsExpanded}
        setIsTopicsExpanded={setIsTopicsExpanded}
        handleDateSelect={handleDateSelect}
      />
    );
  }

  return (
    <CourseDetailsCard
      course={course}
      index={index}
      isStorytellingExpanded={isStorytellingExpanded}
      setIsStorytellingExpanded={setIsStorytellingExpanded}
      isTopicsExpanded={isTopicsExpanded}
      setIsTopicsExpanded={setIsTopicsExpanded}
      handleDateSelect={handleDateSelect}
    />
  );
};

export default CourseCard;
