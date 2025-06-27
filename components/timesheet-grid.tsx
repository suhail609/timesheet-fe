"use client";

import { InlineEditCell } from "@/components/inline-edit-cell";
import { PaginationControls } from "@/components/pagination-controls";
import { TimesheetEntryModal } from "@/components/timesheet-entry-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useData } from "@/context/data-context";
import { usePagination } from "@/hooks/use-pagination";
import { ApiRequest } from "@/network/ApiRequest";
import { useTimesheetActions } from "@/redux/timesheet/timesheetActions";
import { selectTimesheet } from "@/redux/timesheet/timesheetSlice";
import { TimesheetEntry, TimesheetStatus, UserRole } from "@/types";
import { Edit, Plus, Send, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface TimesheetGridProps {
  userId: string;
  userRole: UserRole;
}

export function TimesheetGrid({ userId, userRole }: TimesheetGridProps) {
  const {
    timesheetEntries,
    projects,
    activityTypes,
    users,
    // updateTimesheetEntry,
    updateMultipleTimesheetEntries,
  } = useData();
  const [selectedEntries, setSelectedEntries] = useState<string[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<TimesheetEntry | null>(null);

  const { getAllTimesheets } = useTimesheetActions();
  const { timesheets } = useSelector(selectTimesheet);

  useEffect(() => {
    getAllTimesheets({
      page: 1,
      limit: 5,
    });
  }, []);

  useEffect(() => {}, [timesheets]);

  const pagination = usePagination({
    data: timesheets,
    itemsPerPage,
  });

  const updateTimesheetEntry = (
    timesheetId: string,
    editingEntry: Partial<TimesheetEntry>
  ) => {
    ApiRequest().request({
      method: "PATCH",
      url: `UPDATE_TIMESHEET/${timesheetId}`,
      data: { editingEntry },
    });
  };

  const getProjectName = (projectId: string) => {
    return projects.find((p) => p.id === projectId)?.name || "Unknown Project";
  };

  const getActivityName = (activityId: string) => {
    return (
      activityTypes.find((a) => a.id === activityId)?.name || "Unknown Activity"
    );
  };

  const getEmployeeName = (employeeId: string) => {
    return (
      users.find((u) => u.id === employeeId)?.firstName || "Unknown Employee"
    );
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      Draft: "secondary",
      Submitted: "default",
      Approved: "default",
      Rejected: "destructive",
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status}
      </Badge>
    );
  };

  const handleSelectEntry = (entryId: string, checked: boolean) => {
    if (checked) {
      setSelectedEntries([...selectedEntries, entryId]);
    } else {
      setSelectedEntries(selectedEntries.filter((id) => id !== entryId));
    }
  };

  const handleBulkSubmit = () => {
    updateMultipleTimesheetEntries(selectedEntries, {
      status: TimesheetStatus.SUBMITTED,
      submittedAt: new Date().toISOString(),
    });
    setSelectedEntries([]);
    alert(`${selectedEntries.length} entries submitted successfully!`);
  };

  const handleSubmitSingle = (entryId: string) => {
    updateTimesheetEntry(entryId, {
      status: TimesheetStatus.SUBMITTED,
      submittedAt: new Date().toISOString(),
    });
    alert("Entry submitted successfully!");
  };

  const handleEditEntry = (entry: TimesheetEntry) => {
    setEditingEntry(entry);
    setIsModalOpen(true);
  };

  const handleAddEntry = async (data: any) => {
    // console.log(editingEntry);
    // await ApiRequest().request({
    //   method: "POST",
    //   url: CREATE_TIMESHEET,
    //   data: editingEntry,
    // });

    setEditingEntry(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingEntry(null);
  };

  const handleInlineEdit = (
    entryId: string,
    field: string,
    value: string | number
  ) => {
    updateTimesheetEntry(entryId, { [field]: value });
  };

  const getProjectOptions = () => {
    return projects
      .filter((p) => p.status === "Active")
      .map((project) => ({
        value: project.id,
        label: project.name,
      }));
  };

  const getActivityOptions = () => {
    return activityTypes.map((activity) => ({
      value: activity.id,
      label: activity.name,
    }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {selectedEntries.length > 0 && (
            <Button onClick={handleBulkSubmit} size="sm">
              <Send className="w-4 h-4 mr-2" />
              Submit Selected ({selectedEntries.length})
            </Button>
          )}
        </div>
        <Button onClick={handleAddEntry} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Entry
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>Date</TableHead>
              {userRole !== UserRole.EMPLOYEE && (
                <TableHead>Employee</TableHead>
              )}
              <TableHead>Project</TableHead>
              <TableHead>Activity</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Hours</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pagination.paginatedData.map((entry) => {
              const canEdit = entry.status === TimesheetStatus.DRAFT;
              //  && entry.employeeId === userId;
              return (
                <TableRow key={entry.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedEntries.includes(entry.id)}
                      onCheckedChange={(checked) =>
                        handleSelectEntry(entry.id, checked as boolean)
                      }
                      disabled={entry.status !== TimesheetStatus.DRAFT}
                    />
                  </TableCell>
                  <TableCell>
                    <InlineEditCell
                      value={entry.date}
                      onSave={(value) =>
                        handleInlineEdit(entry.id, "date", value)
                      }
                      type="text"
                      disabled={!canEdit}
                    />
                  </TableCell>
                  {userRole !== UserRole.EMPLOYEE && (
                    <TableCell>{entry.userId}</TableCell>
                  )}
                  <TableCell>
                    <InlineEditCell
                      value={entry.project}
                      onSave={(value) =>
                        handleInlineEdit(entry.id, "projectId", value)
                      }
                      type="select"
                      options={getProjectOptions()}
                      disabled={!canEdit}
                    />
                  </TableCell>
                  <TableCell>
                    <InlineEditCell
                      value={entry.activityType}
                      onSave={(value) =>
                        handleInlineEdit(entry.id, "activityTypeId", value)
                      }
                      type="select"
                      options={getActivityOptions()}
                      disabled={!canEdit}
                    />
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <InlineEditCell
                      value={entry.description}
                      onSave={(value) =>
                        handleInlineEdit(entry.id, "description", value)
                      }
                      type="textarea"
                      disabled={!canEdit}
                    />
                  </TableCell>
                  <TableCell>
                    <InlineEditCell
                      value={entry.timeSpentMinutes}
                      onSave={(value) =>
                        handleInlineEdit(entry.id, "timeWorked", value)
                      }
                      type="number"
                      disabled={!canEdit}
                    />
                  </TableCell>
                  <TableCell>{getStatusBadge(entry.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {canEdit && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditEntry(entry)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleSubmitSingle(entry.id)}
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <PaginationControls
        currentPage={pagination.currentPage}
        totalPages={pagination.totalPages}
        totalItems={pagination.totalItems}
        startIndex={pagination.startIndex}
        endIndex={pagination.endIndex}
        onPageChange={pagination.goToPage}
        onNextPage={pagination.goToNextPage}
        onPreviousPage={pagination.goToPreviousPage}
        hasNextPage={pagination.hasNextPage}
        hasPreviousPage={pagination.hasPreviousPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={(newItemsPerPage) => {
          setItemsPerPage(newItemsPerPage);
          pagination.resetPagination();
        }}
      />

      <TimesheetEntryModal
        userId={userId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        editingEntry={editingEntry}
      />
    </div>
  );
}
