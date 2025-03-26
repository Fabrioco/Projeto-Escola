import { useTeacherContext } from "@/contexts/teacherContext";
import { InputNameTeacher } from "./_components/inputName";
import { InputEmailTeacher } from "./_components/inputEmail";
import { InputPasswordTeacher } from "./_components/inputPassword";
import { ButtonTeacher } from "./_components/button";

export function FormTeacher() {
  const { edit, updateTeacher, addTeacher } = useTeacherContext();
  return (
    <form action="" onSubmit={edit ? updateTeacher : addTeacher}>
      <InputNameTeacher />
      <InputEmailTeacher />
      <InputPasswordTeacher />

      <ButtonTeacher />
    </form>
  );
}
