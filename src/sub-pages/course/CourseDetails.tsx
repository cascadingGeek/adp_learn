"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { contacts } from "@/utils/data";
import { LessonItem } from "@/components/course/LessonItem";
import { StudentAvatar } from "@/components/course/StudentAvatar";
import CourseSyllabus from "@/components/course/CourseSyllabus";

interface CourseDetailsProps {
  params: { slug: string };
}

export const CourseDetails = ({ params }: CourseDetailsProps) => {
  const router = useRouter();
  const { getCourseBySlug, openLessonModal } = useStore();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  useEffect(() => {
    const foundCourse = getCourseBySlug(params.slug);
    setCourse(foundCourse);
    setLoading(false);
  }, [params.slug, getCourseBySlug]);

  const handleWatchVideo = (lessonIndex: number) => {
    if (course) {
      setCurrentLessonIndex(lessonIndex);
      openLessonModal(course, lessonIndex);
    }
  };

  const handleDownloadAudio = (lesson: any) => {
    // Generate audio content - you can integrate with a text-to-speech service
    const audioText = `Audio content for ${lesson.title}: ${lesson.description}`;
    alert(`Audio file generated for: ${lesson.title}\n\nContent: ${audioText}`);
  };

  const handleDownloadText = (lesson: any) => {
    // Generate text content
    const textContent = `
# ${lesson.title}

## Overview
${lesson.description}

## Key Learning Points
- Understanding core concepts
- Practical applications
- Real-world examples
- Best practices and tips

## Duration: ${lesson.duration}

## Additional Resources
- Related documentation
- Practice exercises
- Further reading materials
    `;

    const blob = new Blob([textContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${lesson.title.replace(/\s+/g, "_")}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleStudentClick = (student: any) => {
    // Navigate to peer-review with specific user DM
    router.push(`/peer-review?user=${student.id}`);
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      const newIndex = currentLessonIndex - 1;
      setCurrentLessonIndex(newIndex);
      handleWatchVideo(newIndex);
    }
  };

  const handleNextLesson = () => {
    if (course && currentLessonIndex < course.videos.length - 1) {
      const newIndex = currentLessonIndex + 1;
      setCurrentLessonIndex(newIndex);
      handleWatchVideo(newIndex);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center space-x-4 mb-6">
          <Skeleton className="h-6 w-6 rounded" />
          <Skeleton className="h-8 w-64" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
          <div>
            <Skeleton className="h-64 w-full rounded-lg mb-4" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 mb-4">
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
          <Button onClick={() => router.push("/courses")} variant="outline">
            <FiArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-2">
      {/* Header */}
      <div className="bg-[#7B61FF] text-white rounded-lg p-3 text-center flex items-center justify-center gap-2">
        <IoSettingsOutline className="text-white text-lg font-bold" />
        <h2 className="text-sm font-normal">
          Adjust your preferences and accessibility tools to get course
          suggestions that fit your goals and needs.{" "}
        </h2>
        <Button
          variant="ghost"
          size="sm"
          className="font-bold cursor-pointer p-0"
          // onClick={}
        >
          Customize Now
        </Button>
      </div>
      <Button
        onClick={() => router.back()}
        variant="ghost"
        size="sm"
        className="p-2 text-[#7058E8] cursor-pointer"
      >
        <FiArrowLeft className="text-lg" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Lessons */}
        <div className="lg:col-span-2">
          <div className="overflow-hidden flex flex-col gap-5">
            {course.videos.map((lesson: any, index: number) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                index={index}
                isActive={index === currentLessonIndex}
                onWatchVideo={handleWatchVideo}
                onDownloadAudio={handleDownloadAudio}
                onDownloadText={handleDownloadText}
              />
            ))}
          </div>

          <CourseSyllabus />
        </div>

        {/* Right Column - Course Info & Students */}
        <div className="space-y-6 h-auto border-l border-[#05060F1A] pl-5">
          {/* Course Image */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Course Contents */}
          <div className="w-full h-auto">
            <h3 className="font-medium text-lg text-[#05060F] mb-4">
              Course Contents
            </h3>
            <div className="space-y-6">
              {course.videos.map((lesson: any, index: number) => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between"
                >
                  <span
                    className={`text-sm font-light ${
                      lesson.isCompleted
                        ? "text-[#05060FCC]"
                        : index <= currentLessonIndex
                        ? "text-[#05060FCC]"
                        : "text-[#7058E8]"
                    }`}
                  >
                    Lesson {String(index + 1).padStart(2, "0")}
                  </span>
                  {(lesson.isCompleted || index <= currentLessonIndex) && (
                    <FiCheck className="text-lg text-[#7058E8]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between border-b border-[#E4E7EC] pb-6">
            <Button
              variant="outline"
              onClick={handlePreviousLesson}
              disabled={currentLessonIndex === 0}
              className="px-6 rounded-full border-[#54656F] text-[#54656F] cursor-pointer font-light"
            >
              Previous Lesson
            </Button>
            <Button
              value="default"
              onClick={handleNextLesson}
              disabled={currentLessonIndex === course.videos.length - 1}
              className="bg-[#7B61FF] text-white px-6 rounded-full cursor-pointer font-light"
            >
              Next Lesson
            </Button>
          </div>

          {/* Other Students */}
          <div className="w-full h-auto">
            <h3 className="font-medium text-[#001928] mb-4 text-base">
              Other people taking the same course
            </h3>
            <div className="space-y-2 rounded-lg border border-gray-200 p-2">
              {contacts.map((student) => (
                <StudentAvatar
                  key={student.id}
                  student={student}
                  onClick={handleStudentClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
