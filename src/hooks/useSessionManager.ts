"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useSessionManager = () => {
  const { checkTokenExpiry, isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) return;

    // Check token expiry on mount
    checkTokenExpiry();

    // Set up periodic token expiry checks (every minute)
    const interval = setInterval(() => {
      checkTokenExpiry();
    }, 60000);

    // Listen for token expiry events
    const handleTokenExpiry = () => {
      toast("Your session has expired. Please sign in again.", {
        duration: 1500,
      });
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    };

    window.addEventListener("tokenExpired", handleTokenExpiry);

    return () => {
      clearInterval(interval);
      window.removeEventListener("tokenExpired", handleTokenExpiry);
    };
  }, [isAuthenticated, checkTokenExpiry, router]);
};
