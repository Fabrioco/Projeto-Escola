import { StudentProps } from "./../interfaces/usersInterface";
import { Request, Response } from "express";
import AuthServices from "../services/authServices";
import StudentServices from "../services/studentServices";

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
      const student: StudentProps = await AuthServices.signInStudents({
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
      });
      return res.status(201).json(student);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getStudents(req: Request, res: Response): Promise<Response> {
    try {
      const students = await StudentServices.getStudents();
      return res.status(200).json(students);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getStudent(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const student = await StudentServices.getStudentById(Number(id));
      return res.status(200).json(student);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async updateStudent(req: Request, res: Response): Promise<Response> {
    const { name, email, password, class_id, period } = req.body;
    if (!name || !email || !password || !class_id || !period) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }
    try {
      const id = Number(req.params.id);
      const student = await StudentServices.updateStudent({
        id,
        name,
        email,
        password,
        class_id,
        period,
      });
      return res.status(200).json(student);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async deleteStudent(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const student = await StudentServices.deleteStudent(Number(id));
      return res.status(200).json(student);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async logOut(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({ message: "Logout efetuado com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new StudentController();
