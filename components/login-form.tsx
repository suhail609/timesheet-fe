"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { User, UserRole } from "@/types"
import { initialUsers } from "@/data/initial-data"

interface LoginFormProps {
  onLogin: (user: User) => void
  onShowSignup: () => void
}

export function LoginForm({ onLogin, onShowSignup }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedRole, setSelectedRole] = useState<UserRole | "">("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Find user by email and role (in real app, this would be server-side authentication)
    const user = initialUsers.find((u) => u.email === email && u.role === selectedRole)

    if (user) {
      onLogin(user)
    } else {
      alert("Invalid credentials or role selection")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Timesheet Application</CardTitle>
          <CardDescription>Sign in to access your timesheet</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={selectedRole} onValueChange={(value: UserRole) => setSelectedRole(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Employee">Employee</SelectItem>
                  <SelectItem value="Reporting Manager">Reporting Manager</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="HR Admin">HR Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-4 text-sm text-gray-600">
            <p className="font-medium">Demo Credentials:</p>
            <p>Employee: john.doe@company.com</p>
            <p>Manager: jane.smith@company.com</p>
            <p>Admin: admin@company.com</p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button onClick={onShowSignup} className="font-medium text-blue-600 hover:text-blue-500">
                Sign up here
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
