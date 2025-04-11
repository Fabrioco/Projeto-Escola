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

  async getAllSchedules(req: Request, res: Response) {
    try {
      const schedules = await ScheduleServices.getAllSchedules();
      return res.status(200).json(schedules);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async getScheduleById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const schedule = await ScheduleServices.getSchedule(Number(id));
      return res.status(200).json(schedule);
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async deleteSchedule(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ScheduleServices.deleteSchedule(Number(id));
      return res.status(200).json({ message: "Horário deletado com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }

  async updateSchedule(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { time } = req.body;
      await ScheduleServices.updateSchedule(Number(id), time);
      return res
        .status(200)
        .json({ message: "Horário atualizado com sucesso" });
    } catch (error) {
      return res.status(500).json({
        error: error instanceof Error ? error.message : "Erro desconhecido",
      });
    }
  }
}

export default new ScheduleController();
