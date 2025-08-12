"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { courses } from "@/utils/data";

export function CourseShowcase() {
  const router = useRouter();
  return (
    <section className="p-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#34296B] text-center">
            Learn from a Wide Range of <br /> Skill-Based Courses
          </h2>
          <p className="text-[#686A6B] text-xl font-medium max-w-2xl mx-auto">
            Join a platform where learning adapts to you. Personalized courses,
            accessible tools, and peer-powered growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-lg transition-shadow p-0 ${
                index % 2 === 1 ? "bg-[#7B61FF]" : "bg-[#34296B]"
              }`}
            >
              <div className="aspect-video relative mx-3 mt-3">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={0}
                  height={0}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-5 left-5 w-auto h-auto p-2 rounded-sm bg-[#F2EFFF]">
                  <course.icon className="text-2xl text-[#7B61FF]" />
                </div>
              </div>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-bold text-xl text-white">{course.title}</h3>
                <p className="text-white">{course.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#7B61FF] text-white text-lg hover:bg-[#34296B] cursor-pointer rounded-full font-normal"
            onClick={() => {
              router.push("/signin");
            }}
          >
            View all courses
          </Button>
        </div>
      </div>
    </section>
  );
}
