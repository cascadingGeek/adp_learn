"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import CourseGrid from "@/components/course/CourseGrid";
import { FiSearch, FiGrid, FiList } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { CourseListView } from "@/components/course/CourseListView";
import { IoSettingsOutline } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import FilterDialog, { FilterState } from "@/components/course/FilterDialog";

export default function CoursesPage() {
  const { courses } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    skillLevel: [],
    skillArea: [],
    contentPreference: [],
    learningStyle: [],
    peerReview: [],
  });

  // Apply filters to courses
  const applyFilters = (courses: any[]) => {
    return courses.filter((course) => {
      // Apply skill level filter
      if (filters.skillLevel.length > 0) {
        const hasSkillLevel = filters.skillLevel.some(
          (level) => course.skillLevel?.toLowerCase() === level.toLowerCase()
        );
        if (!hasSkillLevel) return false;
      }

      // Apply skill area filter
      if (filters.skillArea.length > 0) {
        const hasSkillArea = filters.skillArea.some(
          (area) =>
            course.category?.toLowerCase() === area.toLowerCase() ||
            course.skillArea?.toLowerCase() === area.toLowerCase()
        );
        if (!hasSkillArea) return false;
      }

      // Apply content preference filter
      if (filters.contentPreference.length > 0) {
        const hasContentType = filters.contentPreference.some(
          (type) => course.contentType?.toLowerCase() === type.toLowerCase()
        );
        if (!hasContentType) return false;
      }

      // Apply learning style filter
      if (filters.learningStyle.length > 0) {
        const hasLearningStyle = filters.learningStyle.some(
          (style) => course.learningStyle?.toLowerCase() === style.toLowerCase()
        );
        if (!hasLearningStyle) return false;
      }

      return true;
    });
  };

  // Filter courses based on search, category, and advanced filters
  const filteredCourses = applyFilters(
    courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All Courses" ||
        course.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
  );

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(
    (filterArray) => filterArray.length > 0
  );

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const clearAllFilters = () => {
    setFilters({
      skillLevel: [],
      skillArea: [],
      contentPreference: [],
      learningStyle: [],
      peerReview: [],
    });
    setSearchTerm("");
    setSelectedCategory("All Courses");
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#7B61FF] text-white rounded-lg p-3 text-center flex items-center justify-center gap-2">
        <IoSettingsOutline className="text-white text-lg font-bold" />
        <h2 className="text-sm font-normal">
          Adjust your preferences and accessibility tools to get course
          suggestions that fit your goals and needs.{" "}
        </h2>
        <FilterDialog
          isOpen={isFilterOpen}
          onOpenChange={setIsFilterOpen}
          filters={filters}
          onFiltersChange={handleFiltersChange}
          trigger={
            <Button
              variant="ghost"
              size="sm"
              className="font-bold cursor-pointer p-0 text-white hover:text-white hover:bg-transparent"
            >
              Customize Now
            </Button>
          }
        />
      </div>

      {/* Search and Filter Section */}
      <div className="w-full h-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-end">
          {/* Search Bar */}
          <div className="flex flex-1 justify-between items-center max-w-md p-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Search courses"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-0 outline-0"
            />
            <FiSearch className="text-gray-400 text-lg" />
          </div>

          {/* Filter Dialog */}
          <FilterDialog
            isOpen={isFilterOpen}
            onOpenChange={setIsFilterOpen}
            filters={filters}
            onFiltersChange={handleFiltersChange}
            trigger={
              <Button
                variant="outline"
                size="sm"
                className={`flex items-center gap-2 px-2 py-1 text-sm font-normal cursor-pointer border-[#777F89] text-[#777F89] ${
                  hasActiveFilters
                    ? "bg-indigo-50 border-indigo-300 text-indigo-600"
                    : ""
                }`}
              >
                Filter
                <IoFilter className="text-lg" />
                {hasActiveFilters && (
                  <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {Object.values(filters).reduce(
                      (total, filterArray) => total + filterArray.length,
                      0
                    )}
                  </span>
                )}
              </Button>
            }
          />

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

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-600">Active filters:</span>
          {Object.entries(filters).map(([category, values]) =>
            values.map((value) => (
              <span
                key={`${category}-${value}`}
                className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full"
              >
                {value}
                <button
                  onClick={() => {
                    const newFilters = { ...filters };
                    newFilters[category as keyof FilterState] = newFilters[
                      category as keyof FilterState
                    ].filter((v) => v !== value);
                    setFilters(newFilters);
                  }}
                  className="text-indigo-500 hover:text-indigo-700"
                >
                  ×
                </button>
              </span>
            ))
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Clear all
          </Button>
        </div>
      )}

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
          <Button onClick={clearAllFilters} variant="outline">
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
