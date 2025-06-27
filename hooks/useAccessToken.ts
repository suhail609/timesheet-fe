import { useCallback } from "react";

const ACCESS_TOKEN_KEY = "access_token";

export const useAccessToken = () => {
  // Get access token
  const getAccessToken =
    //   useCallback(
    (): string | null => {
      if (typeof window === "undefined") return null;
      return localStorage.getItem(ACCESS_TOKEN_KEY);
    };
  //   , []);

  // Set access token
  const setAccessToken =
//    useCallback(
    (token: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }
//   , []);

  // Remove access token
  const removeAccessToken =
//    useCallback(
    () => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
//   , []);

  return {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
  };
};
