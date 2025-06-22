import {
  type User,
  type Role,
  type Designation,
  type Project,
  type ActivityType,
  type TimesheetEntry,
  UserRole,
  TimesheetStatus,
  ProjectE,
  Activity,
} from "@/types";

export const initialUsers: User[] = [
  {
    id: "user-1",
    firstName: "John Doe",
    email: "john.doe@company.com",
    role: UserRole.EMPLOYEE,
  },
  {
    id: "user-2",
    firstName: "Jane Smith",
    email: "jane.smith@company.com",
    role: UserRole.MANAGER,
  },
  {
    id: "user-3",
    firstName: "Mike Johnson",
    email: "mike.johnson@company.com",
    role: UserRole.EMPLOYEE,
  },
  {
    id: "user-4",
    firstName: "Admin User",
    email: "admin@company.com",
    role: UserRole.ADMIN,
  },
];

export const initialRoles: Role[] = [
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
];

export const initialDesignations: Designation[] = [
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
];

export const initialProjects: Project[] = [
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
];

export const initialActivityTypes: ActivityType[] = [
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
];

export const initialTimesheetEntries: TimesheetEntry[] = [
  {
    id: "entry-1",
    userId: "user-1",
    date: "2024-01-15",
    project: ProjectE.PROJECT_A,
    activity: Activity.DEVELOPMENT,
    description: "Implemented user authentication module",
    timeSpentMinutes: 8,
    status: TimesheetStatus.SUBMITTED,
    submittedAt: "2024-01-15T18:00:00Z",
  },
  {
    id: "entry-2",
    userId: "user-1",
    date: "2024-01-16",
    project: ProjectE.PROJECT_A,
    activity: Activity.TRAINING,
    description: "Code review for payment gateway integration",
    timeSpentMinutes: 4,
    status: TimesheetStatus.DRAFT,
  },
  {
    id: "entry-3",
    userId: "user-3",
    date: "2024-01-15",
    project: ProjectE.PROJECT_A,
    activity: Activity.ADMINISTRATION,
    description: "Testing mobile app login functionality",
    timeSpentMinutes: 6,
    status: TimesheetStatus.SUBMITTED,
    submittedAt: "2024-01-15T17:30:00Z",
  },
  {
    id: "entry-4",
    userId: "user-1",
    date: "2024-01-17",
    project: ProjectE.PROJECT_A,
    activity: Activity.ADMINISTRATION,
    description: "Updated API documentation",
    timeSpentMinutes: 3,
    status: TimesheetStatus.APPROVED,
    submittedAt: "2024-01-17T18:00:00Z",
    approvedAt: "2024-01-18T09:00:00Z",
    approvedBy: "user-2",
  },
];
