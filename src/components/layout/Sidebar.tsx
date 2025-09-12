"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { menuItems, bottomMenuItems } from "@/utils/data";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isSidebarOpen, setSidebarOpen } = useStore();
  const { signOut } = useAuthStore();

  const handleSignOut = () => {
    signOut();
    toast.success("Successfully logged out!", { duration: 1500 });

    // localStorage.removeItem("onboarding-completed");
    // localStorage.removeItem("onboarding-storage");

    // Redirect to signin page
    setTimeout(() => {
      router.push("/signin");
    }, 1000);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-56 lg:flex-col bg-white border-r border-gray-200">
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center justify-center h-16 px-6">
            <h1 className="text-2xl font-bold text-[#7058E8] text-center">
              ADPLearn
            </h1>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 gap-5 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-[#F8FCF8] text-[#7058E8] border-indigo-700"
                      : "text-[#667085] hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon
                    className={`text-lg ${
                      isActive ? "text-[#7058E8]" : "text-[#667085]"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}

            <div className="w-full h-[1px] my-5 bg-gray-200" />

            {bottomMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 gap-5 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-[#F8FCF8] text-[#7058E8] border-indigo-700"
                      : "text-[#667085] hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon
                    className={`text-lg ${
                      isActive ? "text-[#7058E8]" : "text-[#667085]"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-5 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 bg-transparent hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={handleSignOut}
            >
              <FaArrowLeftLong className="text-lg" />
              Log Out
            </Button>
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-[#7058E8]">ADPLearn</h1>
            <Button
              variant="ghost"
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 bg-transparent hover:bg-gray-100"
            >
              <FiX className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center px-3 py-2 gap-5 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-[#F8FCF8] text-[#7058E8]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon
                    className={`text-lg ${
                      isActive ? "text-[#7058E8]" : "text-[#667085]"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="px-4 py-6 border-t border-gray-200">
            <nav className="space-y-1">
              {bottomMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center px-3 py-2 gap-5 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "bg-[#F8FCF8] text-[#7058E8]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    )}
                  >
                    <Icon
                      className={`text-lg ${
                        isActive ? "text-[#7058E8]" : "text-[#667085]"
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}

              <Button
                variant="ghost"
                className="flex items-center justify-start gap-5 w-full px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-gray-900 bg-transparent hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={handleSignOut}
              >
                <FaArrowLeftLong className="text-lg" />
                Log Out
              </Button>
            </nav>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
