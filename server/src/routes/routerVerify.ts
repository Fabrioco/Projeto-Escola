import Express, { Request, Response } from "express";
import protectedController from "../controllers/protectedController";

const routerVerifyCoordinator = Express.Router();

routerVerifyCoordinator.get("/coordinator", (req: Request, res: Response) => {
  protectedController.verifyCoordinator(req, res);
});

export default routerVerifyCoordinator;
