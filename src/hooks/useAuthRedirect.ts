"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

const protectedRoutes = [
  "/dashboard",
  "/courses",
  "/saved-courses",
  "/history",
  "/peer-review",
  "/recent-activity",
];

export const useAuthRedirect = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading) {
      const isProtectedRoute = protectedRoutes.some((route) =>
        pathname.startsWith(route)
      );

      if (isProtectedRoute && !isAuthenticated) {
        router.replace("/signin");
      }
    }
  }, [isAuthenticated, isLoading, pathname, router]);
};
