//ENVIRONMENTS
import { useAccessToken } from "@/hooks/useAccessToken";
import {
  getAccessTokenFromCookie,
  getRefreshTokenFromCookie,
  getRememberMe,
  removeRememberMe,
} from "@/utils/storage/protectedStorage";
//AXIOS
import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
//REDUX
// import { store } from "@/store/store";
// import { USER_REFRESH_ACCESS_TOKEN } from "./ApiEndpoints";
// import {
//   setAccessToken,
//   setLogout,
//   setRefreshToken,
//   setUserRedux,
// } from "@/store/user/userSlice";

// const logout = (): void => {
//   store.dispatch(setUserRedux(null));
// };

// const refreshTokenAPI = async () => {
//   let refreshToken = getRefreshTokenFromCookie();
//   try {
//     const response = await axios.post(
//       process.env.NEXT_PUBLIC_BASE_URL + USER_REFRESH_ACCESS_TOKEN,
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${refreshToken}`,
//         },
//       }
//     );

//     store.dispatch(
//       setAccessToken({
//         token: response.data.data.token.access_token,
//       })
//     );
//     store.dispatch(
//       setRefreshToken({
//         token: response.data.data.token.refresh_token,
//       })
//     );

//     return response.data.data.token.access_token;
//   } catch (error: any) {
//     logout();
//     return Promise.reject(error);
//   }
// };

export const ApiRequest = (): AxiosInstance => {
  // const accessToken = getAccessTokenFromCookie();
  const { getAccessToken } = useAccessToken();
  // let refreshToken = getRefreshTokenFromCookie();
  // const rememberMe = getRememberMe();

  const request = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
    responseType: "json",
    socketPath: null,
  });

  // request.interceptors.response.use(
  //   (response: AxiosResponse) => response,
  //   async (error: AxiosError) => {
  //     if (error.code === 'ERR_NETWORK') {
  //       return error;
  //     }

  //     const originalRequest: any = error.config;

  //     if (error.response?.status === 401 && !originalRequest._retry) {
  //       if (token) {
  //         originalRequest._retry = true;

  //         if (rememberMe?.bool) {
  //           try {
  //             const newAccessToken = await refreshTokenAPI();
  //             request.defaults.headers.common['Authorization'] =
  //               `Bearer ${newAccessToken}`;
  //             originalRequest.headers['Authorization'] =
  //               `Bearer ${newAccessToken}`;
  //             request(originalRequest);
  //           } catch (refreshError) {
  //             logout();
  //             Promise.reject(refreshError);
  //           }
  //         }
  //       }
  //     }

  //     if (error.response?.status === 403) {
  //       logout();
  //       return error;
  //     }

  //     return Promise.reject(error);
  //   }
  // );

  return request;
};
