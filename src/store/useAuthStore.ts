import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  email: string;
  fullName: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  createdAt: string;
  isEmailVerified: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  hasCompletedOnboarding: boolean;
  tokenExpiryTime: number | null; // Unix timestamp

  // Actions
  signIn: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; message?: string }>;
  signUp: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<{ success: boolean; message?: string }>;
  signOut: () => void;
  googleAuth: () => Promise<{ success: boolean; message?: string }>;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
  setOnboardingComplete: () => void;
  checkOnboardingStatus: () => boolean;
  checkTokenExpiry: () => boolean;
  initializeAuth: () => void;
}

const NEXT_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Global user access helper
export const getCurrentUser = () => {
  return useAuthStore.getState().user;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      hasCompletedOnboarding: false,
      tokenExpiryTime: null,

      initializeAuth: () => {
        const state = get();
        // console.log("Initializing auth state:", state);

        if (state.token && state.tokenExpiryTime) {
          const now = Date.now();
          if (now >= state.tokenExpiryTime) {
            // console.log("Token expired during initialization, logging out");
            get().signOut();
            // Show expiry toast if toast context is available
            if (typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("tokenExpired"));
            }
          } else {
            // Token is still valid, check onboarding status
            const onboardingCompleted =
              localStorage.getItem("onboarding-completed") === "true";
            set({
              hasCompletedOnboarding: onboardingCompleted,
              isLoading: false,
            });
          }
        } else {
          set({ isLoading: false });
        }
      },

      checkTokenExpiry: () => {
        const { tokenExpiryTime, signOut } = get();
        if (tokenExpiryTime && Date.now() >= tokenExpiryTime) {
          signOut();
          // Dispatch custom event for token expiry
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("tokenExpired"));
          }
          return true;
        }
        return false;
      },

      signIn: async (email: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          const response = await fetch(`${NEXT_BASE_URL}/api/auth/signin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const data = await response.json();
          // console.log("SignIn API response:", data);

          if (!response.ok) {
            throw new Error(data.message || "Sign in failed");
          }

          // Map the new API response structure to user object
          const user: User = {
            id: data.fullName,
            email: data.fullName,
            fullName: data.email,
            firstName: data.email?.split(" ")[0] || "",
            lastName: data.email?.split(" ").slice(1).join(" ") || "",
            createdAt: new Date().toISOString(),
            isEmailVerified: true,
          };

          // Calculate expiry time (current time + expiryTimeInSec)
          const expiryTimeInSec = parseInt(data.expiryTimeInSec);
          const tokenExpiryTime = Date.now() + expiryTimeInSec * 1000;

          // Check if user has completed onboarding
          const onboardingCompleted =
            localStorage.getItem("onboarding-completed") === "true";

          set({
            user,
            token: data.token,
            refreshToken: data.refreshToken || null,
            isAuthenticated: true,
            isLoading: false,
            error: null,
            hasCompletedOnboarding: onboardingCompleted,
            tokenExpiryTime,
          });

          // console.log("Auth state updated:", {
          //   user,
          //   isAuthenticated: true,
          //   tokenExpiryTime: new Date(tokenExpiryTime).toISOString(),
          // });

          // Set up automatic logout before token expires (5 minutes before)
          const timeUntilExpiry = expiryTimeInSec * 1000;
          const warningTime = Math.max(timeUntilExpiry - 5 * 60 * 1000, 0);

          setTimeout(() => {
            get().checkTokenExpiry();
          }, warningTime);

          return { success: true, message: "Successfully signed in!" };
        } catch (error) {
          console.error("SignIn error:", error);
          const message =
            error instanceof Error ? error.message : "Sign in failed";
          set({
            error: message,
            isLoading: false,
            isAuthenticated: false,
            user: null,
            token: null,
            refreshToken: null,
            tokenExpiryTime: null,
          });
          return { success: false, message };
        }
      },

      signUp: async (email: string, password: string, fullName: string) => {
        set({ isLoading: true, error: null });

        try {
          const response = await fetch(`${NEXT_BASE_URL}/api/auth/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, fullName }),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Sign up failed");
          }

          set({
            isLoading: false,
            error: null,
          });

          return {
            success: true,
            message: data.message || "Account created successfully!",
          };
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "Sign up failed";
          set({
            error: message,
            isLoading: false,
          });
          return { success: false, message };
        }
      },

      googleAuth: async () => {
        set({ isLoading: true, error: null });

        try {
          const response = await fetch(`${NEXT_BASE_URL}/api/auth/google`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || "Google authentication failed");
          }

          // Map response similar to signIn
          const user: User = {
            id: data.email,
            email: data.email,
            fullName: data.fullName,
            firstName: data.fullName?.split(" ")[0] || "",
            lastName: data.fullName?.split(" ").slice(1).join(" ") || "",
            createdAt: new Date().toISOString(),
            isEmailVerified: true,
          };

          const expiryTimeInSec = parseInt(data.expiryTimeInSec);
          const tokenExpiryTime = Date.now() + expiryTimeInSec * 1000;

          const onboardingCompleted =
            localStorage.getItem("onboarding-completed") === "true";

          set({
            user,
            token: data.token,
            refreshToken: data.refreshToken || null,
            isAuthenticated: true,
            isLoading: false,
            error: null,
            hasCompletedOnboarding: onboardingCompleted,
            tokenExpiryTime,
          });

          return {
            success: true,
            message: "Successfully authenticated with Google!",
          };
        } catch (error) {
          const message =
            error instanceof Error
              ? error.message
              : "Google authentication failed";
          set({
            error: message,
            isLoading: false,
            isAuthenticated: false,
            user: null,
            token: null,
            refreshToken: null,
            tokenExpiryTime: null,
          });
          return { success: false, message };
        }
      },

      signOut: () => {
        set({
          user: null,
          token: null,
          refreshToken: null,
          isAuthenticated: false,
          error: null,
          hasCompletedOnboarding: false,
          tokenExpiryTime: null,
        });
      },

      clearError: () => set({ error: null }),

      setLoading: (loading: boolean) => set({ isLoading: loading }),

      setOnboardingComplete: () => {
        localStorage.setItem("onboarding-completed", "true");
        set({ hasCompletedOnboarding: true });
      },

      checkOnboardingStatus: () => {
        const completed =
          localStorage.getItem("onboarding-completed") === "true";
        set({ hasCompletedOnboarding: completed });
        return completed;
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        refreshToken: state.refreshToken,
        isAuthenticated: state.isAuthenticated,
        tokenExpiryTime: state.tokenExpiryTime,
      }),
      onRehydrateStorage: () => (state) => {
        // console.log("Rehydrating auth state:", state);
        if (state) {
          // Initialize auth state after rehydration
          setTimeout(() => state.initializeAuth(), 0);
        }
      },
    }
  )
);
