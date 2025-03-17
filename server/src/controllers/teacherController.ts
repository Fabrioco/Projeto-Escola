import { Request, Response } from "express";
import AuthServices from "../services/authServices";

class TeacherController {
  async createTeacher(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(500).json({
        message: "Preencha todos os campos!",
      });
    }
    try {
      const teacher = await AuthServices.signUpTeachers({
        name,
        email,
        password,
      });
      return res.status(201).json({
        teacher,
      });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new TeacherController();
