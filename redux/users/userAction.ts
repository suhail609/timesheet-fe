import { GET_SUBORDINATES, GET_USERS } from "@/network/ApiEndpoints";
import { ApiRequest } from "@/network/ApiRequest";
import { EmployeeWithReportingManager } from "@/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setUsers } from "./userSlice";

export const usersActions = () => {
  const dispatch = useDispatch();

  const getUserDataForManager = async () => {
    try {
      const { status, data }: AxiosResponse<EmployeeWithReportingManager[]> =
        await ApiRequest().request({
          method: "GET",
          url: GET_SUBORDINATES,
        });

      dispatch(setUsers(data));
      if (status) return true;
    } catch (error) {
      console.error("Fetching user data failed:", error);
    }
  };

  const getUserDataForAdmin = async () => {
    try {
      const { status, data }: AxiosResponse<EmployeeWithReportingManager[]> =
        await ApiRequest().request({
          method: "GET",
          url: GET_USERS,
        });

      dispatch(setUsers(data));
      if (status) return true;
    } catch (error) {
      console.error("Fetching user data failed:", error);
    }
  };

  return { getUserDataForAdmin, getUserDataForManager };
};
