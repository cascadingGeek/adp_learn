"use client";
import React, { FC } from "react";
import { FiFileText, FiCheck } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdAudioFile } from "react-icons/md";
import { useStore } from "@/store/useStore";

interface LessonItemProps {
  lesson: any;
  index: number;
  courseId: string;
  onWatchVideo: (index: number) => void;
  onDownloadAudio: (lesson: any) => void;
  onDownloadText: (lesson: any) => void;
  isActive: boolean;
}

export const LessonItem: FC<LessonItemProps> = ({
  lesson,
  index,
  courseId,
  onWatchVideo,
  onDownloadAudio,
  onDownloadText,
  isActive,
}) => {
  const { getLessonProgress, markLessonAsViewed } = useStore();
  const lessonProgress = getLessonProgress(courseId, lesson.id);
  const isViewed = lessonProgress?.lastWatched !== undefined;
  const isCompleted = lessonProgress?.isCompleted || false;

  const handleWatchVideo = () => {
    markLessonAsViewed(courseId, lesson.id);
    onWatchVideo(index);
  };

  return (
    <div
      className={`p-4 border rounded-xl transition-all duration-200 ${
        isViewed ? "border-[#7058E8] bg-purple-50" : "border-[#E4E7EC]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 mb-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-[#101928] pb-1 border-b border-[#E4E7EC]">
              Lesson {String(index + 1).padStart(2, "0")}
            </h3>
            {isViewed && (
              <div className="flex items-center gap-1">
                {isCompleted && (
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <FiCheck className="w-3 h-3 text-white" />
                  </div>
                )}
                <span className="text-xs text-[#7058E8] font-medium">
                  {isCompleted ? "Completed" : "Viewed"}
                </span>
              </div>
            )}
          </div>

          <h4 className="text-lg font-medium text-gray-800 mb-2">
            {lesson.title}
          </h4>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
            {lesson.description}
          </p>

          <div className="flex items-center justify-between space-x-3">
            <Button
              variant="outline"
              onClick={handleWatchVideo}
              className={`border-[#7058E8] text-[#7058E8] px-3 py-1 h-auto rounded-full cursor-pointer text-sm ${
                isViewed ? "bg-purple-50" : ""
              }`}
            >
              {isViewed ? "Continue Watching" : "Watch Video"}
              <FaPlay className="text-xs ml-1" />
            </Button>

            <div className="flex items-center space-x-1">
              <Button
                onClick={() => onDownloadAudio(lesson)}
                variant="ghost"
                className="p-0 text-sm h-auto cursor-pointer text-[#7058E8] font-light"
              >
                Audio File
                <MdAudioFile className="text-xs ml-1" />
              </Button>
              <div className="w-[1px] h-4 bg-[#E4E7EC]" />
              <Button
                onClick={() => onDownloadText(lesson)}
                variant="ghost"
                className="p-0 text-sm h-auto cursor-pointer text-[#7058E8] font-light"
              >
                Text File
                <FiFileText className="text-xs ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
