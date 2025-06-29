"use client";

import { useAccessToken } from "@/hooks/useAccessToken";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthActions } from "@/redux/auth/authActions";
import { useSelector } from "react-redux";
import { selectAuthSlice } from "@/redux/auth/authSlice";
import { UserRole } from "@/types";

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
    if (user && user.role !== UserRole.EMPLOYEE) {
      router.push("/signin");
      return;
    }
  }, [user]);

  if(isLoading) return <>Loading</>
  return <>{children}</>;
}
