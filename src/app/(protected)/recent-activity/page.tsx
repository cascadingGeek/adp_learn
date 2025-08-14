"use client";

import { FiPlay, FiBookmark, FiAward, FiUser } from "react-icons/fi";

const activities = [
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

export default function RecentActivityPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-gray-600">
          Keep track of your learning journey and achievements
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="divide-y divide-gray-200">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <div key={activity.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full ${activity.iconBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${activity.iconColor}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </p>
                    {activity.course && (
                      <p className="text-sm text-gray-600 mt-1">
                        in {activity.course}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
