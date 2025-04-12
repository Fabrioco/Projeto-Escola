import * as jwt from "jsonwebtoken";
import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Coordinator } from "src/coordinators/entities/coordinator.entity";
import { Student } from "src/students/entities/student.entity";
import { Repository } from "typeorm";
import { SigninAuthDto } from "./dto/signin-auth";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Coordinator)
    private authRepository: Repository<Coordinator>,

    @InjectRepository(Student)
    private studentRepository: Repository<Student>,

    private jwtService: JwtService,
  ) {}

  async signIn(createAuthDto: SigninAuthDto) {
    if (createAuthDto.role === "student") {
      const student = await this.studentRepository.findOne({
        where: { email: createAuthDto.email },
      });
      if (!student) {
        throw new ConflictException("Estudante não encontrado");
      }
      const token = await this.jwtService.signAsync({ id: student.id, role: "student" });
      return { token };
    } else if (createAuthDto.role === "coordinator") {
      const coordinator = await this.authRepository.findOne({
        where: { email: createAuthDto.email },
      });
      if (!coordinator) {
        throw new ConflictException("Coordenador não encontrado");
      }
      const token = await this.jwtService.signAsync({ id: coordinator.id, role: "coordinator" });
      console.log(this.jwtService.decode(token));
      return { token };
    }
  }

  findUserByRoleAndId({ role, id }: { role: string; id: number }) {
    if (role === "student") return this.studentRepository.findOne({ where: { id } });
    if (role === "coordinator") return this.authRepository.findOne({ where: { id } });
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
