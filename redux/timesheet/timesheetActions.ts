import { useDispatch } from "react-redux";
import {
  // setChats,
  // setSelectedChat,
  // clearChatSelection,
  setTimesheets,
  addTimesheet,
  updateTimesheet as updateTimesheetSlice,
} from "./timesheetSlice";
import {
  addMessage,
  setMessages,
  clearMessages,
  setMessagesLoading,
} from "./chatMessageSlice";
import { ApiRequest } from "@/network/ApiRequest";
import {
  CREATE_TIMESHEET,
  DELETE_TIMESHEET,
  GET_ALL_TIMESHEETS,
  GET_SUBORDINATES_TIMESHEET,
  SUBMIT_TIMESHEETS,
  UPDATE_TIMESHEET,
} from "@/network/ApiEndpoints";
import { AxiosResponse } from "axios";
import { TimesheetEntry } from "@/types";

export const useTimesheetActions = () => {
  const dispatch = useDispatch();

  const getAllTimesheets = async ({
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
          url: GET_ALL_TIMESHEETS,
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

  const updateTimesheetEntry = async (
    timesheetId: string,
    editingEntry: Partial<TimesheetEntry>
  ) => {
    await ApiRequest().request({
      method: "PATCH",
      url: `${UPDATE_TIMESHEET}/${timesheetId}`,
      data: editingEntry,
    });

    //TODO: update store without calling the api again
    await getSubordinatesTimesheets({});
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

    await getAllTimesheets({});
  };

  const deleteTimesheet = async (
    timesheetId: string
    // editingEntry: Partial<TimesheetEntry>
  ) => {
    await ApiRequest().request({
      method: "DELETE",
      url: `${DELETE_TIMESHEET}/${timesheetId}`,
    });
    await getAllTimesheets({});
  };

  const createNewTimesheetEntry = async (newTimesheet: TimesheetEntry) => {
    try {
      const response = await ApiRequest().request({
        method: "POST",
        url: CREATE_TIMESHEET,
        data: newTimesheet,
      });

      dispatch(addTimesheet(response.data));

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
  }: {
    page?: number;
    limit?: number;
  }) => {
    try {
      const response = await ApiRequest()
        .request({
          method: "GET",
          url: GET_SUBORDINATES_TIMESHEET,
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

  // const selectChat = ({ selectedChatId }: { selectedChatId: string }) => {
  //   dispatch(setSelectedChat(selectedChatId));
  // };

  // const clearSelectedChatAndMessages = () => {
  //   dispatch(clearChatSelection());
  //   dispatch(clearMessages());
  // };

  return {
    getAllTimesheets,
    createNewTimesheetEntry,
    updateTimesheet,
    getSubordinatesTimesheets,
    updateTimesheetEntry,
    deleteTimesheet,
    submitTimesheets,
  };
};
