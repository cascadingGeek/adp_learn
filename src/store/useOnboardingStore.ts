import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface UserPreferences {
  studentId: string;
  skillLevel: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "";
  skillArea:
    | "TECH"
    | "DESIGN"
    | "BUSINESS"
    | "LANGUAGES"
    | "CREATIVE_ARTS"
    | "OTHERS"
    | "";
  contentReference:
    | "VIDEO"
    | "AUDIO"
    | "TEXT_BASED"
    | "INTERACTIVE_ACTIVITIES"
    | "";
  learningReference:
    | "SELF_PACE_MODULES"
    | "LIVE_CLASSES_WEBINARS"
    | "COLLABORATIVE_LEARNING"
    | "";
  peerReview: boolean | null;
}

export interface OnboardingState {
  currentStep: number;
  preferences: UserPreferences;
  theme: "light" | "dark" | "system";
  isSubmitting: boolean;
  error: string | null;

  // Actions
  setCurrentStep: (step: number) => void;
  updatePreferences: (updates: Partial<UserPreferences>) => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
  nextStep: () => void;
  prevStep: () => void;
  submitPreferences: () => Promise<{ success: boolean; message?: string }>;
  reset: () => void;
  clearError: () => void;
}

const initialPreferences: UserPreferences = {
  studentId: "",
  skillLevel: "",
  skillArea: "",
  contentReference: "",
  learningReference: "",
  peerReview: null,
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      preferences: initialPreferences,
      theme: "system",
      isSubmitting: false,
      error: null,

      setCurrentStep: (step) => set({ currentStep: step }),

      updatePreferences: (updates) =>
        set((state) => ({
          preferences: { ...state.preferences, ...updates },
          error: null, // Clear error when user makes changes
        })),

      setTheme: (theme) => set({ theme }),

      nextStep: () =>
        set((state) => ({
          currentStep: Math.min(state.currentStep + 1, 6),
        })),

      prevStep: () =>
        set((state) => ({
          currentStep: Math.max(state.currentStep - 1, 1),
        })),

      clearError: () => set({ error: null }),

      submitPreferences: async () => {
        const { preferences } = get();

        // console.log("Submitting preferences:", preferences);

        // Validate required fields
        if (
          !preferences.skillLevel ||
          !preferences.skillArea ||
          !preferences.contentReference ||
          !preferences.learningReference ||
          preferences.peerReview === null
        ) {
          const errorMessage = "Please complete all required fields";
          set({ error: errorMessage });
          return { success: false, message: errorMessage };
        }

        set({ isSubmitting: true, error: null });

        try {
          // Convert peerReview boolean to match API expectations
          const payload = {
            ...preferences,
            peerReview: preferences.peerReview === true,
          };

          // console.log("API payload:", payload);

          const NEXT_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
          const response = await fetch(
            `${NEXT_BASE_URL}/api/auth/dashboard/onboard`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            }
          );

          // console.log("API response status:", response.status);

          // Parse response
          let responseData;
          try {
            responseData = await response.json();
            // console.log("API response data:", responseData);
          } catch (parseError) {
            console.error("Failed to parse response:", parseError);
            throw new Error("Invalid response from server");
          }

          if (!response.ok) {
            // Handle different error scenarios
            const errorMessage =
              responseData?.message ||
              responseData?.error ||
              `Server error: ${response.status}`;

            console.error("API error:", errorMessage);
            set({ error: errorMessage, isSubmitting: false });
            return { success: false, message: errorMessage };
          }

          // Success - preferences saved
          // console.log("Preferences saved successfully");
          set({ isSubmitting: false, error: null });

          return {
            success: true,
            message: responseData?.message || "Preferences saved successfully!",
          };
        } catch (error) {
          console.error("Error saving preferences:", error);

          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to save preferences. Please check your connection and try again.";

          set({
            error: errorMessage,
            isSubmitting: false,
          });

          return { success: false, message: errorMessage };
        }
      },

      reset: () =>
        set({
          currentStep: 1,
          preferences: initialPreferences,
          isSubmitting: false,
          error: null,
        }),
    }),
    {
      name: "onboarding-storage",
      partialize: (state) => ({
        currentStep: state.currentStep,
        preferences: state.preferences,
        theme: state.theme,
      }),
    }
  )
);
