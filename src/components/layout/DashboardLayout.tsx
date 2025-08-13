"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useStore } from "@/store/useStore";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isSidebarOpen } = useStore();
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => useStore.getState().setSidebarOpen(false)}
        />
      )}

      <div
        className={cn(
          "flex-1 flex flex-col transition-all duration-300",
          isSidebarOpen ? "lg:ml-56" : "lg:ml-56"
        )}
      >
        <Navbar />
        <main
          className={`flex-1 overflow-auto ${
            pathname === "/dashboard" ? "p-0" : "p-4 lg:p-6"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
