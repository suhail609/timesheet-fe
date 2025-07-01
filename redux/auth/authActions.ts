import { useAccessToken } from "@/hooks/useAccessToken";
import { GET_PROFILE, SIGNIN, SIGNUP } from "@/network/ApiEndpoints";
import { ApiRequest } from "@/network/ApiRequest";
import {
  SigninResponse,
  SignupResponse,
  UserProfile,
  UserSignin,
  UserSignup,
} from "@/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { authStart, authSuccess, authFailure, authReset } from "./authSlice";
import { toast } from "sonner";
import { useTimesheetActions } from "../timesheet/timesheetActions";

export const useAuthActions = () => {
  const { resetTimesheet } = useTimesheetActions();
  const dispatch = useDispatch();
  const { setAccessToken, removeAccessToken } = useAccessToken();

  const signin = async ({ email, password, role }: UserSignin) => {
    try {
      dispatch(authStart());
      const { status, data }: AxiosResponse<SigninResponse> =
        await ApiRequest().request({
          method: "POST",
          url: SIGNIN,
          data: { email: email, password: password, role: role },
        });

      dispatch(
        authSuccess({
          isAuthenticated: true,
          user: { email: data.user.email, role: data.user.role },
        })
      );

      setAccessToken(data.accessToken);
      if (status) return true;
    } catch (error) {
      console.error("Signin failed:", error);
      toast.error("Signin failed: " + error);
    }
  };

  const getProfile = async () => {
    try {
      dispatch(authStart());
      console.log("getting profile");

      const { status, data }: AxiosResponse<UserProfile> =
        await ApiRequest().request({
          method: "GET",
          url: GET_PROFILE,
        });

      dispatch(
        authSuccess({
          isAuthenticated: true,
          user: { email: data.email, role: data.role },
        })
      );
      if (status) return true;
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  const signup = async ({
    email,
    password,
    role,
    reportingManagerId,
  }: UserSignup) => {
    try {
      dispatch(authStart());

      const response: AxiosResponse<SignupResponse> =
        await ApiRequest().request({
          method: "POST",
          url: SIGNUP,
          data: {
            email: email,
            password: password,
            role: role,
            reportingManagerId: reportingManagerId,
          },
        });

      const { status, data } = response;

      dispatch(
        authSuccess({
          isAuthenticated: true,
          user: { email: email, role: data.user.role },
          isLoading: false,
        })
      );

      setAccessToken(data.accessToken);

      if (status) return true;
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const signout = () => {
    removeAccessToken();
    resetTimesheet();
    dispatch(authReset());
  };

  return { signin, signup, signout, getProfile };
};
