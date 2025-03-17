import { Request, Response } from "express";
import AuthServices from "../services/authServices";

class CoordinatorController {
  async createCoordinator(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }
    try {
      const coordinator = await AuthServices.signUpCoordinator({
        name,
        email,
        password,
      });
      return res.status(201).json(coordinator);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new CoordinatorController();
