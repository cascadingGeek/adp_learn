import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Course } from "@/utils/types";
import { allCourses, getCoursesBySkillArea } from "@/utils/courseData";

interface LessonProgress {
  courseId: string;
  lessonId: string;
  isCompleted: boolean;
  watchTime: number; // in seconds
  lastWatched: Date;
}

interface CourseProgress {
  courseId: string;
  completedLessons: string[];
  currentLessonIndex: number;
  totalWatchTime: number;
  lastAccessed: Date;
}

interface AudioState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  currentLesson: any;
}

interface AppState {
  // Course data
  courses: Course[];
  userPreferredCourses: Course[];
  savedCourses: string[];

  // Lesson progress tracking
  lessonProgress: Record<string, LessonProgress>;
  courseProgress: Record<string, CourseProgress>;

  // Modal states
  isLessonModalOpen: boolean;
  isAudioModalOpen: boolean;
  selectedCourse: Course | null;
  currentLessonIndex: number;

  // Audio player state
  audioState: AudioState;

  // UI state
  isSidebarOpen: boolean;
  currentPage: number;
  itemsPerPage: number;

  // Student notes
  studentNotes: Record<string, string>; // courseId -> notes

  // Actions
  initializeUserCourses: (skillArea: string) => void;
  setCourses: (courses: Course[]) => void;
  toggleSavedCourse: (courseId: string) => void;

  // Lesson tracking
  markLessonAsViewed: (courseId: string, lessonId: string) => void;
  markLessonComplete: (courseId: string, lessonId: string) => void;
  updateWatchTime: (courseId: string, lessonId: string, time: number) => void;

  // Modal controls
  openLessonModal: (course: Course, lessonIndex?: number) => void;
  closeLessonModal: () => void;
  openAudioModal: (lesson: any) => void;
  closeAudioModal: () => void;
  setCurrentLesson: (index: number) => void;
  nextLesson: () => void;
  previousLesson: () => void;

  // Audio controls
  setAudioPlaying: (playing: boolean) => void;
  setAudioTime: (time: number) => void;
  setAudioDuration: (duration: number) => void;

  // UI controls
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (count: number) => void;

  // Notes management
  saveStudentNotes: (courseId: string, notes: string) => void;

  // Utility functions
  getCourseBySlug: (slug: string) => Course | undefined;
  getLessonProgress: (
    courseId: string,
    lessonId: string
  ) => LessonProgress | null;
  getCourseProgress: (courseId: string) => CourseProgress | null;
  getCompletedLessonsCount: (courseId: string) => number;
}

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      courses: allCourses,
      userPreferredCourses: [],
      savedCourses: [],
      lessonProgress: {},
      courseProgress: {},
      isLessonModalOpen: false,
      isAudioModalOpen: false,
      selectedCourse: null,
      currentLessonIndex: 0,
      audioState: {
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        currentLesson: null,
      },
      isSidebarOpen: false,
      currentPage: 1,
      itemsPerPage: 12,
      studentNotes: {},

      // Initialize courses based on user preferences
      initializeUserCourses: (skillArea: string) => {
        const preferredCourses = getCoursesBySkillArea(skillArea);
        set({ userPreferredCourses: preferredCourses });
      },

      setCourses: (courses) => set({ courses }),

      toggleSavedCourse: (courseId) =>
        set((state) => ({
          savedCourses: state.savedCourses.includes(courseId)
            ? state.savedCourses.filter((id) => id !== courseId)
            : [...state.savedCourses, courseId],
        })),

      // Lesson progress tracking
      markLessonAsViewed: (courseId: string, lessonId: string) => {
        const { lessonProgress, courseProgress } = get();
        const now = new Date();

        const newLessonProgress = {
          ...lessonProgress,
          [`${courseId}-${lessonId}`]: {
            courseId,
            lessonId,
            isCompleted:
              lessonProgress[`${courseId}-${lessonId}`]?.isCompleted || false,
            watchTime:
              lessonProgress[`${courseId}-${lessonId}`]?.watchTime || 0,
            lastWatched: now,
          },
        };

        // Update course progress
        const existingCourseProgress = courseProgress[courseId];
        const newCourseProgress = {
          ...courseProgress,
          [courseId]: {
            courseId,
            completedLessons: existingCourseProgress?.completedLessons || [],
            currentLessonIndex: get().currentLessonIndex,
            totalWatchTime: existingCourseProgress?.totalWatchTime || 0,
            lastAccessed: now,
          },
        };

        set({
          lessonProgress: newLessonProgress,
          courseProgress: newCourseProgress,
        });
      },

      markLessonComplete: (courseId: string, lessonId: string) => {
        const { lessonProgress, courseProgress } = get();
        const now = new Date();

        const lessonKey = `${courseId}-${lessonId}`;
        const newLessonProgress = {
          ...lessonProgress,
          [lessonKey]: {
            ...lessonProgress[lessonKey],
            courseId,
            lessonId,
            isCompleted: true,
            lastWatched: now,
          },
        };

        // Update course progress
        const existingCourseProgress = courseProgress[courseId];
        const completedLessons = existingCourseProgress?.completedLessons || [];

        if (!completedLessons.includes(lessonId)) {
          completedLessons.push(lessonId);
        }

        const newCourseProgress = {
          ...courseProgress,
          [courseId]: {
            courseId,
            completedLessons,
            currentLessonIndex: get().currentLessonIndex,
            totalWatchTime: existingCourseProgress?.totalWatchTime || 0,
            lastAccessed: now,
          },
        };

        set({
          lessonProgress: newLessonProgress,
          courseProgress: newCourseProgress,
        });
      },

      updateWatchTime: (courseId: string, lessonId: string, time: number) => {
        const { lessonProgress } = get();
        const lessonKey = `${courseId}-${lessonId}`;

        const newLessonProgress = {
          ...lessonProgress,
          [lessonKey]: {
            ...lessonProgress[lessonKey],
            courseId,
            lessonId,
            watchTime: time,
            lastWatched: new Date(),
          },
        };

        set({ lessonProgress: newLessonProgress });
      },

      // Modal controls
      openLessonModal: (course, lessonIndex = 0) => {
        const { markLessonAsViewed } = get();
        const lesson = course.videos[lessonIndex];

        // Mark lesson as viewed when opened
        if (lesson) {
          markLessonAsViewed(course.id, lesson.id);
        }

        set({
          isLessonModalOpen: true,
          selectedCourse: course,
          currentLessonIndex: lessonIndex,
        });
      },

      closeLessonModal: () =>
        set({
          isLessonModalOpen: false,
          selectedCourse: null,
          currentLessonIndex: 0,
        }),

      openAudioModal: (lesson) =>
        set({
          isAudioModalOpen: true,
          audioState: {
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            currentLesson: lesson,
          },
        }),

      closeAudioModal: () =>
        set({
          isAudioModalOpen: false,
          audioState: {
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            currentLesson: null,
          },
        }),

      setCurrentLesson: (index) => {
        const { selectedCourse, markLessonAsViewed } = get();
        if (selectedCourse && selectedCourse.videos[index]) {
          const lesson = selectedCourse.videos[index];
          markLessonAsViewed(selectedCourse.id, lesson.id);
        }
        set({ currentLessonIndex: index });
      },

      nextLesson: () => {
        const { selectedCourse, currentLessonIndex, markLessonAsViewed } =
          get();
        if (
          selectedCourse &&
          currentLessonIndex < selectedCourse.videos.length - 1
        ) {
          const newIndex = currentLessonIndex + 1;
          const lesson = selectedCourse.videos[newIndex];
          markLessonAsViewed(selectedCourse.id, lesson.id);
          set({ currentLessonIndex: newIndex });
        }
      },

      previousLesson: () => {
        const { currentLessonIndex } = get();
        if (currentLessonIndex > 0) {
          set({ currentLessonIndex: currentLessonIndex - 1 });
        }
      },

      // Audio controls
      setAudioPlaying: (playing) =>
        set((state) => ({
          audioState: { ...state.audioState, isPlaying: playing },
        })),

      setAudioTime: (time) =>
        set((state) => ({
          audioState: { ...state.audioState, currentTime: time },
        })),

      setAudioDuration: (duration) =>
        set((state) => ({
          audioState: { ...state.audioState, duration },
        })),

      // UI controls
      toggleSidebar: () =>
        set((state) => ({
          isSidebarOpen: !state.isSidebarOpen,
        })),

      setSidebarOpen: (open) => set({ isSidebarOpen: open }),

      setCurrentPage: (page) => set({ currentPage: page }),

      setItemsPerPage: (count) => set({ itemsPerPage: count, currentPage: 1 }),

      // Notes management
      saveStudentNotes: (courseId, notes) =>
        set((state) => ({
          studentNotes: { ...state.studentNotes, [courseId]: notes },
        })),

      // Utility functions
      getCourseBySlug: (slug) => {
        const { courses } = get();
        return courses.find((course) => course.slug === slug);
      },

      getLessonProgress: (courseId, lessonId) => {
        const { lessonProgress } = get();
        return lessonProgress[`${courseId}-${lessonId}`] || null;
      },

      getCourseProgress: (courseId) => {
        const { courseProgress } = get();
        return courseProgress[courseId] || null;
      },

      getCompletedLessonsCount: (courseId) => {
        const { courseProgress } = get();
        const progress = courseProgress[courseId];
        return progress?.completedLessons.length || 0;
      },
    }),
    {
      name: "enhanced-learning-storage",
      partialize: (state) => ({
        savedCourses: state.savedCourses,
        lessonProgress: state.lessonProgress,
        courseProgress: state.courseProgress,
        studentNotes: state.studentNotes,
        userPreferredCourses: state.userPreferredCourses,
        currentPage: state.currentPage,
        itemsPerPage: state.itemsPerPage,
      }),
    }
  )
);
