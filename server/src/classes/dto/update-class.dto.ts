import { PartialType } from "@nestjs/mapped-types";
import { CreateClassDto } from "./create-class.dto";

export class UpdateClassDto extends PartialType(CreateClassDto) {
  name?: string | undefined;
  grade?: string | undefined;
  period?: string | undefined;
}
