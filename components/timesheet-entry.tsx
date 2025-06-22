"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { TimesheetEntryModal } from "@/components/timesheet-entry-modal"

interface TimesheetEntryProps {
  userId: string
}

export function TimesheetEntry({ userId }: TimesheetEntryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="space-y-4">
      <Button onClick={() => setIsModalOpen(true)} className="w-full">
        <Plus className="w-4 h-4 mr-2" />
        Add New Entry
      </Button>

      <div className="text-sm text-gray-600 space-y-2">
        <p>• Click "Add New Entry" to create a timesheet entry</p>
        <p>• Edit entries directly in the table by hovering over cells</p>
        <p>• Only draft entries can be edited</p>
        <p>• Submit entries to your manager for approval</p>
      </div>

      <TimesheetEntryModal userId={userId} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
