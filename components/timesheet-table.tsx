import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { TimesheetStatus } from "@/types";
import { Check, X } from "lucide-react";
import { TimesheetEntry } from "@/types";

interface TimesheetTableProps {
  data: TimesheetEntry[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export const TimesheetTable = ({
  data,
  onApprove,
  onReject,
}: TimesheetTableProps) => {
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
          {data.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell>{entry.user?.email}</TableCell>
              <TableCell>{entry.date}</TableCell>
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
                      onClick={() => onApprove(entry.id)}
                      className="bg-green-50 text-green-700 hover:bg-green-100"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                  )}
                  {entry.status !== TimesheetStatus.REJECTED && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onReject(entry.id)}
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
    </div>
  );
};
