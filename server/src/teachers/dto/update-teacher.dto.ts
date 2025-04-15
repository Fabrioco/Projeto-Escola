import { PartialType } from "@nestjs/mapped-types";
import { CreateTeacherDto } from "./create-teacher.dto";

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
  name?: string | undefined;
  email?: string | undefined;
  password?: string | undefined;
  role?: string | undefined;
}
