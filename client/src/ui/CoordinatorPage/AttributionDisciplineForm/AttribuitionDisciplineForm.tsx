import { FormAttribution } from "./FormAttribution/form";
import { TableAttribution } from "./TableAttribution/table";

export function AttributionDisciplineForm() {
  return (
    <div>
      <h1>Atribuir disciplina</h1>
      <FormAttribution />
      <TableAttribution />
    </div>
  );
}
