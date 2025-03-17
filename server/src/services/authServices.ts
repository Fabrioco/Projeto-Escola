import bcrypt from "bcrypt";
import {
  signInStudentsProps,
  SignUpStudentProps,
  SignUpTeacherProps,
} from "../interfaces/authInterface";
import Student from "../models/student";
import { hashedPassword } from "../utils/verifyPasswordUtils";
import { generateToken } from "../utils/tokenUtils";
import { hashPassword } from "../utils/hashPassword";
import Teacher from "../models/teacher";

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

    const token = generateToken(student.id, keepLogged);

    // Retorna os dados do aluno e o token
    return {
      student,
      token,
    };
  }

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

  static async sigInTeachers(email: string, password: string) {}

  static async signUpTeachers({ name, email, password }: SignUpTeacherProps) {
    const verifyEmail = await Teacher.findOne({ where: { email } });
    if (verifyEmail) {
      throw new Error("Email já cadastrado!");
    }

    const hashedPassword = await hashPassword(password);

    const teacher = await Teacher.create({
      name,
      email,
      password: hashedPassword,
    });
    return teacher;
  }
}

export default AuthServices;
