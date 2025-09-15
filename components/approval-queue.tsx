"use client";

import { PaginationControls } from "@/components/pagination-controls";
import { Button } from "@/components/ui/button";
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
import { useTimesheetActions } from "@/redux/timesheet/timesheetActions";
import { selectTimesheet } from "@/redux/timesheet/timesheetSlice";
import { TimesheetStatus, UserRole } from "@/types";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface ApprovalQueueProps {
  managerId: string;
  userRole: UserRole;
}

export function ApprovalQueue({ managerId, userRole }: ApprovalQueueProps) {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { getSubordinatesTimesheets, updateTimesheetEntry, getAllTimesheets } =
    useTimesheetActions();
  const { timesheets } = useSelector(selectTimesheet);

  useEffect(() => {
    if (timesheets.length === 0) {
      if (userRole === UserRole.ADMIN) {
        getAllTimesheets({});
      } else if (userRole === UserRole.MANAGER) {
        getSubordinatesTimesheets({});
      }
    }
  }, []);

  const pagination = usePagination({
    data: timesheets,
    itemsPerPage,
  });

  const handleApprove = (entryId: string) => {
    updateTimesheetEntry(entryId, {
      status: TimesheetStatus.APPROVED,
      approvedAt: new Date().toISOString(),
      approvedBy: managerId,
    });
    alert("Entry approved successfully!");
  };

  const handleReject = (entryId: string) => {
    updateTimesheetEntry(entryId, {
      status: TimesheetStatus.REJECTED,
      approvedBy: managerId,
    });
    alert("Entry rejected successfully!");
  };

  if (pagination.paginatedData.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No pending timesheet entries for approval.
      </div>
    );
  }

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Activity</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Hours</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pagination.paginatedData.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.user?.email}</TableCell>
              <TableCell>{new Date().toLocaleDateString()}</TableCell>
              <TableCell>{entry.activityType}</TableCell>
              <TableCell>{entry.activityType}</TableCell>
              <TableCell className="max-w-xs truncate">
                {entry.description}
              </TableCell>
              <TableCell>{entry.timeSpentMinutes}h</TableCell>
              <TableCell>
                {entry.submittedAt &&
                  new Date(entry.submittedAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {entry.status !== TimesheetStatus.APPROVED && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleApprove(entry.id)}
                      className="bg-green-50 text-green-700 hover:bg-green-100"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                  )}
                  {entry.status !== TimesheetStatus.REJECTED && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReject(entry.id)}
                      className="bg-red-50 text-red-700 hover:bg-red-100"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
    </div>
  );
}
