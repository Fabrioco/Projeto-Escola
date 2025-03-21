import { Request, Response } from "express";
import TeacherClassDisciplineServices from "../services/teacherClassDiscipline";

class TeacherClassDisciplineController {
  async createTeacherClassDiscipline(req: Request, res: Response) {
    const { teacher_id, class_id, discipline_id, time, admin } = req.body;
    if (!admin) {
      return res.status(500).json({ error: "Acesso negado" });
    }
    if (!teacher_id || !class_id || !discipline_id || !time) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }

    try {
      const teacherClassDiscipline =
        await TeacherClassDisciplineServices.createTeacherClassDiscipline(
          teacher_id,
          class_id,
          discipline_id,
          time
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
}

export default new TeacherClassDisciplineController();
