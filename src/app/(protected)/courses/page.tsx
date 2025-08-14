"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import CourseGrid from "@/components/course/CourseGrid";
import LessonModal from "@/components/course/LessonModal";
import { FiSearch, FiFilter, FiGrid, FiList } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { CourseListView } from "@/components/course/CourseListView";
import { categories } from "@/utils/data";

export default function CoursesPage() {
  const { courses } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter courses based on search and category
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#7B61FF] text-white rounded-lg p-3 text-center">
        <h2 className="text-sm font-medium mb-2">
          Courses to get you started.{" "}
          <span className="font-light">
            Explore courses from experienced, real-world experts.
          </span>
        </h2>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "grid"
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === "list"
                    ? "bg-white text-indigo-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.slice(1).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-gray-600">
          <span className="font-medium text-gray-900">
            {filteredCourses.length}
          </span>{" "}
          courses found
          {selectedCategory !== "All Courses" && (
            <span className="ml-2">
              in{" "}
              <span className="font-medium text-indigo-600">
                {selectedCategory}
              </span>
            </span>
          )}
        </div>

        <Button variant="outline" className="flex items-center space-x-2">
          <FiFilter className="w-4 h-4" />
          <span>More Filters</span>
        </Button>
      </div>

      {/* Course Grid/List */}
      {viewMode === "grid" ? (
        <CourseGrid courses={filteredCourses} />
      ) : (
        <CourseListView courses={filteredCourses} />
      )}

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <FiSearch className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No courses found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search terms or filters to find what you&apos;re
            looking for.
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All Courses");
            }}
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      )}

      <LessonModal />
    </div>
  );
}
