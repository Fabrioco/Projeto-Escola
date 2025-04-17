import { Attribution } from "src/attribution/entities/attribution.entity";
import { Note } from "src/notes/entities/note.entity";
import { Presence } from "src/presences/entities/presence.entity";
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "teacher" })
  role: string;

  @OneToMany(() => Attribution, attribution => attribution.teacher)
  attributions: Attribution[];

  @OneToMany(() => Note, note => note.teachers)
  notes: Note[];

  @OneToMany(() => Presence, presence => presence.teacher)
  presences: Presence[];
}
