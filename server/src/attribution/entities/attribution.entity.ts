import { Discipline } from "src/discipline/entities/discipline.entity";
import { Schedule } from "src/schedules/entities/schedule.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
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

  @ManyToOne(() => Teacher, teacher => teacher.attributions)
  @JoinColumn({ name: "teacher_id" })
  teacher: Teacher;

  @Column()
  teacher_id: number;

  @ManyToOne(() => Discipline, discipline => discipline.attributions)
  @JoinColumn({ name: "discipline_id" })
  discipline: Discipline;
}
