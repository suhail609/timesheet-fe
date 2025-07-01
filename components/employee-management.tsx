"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRole, type User } from "@/types";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useData } from "@/context/data-context";
import { usePagination } from "@/hooks/use-pagination";
import { PaginationControls } from "@/components/pagination-controls";
import { useSelector } from "react-redux";
import { selectAppData } from "@/redux/app-data/appDataSlice";
import { appDataActions } from "@/redux/app-data/appDataAction";
import { usersActions } from "@/redux/users/userAction";
import { selectUsers } from "@/redux/users/userSlice";

export function EmployeeManagement() {
  const { users, designations, addUser } = useData();
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    employeeCode: "",
    email: "",
    joinDate: "",
    reportingManagerId: "none",
    role: UserRole.EMPLOYEE,
  });

  const { getAppData } = appDataActions();
  const { getUserDataForManager } = usersActions();
  const { appData } = useSelector(selectAppData);
  const { employees } = useSelector(selectUsers);

  useEffect(() => {
    if (employees.length === 0) getUserDataForManager();
    if (appData.managers.length === 0) getAppData();
  }, []);

  const [itemsPerPage, setItemsPerPage] = useState(10);

  const pagination1 = usePagination({
    data: users,
    // data: employees,
    itemsPerPage,
  });

  const pagination = {
    currentPage: 0,
    totalPages: 10,
    paginatedData: employees,
    goToPage: () => {},
    goToNextPage: () => {},
    goToPreviousPage: () => {},
    resetPagination: () => {},
    hasNextPage: false,
    hasPreviousPage: false,
    totalItems: 10,
    startIndex: 0,
    endIndex: 0,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmployee: User = {
      id: `emp-${Date.now()}`,
      firstName: formData.firstName,
      email: formData.email,
      role: formData.role,
      joinDate: formData.joinDate,
      reportingManagerId:
        formData.reportingManagerId === "none"
          ? undefined
          : formData.reportingManagerId,
    };

    addUser(newEmployee);

    // Reset form
    setFormData({
      firstName: "",
      employeeCode: "",
      email: "",
      designation: "",
      joinDate: "",
      reportingManagerId: "",
      role: UserRole.EMPLOYEE,
    });

    setShowAddForm(false);
    alert("Employee added successfully!");
  };

  const getManagerName = (managerId?: string) => {
    if (!managerId) return "None";
    return users.find((u) => u.id === managerId)?.firstName || "Unknown";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Employee Management</h3>
        <Button onClick={() => setShowAddForm(!showAddForm)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Employee
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Employee</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="space-y-2">
                <Label htmlFor="firstName">Full Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employeeCode">Employee Code</Label>
                <Input
                  id="employeeCode"
                  value={formData.employeeCode}
                  onChange={(e) =>
                    setFormData({ ...formData, employeeCode: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Select
                  value={formData.designation}
                  onValueChange={(value) =>
                    setFormData({ ...formData, designation: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select designation" />
                  </SelectTrigger>
                  <SelectContent>
                    {designations.map((designation) => (
                      <SelectItem
                        key={designation.id}
                        value={designation.title}
                      >
                        {designation.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="joinDate">Join Date</Label>
                <Input
                  id="joinDate"
                  type="date"
                  value={formData.joinDate}
                  onChange={(e) =>
                    setFormData({ ...formData, joinDate: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reportingManager">Reporting Manager</Label>
                <Select
                  value={formData.reportingManagerId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, reportingManagerId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select reporting manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    {appData.managers.map((manager) => (
                      <SelectItem key={manager.id} value={manager.id}>
                        {manager.firstName} ({manager.email})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2 flex gap-2">
                <Button type="submit">Add Employee</Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowAddForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee Code</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Reporting Manager</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pagination.paginatedData.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.role}</TableCell>
                <TableCell>{new Date().toLocaleDateString()}</TableCell>
                <TableCell>
                  {/* {getManagerName(employee.reportingManagerId)} */}
                  {employee.reportingManager?.email}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PaginationControls
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        totalItems={pagination.totalItems}
        startIndex={pagination.startIndex}
        endIndex={pagination.endIndex}
        onPageChange={pagination.goToPage}
        onNextPage={pagination.goToNextPage}
        onPreviousPage={pagination.goToPreviousPage}
        hasNextPage={pagination.hasNextPage}
        hasPreviousPage={pagination.hasPreviousPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newItemsPerPage) => {
          setItemsPerPage(newItemsPerPage);
          pagination.resetPagination();
        }}
      />
    </div>
  );
}
