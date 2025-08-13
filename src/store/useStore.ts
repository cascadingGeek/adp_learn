import { create } from "zustand";

export interface Course {
  id: string;
  title: string;
  description: string;
  lessons: number;
  price: number;
  currency: string;
  image: string;
  category: string;
  instructor: string;
  duration: string;
  videos: CourseVideo[];
}

export interface CourseVideo {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  videoUrl: string;
}

interface AppState {
  courses: Course[];
  savedCourses: string[];
  isLessonModalOpen: boolean;
  selectedCourse: Course | null;
  isSidebarOpen: boolean;

  // Actions
  setCourses: (courses: Course[]) => void;
  toggleSavedCourse: (courseId: string) => void;
  openLessonModal: (course: Course) => void;
  closeLessonModal: () => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useStore = create<AppState>((set, get) => ({
  courses: [
    {
      id: "1",
      title: "Intro to Graphic Design",
      description:
        "Kickstart your creative journey with intro to Graphic Design",
      lessons: 7,
      price: 20000,
      currency: "₦",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      category: "Design",
      instructor: "John Doe",
      duration: "4 hours",
      videos: [
        {
          id: "1",
          title: "Introduction to Design Principles",
          duration: "15:30",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "2",
          title: "Color Theory Basics",
          duration: "22:45",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "3",
          title: "Typography Fundamentals",
          duration: "18:20",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "4",
          title: "Layout and Composition",
          duration: "25:10",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "5",
          title: "Digital Tools Overview",
          duration: "20:15",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "6",
          title: "Creating Your First Design",
          duration: "30:25",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "7",
          title: "Portfolio Building Tips",
          duration: "12:40",
          isCompleted: false,
          videoUrl: "#",
        },
      ],
    },
    {
      id: "2",
      title: "Learn Data Analyst",
      description:
        "Learn insights, trends & decision-making skills that drive business.",
      lessons: 7,
      price: 20000,
      currency: "₦",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      category: "Data Science",
      instructor: "Jane Smith",
      duration: "6 hours",
      videos: [
        {
          id: "1",
          title: "Introduction to Data Analysis",
          duration: "20:30",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "2",
          title: "Excel for Data Analysis",
          duration: "35:45",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "3",
          title: "Data Visualization Basics",
          duration: "28:20",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "4",
          title: "Statistical Analysis",
          duration: "40:10",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "5",
          title: "SQL Fundamentals",
          duration: "45:15",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "6",
          title: "Creating Reports",
          duration: "25:25",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "7",
          title: "Data Storytelling",
          duration: "30:40",
          isCompleted: false,
          videoUrl: "#",
        },
      ],
    },
    {
      id: "3",
      title: "Intro to Web Developer",
      description:
        "Learn to build websites that are fast, functional, and user-friendly!",
      lessons: 7,
      price: 20000,
      currency: "₦",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Development",
      instructor: "Mike Johnson",
      duration: "8 hours",
      videos: [
        {
          id: "1",
          title: "HTML Fundamentals",
          duration: "25:30",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "2",
          title: "CSS Styling Basics",
          duration: "35:45",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "3",
          title: "JavaScript Essentials",
          duration: "45:20",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "4",
          title: "Responsive Design",
          duration: "30:10",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "5",
          title: "DOM Manipulation",
          duration: "28:15",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "6",
          title: "Building Your First Website",
          duration: "50:25",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "7",
          title: "Deployment and Hosting",
          duration: "20:40",
          isCompleted: false,
          videoUrl: "#",
        },
      ],
    },
    {
      id: "4",
      title: "Effective E-mail Communication",
      description:
        "Explore e-mail best practices and tips to improve communication game!",
      lessons: 7,
      price: 20000,
      currency: "₦",
      image:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
      category: "Communication",
      instructor: "Sarah Wilson",
      duration: "3 hours",
      videos: [
        {
          id: "1",
          title: "Email Etiquette Basics",
          duration: "15:30",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "2",
          title: "Writing Professional Emails",
          duration: "22:45",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "3",
          title: "Email Structure and Formatting",
          duration: "18:20",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "4",
          title: "Managing Email Overload",
          duration: "25:10",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "5",
          title: "Email Marketing Basics",
          duration: "20:15",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "6",
          title: "Cross-cultural Communication",
          duration: "30:25",
          isCompleted: false,
          videoUrl: "#",
        },
        {
          id: "7",
          title: "Email Security Best Practices",
          duration: "12:40",
          isCompleted: false,
          videoUrl: "#",
        },
      ],
    },
  ],
  savedCourses: [],
  isLessonModalOpen: false,
  selectedCourse: null,
  isSidebarOpen: false,

  setCourses: (courses) => set({ courses }),

  toggleSavedCourse: (courseId) =>
    set((state) => ({
      savedCourses: state.savedCourses.includes(courseId)
        ? state.savedCourses.filter((id) => id !== courseId)
        : [...state.savedCourses, courseId],
    })),

  openLessonModal: (course) =>
    set({
      isLessonModalOpen: true,
      selectedCourse: course,
    }),

  closeLessonModal: () =>
    set({
      isLessonModalOpen: false,
      selectedCourse: null,
    }),

  toggleSidebar: () =>
    set((state) => ({
      isSidebarOpen: !state.isSidebarOpen,
    })),

  setSidebarOpen: (open) => set({ isSidebarOpen: open }),
}));
