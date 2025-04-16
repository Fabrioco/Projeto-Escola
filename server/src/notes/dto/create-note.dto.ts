export class CreateNoteDto {
  discipline_id: number;
  teacher_id: number;
  student_id: number;
  note: number;
  date: Date;
  approved: boolean;
}
