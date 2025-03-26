import React from "react";
import { FormDiscipline } from "./FormDiscipline/Form";
import { ButtonClearForm } from "./_components/buttonClearForm";
import { TableDiscipline } from "./TableDiscipline/table";

export function DisciplineForm() {
  return (
    <div>
      <h1>Matérias</h1>
      <FormDiscipline />
      <ButtonClearForm />
      <TableDiscipline />
    </div>
  );
}
