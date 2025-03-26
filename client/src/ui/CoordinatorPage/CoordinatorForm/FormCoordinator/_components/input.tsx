import { useCoordinator } from "@/contexts/coordinatorContext";
import React from "react";

export function InputPasswordCoordinator() {
  const { password, setPassword, edit } = useCoordinator();
  return (
    <div>
      <label htmlFor="passwordCoordinator">Senha</label>
      <input
        type="password"
        id="passwordCoordinator"
        name="passwordCoordinator"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={edit}
        className="disabled:cursor-not-allowed"
      />
    </div>
  );
}
