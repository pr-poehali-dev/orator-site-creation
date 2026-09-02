import { Course } from './scheduleData';

interface CourseCardBadgesProps {
  course: Course;
}

const CourseCardBadges = ({ course }: CourseCardBadgesProps) => (
  <>
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
  </>
);

export default CourseCardBadges;
