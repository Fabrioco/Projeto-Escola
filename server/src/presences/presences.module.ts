import { Module } from "@nestjs/common";
import { PresencesService } from "./presences.service";
import { PresencesController } from "./presences.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Presence } from "./entities/presence.entity";
import { Discipline } from "src/discipline/entities/discipline.entity";
import { Student } from "src/students/entities/student.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Presence, Discipline, Student, Teacher])],
  controllers: [PresencesController],
  providers: [PresencesService],
})
export class PresencesModule {}
