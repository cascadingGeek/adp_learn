"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import CourseGrid from "@/components/course/CourseGrid";
import LessonModal from "@/components/course/LessonModal";
import {
  FiBookmark,
  FiSearch,
  FiTrash2,
  FiExternalLink,
  FiPlay,
  FiUser,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SavedCoursesPage() {
  const { courses, savedCourses, toggleSavedCourse } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"title" | "category" | "recent">(
    "recent"
  );

  // Filter saved courses
  const savedCoursesList = courses.filter(
    (course) =>
      savedCourses.includes(course.id) &&
      (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Sort saved courses
  const sortedCourses = [...savedCoursesList].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "category":
        return a.category.localeCompare(b.category);
      case "recent":
      default:
        return 0; // Keep original order for recent
    }
  });

  const handleRemoveAll = () => {
    if (window.confirm("Are you sure you want to remove all saved courses?")) {
      savedCourses.forEach((courseId) => {
        toggleSavedCourse(courseId);
      });
    }
  };

  // Empty State Component
  function EmptySavedCoursesState() {
    return (
      <div className="text-center py-16">
        <div className="text-gray-300 mb-6">
          <FiBookmark className="w-24 h-24 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          No saved courses yet
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Start exploring our course catalog and save courses you&apos;re
          interested in for easy access later.
        </p>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FiSearch className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Explore Courses</h4>
            <p className="text-sm text-gray-600">
              Browse our extensive course catalog
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FiPlay className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">Start Learning</h4>
            <p className="text-sm text-gray-600">
              Jump into any course immediately
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <FiUser className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-1">
              Learn with Experts
            </h4>
            <p className="text-sm text-gray-600">
              Learn from industry professionals
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/courses">
            <Button className="bg-[#7B61FF] hover:bg-indigo-700 text-white cursor-pointer">
              Browse All Courses
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" className="cursor-pointer">
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Helper Functions
  function calculateTotalDuration(courses: any[]): string {
    const totalMinutes = courses.reduce((total, course) => {
      const duration = course.duration || "0 hours";
      const hours = parseFloat(duration.split(" ")[0]) || 0;
      return total + hours * 60;
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) {
      return `${hours}h ${minutes > 0 ? `${Math.round(minutes)}m` : ""}`;
    }
    return `${Math.round(minutes)}m`;
  }

  function getUniqueCategories(courses: any[]): string[] {
    return [...new Set(courses.map((course) => course.category))];
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              <FiBookmark className="inline-block w-8 h-8 mr-3 text-indigo-600" />
              Saved Courses
            </h1>
            <p className="text-gray-600 mb-4">
              Your bookmarked courses for easy access and future learning
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                {savedCourses.length} courses saved
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Ready to learn
              </span>
            </div>
          </div>

          {savedCourses.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/courses">
                <Button
                  variant="outline"
                  className="flex items-center cursor-pointer"
                >
                  <FiExternalLink className="w-4 h-4 mr-2" />
                  Browse More
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={handleRemoveAll}
                className="flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 cursor-pointer"
              >
                <FiTrash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Search and Sort Section */}
      {savedCourses.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search saved courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "title" | "category" | "recent")
                }
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
              >
                <option value="recent">Recently Added</option>
                <option value="title">Title A-Z</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Results Summary */}
      {savedCourses.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-gray-600">
            <span className="font-medium text-gray-900">
              {sortedCourses.length}
            </span>
            {searchTerm ? " courses found" : " saved courses"}
          </div>

          {/* Quick Stats */}
          <div className="hidden sm:flex items-center space-x-6 text-sm text-gray-500">
            <span>Total Duration: {calculateTotalDuration(sortedCourses)}</span>
            <span>Categories: {getUniqueCategories(sortedCourses).length}</span>
          </div>
        </div>
      )}

      {/* Course Grid */}
      {sortedCourses.length > 0 ? (
        <CourseGrid courses={sortedCourses} />
      ) : savedCourses.length > 0 ? (
        // No search results
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <FiSearch className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No courses found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms to find your saved courses.
          </p>
          <Button
            onClick={() => setSearchTerm("")}
            variant="outline"
            className="cursor-pointer"
          >
            Clear Search
          </Button>
        </div>
      ) : (
        // Empty saved courses state
        <EmptySavedCoursesState />
      )}

      {/* Course Categories Summary */}
      {sortedCourses.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Your Learning Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {getUniqueCategories(sortedCourses).map((category) => {
              const count = sortedCourses.filter(
                (course) => course.category === category
              ).length;
              return (
                <div
                  key={category}
                  className="flex items-center bg-gray-50 px-3 py-2 rounded-lg"
                >
                  <span className="text-sm font-medium text-gray-700">
                    {category}
                  </span>
                  <span className="ml-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <LessonModal />
    </div>
  );
}
