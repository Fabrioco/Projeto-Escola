import { Request, Response } from "express";
import AuthServices from "../services/authServices";

class StudentController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password, keepLogged } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "Preencha todos os campos",
      });
    }

    try {
      // Chama o serviço de autenticação
      const student = await AuthServices.signInStudents({
        email,
        password,
        keepLogged,
      });

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

  async createStudent(req: Request, res: Response): Promise<Response> {
    const { name, email, password, class_id, period } = req.body;
    if (!name || !email || !password || !class_id || !period) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }
    try {
      const student = await AuthServices.signUpStudent({
        name,
        email,
        password,
        class_id,
        period,
      });
      return res.status(201).json(student);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new StudentController();
