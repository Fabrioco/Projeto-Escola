import { Module } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { NotesController } from "./notes.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from "./entities/note.entity";
import { Student } from "src/students/entities/student.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Discipline } from "src/discipline/entities/discipline.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Note, Discipline, Teacher, Student])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
