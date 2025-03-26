import React from "react";
import { FormCoordinator } from "./FormCoordinator/Form";
import { ButtonClearFormCoordinator } from "./_components/button";
import { TableCoordinator } from "./TableCoordinator/table";

export function CoordinatorForm() {
  return (
    <div>
      <h1>Coordenadores</h1>
      <FormCoordinator />
      <ButtonClearFormCoordinator />
      <TableCoordinator />
    </div>
  );
}
