import jwt from "jsonwebtoken";
import { AuthConfig } from "../config/authConfig";
import bcrypt from "bcrypt";
import {
  SignInCoordinator,
  signInStudentsProps,
  SignInTeacherProps,
  SignUpCoordinatorProps,
  SignUpStudentProps,
  SignUpTeacherProps,
} from "../interfaces/authInterface";
import Student from "../models/studentModel";
import { hashPassword } from "../utils/hashPassword";
import Teacher from "../models/teacherModel";
import Coordinator from "../models/coordinatorModel";
import { generateToken } from "../utils/tokenUtils";

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
    const isPasswordValid = await bcrypt.compare(password, student.password);
    if (!isPasswordValid) {
      throw new Error("Senha incorreta");
    }

    const token = generateToken(student.id, keepLogged);

    // Retorna os dados do aluno e o token
    return {
      token,
    };
  }

  static async signUpStudent({
    name,
    email,
    password,
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
    });
    return student;
  }

  static async sigInTeachers({
    email,
    password,
    keepLogged,
  }: SignInTeacherProps) {
    const teacher = await Teacher.findOne({ where: { email } });
    if (!teacher) {
      throw new Error("Email não encontrado");
    }

    const isPasswordValid = await bcrypt.compare(password, teacher.password);
    if (!isPasswordValid) {
      throw new Error("Senha incorreta");
    }

    const token = generateToken(teacher.id, keepLogged);

    return { token };
  }

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

  static async signInCoordinator({
    email,
    password,
    keepLogged,
  }: SignInCoordinator) {
    const coordinator = await Coordinator.findOne({ where: { email } });
    if (!coordinator) {
      throw new Error("Email não encontrado");
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      coordinator.password
    );
    if (!isPasswordValid) {
      throw new Error("Senha incorreta");
    }

    if (!keepLogged) {
      const token = jwt.sign({ id: coordinator.id }, AuthConfig.secret, {
        expiresIn: "1d",
      });
      return token;
    }
    const token = jwt.sign({ id: coordinator.id }, AuthConfig.secret);

    return { token };
  }

  static async signUpCoordinator({
    name,
    email,
    password,
  }: SignUpCoordinatorProps) {
    const verifyEmail = await Coordinator.findOne({ where: { email } });
    if (verifyEmail) {
      throw new Error("Email já cadastrado!");
    }

    const hashedPassword = await hashPassword(password);

    const coordinator = await Coordinator.create({
      name,
      email,
      password: hashedPassword,
    });
    return coordinator;
  }
}

export default AuthServices;
