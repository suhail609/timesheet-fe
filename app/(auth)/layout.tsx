"use client";

import { appDataActions } from "@/redux/app-data/appDataAction";
import { useEffect } from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { getAppData } = appDataActions();

  // const { appData } = useSelector(selectAppData);

  useEffect(() => {
    getAppData();
  }, []);

  return <>{children}</>;
}
