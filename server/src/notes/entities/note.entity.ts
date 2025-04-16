import { Discipline } from "src/discipline/entities/discipline.entity";
import { Student } from "src/students/entities/student.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Discipline, discipline => discipline.notes)
  @JoinColumn({ name: "discipline_id" })
  disciplines: Discipline;

  @ManyToOne(() => Teacher, teacher => teacher.notes)
  @JoinColumn({ name: "teacher_id" })
  teachers: Teacher;

  @ManyToOne(() => Student, student => student.notes)
  @JoinColumn({ name: "student_id" })
  students: Student;

  @Column()
  note: number;

  @Column()
  date: Date;

  @Column()
  approved: boolean;
}
