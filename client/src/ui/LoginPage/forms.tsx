import { Button } from "./forms/button";
import { EmailInput } from "./forms/emailInput";
import { KeepLogged } from "./forms/keepLogged";
import { PasswordInput } from "./forms/passwordInput";
import { SelectInput } from "./forms/selectInput";

export function LoginForm() {
  return (
    
      <form className="w-10/12 flex flex-col gap-2 items-center">
        <EmailInput />

        <PasswordInput />

        <SelectInput />

        <KeepLogged />

        <Button />
      </form>
  );
}
