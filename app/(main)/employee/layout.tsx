"use client";

import { useAccessToken } from "@/hooks/useAccessToken";
import { useAuthActions } from "@/redux/auth/authActions";
import { selectAuthSlice } from "@/redux/auth/authSlice";
import { UserRole } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EmployeeLayout({
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
    if (!accessToken) {
      router.push("/signin");
      return;
    }

    // if (!user || user.role !== UserRole.EMPLOYEE) {
    //   try {
    //     getProfile();
    //   } catch (error) {
    //     router.push("/signin");
    //   }
    // }

    if (!user) {
      try {
        getProfile();
      } catch (error) {
        router.push("/signin");
      }
    }
  }, []);

  useEffect(() => {
    if (user && user.role === UserRole.EMPLOYEE) {
      setAuthChecked(true);
      return;
    }
    if (user && user.role !== UserRole.EMPLOYEE) router.push("/");
  }, [user]);

  if (isLoading || !isAuthChecked) return <>Loading...</>;
  return <>{children}</>;
}
