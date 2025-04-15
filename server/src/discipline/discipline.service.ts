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
      if (!discipline) throw new NotFoundException("Disciplina não encontrada");
      return discipline;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateDisciplineDto: UpdateDisciplineDto): Promise<string> {
    try {
      const findDiscipline = await this.disciplineRepository.findOneBy({ id });
      if (!findDiscipline) throw new NotFoundException("Disciplina não encontrada");
      await this.disciplineRepository.update(id, updateDisciplineDto);
      return "Disciplina atualizada com sucesso";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const findDiscipline = await this.disciplineRepository.findOneBy({ id });
      if (!findDiscipline) throw new NotFoundException("Disciplina não encontrada");
      await this.disciplineRepository.delete(id);
      return "Disciplina excluída com sucesso";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(error);
    }
  }
}
