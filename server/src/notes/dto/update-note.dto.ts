import { PartialType } from "@nestjs/mapped-types";
import { CreateNoteDto } from "./create-note.dto";

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
  discipline_id?: number | undefined;
  teacher_id?: number | undefined;
  student_id?: number | undefined;
  note?: number | undefined;
  date?: Date | undefined;
  approved?: boolean | undefined;
}
