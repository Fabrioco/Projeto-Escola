import Express, { Request, Response } from "express";
import coordinatorController from "../controllers/coordinatorController";

const routerCoordinator = Express.Router();

routerCoordinator.get("/", (req: Request, res: Response) => {
  coordinatorController.getAllCoordinator(req, res);
});

routerCoordinator.get("/:id", (req: Request, res: Response) => {
  coordinatorController.getCoordinator(req, res);
});

routerCoordinator.post("/", (req: Request, res: Response) => {
  coordinatorController.createCoordinator(req, res);
});

routerCoordinator.put("/:id", (req: Request, res: Response) => {
  coordinatorController.updateCoordinator(req, res);
});

routerCoordinator.delete("/:id", (req: Request, res: Response) => {
  coordinatorController.deleteCoordinator(req, res);
});

routerCoordinator.post("/logout", (req: Request, res: Response) => {
  coordinatorController.logOut(req, res);
});

export default routerCoordinator;