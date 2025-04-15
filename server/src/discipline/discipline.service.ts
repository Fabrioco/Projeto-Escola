import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateDisciplineDto } from "./dto/create-discipline.dto";
import { UpdateDisciplineDto } from "./dto/update-discipline.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Discipline } from "./entities/discipline.entity";
import { Repository } from "typeorm";

@Injectable()
export class DisciplineService {
  constructor(
    @InjectRepository(Discipline)
    private disciplineRepository: Repository<Discipline>,
  ) {}

  async create(createDisciplineDto: CreateDisciplineDto): Promise<string> {
    try {
      const findDiscipline = await this.disciplineRepository.findOneBy({
        name: createDisciplineDto.name,
      });
      if (findDiscipline) throw new ConflictException("Disciplina já cadastrada");

      const discipline = this.disciplineRepository.create(createDisciplineDto);
      await this.disciplineRepository.save(discipline);
      return "Disciplina cadastrada com sucesso";
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Discipline[]> {
    try {
      return await this.disciplineRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number): Promise<Discipline> {
    try {
      const discipline = await this.disciplineRepository.findOneBy({ id });
      if (!discipline) throw new NotFoundException("Disciplina nao encontrada");
      return discipline;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  update(id: number, updateDisciplineDto: UpdateDisciplineDto) {
    return `This action updates a #${id} discipline`;
  }

  remove(id: number) {
    return `This action removes a #${id} discipline`;
  }
}
