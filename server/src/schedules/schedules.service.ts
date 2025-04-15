import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateScheduleDto } from "./dto/create-schedule.dto";
import { UpdateScheduleDto } from "./dto/update-schedule.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Schedule } from "./entities/schedule.entity";
import { Repository } from "typeorm";

@Injectable()
export class SchedulesService {
  constructor(@InjectRepository(Schedule) private scheduleRepository: Repository<Schedule>) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<string> {
    try {
      const findSchedule = await this.scheduleRepository.findOne({ where: { startTime: createScheduleDto.startTime, endTime: createScheduleDto.endTime } });
      if (findSchedule) {
        throw new ConflictException("Horário já cadastrado");
      }

      const newSchedule = await this.scheduleRepository.create(createScheduleDto);
      await this.scheduleRepository.save(newSchedule);
      return "Horário cadastrado com sucesso";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Falha ao cadastrar o horário", { cause: error, description: "Verifique os dados e tente novamente" });
    }
  }

  async findAll(): Promise<Schedule[]> {
    try {
      return await this.scheduleRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number): Promise<Schedule> {
    try {
      const schedule = await this.scheduleRepository.findOne({ where: { id } });
      if (!schedule) {
        throw new NotFoundException("Horário nao encontrado");
      }
      return schedule;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto): Promise<string> {
    try {
      const schedule = await this.scheduleRepository.findOne({ where: { id } });
      if (!schedule) {
        throw new NotFoundException("Horário nao encontrado");
      }

      await this.scheduleRepository.update(id, updateScheduleDto);
      return "Horário atualizado com sucesso";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Falha ao atualizar o horário", { cause: error, description: "Verifique os dados e tente novamente" });
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const result = await this.scheduleRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException("Horário nao encontrado");
      }
      return "Horário removido com sucesso";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Falha ao remover o horário", { cause: error, description: "Verifique os dados e tente novamente" });
    }
  }
}
