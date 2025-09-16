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
import { ProjectE, TimesheetEntry, TimesheetStatus, UserRole } from "@/types";
import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TimesheetTable } from "./timesheet-table";
import { ExportTimesheetToExcelButton } from "./export-timesheet-to-excel-button";

interface ApprovalQueueProps {
  managerId: string;
  userRole: UserRole;
}

const FilterBar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <Input
              type="text"
              placeholder="Search employee..."
              // value={filters.employee}
              onChange={
                (e) => {}
                // setFilters((f) => ({ ...f, employee: e.target.value }))
              }
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <Select
            // value={formData.project}
            // onValueChange={(value) => handleInputChange("project", value)}
            >
              <SelectTrigger
              // className={"errors.project" ? "border-red-500" : ""}
              >
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
          </div>
          <div>
            <Input
              type="date"
              // value={filters.dateFrom}
              onChange={
                (e) => {}
                // setFilters((f) => ({ ...f, dateFrom: e.target.value }))
              }
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <Input
              type="date"
              // value={filters.dateTo}
              onChange={
                (e) => {}
                // setFilters((f) => ({ ...f, dateTo: e.target.value }))
              }
              className="border rounded px-2 py-1"
            />
          </div>

          <Button
            variant="outline"
            onClick={
              () => {}
              // setFilters({
              //   employee: "",
              //   project: "",
              //   activityType: "",
              //   status: "",
              //   dateFrom: "",
              //   dateTo: "",
              // })
            }
          >
            Reset Filters
          </Button>
        </div>
        <ExportTimesheetToExcelButton />
      </div>
    </>
  );
};

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
  };

  const handleReject = (entryId: string) => {
    updateTimesheetEntry(entryId, {
      status: TimesheetStatus.REJECTED,
      approvedBy: managerId,
    });
  };

  if (pagination.paginatedData.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No pending timesheet entries for approval.
      </div>
    );
  }

  return (
    <>
      <FilterBar />
      <TimesheetTable
        data={pagination.paginatedData}
        onApprove={handleApprove}
        onReject={handleReject}
      />
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
    </>
  );
}
