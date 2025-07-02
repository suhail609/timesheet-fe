"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useDataStore } from "@/hooks/use-data-store";
import type {
  //   User,
  Role,
  Designation,
  Project,
  ActivityType,
  TimesheetEntry,
  UserRole,
} from "@/types";
import { useAuthActions } from "@/redux/auth/authActions";
import { selectAuthSlice } from "@/redux/auth/authSlice";
import { useSelector } from "react-redux";

interface User {
  email: string;
  role: UserRole;
}

export const UserContext = createContext<User | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const { getProfile } = useAuthActions();
  const { user, isAuthenticated } = useSelector(selectAuthSlice);

  useEffect(() => {
    if (isAuthenticated && !user) getProfile();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
