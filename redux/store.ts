import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import timesheetReducer from "./timesheet/timesheetSlice";
import chatMessageReducer from "./timesheet/chatMessageSlice";
import appDataSlice from "./app-data/appDataSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timesheet: timesheetReducer,
    appData: appDataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
