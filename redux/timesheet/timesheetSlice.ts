import { Activity, ProjectE, TimesheetEntry, TimesheetStatus } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimesheetState {
  timesheets: TimesheetEntry[];
}

const initialState: TimesheetState = {
  timesheets: [],
};

const timesheetSlice = createSlice({
  name: "timesheet",
  initialState,
  reducers: {
    setTimesheets: (
      state: TimesheetState,
      action: PayloadAction<TimesheetEntry[]>
    ) => {
      state.timesheets = action.payload;
    },
    addTimesheet: (
      state: TimesheetState,
      action: PayloadAction<TimesheetEntry>
    ) => {
      state.timesheets.push(action.payload);
    },
    updateTimesheet: (
      state: TimesheetState,
      action: PayloadAction<TimesheetEntry>
    ) => {
      state.timesheets = state.timesheets.map((timesheet) => {
        if (timesheet.id === action.payload.id) return action.payload;
        return timesheet;
      });
    },
    timeSheetReset: () => {
      return initialState;
    },
  },
});

export const { setTimesheets, addTimesheet, updateTimesheet, timeSheetReset } =
  timesheetSlice.actions;
export const selectTimesheet = (state: { timesheet: TimesheetState }) =>
  state.timesheet;
export default timesheetSlice.reducer;
