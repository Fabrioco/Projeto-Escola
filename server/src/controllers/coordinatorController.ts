import { Request, Response } from "express";
import AuthServices from "../services/authServices";

class CoordinatorController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password, keepLogged } = req.body;
    if (!email || !password) {
      return res.status(500).json({
        error: "Preencha todos os campos!",
      });
    }

    try {
      const token = await AuthServices.signInCoordinator({
        email,
        password,
        keepLogged,
      });
      return res.status(200).json({
        token,
      });
    } catch (error: any) {
      return res.status(500).json({
        error: error.message || "Erro desconhecido",
      });
    }
  }

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

  async logOut(req: Request, res: Response): Promise<Response> {
    try {
      return res.status(200).json({ error: "Logout efetuado com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new CoordinatorController();
