"use client";

import { FiUser, FiBell, FiLock, FiGlobe } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-gray-600">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <FiUser className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Profile Information
              </h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Ademuyiwa"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Sunkanmi"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="ademuyiwa@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bio
                </label>
                <textarea
                  rows={3}
                  defaultValue="Passionate learner exploring new technologies and skills."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <Button
                variant="default"
                className="bg-[#7B61FF] hover:bg-indigo-700 text-white cursor-pointer"
              >
                Save Changes
              </Button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiBell className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Notifications
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Course Updates
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get notified about new lessons and course updates
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-indigo-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Messages
                  </h3>
                  <p className="text-sm text-gray-600">
                    Receive notifications for new messages
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 text-indigo-600"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Marketing
                  </h3>
                  <p className="text-sm text-gray-600">
                    Receive promotional emails and offers
                  </p>
                </div>
                <input type="checkbox" className="h-4 w-4 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>

            <div className="space-y-3">
              <Button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg cursor-pointer">
                <FiLock className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">
                  Change Password
                </span>
              </Button>

              <Button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-lg cursor-pointer">
                <FiGlobe className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">
                  Language & Region
                </span>
              </Button>

              <Button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-lg text-red-600 cursor-pointer">
                <FiUser className="w-5 h-5" />
                <span className="text-sm font-medium">Delete Account</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
