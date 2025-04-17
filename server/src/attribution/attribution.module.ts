import { Module } from "@nestjs/common";
import { AttributionService } from "./attribution.service";
import { AttributionController } from "./attribution.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Attribution } from "./entities/attribution.entity";
import { Class } from "src/classes/entities/class.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Discipline } from "src/discipline/entities/discipline.entity";
import { Schedule } from "src/schedules/entities/schedule.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Attribution, Class, Teacher, Discipline, Schedule])],
  controllers: [AttributionController],
  providers: [AttributionService],
})
export class AttributionModule {}
