"use client";

import { useAccessToken } from "@/hooks/useAccessToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthActions } from "@/redux/auth/authActions";
import { useSelector } from "react-redux";
import { selectAuthSlice } from "@/redux/auth/authSlice";
import { UserRole } from "@/types";

export default function ManagerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { getAccessToken } = useAccessToken();
  const accessToken = getAccessToken();
  const { user, isLoading } = useSelector(selectAuthSlice);
  const { getProfile } = useAuthActions();

  useEffect(() => {
    (async () => {
      if (!accessToken) {
        router.push("/signin");
        return;
      }

      if (!user) {
        try {
          await getProfile();
        } catch (error) {
          router.push("/signin");
          return;
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (user && user.role !== UserRole.MANAGER) {
      router.push("/signin");
      return;
    }
  }, [user]);

  if (isLoading) return <>hello</>;
  return <>{children}</>;
}
