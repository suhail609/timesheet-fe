"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthActions } from "../../../redux/auth/authActions";
import { SignupForm } from "@/components/signup-form";
import { User, UserSignup } from "@/types";
import { toast } from "sonner";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { signup } = useAuthActions();

  const handleSubmit = async (user: UserSignup) => {
    try {
      signup({
        email: user.email,
        password: user.password,
        role: user.role,
        reportingManagerId: user.reportingManagerId,
      });
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Error Signup "+ error)
    }
  };

  return (
    <SignupForm
      onSignup={handleSubmit}
      onBackToLogin={() => {
        router.push("/signin");
      }}
    />
  );
};

export default SignUp;
