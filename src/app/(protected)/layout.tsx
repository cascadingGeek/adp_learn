"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { AuthGuard } from "@/components/AuthGuard";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import DashboardLayout from "@/components/layout/DashboardLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useAuthRedirect();

  return (
    <AuthGuard>
      <div className={`${geistSans.variable} ${geistMono.variable}`}>
        <DashboardLayout>{children}</DashboardLayout>
      </div>
    </AuthGuard>
  );
}
