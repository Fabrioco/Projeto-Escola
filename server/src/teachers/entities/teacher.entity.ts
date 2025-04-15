import { Attribution } from "src/attribution/entities/attribution.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
}
