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
      await signin({
        email: user.email,
        password: user.password,
        role: user.role,
      });
      if (user.role === UserRole.EMPLOYEE) {
        router.push("/employee/timesheet");
        return;
      }
      if (user.role === UserRole.MANAGER) {
        router.push("/manager");
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginForm
      onLogin={onLogin}
      onShowSignup={() => {
        router.push("/signup");
      }}
    />
  );
};

export default SignIn;
