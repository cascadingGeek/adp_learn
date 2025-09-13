"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import OnboardingWizard from "@/components/OnboardingWizard";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { useAuthStore } from "@/store/useAuthStore";
import { HeroSection } from "@/components/landing/HeroSection";

export default function DashboardPage() {
  const router = useRouter();
  const { updatePreferences, reset } = useOnboardingStore();
  const { user, checkOnboardingStatus, initializeAuth, isAuthenticated } =
    useAuthStore();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // console.log("Dashboard component mounting...", {
  //   user: user?.email || "No user",
  //   isAuthenticated,
  // });

  useEffect(() => {
    // Initialize auth state first
    initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    // console.log("Dashboard useEffect triggered", {
    //   user: user?.email || "No user",
    //   isAuthenticated,
    // });

    if (isAuthenticated && user) {
      // console.log("User found, checking onboarding status");

      // Check if user has completed onboarding
      const hasCompletedOnboarding = checkOnboardingStatus();

      if (hasCompletedOnboarding) {
        // console.log("Redirecting to courses - onboarding already completed");
        router.replace("/courses");
      } else {
        // console.log("First time user - showing onboarding");

        // Reset onboarding state for fresh start
        reset();

        // Set up student ID for onboarding
        updatePreferences({ studentId: user.fullName });

        // Show onboarding
        setShowOnboarding(true);
      }

      setIsLoading(false);
    } else if (!isAuthenticated) {
      // console.log("User not authenticated, redirecting to signin");
      router.replace("/signin");
    } else {
      // console.log("No user found, keeping loading state");
      setIsLoading(false);
    }
  }, [
    user,
    isAuthenticated,
    updatePreferences,
    router,
    checkOnboardingStatus,
    reset,
    showOnboarding,
  ]);

  // console.log("Dashboard render state:", {
  //   isLoading,
  //   user: !!user,
  //   showOnboarding,
  //   isAuthenticated,
  // });

  // Show loading while auth is initializing
  if (isLoading) {
    // console.log("Showing loading spinner");
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7B61FF]"></div>
        <p className="ml-4 text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  // If not authenticated, show nothing (redirect will happen)
  if (!isAuthenticated || !user) {
    return null;
  }

  // console.log({ user });

  return (
    <div className="min-h-screen">
      {showOnboarding && <OnboardingWizard />}
      <HeroSection />
    </div>
  );
}
