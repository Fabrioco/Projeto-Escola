import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateAttributionDto } from "./dto/create-attribution.dto";
import { UpdateAttributionDto } from "./dto/update-attribution.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Attribution } from "./entities/attribution.entity";
import { Repository } from "typeorm";
import { Teacher } from "src/teachers/entities/teacher.entity";
import { Discipline } from "src/discipline/entities/discipline.entity";
import { Class } from "src/classes/entities/class.entity";
import { Schedule } from "src/schedules/entities/schedule.entity";

@Injectable()
export class AttributionService {
  constructor(
    @InjectRepository(Attribution) private attributionRepository: Repository<Attribution>,
    @InjectRepository(Class) private classRepository: Repository<Class>,
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
    @InjectRepository(Discipline) private disciplineRepository: Repository<Discipline>,
    @InjectRepository(Schedule) private scheduleRepository: Repository<Schedule>,
  ) {}
  async create(createAttributionDto: CreateAttributionDto): Promise<string> {
    try {
      const findAttribution = await this.attributionRepository.find({
        where: { teacher_id: createAttributionDto.teacher_id, class_id: createAttributionDto.class_id, discipline_id: createAttributionDto.discipline_id },
      });

      if (findAttribution.length > 0) {
        throw new ConflictException("Atribuição já cadastrada");
      }

      const findTeacher = await this.teacherRepository.findOneBy({ id: createAttributionDto.teacher_id });
      if (!findTeacher) {
        throw new ConflictException("Professor nao encontrado");
      }

      const findClass = await this.classRepository.findOneBy({ id: createAttributionDto.class_id });
      if (!findClass) {
        throw new ConflictException("Turma nao encontrada");
      }

      const findDiscipline = await this.disciplineRepository.findOneBy({ id: createAttributionDto.discipline_id });
      if (!findDiscipline) {
        throw new ConflictException("Disciplina nao encontrada");
      }

      const findSchedule = await this.scheduleRepository.findOneBy({ id: createAttributionDto.schedule_id });
      if (!findSchedule) {
        throw new ConflictException("Horario nao encontrado");
      }

      const attribution = this.attributionRepository.create(createAttributionDto);
      await this.attributionRepository.save(attribution);
      return "Atribuição cadastrada com sucesso";
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all attribution`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attribution`;
  }

  update(id: number, updateAttributionDto: UpdateAttributionDto) {
    return `This action updates a #${id} attribution`;
  }

  remove(id: number) {
    return `This action removes a #${id} attribution`;
  }
}
