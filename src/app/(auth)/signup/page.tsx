"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { AlertCircle, Eye, EyeOff, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";

type AuthView = "initial" | "form";

const SignUpPage = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<AuthView>("initial");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    match: false,
  });

  const {
    signUp,
    googleAuth,
    isLoading,
    error,
    clearError,
    isAuthenticated,
    user,
  } = useAuthStore();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated && user) {
      router.push("/signin");
    }
  }, [isAuthenticated, user, router]);

  // Clear error when component mounts or view changes
  useEffect(() => {
    clearError();
  }, [currentView, clearError]);

  // Validate password
  useEffect(() => {
    setPasswordValidation({
      length: formData.password.length >= 6,
      match:
        formData.password === formData.confirmPassword &&
        formData.confirmPassword.length > 0,
    });
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.fullName
    ) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    if (formData.password.length < 6) {
      return;
    }

    const result = await signUp(
      formData.email,
      formData.password,
      formData.fullName
    );

    if (result.success) {
      toast.success(result.message!, { duration: 1500 });
      // Redirect to sign in page after successful signup
      setTimeout(() => {
        router.push("/signin");
      }, 1500);
    } else {
      toast.error(result.message!, { duration: 1500 });
    }
  };

  const handleGoogleSignUp = async () => {
    const result = await googleAuth();

    if (result.success) {
      toast.success(result.message!, { duration: 1500 });
      // Handle Google auth redirect logic here if needed
    } else {
      toast.error(result.message!, { duration: 1500 });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (error) {
      clearError();
    }
  };

  const isFormValid = () => {
    return (
      formData.email && passwordValidation.length && passwordValidation.match
    );
  };

  const renderInitialView = () => (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/customer-care-1.png')",
          }}
        />
      </div>

      {/* Right side - CTA */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Welcome to <span className="text-[#7B61FF]">ADPLearn</span>
            </h1>
            <p className="text-[#686A6B]">
              Create an account
              <br />
              to get started
            </p>
          </div>

          {/* Error Message */}
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
              onClick={handleGoogleSignUp}
              disabled
            >
              <FcGoogle className="text-xl" />
              {isLoading ? "Signing up..." : "Sign up with Google"}
            </Button>

            <Button
              type="button"
              className="w-full h-12 border-none outline-0 bg-[#7B61FF] rounded-full cursor-pointer flex items-center justify-center gap-2 text-white"
              onClick={() => setCurrentView("form")}
              disabled={isLoading}
            >
              Sign up with email
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-[#7B61FF] hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>

          <p className="text-xs text-gray-500 text-center">
            By signing up, you agree to our{" "}
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
      {/* Left side - Image with Overlay */}
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

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Getting Started with{" "}
              <span className="text-[#7B61FF]">ADPLearn</span>
            </h1>
          </div>

          {/* Error Message */}
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
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  className="p-2 rounded-full"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />
              </div>

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
                  Create Password
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
                  <Button
                    variant="ghost"
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Password validation indicators */}
                <div className="mt-2 space-y-1">
                  <div
                    className={`flex items-center gap-2 text-xs ${
                      passwordValidation.length
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    <CheckCircle
                      className={`w-3 h-3 ${
                        passwordValidation.length
                          ? "text-green-500"
                          : "text-gray-300"
                      }`}
                    />
                    At least 6 characters
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#22272F] mb-2">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="p-2 rounded-full"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                />

                {/* Password match indicator */}
                {formData.confirmPassword && (
                  <div
                    className={`flex items-center gap-2 text-xs mt-2 ${
                      passwordValidation.match
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    <CheckCircle
                      className={`w-3 h-3 ${
                        passwordValidation.match
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    />
                    {passwordValidation.match
                      ? "Passwords match"
                      : "Passwords do not match"}
                  </div>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-[#7B61FF] hover:bg-[#7B61FF] cursor-pointer flex items-center justify-center gap-2 text-white rounded-full"
              disabled={isLoading || !isFormValid()}
            >
              {isLoading ? "Creating account..." : "Sign up"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-[#7B61FF] hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );

  return currentView === "initial" ? renderInitialView() : renderFormView();
};

export default SignUpPage;
