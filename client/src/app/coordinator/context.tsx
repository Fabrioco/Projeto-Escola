import { AttributionDisciplineProvider } from "@/contexts/attributionDisciplineContext";
import { ClassProvider } from "@/contexts/classContext";
import { CoordinatorProvider } from "@/contexts/coordinatorContext";
import { DisciplineProvider } from "@/contexts/disciplineContext";
import { ScheduleProvider } from "@/contexts/scheduleContext";
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
            <DisciplineProvider>
              <ScheduleProvider>
                <AttributionDisciplineProvider>
                  {children}
                </AttributionDisciplineProvider>
              </ScheduleProvider>
            </DisciplineProvider>
          </CoordinatorProvider>
        </TeacherProvider>
      </StudentProvider>
    </ClassProvider>
  );
};
