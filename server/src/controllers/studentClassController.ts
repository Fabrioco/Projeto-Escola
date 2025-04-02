import { Request, Response } from "express";
import StudentClassServices from "../services/studentClassServices";

class StudentClassController {
  async create(req: Request, res: Response) {
    try {
      const { student_id, class_id } = req.body;
      const studentClass = await StudentClassServices.create(
        student_id,
        class_id
      );
      return res
        .status(201)
        .json({ message: "Aluno atribuído com sucesso", studentClass });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new StudentClassController();
