import { useAccessToken } from "@/hooks/useAccessToken";
import { GET_APP_DATA, GET_PROFILE, SIGNIN, SIGNUP } from "@/network/ApiEndpoints";
import { ApiRequest } from "@/network/ApiRequest";
import {
  AppDataResponse,
  SignupResponse,
  UserProfile,
  UserSignin,
  UserSignup,
} from "@/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setAppData } from "./appDataSlice";

export const appDataActions = () => {
  const dispatch = useDispatch();

  const getAppData = async () => {
    try {
      const { status, data }: AxiosResponse<AppDataResponse> =
        await ApiRequest().request({
          method: "GET",
          url: GET_APP_DATA,
        });

      dispatch(setAppData(data));
      if (status) return true;
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  return { getAppData };
};
