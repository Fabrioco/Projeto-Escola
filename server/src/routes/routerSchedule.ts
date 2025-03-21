import express, { Request, Response } from "express";
import scheduleController from "../controllers/scheduleController";

const routerSchedule = express.Router();

routerSchedule.post("/", (req: Request, res: Response) => {
  scheduleController.createSchedule(req, res);
});

export default routerSchedule;
