import Express, { Request, Response } from "express";
import presenceController from "../controllers/presenceController";

const routerPresence = Express.Router();

routerPresence.get("/", (req: Request, res: Response) => {
  presenceController.getAllPresences(req, res);
});

routerPresence.get("/:id", (req: Request, res: Response) => {
  presenceController.getPresenceById(req, res);
});

routerPresence.post("/", (req: Request, res: Response) => {
  presenceController.createPresence(req, res);
});

routerPresence.put("/:id", (req: Request, res: Response) => {
  presenceController.updatePresence(req, res);
});

routerPresence.delete("/:id", (req: Request, res: Response) => {
  presenceController.deletePresence(req, res);
});

export default routerPresence;
