import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import timesheetReducer from "./timesheet/timesheetSlice";
import appDataReducer from "./app-data/appDataSlice";
import chatMessageReducer from "./timesheet/chatMessageSlice";
import userReducer from "./users/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timesheet: timesheetReducer,
    appData: appDataReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
