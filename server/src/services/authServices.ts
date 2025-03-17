import bcrypt from "bcrypt";
<<<<<<< Updated upstream
import jwt from "jsonwebtoken";
import Student from "../models/student";
import { AuthConfig } from "../config/authConfig";

async function hashedPassword(password: string, userPassword: string) {
  const hashPassword = await bcrypt.compare(password, userPassword);
  return !hashPassword && new Error("Senha incorreta");
}

function generateToken(userId: number, keepLogged: boolean) {
  if (!keepLogged) {
    const token = jwt.sign({ id: userId }, AuthConfig.secret, {
      expiresIn: "1d",
    });
    return token;
  }
  const token = jwt.sign({ id: userId }, AuthConfig.secret);
  return token;
}

class AuthServices {
  static async signInStudents(email: string, password: string) {
=======
import {
  signInStudentsProps,
  SignUpStudentProps,
} from "../interfaces/authInterface";
import Student from "../models/student";
import { hashedPassword } from "../utils/verifyPasswordUtils";
import { generateToken } from "../utils/tokenUtils";

class AuthServices {
  static async signInStudents({
    email,
    password,
    keepLogged,
  }: signInStudentsProps) {
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  static async sigInTeachers(email: string, password: string) {
=======
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

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
      class_id,
      period,
    });
    return student;
>>>>>>> Stashed changes
  }
}

export default AuthServices;
