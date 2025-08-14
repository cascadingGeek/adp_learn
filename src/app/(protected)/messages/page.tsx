"use client";

import { FiUser, FiSend } from "react-icons/fi";
import { messages } from "@/utils/data";

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">
            Stay connected with instructors and fellow learners
          </p>
        </div>

        <button className="bg-[#7B61FF] hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center">
          <FiSend className="w-4 h-4 mr-2" />
          New Message
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 cursor-pointer ${
              !message.isRead ? "bg-indigo-50" : ""
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <FiUser className="w-5 h-5 text-gray-600" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-sm font-medium ${
                      !message.isRead ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {message.sender}
                  </h3>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>

                <p
                  className={`text-sm mt-1 ${
                    !message.isRead
                      ? "font-medium text-gray-900"
                      : "text-gray-600"
                  }`}
                >
                  {message.subject}
                </p>

                <p className="text-sm text-gray-500 mt-1 truncate">
                  {message.preview}
                </p>
              </div>

              {!message.isRead && (
                <div className="w-2 h-2 bg-[#7B61FF] rounded-full mt-2"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
