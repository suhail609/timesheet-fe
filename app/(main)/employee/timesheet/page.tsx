"use client";

import { TimesheetEntry } from "@/components/timesheet-entry";
import { TimesheetGrid } from "@/components/timesheet-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthActions } from "../../../../redux/auth/authActions";
import { UserRole } from "@/types";

const Employee = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("timesheet");
  const { signout } = useAuthActions();
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
      {/* <header className="bg-white shadow-sm border-b">
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
      </header> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="timesheet" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Timesheet
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timesheet" className="space-y-6">
            {/* <div className="grid gap-6 md:grid-cols-2"> */}
            {/* <Card>
                <CardHeader>
                  <CardTitle>Add Timesheet Entry</CardTitle>
                </CardHeader>
                <CardContent>
                  <TimesheetEntry userId={"user.id"} />
                </CardContent>
              </Card> */}

            <Card>
              <CardHeader>
                <CardTitle>My Timesheet Entries</CardTitle>
              </CardHeader>
              <CardContent>
                <TimesheetGrid
                  userId={"user.id"}
                  userRole={UserRole.EMPLOYEE}
                />
              </CardContent>
            </Card>
            {/* </div> */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Employee;
