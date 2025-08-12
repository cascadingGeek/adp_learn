import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AccessibilityFeatures } from "@/components/landing/AccessibilityFeatures";
import { CourseShowcase } from "@/components/landing/CourseShowcase";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LearnTogether } from "@/components/landing/LearnTogether";
import { InclusiveLearningHero } from "@/components/landing/InclusiveLearningHero";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AccessibilityFeatures />
        <CourseShowcase />
        <HowItWorks />
        <LearnTogether />
        <InclusiveLearningHero />
      </main>
      <Footer />
    </div>
  );
}
