import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { Roles } from "src/auth/roles.decorator";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/auth/roles.guard";

@Controller("notes")
@UseGuards(AuthGuard, RolesGuard)
@Roles("teacher")
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.create(createNoteDto);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Roles("student")
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Patch(":id/approve")
  @Roles("coordinator")
  approve(@Param("id") id: string) {
    return this.notesService.approve(+id);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.notesService.remove(+id);
  }
}
