import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import { DataProvider } from "@/context/data-context";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "time-sheet",
  description: "time-sheet-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <DataProvider>
          <Toaster richColors position="top-right" />
          <body>{children}</body>
        </DataProvider>
      </StoreProvider>
    </html>
  );
}
