import { ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { UpdateTeacherDto } from "./dto/update-teacher.dto";
import { Teacher } from "./entities/teacher.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TeachersService {
  constructor(@InjectRepository(Teacher) private teacherRepository: Repository<Teacher>) {}
  async create(createTeacherDto: CreateTeacherDto) {
    try {
      const findEmail = await this.teacherRepository.findOne({ where: { email: createTeacherDto.email } });
      if (findEmail) {
        throw new ConflictException("Email já cadastrado");
      }
      const teacher = await this.teacherRepository.create(createTeacherDto);
      await this.teacherRepository.save(teacher);
      return "Cadastro realizado com sucesso";
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll() {
    try {
      return await this.teacherRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number) {
    try {
      return await this.teacherRepository.findOne({ where: { id } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
