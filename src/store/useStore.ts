import { create } from "zustand";
import { Course } from "@/utils/types";
import { courses } from "@/utils/data";

interface AppState {
  courses: Course[];
  savedCourses: string[];
  isLessonModalOpen: boolean;
  selectedCourse: Course | null;
  currentLessonIndex: number;
  isSidebarOpen: boolean;

  // Actions
  setCourses: (courses: Course[]) => void;
  toggleSavedCourse: (courseId: string) => void;
  openLessonModal: (course: Course, lessonIndex?: number) => void;
  closeLessonModal: () => void;
  setCurrentLesson: (index: number) => void;
  nextLesson: () => void;
  previousLesson: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  getCourseBySlug: (slug: string) => Course | undefined;
}

export const useStore = create<AppState>((set, get) => ({
  courses: courses,
  savedCourses: [],
  isLessonModalOpen: false,
  selectedCourse: null,
  currentLessonIndex: 0,
  isSidebarOpen: false,

  setCourses: (courses) => set({ courses }),

  toggleSavedCourse: (courseId) =>
    set((state) => ({
      savedCourses: state.savedCourses.includes(courseId)
        ? state.savedCourses.filter((id) => id !== courseId)
        : [...state.savedCourses, courseId],
    })),

  openLessonModal: (course, lessonIndex = 0) =>
    set({
      isLessonModalOpen: true,
      selectedCourse: course,
      currentLessonIndex: lessonIndex,
    }),

  closeLessonModal: () =>
    set({
      isLessonModalOpen: false,
      selectedCourse: null,
      currentLessonIndex: 0,
    }),

  setCurrentLesson: (index) => set({ currentLessonIndex: index }),

  nextLesson: () =>
    set((state) => {
      if (
        state.selectedCourse &&
        state.currentLessonIndex < state.selectedCourse.videos.length - 1
      ) {
        return { currentLessonIndex: state.currentLessonIndex + 1 };
      }
      return state;
    }),

  previousLesson: () =>
    set((state) => {
      if (state.currentLessonIndex > 0) {
        return { currentLessonIndex: state.currentLessonIndex - 1 };
      }
      return state;
    }),

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),

  setSidebarOpen: (open) => set({ isSidebarOpen: open }),

  getCourseBySlug: (slug) => {
    const { courses } = get();
    return courses.find((course) => course.slug === slug);
  },
}));
