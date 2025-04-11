import Express, { Request, Response } from "express";
import studentController from "../controllers/studentController";

const routerStudent = Express.Router();

routerStudent.get("/", (req: Request, res: Response) => {
  studentController.getStudents(req, res);
});

routerStudent.get("/:id", (req: Request, res: Response) => {
  studentController.getStudent(req, res);
});

routerStudent.put("/:id", (req: Request, res: Response) => {
  studentController.updateStudent(req, res);
});

routerStudent.delete("/:id", (req: Request, res: Response) => {
  studentController.deleteStudent(req, res);
});

routerStudent.post("/logout", (req: Request, res: Response) => {
  studentController.logOut(req, res);
});

export default routerStudent;
