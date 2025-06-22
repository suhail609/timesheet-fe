import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import timesheetReducer from "./timesheet/timesheetSlice";
import chatMessageReducer from "./timesheet/chatMessageSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    timesheet: timesheetReducer,
    chatMessages: chatMessageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
