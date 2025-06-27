"use client";

import { useAccessToken } from "@/hooks/useAccessToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthActions } from "@/redux/auth/authActions";
import { useSelector } from "react-redux";
import { selectAuthSlice } from "@/redux/auth/authSlice";

export default function EmployeeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { getAccessToken } = useAccessToken();
  const accessToken = getAccessToken();
  const { user } = useSelector(selectAuthSlice);
  const { getProfile } = useAuthActions();

  useEffect(() => {
    if (!accessToken) {
      router.push("/signin");
      return;
    }

    if (!user) {
      try {
        getProfile();
      } catch (error) {
        router.push("/signin");
      }
    }
  }, []);

  return <>{children}</>;
}
