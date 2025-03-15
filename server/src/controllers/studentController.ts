import { Request, Response } from "express";
import AuthServices from "../services/authServices";

class StudentController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Preencha todos os campos",
      });
    }

    try {
      // Chama o serviço de autenticação
      const student = await AuthServices.signInStudents(email, password);

      // Retorna a resposta
      return res.status(200).json(student);
    } catch (error) {
      // Trata erros
      return res.status(401).json({
        // Se tem o type Error, vai retornar o erro especifico, senão "Erro desconhecido"
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new StudentController();
