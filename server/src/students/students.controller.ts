import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { StudentsService } from "./students.service";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("students")
@UseGuards(AuthGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    try {
      if (createStudentDto.role !== "student") {
        throw new ConflictException("Cargo inválido");
      }
      if (!createStudentDto.name || !createStudentDto.email || !createStudentDto.password || !createStudentDto.class_id) {
        throw new ConflictException("Preencha todos os campos");
      }
      return this.studentsService.create(createStudentDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.studentsService.remove(+id);
  }
}
