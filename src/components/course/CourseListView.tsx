"use client";
import { useStore } from "@/store/useStore";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FiBookmark } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Course } from "@/utils/types";
import { useRouter } from "next/navigation";
import { FaListUl } from "react-icons/fa";

export function CourseListView({ courses }: { courses: Course[] }) {
  const router = useRouter();
  const { savedCourses, toggleSavedCourse } = useStore();

  const handlePlayClick = (course: string) => {
    router.push(`/courses/${course}`);
  };

  return (
    <div className="space-y-4">
      {courses.map((course) => {
        const isSaved = savedCourses.includes(course.id);

        return (
          <div
            key={course.id}
            className="rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              {/* Course Image */}
              <div
                className="relative w-[300px] h-48 rounded-2xl"
                style={{
                  background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 100%), url('${course.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button
                  variant="default"
                  size="icon"
                  onClick={() => toggleSavedCourse(course.id)}
                  className={`absolute top-3 right-3 rounded-full transition-colors cursor-pointer ${
                    isSaved
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <FiBookmark className="w-4 h-4" />
                </Button>
                <FaRegCirclePlay className="text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              {/* Course Info */}
              <div className="flex-1 min-w-0 space-y-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-base text-[#54656F] mb-4 line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-sm text-[#667085] font-light p-0 h-auto"
                  >
                    <FaListUl className="text-lg text-[#667085]" />
                    {course.lessons} Lessons
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => handlePlayClick(course.slug)}
                    className="flex items-center text-sm text-[#7B61FF] hover:text-[#7B61FF] border-2 border-[#7B61FF] outline-[#7B61FF] cursor-pointer px-2 py-1 rounded-full h-auto font-light"
                  >
                    Start Learning
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
