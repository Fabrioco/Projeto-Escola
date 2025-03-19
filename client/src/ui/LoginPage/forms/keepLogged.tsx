import { ChangeEvent } from "react";

type KeepLoggedProps = {
  remember: boolean;
  setRemember: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function KeepLogged({ remember, setRemember }: KeepLoggedProps) {
  return (
    <div className="flex flex-row items-center justify-between gap-2 w-full">
      <label htmlFor="remember">Manter Conectado?</label>
      <input
        type="checkbox"
        name="remember"
        id="remember"
        className="cursor-pointer w-5 h-5"
        checked={remember}
        onChange={setRemember}
      />
    </div>
  );
}
