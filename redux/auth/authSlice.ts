import { UserRole } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; role: UserRole } | null;
  isLoading?: boolean;
  error?: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    authSuccess: (state, action: PayloadAction<AuthState>) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    authFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    authReset: (state) => {
      return initialState;
    },
  },
});

export const { authStart, authSuccess, authFailure, authReset } =
  authSlice.actions;
export const selectAuthSlice = (state: { auth: AuthState }) => state.auth;
export default authSlice.reducer;
