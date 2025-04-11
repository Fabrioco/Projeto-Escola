import Express, { Request, Response } from "express";
import noteController from "../controllers/noteController";

const routerNote = Express.Router();

routerNote.get("/", (req: Request, res: Response) => {
  noteController.getAllNotes(req, res);
});

routerNote.get("/:id", (req: Request, res: Response) => {
  noteController.getNoteById(req, res);
});

routerNote.post("/", (req: Request, res: Response) => {
  noteController.createNote(req, res);
});

routerNote.put("/:id", (req: Request, res: Response) => {
  noteController.updateNote(req, res);
});

routerNote.delete("/:id", (req: Request, res: Response) => {
  noteController.deleteNote(req, res);
});

export default routerNote;
