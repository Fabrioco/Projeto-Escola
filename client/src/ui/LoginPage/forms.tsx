"use client";
import { useState } from "react";
import { Button } from "./Forms/button";
import { EmailInput } from "./Forms/emailInput";
import { KeepLogged } from "./Forms/keepLogged";
import { PasswordInput } from "./Forms/passwordInput";
import { SelectInput } from "./Forms/selectInput";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  return (
    <form className="w-10/12 flex flex-col gap-2 items-center">
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
