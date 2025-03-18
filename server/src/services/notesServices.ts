import Notes from "../models/notesModel";

class NotesServices {
  static async createNote(
    note: string,
    student_id: number,
    discipline_id: number
  ) {
    const newNote = await Notes.create({ note, student_id, discipline_id });
    return newNote;
  }

  static async getAllNotes() {
    const notes = await Notes.findAll();
    return notes;
  }

  static async getNoteById(id: number) {
    const note = await Notes.findByPk(id);
    return note;
  }

  static async updateNote(id: number, note: string) {
    const updatedNote = await Notes.update({ note }, { where: { id } });
    return updatedNote;
  }
}

export default NotesServices;
