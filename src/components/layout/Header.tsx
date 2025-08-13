"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Features", id: "features" },
    { name: "Courses", id: "courses" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Community", id: "community" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F2EFFF] backdrop-blur-sm px-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-[#7B61FF]">
            ADPLearn
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                variant="ghost"
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-[#000B11] text-base hover:text-purple-600 transition-colors bg-transparent cursor-pointer"
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              className="border border-[#54656F] bg-white hover:bg-[#34296B] text-[#54656F] text-base rounded-full hover:text-white"
              asChild
              onClick={() => router.push("/signin")}
            >
              <Link href="/signin">Login</Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="border-none bg-[#7B61FF] hover:bg-[#34296B] text-white text-base rounded-full"
              onClick={() => router.push("/signup")}
            >
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4 space-y-4">
            {navItems.map((item) => (
              <Button
                variant="ghost"
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-[#000B11] text-xs hover:text-purple-600 transition-colors bg-transparent"
              >
                {item.name}
              </Button>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button
                variant="default"
                className="border border-[#54656F] bg-white hover:bg-[#34296B] text-[#54656F] text-xs rounded-full hover:text-white"
                asChild
                onClick={() => router.push("/signin")}
              >
                Login
              </Button>
              <Button
                asChild
                variant="default"
                className="border-none bg-[#7B61FF] hover:bg-[#34296B] text-white text-xs rounded-full"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
