import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, UseGuards } from "@nestjs/common";
import { ClassesService } from "./classes.service";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("classes")
@UseGuards(AuthGuard)
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {}

  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    if (!createClassDto.name || !createClassDto.grade || !createClassDto.period) {
      throw new ConflictException("Preencha todos os campos");
    }
    return this.classesService.create(createClassDto);
  }

  @Get()
  findAll() {
    return this.classesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.classesService.findClassById(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateClassDto: UpdateClassDto) {
    return this.classesService.update(+id, updateClassDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.classesService.remove(+id);
  }
}
