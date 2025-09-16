import {
  CREATE_TIMESHEET,
  DELETE_TIMESHEET,
  GET_ALL_TIMESHEETS,
  GET_ALL_TIMESHEETS_OF_EMPLOYEE,
  GET_SUBORDINATES_TIMESHEET,
  SUBMIT_TIMESHEETS,
  UPDATE_TIMESHEET,
} from "@/network/ApiEndpoints";
import { ApiRequest } from "@/network/ApiRequest";
import { ActivityType, ProjectE, TimesheetEntry } from "@/types";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { removeEmptyFilters } from "../../utils/utils";
import {
  setMessagesLoading
} from "./chatMessageSlice";
import {
  addTimesheet,
  // setChats,
  // setSelectedChat,
  // clearChatSelection,
  setTimesheets,
  timeSheetReset,
  updateTimesheet as updateTimesheetSlice,
} from "./timesheetSlice";

export const useTimesheetActions = () => {
  const dispatch = useDispatch();

  const getAllTimesheetsOfEmployee = async ({
    page,
    limit,
  }: {
    page?: number;
    limit?: number;
  }) => {
    try {
      const response = await ApiRequest()
        .request({
          method: "GET",
          url: GET_ALL_TIMESHEETS_OF_EMPLOYEE,
          params: { page, limit },
        })
        .then((response: AxiosResponse) => {
          const { data } = response;

          dispatch(setTimesheets(data));

          return data;
        })
        .catch((error) => {
          // errorToastify(error);
          return error;
        });

      return response;
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const getAllTimesheets = async ({
    page,
    limit,
    filters,
  }: {
    page?: number;
    limit?: number;
    filters?: {
      fromDate?: string;
      toDate?: string;
      search?: string;
      project?: ProjectE | "";
      activityType?: ActivityType | "";
    };
  }) => {
    try {
      const response = await ApiRequest()
        .request({
          method: "GET",
          url: GET_ALL_TIMESHEETS,
          params: {
            page,
            limit,
            ...removeEmptyFilters(filters),
          },
        })
        .then((response: AxiosResponse) => {
          const { data } = response;

          dispatch(setTimesheets(data));

          return data;
        })
        .catch((error) => {
          // errorToastify(error);
          return error;
        });

      return response;
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const updateTimesheetEntry = async (
    timesheetId: string,
    editingEntry: Partial<TimesheetEntry>
  ) => {
    await ApiRequest().request({
      method: "PATCH",
      url: `${UPDATE_TIMESHEET}/${timesheetId}`,
      data: editingEntry,
    });

    toast.success("Timesheet Updated Successfully");

    //TODO: update store without calling the api again
    await getSubordinatesTimesheets({});
  };

  const updateTimesheetEntryEmployee = async (
    timesheetId: string,
    editingEntry: Partial<TimesheetEntry>
  ) => {
    await ApiRequest().request({
      method: "PATCH",
      url: `${UPDATE_TIMESHEET}/${timesheetId}`,
      data: editingEntry,
    });

    toast.success("Timesheet Updated Successfully");

    //TODO: update store without calling the api again
    await getAllTimesheetsOfEmployee({});
  };

  const submitTimesheets = async (
    timesheetIds: string[]
    // editingEntry: Partial<TimesheetEntry>
  ) => {
    await ApiRequest().request({
      method: "PATCH",
      url: `${SUBMIT_TIMESHEETS}`,
      data: { timesheetIds: timesheetIds },
    });

    await getAllTimesheetsOfEmployee({});
  };

  const deleteTimesheet = async (
    timesheetId: string
    // editingEntry: Partial<TimesheetEntry>
  ) => {
    await ApiRequest().request({
      method: "DELETE",
      url: `${DELETE_TIMESHEET}/${timesheetId}`,
    });
    toast.success("Timesheet Deleted Successfully");

    await getAllTimesheetsOfEmployee({});
  };

  const createNewTimesheetEntry = async (newTimesheet: TimesheetEntry) => {
    try {
      const response = await ApiRequest().request({
        method: "POST",
        url: CREATE_TIMESHEET,
        data: newTimesheet,
      });

      dispatch(addTimesheet(response.data));
      toast.success("Timesheet Created Successfully");

      // dispatch(setMessagesLoading(true));
      // dispatch(addMessage({ content: content, isAI: false }));
      // const response = await trpc.chat.sendMessage.mutate({
      //   chatId: chatId,
      //   content: content,
      // });
      // dispatch(addTimesheet({}));
    } catch (error) {
      console.error("Error adding new timesheet entry:", error);
    } finally {
      dispatch(setMessagesLoading(false));
    }
  };

  const updateTimesheet = async (updatedTimesheet: TimesheetEntry) => {
    try {
      console.log({ updatedTimesheet });
      const response = await ApiRequest().request({
        method: "PUT",
        url: UPDATE_TIMESHEET + "/" + updatedTimesheet.id,
        data: updatedTimesheet,
        // params: updatedTimesheet.id,
      });

      dispatch(updateTimesheetSlice(updatedTimesheet));
      toast.success("Timesheet Updated Successfully");

      // dispatch(setMessagesLoading(true));
      // dispatch(addMessage({ content: content, isAI: false }));
      // const response = await trpc.chat.sendMessage.mutate({
      //   chatId: chatId,
      //   content: content,
      // });
      // dispatch(addTimesheet({}));
    } catch (error) {
      console.error("Error updating timesheet: ", error);
    } finally {
      dispatch(setMessagesLoading(false));
    }
  };

  const getSubordinatesTimesheets = async ({
    page,
    limit,
    filters,
  }: {
    page?: number;
    limit?: number;
    filters?: {
      fromDate?: string;
      toDate?: string;
      search?: string;
      project?: ProjectE | "";
      activityType?: ActivityType | "";
    };
  }) => {
    try {
      const response = await ApiRequest()
        .request({
          method: "GET",
          url: GET_SUBORDINATES_TIMESHEET,
          params: {
            page,
            limit,
            ...removeEmptyFilters(filters),
          },
        })
        .then((response: AxiosResponse) => {
          const { data } = response;

          dispatch(setTimesheets(data));

          return data;
        })
        .catch((error) => {
          // errorToastify(error);
          return error;
        });

      return response;
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  const resetTimesheet = () => {
    dispatch(timeSheetReset());
  };

  // const selectChat = ({ selectedChatId }: { selectedChatId: string }) => {
  //   dispatch(setSelectedChat(selectedChatId));
  // };

  // const clearSelectedChatAndMessages = () => {
  //   dispatch(clearChatSelection());
  //   dispatch(clearMessages());
  // };

  return {
    getAllTimesheets,
    getAllTimesheetsOfEmployee,
    createNewTimesheetEntry,
    updateTimesheet,
    getSubordinatesTimesheets,
    updateTimesheetEntry,
    deleteTimesheet,
    submitTimesheets,
    resetTimesheet,
    updateTimesheetEntryEmployee,
  };
};
