"use client";

import { LoginForm } from "@/components/login-form";
import { UserRole, UserSignin } from "@/types";
import { useRouter } from "next/navigation";
import { useAuthActions } from "../../../redux/auth/authActions";

const SignIn = () => {
  const router = useRouter();
  const { signin } = useAuthActions();

  const onLogin = async (user: UserSignin) => {
    try {
      const result = await signin({
        email: user.email,
        password: user.password,
      });

      if (!result || !result.user) {
        console.error("Login failed: No user data returned");
        throw new Error("Login failed");
      }

      if (result.user.role === UserRole.EMPLOYEE) {
        router.push("/employee/timesheet");
        return;
      }
      if (result.user.role === UserRole.MANAGER) {
        router.push("/manager");
        return;
      }
      if (result.user.role === UserRole.ADMIN) {
        router.push("/admin");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return <LoginForm onLogin={onLogin} />;
};

export default SignIn;
