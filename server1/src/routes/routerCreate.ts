import Express, { Request, Response } from "express";
import studentController from "../controllers/studentController";
import teacherController from "../controllers/teacherController";
import coordinatorController from "../controllers/coordinatorController";

const routerCreate = Express.Router();

// Rota para criar alunos
routerCreate.post("/student", (req: Request, res: Response) => {
  studentController.createStudent(req, res);
});

routerCreate.post("/teacher", (req: Request, res: Response) => {
  teacherController.createTeacher(req, res);
});

routerCreate.post("/coordinator", (req: Request, res: Response) => {
  coordinatorController.createCoordinator(req, res);
});

export default routerCreate;
