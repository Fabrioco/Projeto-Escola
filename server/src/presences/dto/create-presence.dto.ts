export class CreatePresenceDto {
  student_id: number;
  teacher_id: number;
  discipline_id: number;
  date: Date;
  presence: boolean;
}
