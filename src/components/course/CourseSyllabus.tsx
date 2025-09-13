"use client";
import { useState } from "react";
import { useStore } from "@/store/useStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { defaultSyllabusData } from "@/utils/data";

interface CourseSyllabusProps {
  courseId: string;
  syllabusData?: any;
}

export const CourseSyllabus: React.FC<CourseSyllabusProps> = ({
  courseId,
  syllabusData,
}) => {
  const { studentNotes, saveStudentNotes } = useStore();
  const [notes, setNotes] = useState(studentNotes[courseId] || "");
  const [isSaving, setIsSaving] = useState(false);

  const data = syllabusData || defaultSyllabusData;

  const handleSaveNotes = async () => {
    setIsSaving(true);
    saveStudentNotes(courseId, notes);

    // Simulate save delay
    setTimeout(() => {
      setIsSaving(false);
    }, 500);
  };

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
            My Notes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="syllabus" className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-lg font-semibold text-[#05060F] leading-relaxed">
              {data.title}
            </h1>
            <div className="space-y-4">
              <p className="text-gray-600 font-normal leading-relaxed text-base">
                {data.overview}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {data.modules.map((module: any) => (
              <div key={module.id} className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-800">
                  {module.title}
                </h2>
                {module.lessons.map((lesson: any) => (
                  <div key={lesson.id} className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-700">
                      {lesson.title}
                    </h3>
                    <div className="space-y-3 ml-4">
                      {lesson.topics.map((topic: string, index: number) => (
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
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Instructor Notes
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">
                  Key Learning Objectives
                </h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>
                    • Master fundamental concepts and apply them in real-world
                    scenarios
                  </li>
                  <li>
                    • Develop practical skills through hands-on exercises and
                    projects
                  </li>
                  <li>
                    • Build confidence to tackle advanced topics in future
                    courses
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">Study Tips</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>
                    • Practice regularly and don&apos;t rush through the
                    material
                  </li>
                  <li>
                    • Take notes and create your own examples for better
                    understanding
                  </li>
                  <li>
                    • Join study groups and discuss concepts with fellow
                    learners
                  </li>
                  <li>
                    • Complete all exercises before moving to the next lesson
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h3 className="font-medium text-gray-800 mb-2">
                  Additional Resources
                </h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Official documentation and reference materials</li>
                  <li>• Community forums for questions and discussions</li>
                  <li>• Supplementary reading materials and case studies</li>
                  <li>• Practice exercises and coding challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="my-note" className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">My Notes</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <textarea
                placeholder="Add your personal notes about this course..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-40 p-4 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-700"
              />
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                  {notes.length} characters
                </span>
                <Button
                  onClick={handleSaveNotes}
                  disabled={isSaving}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  {isSaving ? "Saving..." : "Save Notes"}
                </Button>
              </div>
            </div>

            {studentNotes[courseId] && (
              <div className="text-sm text-green-600">
                ✓ Notes saved successfully
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
