"use client";

import { Button } from "@/components/ui/button";
import { UserContext } from "@/context/user-context";
import { useAuthActions } from "@/redux/auth/authActions";
import { selectAuthSlice } from "@/redux/auth/authSlice";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useSelector } from "react-redux";

// interface HeaderProps {
//   user: string;
// }

export function Header() {
  const router = useRouter();
  const { signout } = useAuthActions();
  const user = useContext(UserContext);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Timesheet Application
            </h1>
            {user && (
              <p className="text-sm text-gray-600">
                Welcome, {user.email} ({user.role})
              </p>
            )}
          </div>
          <Button
            variant="outline"
            onClick={() => {
              signout();
              router.push("/");
            }}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
