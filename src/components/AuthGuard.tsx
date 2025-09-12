"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  requireAuth = true,
  redirectTo = "/signin",
}) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuthStore();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      if (!isLoading) {
        if (requireAuth && !isAuthenticated) {
          router.replace(redirectTo);
          return;
        }
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [isAuthenticated, isLoading, requireAuth, redirectTo, router]);

  if (isLoading || isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7B61FF]"></div>
      </div>
    );
  }

  return <>{children}</>;
};
