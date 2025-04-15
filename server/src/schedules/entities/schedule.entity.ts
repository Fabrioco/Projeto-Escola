import { Attribution } from "src/attribution/entities/attribution.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @OneToMany(() => Attribution, attribution => attribution.schedule)
  attributions: Attribution[];
}
