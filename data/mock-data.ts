import type { User, Role, Designation, Project, ActivityType, TimesheetEntry } from "@/types"

export const mockUsers: User[] = [
  {
    id: "user-1",
    fullName: "John Doe",
    employeeCode: "EMP001",
    email: "john.doe@company.com",
    role: "Employee",
    designation: "Software Developer",
    joinDate: "2023-01-15",
    reportingManagerId: "user-2",
  },
  {
    id: "user-2",
    fullName: "Jane Smith",
    employeeCode: "MGR001",
    email: "jane.smith@company.com",
    role: "Reporting Manager",
    designation: "Team Lead",
    joinDate: "2022-03-10",
    reportingManagerId: "user-4",
  },
  {
    id: "user-3",
    fullName: "Mike Johnson",
    employeeCode: "EMP002",
    email: "mike.johnson@company.com",
    role: "Employee",
    designation: "QA Engineer",
    joinDate: "2023-06-20",
    reportingManagerId: "user-2",
  },
  {
    id: "user-4",
    fullName: "Admin User",
    employeeCode: "ADM001",
    email: "admin@company.com",
    role: "Admin",
    designation: "System Administrator",
    joinDate: "2021-01-01",
  },
  {
    id: "user-5",
    fullName: "HR Admin",
    employeeCode: "HR001",
    email: "hr.admin@company.com",
    role: "HR Admin",
    designation: "HR Manager",
    joinDate: "2021-06-15",
  },
]

export const mockRoles: Role[] = [
  {
    id: "role-1",
    name: "Employee",
    description: "Regular employee with basic access",
  },
  {
    id: "role-2",
    name: "Reporting Manager",
    description: "Manager who can approve timesheets",
  },
  {
    id: "role-3",
    name: "Admin",
    description: "System administrator with full access",
  },
  {
    id: "role-4",
    name: "HR Admin",
    description: "HR administrator with employee management access",
  },
]

export const mockDesignations: Designation[] = [
  {
    id: "des-1",
    title: "Software Developer",
    department: "Engineering",
  },
  {
    id: "des-2",
    title: "Senior Software Developer",
    department: "Engineering",
  },
  {
    id: "des-3",
    title: "Team Lead",
    department: "Engineering",
  },
  {
    id: "des-4",
    title: "QA Engineer",
    department: "Quality Assurance",
  },
  {
    id: "des-5",
    title: "Project Manager",
    department: "Project Management",
  },
  {
    id: "des-6",
    title: "System Administrator",
    department: "IT",
  },
  {
    id: "des-7",
    title: "HR Manager",
    department: "Human Resources",
  },
]

export const mockProjects: Project[] = [
  {
    id: "proj-1",
    name: "E-commerce Platform",
    description: "Building a modern e-commerce platform",
    status: "Active",
  },
  {
    id: "proj-2",
    name: "Mobile App Development",
    description: "Developing mobile application for iOS and Android",
    status: "Active",
  },
  {
    id: "proj-3",
    name: "Data Analytics Dashboard",
    description: "Creating analytics dashboard for business insights",
    status: "Active",
  },
  {
    id: "proj-4",
    name: "Legacy System Migration",
    description: "Migrating legacy systems to modern architecture",
    status: "Inactive",
  },
]

export const mockActivityTypes: ActivityType[] = [
  {
    id: "act-1",
    name: "Development",
    description: "Software development activities",
  },
  {
    id: "act-2",
    name: "Testing",
    description: "Quality assurance and testing activities",
  },
  {
    id: "act-3",
    name: "Code Review",
    description: "Reviewing code and providing feedback",
  },
  {
    id: "act-4",
    name: "Documentation",
    description: "Writing technical documentation",
  },
  {
    id: "act-5",
    name: "Meeting",
    description: "Team meetings and discussions",
  },
  {
    id: "act-6",
    name: "Support",
    description: "Customer support and bug fixes",
  },
  {
    id: "act-7",
    name: "Research",
    description: "Research and analysis activities",
  },
]

export const mockTimesheetEntries: TimesheetEntry[] = [
  {
    id: "entry-1",
    employeeId: "user-1",
    date: "2024-01-15",
    projectId: "proj-1",
    activityTypeId: "act-1",
    description: "Implemented user authentication module",
    timeWorked: 8,
    status: "Submitted",
    submittedAt: "2024-01-15T18:00:00Z",
  },
  {
    id: "entry-2",
    employeeId: "user-1",
    date: "2024-01-16",
    projectId: "proj-1",
    activityTypeId: "act-3",
    description: "Code review for payment gateway integration",
    timeWorked: 4,
    status: "Draft",
  },
  {
    id: "entry-3",
    employeeId: "user-3",
    date: "2024-01-15",
    projectId: "proj-2",
    activityTypeId: "act-2",
    description: "Testing mobile app login functionality",
    timeWorked: 6,
    status: "Submitted",
    submittedAt: "2024-01-15T17:30:00Z",
  },
  {
    id: "entry-4",
    employeeId: "user-1",
    date: "2024-01-17",
    projectId: "proj-1",
    activityTypeId: "act-4",
    description: "Updated API documentation",
    timeWorked: 3,
    status: "Approved",
    submittedAt: "2024-01-17T18:00:00Z",
    approvedAt: "2024-01-18T09:00:00Z",
    approvedBy: "user-2",
  },
]
