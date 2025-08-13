"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { learners } from "@/utils/data";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="min-h-screen bg-[#F2EFFF] px-10 xl:px-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-10 items-center min-h-[90vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-10">
              <h1 className="text-2xl xl:text-6xl font-extrabold text-[#7B61FF]">
                Learn Skills Your Way <br />
                <span className="text-[#34296B]">
                  Accessible, Inclusive, <br /> and Engaging
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-[#000B11] max-w-2xl font-normal">
                Join a platform where learning adapts to you. Personalized
                courses, accessible tools, and peer-powered growth.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-[#7B61FF] text-white text-lg hover:bg-[#34296B] rounded-full cursor-pointer font-normal"
                onClick={() => router.push("/signin")}
              >
                Start Learning
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-white hover:bg-[#34296B] border border-[#54656F] text-[#54656F] hover:text-white text-lg rounded-full cursor-pointer font-normal"
                onClick={() => router.push("/signin")}
              >
                Explore Courses
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {learners.map((learner, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${learner.image}')`,
                    }}
                    role="img"
                    aria-label="Hero Image"
                  />
                ))}
              </div>
              <span>5000+ learners already enrolled</span>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className="w-1/3 h-[500px] rounded-lg bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/customer-care.png')",
            }}
            role="img"
            aria-label="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}
