import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Note } from "./entities/note.entity";
import { Repository } from "typeorm";
import { Discipline } from "src/discipline/entities/discipline.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Student } from "src/students/entities/student.entity";

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,

    @InjectRepository(Discipline)
    private disciplineRepository: Repository<Discipline>,

    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,

    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  async create(createNoteDto: CreateNoteDto): Promise<string> {
    try {
      const findNote = await this.noteRepository.findOne({
        where: { student_id: createNoteDto.student_id, discipline_id: createNoteDto.discipline_id },
      });
      if (findNote) {
        throw new ConflictException("Nota já cadastrada");
      }

      const findDiscipline = await this.disciplineRepository.findOne({
        where: { id: createNoteDto.discipline_id },
      });

      if (!findDiscipline) {
        throw new NotFoundException("Disciplina não encontrada");
      }

      const findTeacher = await this.teacherRepository.findOne({
        where: { id: createNoteDto.teacher_id },
      });

      if (!findTeacher) {
        throw new NotFoundException("Professor não encontrado");
      }

      const findStudent = await this.studentRepository.findOne({
        where: { id: createNoteDto.student_id },
      });

      if (!findStudent) {
        throw new NotFoundException("Estudante não encontrado");
      }

      createNoteDto.date = new Date();
      createNoteDto.approved = false;

      const note = this.noteRepository.create(createNoteDto);
      await this.noteRepository.save(note);
      return "Nota cadastrada com sucesso";
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Note[]> {
    try {
      const notes = await this.noteRepository.find();
      return notes;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number): Promise<Note> {
    try {
      const note = await this.noteRepository.findOne({ where: { id } });
      if (!note) {
        throw new NotFoundException("Nota nâo encontrada");
      }
      return note;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateNoteDto: UpdateNoteDto): Promise<string> {
    try {
      updateNoteDto.date = new Date();
      await this.noteRepository.update(id, updateNoteDto);
      return "Nota atualizada com sucesso";
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async approve(id: number): Promise<string> {
    try {
      const result = await this.noteRepository.findOne({ where: { id } });
      if (!result) {
        throw new NotFoundException("Nota nâo encontrada");
      }

      await this.noteRepository.update(id, { approved: true });
      return "Nota aprovada com sucesso";
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number) {
    try {
      const result = await this.noteRepository.findOne({ where: { id } });
      if (!result) {
        throw new NotFoundException("Nota nâo encontrada");
      }
      await this.noteRepository.delete(id);
      return "Nota removida com sucesso";
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
