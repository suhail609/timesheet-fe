"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthActions } from "../../../redux/auth/authActions";
import { LoginForm } from "@/components/login-form";
import { User } from "@/types";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin } = useAuthActions();
  const router = useRouter();"/timesheet/all"

  const onLogin = async (user: User) => {
    try {
      await signin({ email: user.email, password: user.role });
      router.push("/employee/timesheet");
    } catch (error) {
      console.error(error);
    }
  };

  return <LoginForm onLogin={onLogin} onShowSignup={() => {}} />;
};

export default SignIn;
