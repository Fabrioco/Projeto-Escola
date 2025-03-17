import express, { Request, Response } from "express";
import studentController from "../controllers/studentController";

const routerAuth = express.Router();

// Rota de login
routerAuth.post("/login", (req: Request, res: Response) => {
  studentController.login(req, res);
});


export default routerAuth;
