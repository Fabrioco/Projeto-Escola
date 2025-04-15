import { Module } from "@nestjs/common";
import { DisciplineService } from "./discipline.service";
import { DisciplineController } from "./discipline.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Discipline } from "./entities/discipline.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Discipline])],
  controllers: [DisciplineController],
  providers: [DisciplineService],
})
export class DisciplineModule {}
