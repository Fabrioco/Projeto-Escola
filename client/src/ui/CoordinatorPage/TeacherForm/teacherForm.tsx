import React from "react";
import { FormTeacher } from "./FormTeacher/form";
import { ButtonClearFormTeacher } from "./_components/buttonClear";
import { TableTeacher } from "./TableTeacher/table";

export function TeacherForm() {

  return (
    <div>
      <h1>Professores</h1>

      <FormTeacher />

      <div>
        <ButtonClearFormTeacher />
      </div>

      <TableTeacher />
    </div>
  );
}
