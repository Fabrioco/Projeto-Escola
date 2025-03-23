import React from "react";

type ButtonFormProps = {
  children: React.ReactNode;
  onclick: (e: React.MouseEvent) => void;
};

export function ButtonForm({ children, onclick }: ButtonFormProps) {
  return (
    <button
      type="submit"
      onClick={onclick}
      className={`${
        children?.toString().startsWith("Remover") &&
        "bg-red-500 border-red-500 hover:bg-red-600 hover:text-white"
      } bg-green-500 px-4 py-2 rounded-md border border-green-500 text-black flex gap-2 items-center hover:bg-green-600 cursor-pointer font-semibold text-md uppercase`}
    >
      {children}
    </button>
  );
}
