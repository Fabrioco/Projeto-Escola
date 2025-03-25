"use client";
import { LogOutButton } from "@/components/logOutButton";
import { ClassProvider } from "@/contexts/classContext";
import { StudentProvider } from "@/contexts/studentContext";
import ProtectedRoute from "@/routes/protectedRoute";
import { AttributionDisciplineForm } from "@/ui/CoordinatorPage/AttribuitionDisciplineForm";
import { ClassForm } from "@/ui/CoordinatorPage/ClassForm/ClassForm";
import { CoordinatorForm } from "@/ui/CoordinatorPage/CoordinatorForm";
import { DisciplineForm } from "@/ui/CoordinatorPage/DisciplineForm";
import { StudentForm } from "@/ui/CoordinatorPage/StudentForm/StudentForm";
import { TeacherForm } from "@/ui/CoordinatorPage/TeacherForm/teacherForm";

export default function CoordinatorPage() {
  return (
    <ProtectedRoute>
      <ClassProvider>
        <StudentProvider>
          <ClassForm />
          <StudentForm />
          <TeacherForm />
          <CoordinatorForm />
          <DisciplineForm />
          <AttributionDisciplineForm />
          <LogOutButton />
        </StudentProvider>
      </ClassProvider>
    </ProtectedRoute>
  );
}
