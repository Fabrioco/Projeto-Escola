import { Module } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { NotesController } from "./notes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from "./entities/note.entity";
import { Student } from "src/students/entities/student.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Discipline } from "src/discipline/entities/discipline.entity";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "src/auth/auth.guard";

@Module({
  imports: [
    TypeOrmModule.forFeature([Note, Discipline, Teacher, Student, AuthGuard]),
    JwtModule.register({
      secret: "secret",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
