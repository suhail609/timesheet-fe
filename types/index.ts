// export type UserRole = "Employee" | "Reporting Manager" | "Admin" | "HR Admin"
export enum UserRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  EMPLOYEE = "EMPLOYEE",
}

export interface User {
  id?: string;
  email: string;
  firstName: string;
  role: UserRole;
}
export interface UserSignup {
  email: string;
  password: string;
  role: UserRole;
}

export interface UserSignin {
  email: string;
  password: string;
  role: UserRole;
}

export type SignupResponse = {
  user: {
    id: string;
    email: string;
    role: UserRole;
  };
  accessToken: string;
};

export type SigninResponse = {
  user: {
    id: string;
    email: string;
    role: UserRole;
  };
  accessToken: string;
};

export type AppDataResponse = {
  managers: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  }[];
};

type ReportingManager = {
  id: string;
  firstName: string;
  email: string;
};

export type EmployeeWithReportingManager = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  reportingManagerId: string | null;
  role: string;
  reportingManager: ReportingManager | null;
};

export type UserProfile = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
};

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
  activityType: Activity;
  description: string;
  timeSpentMinutes: number;
  status: TimesheetStatus;
  submittedAt?: string;
  approvedAt?: string;
  approvedBy?: string;
}
