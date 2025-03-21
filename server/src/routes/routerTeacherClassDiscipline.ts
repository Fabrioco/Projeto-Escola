import Express, { Request, Response } from "express";
import teacherClassDisciplineController from "../controllers/teacherClassDisciplineController";

const routerTeacherClassDiscipline = Express.Router();

routerTeacherClassDiscipline.post("/", (req: Request, res: Response) => {
  teacherClassDisciplineController.createTeacherClassDiscipline(req, res);
});

routerTeacherClassDiscipline.get("/", (req: Request, res: Response) => {
  teacherClassDisciplineController.getAllTeacherClassDisciplines(req, res);
});

routerTeacherClassDiscipline.get("/:id", (req: Request, res: Response) => {
  teacherClassDisciplineController.getTeacherClassDisciplineById(req, res);
});

routerTeacherClassDiscipline.put("/:id", (req: Request, res: Response) => {
  teacherClassDisciplineController.updateTeacherClassDiscipline(req, res);
});

routerTeacherClassDiscipline.delete("/:id", (req: Request, res: Response) => {
  teacherClassDisciplineController.deleteTeacherClassDiscipline(req, res);
});

export default routerTeacherClassDiscipline;
