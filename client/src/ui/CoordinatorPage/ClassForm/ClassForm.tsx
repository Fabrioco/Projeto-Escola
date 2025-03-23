import { SelectClass } from "./_components/Form/_components/selectClass";
import { Form } from "./_components/Form/form";
import { NavButtons } from "./_components/navButtons";

export function ClassForm() {
  return (
    <div className="bg-white w-11/12 md:w-1/2 xl:w-1/3 min-h-[400px] rounded-xl border border-blue-950 shadow-md mt-4 p-2 flex flex-col items-center justify-around">
      <h1 className="text-2xl font-semibold uppercase text-blue-950">Turmas</h1>

      <SelectClass />

      <NavButtons />

      <Form />
    </div>
  );
}
