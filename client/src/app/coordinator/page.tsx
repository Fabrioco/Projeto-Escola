"use client"; // Depois vou pôr no componente correto
import { LogOutButton } from "@/components/logOutButton";
import { useAuth } from "@/contexts/authContext";
import ProtectedRoute from "@/routes/protectedRoute";
import { AttributionDisciplineForm } from "@/ui/CoordinatorPage/AttribuitionDisciplineForm";
import { ClassForm } from "@/ui/CoordinatorPage/ClassForm";
import { CoordinatorForm } from "@/ui/CoordinatorPage/CoordinatorForm";
import { DisciplineForm } from "@/ui/CoordinatorPage/DisciplineForm";
import { StudentForm } from "@/ui/CoordinatorPage/StudentForm";
import { TeacherForm } from "@/ui/CoordinatorPage/TeacherForm";

export default function CoordinatorPage() {
  const { user } = useAuth();
  console.log(user);
  return (
    <ProtectedRoute>
      <ClassForm />
      <StudentForm />
      <TeacherForm />
      <CoordinatorForm />
      <DisciplineForm />
      <AttributionDisciplineForm />
      <LogOutButton />
    </ProtectedRoute>
  );
}
