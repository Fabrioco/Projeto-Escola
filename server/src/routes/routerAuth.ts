import express, { Request, Response } from "express";
import studentController from "../controllers/studentController";
import teacherController from "../controllers/teacherController";
import coordinatorController from "../controllers/coordinatorController";

const routerAuth = express.Router();

// Rota de login
routerAuth.post("/student/login", (req: Request, res: Response) => {
  studentController.login(req, res);
});

routerAuth.post("/teacher/login", (req: Request, res: Response) => {
  teacherController.login(req, res);
});

routerAuth.post("/coordinator/login", (req: Request, res: Response) => {
  coordinatorController.login(req, res);
});

export default routerAuth;
