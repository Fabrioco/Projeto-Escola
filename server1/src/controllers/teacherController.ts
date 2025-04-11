import { Request, Response } from "express";
import AuthServices from "../services/authServices";
import TeacherServices from "../services/teacherServices";

class TeacherController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password, keepLogged } = req.body;
    if (!email || !password) {
      res.status(500).json({
        message: "Preencha todos os campos!",
      });
    }

    try {
      const teacher = await AuthServices.sigInTeachers({
        email,
        password,
        keepLogged,
      });
      return res.status(200).json({
        teacher,
      });
    } catch (error) {
      return res.json(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

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

  async logOut(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({ message: "Logout efetuado com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getTeachers(req: Request, res: Response): Promise<Response> {
    try {
      const teachers = await TeacherServices.getAllTeachers();
      return res.status(200).json(teachers);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getTeacher(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const teacher = await TeacherServices.getTeacherById(Number(id));
      return res.status(200).json(teacher);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async updateTeacher(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
      const teacher = await TeacherServices.updateTeacher(
        Number(id),
        name,
        email
      );
      return res.status(200).json(teacher);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async deleteTeacher(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const teacher = await TeacherServices.deleteTeacher(Number(id));
      return res.status(200).json(teacher);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new TeacherController();
