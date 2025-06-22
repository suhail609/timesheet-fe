"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useDataStore } from "@/hooks/use-data-store"
import type { User, Role, Designation, Project, ActivityType, TimesheetEntry } from "@/types"

interface DataContextType {
  users: User[]
  roles: Role[]
  designations: Designation[]
  projects: Project[]
  activityTypes: ActivityType[]
  timesheetEntries: TimesheetEntry[]
  addUser: (user: User) => void
  addRole: (role: Role) => void
  addTimesheetEntry: (entry: TimesheetEntry) => void
  updateTimesheetEntry: (entryId: string, updates: Partial<TimesheetEntry>) => void
  updateMultipleTimesheetEntries: (entryIds: string[], updates: Partial<TimesheetEntry>) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: ReactNode }) {
  const dataStore = useDataStore()

  return <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
}

export function useData() {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}
