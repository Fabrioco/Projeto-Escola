import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { Student } from "./entities/student.entity";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private UserRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<string> {
    try {
      const verifyEmail = await this.UserRepository.findOne({ where: { email: createStudentDto.email } });
      if (verifyEmail) {
        throw new ConflictException("Email já cadastrado");
      }

      const hashPassword = await bcrypt.hash(createStudentDto.password, 10);

      const student = await this.UserRepository.create({ ...createStudentDto, password: hashPassword });
      await this.UserRepository.save(student);

      return "Cadastro realizado com sucesso";
    } catch (error) {
      throw new ConflictException(error);
    }
  }
  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
