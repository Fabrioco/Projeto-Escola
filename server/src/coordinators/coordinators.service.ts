import * as bcrypt from "bcrypt";
import { ConflictException, Injectable } from "@nestjs/common";
import { CreateCoordinatorDto } from "./dto/create-coordinator.dto";
import { UpdateCoordinatorDto } from "./dto/update-coordinator.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Coordinator } from "./entities/coordinator.entity";
import { Repository } from "typeorm";

@Injectable()
export class CoordinatorsService {
  constructor(
    @InjectRepository(Coordinator)
    private coordinatorRepository: Repository<Coordinator>,
  ) {}
  async create(createCoordinatorDto: CreateCoordinatorDto): Promise<string> {
    try {
      const verifyEmail = await this.coordinatorRepository.findOne({ where: { email: createCoordinatorDto.email } });
      if (verifyEmail) {
        throw new ConflictException("Email ja cadastrado");
      }

      const hashPassword = await bcrypt.hash(createCoordinatorDto.password, 10);

      const coordinator = await this.coordinatorRepository.create({ ...createCoordinatorDto, password: hashPassword });
      await this.coordinatorRepository.save(coordinator);

      return "Cadastro realizado com sucesso";
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  findAll() {
    return `This action returns all coordinators`;
  }

  async findOne(id: number) {
    return await this.coordinatorRepository.findOne({ where: { id } });
  }

  update(id: number, updateCoordinatorDto: UpdateCoordinatorDto) {
    return `This action updates a #${id} coordinator`;
  }

  remove(id: number) {
    return `This action removes a #${id} coordinator`;
  }
}
