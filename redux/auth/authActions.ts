import { useDispatch } from "react-redux";
import { setAuthState } from "./authSlice";
import { ApiRequest } from "@/network/ApiRequest";
import { SIGNUP } from "@/network/ApiEndpoints";
import { UserRole } from "@/types";
// import { trpc } from "../../lib/trpc";

export const useAuthActions = () => {
  const dispatch = useDispatch();

  const signin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      // const mutation = trpc.auth.signin;
      // const token = await mutation.mutate({ email, password });
      dispatch(
        setAuthState({
          isAuthenticated: true,
          user: { email: email },
          token: "token",
        })
      );
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  const signup = async ({
    email,
    password,
    role,
  }: {
    email: string;
    password: string;
    role: UserRole;
  }) => {
    try {

      const response = (await ApiRequest().request({
        method: "POST",
        url: SIGNUP,
        data: { email: email, password: password, role: role },
      })) as {
        accessToken: string;
        user: {
          firstName: string;
          lastName: string;
          email: string;
          role: UserRole;
        };
      };

      dispatch(
        setAuthState({
          isAuthenticated: true,
          user: { email: email, role: response.user.role },
          token: response.accessToken,
        })
      );
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const signout = () => {
    dispatch(setAuthState({ isAuthenticated: false, user: null, token: null }));
  };

  return { signin, signup, signout };
};
