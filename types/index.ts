// export type UserRole = "Employee" | "Reporting Manager" | "Admin" | "HR Admin"
export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  role: UserRole;
}

export interface Role {
  id: string;
  name: string;
  description: string;
}

export interface Designation {
  id: string;
  title: string;
  department: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "Active" | "Inactive";
}

export interface ActivityType {
  id: string;
  name: string;
  description: string;
}
export enum TimesheetStatus {
  DRAFT = "DRAFT",
  SUBMITTED = "SUBMITTED",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

export enum ProjectE {
  PROJECT_A = "PROJECT_A",
  PROJECT_B = "PROJECT_B",
  PROJECT_C = "PROJECT_C",
}

export enum Activity {
  DEVELOPMENT = "DEVELOPMENT",
  QA = "QA",
  SUPPORT = "SUPPORT",
  MEETING = "MEETING",
  DOCUMENTATION = "DOCUMENTATION",
  TRAINING = "TRAINING",
  OTHER = "OTHER",
  ADMINISTRATION = "ADMINISTRATION",
  RESEARCH = "RESEARCH",
}

export interface TimesheetEntry {
  id: string;
  userId: string;
  date: string;
  project: ProjectE;
  activity: Activity;
  description: string;
  timeSpentMinutes: number;
  status: TimesheetStatus;
  submittedAt?: string;
  approvedAt?: string;
  approvedBy?: string;
}
