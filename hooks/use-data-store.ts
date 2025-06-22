"use client"

import { useState, useCallback } from "react"
import type { User, Role, Designation, Project, ActivityType, TimesheetEntry } from "@/types"
import {
  initialUsers,
  initialRoles,
  initialDesignations,
  initialProjects,
  initialActivityTypes,
  initialTimesheetEntries,
} from "@/data/initial-data"

export function useDataStore() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [roles, setRoles] = useState<Role[]>(initialRoles)
  const [designations, setDesignations] = useState<Designation[]>(initialDesignations)
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [activityTypes, setActivityTypes] = useState<ActivityType[]>(initialActivityTypes)
  const [timesheetEntries, setTimesheetEntries] = useState<TimesheetEntry[]>(initialTimesheetEntries)

  const addUser = useCallback((user: User) => {
    setUsers((prev) => [...prev, user])
  }, [])

  const addRole = useCallback((role: Role) => {
    setRoles((prev) => [...prev, role])
  }, [])

  const addTimesheetEntry = useCallback((entry: TimesheetEntry) => {
    setTimesheetEntries((prev) => [...prev, entry])
  }, [])

  const updateTimesheetEntry = useCallback((entryId: string, updates: Partial<TimesheetEntry>) => {
    setTimesheetEntries((prev) => prev.map((entry) => (entry.id === entryId ? { ...entry, ...updates } : entry)))
  }, [])

  const updateMultipleTimesheetEntries = useCallback((entryIds: string[], updates: Partial<TimesheetEntry>) => {
    setTimesheetEntries((prev) => prev.map((entry) => (entryIds.includes(entry.id) ? { ...entry, ...updates } : entry)))
  }, [])

  return {
    users,
    roles,
    designations,
    projects,
    activityTypes,
    timesheetEntries,
    addUser,
    addRole,
    addTimesheetEntry,
    updateTimesheetEntry,
    updateMultipleTimesheetEntries,
  }
}
