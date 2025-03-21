import express, { Request, Response } from "express";
import scheduleController from "../controllers/scheduleController";

const routerSchedule = express.Router();

routerSchedule.post("/", (req: Request, res: Response) => {
  scheduleController.createSchedule(req, res);
});

routerSchedule.get("/", (req: Request, res: Response) => {
  scheduleController.getAllSchedules(req, res);
});

routerSchedule.get("/:id", (req: Request, res: Response) => {
  scheduleController.getScheduleById(req, res);
});

routerSchedule.put("/:id", (req: Request, res: Response) => {
  scheduleController.updateSchedule(req, res);
});

routerSchedule.delete("/:id", (req: Request, res: Response) => {
  scheduleController.deleteSchedule(req, res);
});

export default routerSchedule;
