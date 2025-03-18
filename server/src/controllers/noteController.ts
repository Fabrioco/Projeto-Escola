import { Request, Response } from "express";
import NotesServices from "../services/notesServices";

class NoteController {
  async getAllNotes(req: Request, res: Response) {
    const notes = await NotesServices.getAllNotes();
    res.status(200).json(notes);
  }

  async getNoteById(req: Request, res: Response) {
    const { id } = req.params;
    const note = await NotesServices.getNoteById(Number(id));
    res.status(200).json(note);
  }

  async createNote(req: Request, res: Response) {
    const { note, student_id, discipline_id } = req.body;
    const newNote = await NotesServices.createNote(
      student_id,
      discipline_id,
      note
    );
    res.status(201).json(newNote);
  }

  async updateNote(req: Request, res: Response) {
    const { id } = req.params;
    const { note } = req.body;
    const updatedNote = await NotesServices.updateNote(Number(id), note);
    res.status(200).json(updatedNote);
  }

  async deleteNote(req: Request, res: Response) {
    const { id } = req.params;
    const deletedNote = await NotesServices.deleteNote(Number(id));
    res.status(200).json(deletedNote);
  }
}

export default new NoteController();
