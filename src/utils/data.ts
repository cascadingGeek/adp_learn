import { IoIosContrast } from "react-icons/io";
import { FaBookReader, FaRegFileAlt, FaListUl } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { RiVoiceprintFill } from "react-icons/ri";
// import { LuBookText } from "react-icons/lu";
import { RiShieldCheckFill } from "react-icons/ri";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa6";
import { GrDocumentDownload } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { FiHome, FiBookmark, FiPlay, FiAward, FiUser } from "react-icons/fi";
import { Contact, Message } from "@/utils/types";
import { SyllabusData } from "@/utils/types";

export const learners = [
  {
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export const features = [
  {
    icon: IoIosContrast,
    title: "High Contrast & Font Size",
    description:
      "See clearly and easily — high contrast visuals and scalable text for stress-free viewing.",
  },
  {
    icon: FaBookReader,
    title: "Screen Reader Friendly",
    description:
      "Learn at full pace, your way with accessible, visual, and comprehensive.",
  },
  {
    icon: BiSupport,
    title: "Captions & Sign Language Support",
    description:
      "Every word matters — live captions & sign language support for inclusive learning.",
  },
  {
    icon: RiVoiceprintFill,
    title: "Voice Navigation",
    description:
      "Navigate with ease — hands-free control for effortless course exploration.",
  },
];

export const courses = [
  {
    id: "1",
    slug: "intro-to-graphic-design",
    title: "Intro to Graphic Design",
    description: "Kickstart your creative journey with intro to Graphic Design",
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
        title: "Understanding Design Basics",
        description:
          "Learn the core principles—balance, contrast, alignment, and hierarchy—that form the foundation of great design, and discover how to apply them effectively to create visually compelling and professional-looking projects.",
        duration: "15:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/YqQx75OPRa0",
      },
      {
        id: "2",
        title: "Color Theory & Application",
        description:
          "Discover how to choose and combine colors to create mood, harmony and visual impact in your designs.",
        duration: "22:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/Qj1FK8n7WgY",
      },
      {
        id: "3",
        title: "Typography Essentials",
        description:
          "Master the art of selecting and pairing fonts for clarity, personality and style in your design projects.",
        duration: "18:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/QrNi9FmdlxY",
      },
      {
        id: "4",
        title: "Layout and Composition",
        description:
          "Arrange text, images, and elements for readability, flow, and aesthetic appeal in your design layouts.",
        duration: "25:10",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/a5KYlHNKQB8",
      },
      {
        id: "5",
        title: "Digital Tools Overview",
        description:
          "Get hands-on with popular software like Adobe Photoshop, Illustrator or Canva for graphic design projects.",
        duration: "20:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/IpzJCobE5aE",
      },
      {
        id: "6",
        title: "Creating Your First Design",
        description:
          "Apply everything you've learned to create a complete design project from concept to final output.",
        duration: "30:25",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/c5HS3nCFw9U",
      },
      {
        id: "7",
        title: "Portfolio Building Tips",
        description:
          "Learn how to showcase your best work and present your design skills professionally to potential clients or employers.",
        duration: "12:40",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/6h3RJhoqgK8",
      },
    ],
  },
  {
    id: "2",
    slug: "learn-data-analyst",
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
        description:
          "Understand the fundamentals of data analysis and how data-driven insights can transform business decisions.",
        duration: "20:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/yZvFH7B6gKI",
      },
      {
        id: "2",
        title: "Excel for Data Analysis",
        description:
          "Master Excel's powerful features for data manipulation, analysis, and visualization in business contexts.",
        duration: "35:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/Hn9Ni6gOGTg",
      },
      {
        id: "3",
        title: "Data Visualization Basics",
        description:
          "Learn to create clear, impactful charts and graphs that effectively communicate your data insights.",
        duration: "28:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/yQsOVcjpqL4",
      },
      {
        id: "4",
        title: "Statistical Analysis",
        description:
          "Apply statistical methods to analyze data patterns and make informed business recommendations.",
        duration: "40:10",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/xxpc-HPKN28",
      },
      {
        id: "5",
        title: "SQL Fundamentals",
        description:
          "Query databases efficiently to extract and manipulate data for analysis purposes.",
        duration: "45:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/HXV3zeQKqGY",
      },
      {
        id: "6",
        title: "Creating Reports",
        description:
          "Design professional reports and dashboards that communicate findings to stakeholders effectively.",
        duration: "25:25",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/TbZ4fktIKSY",
      },
      {
        id: "7",
        title: "Data Storytelling",
        description:
          "Transform raw data into compelling narratives that drive action and business value.",
        duration: "30:40",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/8EMW7io4rSI",
      },
    ],
  },
  {
    id: "3",
    slug: "intro-to-web-developer",
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
        description:
          "Learn the building blocks of web development with HTML structure, elements, and semantic markup.",
        duration: "25:30",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
      },
      {
        id: "2",
        title: "CSS Styling Basics",
        description:
          "Style your web pages with CSS for layout, colors, fonts, and responsive design principles.",
        duration: "35:45",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/yfoY53QXEnI",
      },
      {
        id: "3",
        title: "JavaScript Essentials",
        description:
          "Add interactivity to your websites with JavaScript programming fundamentals and DOM manipulation.",
        duration: "45:20",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      },
      {
        id: "4",
        title: "Responsive Design",
        description:
          "Create websites that work beautifully across all devices using modern responsive design techniques.",
        duration: "30:10",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/srvUrASNdaU",
      },
      {
        id: "5",
        title: "DOM Manipulation",
        description:
          "Dynamically update web page content and respond to user interactions using JavaScript.",
        duration: "28:15",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/5fb2aPlgoys",
      },
      {
        id: "6",
        title: "Building Your First Website",
        description:
          "Put everything together to create a complete, functional website from start to finish.",
        duration: "50:25",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/916GWv2Qs08",
      },
      {
        id: "7",
        title: "Deployment and Hosting",
        description:
          "Learn how to publish your website online and make it accessible to users worldwide.",
        duration: "20:40",
        isCompleted: false,
        videoUrl: "https://www.youtube.com/embed/p0bGHP-PXD4",
      },
    ],
  },
  // {
  //   id: "4",
  //   slug: "effective-email-communication",
  //   title: "Effective E-mail Communication",
  //   description:
  //     "Explore e-mail best practices and tips to improve communication game!",
  //   lessons: 7,
  //   price: 20000,
  //   currency: "₦",
  //   image:
  //     "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop",
  //   category: "Communication",
  //   instructor: "Sarah Wilson",
  //   duration: "3 hours",
  //   videos: [
  //     {
  //       id: "1",
  //       title: "Email Etiquette Basics",
  //       description:
  //         "Master professional email communication with proper formatting, tone, and etiquette guidelines.",
  //       duration: "15:30",
  //       isCompleted: false,
  //       videoUrl: "https://www.youtube.com/embed/F1ACUvdC6T8",
  //     },
  //     {
  //       id: "2",
  //       title: "Writing Professional Emails",
  //       description:
  //         "Craft clear, concise, and effective emails that get results in professional settings.",
  //       duration: "22:45",
  //       isCompleted: false,
  //       videoUrl: "https://www.youtube.com/embed/PJKqnAjJ4Y8",
  //     },
  //     {
  //       id: "3",
  //       title: "Email Structure and Formatting",
  //       description:
  //         "Learn the optimal structure and formatting techniques for maximum email readability and impact.",
  //       duration: "18:20",
  //       isCompleted: false,
  //       videoUrl: "https://www.youtube.com/embed/6wLgDH2bZTE",
  //     },
  //     {
  //       id: "4",
  //       title: "Managing Email Overload",
  //       description:
  //         "Develop strategies to efficiently manage your inbox and reduce email-related stress.",
  //       duration: "25:10",
  //       isCompleted: false,
  //       videoUrl: "https://www.youtube.com/embed/UC7GT1ILT6A",
  //     },
  //     {
  //       id: "5",
  //       title: "Email Marketing Basics",
  //       description:
  //         "Understand the fundamentals of email marketing for business growth and customer engagement.",
  //       duration: "20:15",
  //       isCompleted: false,
  //       videoUrl: "https://www.youtube.com/embed/B8O8U1nV3JI",
  //     },
  //     {
  //       id: "6",
  //       title: "Cross-cultural Communication",
  //       description:
  //         "Navigate email communication across different cultures and international business contexts.",
  //       duration: "30:25",
  //       isCompleted: false,
  //       videoUrl: "https://www.youtube.com/embed/c9qSw-6w-N8",
  //     },
  //     {
  //       id: "7",
  //       title: "Email Security Best Practices",
  //       description:
  //         "Protect yourself and your organization from email-based security threats and attacks.",
  //       duration: "12:40",
  //       isCompleted: false,
  //       videoUrl: "https://www.youtube.com/embed/GSIDS_lvRv4",
  //     },
  //   ],
  // },
];

export const steps = [
  {
    icon: RiShieldCheckFill,
    title: "Step 1: Sign Up & Personalize Accessibility",
    description:
      "Create your account and set preferences for captions, text size, contrast, and more.",
  },
  {
    icon: RiGraduationCapFill,
    title: "Step 2: Learn with Inclusive Tools",
    description:
      "Access courses with captions, audio mode, and connect with peers.",
  },
  {
    icon: FaTrophy,
    title: "Step 3: Get Feedback & Earn Certifications",
    description:
      "Track your growth, get feedback, and download industry-recognized certifications.",
  },
];

export const testimonials = [
  {
    description:
      "I finally found a course that fits my pace and supports my visual needs. Thank you!",
    name: "Bukunmi John",
    position: "Founder and CEO | Shefdev",
    avatar: "/customer-care.png",
  },
  {
    description:
      "⁠I’ve finally discovered a course that matches my learning pace and caters to my visual style. Grateful!",
    name: "Ayomide Lawrence",
    position: "Founder and CEO | Webrand",
    avatar: "/customer-care.png",
  },
  {
    description:
      "A course that truly fits how I learn — at my own speed and visually supportive. I’m so glad I found it!",
    name: "Kashi Obioma",
    position: "Founder and CEO | Kashdev",
    avatar: "/customer-care.png",
  },
  {
    description:
      "I finally found a course that fits my pace and supports my visual needs. Thank you!",
    name: "Bukunmi John",
    position: "Founder and CEO | Shefdev",
    avatar: "/customer-care.png",
  },
  {
    description:
      "⁠I’ve finally discovered a course that matches my learning pace and caters to my visual style. Grateful!",
    name: "Ayomide Lawrence",
    position: "Founder and CEO | Webrand",
    avatar: "/customer-care.png",
  },
  {
    description:
      "A course that truly fits how I learn — at my own speed and visually supportive. I’m so glad I found it!",
    name: "Kashi Obioma",
    position: "Founder and CEO | Kashdev",
    avatar: "/customer-care.png",
  },
];

export const checkedTexts = [
  { text: "Submit" },
  { text: "Review Others" },
  { text: "Receive Feedback" },
  { text: "Improve" },
];

export const users = [
  {
    id: 1,
    name: "Latex",
    // image:
    //   "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    image: "/mem-1.jpg",
  },
  {
    id: 2,
    name: "David",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "cascade",
    image: "/mem-3.jpg",
  },
  {
    id: 4,
    name: "James",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Aisha",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Gbenga",
    // image:
    //   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    image: "/mem-2.jpg",
  },
  {
    id: 7,
    name: "Elena",
    // image:
    //   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    image: "/mem-5.jpg",
  },
  {
    id: 8,
    name: "Twentyzn",
    // image:
    //   "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    image: "/mem-4.jpg",
  },
  {
    id: 9,
    name: "Aisha",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 10,
    name: "Carlos",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 11,
    name: "Elena",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export const menuItems = [
  { icon: FiHome, label: "Home", href: "/dashboard" },
  { icon: GrDocumentDownload, label: "Courses", href: "/courses" },
  {
    icon: FiBookmark,
    label: "Saved Courses",
    href: "/saved-courses",
  },
  { icon: FaRegFileAlt, label: "History", href: "/history" },
  { icon: TbUsers, label: "Peer Review", href: "/peer-review" },
  {
    icon: FaListUl,
    label: "Recent Activity",
    href: "/recent-activity",
  },
];

export const bottomMenuItems = [
  { icon: IoSettingsOutline, label: "Settings", href: "/settings" },
  { icon: GoBell, label: "Notification", href: "/notifications" },
  { icon: IoHelpCircleOutline, label: "Help", href: "/help" },
];

export const categories = [
  "All Courses",
  "Design",
  "Development",
  "Data Science",
  "Communication",
  "Business",
  "Marketing",
];

export const historyData = [
  {
    id: "1",
    courseTitle: "Intro to Web Developer",
    lessonTitle: "HTML Fundamentals",
    progress: 100,
    lastAccessed: "2 hours ago",
    duration: "25:30",
  },
  {
    id: "2",
    courseTitle: "Learn Data Analyst",
    lessonTitle: "Introduction to Data Analysis",
    progress: 75,
    lastAccessed: "1 day ago",
    duration: "20:30",
  },
  {
    id: "3",
    courseTitle: "Intro to Graphic Design",
    lessonTitle: "Color Theory Basics",
    progress: 50,
    lastAccessed: "3 days ago",
    duration: "22:45",
  },
];

export const messages = [
  {
    id: "1",
    sender: "John Doe",
    subject: "Course Completion Certificate",
    preview:
      "Congratulations! You have successfully completed the Web Development course...",
    time: "2 hours ago",
    isRead: false,
  },
  {
    id: "2",
    sender: "ADPLearn Support",
    subject: "New Course Recommendation",
    preview:
      "Based on your learning history, we recommend checking out our Advanced JavaScript course...",
    time: "1 day ago",
    isRead: true,
  },
  {
    id: "3",
    sender: "Jane Smith",
    subject: "Study Group Invitation",
    preview:
      "Hi! I noticed you're taking the Data Analysis course. Would you like to join our study group?",
    time: "2 days ago",
    isRead: true,
  },
];

export const activities = [
  {
    id: "1",
    type: "course_completed",
    title: 'Completed "HTML Fundamentals" lesson',
    course: "Intro to Web Developer",
    time: "2 hours ago",
    icon: FiAward,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
  },
  {
    id: "2",
    type: "course_saved",
    title: 'Saved "Digital Marketing" course',
    course: "Digital Marketing",
    time: "5 hours ago",
    icon: FiBookmark,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    id: "3",
    type: "lesson_started",
    title: 'Started "Color Theory Basics" lesson',
    course: "Intro to Graphic Design",
    time: "1 day ago",
    icon: FiPlay,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
  },
  {
    id: "4",
    type: "profile_updated",
    title: "Updated profile information",
    course: null,
    time: "2 days ago",
    icon: FiUser,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
];

export const contacts: Contact[] = [
  {
    id: "1",
    name: "Ademuyiwa Sunka...",
    avatar: "👨🏾‍💼",
    lastMessage: "Non in semper nisl adipisc...",
    time: "9:11 pm",
    isOnline: true,
  },
  {
    id: "2",
    name: "Are Oluwafunmiayo",
    avatar: "👨🏾‍🎓",
    lastMessage: "Non in semper nisl adipisc...",
    time: "9:11 pm",
    isOnline: false,
    unreadCount: 2,
  },
  {
    id: "3",
    name: "Omosebi Gbenga",
    avatar: "👨🏾‍💼",
    lastMessage: "Hey, I went through your p...",
    time: "9:11 pm",
    isOnline: false,
    unreadCount: 2,
  },
  {
    id: "4",
    name: "Dada Ajibola",
    avatar: "👨🏾‍💼",
    lastMessage: "Good point. I'll add that s...",
    time: "9:11 pm",
    isOnline: false,
  },
  {
    id: "5",
    name: "Oladipe Ayoola",
    avatar: "👨🏾‍💼",
    lastMessage: "Non in semper nisl adipisc...",
    time: "9:11 pm",
    isOnline: false,
  },
  {
    id: "6",
    name: "Abass Anifat",
    avatar: "👩🏾‍💼",
    lastMessage: "Non in semper nisl adipisc...",
    time: "9:11 pm",
    isOnline: false,
  },
  {
    id: "7",
    name: "Ololade Asake",
    avatar: "👨🏾‍⚕️",
    lastMessage: "Non in semper nisl adipisc...",
    time: "9:11 pm",
    isOnline: false,
  },
];

export const initialConversations: Record<string, Message[]> = {
  "1": [
    {
      id: "1-1",
      senderId: "1",
      content: "What do you think about the latest project requirements?",
      timestamp: "9:10 pm",
      isOwn: false,
    },
  ],
  "2": [
    {
      id: "2-1",
      senderId: "2",
      content:
        "Hey, I went through your poster design. The color palette feels fresh, and the typography choice fits the youthful theme. But I think the headline could be a bit bolder so it grabs attention instantly.",
      timestamp: "9:11 pm",
      isOwn: false,
    },
    {
      id: "2-2",
      senderId: "me",
      content:
        "Thanks! I was actually worried the headline might be too subtle. I'll increase the weight and maybe try a brighter accent color for contrast.",
      timestamp: "9:11 pm",
      isOwn: true,
    },
    {
      id: "2-3",
      senderId: "2",
      content:
        "That should work. Also, your image placement is great, but there's a lot of empty space on the bottom right—maybe you could add a small call-to-action or contact info there.",
      timestamp: "9:11 pm",
      isOwn: false,
    },
    {
      id: "2-4",
      senderId: "me",
      content:
        "Good point. I'll add that so it feels more balanced. By the way, your layout suggestions last time helped me fix the alignment—it looks much cleaner now.",
      timestamp: "9:11 pm",
      isOwn: true,
    },
  ],
  "3": [
    {
      id: "3-1",
      senderId: "3",
      content: "Hey, I went through your project. Looking good so far!",
      timestamp: "9:09 pm",
      isOwn: false,
    },
    {
      id: "3-2",
      senderId: "me",
      content: "Thanks for the feedback!",
      timestamp: "9:10 pm",
      isOwn: true,
    },
  ],
  "4": [
    {
      id: "4-1",
      senderId: "4",
      content: "Good point. I'll add that so it feels more complete.",
      timestamp: "9:08 pm",
      isOwn: false,
    },
  ],
};

export const defaultSyllabusData: SyllabusData = {
  title: "Intro to Graphic Design – Course Syllabus",
  overview:
    "This beginner-friendly course introduces you to the principles, tools, and creative processes of graphic design. You'll learn how to create visually appealing designs, work with industry-standard software, and apply your skills in real-world projects.",
  modules: [
    {
      id: "module-1",
      title: "Module 1 – Introduction to Graphic Design",
      lessons: [
        {
          id: "lesson-1-1",
          title: "Lesson 1.1 – Understanding Graphic Design",
          topics: [
            "What is graphic design?",
            "The role of graphic design in communication and branding",
            "Key types of design: print, digital, advertising, packaging, and UI/UX",
          ],
        },
      ],
    },
  ],
};
