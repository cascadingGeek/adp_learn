"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F2EFFF] backdrop-blur-sm px-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold text-[#7B61FF]">
            ADPLearn
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#000B11] text-base hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="default"
              className="border border-[#54656F] bg-white text-[#54656F] text-base rounded-full hover:text-white"
              asChild
            >
              <Link href="/signin">Login</Link>
            </Button>
            <Button
              asChild
              variant="default"
              className="border-none bg-[#7B61FF] text-white text-base rounded-full"
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
          <div className="md:hidden border-t py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-600 hover:text-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button
                variant="default"
                className="border border-[#54656F] bg-white text-[#54656F] text-xs rounded-full hover:text-white"
                asChild
              >
                <Link href="/signin">Login</Link>
              </Button>
              <Button
                asChild
                variant="default"
                className="border-none bg-[#7B61FF] text-white text-xs rounded-full"
              >
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
