import { Schedule } from "src/schedules/entities/schedule.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attribution {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Schedule, schedule => schedule.attributions)
  @JoinColumn({ name: "schedule_id" })
  schedule: Schedule;

  @Column()
  schedule_id: number;
}
