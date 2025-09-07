"use client";
import { SyllabusData } from "@/utils/types";
import { defaultSyllabusData } from "@/utils/data";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CourseSyllabusProps {
  syllabusData?: SyllabusData;
}

export default function CourseSyllabus({ syllabusData }: CourseSyllabusProps) {
  const data = syllabusData || defaultSyllabusData;

  return (
    <div className="max-w-4xl mx-auto py-6">
      <Tabs
        defaultValue="syllabus"
        className="w-full border-t border-[#EAECF0]"
      >
        <TabsList className="grid w-full grid-cols-3 mb-8 p-1 rounded-lg">
          <TabsTrigger
            value="syllabus"
            className="text-[#667085] text-base data-[state=active]:text-[#7058E8] data-[state=active]:border-b-2 data-[state=active]:border-[#7058E8] font-medium cursor-pointer data-[state=active]:shadow-none"
          >
            Syllabus
          </TabsTrigger>
          <TabsTrigger
            value="instructor-notes"
            className="text-[#667085] text-base data-[state=active]:text-[#7058E8] data-[state=active]:border-b-2 data-[state=active]:border-[#7058E8] font-medium cursor-pointer data-[state=active]:shadow-none"
          >
            Instructor Notes
          </TabsTrigger>
          <TabsTrigger
            value="my-note"
            className="text-[#667085] text-base data-[state=active]:text-[#7058E8] data-[state=active]:border-b-2 data-[state=active]:border-[#7058E8] font-medium cursor-pointer data-[state=active]:shadow-none"
          >
            My Note
          </TabsTrigger>
        </TabsList>

        <TabsContent value="syllabus" className="space-y-8">
          {/* Course Title */}
          <div className="space-y-6">
            <h1 className="text-lg font-semibold text-[#05060F] leading-relaxed">
              {data.title}
            </h1>

            {/* Course Overview */}
            <div className="space-y-4">
              <p className="text-gray-600 font-normal leading-relaxed text-base">
                {data.overview}
              </p>
            </div>
          </div>

          {/* Modules and Lessons */}
          <div className="space-y-8">
            {data.modules.map((module) => (
              <div key={module.id} className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  {module.title}
                </h2>

                {module.lessons.map((lesson) => (
                  <div key={lesson.id} className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-700">
                      {lesson.title}
                    </h3>

                    <div className="space-y-3 ml-4">
                      {lesson.topics.map((topic, index) => (
                        <p
                          key={index}
                          className="text-gray-600 leading-relaxed"
                        >
                          {topic}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="instructor-notes" className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Instructor Notes
            </h2>
            <p className="text-gray-600">
              Additional notes and resources from your instructor will appear
              here once available.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="my-note" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">My Notes</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <textarea
                placeholder="Add your personal notes about this course..."
                className="w-full h-40 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              />
              <div className="flex justify-end mt-4">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
