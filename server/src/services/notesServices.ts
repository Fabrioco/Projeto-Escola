import Notes from "../models/notesModel";

class NotesServices {
  static async createNote(
    student_id: number,
    discipline_id: number,
    note: string
  ) {
    try {
      const findNote = await Notes.findOne({
        where: { student_id, discipline_id },
      });

      if (findNote) {
        return { message: "Nota já cadastrada" };
      }

      const newNote = await Notes.create({ student_id, discipline_id, note });
      return newNote;
    } catch (error) {
      return error;
    }
  }

  static async getAllNotes() {
    try {
      const notes = await Notes.findAll();
      return notes;
    } catch (error) {
      return error;
    }
  }

  static async getNoteById(id: number) {
    try {
      const note = await Notes.findByPk(id);
      return note;
    } catch (error) {
      return error;
    }
  }

  static async updateNote(id: number, note: string) {
    try {
      const updatedNote = await Notes.update({ note }, { where: { id } });
      return updatedNote;
    } catch (error) {
      return error;
    }
  }

  static async deleteNote(id: number) {
    try {
      const deletedNote = await Notes.destroy({ where: { id } });
      return deletedNote;
    } catch (error) {
      return error;
    }
  }
}

export default NotesServices;
