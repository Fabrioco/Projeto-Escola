import { Request, Response } from "express";
import DisciplineServices from "../services/disciplineServices";

class DisciplineController {
  async createDiscipline(req: Request, res: Response) {
    const { name, grade } = req.body;
    if (!name || !grade) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }
    try {
      const discipline = await DisciplineServices.createDiscipline({
        name,
        grade,
      });
      return res.status(201).json(discipline);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getAllDisciplines(req: Request, res: Response) {
    try {
      const disciplines = await DisciplineServices.getAllDisciplines();
      return res.status(200).json(disciplines);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  } 

  async getDisciplineById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const discipline = await DisciplineServices.getDisciplineById(Number(id));
      return res.status(200).json(discipline);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async updateDiscipline(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, grade } = req.body;
      await DisciplineServices.updateDiscipline(Number(id), { name, grade });
      return res.status(200).json({ message: "Disciplina atualizada com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async deleteDiscipline(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await DisciplineServices.deleteDiscipline(Number(id));
      return res.status(200).json({ message: "Disciplina deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new DisciplineController();
