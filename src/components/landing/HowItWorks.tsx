"use client";
import { Card, CardContent } from "@/components/ui/card";
import { steps } from "@/utils/data";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HowItWorks() {
  const router = useRouter();
  return (
    <section className="p-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#34296B] text-center">
            How it Works
          </h2>
          <p className="text-[#686A6B] text-xl font-normal">
            Learn in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`${
                index % 2 === 1 ? "bg-[#FFF9E8]" : "bg-[#F2EFFF]"
              } border-0 shadow-sm hover:shadow-md transition-shadow p-0`}
            >
              <CardContent className="p-8 space-y-4">
                <step.icon className="text-3xl text-[#7B61FF]" />
                <h3 className="font-bold text-lg">
                  {step.title.split(":")[0]}{" "}
                  <span className="font-normal">
                    {step.title.split(":")[1]}
                  </span>
                </h3>

                <p className="text-gray-600">{step.description}</p>
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
            Get started now
          </Button>
        </div>
      </div>
    </section>
  );
}
