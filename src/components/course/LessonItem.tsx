"use client";
import { FiFileText, FiVolume2 } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdAudioFile } from "react-icons/md";

export const LessonItem = ({
  lesson,
  index,
  onWatchVideo,
  onDownloadAudio,
  onDownloadText,
}: any) => (
  <div className="p-4 border border-[#E4E7EC] rounded-xl">
    <div className="flex items-center justify-between">
      <div className="flex-1 mb-3">
        <h3 className="font-medium text-[#101928] mb-1 pb-1 border-b border-[#E4E7EC]">
          Lesson {String(index + 1).padStart(2, "0")}
        </h3>
        <h4 className="text-lg font-medium text-gray-800 mb-2">
          {lesson.title}
        </h4>
        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
          {lesson.description}
        </p>

        <div className="flex items-center justify-between space-x-3">
          <Button
            variant="outline"
            onClick={() => onWatchVideo(index)}
            className="border-[#7058E8] text-[#7058E8] px-3 py-1 h-auto rounded-full cursor-pointer text-sm"
          >
            Watch Video
            <FaPlay className="text-xs" />
          </Button>
          <div className="flex items-center space-x-1">
            <Button
              onClick={() => onDownloadAudio(lesson)}
              variant="ghost"
              className="p-0 text-sm h-auto cursor-pointer text-[#7058E8] font-light"
            >
              Audio File
              <MdAudioFile className="text-xs" />
            </Button>
            <div className="w-[1px] h-4 bg-[#E4E7EC]" />
            <Button
              onClick={() => onDownloadText(lesson)}
              variant="ghost"
              className="p-0 text-sm h-auto cursor-pointer text-[#7058E8] font-light"
            >
              Text File
              <FiFileText className="text-xs" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
