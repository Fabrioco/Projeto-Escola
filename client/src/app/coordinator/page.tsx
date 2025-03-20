"use client"; // Depois vou pôr no componente correto
import { LogOutButton } from "@/components/logOutButton";
import { useAuth } from "@/contexts/authContext";
import ProtectedRoute from "@/routes/protectedRoute";

export default function CoordinatorPage() {
  const { user } = useAuth();
  console.log(user);
  return (
    <ProtectedRoute>
      <div>teste</div>
      <h1>Olá, {user?.name}</h1>
      <LogOutButton />
    </ProtectedRoute>
  );
}
