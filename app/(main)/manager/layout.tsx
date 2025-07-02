"use client";

import { useAccessToken } from "@/hooks/useAccessToken";
import { useAuthActions } from "@/redux/auth/authActions";
import { selectAuthSlice } from "@/redux/auth/authSlice";
import { UserRole } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  const [isAuthChecked, setAuthChecked] = useState(false);

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

      setAuthChecked(true);
    })();
  }, []);

  useEffect(() => {
    if (user && user.role !== UserRole.MANAGER) {
      router.push("/signin");
      return;
    }
  }, [user]);

  if (isLoading || !isAuthChecked) return <>Loading...</>;
  return <>{children}</>;
}
