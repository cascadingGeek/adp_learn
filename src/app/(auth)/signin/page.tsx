"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

type AuthView = "initial" | "form";

const SignInPage = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<AuthView>("initial");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", formData);
    router.push("/dashboard");
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in");
    router.push("/dashboard");
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

          <div className="space-y-4">
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-none outline-0 bg-[#E2E5E8] rounded-full cursor-pointer flex items-center justify-center gap-2"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="text-xl" />
              Sign in with Google
            </Button>

            <Button
              type="button"
              className="w-full h-12 border-none outline-0 bg-[#7B61FF] rounded-full cursor-pointer flex items-center justify-center gap-2 text-white"
              onClick={() => setCurrentView("form")}
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
      <div className="flex items-center justify-center p-10 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Getting Started with{" "}
              <span className="text-[#7B61FF]">ADPLearn</span>
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#22272F] mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-full"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#22272F] mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  className="p-2 rounded-full"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
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
            >
              Sign in
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
