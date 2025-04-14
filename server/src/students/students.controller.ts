import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { StudentsService } from "./students.service";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { Roles } from "src/auth/roles.decorator";

@Controller("students")
@UseGuards(AuthGuard, RolesGuard)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @Roles("coordinator")
  create(@Body() createStudentDto: CreateStudentDto) {
    try {
      if (!createStudentDto.name || !createStudentDto.email || !createStudentDto.password || !createStudentDto.class_id) {
        throw new ConflictException("Preencha todos os campos");
      }
      return this.studentsService.create(createStudentDto);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Get()
  @Roles("coordinator")
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(":id")
  @Roles("coordinator")
  findOne(@Param("id") id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(":id")
  @Roles("coordinator")
  update(@Param("id") id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(+id, updateStudentDto);
  }

  @Delete(":id")
  @Roles("coordinator")
  remove(@Param("id") id: string) {
    return this.studentsService.remove(+id);
  }
}
