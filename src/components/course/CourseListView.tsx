"use client";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export function CourseListView({ courses }: { courses: any[] }) {
  const { savedCourses, toggleSavedCourse, openLessonModal } = useStore();

  return (
    <div className="space-y-4">
      {courses.map((course) => {
        const isSaved = savedCourses.includes(course.id);

        return (
          <div
            key={course.id}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
              {/* Course Image */}
              <div className="flex-shrink-0 mb-4 lg:mb-0">
                <Image
                  width={200}
                  height={150}
                  src={course.image}
                  alt={course.title}
                  className="w-full lg:w-48 h-32 object-cover rounded-lg"
                />
              </div>

              {/* Course Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2 text-sm">
                      {course.description}
                    </p>

                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <span>By {course.instructor}</span>
                      <span>•</span>
                      <button
                        onClick={() => openLessonModal(course)}
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        {course.lessons} Lessons
                      </button>
                      <span>•</span>
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-3 ml-4">
                    <Button
                      variant="default"
                      onClick={() => toggleSavedCourse(course.id)}
                      className={`p-2 rounded-full transition-colors cursor-pointer ${
                        isSaved
                          ? "bg-[#7B61FF] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <FiBookmark className="text-xl" />
                    </Button>
                  </div>
                </div>

                {/* Price and Enroll */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    {course.currency}
                    {course.price.toLocaleString()}
                  </span>

                  <Button
                    variant="default"
                    className="bg-[#7B61FF] hover:bg-indigo-700 text-white text-sm cursor-pointer"
                  >
                    Enroll Now
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
