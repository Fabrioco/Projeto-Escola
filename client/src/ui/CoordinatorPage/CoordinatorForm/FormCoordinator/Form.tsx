import { useCoordinator } from "@/contexts/coordinatorContext";
import {
  InputPasswordCoordinator,
} from "./_components/input";
import { InputNameCoordinator } from "./_components/inputName";
import { InputEmailCoordinator } from "./_components/inputEmail";
import { ButtonCoordinator } from "./_components/button";

export function FormCoordinator() {
  const { edit, addCoordinator, updateCoordinator } = useCoordinator();
  return (
    <form action="" onSubmit={edit ? updateCoordinator : addCoordinator}>
      <InputNameCoordinator />

      <InputEmailCoordinator />

      <InputPasswordCoordinator />

      <ButtonCoordinator />
    </form>
  );
}
