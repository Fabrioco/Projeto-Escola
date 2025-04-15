import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { DisciplineService } from "./discipline.service";
import { CreateDisciplineDto } from "./dto/create-discipline.dto";
import { UpdateDisciplineDto } from "./dto/update-discipline.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { Roles } from "src/auth/roles.decorator";

@Controller("discipline")
@UseGuards(AuthGuard, RolesGuard)
@Roles("coordinator")
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Post()
  create(@Body() createDisciplineDto: CreateDisciplineDto) {
    return this.disciplineService.create(createDisciplineDto);
  }

  @Get()
  findAll() {
    return this.disciplineService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.disciplineService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDisciplineDto: UpdateDisciplineDto) {
    return this.disciplineService.update(+id, updateDisciplineDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.disciplineService.remove(+id);
  }
}
