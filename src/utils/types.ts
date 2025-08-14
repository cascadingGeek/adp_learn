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
