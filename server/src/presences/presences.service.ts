import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreatePresenceDto } from "./dto/create-presence.dto";
import { UpdatePresenceDto } from "./dto/update-presence.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Presence } from "./entities/presence.entity";
import { Repository } from "typeorm";
import { Discipline } from "src/discipline/entities/discipline.entity";
import { Student } from "src/students/entities/student.entity";
import { Teacher } from "src/teachers/entities/teacher.entity";

@Injectable()
export class PresencesService {
  constructor(
    @InjectRepository(Presence) private presenceRepository: Repository<Presence>,
    @InjectRepository(Discipline) private disciplineRepository: Repository<Discipline>,
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}
  async create(createPresenceDto: CreatePresenceDto): Promise<string> {
    try {
      const findPresence = await this.presenceRepository.findOne({
        where: {
          student_id: createPresenceDto.student_id,
          teacher_id: createPresenceDto.teacher_id,
          discipline_id: createPresenceDto.discipline_id,
          date: createPresenceDto.date,
        },
      });
      if (findPresence) {
        throw new ConflictException("Presença já cadastrada");
      }

      const findDiscipline = await this.disciplineRepository.findOne({
        where: { id: createPresenceDto.discipline_id },
      });

      if (!findDiscipline) {
        throw new ConflictException("Disciplina nao cadastrada");
      }

      const findTeacher = await this.teacherRepository.findOne({
        where: { id: createPresenceDto.teacher_id },
      });

      if (!findTeacher) {
        throw new ConflictException("Professor nao cadastrado");
      }

      const findStudent = await this.studentRepository.findOne({
        where: { id: createPresenceDto.student_id },
      });

      if (!findStudent) {
        throw new ConflictException("Aluno nao cadastrado");
      }

      createPresenceDto.date = new Date();

      const presence = this.presenceRepository.create(createPresenceDto);
      await this.presenceRepository.save(presence);
      return "Presença cadastrada com sucesso";
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try {
      const presences = await this.presenceRepository.find();
      return presences;
    } catch (error) {
      return error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} presence`;
  }

  update(id: number, updatePresenceDto: UpdatePresenceDto) {
    return `This action updates a #${id} presence`;
  }

  remove(id: number) {
    return `This action removes a #${id} presence`;
  }
}
