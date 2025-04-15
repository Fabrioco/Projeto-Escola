import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ConflictException } from "@nestjs/common";
import { SchedulesService } from "./schedules.service";
import { CreateScheduleDto } from "./dto/create-schedule.dto";
import { UpdateScheduleDto } from "./dto/update-schedule.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";
import { Roles } from "src/auth/roles.decorator";

@Controller("schedules")
@UseGuards(AuthGuard, RolesGuard)
@Roles("admin")
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  create(@Body() createScheduleDto: CreateScheduleDto) {
    if (!createScheduleDto.startTime || !createScheduleDto.endTime) throw new ConflictException("Preencha todos os campos");
    return this.schedulesService.create(createScheduleDto);
  }

  @Get()
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    if (!id) throw new ConflictException("O campo id nao pode ser vazio");
    return this.schedulesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return this.schedulesService.update(+id, updateScheduleDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    if (!id) throw new ConflictException("O campo id nao pode ser vazio");
    return this.schedulesService.remove(+id);
  }
}
