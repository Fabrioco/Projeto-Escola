import { Class } from "src/classes/entities/class.entity";
import { Note } from "src/notes/entities/note.entity";
import { Presence } from "src/presences/entities/presence.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

  @Column({ default: "student" })
  role: string;

  @ManyToOne(() => Class, classEntity => classEntity.students)
  @JoinColumn({ name: "class_id" })
  class: Class | null;

  @Column({ nullable: true })
  class_id?: number | null;

  @OneToMany(() => Note, note => note.students)
  notes: Note[];

  @OneToMany(() => Presence, presence => presence.student)
  presences: Presence[];
}
