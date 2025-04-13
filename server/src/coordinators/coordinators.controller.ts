import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { CoordinatorsService } from "./coordinators.service";
import { CreateCoordinatorDto } from "./dto/create-coordinator.dto";
import { UpdateCoordinatorDto } from "./dto/update-coordinator.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { Roles } from "src/auth/roles.decorator";
import { RolesGuard } from "src/auth/roles.guard";

@Controller("coordinators")
@UseGuards(AuthGuard, RolesGuard)
@Roles("coordinator")
export class CoordinatorsController {
  constructor(private readonly coordinatorsService: CoordinatorsService) {}

  @Post()
  @Roles("coordinator")
  create(@Body() createCoordinatorDto: CreateCoordinatorDto) {
    return this.coordinatorsService.create(createCoordinatorDto);
  }

  @Get()
  findAll() {
    return this.coordinatorsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.coordinatorsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateCoordinatorDto: UpdateCoordinatorDto) {
    return this.coordinatorsService.update(+id, updateCoordinatorDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.coordinatorsService.remove(+id);
  }
}
