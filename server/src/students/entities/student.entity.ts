import { Class } from "src/classes/entities/class.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  class_id: number | null;

  @OneToMany(() => Class, classs => classs.student)
  class: Class[];
}
