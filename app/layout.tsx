import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/redux/StoreProvider";
import { DataProvider } from "@/context/data-context";
import { Toaster } from "sonner";
import { UserProvider } from "@/context/user-context";
import { Header } from "./_components/header";

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
      <body>
        <StoreProvider>
          <DataProvider>
            <UserProvider>
              <Toaster richColors position="top-right" />
              {children}
            </UserProvider>
          </DataProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
