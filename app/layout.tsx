import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import { DataProvider } from "@/context/data-context";

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
          <body>{children}</body>
        </DataProvider>
      </StoreProvider>
    </html>
  );
}
