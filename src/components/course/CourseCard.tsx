"use client";

import Image from "next/image";
import { Course } from "@/store/useStore";
import { useStore } from "@/store/useStore";
import { FiClock, FiBookmark, FiPlay } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { savedCourses, toggleSavedCourse, openLessonModal } = useStore();
  const isSaved = savedCourses.includes(course.id);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <Image
          width={200}
          height={150}
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => toggleSavedCourse(course.id)}
          className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
            isSaved
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          <FiBookmark className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => openLessonModal(course)}
            className="flex items-center text-sm text-indigo-600 hover:text-indigo-700 font-medium"
          >
            <FiPlay className="w-4 h-4 mr-1" />
            {course.lessons} Lessons
          </button>

          <div className="flex items-center text-sm text-gray-500">
            <FiClock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {course.currency}
            {course.price.toLocaleString()}
          </span>

          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-sm">
            Get
          </Button>
        </div>
      </div>
    </div>
  );
}
