"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";

type AuthView = "initial" | "form";

const SignInPage = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<AuthView>("initial");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    signIn,
    googleAuth,
    isLoading,
    error,
    clearError,
    isAuthenticated,
    user,
    checkOnboardingStatus,
  } = useAuthStore();

  // FIX: Updated redirect logic
  useEffect(() => {
    if (isAuthenticated && user) {
      const hasCompletedOnboarding = checkOnboardingStatus();

      // Always redirect new users to dashboard for onboarding
      // Only redirect to courses if onboarding is actually completed
      if (hasCompletedOnboarding) {
        router.push("/courses");
      } else {
        router.push("/dashboard");
      }
    }
  }, [isAuthenticated, user, router, checkOnboardingStatus]);

  useEffect(() => {
    clearError();
  }, [currentView, clearError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return;
    }

    const result = await signIn(formData.email, formData.password);

    if (result.success) {
      toast.success(result.message!, { duration: 1500 });

      // FIX: Simplified redirect logic - let useEffect handle routing
      setTimeout(() => {
        const hasCompletedOnboarding = checkOnboardingStatus();
        if (hasCompletedOnboarding) {
          router.push("/courses");
        } else {
          router.push("/dashboard");
        }
      }, 1500);
    } else {
      toast(result.message!, { duration: 1500 });
    }
  };

  const handleGoogleSignIn = async () => {
    const result = await googleAuth();

    if (result.success) {
      toast.success(result.message!, { duration: 1500 });

      // FIX: Same simplified logic for Google auth
      setTimeout(() => {
        const hasCompletedOnboarding = checkOnboardingStatus();
        if (hasCompletedOnboarding) {
          router.push("/courses");
        } else {
          router.push("/dashboard");
        }
      }, 1500);
    } else {
      toast.error(result.message!, { duration: 1500 });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (error) {
      clearError();
    }
  };

  const renderInitialView = () => (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/customer-care-1.png')",
          }}
        ></div>
      </div>

      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Welcome to <span className="text-[#7B61FF]">ADPLearn</span>
            </h1>
            <p className="text-[#686A6B]">
              Sign in to your account
              <br />
              to continue learning
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-none outline-0 bg-[#E2E5E8] rounded-full cursor-pointer flex items-center justify-center gap-2"
              onClick={handleGoogleSignIn}
              disabled
            >
              <FcGoogle className="text-xl" />
              {isLoading ? "Signing in..." : "Sign in with Google"}
            </Button>

            <Button
              type="button"
              className="w-full h-12 border-none outline-0 bg-[#7B61FF] rounded-full cursor-pointer flex items-center justify-center gap-2 text-white"
              onClick={() => setCurrentView("form")}
              disabled={isLoading}
            >
              Sign in with email
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#7B61FF] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>

          <p className="text-xs text-gray-500 text-center">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="underline">
              terms of services
            </Link>
          </p>
        </div>
      </div>
    </div>
  );

  const renderFormView = () => (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div
        className="hidden lg:flex flex-col justify-end p-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.8) 100%), url("/customer-care-1.png")',
        }}
      >
        <div className="text-white z-10">
          <h2 className="text-4xl font-bold text-[#E6B11A] mb-4">ADPLearn</h2>
          <p className="text-2xl font-medium">
            Built for everyone with screen reader support, captions, voice
            control, and more.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Welcome Back to <span className="text-[#7B61FF]">ADPLearn</span>
            </h1>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#22272F] mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-full"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#22272F] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter password"
                    className="p-2 rounded-full pr-10"
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-right">
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#7B61FF] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#7B61FF] hover:bg-[#7B61FF] cursor-pointer flex items-center justify-center gap-2 text-white rounded-full"
              disabled={isLoading || !formData.email || !formData.password}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-[#7B61FF] hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );

  return currentView === "initial" ? renderInitialView() : renderFormView();
};

export default SignInPage;
