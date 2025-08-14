"use client";

import { useStore } from "@/store/useStore";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FiPlay, FiClock, FiCheck } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function LessonModal() {
  const { isLessonModalOpen, selectedCourse, closeLessonModal } = useStore();

  if (!selectedCourse) return null;

  const totalDuration = selectedCourse.videos.reduce((total, video) => {
    const [minutes, seconds] = video.duration.split(":").map(Number);
    return total + minutes + seconds / 60;
  }, 0);

  return (
    <Dialog open={isLessonModalOpen} onOpenChange={closeLessonModal}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden bg-white">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-xl font-bold text-gray-900 mb-2">
                {selectedCourse.title}
              </DialogTitle>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <FiPlay className="w-4 h-4 mr-1" />
                  {selectedCourse.videos.length} lessons
                </span>
                <span className="flex items-center">
                  <FiClock className="w-4 h-4 mr-1" />
                  {Math.round(totalDuration)} minutes
                </span>
                <span className="text-indigo-600 font-medium">
                  {selectedCourse.currency}
                  {selectedCourse.price.toLocaleString()}
                </span>
              </div>
            </div>
            {/* <button
              onClick={closeLessonModal}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            >
              <FiX className="w-5 h-5" />
            </button> */}
          </div>
        </DialogHeader>

        <div className="my-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Course Content
            </h3>
            <p className="text-sm text-gray-600">
              {selectedCourse.description}
            </p>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {selectedCourse.videos.map((video, index) => (
              <div
                key={video.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {video.isCompleted ? (
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <FiCheck className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <FiPlay className="w-4 h-4 text-indigo-600" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {index + 1}. {video.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">
                    {video.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex space-x-3">
            <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white">
              Enroll Now - {selectedCourse.currency}
              {selectedCourse.price.toLocaleString()}
            </Button>
            <Button variant="outline" className="px-6">
              Preview
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
