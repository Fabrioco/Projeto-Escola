import { ClassProvider } from "@/contexts/classContext";
import { CoordinatorProvider } from "@/contexts/coordinatorContext";
import { DisciplineProvider } from "@/contexts/DisciplineContext";
import { StudentProvider } from "@/contexts/studentContext";
import { TeacherProvider } from "@/contexts/teacherContext";
import React from "react";

export const ContextsCoordinatorPage: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ClassProvider>
      <StudentProvider>
        <TeacherProvider>
          <CoordinatorProvider>
            <DisciplineProvider>{children}</DisciplineProvider>
          </CoordinatorProvider>
        </TeacherProvider>
      </StudentProvider>
    </ClassProvider>
  );
};
