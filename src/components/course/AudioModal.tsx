"use client";
import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FiPlay, FiPause, FiVolume2 } from "react-icons/fi";

interface AudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: any;
}

export const AudioModal: React.FC<AudioModalProps> = ({
  isOpen,
  onClose,
  lesson,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate duration based on text length (approximate)
  const calculateDuration = (text: string) => {
    // Average reading speed is about 150 words per minute
    const wordCount = text.split(/\s+/).length;
    return Math.max(30, Math.floor((wordCount / 150) * 60)); // Minimum 30 seconds
  };

  // Generate audio content from lesson text

  //   console.log({ lesson });
  const generateAudioContent = () => {
    const text = `${lesson?.title}. ${lesson?.transcription}`;
    setDuration(calculateDuration(text));

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = volume;

      utterance.onstart = () => {
        setIsPlaying(true);
        // Start progress tracking
        startProgressTracking(calculateDuration(text));
      };

      utterance.onend = () => {
        setIsPlaying(false);
        stopProgressTracking();
        setCurrentTime(0);
        setProgress(0);
      };

      utterance.onerror = () => {
        setIsPlaying(false);
        stopProgressTracking();
      };

      utteranceRef.current = utterance;
      return utterance;
    }
    return null;
  };

  // Start tracking progress
  const startProgressTracking = (totalDuration: number) => {
    stopProgressTracking(); // Clear any existing interval

    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      if (elapsedSeconds >= totalDuration) {
        setCurrentTime(totalDuration);
        setProgress(100);
        stopProgressTracking();
      } else {
        setCurrentTime(elapsedSeconds);
        setProgress((elapsedSeconds / totalDuration) * 100);
      }
    }, 200); // Update every 200ms for smoother progress
  };

  // Stop tracking progress
  const stopProgressTracking = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const handlePlayPause = () => {
    if ("speechSynthesis" in window) {
      if (isPlaying) {
        speechSynthesis.pause();
        setIsPlaying(false);
        stopProgressTracking();
      } else {
        if (speechSynthesis.paused && utteranceRef.current) {
          speechSynthesis.resume();
          setIsPlaying(true);
          // Calculate remaining time and restart progress tracking
          const remainingTime = duration - currentTime;
          startProgressTracking(remainingTime);
        } else {
          const utterance = generateAudioContent();
          if (utterance) {
            speechSynthesis.speak(utterance);
          }
        }
      }
    }
  };

  const handleStop = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
      stopProgressTracking();
      utteranceRef.current = null;
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;

    // Seek to position by creating a new utterance from the current position
    handleStop(); // Stop current playback

    // Calculate the text position based on progress
    const text = `${lesson?.title}. ${lesson?.transcript}`;
    const seekPosition = Math.floor((newProgress / 100) * text.length);
    const truncatedText = text.substring(seekPosition);

    if (truncatedText && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(truncatedText);
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = volume;

      utterance.onstart = () => {
        setIsPlaying(true);
        setCurrentTime((newProgress / 100) * duration);
        setProgress(newProgress);
        startProgressTracking(duration * (1 - newProgress / 100));
      };

      utterance.onend = () => {
        setIsPlaying(false);
        setCurrentTime(duration);
        setProgress(100);
        stopProgressTracking();
      };

      speechSynthesis.speak(utterance);
      utteranceRef.current = utterance;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    // Update volume if utterance exists
    if (utteranceRef.current) {
      utteranceRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      handleStop();
    };
  }, []);

  if (!lesson) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Audio Lesson</h3>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h4 className="font-medium text-gray-900 mb-2">{lesson.title}</h4>
            <p className="text-sm text-gray-600 line-clamp-3">
              {lesson.description}
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Button
                onClick={handlePlayPause}
                className="w-12 h-12 bg-[#7B61FF] hover:bg-[#6B51E6] text-white rounded-full flex items-center justify-center"
              >
                {isPlaying ? (
                  <FiPause className="w-5 h-5" />
                ) : (
                  <FiPlay className="w-5 h-5 ml-1" />
                )}
              </Button>

              <Button
                onClick={handleStop}
                variant="outline"
                size="sm"
                className="px-4 py-2"
              >
                Stop
              </Button>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="mb-4 flex gap-1 items-center">
                <FiVolume2 className="w-4 h-4 text-gray-500" />
                <div
                  className="w-full h-2 bg-gray-200 rounded-full cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div
                    className="h-full bg-[#7B61FF] rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
