"use client";

import { useAuth } from "@/contexts/authContext";

export function LogOutButton() {
  const { logOut } = useAuth();

  function handleLogout() {
    logOut();
  }

  return (
    <button
      className="bg-red-400 hover:bg-red-600 text-white text-sm py-1 px-2 rounded-full"
      type="button"
      onClick={handleLogout}
    >
      Sair
    </button>
  );
}
