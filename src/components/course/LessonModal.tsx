"use client";

import { useState, useEffect, useCallback } from "react";
import { useStore } from "@/store/useStore";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FiPlay, FiPause } from "react-icons/fi";

export const LessonModal = () => {
  const {
    isLessonModalOpen,
    selectedCourse,
    currentLessonIndex,
    closeLessonModal,
    nextLesson,
    previousLesson,
  } = useStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  // const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Parse duration string (e.g., "15:30" -> seconds)
  const parseDuration = useCallback((durationStr: string) => {
    const [minutes, seconds] = durationStr.split(":").map(Number);
    return minutes * 60 + seconds;
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!selectedCourse?.videos[currentLessonIndex]) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newProgress = (clickX / rect.width) * 100;
      setProgress(newProgress);

      const currentLesson = selectedCourse.videos[currentLessonIndex];
      const totalDuration = parseDuration(currentLesson.duration);
      const newTime = (newProgress / 100) * totalDuration;
      setCurrentTime(newTime);
    },
    [selectedCourse, currentLessonIndex, parseDuration]
  );

  const handlePreviousLesson = useCallback(() => {
    const isFirstLesson = currentLessonIndex === 0;
    if (!isFirstLesson) {
      previousLesson();
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [currentLessonIndex, previousLesson]);

  const handleNextLesson = useCallback(() => {
    if (!selectedCourse) return;
    const isLastLesson =
      currentLessonIndex === selectedCourse.videos.length - 1;
    if (!isLastLesson) {
      nextLesson();
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [currentLessonIndex, selectedCourse, nextLesson]);

  // Reset states when modal opens or lesson changes
  useEffect(() => {
    if (isLessonModalOpen) {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [isLessonModalOpen, currentLessonIndex]);

  // Progress tracking effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && selectedCourse?.videos[currentLessonIndex]) {
      const currentLesson = selectedCourse.videos[currentLessonIndex];
      const isLastLesson =
        currentLessonIndex === selectedCourse.videos.length - 1;

      interval = setInterval(() => {
        const totalDuration = parseDuration(currentLesson.duration);
        setCurrentTime((prev) => {
          const newTime = prev + 1;
          const newProgress = (newTime / totalDuration) * 100;
          setProgress(newProgress);

          // Auto advance to next lesson when current finishes
          if (newTime >= totalDuration && !isLastLesson) {
            handleNextLesson();
            return 0;
          }

          return newTime >= totalDuration ? totalDuration : newTime;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [
    isPlaying,
    selectedCourse,
    currentLessonIndex,
    parseDuration,
    handleNextLesson,
  ]);

  // Early return after all hooks have been called
  if (!selectedCourse || !selectedCourse.videos[currentLessonIndex]) {
    return null;
  }

  const currentLesson = selectedCourse.videos[currentLessonIndex];
  const isFirstLesson = currentLessonIndex === 0;
  const isLastLesson = currentLessonIndex === selectedCourse.videos.length - 1;

  return (
    <Dialog open={isLessonModalOpen} onOpenChange={closeLessonModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-white p-0">
        {/* Close Button */}
        {/* <button
          onClick={closeLessonModal}
          className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
        >
          <FiX className="w-5 h-5" />
        </button> */}

        {/* Video Container */}
        <div className="relative bg-black">
          <div className="aspect-video w-full">
            {/* Video Placeholder - In real app, use proper video component */}
            <iframe
              src={`${currentLesson.videoUrl}?autoplay=${
                isPlaying ? 1 : 0
              }&mute=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={currentLesson.title}
            />

            {/* Custom Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              {/* Progress Bar */}
              <div
                className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-4"
                onClick={handleProgressClick}
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayPause}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  >
                    {isPlaying ? (
                      <FiPause className="w-6 h-6" />
                    ) : (
                      <FiPlay className="w-6 h-6" />
                    )}
                  </button>

                  <span className="text-sm">
                    {formatTime(currentTime)} / {currentLesson.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Lesson Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-medium text-black">
                {currentLesson.title}
              </h2>
              <span className="text-sm text-[#54656F] font-light">
                Lesson {String(currentLessonIndex + 1).padStart(2, "0")}
              </span>
            </div>

            <p className="text-[#54656F] text-base font-normal leading-relaxed">
              {currentLesson.description}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={handlePreviousLesson}
              disabled={isFirstLesson}
              className="px-6 rounded-full border-[#54656F] text-[#54656F] cursor-pointer font-light"
            >
              Previous Lesson
            </Button>

            <Button
              value="default"
              onClick={handleNextLesson}
              disabled={isLastLesson}
              className="bg-[#7B61FF] text-white px-6 rounded-full cursor-pointer font-light"
            >
              Next Lesson
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
