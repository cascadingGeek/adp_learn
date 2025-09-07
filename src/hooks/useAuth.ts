import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const authStore = useAuthStore();

  const logout = () => {
    authStore.signOut();
    router.push("/signin");
  };

  const checkAuth = () => {
    if (!authStore.isAuthenticated) {
      router.push("/signin");
      return false;
    }
    return true;
  };

  return {
    ...authStore,
    logout,
    checkAuth,
  };
};
