"use client";

import { PaginationControls } from "@/components/pagination-controls";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePagination } from "@/hooks/use-pagination";
import { useTimesheetActions } from "@/redux/timesheet/timesheetActions";
import { selectTimesheet } from "@/redux/timesheet/timesheetSlice";
import {
  ActivityType,
  ProjectE,
  TimesheetStatus,
  UserRole
} from "@/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ExportTimesheetToExcelButton } from "./export-timesheet-to-excel-button";
import { TimesheetTable } from "./timesheet-table";

interface ApprovalQueueProps {
  managerId: string;
  userRole: UserRole;
}

interface FilterBarProps {
  timeSheetFilters: {
    search: string;
    project: ProjectE | "";
    fromDate: string;
    toDate: string;
    activityType: ActivityType | "";
  };
  setTimesheetFilters: React.Dispatch<
    React.SetStateAction<{
      search: string;
      project: ProjectE | "";
      fromDate: string;
      toDate: string;
      activityType: ActivityType | "";
    }>
  >;
  resetFilters: () => void;
}

//TODO: debounce search input
const FilterBar = ({
  timeSheetFilters,
  setTimesheetFilters,
  resetFilters,
}: FilterBarProps) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <Input
              type="text"
              placeholder="Search..."
              value={timeSheetFilters.search}
              onChange={(e) => {
                setTimesheetFilters((f) => ({ ...f, search: e.target.value }));
              }}
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <Select
              value={timeSheetFilters.project}
              onValueChange={(value) => {
                if (value in ProjectE) {
                  setTimesheetFilters((f) => ({
                    ...f,
                    project: value as ProjectE,
                  }));
                }
              }}
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
              value={timeSheetFilters.fromDate}
              onChange={
                (e) => {
                  setTimesheetFilters((f) => ({
                    ...f,
                    fromDate: e.target.value,
                  }));
                }
                // setFilters((f) => ({ ...f, dateFrom: e.target.value }))
              }
              className="border rounded px-2 py-1"
            />
          </div>
          <div>
            <Input
              type="date"
              value={timeSheetFilters.toDate}
              onChange={
                (e) => {
                  setTimesheetFilters((f) => ({
                    ...f,
                    toDate: e.target.value,
                  }));
                }
                // setFilters((f) => ({ ...f, dateTo: e.target.value }))
              }
              className="border rounded px-2 py-1"
            />
          </div>

          <Button variant="outline" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
        <ExportTimesheetToExcelButton filters={timeSheetFilters} />
      </div>
    </>
  );
};

export function ApprovalQueue({ managerId, userRole }: ApprovalQueueProps) {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [timesheetFilters, setTimesheetFilters] = useState<{
    search: string;
    project: ProjectE | "";
    fromDate: string;
    toDate: string;
    activityType: ActivityType | "";
  }>({
    search: "",
    project: "",
    fromDate: "",
    toDate: "",
    activityType: "",
  });

  const resetFilters = () => {
    setTimesheetFilters({
      search: "",
      project: "",
      fromDate: "",
      toDate: "",
      activityType: "",
    });
  };

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

  useEffect(() => {
    if (userRole === UserRole.ADMIN) {
      getAllTimesheets({
        filters: timesheetFilters,
      });
    } else if (userRole === UserRole.MANAGER) {
      getSubordinatesTimesheets({
        filters: timesheetFilters,
      });
    }
  }, [
    timesheetFilters.fromDate,
    timesheetFilters.toDate,
    timesheetFilters.search,
    timesheetFilters.project,
    timesheetFilters.activityType,
  ]);

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
      <>
        <FilterBar
          timeSheetFilters={timesheetFilters}
          setTimesheetFilters={setTimesheetFilters}
          resetFilters={resetFilters}
        />
        <div className="text-center py-8 text-gray-500">
          No pending timesheet entries for approval.
        </div>
      </>
    );
  }

  return (
    <>
      <FilterBar
        timeSheetFilters={timesheetFilters}
        setTimesheetFilters={setTimesheetFilters}
        resetFilters={resetFilters}
      />
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
