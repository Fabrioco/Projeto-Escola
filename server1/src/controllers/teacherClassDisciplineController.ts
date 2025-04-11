import { Request, Response } from "express";
import TeacherClassDisciplineServices from "../services/teacherClassDiscipline";

class TeacherClassDisciplineController {
  async createTeacherClassDiscipline(req: Request, res: Response) {
    const { teacher_id, class_id, discipline_id, time_id, admin } = req.body;
    if (!admin) {
      return res.status(500).json({ error: "Acesso negado" });
    }
    if (!teacher_id || !class_id || !discipline_id || !time_id) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }

    try {
      const teacherClassDiscipline =
        await TeacherClassDisciplineServices.createTeacherClassDiscipline(
          teacher_id,
          class_id,
          discipline_id,
          time_id
        );
      res.status(201).json(teacherClassDiscipline);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getAllTeacherClassDisciplines(req: Request, res: Response) {
    try {
      const teacherClassDisciplines =
        await TeacherClassDisciplineServices.getAllTeacherClassDisciplines();
      res.status(200).json(teacherClassDisciplines);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getTeacherClassDisciplineById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const teacherClassDiscipline =
        await TeacherClassDisciplineServices.getTeacherClassDisciplineById(
          Number(id)
        );
      res.status(200).json(teacherClassDiscipline);
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async deleteTeacherClassDiscipline(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await TeacherClassDisciplineServices.deleteTeacherClassDiscipline(
        Number(id)
      );
      res.status(200).json({ message: "Turma deletada com sucesso" });
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async updateTeacherClassDiscipline(req: Request, res: Response) {
    const { id } = req.params;
    const { teacher_id, class_id, discipline_id, time_id } = req.body;
    try {
      await TeacherClassDisciplineServices.updateTeacherClassDiscipline(
        Number(id),
        teacher_id,
        class_id,
        discipline_id,
        time_id
      );
      res.status(200).json({ message: "Turma atualizada com sucesso" });
    } catch (error) {
      res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new TeacherClassDisciplineController();
