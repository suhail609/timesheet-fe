"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTimesheetActions } from "@/redux/timesheet/timesheetActions";
import {
  Activity,
  ProjectE,
  TimesheetStatus,
  type TimesheetEntry as TimesheetEntryType,
} from "@/types";
import { Plus, Save } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface TimesheetEntryModalProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
  editingEntry?: TimesheetEntryType | null;
}

type InitialFormData = {
  date: string;
  project: ProjectE;
  activityType: Activity;
  description: string;
  timeSpentMinutes: number;
  newProjectName?: string;
};

export function TimesheetEntryModal({
  userId,
  isOpen,
  onClose,
  editingEntry,
}: TimesheetEntryModalProps) {
  const { createNewTimesheetEntry, updateTimesheet } = useTimesheetActions();

  const [formData, setFormData] = useState<InitialFormData>({
    date: new Date().toISOString().split("T")[0],
    project: ProjectE.PROJECT_A,
    activityType: Activity.DEVELOPMENT,
    description: "",
    timeSpentMinutes: 0,
    newProjectName: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = !!editingEntry;

  useEffect(() => {
    if (editingEntry) {
      setFormData({
        date: editingEntry.date,
        project: editingEntry.project,
        activityType: editingEntry.activityType,
        description: editingEntry.description,
        timeSpentMinutes: editingEntry.timeSpentMinutes,
        newProjectName: editingEntry.newProjectName,
      });
    } else {
      setFormData({
        date: new Date().toISOString().split("T")[0],
        project: ProjectE.PROJECT_A,
        activityType: Activity.DEVELOPMENT,
        description: "",
        timeSpentMinutes: 0,
      });
    }
    setErrors({});
  }, [editingEntry, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.project) {
      newErrors.project = "Project is required";
    }

    if (!formData.activityType) {
      newErrors.activity = "Activity type is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.timeSpentMinutes) {
      newErrors.timeSpentMinutes = "Time worked is required";
    } else {
      const timeValue = formData.timeSpentMinutes;
      if (isNaN(timeValue) || timeValue <= 0) {
        newErrors.timeSpentMinutes = "Please enter a valid time value";
      } else if (timeValue > 1440) {
        newErrors.timeSpentMinutes = "Time worked cannot exceed 24 hours";
      }
    }

    if (
      formData.project === ProjectE.OTHER &&
      !formData.newProjectName?.trim()
    ) {
      if (Object.keys(ProjectE).includes(formData.newProjectName || "")) {
        newErrors.newProjectName = "Project name must be unique";
      }
      newErrors.newProjectName = "New project name is required";
    } else if (Object.keys(ProjectE).includes(formData.newProjectName || "")) {
      newErrors.newProjectName = "Project name must be unique";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (isEditing && editingEntry) {
        updateTimesheet({
          ...formData,
          id: editingEntry.id,
          status: editingEntry.status,
          userId: editingEntry.userId,
        });
      } else {
        const newEntry: TimesheetEntryType = {
          id: `entry-${Date.now()}`,
          userId: userId,
          date: formData.date,
          project: formData.project,
          activityType: formData.activityType,
          description: formData.description,
          timeSpentMinutes: formData.timeSpentMinutes,
          status: TimesheetStatus.APPROVED,
        };

        await createNewTimesheetEntry(newEntry);
      }

      onClose();
    } catch (error) {
      setErrors({ submit: "Failed to save entry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value });
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Timesheet Entry" : "Add Timesheet Entry"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="date">
              Date <span className="text-red-500">*</span>
            </Label>
            <Input
              id="date"
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className={errors.date ? "border-red-500" : ""}
            />
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="project">
              Project <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.project}
              onValueChange={(value) => handleInputChange("project", value)}
            >
              <SelectTrigger className={errors.project ? "border-red-500" : ""}>
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(ProjectE).map((project) => (
                  <SelectItem key={project} value={project}>
                    {project}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.project && (
              <p className="text-sm text-red-500">{errors.project}</p>
            )}
          </div>

          {formData.project === ProjectE.OTHER && (
            <div className="space-y-2">
              <Label htmlFor="newProjectName">
                Project Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="newProjectName"
                type="text"
                placeholder="Please enter new project name"
                value={formData.newProjectName}
                onChange={(e) =>
                  handleInputChange("newProjectName", e.target.value)
                }
                className={errors.newProjectName ? "border-red-500" : ""}
              />
              {errors.newProjectName && (
                <p className="text-sm text-red-500">{errors.newProjectName}</p>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="activity">
              Activity Type <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.activityType}
              onValueChange={(value) =>
                handleInputChange("activityType", value)
              }
            >
              <SelectTrigger
                className={errors.activity ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select activity type" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(Activity).map((activity) => (
                  <SelectItem key={activity} value={activity}>
                    {activity}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.activity && (
              <p className="text-sm text-red-500">{errors.activity}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your work..."
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={3}
              className={errors.description ? "border-red-500" : ""}
            />
            {errors.description && (
              <p className="text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeSpent">
              Time Worked (HH:MM) <span className="text-red-500">*</span>
            </Label>

            <Input
              id="timeSpent"
              type="text"
              placeholder="e.g. 2:30"
              value={`${Math.floor(formData.timeSpentMinutes / 60)}:${String(
                formData.timeSpentMinutes % 60
              ).padStart(2, "0")}`} // display "H:MM"
              onChange={(e) => {
                const value = e.target.value;
                const [hoursStr, minutesStr] = value.split(":");

                const hours = parseInt(hoursStr || "0", 10);
                const minutes = parseInt(minutesStr || "0", 10);

                if (!isNaN(hours) && !isNaN(minutes)) {
                  handleInputChange("timeSpentMinutes", hours * 60 + minutes);
                }
              }}
              className={errors.timeSpentMinutes ? "border-red-500" : ""}
            />

            {errors.timeSpentMinutes && (
              <p className="text-sm text-red-500">{errors.timeSpentMinutes}</p>
            )}
          </div>
          {errors.submit && (
            <p className="text-sm text-red-500">{errors.submit}</p>
          )}

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  {isEditing ? (
                    <Save className="w-4 h-4 mr-2" />
                  ) : (
                    <Plus className="w-4 h-4 mr-2" />
                  )}
                  {isEditing ? "Update Entry" : "Add Entry"}
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
