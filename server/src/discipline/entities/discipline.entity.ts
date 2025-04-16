import { Attribution } from "src/attribution/entities/attribution.entity";
import { Note } from "src/notes/entities/note.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discipline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Attribution, attribution => attribution.discipline)
  attributions: Attribution[];

  @OneToMany(() => Note, note => note.disciplines)
  notes: Note[];
}
