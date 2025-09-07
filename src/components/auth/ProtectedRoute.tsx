"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireOnboarding?: boolean;
}

export default function ProtectedRoute({
  children,
  redirectTo = "/signin",
  requireOnboarding = true,
}: ProtectedRouteProps) {
  const router = useRouter();
  const { isAuthenticated, user, token } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // If not authenticated, redirect to login
        if (!isAuthenticated || !token) {
          router.push(redirectTo);
          return;
        }

        // Check onboarding status
        if (requireOnboarding && isAuthenticated && user) {
          const hasCompletedOnboarding = localStorage.getItem(
            "onboarding-completed"
          );
          if (
            !hasCompletedOnboarding &&
            window.location.pathname !== "/onboarding"
          ) {
            router.push("/onboarding");
            return;
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Auth check error:", error);
        router.push(redirectTo);
      }
    };

    checkAuth();
  }, [isAuthenticated, token, user, router, redirectTo, requireOnboarding]);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // If authenticated, render children
  if (isAuthenticated && user) {
    return <>{children}</>;
  }

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>
  );
}
