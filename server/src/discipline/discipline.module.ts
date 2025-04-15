import { Module } from "@nestjs/common";
import { DisciplineService } from "./discipline.service";
import { DisciplineController } from "./discipline.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Discipline } from "./entities/discipline.entity";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forFeature([Discipline]),
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [DisciplineController],
  providers: [DisciplineService],
})
export class DisciplineModule {}
