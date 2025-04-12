import { Module } from "@nestjs/common";
import { CoordinatorsService } from "./coordinators.service";
import { CoordinatorsController } from "./coordinators.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Coordinator } from "./entities/coordinator.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forFeature([Coordinator]),
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [CoordinatorsController],
  providers: [CoordinatorsService],
})
export class CoordinatorsModule {}
