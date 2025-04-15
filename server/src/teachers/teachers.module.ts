import { Module } from "@nestjs/common";
import { TeachersService } from "./teachers.service";
import { TeachersController } from "./teachers.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Teacher } from "./entities/teacher.entity";
import { JwtModule } from "@nestjs/jwt";
import { Attribution } from "src/attribution/entities/attribution.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Teacher, Attribution]),
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [TeachersController],
  providers: [TeachersService],
})
export class TeachersModule {}
