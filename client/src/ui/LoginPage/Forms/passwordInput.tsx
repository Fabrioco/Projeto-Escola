"use client";
import { EyeClosed } from "@phosphor-icons/react";
import { Eye } from "@phosphor-icons/react/dist/ssr";
import React from "react";

type PasswordInputProps = {
  password: string;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordInput({ password, setPassword }: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  let typePassword: string = "password";

  if (showPassword) {
    typePassword = "text";
  } else {
    typePassword = "password";
  }

  return (
    <div className="w-full flex relative group">
      <label
        htmlFor="password"
        className={`absolute left-2 group-focus-within:top-0 group-focus-within:text-gray-500 transition-all duration-150 ease-in-out text-base group-focus-within:text-sm cursor-pointer ${
          password.length > 0
            ? "top-0 text-gray-500 text-sm"
            : "top-3 text-base"
        }`}
      >
        Senha
      </label>
      <input
        type={showPassword ? "text" : typePassword}
        name="password"
        id="password"
        className="w-full h-full focus:outline-none px-2 py-4 border border-blue-950 rounded-2xl focus:ring-blue-950 focus:border-blue-950 focus:ring-2 cursor-pointer"
        value={password}
        onChange={setPassword}
      />
      {showPassword ? (
        <Eye
          size={30}
          className="cursor-pointer absolute top-3 right-2"
          color="#162456"
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <EyeClosed
          size={30}
          className="cursor-pointer absolute top-3 right-2"
          color="#162456"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
}
