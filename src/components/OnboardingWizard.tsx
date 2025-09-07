"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useOnboardingStore } from "@/store/useOnboardingStore";
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Laptop,
  Briefcase,
  Globe,
  Mountain,
  Video,
  Volume2,
  FileText,
  Activity,
  User,
  Users,
  UserCheck,
  CheckCircle,
  XCircle,
  Sun,
  Moon,
  Settings,
} from "lucide-react";
import { TbVectorBezierCircle } from "react-icons/tb";
import { FaBezierCurve } from "react-icons/fa6";

interface OptionCardProps {
  icon: React.ReactNode;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const OptionCard = ({ icon, label, isSelected, onClick }: OptionCardProps) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={`relative w-full py-5 px-2 rounded-xl border-2 transition-all duration-200 text-left flex items-center justify-between gap-3 cursor-pointer ${
      isSelected
        ? "border-[#7058E8] bg-transparent hover:bg-transparent shadow-md"
        : "border-[#B0B8BC] bg-transparent hover:bg-transparent"
    }`}
  >
    <div className="flex items-center gap-2">
      <div
        className={`flex-shrink-0 ${
          isSelected ? "text-[#7058E8]" : "text-[#54656F]"
        }`}
      >
        {icon}
      </div>
      <span
        className={`font-medium ${
          isSelected ? "text-[#000B11]" : "text-[#54656F]"
        }`}
      >
        {label}
      </span>
    </div>
    {isSelected && (
      <div className="absolute top-2 right-2">
        <div className="w-6 h-6 bg-[#7058E8] rounded-full flex items-center justify-center">
          <CheckCircle className="w-2 h-2 text-white" />
        </div>
      </div>
    )}
  </Button>
);

export default function OnboardingWizard() {
  const router = useRouter();
  const {
    currentStep,
    preferences,
    theme,
    isSubmitting,
    error,
    updatePreferences,
    setTheme,
    nextStep,
    prevStep,
    submitPreferences,
  } = useOnboardingStore();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const handleNext = async () => {
    if (currentStep === 6) {
      await submitPreferences();
      if (!error) {
        router.push("/courses");
      }
    } else {
      nextStep();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#001928] w-[80%] text-left">
                  What is your current skill level in your area of interest?
                </h2>
                <span className="text-sm text-[#888B8C] font-light">
                  {currentStep}/6
                </span>
              </div>
              <p className="text-[#001724] text-xs font-light text-left">
                Your feedback will help us personalise your experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <OptionCard
                icon={<FaBezierCurve className="w-6 h-6" />}
                label="Beginner"
                isSelected={preferences.skillLevel === "BEGINNER"}
                onClick={() => updatePreferences({ skillLevel: "BEGINNER" })}
              />
              <OptionCard
                icon={<TbVectorBezierCircle className="w-6 h-6" />}
                label="Intermediate"
                isSelected={preferences.skillLevel === "INTERMEDIATE"}
                onClick={() =>
                  updatePreferences({ skillLevel: "INTERMEDIATE" })
                }
              />
              <div className="md:col-span-1">
                <OptionCard
                  icon={<Mountain className="w-6 h-6" />}
                  label="Advanced"
                  isSelected={preferences.skillLevel === "ADVANCED"}
                  onClick={() => updatePreferences({ skillLevel: "ADVANCED" })}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#001928] w-[80%] text-left">
                  Which skill area are you most interested in?
                </h2>
                <span className="text-sm text-[#888B8C] font-light">
                  {currentStep}/6
                </span>
              </div>
              <p className="text-[#001724] text-xs font-light text-left">
                Your feedback will help us personalise your experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <OptionCard
                icon={<Laptop className="w-6 h-6" />}
                label="Tech"
                isSelected={preferences.skillArea === "TECH"}
                onClick={() => updatePreferences({ skillArea: "TECH" })}
              />
              <OptionCard
                icon={<Monitor className="w-6 h-6" />}
                label="Design"
                isSelected={preferences.skillArea === "DESIGN"}
                onClick={() => updatePreferences({ skillArea: "DESIGN" })}
              />
              <OptionCard
                icon={<Briefcase className="w-6 h-6" />}
                label="Business"
                isSelected={preferences.skillArea === "BUSINESS"}
                onClick={() => updatePreferences({ skillArea: "BUSINESS" })}
              />
              <OptionCard
                icon={<Globe className="w-6 h-6" />}
                label="Languages"
                isSelected={preferences.skillArea === "LANGUAGES"}
                onClick={() => updatePreferences({ skillArea: "LANGUAGES" })}
              />
              <OptionCard
                icon={<Mountain className="w-6 h-6" />}
                label="Creative Arts"
                isSelected={preferences.skillArea === "CREATIVE_ARTS"}
                onClick={() =>
                  updatePreferences({ skillArea: "CREATIVE_ARTS" })
                }
              />
              <OptionCard
                icon={<Settings className="w-6 h-6" />}
                label="Others (Please specify)"
                isSelected={preferences.skillArea === "OTHERS"}
                onClick={() => updatePreferences({ skillArea: "OTHERS" })}
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#001928] w-[80%] text-left">
                  Do you have a preferred way to consume content?
                </h2>
                <span className="text-sm text-[#888B8C] font-light">
                  {currentStep}/6
                </span>
              </div>
              <p className="text-[#001724] text-xs font-light text-left">
                Your feedback will help us personalise your experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <OptionCard
                icon={<Video className="w-6 h-6" />}
                label="Video"
                isSelected={preferences.contentReference === "VIDEO"}
                onClick={() => updatePreferences({ contentReference: "VIDEO" })}
              />
              <OptionCard
                icon={<Volume2 className="w-6 h-6" />}
                label="Audio"
                isSelected={preferences.contentReference === "AUDIO"}
                onClick={() => updatePreferences({ contentReference: "AUDIO" })}
              />
              <OptionCard
                icon={<FileText className="w-6 h-6" />}
                label="Text-based"
                isSelected={preferences.contentReference === "TEXT_BASED"}
                onClick={() =>
                  updatePreferences({ contentReference: "TEXT_BASED" })
                }
              />
              <OptionCard
                icon={<Activity className="w-6 h-6" />}
                label="Interactive activities"
                isSelected={
                  preferences.contentReference === "INTERACTIVE_ACTIVITIES"
                }
                onClick={() =>
                  updatePreferences({
                    contentReference: "INTERACTIVE_ACTIVITIES",
                  })
                }
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#001928] w-[80%] text-left">
                  How do you prefer to learn?
                </h2>
                <span className="text-sm text-[#888B8C] font-light">
                  {currentStep}/6
                </span>
              </div>
              <p className="text-[#001724] text-xs font-light text-left">
                Your feedback will help us personalise your experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <OptionCard
                icon={<User className="w-6 h-6" />}
                label="Self-paced modules"
                isSelected={
                  preferences.learningReference === "SELF_PACE_MODULES"
                }
                onClick={() =>
                  updatePreferences({ learningReference: "SELF_PACE_MODULES" })
                }
              />
              <OptionCard
                icon={<Video className="w-6 h-6" />}
                label="Live classes/webinars"
                isSelected={
                  preferences.learningReference === "LIVE_CLASSES_WEBINARS"
                }
                onClick={() =>
                  updatePreferences({
                    learningReference: "LIVE_CLASSES_WEBINARS",
                  })
                }
              />
              <div className="md:col-span-1">
                <OptionCard
                  icon={<Users className="w-6 h-6" />}
                  label="Collaborative learning"
                  isSelected={
                    preferences.learningReference === "COLLABORATIVE_LEARNING"
                  }
                  onClick={() =>
                    updatePreferences({
                      learningReference: "COLLABORATIVE_LEARNING",
                    })
                  }
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#001928] w-[80%] text-left">
                  Would you like to collaborate with co-learners through
                  peer-to-peer reviews?
                </h2>
                <span className="text-sm text-[#888B8C] font-light">
                  {currentStep}/6
                </span>
              </div>
              <p className="text-[#001724] text-xs font-light text-left">
                Your feedback will help us personalise your experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <OptionCard
                icon={<CheckCircle className="w-6 h-6" />}
                label="Yes, I'm open to collaboration"
                isSelected={preferences.peerReview === true}
                onClick={() => updatePreferences({ peerReview: true })}
              />
              <OptionCard
                icon={<UserCheck className="w-6 h-6" />}
                label="Yes, but anonymously"
                isSelected={preferences.peerReview === true}
                onClick={() => updatePreferences({ peerReview: true })}
              />
              <div className="md:col-span-1">
                <OptionCard
                  icon={<XCircle className="w-6 h-6" />}
                  label="No, I don't"
                  isSelected={preferences.peerReview === false}
                  onClick={() => updatePreferences({ peerReview: false })}
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#001928] w-[80%] text-left">
                  Which theme do you prefer?
                </h2>
                <span className="text-sm text-[#888B8C] font-light">
                  {currentStep}/6
                </span>
              </div>
              <p className="text-[#001724] text-xs font-light text-left">
                Your feedback will help us personalise your experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <OptionCard
                icon={<Sun className="w-6 h-6" />}
                label="Light mode"
                isSelected={theme === "light"}
                onClick={() => setTheme("light")}
              />
              <OptionCard
                icon={<Moon className="w-6 h-6" />}
                label="Dark mode"
                isSelected={theme === "dark"}
                onClick={() => setTheme("dark")}
              />
              <div className="md:col-span-1">
                <OptionCard
                  icon={<Settings className="w-6 h-6" />}
                  label="System default theme"
                  isSelected={theme === "system"}
                  onClick={() => setTheme("system")}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return !!preferences.skillLevel;
      case 2:
        return !!preferences.skillArea;
      case 3:
        return !!preferences.contentReference;
      case 4:
        return !!preferences.learningReference;
      case 5:
        return preferences.peerReview !== null;
      case 6:
        return !!theme;
      default:
        return false;
    }
  };

  return (
    <div className="absolute top-0 left-0 min-h-screen w-full bg-black/70 backdrop-blur-lg flex items-center justify-center">
      <Card className="w-full max-w-xl shadow-xl rounded-2xl p-6 bg-[#F8FCFF]">
        <CardContent className="py-0 px-5">
          {/* Step content */}
          {renderStep()}

          {/* Error message */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 text-[#54656F] bg-[#E2E5E8] hover:text-gray-800 rounded-full text-sm font-light cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Go back
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepComplete() || isSubmitting}
              className="flex items-center gap-2 bg-[#7B61FF] hover:bg-[#7B61FF] text-white px-6 rounded-full text-sm font-light cursor-pointer"
            >
              {isSubmitting ? (
                "Saving..."
              ) : currentStep === 6 ? (
                "Go to Dashboard"
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
