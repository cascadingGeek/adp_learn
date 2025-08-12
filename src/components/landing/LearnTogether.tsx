"use client";
import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials, checkedTexts } from "@/utils/data";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export function LearnTogether() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 320;
  const maxIndex = testimonials.length - 1;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 xl:p-20 bg-[#F8FCFF]">
      <div className="text-center space-y-4 mb-8 md:mb-16">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-[#34296B]">
          Learn Together Through <br /> Peer Reviews
        </h2>
        <p className="text-[#686A6B] text-lg md:text-xl font-normal px-4">
          Submit assignments, review peers, and receive constructive feedback in
          an accessible way.
        </p>
      </div>

      <div className="hidden md:block relative mb-12">
        <div className="grid md:grid-cols-2 grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 px-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${
                index % 2 === 1 ? "bg-[#D6CEFF]" : "bg-[#FFF9E8]"
              } border-0 shadow-sm hover:shadow-md transition-shadow`}
            >
              <CardContent className="space-y-10 flex flex-col justify-between">
                <p className="text-gray-600 text-sm">
                  {testimonial.description}
                </p>
                <div className="flex gap-1 items-center">
                  <div
                    className="w-10 h-10 rounded-full border border-white bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${testimonial.avatar}')`,
                    }}
                    role="img"
                    aria-label="Hero Image"
                  />

                  <div className="flex flex-col">
                    <h6 className="text-[#001928] text-sm">
                      {testimonial.name}
                    </h6>
                    <p className="text-[#54656F] text-[10px]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile Scrollable View */}
      <div className="md:hidden relative mb-12">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`${
                index % 2 === 0 ? "bg-[#D6CEFF]" : "bg-[#FFF9E8]"
              } border-0 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-80 snap-center`}
            >
              <CardContent className="p-6 space-y-4">
                <p className="text-gray-600 text-sm">
                  {testimonial.description}
                </p>
                <div className="flex gap-1 items-center">
                  <div
                    className="w-10 h-10 rounded-full border border-white bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('${testimonial.avatar}')`,
                    }}
                    role="img"
                    aria-label="Hero Image"
                  />

                  <div className="flex flex-col">
                    <h6 className="text-[#001928] text-sm">
                      {testimonial.name}
                    </h6>
                    <p className="text-[#54656F] text-[10px]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Arrow Controls for Mobile */}
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`absolute top-1/2 left-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#E6EEF7] hover:bg-[#7B61FF] text-black hover:text-white transition-all duration-300 flex items-center justify-center ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <FaArrowLeftLong className="text-lg" />
        </button>

        <button
          onClick={scrollRight}
          disabled={currentIndex === maxIndex}
          className={`absolute top-1/2 right-2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#E6EEF7] hover:bg-[#7B61FF] text-black hover:text-white transition-all duration-300 flex items-center justify-center ${
            currentIndex === maxIndex
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <FaArrowRightLong className="text-lg" />
        </button>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-5">
        {checkedTexts.map((text, index) => (
          <div className="flex items-center gap-1 md:gap-2" key={index}>
            <FaCheckCircle className="text-[#7B61FF] text-base md:text-lg" />
            <p className="text-sm md:text-base">
              <span>{text.text}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
