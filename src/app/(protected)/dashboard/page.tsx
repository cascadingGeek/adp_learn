"use client";
import { useEffect } from "react";
import OnboardingWizard from "@/components/OnboardingWizard";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { HeroSection } from "@/components/landing/HeroSection";

export default function DashboardPage() {
  const { updatePreferences } = useOnboardingStore();
  const hasCompletedOnboarding = localStorage.getItem("onboarding-completed");

  useEffect(() => {
    const getStudentId = async () => {
      const studentId = "user@example.com";

      updatePreferences({ studentId });
    };

    getStudentId();
  }, [updatePreferences]);

  return (
    <div className="min-h-screen">
      {hasCompletedOnboarding && <OnboardingWizard />}

      <HeroSection />
    </div>
  );
}
