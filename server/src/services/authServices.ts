import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/student";
import { AuthConfig } from "../config/authConfig";

async function hashedPassword(password: string, userPassword: string) {
  const hashPassword = await bcrypt.compare(password, userPassword);
  if (!hashPassword) {
    throw new Error("Senha incorreta");
  }
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
}

export default AuthServices;
