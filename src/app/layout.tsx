import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADPLearn - Accessible Learning Platform",
  description:
    "Built for everyone with screen reader support, captions, voice control, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className} suppressHydrationWarning={true}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
