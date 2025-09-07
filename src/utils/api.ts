import { useAuthStore } from "@/store/useAuthStore";
export const apiClient = {
  async request(url: string, options: RequestInit = {}) {
    const { token } = useAuthStore.getState();

    const config: RequestInit = {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    };

    const response = await fetch(url, config);

    // Handle token expiration
    if (response.status === 401) {
      const { refreshAccessToken } = useAuthStore.getState();
      const refreshed = await refreshAccessToken();

      if (refreshed) {
        // Retry the original request with new token
        const { token: newToken } = useAuthStore.getState();
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${newToken}`,
        };
        return fetch(url, config);
      } else {
        // Refresh failed, redirect to login
        window.location.href = "/signin";
        throw new Error("Authentication failed");
      }
    }

    return response;
  },

  async get(url: string, options: RequestInit = {}) {
    return this.request(url, { ...options, method: "GET" });
  },

  async post(url: string, data?: any, options: RequestInit = {}) {
    return this.request(url, {
      ...options,
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  async put(url: string, data?: any, options: RequestInit = {}) {
    return this.request(url, {
      ...options,
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  },

  async delete(url: string, options: RequestInit = {}) {
    return this.request(url, { ...options, method: "DELETE" });
  },
};
