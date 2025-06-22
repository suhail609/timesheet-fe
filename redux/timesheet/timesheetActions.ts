import { useDispatch } from "react-redux";
import {
  // setChats,
  // setSelectedChat,
  // clearChatSelection,
  setTimesheets,
  addTimesheet,
} from "./timesheetSlice";
import {
  addMessage,
  setMessages,
  clearMessages,
  setMessagesLoading,
} from "./chatMessageSlice";
import { ApiRequest } from "@/network/ApiRequest";
import { GET_ALL_TIMESHEETS } from "@/network/ApiEndpoints";
import { AxiosResponse } from "axios";

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

  // const getChatMessages = async ({ chatId }: { chatId: string }) => {
  //   try {
  //     dispatch(setMessagesLoading(true));
  //     const response = await trpc.chat.getChatMessages.query({
  //       chatId: chatId,
  //     });
  //     const messages = response.map((message) => ({
  //       content: message.content,
  //       isAI: message.isAI,
  //     }));
  //     dispatch(setMessages(messages));
  //   } catch (error) {
  //     console.error("Error fetching chat messages:", error);
  //   } finally {
  //     dispatch(setMessagesLoading(false));
  //   }
  // };

  const createNewTimesheetEntry = async ({
    chatId,
    content,
  }: {
    chatId?: string;
    content: string;
  }) => {
    try {
      dispatch(setMessagesLoading(true));
      dispatch(addMessage({ content: content, isAI: false }));

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
  };
};
