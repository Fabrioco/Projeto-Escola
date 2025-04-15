import * as bcrypt from "bcrypt";
import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateTeacherDto } from "./dto/create-teacher.dto";
import { UpdateTeacherDto } from "./dto/update-teacher.dto";
import { Teacher } from "./entities/teacher.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class TeachersService {
  constructor(@InjectRepository(Teacher) private teacherRepository: Repository<Teacher>) {}
  async create(createTeacherDto: CreateTeacherDto): Promise<string> {
    try {
      const findEmail = await this.teacherRepository.findOne({ where: { email: createTeacherDto.email } });
      if (findEmail) {
        throw new ConflictException("Email já cadastrado");
      }

      const hashedPassword = await bcrypt.hash(createTeacherDto.password, 10);

      const teacher = await this.teacherRepository.create({ ...createTeacherDto, password: hashedPassword });
      await this.teacherRepository.save(teacher);
      return "Cadastro realizado com sucesso";
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Teacher[]> {
    try {
      return await this.teacherRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findOne(id: number): Promise<Teacher> {
    try {
      const teacher = await this.teacherRepository.findOne({ where: { id } });
      if (!teacher) {
        throw new NotFoundException("Professor não encontrado");
      }
      return teacher;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<string> {
    try {
      const findEmail = await this.teacherRepository.findOne({ where: { email: updateTeacherDto.email } });
      if (!findEmail) {
        throw new ConflictException("Professor não encontrado");
      }
      return "Professor atualizado com sucesso";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Falha ao atualizar o professor", { cause: error, description: "Verifique os dados e tente novamente" });
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const result = await this.teacherRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException("Professor nao encontrado");
      }
      return "Professor removido com sucesso";
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException("Falha ao remover o professor", { cause: error, description: "Verifique os dados e tente novamente" });
    }
  }
}
