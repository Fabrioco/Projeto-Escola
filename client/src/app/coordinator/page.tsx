"use client"; // Depois vou pôr no componente correto
import { LogOutButton } from "@/components/logOutButton";
import ProtectedRoute from "@/routes/protectedRoute";
import { AttributionDisciplineForm } from "@/ui/CoordinatorPage/AttribuitionDisciplineForm";
import { ClassForm } from "@/ui/CoordinatorPage/ClassForm/ClassForm";
import { CoordinatorForm } from "@/ui/CoordinatorPage/CoordinatorForm";
import { DisciplineForm } from "@/ui/CoordinatorPage/DisciplineForm";
import { StudentForm } from "@/ui/CoordinatorPage/StudentForm";
import { TeacherForm } from "@/ui/CoordinatorPage/TeacherForm";

export default function CoordinatorPage() {
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
