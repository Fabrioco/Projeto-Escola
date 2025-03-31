import TeacherClassDiscipline from "../models/teacherClassDisciplineModel";

class TeacherClassDisciplineServices {
  static async getAllTeacherClassDisciplines() {
    try {
      const teacherClassDisciplines = await TeacherClassDiscipline.findAll();
      return teacherClassDisciplines;
    } catch (error) {
      return error;
    }
  }

  static async getTeacherClassDisciplineById(id: number) {
    try {
      const teacherClassDiscipline = await TeacherClassDiscipline.findByPk(id);
      return teacherClassDiscipline;
    } catch (error) {
      return error;
    }
  }

  static async createTeacherClassDiscipline(
    teacher_id: number,
    class_id: number,
    discipline_id: number,
    time_id: number
  ) {
    try {
      const teacherClassDiscipline = await TeacherClassDiscipline.create({
        teacher_id,
        class_id,
        discipline_id,
        time_id,
      });
      return teacherClassDiscipline;
    } catch (error) {
      return error;
    }
  }

  static async deleteTeacherClassDiscipline(id: number) {
    try {
      const teacherClassDiscipline = await TeacherClassDiscipline.destroy({
        where: { id },
      });
      return teacherClassDiscipline;
    } catch (error) {
      return error;
    }
  }

  static async updateTeacherClassDiscipline(
    id: number,
    teacher_id: number,
    class_id: number,
    discipline_id: number,
    time_id: number
  ) {
    try {
      const teacherClassDiscipline = await TeacherClassDiscipline.update(
        {
          id,
          teacher_id,
          class_id,
          discipline_id,
          time_id,
        },
        { where: { id } }
      );
      return teacherClassDiscipline;
    } catch (error) {
      return error;
    }
  }
}

export default TeacherClassDisciplineServices;
