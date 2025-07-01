"use client";

import { appDataActions } from "@/redux/app-data/appDataAction";
import { useEffect } from "react";
import { Header } from "../_components/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
