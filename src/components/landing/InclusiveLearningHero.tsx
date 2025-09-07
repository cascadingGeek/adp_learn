"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { users } from "@/utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Positioning data for scattered effect
const avatarPositions = [
  { top: "30%", right: "35%", size: "w-36 h-36" },
  { top: "25%", right: "25%", size: "w-14 h-14" },
  { top: "20%", right: "15%", size: "w-28 h-28" },
  { top: "30%", right: "5%", size: "w-14 h-14" },
  { top: "40%", right: "25%", size: "w-14 h-14" },
  { top: "45%", right: "10%", size: "w-36 h-36" },
  { top: "60%", right: "43%", size: "w-28 h-28" },
  { top: "60%", right: "25%", size: "w-28 h-28" },
  { top: "70%", right: "8%", size: "w-12 h-12" },
  { top: "70%", right: "35%", size: "w-14 h-14" },
  { top: "50%", right: "30%", size: "w-12 h-12" },
];
export function InclusiveLearningHero() {
  const router = useRouter();

  return (
    <div className="relative min-h-auto px-20 py-10 bg-[#5745B5]">
      <div className="relative z-10 flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Ready to Start
                <br />
                <span className="block">Learning</span>
                <span className="block">Inclusively?</span>
              </h1>

              <p className="text-lg xl:text-xl text-purple-100 mb-8 leading-relaxed">
                Join thousands of learners enjoying accessible, personalized
                education.
              </p>

              <Button
                size="lg"
                className="bg-[#FDC21D] hover:bg-[#000B11] text-[#000B11] hover:text-white font-normal px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => router.push("/signin")}
              >
                Join now
              </Button>
            </div>

            {/* Right side - hidden on mobile for better UX */}
            <div className="hidden lg:block relative">
              {/* Placeholder for spacing */}
            </div>
          </div>
        </div>
      </div>

      {/* Floating user avatars - positioned absolutely */}
      <div className="hidden lg:block">
        {users.map((user, index) => {
          const position = avatarPositions[index];
          return (
            <div
              key={user.id}
              className={`absolute ${position.size} rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transition-transform duration-300 hover:scale-110 hover:border-white/40`}
              style={{
                top: position.top,
                right: position.right,
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`,
              }}
            >
              <Image
                src={user.image}
                width={100}
                height={100}
                alt={`${user.name} profile`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
}
