"use client";

import { ApprovalQueue } from "@/components/approval-queue";
import { EmployeeManagement } from "@/components/employee-management";
import { SignupForm } from "@/components/signup-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthActions } from "@/redux/auth/authActions";
import { User, UserRole } from "@/types";
import { CheckSquare, LogOut, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Manager = () => {
  const [activeTab, setActiveTab] = useState("approvals");

  const router = useRouter();

  const { signout } = useAuthActions();

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="approvals" className="flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              Approvals
            </TabsTrigger>
            <TabsTrigger value="employees" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Employees
            </TabsTrigger>
          </TabsList>

          <TabsContent value="approvals">
            <Card>
              <CardHeader>
                <CardTitle>Timesheet Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                <ApprovalQueue
                  managerId={"user.id"}
                  userRole={UserRole.MANAGER}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="employees">
            <Card>
              <CardHeader>
                <CardTitle>Employee Management</CardTitle>
              </CardHeader>
              <CardContent>
                <EmployeeManagement />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Manager;
