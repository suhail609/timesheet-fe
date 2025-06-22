"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Activity,
  ProjectE,
  TimesheetStatus,
  type TimesheetEntry as TimesheetEntryType,
} from "@/types";
import { Plus, Save } from "lucide-react";
import { useData } from "@/context/data-context";
import { ApiRequest } from "@/network/ApiRequest";
import { CREATE_TIMESHEET } from "@/network/ApiEndpoints";

interface TimesheetEntryModalProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
  editingEntry?: TimesheetEntryType | null;
}

export function TimesheetEntryModal({
  userId,
  isOpen,
  onClose,
  editingEntry,
}: TimesheetEntryModalProps) {
  const { projects, activityTypes, addTimesheetEntry, updateTimesheetEntry } =
    useData();
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    project: ProjectE.PROJECT_A,
    activity: Activity.DEVELOPMENT,
    description: "",
    timeSpentMinutes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = !!editingEntry;

  useEffect(() => {
    if (editingEntry) {
      setFormData({
        date: editingEntry.date,
        project: editingEntry.project,
        activity: editingEntry.activity,
        description: editingEntry.description,
        timeSpentMinutes: editingEntry.timeSpentMinutes.toString(),
      });
    } else {
      setFormData({
        date: new Date().toISOString().split("T")[0],
        project: ProjectE.PROJECT_A,
        activity: Activity.DEVELOPMENT,
        description: "",
        timeSpentMinutes: "",
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

    if (!formData.activity) {
      newErrors.activity = "Activity type is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.timeSpentMinutes) {
      newErrors.timeSpentMinutes = "Time worked is required";
    } else {
      const timeValue = Number.parseFloat(formData.timeSpentMinutes);
      if (isNaN(timeValue) || timeValue <= 0) {
        newErrors.timeSpentMinutes = "Please enter a valid time value";
      } else if (timeValue > 24) {
        newErrors.timeSpentMinutes = "Time worked cannot exceed 24 hours";
      }
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
        // Update existing entry
        updateTimesheetEntry(editingEntry.id, {
          date: formData.date,
          project: formData.project,
          activity: formData.activity,
          description: formData.description,
          timeSpentMinutes: Number.parseFloat(formData.timeSpentMinutes),
        });
      } else {
        // Add new entry
        const newEntry: TimesheetEntryType = {
          id: `entry-${Date.now()}`,
          userId: userId,
          date: formData.date,
          project: formData.project,
          //@ts-ignore
          activityType: formData.activity,
          description: formData.description,
          timeSpentMinutes: Number.parseFloat(formData.timeSpentMinutes),
          status: TimesheetStatus.APPROVED,
        };

        await ApiRequest().request({
          method: "POST",
          url: CREATE_TIMESHEET,
          data: newEntry,
        });
        addTimesheetEntry(newEntry);
      }

      onClose();
    } catch (error) {
      setErrors({ submit: "Failed to save entry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
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

          <div className="space-y-2">
            <Label htmlFor="activity">
              Activity Type <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.activity}
              onValueChange={(value) => handleInputChange("activity", value)}
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
            <Label htmlFor="timeSpentMinutes">
              Time Worked (hours) <span className="text-red-500">*</span>
            </Label>
            <Input
              id="timeSpentMinutes"
              type="number"
              step="0.5"
              min="0"
              max="24"
              placeholder="8.0"
              value={formData.timeSpentMinutes}
              onChange={(e) =>
                handleInputChange("timeSpentMinutes", e.target.value)
              }
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
