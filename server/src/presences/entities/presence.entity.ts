import { Discipline } from "src/discipline/entities/discipline.entity";
import { Student } from "src/students/entities/student.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Presence {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Teacher, teacher => teacher.presences)
  teacher: Teacher;
  @JoinColumn({ name: "teacher_id" })
  @Column()
  teacher_id: number;

  @ManyToOne(() => Discipline, discipline => discipline.presences)
  discipline: Discipline;
  @JoinColumn({ name: "discipline_id" })
  @Column()
  discipline_id: number;

  @ManyToOne(() => Student, student => student.presences)
  student: Student;
  @JoinColumn({ name: "student_id" })
  @Column()
  student_id: number;

  @Column()
  date: Date;

  @Column()
  presence: boolean;
}
