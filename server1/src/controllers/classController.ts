import { Request, Response } from "express";
import ClassServices from "../services/classServices";

class ClassController {
  async createClass(req: Request, res: Response) {
    try {
      const { name, grade, period, admin } = req.body;
      if (!admin) {
        return res.status(500).json({ error: "Acesso negado" });
      }
      if (!name || !grade || !period) {
        return res.status(500).json({ error: "Preencha todos os campos" });
      }

      await ClassServices.createClass({ name, grade, period });
      return res.status(201).json({ message: "Turma criada com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getAllClasses(req: Request, res: Response) {
    try {
      const classes = await ClassServices.getAllClasses();
      return res.status(200).json(classes);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getClassById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const classById = await ClassServices.getClassById(Number(id));
      return res.status(200).json(classById);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async updateClass(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, grade, period } = req.body;
      const updatedClass = await ClassServices.updateClass(Number(id), {
        name,
        grade,
        period,
      });
      return res
        .status(200)
        .json({ message: "Turma atualizada com sucesso", updatedClass });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async deleteClass(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedClass = await ClassServices.deleteClass(Number(id));
      return res
        .status(200)
        .json({ message: "Turma deletada com sucesso", deletedClass });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new ClassController();
