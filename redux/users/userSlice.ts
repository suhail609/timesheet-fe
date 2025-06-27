import { EmployeeWithReportingManager } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserSlice {
  employees: EmployeeWithReportingManager[];
  isLoading?: boolean;
  error?: string | null;
}

const initialState: UserSlice = {
  employees: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setUsers: (
      state,
      action: PayloadAction<EmployeeWithReportingManager[]>
    ) => {
      state.isLoading = false;
      state.employees = action.payload;
    },
    setUsersFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const { setUsersStart, setUsers, setUsersFailure } = userSlice.actions;
export const selectUsers = (state: { users: UserSlice }) => state.users;
export default userSlice.reducer;
