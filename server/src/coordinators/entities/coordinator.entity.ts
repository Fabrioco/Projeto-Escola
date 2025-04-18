import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Coordinator {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: "coordinator" })
  role: string;
}
