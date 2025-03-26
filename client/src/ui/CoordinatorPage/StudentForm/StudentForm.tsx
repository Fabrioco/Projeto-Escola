"use client";

import React from "react";
import { FormStudent } from "./Form/form";
import { ButtonClear } from "./_components/buttonClear";
import { TableStudent } from "./Table/table";

export function StudentForm() {

  return (
    <div>
      <h1>Estudantes</h1>
      <FormStudent />
      <div>
        <ButtonClear />
      </div>

      <TableStudent />
    </div>
  );
}
