import Express, { Request, Response } from "express";
import teacherController from "../controllers/teacherController";

const routerTeacher = Express.Router();

routerTeacher.get("/", (req: Request, res: Response) => {
  teacherController.getTeachers(req, res);
});

routerTeacher.get("/:id", (req: Request, res: Response) => {
  teacherController.getTeacher(req, res);
});

routerTeacher.put("/:id", (req: Request, res: Response) => {
  teacherController.updateTeacher(req, res);
});

routerTeacher.delete("/:id", (req: Request, res: Response) => {
  teacherController.deleteTeacher(req, res);
});

export default routerTeacher;