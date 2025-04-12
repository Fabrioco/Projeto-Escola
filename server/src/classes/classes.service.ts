import { ConflictException, Injectable } from "@nestjs/common";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Class } from "./entities/class.entity";
import { Repository } from "typeorm";
import { Student } from "src/students/entities/student.entity";

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,

    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
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

  async findAll() {
    try {
      const classes = await this.classRepository.find();
      return classes;
    } catch (error) {
      return error;
    }
  }

  async findClassById(id: number) {
    return await this.classRepository.findOne({ where: { id } });
  }

  async findAllStudentByClassId(id: number) {
    return await this.studentRepository.find({ where: { class_id: id } });
  }

  async updateClass(id: number, updateClassDto: UpdateClassDto) {
    return await this.classRepository.update(id, updateClassDto);
  }

  async remove(id: number) {
    return await this.classRepository.delete(id);
  }
}
