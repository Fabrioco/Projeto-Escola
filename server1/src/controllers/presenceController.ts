import { Request, Response } from "express";
import PresenceServices from "../services/presenceServices";

class PresenceController {
  async getAllPresences(req: Request, res: Response) {
    try {
      const presences = await PresenceServices.getAllPresences();
      return res.status(200).json(presences);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getPresenceById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const presence = await PresenceServices.getPresence(Number(id));
      return res.status(200).json(presence);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async createPresence(req: Request, res: Response) {
    const { student_id, date, presence } = req.body;
    if (!student_id || !date || !presence) {
      return res.status(500).json({ error: "Preencha todos os campos" });
    }
    try {
      const present = await PresenceServices.createPresence({
        student_id,
        date,
        presence,
      });
      return res.status(201).json(present);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async deletePresence(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await PresenceServices.deletePresence(Number(id));
      return res.status(200).json({ message: "Presença deletada com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async updatePresence(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { student_id, date, presence } = req.body;
      await PresenceServices.updatePresence(Number(id), {
        student_id,
        date,
        presence,
      });
      return res
        .status(200)
        .json({ message: "Presença atualizada com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new PresenceController();
