import Student from "../models/student";
import { hashedPassword } from "../utils/passwordUtils";
import { generateToken } from "../utils/tokenUtils";

class AuthServices {
  static async signInStudents(
    email: string,
    password: string,
    keepLogged: boolean
  ) {
    // Busca o aluno pelo e-mail
    const student = await Student.findOne({ where: { email } });
    if (!student) {
      throw new Error("E-mail não cadastrado");
    }

    // Verifica a senha
    hashedPassword(password, student.password);

    // Cria o token
    const token = generateToken(student.id, keepLogged);

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
