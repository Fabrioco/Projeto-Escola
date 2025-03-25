import TeacherClassDiscipline from "../models/teacherClassDisciplineModel";
import Teacher from "../models/teacherModel";

class TeacherServices {
  static async getAllTeachers() {
    try {
      const teachers = await Teacher.findAll({});
      return teachers;
    } catch (error) {
      return error;
    }
  }

  static async getTeacherById(id: number) {
    try {
      const teacher = await Teacher.findByPk(id);
      return teacher;
    } catch (error) {
      return error;
    }
  }

  static async updateTeacher(id: number, name: string, email: string) {
    try {
      const teacher = await Teacher.update({ name, email }, { where: { id } });
      return teacher;
    } catch (error) {
      return error;
    }
  }

  static async deleteTeacher(id: number) {
    try {
      await TeacherClassDiscipline.update(
        { teacher_id: null },
        { where: { teacher_id: id } }
      );
      const teacher = await Teacher.destroy({ where: { id } });
      return teacher;
    } catch (error) {
      return error;
    }
  }
}

export default TeacherServices;
