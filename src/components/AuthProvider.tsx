import React from "react";
import { useSessionManager } from "@/hooks/useSessionManager";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  useSessionManager();
  return <>{children}</>;
};
