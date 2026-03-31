"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div>
      <Button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Login
      </Button>
    </div>
  );
};

export default Login;
