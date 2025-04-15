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

  findAll() {
    return `This action returns all schedules`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
