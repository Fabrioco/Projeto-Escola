import Express, { Request, Response } from "express";
import teacherClassDisciplineController from "../controllers/teacherClassDisciplineController";

const routerTeacherClassDiscipline = Express.Router();

routerTeacherClassDiscipline.post("/", (req: Request, res: Response) => {
  teacherClassDisciplineController.createTeacherClassDiscipline(req, res);
});

export default routerTeacherClassDiscipline;
