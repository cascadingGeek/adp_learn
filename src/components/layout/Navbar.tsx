"use client";

import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";

export default function Navbar() {
  const { toggleSidebar } = useStore();

  return (
    <header className="bg-white px-4 lg:px-6 py-4 shadow ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 bg-transparent hover:bg-gray-100 lg:hidden"
          >
            <FiMenu className="w-5 h-5" />
          </Button>

          <h2 className="ml-4 lg:ml-0 text-2xl font-semibold text-[#101828]">
            Dashboard
          </h2>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="p-0 rounded-md text-gray-600 hover:text-gray-900 bg-transparent hover:bg-gray-100 cursor-pointer"
          >
            <IoSettingsOutline className="text-5xl" />
          </Button>

          <Button
            variant="ghost"
            className="p-0 rounded-md text-gray-600 hover:text-gray-900 bg-transparent hover:bg-gray-100 relative cursor-pointer"
          >
            <GoBell className="text-5xl" />
            <div className="absolute top-[2px] right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
          </Button>

          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AS</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">
                Ademuyiwa Sunkanmi
              </p>
              <p className="text-xs text-gray-500">Learner</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
