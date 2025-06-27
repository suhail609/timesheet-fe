"use client";

import { TimesheetEntry } from "@/components/timesheet-entry";
import { TimesheetGrid } from "@/components/timesheet-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthActions } from "@/redux/auth/authActions";
import { UserRole } from "@/types";

const Employee = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("timesheet");

  const { signup } = useAuthActions();

  //   const handleSubmit = async (user: User) => {
  //     try {
  //       signup({ email: user.email, password: user.role });
  //       router.push("/chat");
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  // return <Dashboard user={{} as User} onLogout={() => {}} />;
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Timesheet Application
              </h1>
              <p className="text-sm text-gray-600">
                Welcome, {"user.fullName"} ({"user.role"})
              </p>
            </div>
            <Button variant="outline" onClick={() => {}}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
      </main>
    </div>
  );
};

export default Employee;
