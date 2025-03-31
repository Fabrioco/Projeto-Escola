"use client";
import { LogOutButton } from "@/components/logOutButton";
import ProtectedRoute from "@/routes/protectedRoute";
import { AttributionDisciplineForm } from "@/ui/CoordinatorPage/AttributionDisciplineForm/AttribuitionDisciplineForm";
import { ClassForm } from "@/ui/CoordinatorPage/ClassForm/ClassForm";
import { CoordinatorForm } from "@/ui/CoordinatorPage/CoordinatorForm/CoordinatorForm";
import { DisciplineForm } from "@/ui/CoordinatorPage/DisciplineForm/DisciplineForm";
import { StudentForm } from "@/ui/CoordinatorPage/StudentForm/StudentForm";
import { TeacherForm } from "@/ui/CoordinatorPage/TeacherForm/teacherForm";
import { ContextsCoordinatorPage } from "./context";
import { ScheduleForm } from "@/ui/CoordinatorPage/ScheduleForm/scheduleForm";

export default function CoordinatorPage() {
  return (
    <ProtectedRoute>
      <ContextsCoordinatorPage>
        <ClassForm />
        <StudentForm />
        <TeacherForm />
        <CoordinatorForm />
        <DisciplineForm />
        <ScheduleForm />
        <AttributionDisciplineForm />
        <LogOutButton />
      </ContextsCoordinatorPage>
    </ProtectedRoute>
  );
}
