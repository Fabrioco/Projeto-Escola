import { Module } from "@nestjs/common";
import { CoordinatorsService } from "./coordinators.service";
import { CoordinatorsController } from "./coordinators.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coordinator } from "./entities/coordinator.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Coordinator])],
  controllers: [CoordinatorsController],
  providers: [CoordinatorsService],
})
export class CoordinatorsModule {}
