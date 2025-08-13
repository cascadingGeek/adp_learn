"use client";

import { FiClock, FiPlay, FiCheckCircle } from "react-icons/fi";

const historyData = [
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

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Learning History
        </h1>
        <p className="text-gray-600">
          Track your learning progress and continue where you left off
        </p>
      </div>

      <div className="space-y-4">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.courseTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{item.lessonTitle}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <FiClock className="w-4 h-4 mr-1" />
                    {item.duration}
                  </span>
                  <span>Last accessed {item.lastAccessed}</span>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-indigo-600 font-medium">
                      {item.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 h-2 rounded-full transition-all"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="ml-4">
                {item.progress === 100 ? (
                  <FiCheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <button className="p-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200">
                    <FiPlay className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
