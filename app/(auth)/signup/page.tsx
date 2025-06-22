"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthActions } from "../../../redux/auth/authActions";
import { SignupForm } from "@/components/signup-form";
import { User } from "@/types";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { signup } = useAuthActions();

  const handleSubmit = async (user: User) => {
    try {
      signup({ email: user.email, password: user.role });
      router.push("/chat");
    } catch (error) {
      console.error(error);
    }
  };

  return <SignupForm onSignup={handleSubmit} onBackToLogin={() => {}} />;
};

export default SignUp;
