import { AppDataResponse, UserRole } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppDataSlice {
  appData: { managers: { id: string; firstName: string; email: string }[] };
  isLoading?: boolean;
  error?: string | null;
}

const initialState: AppDataSlice = {
  appData: { managers: [] },
  isLoading: false,
  error: null,
};

const appDataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {
    setAppDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    setAppData: (state, action: PayloadAction<AppDataResponse>) => {
      state.isLoading = false;
      state.appData = action.payload;
    },
    setAppDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const { setAppDataStart, setAppData, setAppDataFailure } =
  appDataSlice.actions;
export const selectAppData = (state: { appData: AppDataSlice }) =>
  state.appData;
export default appDataSlice.reducer;
