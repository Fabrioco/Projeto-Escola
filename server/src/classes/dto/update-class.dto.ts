import { PartialType } from "@nestjs/mapped-types";
import { CreateClassDto } from "./create-class.dto";

export class UpdateClassDto extends PartialType(CreateClassDto) {
  name?: string | undefined;
  grade?: number | undefined;
  period?: number | undefined;
}
