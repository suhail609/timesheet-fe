import { Activity, ProjectE, TimesheetEntry, TimesheetStatus } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TimesheetState {
  timesheets: TimesheetEntry[];
}

const initialState: TimesheetState = {
  timesheets: [
    // {
    //   id: "entry-1",
    //   userId: "user-1",
    //   date: "2024-01-15",
    //   project: ProjectE.PROJECT_A,
    //   activity: Activity.DEVELOPMENT,
    //   description: "Implemented user authentication module",
    //   timeSpentMinutes: 8,
    //   status: TimesheetStatus.SUBMITTED,
    //   submittedAt: "2024-01-15T18:00:00Z",
    // },
    // {
    //   id: "entry-2",
    //   userId: "user-1",
    //   date: "2024-01-16",
    //   project: ProjectE.PROJECT_A,
    //   activity: Activity.TRAINING,
    //   description: "Code review for payment gateway integration",
    //   timeSpentMinutes: 4,
    //   status: TimesheetStatus.DRAFT,
    // },
    // {
    //   id: "entry-3",
    //   userId: "user-3",
    //   date: "2024-01-15",
    //   project: ProjectE.PROJECT_A,
    //   activity: Activity.ADMINISTRATION,
    //   description: "Testing mobile app login functionality",
    //   timeSpentMinutes: 6,
    //   status: TimesheetStatus.SUBMITTED,
    //   submittedAt: "2024-01-15T17:30:00Z",
    // },
    // {
    //   id: "entry-4",
    //   userId: "user-1",
    //   date: "2024-01-17",
    //   project: ProjectE.PROJECT_A,
    //   activity: Activity.ADMINISTRATION,
    //   description: "Updated API documentation",
    //   timeSpentMinutes: 3,
    //   status: TimesheetStatus.APPROVED,
    //   submittedAt: "2024-01-17T18:00:00Z",
    //   approvedAt: "2024-01-18T09:00:00Z",
    //   approvedBy: "user-2",
    // },
  ],
};

const timesheetSlice = createSlice({
  name: "timesheet",
  initialState,
  reducers: {
    setTimesheets: (state, action: PayloadAction<TimesheetEntry[]>) => {
      state.timesheets = action.payload;
    },
    addTimesheet: (state, action: PayloadAction<TimesheetEntry>) => {
      state.timesheets.unshift(action.payload);
    },
  },
});

export const { setTimesheets, addTimesheet } = timesheetSlice.actions;
export const selectTimesheet = (state: { timesheet: TimesheetState }) =>
  state.timesheet;
export default timesheetSlice.reducer;
