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
  slug: string;
}

export interface CourseVideo {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  videoUrl: string;
  description: string;
}

export interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  isOnline: boolean;
  unreadCount?: number;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

export interface SyllabusData {
  title: string;
  overview: string;
  modules: {
    id: string;
    title: string;
    lessons: {
      id: string;
      title: string;
      topics: string[];
    }[];
  }[];
}
