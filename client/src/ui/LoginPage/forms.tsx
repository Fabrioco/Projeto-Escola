"use client";
import React, { useState } from "react";
import { Button } from "./Forms/button";
import { EmailInput } from "./Forms/emailInput";
import { KeepLogged } from "./Forms/keepLogged";
import { PasswordInput } from "./Forms/passwordInput";
import { SelectInput } from "./Forms/selectInput";
import { useAuth } from "@/contexts/authContext";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  const { signIn } = useAuth();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn({ email, password, keepLogged: remember, role });
  };

  return (
    <form
      className="w-10/12 flex flex-col gap-2 items-center"
      onSubmit={(e) => handleLogin(e)}
    >
      <EmailInput email={email} setEmail={(e) => setEmail(e.target.value)} />

      <PasswordInput
        password={password}
        setPassword={(e) => setPassword(e.target.value)}
      />

      <SelectInput role={role} setRole={(e) => setRole(e.target.value)} />

      <KeepLogged
        remember={remember}
        setRemember={(e) => setRemember(e.target.checked)}
      />

      <Button type="submit">Entrar</Button>
    </form>
  );
}
