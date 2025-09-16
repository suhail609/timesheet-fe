import { Button } from "@/components/ui/button";
import { GET_SUBORDINATES_TIMESHEET } from "@/network/ApiEndpoints";
import { ApiRequest } from "@/network/ApiRequest";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";
import * as XLSX from "xlsx";
import { removeEmptyFilters } from "../utils/utils";

type ExportTimesheetToExcelButtonProps = {
  filters?: {
    startDate?: string;
    endDate?: string;
    search?: string;
  };
  label?: string;
};

export const ExportTimesheetToExcelButton = ({
  filters,
}: ExportTimesheetToExcelButtonProps) => {
  const exportToExcel = async () => {
    const { data, status } = await ApiRequest().request({
      method: "GET",
      url: GET_SUBORDINATES_TIMESHEET,
      params: {
        ...removeEmptyFilters(filters),
      },
    });

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Timesheet");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const now = new Date();
    const timestamp = now
      .toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(/[/:]/g, "-")
      .replace(", ", "_");

    const bData = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(bData, `subordinates-timesheet-${timestamp}.xlsx`);
  };

  return (
    <Button variant="ghost" size="default" onClick={exportToExcel}>
      Export
      <Download className="w-4 h-4" />
    </Button>
  );
};
