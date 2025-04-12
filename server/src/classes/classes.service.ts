import { ConflictException, Injectable } from "@nestjs/common";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Class } from "./entities/class.entity";
import { Repository } from "typeorm";

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}
  async create(createClassDto: CreateClassDto) {
    try {
      const verifyClass = await this.classRepository.findOne({ where: { name: createClassDto.name, grade: createClassDto.grade, period: createClassDto.period } });
      if (verifyClass) {
        throw new ConflictException("Turma já cadastrada");
      }

      const newClass = await this.classRepository.create(createClassDto);
      await this.classRepository.save(newClass);

      return "Turma cadastrada com sucesso";
    } catch (error) {
      throw new ConflictException(error);
    }
  }

  findAll() {
    return `This action returns all classes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} class`;
  }

  update(id: number, updateClassDto: UpdateClassDto) {
    return `This action updates a #${id} class`;
  }

  remove(id: number) {
    return `This action removes a #${id} class`;
  }
}
