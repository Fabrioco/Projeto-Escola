import { Module } from "@nestjs/common";
import { ClassesService } from "./classes.service";
import { ClassesController } from "./classes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Class } from "./entities/class.entity";
import { JwtModule } from "@nestjs/jwt";
import { Student } from "src/students/entities/student.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Class, Student]),
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [ClassesController],
  providers: [ClassesService],
})
export class ClassesModule {}
