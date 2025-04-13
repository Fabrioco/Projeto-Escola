import { Student } from "src/students/entities/student.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  grade: string;

  @Column()
  period: string;

  @OneToMany(() => Student, student => student.class)
  students: Student[];
}
