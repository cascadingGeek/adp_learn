"use client";

import { Course } from "@/utils/types";
import CourseCard from "./CourseCard";
import { FiBookOpen } from "react-icons/fi";

interface CourseGridProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
}

export default function CourseGrid({
  courses,
  title,
  subtitle,
}: CourseGridProps) {
  return (
    <div className="space-y-6">
      {(title || subtitle) && (
        <div className="text-center lg:text-left">
          {title && (
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <FiBookOpen className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No courses found
          </h3>
          <p className="text-gray-600">
            Start exploring courses to add them to your saved list.
          </p>
        </div>
      )}
    </div>
  );
}
