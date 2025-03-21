import { Request, Response } from "express";
import ScheduleServices from "../services/scheduleServices";

class ScheduleController {
  async createSchedule(req: Request, res: Response) {
    try {
      await ScheduleServices.createSchedule(req.body.time);
      return res.status(201).json({ message: "Horário criado com sucesso" });
    } catch (error) {
      return res.status(400).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new ScheduleController();
