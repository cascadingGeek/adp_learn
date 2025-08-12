import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/utils/data";

export function AccessibilityFeatures() {
  return (
    <section className="py-20 px-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#34296B] text-center">
            Accessibility That <br /> Works for You
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${
                index % 2 === 1 ? "bg-[#F2EFFF]" : "bg-[#FFF9E8]"
              } border-0 shadow-sm hover:shadow-md transition-shadow`}
            >
              <CardContent className="p-6 space-y-4">
                <feature.icon className="text-2xl text-[#7B61FF]" />
                <h3 className="font-semibold text-xl text-[#000B11]">
                  {feature.title}
                </h3>
                <p className="text-[#686A6B] text-lg leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
