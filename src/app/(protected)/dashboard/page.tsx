"use client";
import { useEffect, useState } from "react";
import OnboardingWizard from "@/components/OnboardingWizard";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import { HeroSection } from "@/components/landing/HeroSection";

export default function DashboardPage() {
  const { updatePreferences } = useOnboardingStore();
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    const onboardingStatus = localStorage.getItem("onboarding-completed");
    setHasCompletedOnboarding(!!onboardingStatus);

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
