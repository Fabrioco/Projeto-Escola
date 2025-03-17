import bcrypt from "bcrypt";
import {
  signInStudentsProps,
  SignUpStudentProps,
} from "../interfaces/authInterface";
import Student from "../models/student";
import { hashedPassword } from "../utils/verifyPasswordUtils";
import { generateToken } from "../utils/tokenUtils";
import { hashPassword } from "../utils/hashPassword";

class AuthServices {
  static async signInStudents({
    email,
    password,
    keepLogged,
  }: signInStudentsProps) {
    // Busca o aluno pelo e-mail
    const student = await Student.findOne({ where: { email } });
    if (!student) {
      throw new Error("E-mail não cadastrado");
    }

    // Verifica a senha
    hashedPassword(password, student.password);

    const token = generateToken(student.id, true);

    // Retorna os dados do aluno e o token
    return {
      id: student.id,
      name: student.name,
      email: student.email,
      token,
    };
  }

  static async sigInTeachers(email: string, password: string) {}

  static async signUpStudent({
    name,
    email,
    password,
    class_id,
    period,
  }: SignUpStudentProps) {
    const verifyEmail = await Student.findOne({ where: { email } });
    if (verifyEmail) {
      throw new Error("Esse email já está cadastrado!");
    }

    const hashedPassword = await hashPassword(password);

    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
      class_id,
      period,
    });
    return student;
  }
}

export default AuthServices;
