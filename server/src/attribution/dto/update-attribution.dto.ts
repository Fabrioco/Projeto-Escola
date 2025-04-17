import { PartialType } from "@nestjs/mapped-types";
import { CreateAttributionDto } from "./create-attribution.dto";

export class UpdateAttributionDto extends PartialType(CreateAttributionDto) {
  class_id?: number | undefined;
  discipline_id?: number | undefined;
  teacher_id?: number | undefined;
}
